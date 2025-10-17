"use client";

import ProductCard from "@/components/products/product-card";
import { Layers3, Wrench, Settings, Repeat2, Thermometer } from "lucide-react";

import he1 from "@/assets/products/shell-and-tube-heat-exchangers.webp";
import he2 from "@/assets/products/titanium-heat-exchangers.webp";
import he3 from "@/assets/products/retubing-heat-exchangers.webp";
import he4 from "@/assets/products/plate-heat-exchangers.webp";
import he5 from "@/assets/products/plate-heat-exchangers-spare-parts.webp";
import he6 from "@/assets/products/heat-exchangers-custom-made.webp";

const heatExchangerProducts = [
    {
        title: "Shell & Tube Heat Exchanger",
        blurb:
            "Heavy-duty exchangers for oil cooling, process fluids and chilled-water duties.",
        icon: <Layers3 size={36} />,
        id: "shell-and-tube",
        image: he1,
        bullets: [
            "Straight or U-tube configuration",
            "Single & double pass (S/T type)",
            "Material options: SS / Copper / Titanium",
        ],
    },
    {
        title: "PP & Titanium Constructions",
        blurb:
            "Polypropylene and Titanium builds for aggressive or corrosive chemical media.",
        icon: <Thermometer size={36} />,
        id: "pp-and-titanium",
        image: he2,
        bullets: [
            "Excellent corrosion resistance",
            "Suitable for chemical and seawater duty",
            "Long service life",
        ],
    },
    {
        title: "Retubing & Refurbishment",
        blurb:
            "Re-tubing and repair services to restore exchanger performance and extend service life.",
        icon: <Repeat2 size={36} />,
        image: he3,
        bullets: [
            "Tube bundle replacements",
            "On-site leak testing",
            "Upgrades to corrosion-resistant tubes",
        ],
    },
    {
        title: "Plate Heat Exchanger (PHE)",
        blurb:
            "Compact, high-efficiency plate type exchangers for clean fluids and hygienic duties.",
        icon: <Layers3 size={36} />,
        id: "phe",
        image: he4,
        bullets: [
            "Gasketed / brazed / semi-welded types",
            "Quick plate access",
            "Ideal for food & HVAC systems",
        ],
    },
    {
        title: "PHE Service & Spare Parts",
        blurb:
            "Complete support for plate exchangers including plate, gasket & seal replacement.",
        icon: <Wrench size={36} />,
        image: he5,
        bullets: [
            "Plate inspection & cleaning",
            "Gasket replacement",
            "Leak testing and re-assembly",
        ],
    },
    {
        title: "Custom Material Options",
        blurb:
            "Heat exchangers available in SS-316L, Copper or Titanium to match your process requirements.",
        icon: <Settings size={36} />,
        image: he6,
        bullets: [
            "SS-316L for hygienic applications",
            "Copper for general chilled-water",
            "Titanium for seawater & corrosive media",
        ],
    },
];

export default function HeatExchangersSection() {
    return (
        <section className="py-12 bg-gray-100 dark:bg-gray-950 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-gray-800 dark:text-gray-200 font-bold text-3xl pb-8 text-center">
                    Heat Exchangers
                </h2>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {heatExchangerProducts.map((product, i) => (
                        <ProductCard key={i} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
