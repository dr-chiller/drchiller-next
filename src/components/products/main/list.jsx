"use client";

import Image from "next/image";
import Link from "next/link";

import wc from "@/assets/products/air-cooled-industrial-water-chiller.webp";
import cr from "@/assets/products/chiller-rooms.webp";
import he from "@/assets/products/heat-exchangers-1.webp";
import ac from "@/assets/products/ac-units-2.webp";

export default function ProductsList() {
    const products = [
        {
            name: "Water Chillers, Coolers & Heat Pumps",
            description: "High-performance chillers for all industrial and commercial cooling needs.",
            image: wc,
            link: "/products/water-chillers-coolers-heat-pumps",
        },
        {
            name: "Cold Rooms & Ice Block Machines",
            description: "Energy-efficient cold storage rooms for fresh and frozen products.",
            image: cr,
            link: "/products/cold-rooms-ice-block-machines",
        },
        {
            name: "Heat Exchangers & Cooling Towers",
            description: "Reliable heat exchangers for efficient thermal energy transfer.",
            image: he,
            link: "/products/heat-exchangers-cooling-towers",
        },
        {
            name: "A/C Units & Air Curtains",
            description: "Efficient air conditioning systems for residential and industrial applications.",
            image: ac,
            link: "/products/ac-units-air-curtains",
        },
    ];

    return (
        <section className="bg-gray-50 dark:bg-gray-950 transition-colors duration-300 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Intro */}
                <div className="text-center mb-10">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                        Our Products
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
                        Explore our full range of high-quality cooling and HVAC solutions — engineered for
                        performance, reliability, and long-term efficiency.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {products.map((product, index) => (
                        <Link
                            href={product.link}
                            key={index}
                            className="group rounded-xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 hover:border-emerald-500/60 shadow hover:shadow-lg transition-all"
                        >
                            <div className="relative w-full h-48">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            <div className="p-4 text-center">
                                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 group-hover:text-emerald-500 transition">
                                    {product.name}
                                </h2>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                    {product.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
