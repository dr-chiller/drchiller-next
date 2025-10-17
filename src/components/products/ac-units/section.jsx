"use client";

import ProductCard from "@/components/products/product-card";
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
                    {acUnitProducts.map((product, i) => (
                        <ProductCard key={i} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ACUnitsSections;
