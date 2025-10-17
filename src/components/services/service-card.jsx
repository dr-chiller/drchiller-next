"use client";

import Image from "next/image";

export default function ServiceCard({ item }) {
    return (
        <div
            id={item.id || ""}
            className="group bg-white dark:bg-gray-900 rounded-xl border border-transparent dark:border-gray-800
                p-3 shadow hover:shadow-lg hover:border-emerald-500/60 dark:hover:border-emerald-500/80
                transition-all"
        >
            <div className="w-full h-36 relative mb-4 rounded-md overflow-hidden">
                <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            <div className="flex items-center gap-3 mb-4 text-emerald-600 dark:text-emerald-400">
                {item.icon}
                <span className="text-lg font-semibold">{item.title}</span>
            </div>

            <p className="text-base mb-3 text-gray-700 dark:text-gray-300">
                {item.blurb}
            </p>

            <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-base">
                {item.bullets.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                        <span className="text-emerald-500">❄</span>
                        <span>{b}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
