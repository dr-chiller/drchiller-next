"use client";

import Link from "next/link";
import Image from "next/image";

import rentalImg from "@/assets/services/rental-ac.webp";
import chilledWaterImg from "@/assets/services/pipe-insulation.webp";
import maintenanceImg from "@/assets/services/maintenance-replacement.webp";
import coilImg from "@/assets/services/coil-anti-corrosion-coating.webp";
import overhaulingImg from "@/assets/services/overhauling-motor-winding.webp";
import amcImg from "@/assets/services/amc-contract.webp";

export default function ServicesList() {
    const services = [
        {
            name: "A/C, Chiller & Genset Rentals",
            description: "Short and long-term rental solutions for ACs, chillers and diesel gensets.",
            image: rentalImg,
            link: "/services/ac-chiller-genset-rentals",
        },
        {
            name: "Chilled Water Pipeline & Flushing",
            description: "Comprehensive chilled water pipeline installation, flushing and commissioning services.",
            image: chilledWaterImg,
            link: "/services/chilled-water-pipeline-flushing",
        },
        {
            name: "A/C, Chiller & Coldroom Maintenance",
            description: "Routine maintenance and servicing for A/Cs, chillers and cold rooms for optimal performance.",
            image: maintenanceImg,
            link: "/services/ac-chiller-coldroom-maintenance",
        },
        {
            name: "Coil Manufacturing & Replacements",
            description: "Custom coil manufacturing and replacement services for various cooling systems.",
            image: coilImg,
            link: "/services/coil-manufacturing-replacements",
        },
        {
            name: "Overhauling & Winding",
            description: "Professional overhauling and winding services to extend equipment lifespan.",
            image: overhaulingImg,
            link: "/services/overhauling-winding",
        },
        {
            name: "AMC",
            description: "Annual Maintenance Contracts providing long-term coverage and priority service support.",
            image: amcImg,
            link: "/services/amc",
        },
    ];

    return (
        <section className="bg-gray-50 dark:bg-gray-950 transition-colors duration-300 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Intro */}
                <div className="text-center mb-10">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                        Our Services
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
                        Discover our complete range of professional HVAC and cooling system services.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <Link
                            href={service.link}
                            key={index}
                            className="group rounded-xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 hover:border-emerald-500/60 shadow hover:shadow-lg transition-all"
                        >
                            <div className="relative w-full h-48">
                                <Image
                                    src={service.image}
                                    alt={service.name}
                                    fill
                                    style={{ objectFit: "cover" }}
                                    className="transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-4 text-center">
                                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 group-hover:text-emerald-500 transition">
                                    {service.name}
                                </h2>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                    {service.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
