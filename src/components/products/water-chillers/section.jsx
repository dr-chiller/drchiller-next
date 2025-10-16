"use client";

import Image from "next/image";
import { Snowflake, Droplets, Wrench, Gauge, AirVent } from "lucide-react";
import { MdEco } from "react-icons/md";

import wc1 from "@/assets/products/air-cooled-industrial-water-chiller.webp";
import wc2 from "@/assets/products/air-cooled-domestic-water-chiller.webp";
import wc3 from "@/assets/products/water-cooled-industrial-water-chiller.webp";
import wc4 from "@/assets/products/water-chiller-custom-made.webp";
import wc5 from "@/assets/products/water-chiller-price-range.webp";
import wc6 from "@/assets/products/water-chiller-capacity-range.webp";

const products = [
    {
        title: "Air Cooled Industrial Water Chiller",
        blurb: "Rugged, Energy-efficient chillers engineered for 24/7 industrial duty.",
        icon: <Snowflake size={40} />,
        id: "air-cooled-industrial",
        image: wc1,
        bullets: [
            "Processes: plastic injection, water-jet cutting, printing, bakery",
            "Facilities: hospitals, laundries, ice-making plants",
            "Fast pull-down with stable outlet temp control",
        ],
        cta: "/products/water-chillers#air-cooled-industrial",
        tags: ["Industrial", "Air-cooled", "High duty"],
    },
    {
        title: "Air Cooled Domestic Water Chiller",
        blurb: "Quiet, compact solutions for comfort and light-commercial cooling.",
        icon: <AirVent size={40} />,
        id: "air-cooled-domestic",
        image: wc2,
        bullets: [
            "Applications: villas, schools, labour camps, gyms, auditoriums",
            "Hotels & construction site cabins",
            "Low noise with quick install & easy service",
        ],
        cta: "/products/water-chillers#air-cooled-domestic",
        tags: ["Domestic", "Light-commercial", "Air-cooled"],
    },
    {
        title: "Water Cooled Industrial Water Chiller",
        blurb: "High efficiency where condenser water is available or seawater duty applies.",
        icon: <Droplets size={40} />,
        id: "water-cooled-industrial",
        image: wc3,
        bullets: [
            "Marine duty: boats, ships, coastal plants",
            "Ideal for sites with cooling towers or seawater loops",
            "Lower kW/TR vs air-cooled; compact footprint",
        ],
        cta: "/products/water-chillers#water-cooled-industrial",
        tags: ["Industrial", "Water-cooled", "High efficiency"],
    },
    {
        title: "Custom-Made Systems",
        blurb: "Built-to-fit units tailored to your space, load profile, and controls.",
        icon: <Wrench size={40} />,
        image: wc4,
        bullets: [
            "Footprint-optimized frames & coil geometry",
            "PLC/BMS integration, VFD pumps, twin circuits",
            "Food/Pharma compliant options available",
        ],
        cta: "/products/water-chillers#custom",
        tags: ["Custom", "Bespoke", "Integration"],
    },
    {
        title: "Economic → Premium Range",
        blurb: "From value builds to premium components for maximum lifecycle ROI.",
        icon: <MdEco size={40} />,
        image: wc5,
        bullets: [
            "Choice of compressors: scroll, screw, semi-hermetic",
            "Options: EC fans, microchannel coils, smart controls",
            "Pick by budget, efficiency target, or noise class",
        ],
        cta: "/products/water-chillers#range",
        tags: ["Budget options", "Premium", "Configurable"],
    },
    {
        title: "Wide Capacity & Temperature Range",
        blurb: "Match any load with precise temperature control across seasons.",
        icon: <Gauge size={40} />,
        image: wc6,
        specs: {
            capacity: "1.5 - 200 TR",
            temp: "-5°C to +40°C",
        },
        bullets: [
            "Cold brine, process glycol, or domestic chilled water",
            "Stable outlet temps with advanced PID logic",
            "Scalable with primary/secondary pumping",
        ],
        cta: "/products/water-chillers#capacity",
        tags: ["Scalable", "Process cooling", "Precise control"],
    },
];

export default function WaterChillersSections() {
    return (
        <section className="py-12 bg-gray-100 dark:bg-gray-950 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-gray-800 dark:text-gray-200 font-bold text-3xl pb-8 text-center">
                    Water Chillers
                </h2>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {products.map((p, i) => (
                        <article
                            id={p.id || ""}
                            key={i}
                            className="group bg-white dark:bg-gray-900 dark:border dark:border-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-emerald-500/50 dark:hover:border-emerald-500/80"
                        >
                            {/* Image */}
                            <div className="h-48 overflow-hidden relative">
                                <Image
                                    src={p.image}
                                    alt={p.title}
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
                                    {p.icon}
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                                        {p.title}
                                    </h3>
                                </div>

                                {/* Badges */}
                                {p.tags?.length > 0 && (
                                    <div className="mb-3 flex flex-wrap gap-2">
                                        {p.tags.map((t, idx) => (
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
                                <p className="text-gray-700 dark:text-gray-300 mb-4 mt-2">{p.blurb}</p>

                                {/* Specs only for Wide Capacity & Temperature Range */}
                                {p.title === "Wide Capacity & Temperature Range" && p.specs && (
                                    <div className="mb-4 grid grid-cols-2 gap-2 text-sm">
                                        <div className="rounded-lg bg-gray-100 dark:bg-gray-900/60 p-2 text-gray-700 dark:text-gray-300">
                                            <div className="opacity-70">Capacity</div>
                                            <div className="font-semibold">{p.specs.capacity}</div>
                                        </div>
                                        <div className="rounded-lg bg-gray-100 dark:bg-gray-900/60 p-2 text-gray-700 dark:text-gray-300">
                                            <div className="opacity-70">Temp</div>
                                            <div className="font-semibold">{p.specs.temp}</div>
                                        </div>
                                    </div>
                                )}

                                {/* Pointers */}
                                <ul className="space-y-2 text-base text-gray-600 dark:text-gray-300 mb-6 list-disc ps-5">
                                    {p.bullets.map((b, idx) => {
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
                    ))}
                </div>
            </div>
        </section>
    );
}
