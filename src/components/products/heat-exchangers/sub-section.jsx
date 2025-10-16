"use client";

import Image from "next/image";
import cooling_tower from "@/assets/products/cooling-tower.webp";

const HeatExchangersSubSection = () => {
    return (
        <section
            id="cooling-tower"
            className="flex flex-col md:flex-row items-center gap-10 py-12 px-6 sm:px-16 rounded-2xl shadow-lg"
        >
            {/* Image */}
            <div className="flex-1">
                <div className="overflow-hidden rounded-xl shadow-md transition-transform duration-500 hover:scale-105 relative h-80 w-full">
                    <Image
                        src={cooling_tower}
                        alt="Cooling Tower"
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>
            </div>

            {/* Text */}
            <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-gray-200">
                    Cooling Towers
                </h3>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    Our cooling towers are designed for maximum heat rejection with low noise and
                    minimal energy consumption — making them ideal for industrial and HVAC
                    applications. Using corrosion-resistant materials and efficient fill media,
                    they deliver reliable performance in even the most demanding climates.
                </p>

                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    {[
                        "Fiberglass or stainless steel construction",
                        "Low-noise fan systems for minimal acoustic impact",
                        "High-efficiency PVC fill media for superior cooling",
                        "Available in single- and multi-cell configurations",
                    ].map((point, idx) => (
                        <li key={idx} className="flex items-start">
                            <span className="text-emerald-500 text-lg mr-3">❄</span>
                            {point}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default HeatExchangersSubSection;
