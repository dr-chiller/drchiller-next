"use client";

import { CheckCircle } from "lucide-react";

export default function WhyChoose({
    title,
    highlight,
    description,
    points,
    footer,
}) {
    return (
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4">
                {/* Title */}
                <h2 className="text-3xl md:text-4xl text-gray-800 dark:text-gray-200 font-bold mb-6 text-center">
                    {title}{" "}
                    <span className="text-emerald-600 dark:text-emerald-400">
                        {highlight}
                    </span>
                </h2>

                {/* Subtext */}
                <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-center mb-6 sm:mb-12">
                    {description}
                </p>

                {/* Points Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-6">
                    {points.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-start gap-3 bg-white dark:bg-gray-950 shadow-sm p-5 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 transition"
                        >
                            <CheckCircle className="text-emerald-600 w-6 h-6 flex-shrink-0" />
                            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                                {item}
                            </p>
                        </div>
                    ))}
                </div>

                {footer && (
                    <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-center mt-6 sm:mt-12">
                        {footer}
                    </p>
                )}
            </div>
        </section>
    );
}
