"use client";

import Image from "next/image";

export default function ServiceHero({
    heading,
    description,
    image1,
    image2,
    alt1,
    alt2,
}) {
    return (
        <section className="py-10 bg-white dark:bg-black transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                {/* TEXT */}
                <div>
                    <h2 className="text-gray-800 dark:text-gray-200 text-4xl font-bold mb-3">
                        {heading}
                    </h2>

                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl whitespace-pre-line">
                        {description}
                    </p>
                </div>

                {/* IMAGES */}
                <div className="flex justify-end">
                    <div className="relative flex justify-center gap-2 sm:gap-10 mr-6 sm:mr-34 md:mr-2 lg:mr-20 pb-4">
                        {/* Main Image */}
                        <div className="overflow-hidden rounded-xl shadow-xl transform hover:scale-105 transition duration-500">
                            <Image
                                src={image1}
                                alt={alt1}
                                width={160}
                                height={288}
                                className="object-cover w-40 h-72"
                            />
                        </div>

                        {/* Overlay Small Image */}
                        <div className="absolute -left-36 sm:-left-48 top-20 overflow-hidden rounded-xl shadow-xl transform hover:scale-105 transition duration-500">
                            <Image
                                src={image2}
                                alt={alt2}
                                width={160}
                                height={160}
                                className="object-cover w-35 sm:w-40 h-35 sm:h-40"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
