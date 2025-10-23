"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import AddBlogModal from "@/components/modals/add-blog-modal";
import EditBlogModal from "@/components/modals/edit-blog-modal";
import DeleteBlogModal from "@/components/modals/delete-blog-modal";
import ViewBlogModal from "../modals/view-blog-modal";
import Image from "next/image";
import { FaEdit, FaEye, FaPlus, FaSignOutAlt, FaTrash } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Pagination from "@/components/pagination";

export default function DashboardHero() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [isAddModalOpen, setAddModalOpen] = useState(false);
    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
    const [isViewModalOpen, setViewModalOpen] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 12;

    const router = useRouter();

    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) console.error("Error logging out:", error);
        else router.push("/");
    };

    const fetchBlogs = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from("blogs")
            .select("*")
            .order("created_at", { ascending: false });
        if (error) console.error("Error fetching blogs:", error);
        else setBlogs(data);
        setLoading(false);
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    // Calculate pagination
    const totalPages = Math.ceil(blogs.length / blogsPerPage);
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

    return (
        <div className="px-6 sm:px-10 lg:px-16 py-10">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
                    Blogs
                </h2>
                <div className="flex gap-1 sm:gap-3">
                    <button
                        onClick={() => setAddModalOpen(true)}
                        className="flex items-center gap-2 cursor-pointer bg-emerald-500 text-white px-2 md:px-5 py-2 rounded-lg shadow-md hover:bg-emerald-600 transition"
                    >
                        <FaPlus className="text-sm" />
                        Add Blog
                    </button>
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 cursor-pointer bg-red-500 text-white px-2 md:px-5 py-2 rounded-lg shadow-md hover:bg-red-600 transition"
                    >
                        <FaSignOutAlt className="text-sm" />
                        Logout
                    </button>
                </div>
            </div>

            {/* Blog List */}
            {loading ? (
                <p className="text-gray-500 text-center">Loading blogs...</p>
            ) : blogs.length === 0 ? (
                <p className="text-gray-500 text-center">No blogs available.</p>
            ) : (
                <>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {currentBlogs.map((blog) => (
                            <div
                                key={blog.id}
                                className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-lg shadow hover:shadow-lg transition p-2 flex flex-col"
                            >
                                {blog.image_url ? (
                                    <div className="relative w-full h-48 mb-4">
                                        <Image
                                            src={blog.image_url}
                                            alt={blog.title}
                                            fill
                                            className="object-cover rounded-md"
                                        />
                                    </div>
                                ) : (
                                    <div className="w-full h-48 bg-gray-100 dark:bg-gray-800 rounded-lg mb-4 flex items-center justify-center text-gray-400 text-sm">
                                        No Image
                                    </div>
                                )}

                                <h3 className="font-semibold text-lg mb-2 text-gray-800 dark:text-gray-100 truncate">
                                    {blog.title}
                                </h3>

                                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3 flex-grow">
                                    {blog.content}
                                </p>

                                <div className="flex justify-end gap-1 mt-4">
                                    <button
                                        onClick={() => {
                                            setSelectedBlog(blog);
                                            setViewModalOpen(true);
                                        }}
                                        className="flex items-center gap-2 cursor-pointer px-3 py-1.5 text-sm rounded-md bg-emerald-500 hover:bg-emerald-600 text-white transition"
                                    >
                                        <FaEye className="text-sm" />
                                        View
                                    </button>

                                    <button
                                        onClick={() => {
                                            setSelectedBlog(blog);
                                            setEditModalOpen(true);
                                        }}
                                        className="cursor-pointer flex items-center gap-2 px-3 py-1.5 text-sm rounded-md bg-blue-500 text-white hover:bg-blue-600 transition"
                                    >
                                        <FaEdit className="text-sm" />
                                        Edit
                                    </button>

                                    <button
                                        onClick={() => {
                                            setSelectedBlog(blog);
                                            setDeleteModalOpen(true);
                                        }}
                                        className="cursor-pointer flex items-center gap-2 px-3 py-1.5 text-sm rounded-md bg-red-500 text-white hover:bg-red-600 transition"
                                    >
                                        <FaTrash className="text-sm" />
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={(page) => setCurrentPage(page)}
                    />
                </>
            )}

            {/* Modals */}
            {isAddModalOpen && (
                <AddBlogModal
                    onClose={() => setAddModalOpen(false)}
                    onSave={() => {
                        setAddModalOpen(false);
                        fetchBlogs();
                    }}
                />
            )}

            {isEditModalOpen && selectedBlog && (
                <EditBlogModal
                    blog={selectedBlog}
                    onClose={() => setEditModalOpen(false)}
                    onSave={() => {
                        setEditModalOpen(false);
                        fetchBlogs();
                    }}
                />
            )}

            {isDeleteModalOpen && selectedBlog && (
                <DeleteBlogModal
                    blog={selectedBlog}
                    onClose={() => setDeleteModalOpen(false)}
                    onSave={() => {
                        setDeleteModalOpen(false);
                        fetchBlogs();
                    }}
                />
            )}

            {isViewModalOpen && selectedBlog && (
                <ViewBlogModal
                    blog={selectedBlog}
                    onClose={() => setViewModalOpen(false)}
                    onSave={() => {
                        setViewModalOpen(false);
                        fetchBlogs();
                    }}
                />
            )}
        </div>
    );
}
