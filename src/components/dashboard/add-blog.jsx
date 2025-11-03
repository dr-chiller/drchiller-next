"use client";

import { useState, useEffect, useRef } from "react";
import { supabase } from "@/lib/supabaseClient";
import dynamic from "next/dynamic";
import { Upload, X } from "lucide-react";
import { useRouter } from "next/navigation";
import tinymceConfig from "../../../tinymce.config";
const Editor = dynamic(() => import("@tinymce/tinymce-react").then(mod => mod.Editor), {
    ssr: false,
});

export default function AddBlogAdminPage() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [slug, setSlug] = useState("");
    const [metaTitle, setMetaTitle] = useState("");
    const [metaDescription, setMetaDescription] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [session, setSession] = useState(null);
    const fileInputRef = useRef(null);
    const router = useRouter();

    const inputClasses =
        "w-full px-4 py-2 mt-1 border rounded-md bg-white dark:bg-black dark:text-gray-100 border-gray-300 dark:border-gray-700 focus:ring-2 hover:border-emerald-500 focus:ring-emerald-500 focus:outline-none";

    useEffect(() => {
        const getSession = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            setSession(session);
        };
        getSession();

        const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });

        return () => listener.subscription.unsubscribe();
    }, []);

    const handleFileSelect = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            setImageFile(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files?.[0];
        if (file) {
            setImageFile(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handleRemoveImage = () => {
        setImageFile(null);
        setImagePreview(null);
    };

    const handleAdd = async () => {
        if (!title.trim() || !content.trim()) {
            setError("Title and content are required.");
            return;
        }

        if (!session) {
            setError("You must be logged in to add a blog.");
            return;
        }

        setLoading(true);
        setError(null);
        let imageUrl = "";
        let fileName = "";

        if (imageFile) {
            fileName = `blog_${Date.now()}_${imageFile.name}`;
            const { error: uploadError } = await supabase.storage
                .from("blog-images")
                .upload(fileName, imageFile);

            if (uploadError) {
                setError("Image upload failed: " + uploadError.message);
                setLoading(false);
                return;
            }

            const { data: publicData } = supabase.storage
                .from("blog-images")
                .getPublicUrl(fileName);

            imageUrl = publicData.publicUrl;
        }

        const generateSlug = (text) =>
            text
                .toLowerCase()
                .trim()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/(^-|-$)+/g, "");

        const finalSlug = slug.trim() ? generateSlug(slug) : generateSlug(title);

        const { error: insertError } = await supabase.from("blogs").insert([
            {
                title,
                content,
                image_url: imageUrl,
                user_id: session.user.id,
                image_path: fileName,
                slug: finalSlug,
                meta_title: metaTitle,
                meta_description: metaDescription,
            },
        ]);

        if (insertError) setError("Failed to add blog: " + insertError.message);
        else router.back();

        setLoading(false);
    };

    return (
        <div className="max-w-3xl mx-auto p-6">
            <div className="max-w-3xl mx-auto p-6">
                {/* Header */}
                <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-3 mb-5">
                    <h2 className="text-2xl font-semibold text-emerald-500">Add New Blog</h2>
                    <button
                        onClick={() => router.back()}
                        className="cursor-pointer text-gray-500 hover:text-red-500 transition"
                    >
                        <X size={22} />
                    </button>
                </div>

                {error && <p className="text-red-500 mb-2">{error}</p>}

                {/* Title */}
                <input
                    type="text"
                    placeholder="Blog Title"
                    className={`${inputClasses} mb-3`}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                {/* Content */}
                <Editor
                    apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY}
                    value={content}
                    onEditorChange={(newContent) => setContent(newContent)}
                    init={tinymceConfig}
                />

                {/* Upload Box */}
                <div
                    onDrop={handleDrop}
                    onDragOver={(e) => e.preventDefault()}
                    className={`border-1 border-dashed rounded-md p-4 text-center mt-4 transition bg-white dark:bg-black ${imagePreview
                        ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30"
                        : "border-gray-400 dark:border-gray-700 hover:border-emerald-500 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                        }`}
                >
                    {imagePreview ? (
                        <div className="relative">
                            <img
                                src={imagePreview}
                                alt="Preview"
                                className="w-full h-60 object-cover rounded-md"
                            />
                            <button
                                onClick={handleRemoveImage}
                                className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                            >
                                <X size={16} />
                            </button>
                        </div>
                    ) : (
                        <div
                            className="flex flex-row justify-center items-center cursor-pointer"
                            onClick={() => fileInputRef.current.click()}
                        >
                            <Upload className="w-6 h-6 text-emerald-500 mr-2" />
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Drag & drop or{" "}
                                <span className="text-emerald-500 font-semibold">browse</span> to
                                upload
                            </p>
                            <input
                                ref={fileInputRef}
                                type="file"
                                accept="image/*"
                                onChange={handleFileSelect}
                                className="hidden"
                            />
                        </div>
                    )}
                </div>

                {/* Slug */}
                <input
                    type="text"
                    placeholder="Slug (optional)"
                    className={`${inputClasses} mt-3`}
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                />

                {/* Meta Title */}
                <input
                    type="text"
                    placeholder="Meta Title (for SEO)"
                    className={`${inputClasses} mt-3`}
                    value={metaTitle}
                    onChange={(e) => setMetaTitle(e.target.value)}
                />

                {/* Meta Description */}
                <textarea
                    placeholder="Meta Description (for SEO)"
                    className={`${inputClasses} mt-3`}
                    rows={3}
                    value={metaDescription}
                    onChange={(e) => setMetaDescription(e.target.value)}
                />

                {/* Footer Buttons */}
                <div className="flex justify-end gap-3 mt-6 border-t border-gray-200 dark:border-gray-700 pt-4">
                    <button
                        onClick={() => router.back()}
                        className="cursor-pointer px-4 py-2 rounded border border-gray-400 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:border-emerald-500 hover:text-emerald-500 transition"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleAdd}
                        disabled={loading}
                        className="cursor-pointer px-4 py-2 rounded bg-emerald-500 text-white hover:bg-emerald-600 disabled:opacity-50 transition"
                    >
                        {loading ? "Adding..." : "Publish"}
                    </button>
                </div>
            </div>
        </div>
    );
}
