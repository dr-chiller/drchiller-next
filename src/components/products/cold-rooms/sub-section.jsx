"use client";

import Image from "next/image";
import ice_block_machine from "@/assets/products/ice-block-machine.webp";

const ColdRoomsSubSection = () => {
    return (
        <section
            id="ice-block-machine"
            className="flex flex-col md:flex-row items-center gap-10 py-12 px-6 sm:px-16"
        >
            {/* Image Side */}
            <div className="flex-1">
                <div className="overflow-hidden rounded-xl shadow-lg transition-transform duration-500 hover:scale-105 relative h-80 w-full">
                    <Image
                        src={ice_block_machine}
                        alt="Ice Block Machine"
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>
            </div>

            {/* Text Side */}
            <div className="flex-1">
                <h2 className="text-2xl font-bold mb-3 text-gray-800 dark:text-gray-200">
                    Ice Block Machines
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    Our advanced ice block machines are engineered for maximum efficiency,
                    unbeatable durability, and consistent performance — making them the perfect choice
                    for industrial, commercial, and hospitality applications.
                </p>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    {[
                        "High-capacity production for large-scale demands",
                        "Energy-efficient technology for cost savings",
                        "Rust-proof, food-grade stainless steel construction",
                        "Easy maintenance and user-friendly controls",
                    ].map((point, index) => (
                        <li key={index} className="flex items-start">
                            <span className="text-emerald-500 text-xl mr-3">❄</span>
                            <span className="text-base">{point}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default ColdRoomsSubSection;
