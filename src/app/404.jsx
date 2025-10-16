"use client";

import { useRouter } from "next/navigation";
import { AlertTriangle, ArrowLeftCircle, Home, Snowflake } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
    const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 text-center px-4 py-24">
            <div className="max-w-md relative">
                <Snowflake
                    size={140}
                    className="absolute md:-top-16 md:-left-16 text-emerald-500/10 animate-spin-slow pointer-events-none"
                />

                <div className="flex justify-center mb-6 text-emerald-500">
                    <AlertTriangle size={52} />
                </div>

                <h1 className="text-4xl font-extrabold mb-3 text-gray-800 dark:text-gray-200">
                    404 - Page Not Cooled!
                </h1>

                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    Uh oh… looks like this page is out of our cooling range.<br />
                    Even <span className="font-semibold text-emerald-500">Dr.Chiller</span>{" "}
                    couldn't keep it from melting <span className="text-emerald-500">❄</span>
                </p>

                <div className="flex gap-4 justify-center">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-500 transition"
                    >
                        <Home size={18} />
                        Home
                    </Link>
                    <button
                        onClick={() => router.back()}
                        className="inline-flex cursor-pointer items-center gap-2 rounded-md bg-gray-300/80 dark:bg-gray-700 px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-400 dark:hover:bg-gray-400 transition"
                    >
                        <ArrowLeftCircle size={18} />
                        Previous
                    </button>
                </div>
            </div>
        </div>
    );
}
