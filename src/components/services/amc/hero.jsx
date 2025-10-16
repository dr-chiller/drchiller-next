"use client";

import Image from "next/image";

import amc_1 from "@/assets/services/amc-1.webp";
import amc_2 from "@/assets/services/amc-2.webp";

const AMCHero = () => {
    return (
        <section className="py-10 bg-white dark:bg-black transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Text */}
                <div>
                    <p className="text-emerald-500 text-lg font-medium mb-2">
                        Annual Maintenance Contracts (AMC)
                    </p>

                    <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                        Hassle-Free Servicing • 24/7 Support • Guaranteed Uptime
                    </h1>

                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
                        Our comprehensive AMC programs cover preventive and corrective
                        maintenance for all types of AC units, chillers and cold room systems.
                        Stay focused on your business while we handle servicing, safety
                        checks, and emergency response – ensuring your systems run efficiently
                        all year round.
                    </p>
                </div>

                {/* Images */}
                <div className="flex justify-end">
                    <div className="relative flex justify-center gap-2 sm:gap-10 mr-0 sm:mr-34 md:mr-2 lg:mr-20 pb-20">
                        <div className="overflow-hidden rounded-xl shadow-xl transform hover:scale-105 transition duration-500">
                            <Image
                                src={amc_1}
                                alt="AMC Service"
                                width={160}
                                height={288}
                                className="object-cover w-40 h-72"
                            />
                        </div>

                        <div className="absolute -left-36 sm:-left-48 top-20 overflow-hidden rounded-xl shadow-xl transform hover:scale-105 transition duration-500">
                            <Image
                                src={amc_2}
                                alt="Preventive Maintenance"
                                width={160}
                                height={288}
                                className="object-cover w-35 sm:w-40 h-72"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AMCHero;
