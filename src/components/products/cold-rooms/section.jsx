"use client";

import Image from "next/image";
import { Snowflake, Package, Thermometer, Wrench, Gauge, Settings } from "lucide-react";

import cr1 from "@/assets/products/chiller-rooms.webp";
import cr2 from "@/assets/products/freezer-rooms.webp";
import cr3 from "@/assets/products/blast-freezers.webp";
import cr4 from "@/assets/products/condensers.webp";
import cr5 from "@/assets/products/cold-rooms-range.webp";
import cr6 from "@/assets/products/cold-rooms-temperature.webp";

const coldRoomProducts = [
    {
        title: "Chiller Rooms",
        blurb:
            "Ideal for fruits, vegetables, flowers, chocolates, and medicines with precise temperature control.",
        icon: <Snowflake size={40} />,
        id: "chiller-rooms",
        image: cr1,
        bullets: [
            "Maintain freshness and quality",
            "Custom sizes for different storage needs",
            "-40°C to +20°C range",
        ],
        tags: ["Chiller", "Fresh storage", "Temperature control"],
    },
    {
        title: "Freezer Rooms",
        blurb: "Designed for fish, meat, and ice cream — perfect for long-term frozen storage.",
        icon: <Package size={40} />,
        id: "freezer-rooms",
        image: cr2,
        bullets: ["Deep freezing capacity", "Energy-efficient insulation", "Food safety compliant"],
        tags: ["Freezer", "Frozen storage", "Food safety"],
    },
    {
        title: "Blast Chillers & Blast Freezers",
        blurb: "Rapid cooling and freezing solutions to preserve texture, flavor, and safety.",
        icon: <Thermometer size={40} />,
        id: "blast-chillers-and-freezers",
        image: cr3,
        bullets: [
            "Fast pull-down temperatures",
            "Ideal for bakeries, seafood, and meat processing",
            "Preserves product integrity",
        ],
        tags: ["Blast", "Fast cooling", "Processing"],
    },
    {
        title: "Condensing Units & Evaporators",
        blurb: "Reliable supply and installation for cold room systems of any scale.",
        icon: <Wrench size={40} />,
        id: "condensers-and-evaporators",
        image: cr4,
        bullets: ["Tailored to your cold storage needs", "Professional installation", "Long service life"],
        tags: ["Components", "Installation", "Reliable"],
    },
    {
        title: "Different Range of Machines",
        blurb:
            "Choose from a wide range of cold room and ice block machine models to match your capacity and budget.",
        icon: <Settings size={40} />,
        image: cr5,
        bullets: [
            "From compact units to large-scale plants",
            "Suitable for multiple industries",
            "Configurable features available",
        ],
        tags: ["Machines", "Scalable", "Custom options"],
    },
    {
        title: "Wide Temperature Range",
        blurb:
            "Our systems can reliably maintain temperatures from -40°C to +20°C for all types of storage needs.",
        icon: <Gauge size={40} />,
        image: cr6,
        bullets: ["Covers both deep freezing and chilling", "Precise digital controls", "All-season performance"],
        tags: ["Temperature", "Precision", "Versatile"],
    },
];

export default function ColdRoomsSection() {
    return (
        <section className="py-12 bg-gray-100 dark:bg-gray-950 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-gray-800 dark:text-gray-200 font-bold text-3xl pb-8 text-center">
                    Cold Rooms
                </h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {coldRoomProducts.map((p, i) => (
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
                                    style={{ objectFit: "cover" }}
                                    className="transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
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

                                {/* Tags */}
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

                                {/* Bullets */}
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
}
