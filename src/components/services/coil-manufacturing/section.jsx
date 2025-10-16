"use client";

import Image from "next/image";
import { Wrench, Droplets, ShieldCheck, Repeat2 } from "lucide-react";

import coil_replace from "@/assets/services/coil-replacement.webp";
import anti_corrosion from "@/assets/services/coil-anti-corrosion-coating.webp";
import gas_recovery from "@/assets/services/coil-gas-recovery.webp";
import brazing from "@/assets/services/coil-copper-brazing.webp";
import pressure_test from "@/assets/services/coil-nitrogen-pressure-testing.webp";
import vacuum_charge from "@/assets/services/coil-scrap.webp";

const coilServices = [
    {
        title: "Coil Replacement (AC / Chiller / Cold Room)",
        image: coil_replace,
        icon: <Wrench size={32} />,
        blurb:
            "Replacement of damaged condenser and evaporator coils for chillers, ACs and cold rooms using high-efficiency copper/aluminium construction.",
        bullets: [
            "Condenser and evaporator coils",
            "On-site removal and installation",
            "Bespoke coil fabrication available",
        ],
    },
    {
        title: "Anti-Corrosion Coating",
        image: anti_corrosion,
        icon: <ShieldCheck size={32} />,
        id: "anti-corrosion-coating",
        blurb:
            "Protective coating for coils exposed to corrosive environments (coastal / industrial). Extends service life and improves performance.",
        bullets: [
            "Epoxy / hydrophilic coating",
            "High salt-spray resistance",
            "Suitable for new & existing coils",
        ],
    },
    {
        title: "Gas Recovery",
        image: gas_recovery,
        icon: <Droplets size={32} />,
        id: "gas-recovery",
        blurb:
            "Safe recovery of refrigerant gases prior to coil replacement or equipment maintenance.",
        bullets: [
            "R22 / R134a / R407c / R410a",
            "Compliant with environmental standards",
            "Re-use after filtration & charging",
        ],
    },
    {
        title: "Copper Brazing",
        image: brazing,
        icon: <Wrench size={32} />,
        id: "copper-brazing",
        blurb:
            "Professional brazing of copper tubes and joints for leak-free and long-lasting connections.",
        bullets: [
            "High-temperature oxygen-acetylene brazing",
            "Leak-proof joints",
            "Conforms to HVAC standards",
        ],
    },
    {
        title: "Nitrogen Pressure Testing",
        image: pressure_test,
        icon: <ShieldCheck size={32} />,
        blurb:
            "Leak detection using nitrogen pressurisation before charging refrigerant into the system.",
        bullets: [
            "Accurate detection of micro-leaks",
            "Ensures system integrity",
            "Recommended after coil replacement",
        ],
    },
    {
        title: "Vacuuming, Gas Charging & Coil Scrap Purchase",
        image: vacuum_charge,
        icon: <Repeat2 size={32} />,
        blurb:
            "Full commissioning after coil replacement including vacuuming and charging. We also purchase scrap coils.",
        bullets: [
            "Deep-vacuum & refrigerant charging",
            "Functional testing",
            "Scrap copper / aluminium coil buy-back",
        ],
    },
];

export default function CoilManufacturingSections() {
    return (
        <section className="py-12 bg-gray-100 dark:bg-gray-950 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-200 text-center mb-10">
                    Coil Manufacturing & Replacement Services
                </h2>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {coilServices.map((item, i) => (
                        <div
                            id={item.id ? item.id : ""}
                            key={i}
                            className="group bg-white dark:bg-gray-900 rounded-xl border border-transparent dark:border-gray-800
              p-3 shadow hover:shadow-lg hover:border-emerald-500/60 dark:hover:border-emerald-500/80 transition-all"
                        >
                            {/* Image */}
                            <div className="relative w-full h-36 rounded-md overflow-hidden mb-4">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    priority={i < 2}
                                />
                            </div>

                            {/* Title / Icon */}
                            <div className="flex items-center gap-3 mb-4 text-emerald-600 dark:text-emerald-400">
                                {item.icon}
                                <span className="text-lg font-semibold">{item.title}</span>
                            </div>

                            {/* Description */}
                            <p className="text-base mb-3 text-gray-700 dark:text-gray-300">{item.blurb}</p>

                            {/* Bullets */}
                            <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-base">
                                {item.bullets.map((b, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                        <span className="text-emerald-500">❄</span>
                                        <span>{b}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
