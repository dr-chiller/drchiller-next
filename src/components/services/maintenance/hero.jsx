"use client";

import Image from "next/image";
import maintenance_1 from "@/assets/services/maintenance-1.webp";
import maintenance_2 from "@/assets/services/maintenance-2.webp";

export default function MaintenanceHero() {
    return (
        <section className="py-10 bg-white dark:bg-black transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                {/* Text Section */}
                <div>
                    <p className="text-emerald-500 text-lg font-medium mb-2">
                        AC, Chiller & Cold Room Maintenance
                    </p>

                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                        Preventive • Corrective • Annual Contracts
                    </h2>

                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
                        We provide complete servicing, troubleshooting and refurbishment for
                        all types of AC, chiller and cold room systems. From mechanical repairs
                        to regular cleaning and flushing, our qualified technicians keep your
                        equipment running efficiently and avoid costly breakdowns.
                    </p>
                </div>

                {/* Image Section */}
                <div className="flex justify-center">
                    <div className="relative flex justify-center gap-10 mr-28 md:mr-36 lg:mr-28 pb-20">
                        {/* Main Image */}
                        <div className="overflow-hidden rounded-xl shadow-xl transform hover:scale-105 transition duration-500">
                            <Image
                                src={maintenance_1}
                                alt="AC Maintenance"
                                width={160}
                                height={288}
                                className="object-cover w-40 h-72"
                            />
                        </div>

                        {/* Floating Image */}
                        <div className="absolute -right-45 top-20 overflow-hidden rounded-xl shadow-xl transform hover:scale-105 transition duration-500">
                            <Image
                                src={maintenance_2}
                                alt="Chiller Maintenance"
                                width={160}
                                height={288}
                                className="object-cover w-40 h-72"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
