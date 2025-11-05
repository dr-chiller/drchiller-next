"use client";

import Image from "next/image";
import coil_1 from "@/assets/services/coil-1.webp";
import coil_2 from "@/assets/services/coil-2.webp";

export default function CoilManufacturingHero() {
    return (
        <section className="py-10 bg-white dark:bg-black transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                {/* Text Section */}
                <div>
                    <p className="text-emerald-500 text-lg font-medium mb-2">
                        Coil Manufacturing & Replacement
                    </p>

                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                        Custom-Built • High Efficiency • Long Life
                    </h2>

                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
                        We supply and replace copper/Aluminium coils for HVAC and industrial
                        chiller systems. Whether it's a bespoke coil for a retrofit or a
                        complete replacement of damaged tubes/fins, our team designs and
                        installs tailored solutions to match your equipment and performance
                        requirements.
                    </p>
                </div>

                {/* Images Section */}
                <div className="flex justify-end">
                    <div className="relative flex justify-center gap-2 sm:gap-10 mr-0 sm:mr-34 md:mr-2 lg:mr-20 pb-20">
                        <div className="overflow-hidden rounded-xl shadow-xl transform hover:scale-105 transition duration-500">
                            <Image
                                src={coil_1}
                                alt="Coil Works"
                                width={160}
                                height={288}
                                className="object-cover w-40 h-72"
                            />
                        </div>

                        <div className="absolute -left-36 sm:-left-48 top-20 overflow-hidden rounded-xl shadow-xl transform hover:scale-105 transition duration-500">
                            <Image
                                src={coil_2}
                                alt="Coil Service"
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
}
