"use client";

import { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import { Upload, X } from "lucide-react";
const Editor = dynamic(() => import("@tinymce/tinymce-react").then(mod => mod.Editor), {
    ssr: false,
});

export default function EditBlogAdminPage() {
    const { id } = useParams();
    const router = useRouter();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [slug, setSlug] = useState("");
    const [metaTitle, setMetaTitle] = useState("");
    const [metaDescription, setMetaDescription] = useState("");
    const [currentImageUrl, setCurrentImageUrl] = useState("");
    const [currentImagePath, setCurrentImagePath] = useState("");
    const [newImageFile, setNewImageFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fileInputRef = useRef(null);

    const inputClasses =
        "w-full px-4 py-2 mb-3 border rounded-md bg-white dark:bg-black dark:text-gray-100 border-gray-300 dark:border-gray-700 focus:ring-2 hover:border-emerald-500 focus:ring-emerald-500 focus:outline-none";

    // Load existing blog data
    useEffect(() => {
        if (!id) return;
        const fetchBlog = async () => {
            const { data, error } = await supabase.from("blogs").select("*").eq("id", id).single();
            if (error) {
                setError("Blog not found.");
            } else if (data) {
                setTitle(data.title);
                setContent(data.content || "");
                setSlug(data.slug || "");
                setMetaTitle(data.meta_title || "");
                setMetaDescription(data.meta_description || "");
                setCurrentImageUrl(data.image_url || "");
                setCurrentImagePath(data.image_path || "");
            }
        };
        fetchBlog();
    }, [id]);

    const generateSlug = (text) =>
        text
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)+/g, "");

    const handleFileChange = (e) => {
        if (e.target.files?.[0]) {
            setNewImageFile(e.target.files[0]);
        }
    };

    const handleUpdate = async () => {
        setError(null);
        if (!title.trim() || !content.trim()) {
            setError("Title and content are required.");
            return;
        }
        setLoading(true);

        try {
            let imageUrl = currentImageUrl;
            let imagePath = currentImagePath;

            // Handle new image upload
            if (newImageFile) {
                if (currentImagePath) {
                    await supabase.storage.from("blog-images").remove([currentImagePath]);
                }

                const newPath = `blog_${Date.now()}_${newImageFile.name}`;
                const { error: uploadError } = await supabase.storage
                    .from("blog-images")
                    .upload(newPath, newImageFile);

                if (uploadError) throw uploadError;

                const { data: publicUrlData } = supabase.storage
                    .from("blog-images")
                    .getPublicUrl(newPath);

                imageUrl = publicUrlData.publicUrl;
                imagePath = newPath;
            }

            const finalSlug = slug.trim() ? generateSlug(slug) : generateSlug(title);

            const { error: updateError } = await supabase
                .from("blogs")
                .update({
                    title,
                    content,
                    slug: finalSlug,
                    meta_title: metaTitle,
                    meta_description: metaDescription,
                    ...(newImageFile ? { image_url: imageUrl, image_path: imagePath } : {}),
                })
                .eq("id", Number(id));

            if (updateError) throw updateError;

            router.back();
        } catch (err) {
            console.error("❌ Update failed:", err.message);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-3xl mx-auto p-6">
            <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-3 mb-5">
                <h2 className="text-2xl font-semibold text-emerald-500">Edit Blog</h2>
                <button
                    onClick={() => router.back()}
                    className="cursor-pointer text-gray-500 hover:text-red-500 transition"
                >
                    <X size={22} />
                </button>
            </div>

            {error && <p className="text-red-500 mb-3">{error}</p>}

            {/* Image Preview */}
            {newImageFile ? (
                <img
                    src={URL.createObjectURL(newImageFile)}
                    alt="New Preview"
                    className="w-full h-64 object-cover rounded mb-3"
                />
            ) : currentImageUrl ? (
                <img
                    src={currentImageUrl}
                    alt={title}
                    className="w-full h-64 object-cover rounded mb-3"
                />
            ) : null}

            {/* Upload Section */}
            <div
                className="flex justify-center items-center cursor-pointer mb-3 border border-dashed border-gray-300 dark:border-gray-700 hover:border-emerald-500 rounded-lg p-3 bg-white dark:bg-black hover:bg-gray-50 dark:hover:bg-gray-950 transition"
                onClick={() => fileInputRef.current?.click()}
            >
                <Upload className="w-6 h-6 text-emerald-500 mr-2" />
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    {newImageFile ? "New image selected" : "Drag & drop or "}
                    <span className="text-emerald-500 font-semibold">browse</span> to upload
                </p>
                <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                />
            </div>

            <input
                type="text"
                placeholder="Title"
                className={inputClasses}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            {/* ✅ TinyMCE HTML Editor */}
            <Editor
                apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY}
                value={content}
                onEditorChange={(newContent) => setContent(newContent)}
                init={{
                    height: 400,
                    menubar: false,
                    plugins: "link image code lists table preview",
                    toolbar:
                        "undo redo | styles | bold italic underline | alignleft aligncenter alignright | bullist numlist | link image | code preview",
                    content_style: "body { font-family:Inter, sans-serif; font-size:14px }",
                }}
            />

            <input
                type="text"
                placeholder="Slug (optional)"
                className={inputClasses}
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
            />

            <input
                type="text"
                placeholder="Meta Title (for SEO)"
                className={inputClasses}
                value={metaTitle}
                onChange={(e) => setMetaTitle(e.target.value)}
            />

            <textarea
                placeholder="Meta Description (for SEO)"
                className={inputClasses}
                rows={3}
                value={metaDescription}
                onChange={(e) => setMetaDescription(e.target.value)}
            />

            <div className="flex justify-end gap-2 mt-4">
                <button
                    onClick={() => router.back()}
                    className="px-4 py-2 rounded border border-gray-400 text-gray-600 hover:text-emerald-500 hover:border-emerald-500"
                >
                    Cancel
                </button>
                <button
                    onClick={handleUpdate}
                    disabled={loading}
                    className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-50"
                >
                    {loading ? "Updating..." : "Update Blog"}
                </button>
            </div>
        </div>
    );
}
