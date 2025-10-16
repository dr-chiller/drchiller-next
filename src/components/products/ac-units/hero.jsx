"use client";

import Image from "next/image";
import ac_units_1 from "@/assets/products/ac-units-1.webp";
import ac_units_2 from "@/assets/products/ac-units-2.webp";

const ACUnitsHero = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Text */}
            <div>
                <p className="text-emerald-500 text-lg font-semibold mb-2">
                    Comfort Delivered, Every Day
                </p>

                <h2 className="text-2xl sm:text-4xl font-bold mb-4 leading-tight dark:text-white">
                    Air Conditioning Units & Systems
                </h2>

                <p className="text-gray-700 dark:text-gray-300 mb-6">
                    From compact split units to large ductable systems, our A/C range is designed to provide
                    reliable and energy-efficient cooling for villas, offices, industrial spaces and special
                    applications. Whether you need steady comfort or critical temperature control, we have
                    the right system engineered to perform in tough GCC conditions.
                </p>
            </div>

            {/* Images */}
            <div className="relative flex justify-center md:justify-end items-center pb-20 lg:pb-0">
                <div className="relative max-w-md md:max-w-lg">
                    {/* Main Image */}
                    <div className="overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition duration-500 ease-out">
                        <Image
                            src={ac_units_1}
                            alt="AC Units 1"
                            width={340}
                            height={260}
                            className="w-84 lg:w-full h-auto object-cover"
                        />
                    </div>

                    {/* Secondary Image */}
                    <div className="absolute top-36 sm:left-10 lg:-left-32 lg:top-10 overflow-hidden rounded-2xl shadow-2xl border-2 border-gray-200 dark:border-gray-800 transform hover:scale-105 transition duration-500 ease-out w-64 h-40">
                        <Image
                            src={ac_units_2}
                            alt="AC Units 2"
                            width={256}
                            height={160}
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ACUnitsHero;
