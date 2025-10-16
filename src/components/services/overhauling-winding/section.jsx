"use client";

import Image from "next/image";
import { Wrench, RefreshCcw, Repeat2 } from "lucide-react";

import semi_sealed from "@/assets/services/overhauling-semi-sealed-compressor.webp";
import oil_topup from "@/assets/services/overhauling-oil-refilling.webp";
import rewinding from "@/assets/services/overhauling-motor-winding.webp";
import used_parts from "@/assets/services/overhauling-used-fan-parts.webp";
import dismantling from "@/assets/services/overhauling-compressor-dismantling.webp";
import refurbish from "@/assets/services/overhauling-compressor-refurbishing.webp";

const overhaulingServices = [
    {
        title: "Semi-Sealed Compressor Parts Replacement",
        image: semi_sealed,
        icon: <Wrench size={32} />,
        blurb:
            "Replacement of worn-out internal components in semi-sealed compressors to restore full operational reliability.",
        bullets: ["Rotors / bearings / seals", "OEM-grade spare parts", "Quick turnaround service"],
    },
    {
        title: "3GS / 4GS Oil Top-Up & Re-Filling",
        image: oil_topup,
        icon: <RefreshCcw size={32} />,
        blurb:
            "Proper oil top-up and replacement using high-grade 3GS / 4GS oils to ensure safe compressor operation and lubrication.",
        bullets: ["Oil draining and refilling", "Suitable for all compressor types", "Prevents excessive wear"],
    },
    {
        title: "Fan & Compressor Rewinding",
        image: rewinding,
        icon: <Repeat2 size={32} />,
        blurb:
            "Rewinding of compressor and fan motors using heat-resistant insulation and high-quality copper wire.",
        bullets: ["Motor inspection and dismantle", "Re-winding and varnish treatment", "Dynamic balancing test"],
    },
    {
        title: "Used Compressor Fan Motor & Parts Supply",
        image: used_parts,
        icon: <Wrench size={32} />,
        blurb:
            "Cost-effective replacement of fan motors and compressor components from tested and verified used stock.",
        bullets: ["Refurbished OEM motors", "Budget-friendly spare parts", "Functional testing included"],
    },
    {
        title: "Compressor Dismantling Service",
        image: dismantling,
        icon: <Wrench size={32} />,
        id: "compressor-dismantling",
        blurb:
            "Professional dismantling and removal of failed compressors prior to replacement or overhaul.",
        bullets: ["Safe removal procedures", "Environmental gas recovery", "Site cleanup included"],
    },
    {
        title: "Retrofit & Refurbishment of Sealed Compressors",
        image: refurbish,
        icon: <Wrench size={32} />,
        blurb:
            "Refurbishment and retrofitting of sealed compressors to extend service life and improve performance.",
        bullets: ["Internal overhaul and testing", "Adaptation to new refrigerants", "Improved operating efficiency"],
    },
];

const OverhaulingSections = () => {
    return (
        <section className="py-12 bg-gray-100 dark:bg-gray-950 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-200 text-center mb-10">
                    Compressor Overhauling & Rewinding Services
                </h2>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {overhaulingServices.map((item, i) => (
                        <div
                            id={item.id ? item.id : ""}
                            key={i}
                            className="group bg-white dark:bg-gray-900 rounded-xl border border-transparent dark:border-gray-800
                p-3 shadow hover:shadow-lg hover:border-emerald-500/60 dark:hover:border-emerald-500/80 transition-all"
                        >
                            {/* Image */}
                            <div className="relative w-full h-36 mb-4 rounded-md overflow-hidden group-hover:scale-105 transition-transform duration-500">
                                <Image src={item.image} alt={item.title} fill className="object-cover" />
                            </div>

                            {/* Title / Icon */}
                            <div className="flex items-center gap-3 mb-3 text-emerald-600 dark:text-emerald-400">
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
};

export default OverhaulingSections;
