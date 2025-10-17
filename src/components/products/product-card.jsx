"use client";

import Image from "next/image";

export default function ProductCard({ product }) {
    return (
        <article
            id={product.id || ""}
            className="group bg-white dark:bg-gray-900 dark:border dark:border-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-emerald-500/50 dark:hover:border-emerald-500/80"
        >
            {/* Image */}
            <div className="h-48 overflow-hidden relative">
                <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
            </div>

            {/* Body */}
            <div className="px-6 pb-2 pt-4 flex flex-col">
                {/* Title + icon */}
                <div className="flex items-center gap-3 mb-2 text-emerald-600 dark:text-emerald-400">
                    {product.icon}
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        {product.title}
                    </h3>
                </div>

                {/* Tags (optional) */}
                {product.tags?.length > 0 && (
                    <div className="mb-3 flex flex-wrap gap-2">
                        {product.tags.map((t, idx) => (
                            <span
                                key={idx}
                                className="inline-block text-xs px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300"
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                )}

                {/* Blurb */}
                <p className="text-gray-700 dark:text-gray-300 mb-4 mt-2">{product.blurb}</p>

                {/* Specs (optional) */}
                {product.specs && (
                    <div className="mb-4 grid grid-cols-2 gap-2 text-sm">
                        {Object.entries(product.specs).map(([key, value]) => (
                            <div
                                key={key}
                                className="rounded-lg bg-gray-100 dark:bg-gray-900/60 p-2 text-gray-700 dark:text-gray-300"
                            >
                                <div className="opacity-70">{key.charAt(0).toUpperCase() + key.slice(1)}</div>
                                <div className="font-semibold">{value}</div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Bullets */}
                <ul className="space-y-2 text-base text-gray-600 dark:text-gray-300 mb-6 list-disc ps-5">
                    {product.bullets.map((b, idx) => {
                        const parts = b.split(":");
                        return (
                            <li key={idx}>
                                {parts.length > 1 ? (
                                    <>
                                        <strong>{parts[0]}:</strong> {parts.slice(1).join(":").trim()}
                                    </>
                                ) : (
                                    b
                                )}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </article>
    );
}
