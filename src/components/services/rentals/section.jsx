"use client";

import ServiceCard from "@/components/services/service-card";

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

export default function RentalsSections() {
    return (
        <section className="py-12 bg-gray-100 dark:bg-gray-950 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-200 text-center mb-10">
                    Rental Services
                </h2>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {rentalServices.map((item, i) => (
                        <ServiceCard key={i} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}
