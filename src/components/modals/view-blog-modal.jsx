"use client"

import Image from "next/image";
import DOMPurify from "dompurify";

export default function ViewBlogModal({ blog, onClose, onSave }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl max-w-5xl w-full mx-4 flex flex-col md:flex-row overflow-hidden">
                {/* Image Section */}
                <div className="relative md:w-1/2 h-64 md:h-auto">
                    {blog.image_url ? (
                        <Image
                            src={blog.image_url}
                            alt={blog.title}
                            fill
                            className="object-cover"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gray-200 dark:bg-gray-800 text-gray-500">
                            No Image
                        </div>
                    )}
                </div>

                {/* Content Section */}
                <div className="flex-1 p-6 md:p-8 flex flex-col">
                    <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-100">
                        {blog.title}
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                        {new Date(blog.created_at).toLocaleString()}
                    </p>
                    <div
                        className="text-gray-700 dark:text-gray-300 overflow-y-auto max-h-[60vh] pr-2 prose dark:prose-invert max-w-none"
                        dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(blog.content),
                        }}
                    ></div>


                    <div className="mt-6 flex justify-end">
                        <button
                            onClick={onClose}
                            className="cursor-pointer bg-green-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
