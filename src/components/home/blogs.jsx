"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import DOMPurify from "dompurify";

export default function HomeBlogs() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            setLoading(true);
            const { data, error } = await supabase
                .from("blogs")
                .select("*")
                .order("updated_at", { ascending: false })
                .limit(3);

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

    return (
        <section className="py-12 px-6 sm:px-12 lg:px-20 bg-gray-50 dark:bg-gray-950 transition-colors duration-500">
            {/* Header */}
            <div className="text-center mb-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    Latest Blogs
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                    Stay updated with our latest tutorials, tips, and insights.
                </p>
            </div>

            {/* Blog Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {loading ? (
                    <p className="text-gray-500 dark:text-gray-400 col-span-full text-center">
                        Loading blogs...
                    </p>
                ) : blogs.length === 0 ? (
                    <p className="text-gray-500 dark:text-gray-400 col-span-full text-center">
                        No blogs available.
                    </p>
                ) : (
                    blogs.map((blog) => (
                        <div
                            key={blog.id}
                            className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-900 hover:border-emerald-300 dark:hover:border-emerald-800 rounded-lg shadow-md overflow-hidden flex flex-col"
                        >
                            {blog.image_url && (
                                <div className="relative w-full h-48">
                                    <Image
                                        src={blog.image_url}
                                        alt={blog.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            )}

                            <div className="p-5 flex flex-col flex-1">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                    {blog.title}
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
                                    {formatDate(blog.created_at)}
                                </p>
                                <p
                                    className="text-gray-600 dark:text-gray-300 prose dark:prose-invert flex-1"
                                    dangerouslySetInnerHTML={{
                                        __html: (() => {
                                            const cleanHTML = DOMPurify.sanitize(blog.content);

                                            const tempDiv = document.createElement("div");
                                            tempDiv.innerHTML = cleanHTML;

                                            let truncatedHTML = "";
                                            let charCount = 0;

                                            function traverseNodes(node) {
                                                for (const child of node.childNodes) {
                                                    if (charCount >= 100) break;
                                                    if (child.nodeType === Node.TEXT_NODE) {
                                                        const remaining = 100 - charCount;
                                                        const text = child.textContent.slice(0, remaining);
                                                        truncatedHTML += text;
                                                        charCount += text.length;
                                                    } else if (child.nodeType === Node.ELEMENT_NODE) {
                                                        truncatedHTML += `<${child.nodeName.toLowerCase()}>`;
                                                        traverseNodes(child);
                                                        truncatedHTML += `</${child.nodeName.toLowerCase()}>`;
                                                    }
                                                }
                                            }

                                            traverseNodes(tempDiv);

                                            if (charCount >= 100) truncatedHTML += "...";

                                            return DOMPurify.sanitize(truncatedHTML);
                                        })(),
                                    }}
                                ></p>

                                <div className="mt-auto pt-4">
                                    <Link
                                        href={`/blogs/${blog.slug}`}
                                        className="flex items-center gap-1 text-emerald-500 hover:text-emerald-600 font-medium transition-colors"
                                    >
                                        Read More
                                        <ArrowRight size={20} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* More Blogs Button */}
            {!loading && blogs.length > 0 && (
                <div className="text-center mt-10">
                    <Link
                        href="/blogs"
                        className="inline-flex items-center gap-2 bg-emerald-500 text-white font-medium px-6 py-3 rounded-lg shadow-md hover:bg-emerald-600 transition-colors"
                    >
                        More Blogs
                        <ArrowRight size={20} />
                    </Link>
                </div>
            )}
        </section>
    );
}
