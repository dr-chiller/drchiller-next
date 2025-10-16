"use client";

import Image from "next/image";

export default function AboutHero() {
    return (
        <section className="relative dark:bg-black dark:text-gray-300 px-6 py-12">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* Left Text Column */}
                <div className="space-y-6 animate-fadeInUp">
                    <h2 className="text-xl md:text-3xl font-semibold pb-3">
                        Who We Are
                    </h2>

                    <p className="text-lg">
                        <span className="font-semibold italic text-emerald-400">
                            CTS - Chiller Technical Services L.L.C
                        </span>{" "}
                        is a trusted name in the UAE, engaged in the manufacturing and trading of{" "}
                        <span className="font-semibold text-emerald-400">
                            Water Chillers, Cold Rooms, Heat Exchangers, and A/C Units
                        </span>.
                        We also provide a wide range of refrigeration equipment, spare parts,
                        and accessories—delivering reliable cooling solutions tailored to every need.
                    </p>

                    <p className="text-md leading-relaxed text-gray-600 dark:text-gray-400">
                        With a strong global sourcing network and years of technical expertise,
                        we ensure our products are <span className="font-semibold text-emerald-400">cost-effective</span>,{" "}
                        <span className="font-semibold text-emerald-400">energy-efficient</span>, and{" "}
                        <span className="font-semibold text-emerald-400">built to last</span>.
                        From chillers to cold rooms and air conditioning units, we take pride
                        in serving industries with unmatched quality.
                    </p>
                </div>

                {/* Right Image Column */}
                <div className="flex justify-end animate-fadeInRight">
                    <div className="relative group w-full max-w-md">
                        <Image
                            src="/about-us-1.webp"
                            alt="Refrigeration Equipment"
                            width={500}
                            height={400}
                            className="rounded-lg shadow-xl transform group-hover:rotate-1 group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
