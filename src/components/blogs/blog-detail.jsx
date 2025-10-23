"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import Image from "next/image";

export default function BlogDetail() {
    const { slug } = useParams();
    const router = useRouter();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlog = async () => {
            setLoading(true);
            const { data, error } = await supabase
                .from("blogs")
                .select("*")
                .eq("slug", slug)
                .single();

            if (error) {
                console.error("Error fetching blog:", error.message);
            } else {
                setBlog(data);
            }
            setLoading(false);
        };

        if (slug) fetchBlog();
    }, [slug]);

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

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen text-gray-500 dark:text-gray-400">
                Loading blog...
            </div>
        );
    }

    if (!blog) {
        return (
            <div className="flex flex-col justify-center items-center h-screen text-gray-500 dark:text-gray-400">
                <p>Blog not found.</p>
                <button
                    className="mt-4 text-blue-500 hover:text-blue-600"
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
                {/* Title and Date */}
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3 text-center">
                    {blog.title}
                </h1>
                <p className="text-center text-gray-500 dark:text-gray-400 mb-8">
                    {formatDate(blog.created_at)}
                </p>

                {/* Blog Image */}
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

                {/* Blog Content */}
                <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed text-lg">
                    {blog.content}
                </div>
            </div>
        </section>
    );
}
