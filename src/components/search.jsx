"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";
import { searchData } from "../constants/searchData";

const NavbarSearch = () => {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const router = useRouter();

    const handleSearch = (e) => {
        const q = e.target.value;
        setQuery(q);

        if (q.length > 0) {
            const filtered = searchData.filter(item =>
                item.title.toLowerCase().includes(q.toLowerCase())
            );
            setResults(filtered);
        } else {
            setResults([]);
        }
    };

    const handleSelect = (path) => {
        setQuery("");
        setResults([]);
        setOpen(false);
        router.push(path);
    };

    const handleClose = () => {
        setQuery("");
        setResults([]);
        setOpen(false);
    };

    return (
        <>
            {open && (
                <div
                    onClick={handleClose}
                    className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
                ></div>
            )}

            <div className="relative z-40">
                <button
                    onClick={() => setOpen(true)}
                    className="cursor-pointer text-emerald-500 mt-2 md:mt-0 dark:text-emerald-400 hover:text-emerald-400 dark:hover:text-emerald-500 transition"
                >
                    <Search size={20} />
                </button>

                <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition pointer-events-none">
                    Search
                </div>

                {open && (
                    <div className="absolute top-10 -right-15 sm:right-0 w-80 sm:w-86">
                        <div className="relative">
                            <input
                                type="text"
                                autoFocus
                                value={query}
                                onChange={handleSearch}
                                placeholder="Search products & services..."
                                className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 pr-8 text-sm text-gray-800 dark:text-gray-200 shadow focus:ring-emerald-400 focus:border-emerald-400 outline-none"
                            />
                            <button
                                onClick={handleClose}
                                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            >
                                <X size={16} />
                            </button>
                        </div>

                        {results.length > 0 && (
                            <ul className="mt-1 bg-white dark:bg-gray-900 rounded-md shadow-lg max-h-80 overflow-y-auto">
                                {results.map((item, i) => (
                                    <li
                                        key={i}
                                        onClick={() => handleSelect(item.path)}
                                        className="px-4 py-2 cursor-pointer hover:bg-emerald-100 dark:hover:bg-gray-800"
                                    >
                                        <span className="font-medium dark:text-gray-200">{item.title}</span>
                                        <span className="text-gray-500 dark:text-gray-400 text-sm ml-1">
                                            ({item.category})
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                )}
            </div>
        </>
    );
};

export default NavbarSearch;
