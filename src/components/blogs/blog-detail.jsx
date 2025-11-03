"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function BlogDetail({ blog }) {
    const router = useRouter();

    // Format date nicely
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    if (!blog) {
        return (
            <div className="flex flex-col justify-center items-center h-screen text-gray-500 dark:text-gray-400">
                <p>Blog not found.</p>
                <button
                    className="mt-4 text-emerald-500 hover:text-emerald-600"
                    onClick={() => router.push("/blogs")}
                >
                    Back to Blogs
                </button>
            </div>
        );
    }


    return (
        <section className="py-12 px-6 sm:px-12 bg-white dark:bg-black min-h-screen transition-colors duration-500">
            <div className="max-w-4xl mx-auto">
                {/* Title & Date */}
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3 text-center">
                    {blog.title}
                </h1>
                <p className="text-center text-gray-500 dark:text-gray-400 mb-8">
                    {formatDate(blog.created_at)}
                </p>

                {/* Featured Image */}
                {blog.image_url && (
                    <div className="relative max-w-3xl mx-auto h-80 sm:h-96 mb-10 rounded-lg overflow-hidden shadow-lg">
                        <Image
                            src={blog.image_url}
                            alt={blog.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                )}

                {/* ✅ Blog HTML Content */}
                <div
                    className="blog-content"
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                />

            </div>
        </section>
    );
}
