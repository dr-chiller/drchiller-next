"use client";

import Image from "next/image";
import pipeline_1 from "@/assets/services/pipeline-1.webp";
import pipeline_2 from "@/assets/services/pipeline-2.webp";

export default function ChilledWaterPipelineHero() {
    return (
        <section className="py-10 bg-white dark:bg-black transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                {/* Left text section */}
                <div>
                    <p className="text-emerald-500 text-lg font-medium mb-2">
                        Chilled Water Pipeline & Flushing Services
                    </p>

                    <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                        Design • Installation • Maintenance
                    </h1>

                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
                        We specialize in MS/SS/PPR chilled water pipeline projects, including insulation,
                        flushing and modification works. Whether you're commissioning a new system or
                        upgrading an existing one, our team delivers reliable quality and seamless
                        execution for commercial and industrial facilities.
                    </p>
                </div>

                {/* Right image section */}
                <div className="flex justify-end">
                    <div className="relative flex justify-center gap-2 sm:gap-10 mr-0 sm:mr-34 md:mr-2 lg:mr-20 pb-20">
                        <div className="overflow-hidden rounded-xl shadow-xl transform hover:scale-105 transition duration-500">
                            <Image
                                src={pipeline_1}
                                alt="Pipeline Works"
                                width={160}
                                height={288}
                                className="object-cover w-40 h-72"
                            />
                        </div>

                        <div className="absolute -left-36 sm:-left-48 top-20 overflow-hidden rounded-xl shadow-xl transform hover:scale-105 transition duration-500">
                            <Image
                                src={pipeline_2}
                                alt="Pipeline Service"
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
