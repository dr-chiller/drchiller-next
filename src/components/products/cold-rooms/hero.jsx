"use client";

import Image from "next/image";
import cold_rooms_1 from "@/assets/products/cold-rooms-1.webp";
import cold_rooms_2 from "@/assets/products/cold-rooms-2.webp";

const ColdRoomsHero = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div>
                <p className="text-emerald-500 text-lg font-semibold mb-2">
                    Cold Storage, Perfectly Engineered
                </p>

                <h2 className="text-2xl sm:text-4xl font-bold mb-4 leading-tight dark:text-white">
                    Our Cold Storage & Ice Production Solutions
                </h2>

                <p className="text-gray-700 dark:text-gray-300 mb-6">
                    From fresh produce to frozen seafood, our cold rooms and ice block machines
                    maintain precise temperatures from <strong>-40°C to +20°C</strong> for any
                    application — keeping your products fresh, safe, and ready for market.
                </p>
            </div>

            {/* Right Images */}
            <div className="relative flex justify-center md:justify-end items-center pb-20 lg:pb-0">
                <div className="relative max-w-md md:max-w-lg">
                    {/* Main Image */}
                    <div className="overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition duration-500 ease-out">
                        <Image
                            src={cold_rooms_1}
                            alt="Cold Room"
                            width={340}
                            height={260}
                            className="w-84 lg:w-full h-auto object-cover"
                        />
                    </div>

                    {/* Secondary Image */}
                    <div className="absolute top-36 sm:left-10 lg:-left-32 lg:top-10 overflow-hidden rounded-2xl shadow-2xl border-2 border-gray-200 dark:border-gray-800 transform hover:scale-105 transition duration-500 ease-out w-64 h-40">
                        <Image
                            src={cold_rooms_2}
                            alt="Ice Block Machine"
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

export default ColdRoomsHero;
