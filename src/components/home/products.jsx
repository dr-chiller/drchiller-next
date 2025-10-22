"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import wc from "@/assets/products/air-cooled-industrial-water-chiller.webp";
import cr from "@/assets/products/chiller-rooms.webp";
import he from "@/assets/products/heat-exchangers-1.webp";
import ac from "@/assets/products/ac-units-2.webp";

const products = [
    {
        name: "Water Chillers, Coolers & Heat Pumps",
        description: "High-performance chillers for all your cooling needs.",
        image: wc,
        link: "/products/water-chillers-coolers-heat-pumps",
    },
    {
        name: "Cold Rooms & Ice Block Machines",
        description: "Energy-efficient cold storage rooms for perishable goods.",
        image: cr,
        link: "/products/cold-rooms-ice-block-machines",
    },
    {
        name: "Heat Exchangers & Cooling Towers",
        description:
            "Reliable heat exchangers to optimize energy transfer processes.",
        image: he,
        link: "/products/heat-exchangers-cooling-towers",
    },
    {
        name: "A/C Units & Air Curtains",
        description:
            "Efficient air conditioning systems designed for comfort and reliability.",
        image: ac,
        link: "/products/ac-units-air-curtains",
    },
];

export default function HomeProducts() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.15 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="py-16 px-4 sm:px-6 lg:px-12 bg-gray-100 dark:bg-gray-950 transition-colors duration-300"
        >
            <div className="max-w-7xl mx-auto text-center">
                <h2
                    className={`text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-60 translate-y-10"
                        }`}
                >
                    Our Products
                </h2>
                <p
                    className={`text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 transition-all duration-700 delay-100 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-60 translate-y-10"
                        }`}
                >
                    We provide a wide range of cooling and refrigeration solutions built
                    for performance, reliability, and efficiency.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className={`bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden hover:shadow-lg dark:hover:shadow-xl transition transform hover:-translate-y-2 flex flex-col h-[380px] transition-all ease-out duration-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-40 translate-y-10"
                                }`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            <div className="relative w-full h-48">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 25vw"
                                />
                            </div>
                            <div className="p-4 flex flex-col justify-between flex-grow">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                                        {product.name}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                                        {product.description}
                                    </p>
                                </div>
                                <Link
                                    href={product.link}
                                    className="inline-block bg-emerald-500 text-white text-sm font-medium py-2 px-4 rounded-md hover:bg-emerald-600 transition"
                                    aria-label={`View more about ${product.name}`}
                                >
                                    View More
                                    <span className="sr-only"> about {product.name}</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
