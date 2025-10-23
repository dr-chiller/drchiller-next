"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function DeleteBlogModal({ blog, onClose, onSave }) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleDelete = async () => {
        setLoading(true);
        setError(null);

        try {
            if (blog.image_path) {
                const { error: removeError } = await supabase.storage
                    .from("blog-images")
                    .remove([blog.image_path]);

                if (removeError) console.warn("⚠️ Failed to delete image:", removeError.message);
            }

            const { error: deleteError } = await supabase
                .from("blogs")
                .delete()
                .eq("id", Number(blog.id));

            if (deleteError) throw deleteError;

            console.log("✅ Blog deleted successfully!");
            onSave();
        } catch (err) {
            console.error("❌ Delete failed:", err.message);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
            <div className="bg-white dark:bg-gray-900 p-6 rounded shadow-md w-full max-w-sm">
                <h3 className="text-xl font-semibold mb-4 text-emerald-500">Delete Blog</h3>

                <p className="mb-4 text-gray-700 dark:text-gray-300">
                    Are you sure you want to delete <strong>{blog.title}</strong>?
                </p>

                {error && <p className="text-red-500 mb-2">{error}</p>}

                <div className="flex justify-end gap-2">
                    <button
                        onClick={onClose}
                        className="cursor-pointer px-4 py-2 rounded bg-white dark:bg-black border border-gray-400 dark:border-gray-600 hover:border-emerald-500 text-gray-400 dark:text-gray-600  hover:text-emerald-500"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleDelete}
                        disabled={loading}
                        className="cursor-pointer px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600 disabled:opacity-50"
                    >
                        {loading ? "Deleting..." : "Delete"}
                    </button>
                </div>
            </div>
        </div>
    );
}
