"use client";

import Image from "next/image";
import { Airplay, Snowflake, Fuel } from "lucide-react";

import ac_rental from "@/assets/services/rental-ac.webp";
import chiller_rental from "@/assets/services/rental-chiller.webp";
import genset_rental from "@/assets/services/rental-genset.webp";

const rentalServices = [
    {
        title: "AC Rental",
        icon: <Airplay size={32} />,
        id: "ac-rental",
        image: ac_rental,
        blurb:
            "Temporary cooling solutions with free standing, package and air handling units to suit any application.",
        bullets: [
            "3TR / 5TR / 8TR Free Standing AC",
            "5TR / 10TR / 20TR / 25TR Package AC",
            "10TR / 20TR Air Handling Units (AHU)",
            "10TR Fresh Air Handling Units (FAHU)",
        ],
    },
    {
        title: "Chiller Rental",
        icon: <Snowflake size={32} />,
        id: "chiller-rental",
        image: chiller_rental,
        blurb:
            "High-efficiency chillers for short and long-term rental, with full on-site support.",
        bullets: [
            "1.5TR to 100TR available",
            "Cooling tower support during peak summer",
            "Low temperature chillers for AHU / FCU",
            "Mock-up room cooling support",
            "Temporary backup for existing chillers",
        ],
    },
    {
        title: "Genset Rental",
        icon: <Fuel size={32} />,
        id: "genset-rental",
        image: genset_rental,
        blurb:
            "Reliable diesel generator rental packages including cabling and accessories.",
        bullets: [
            "Diesel tank included",
            "Electrical cables",
            "Distribution boards / industrial plugs",
            "Oil-spill prevention tray",
        ],
    },
];

const RentalsSections = () => {
    return (
        <section className="py-12 bg-gray-100 dark:bg-gray-950 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-200 text-center mb-10">
                    Rental Services
                </h2>

                {/* Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {rentalServices.map((item, i) => (
                        <div
                            id={item.id || ""}
                            key={i}
                            className="group bg-white dark:bg-gray-900 rounded-xl border border-transparent dark:border-gray-800 p-4 shadow hover:shadow-lg hover:border-emerald-500/60 dark:hover:border-emerald-500/80 transition-all"
                        >
                            {/* Image */}
                            <div className="overflow-hidden rounded-md mb-4">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={400}
                                    height={200}
                                    className="w-full h-36 object-cover rounded-md group-hover:scale-105 transition-transform duration-500"
                                    priority
                                />
                            </div>

                            {/* Title & Icon */}
                            <div className="flex items-center gap-3 mb-4 text-emerald-600 dark:text-emerald-400">
                                {item.icon}
                                <span className="text-lg font-semibold">{item.title}</span>
                            </div>

                            {/* Description */}
                            <p className="text-base mb-3 text-gray-700 dark:text-gray-300">
                                {item.blurb}
                            </p>

                            {/* Bullet Points */}
                            <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-base">
                                {item.bullets.map((b, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                        <span className="text-emerald-500">❄</span>
                                        <span>{b}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RentalsSections;
