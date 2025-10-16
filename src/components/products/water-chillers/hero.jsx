"use client";

import Image from "next/image";

import water_chillers_1 from "@/assets/products/water-chiller-1.webp";
import water_chillers_2 from "@/assets/products/water-chiller-2.webp";

const WaterChillersHero = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Text Section */}
            <div>
                <p className="text-emerald-500 text-lg font-semibold mb-2">
                    Cooling That Works!
                </p>

                <h2 className="text-2xl sm:text-4xl font-bold mb-4 leading-tight dark:text-white">
                    Precision. Performance. Reliability.
                </h2>

                <p className="text-gray-700 dark:text-gray-300 mb-6">
                    Our water chillers, water coolers, and heat pumps are engineered for industrial
                    and commercial needs — combining energy efficiency with dependable performance.
                    From manufacturing plants to office spaces, we help you stay cool under pressure.
                </p>
            </div>

            {/* Images Section */}
            <div className="relative flex justify-center md:justify-end items-center pb-20">
                <div className="relative">
                    <div className="overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition duration-500 ease-out">
                        <Image
                            src={water_chillers_1}
                            alt="Water Chiller"
                            width={336}
                            height={224}
                            className="object-cover"
                        />
                    </div>

                    <div className="absolute top-36 sm:left-10 lg:-left-30 overflow-hidden rounded-2xl shadow-2xl border-2 border-gray-200 dark:border-gray-800 transform hover:scale-105 transition duration-500 ease-out">
                        <Image
                            src={water_chillers_2}
                            alt="Cooling Equipment"
                            width={256}
                            height={160}
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WaterChillersHero;
