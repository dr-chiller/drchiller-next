"use client";

import { useState, useRef } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Upload } from "lucide-react";

export default function EditBlogModal({ blog, onClose, onSave }) {
    const [title, setTitle] = useState(blog.title);
    const [content, setContent] = useState(blog.content);
    const [currentImageUrl, setCurrentImageUrl] = useState(blog.image_url || "");
    const [currentImagePath, setCurrentImagePath] = useState(blog.image_path || "");
    const [newImageFile, setNewImageFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fileInputRef = useRef(null);

    const inputClasses =
        "w-full px-4 py-2 mb-2 border rounded-md bg-white dark:bg-black dark:text-gray-100 border-gray-300 dark:border-gray-700 focus:ring-2 hover:border-emerald-500 focus:ring-emerald-500 focus:outline-none";

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

            if (newImageFile) {
                if (!currentImagePath) {
                    imagePath = `${blog.id}_${newImageFile.name}`;
                } else {
                    // Delete old image first
                    const { error: removeError } = await supabase.storage
                        .from("blog-images")
                        .remove([currentImagePath]);
                    if (removeError) console.warn("Failed to delete old image:", removeError.message);
                }

                // Upload new image to the same path
                const { error: uploadError } = await supabase.storage
                    .from("blog-images")
                    .upload(imagePath, newImageFile, { upsert: true });

                if (uploadError) throw uploadError;

                // Get public URL
                const { data: publicUrlData } = supabase.storage
                    .from("blog-images")
                    .getPublicUrl(imagePath);

                imageUrl = publicUrlData.publicUrl;
            }

            // Update blog in DB
            const { data: updatedData, error: updateError } = await supabase
                .from("blogs")
                .update({
                    title,
                    content,
                    ...(newImageFile ? { image_url: imageUrl, image_path: imagePath } : {}),
                })
                .eq("id", Number(blog.id))
                .select();

            if (updateError) throw updateError;

            console.log("✅ Blog updated:", updatedData);
            onSave();
        } catch (err) {
            console.error("❌ Update failed:", err.message);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md">
                <h3 className="text-xl font-semibold mb-4 text-emerald-500">Edit Blog</h3>

                {error && <p className="text-red-500 mb-2">{error}</p>}

                {/* Image Preview */}
                {newImageFile ? (
                    <img
                        src={URL.createObjectURL(newImageFile)}
                        alt="New Preview"
                        className="w-full h-48 object-cover rounded mb-2"
                    />
                ) : currentImageUrl ? (
                    <img
                        src={currentImageUrl}
                        alt={title}
                        className="w-full h-48 object-cover rounded mb-2"
                    />
                ) : null}

                {/* Upload */}
                <div
                    className="flex flex-row justify-center items-center cursor-pointer mb-2 border border-dashed border-gray-300 dark:border-gray-700 hover:border-emerald-500 rounded-lg p-3 bg-white dark:bg-black hover:bg-gray-50 dark:hover:bg-gray-950 transition"
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
                    className={inputClasses}
                    rows={4}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />

                {/* Buttons */}
                <div className="flex justify-end gap-2 mt-2">
                    <button
                        onClick={onClose}
                        className="cursor-pointer px-4 py-2 rounded bg-white dark:bg-black border border-gray-400 dark:border-gray-600 hover:border-emerald-500 text-gray-400 dark:text-gray-600 hover:text-emerald-500"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleUpdate}
                        disabled={loading}
                        className="cursor-pointer px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-50"
                    >
                        {loading ? "Updating..." : "Update"}
                    </button>
                </div>
            </div>
        </div>
    );
}
