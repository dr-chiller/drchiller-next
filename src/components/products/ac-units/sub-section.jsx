"use client";

import Image from "next/image";
import air_curtain from "@/assets/products/air-curtain.webp";

const ACUnitsSubSection = () => {
    return (
        <section
            id="air-curtains"
            className="flex flex-col md:flex-row items-center gap-10 py-12 px-6 sm:px-16 rounded-2xl shadow-lg"
        >
            {/* Image */}
            <div className="flex-1">
                <div className="overflow-hidden rounded-xl shadow-md transition-transform duration-500 hover:scale-105 relative h-72 w-full">
                    <Image
                        src={air_curtain}
                        alt="Air Curtain"
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>
            </div>

            {/* Text */}
            <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-gray-200">
                    Air Curtains
                </h3>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    Our commercial and industrial air curtains are designed to deliver a
                    clean, conditioned indoor environment while preventing hot air, dust
                    and insects from entering through open doorways. A perfect solution
                    for energy-conscious facilities that experience frequent door
                    openings.
                </p>

                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    {[
                        "Prevents heat, dust and insects entering through open doors",
                        "Improves air conditioning efficiency by regulating conditioned air loss",
                        "Available in commercial & industrial duty models (up to 3m height)",
                        "Low-noise centrifugal fan units with easy installation",
                    ].map((point, idx) => (
                        <li key={idx} className="flex items-start">
                            <span className="text-emerald-500 text-lg mr-3">❄</span>
                            <span className="text-base">{point}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default ACUnitsSubSection;
