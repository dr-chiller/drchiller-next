"use client";

import ProductCard from "@/components/products/product-card";
import { Snowflake, Droplets, Wrench, Gauge, AirVent } from "lucide-react";
import { MdEco } from "react-icons/md";

import wc1 from "@/assets/products/air-cooled-industrial-water-chiller.webp";
import wc2 from "@/assets/products/air-cooled-domestic-water-chiller.webp";
import wc3 from "@/assets/products/water-cooled-industrial-water-chiller.webp";
import wc4 from "@/assets/products/water-chiller-custom-made.webp";
import wc5 from "@/assets/products/water-chiller-price-range.webp";
import wc6 from "@/assets/products/water-chiller-capacity-range.webp";

const products = [
    {
        title: "Air Cooled Industrial Water Chiller",
        blurb: "Rugged, Energy-efficient chillers engineered for 24/7 industrial duty.",
        icon: <Snowflake size={40} />,
        id: "air-cooled-industrial",
        image: wc1,
        bullets: [
            "Processes: plastic injection, water-jet cutting, printing, bakery",
            "Facilities: hospitals, laundries, ice-making plants",
            "Fast pull-down with stable outlet temp control",
        ],
        cta: "/products/water-chillers#air-cooled-industrial",
        tags: ["Industrial", "Air-cooled", "High duty"],
    },
    {
        title: "Air Cooled Domestic Water Chiller",
        blurb: "Quiet, compact solutions for comfort and light-commercial cooling.",
        icon: <AirVent size={40} />,
        id: "air-cooled-domestic",
        image: wc2,
        bullets: [
            "Applications: villas, schools, labour camps, gyms, auditoriums",
            "Hotels & construction site cabins",
            "Low noise with quick install & easy service",
        ],
        cta: "/products/water-chillers#air-cooled-domestic",
        tags: ["Domestic", "Light-commercial", "Air-cooled"],
    },
    {
        title: "Water Cooled Industrial Water Chiller",
        blurb: "High efficiency where condenser water is available or seawater duty applies.",
        icon: <Droplets size={40} />,
        id: "water-cooled-industrial",
        image: wc3,
        bullets: [
            "Marine duty: boats, ships, coastal plants",
            "Ideal for sites with cooling towers or seawater loops",
            "Lower kW/TR vs air-cooled; compact footprint",
        ],
        cta: "/products/water-chillers#water-cooled-industrial",
        tags: ["Industrial", "Water-cooled", "High efficiency"],
    },
    {
        title: "Custom-Made Systems",
        blurb: "Built-to-fit units tailored to your space, load profile, and controls.",
        icon: <Wrench size={40} />,
        image: wc4,
        bullets: [
            "Footprint-optimized frames & coil geometry",
            "PLC/BMS integration, VFD pumps, twin circuits",
            "Food/Pharma compliant options available",
        ],
        cta: "/products/water-chillers#custom",
        tags: ["Custom", "Bespoke", "Integration"],
    },
    {
        title: "Economic → Premium Range",
        blurb: "From value builds to premium components for maximum lifecycle ROI.",
        icon: <MdEco size={40} />,
        image: wc5,
        bullets: [
            "Choice of compressors: scroll, screw, semi-hermetic",
            "Options: EC fans, microchannel coils, smart controls",
            "Pick by budget, efficiency target, or noise class",
        ],
        cta: "/products/water-chillers#range",
        tags: ["Budget options", "Premium", "Configurable"],
    },
    {
        title: "Wide Capacity & Temperature Range",
        blurb: "Match any load with precise temperature control across seasons.",
        icon: <Gauge size={40} />,
        image: wc6,
        specs: {
            capacity: "1.5 - 200 TR",
            temp: "-5°C to +40°C",
        },
        bullets: [
            "Cold brine, process glycol, or domestic chilled water",
            "Stable outlet temps with advanced PID logic",
            "Scalable with primary/secondary pumping",
        ],
        cta: "/products/water-chillers#capacity",
        tags: ["Scalable", "Process cooling", "Precise control"],
    },
];

export default function WaterChillersSections() {
    return (
        <section className="py-12 bg-gray-100 dark:bg-gray-950 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-gray-800 dark:text-gray-200 font-bold text-3xl pb-8 text-center">
                    Water Chillers
                </h2>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {products.map((p, i) => (
                        <ProductCard key={i} product={p} />
                    ))}
                </div>
            </div>
        </section>
    );
}
