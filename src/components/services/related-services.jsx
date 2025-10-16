"use client";

import Image from "next/image";
import Link from "next/link";

import rentalImg from "@/assets/services/rental-ac.webp";
import chilledWaterImg from "@/assets/services/pipe-insulation.webp";
import maintenanceImg from "@/assets/services/maintenance-replacement.webp";
import coilImg from "@/assets/services/coil-anti-corrosion-coating.webp";
import overhaulingImg from "@/assets/services/overhauling-motor-winding.webp";
import amcImg from "@/assets/services/amc-contract.webp";

const allServices = [
    {
        name: "A/C, Chiller & Genset Rentals",
        image: rentalImg,
        link: "/services/rentals",
    },
    {
        name: "Chilled Water Pipeline & Flushing",
        image: chilledWaterImg,
        link: "/services/pipeline",
    },
    {
        name: "A/C, Chiller & Coldroom Maintenance",
        image: maintenanceImg,
        link: "/services/maintenance",
    },
    {
        name: "Coil Manufacturing & Replacements",
        image: coilImg,
        link: "/services/coil",
    },
    {
        name: "Overhauling & Winding",
        image: overhaulingImg,
        link: "/services/overhauling",
    },
    {
        name: "AMC",
        image: amcImg,
        link: "/services/amc",
    },
];

export default function RelatedServices({ current }) {
    const related = allServices.filter((p) => p.name !== current);

    return (
        <section className="py-12 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h3 className="text-2xl font-bold mb-10 text-center text-gray-800 dark:text-gray-200">
                    Related Services
                </h3>

                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {related.map((p, i) => (
                        <Link
                            key={i}
                            href={p.link}
                            className="group rounded-lg overflow-hidden bg-white dark:bg-gray-900 
                         border border-transparent dark:border-gray-800 
                         hover:border-emerald-500/50 dark:hover:border-emerald-500/80
                         shadow-md hover:shadow-xl transition-all"
                        >
                            <div className="relative w-full h-36">
                                <Image
                                    src={p.image}
                                    alt={p.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-4 text-center">
                                <h4 className="text-gray-800 dark:text-gray-200 text-lg font-semibold group-hover:text-emerald-500 transition-colors">
                                    {p.name}
                                </h4>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
