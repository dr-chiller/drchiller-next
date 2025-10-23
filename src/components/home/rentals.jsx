"use client";

import Image from "next/image";
import Link from "next/link";

export default function HomeRentals() {
    return (
        <section className="py-16 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center">
                {/* Image */}
                <div className="relative w-full h-64 sm:h-80 md:h-full overflow-hidden rounded-2xl shadow-lg">
                    <Image
                        src="/rental1.webp"
                        alt="AC, Water Chiller & Genset Rentals"
                        fill
                        className="object-cover transform hover:scale-105 transition duration-500"
                    />
                </div>

                {/* Content */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Rent A/C Units, Chillers & Gensets
                    </h2>

                    <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                        Whether you need to cool down a large space, maintain process temperatures, or provide power to a site, we offer reliable rental solutions for A/C units, water chillers, and diesel generators. Perfect for events, industrial applications, mock-up rooms, and emergency backup needs.
                    </p>

                    <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                        All rental units are quick to deploy, energy-efficient, and fully maintained by our technical team — ensuring comfort, performance, and uninterrupted operation whenever you need it.
                    </p>

                    <Link
                        href="/services/ac-chiller-genset-rentals"
                        className="inline-block px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-md shadow-md transition"
                    >
                        Know More
                    </Link>
                </div>
            </div>
        </section>
    );
}
