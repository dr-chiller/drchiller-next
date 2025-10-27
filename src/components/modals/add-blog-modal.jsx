"use client";

import { useState, useEffect, useRef } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Upload, X } from "lucide-react";

export default function AddBlogModal({ onClose, onSave }) {
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
        else onSave();

        setLoading(false);
    };

    return (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 p-4 overflow-y-auto">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md relative flex flex-col max-h-[90vh]">
                {/* Header */}
                <h3 className="text-xl font-semibold mb-4 text-emerald-500 sticky top-0 bg-white dark:bg-gray-900 z-10 pb-2 border-b border-gray-200 dark:border-gray-700">
                    Add Blog
                </h3>

                {/* Scrollable Content */}
                <div className="overflow-y-auto pr-1 flex-1">
                    {error && <p className="text-red-500 mb-2">{error}</p>}

                    {/* Title */}
                    <input
                        type="text"
                        placeholder="Title"
                        className={inputClasses}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    {/* Content */}
                    <textarea
                        placeholder="Content"
                        className={`${inputClasses} mt-2`}
                        rows={4}
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />

                    {/* Upload Box */}
                    <div
                        onDrop={handleDrop}
                        onDragOver={(e) => e.preventDefault()}
                        className={`border-1 border-dashed rounded-md p-4 text-center mt-3 transition bg-white dark:bg-black ${imagePreview
                            ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30"
                            : "border-gray-400 dark:border-gray-700 hover:border-emerald-500 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                            }`}
                    >
                        {imagePreview ? (
                            <div className="relative">
                                <img
                                    src={imagePreview}
                                    alt="Preview"
                                    className="w-full h-48 object-cover rounded-md"
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
                        placeholder="Slug (optional — auto-generated if empty)"
                        className={`${inputClasses} mt-2`}
                        value={slug}
                        onChange={(e) => setSlug(e.target.value)}
                    />

                    {/* Meta Title */}
                    <input
                        type="text"
                        placeholder="Meta Title (for SEO)"
                        className={`${inputClasses} mt-2`}
                        value={metaTitle}
                        onChange={(e) => setMetaTitle(e.target.value)}
                    />

                    {/* Meta Description */}
                    <textarea
                        placeholder="Meta Description (for SEO)"
                        className={`${inputClasses} mt-2`}
                        rows={3}
                        value={metaDescription}
                        onChange={(e) => setMetaDescription(e.target.value)}
                    />
                </div>

                {/* Footer Buttons */}
                <div className="flex justify-end gap-2 mt-4 sticky bottom-0 bg-white dark:bg-gray-900 pt-3 border-t border-gray-200 dark:border-gray-700">
                    <button
                        onClick={onClose}
                        className="cursor-pointer px-4 py-2 rounded bg-white dark:bg-black border border-gray-400 dark:border-gray-600 hover:border-emerald-500 text-gray-400 dark:text-gray-600 hover:text-emerald-500"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleAdd}
                        disabled={loading}
                        className="cursor-pointer px-4 py-2 rounded bg-emerald-500 text-white hover:bg-emerald-600 disabled:opacity-50"
                    >
                        {loading ? "Adding..." : "Add"}
                    </button>
                </div>
            </div>
        </div>
    );
}
