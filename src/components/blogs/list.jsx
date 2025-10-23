"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function BlogsList() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const fetchBlogs = async () => {
            setLoading(true);
            const { data, error } = await supabase
                .from("blogs")
                .select("*")
                .order("created_at", { ascending: false });

            if (error) {
                console.error("Error fetching blogs:", error.message);
            } else {
                setBlogs(data);
            }
            setLoading(false);
        };

        fetchBlogs();
    }, []);

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

    const handleViewBlog = (slug) => {
        router.push(`/blogs/${slug}`);
    };

    return (
        <section className="py-12 px-6 sm:px-12 lg:px-20 bg-white dark:bg-black transition-colors duration-500 min-h-screen">
            <div className="text-center mb-8">
                <p className="text-gray-600 dark:text-gray-300">
                    Explore our latest tutorials, tips, and insights.
                </p>
            </div>

            {loading ? (
                <p className="text-center text-gray-500 dark:text-gray-400">Loading blogs...</p>
            ) : blogs.length === 0 ? (
                <p className="text-center text-gray-500 dark:text-gray-400">No blogs available.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogs.map((blog) => (
                        <div
                            key={blog.id}
                            className="bg-white dark:bg-gray-950 border border-gray-50 dark:border-gray-900 hover:border-emerald-300 dark:hover:border-emerald-800 rounded-lg shadow-md overflow-hidden flex flex-col hover:shadow-xl transition"
                        >
                            {blog.image_url ? (
                                <div className="relative w-full h-48">
                                    <Image src={blog.image_url} alt={blog.title} fill className="object-cover" />
                                </div>
                            ) : (
                                <div className="w-full h-48 flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-gray-500">
                                    No Image
                                </div>
                            )}

                            <div className="p-4 flex flex-col flex-1">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                                    {blog.title}
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
                                    {formatDate(blog.created_at)}
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 flex-1">
                                    {blog.content.length > 100 ? blog.content.slice(0, 100) + "..." : blog.content}
                                </p>
                                <button
                                    className="flex items-center gap-1 cursor-pointer mt-4 text-emerald-500 hover:text-emerald-600 font-medium text-left"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleViewBlog(blog.slug);
                                    }}
                                >
                                    View Blog
                                    <ArrowRight size={20}/>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}
