"use client";

import Image from "next/image";
import { Layers3, Wrench, Settings, Repeat2, Thermometer } from "lucide-react";

import he1 from "@/assets/products/shell-and-tube-heat-exchangers.webp";
import he2 from "@/assets/products/titanium-heat-exchangers.webp";
import he3 from "@/assets/products/retubing-heat-exchangers.webp";
import he4 from "@/assets/products/plate-heat-exchangers.webp";
import he5 from "@/assets/products/plate-heat-exchangers-spare-parts.webp";
import he6 from "@/assets/products/heat-exchangers-custom-made.webp";

const heatExchangerProducts = [
    {
        title: "Shell & Tube Heat Exchanger",
        blurb:
            "Heavy-duty exchangers for oil cooling, process fluids and chilled-water duties.",
        icon: <Layers3 size={36} />,
        id: "shell-and-tube",
        image: he1,
        bullets: [
            "Straight or U-tube configuration",
            "Single & double pass (S/T type)",
            "Material options: SS / Copper / Titanium",
        ],
    },
    {
        title: "PP & Titanium Constructions",
        blurb:
            "Polypropylene and Titanium builds for aggressive or corrosive chemical media.",
        icon: <Thermometer size={36} />,
        id: "pp-and-titanium",
        image: he2,
        bullets: [
            "Excellent corrosion resistance",
            "Suitable for chemical and seawater duty",
            "Long service life",
        ],
    },
    {
        title: "Retubing & Refurbishment",
        blurb:
            "Re-tubing and repair services to restore exchanger performance and extend service life.",
        icon: <Repeat2 size={36} />,
        image: he3,
        bullets: [
            "Tube bundle replacements",
            "On-site leak testing",
            "Upgrades to corrosion-resistant tubes",
        ],
    },
    {
        title: "Plate Heat Exchanger (PHE)",
        blurb:
            "Compact, high-efficiency plate type exchangers for clean fluids and hygienic duties.",
        icon: <Layers3 size={36} />,
        id: "phe",
        image: he4,
        bullets: [
            "Gasketed / brazed / semi-welded types",
            "Quick plate access",
            "Ideal for food & HVAC systems",
        ],
    },
    {
        title: "PHE Service & Spare Parts",
        blurb:
            "Complete support for plate exchangers including plate, gasket & seal replacement.",
        icon: <Wrench size={36} />,
        image: he5,
        bullets: [
            "Plate inspection & cleaning",
            "Gasket replacement",
            "Leak testing and re-assembly",
        ],
    },
    {
        title: "Custom Material Options",
        blurb:
            "Heat exchangers available in SS-316L, Copper or Titanium to match your process requirements.",
        icon: <Settings size={36} />,
        image: he6,
        bullets: [
            "SS-316L for hygienic applications",
            "Copper for general chilled-water",
            "Titanium for seawater & corrosive media",
        ],
    },
];

const HeatExchangersSection = () => {
    return (
        <section className="py-12 bg-gray-100 dark:bg-gray-950 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-gray-800 dark:text-gray-200 font-bold text-3xl pb-8 text-center">
                    Heat Exchangers
                </h2>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {heatExchangerProducts.map((p, i) => (
                        <article
                            id={p.id ? p.id : ""}
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

export default HeatExchangersSection;
