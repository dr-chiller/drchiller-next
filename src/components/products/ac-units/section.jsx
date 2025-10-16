"use client";

import Image from "next/image";
import { Fan, Wrench, RefreshCcw, Settings2 } from "lucide-react";

import ac1 from "@/assets/products/ac-units.webp";
import ac2 from "@/assets/products/ac-temperature-range.webp";
import ac3 from "@/assets/products/ac-cleaning-service.webp";
import ac4 from "@/assets/products/ac-refurbishment.webp";

const acUnitProducts = [
    {
        title: "Air Conditioning Units",
        blurb:
            "Full range of air-conditioning systems for residential, commercial and industrial applications.",
        icon: <Settings2 size={36} />,
        id: "ac",
        image: ac1,
        bullets: [
            "Split AC / Free-standing type",
            "Ductable split AC / Package AC",
            "FCU, AHU & FAHU units",
            "Electric panel AC",
        ],
    },
    {
        title: "Cooling Capacity Range",
        blurb:
            "Units available from 1.5 TR up to 25 TR to match every possible cooling requirement.",
        icon: <Fan size={36} />,
        image: ac2,
        bullets: [
            "1.5 TR – 5 TR (residential / light commercial)",
            "10 TR – 25 TR (heavy commercial / industrial)",
            "High-efficiency, reliable performance in high ambient conditions",
        ],
    },
    {
        title: "Cleaning & Service",
        blurb:
            "Complete field service for A/C systems to maintain performance and energy efficiency.",
        icon: <Wrench size={36} />,
        image: ac3,
        bullets: [
            "Water service & on-site cleaning",
            "AC duct cleaning",
            "Unit shifting & reinstallation",
        ],
    },
    {
        title: "Refurbishment & Component Replacement",
        blurb:
            "Restoration and upgrade services for aging systems to extend life and improve reliability.",
        icon: <RefreshCcw size={36} />,
        image: ac4,
        bullets: [
            "Compressor, coil and fan replacements",
            "Blower motor & compressor rewinding",
            "Retrofit options for improved efficiency",
        ],
    },
];

const ACUnitsSections = () => {
    return (
        <section className="py-12 bg-gray-100 dark:bg-gray-950 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-gray-800 dark:text-gray-200 font-bold text-3xl pb-8 text-center">
                    Air Conditioning Units
                </h2>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {acUnitProducts.map((p, i) => (
                        <article
                            id={p.id ?? ""}
                            key={i}
                            className="group bg-white dark:bg-gray-900 dark:border dark:border-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-emerald-500/50 dark:hover:border-emerald-500/80"
                        >
                            {/* Image */}
                            <div className="h-48 overflow-hidden relative">
                                <Image
                                    src={p.image}
                                    alt={p.title}
                                    fill
                                    style={{ objectFit: "cover" }}
                                    className="transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                            </div>

                            {/* Body */}
                            <div className="px-6 pb-2 pt-4 flex flex-col">
                                <div className="flex items-center gap-3 mb-2 text-emerald-600 dark:text-emerald-400">
                                    {p.icon}
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                                        {p.title}
                                    </h3>
                                </div>

                                <p className="text-gray-700 dark:text-gray-300 mb-4 mt-1">{p.blurb}</p>

                                <ul className="space-y-2 text-base text-gray-600 dark:text-gray-300 mb-6 list-disc ps-5">
                                    {p.bullets.map((b, idx) => (
                                        <li key={idx}>{b}</li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ACUnitsSections;
