"use client";

import ProductCard from "@/components/products/product-card";
import { Snowflake, Package, Thermometer, Wrench, Gauge, Settings } from "lucide-react";

import cr1 from "@/assets/products/chiller-rooms.webp";
import cr2 from "@/assets/products/freezer-rooms.webp";
import cr3 from "@/assets/products/blast-freezers.webp";
import cr4 from "@/assets/products/condensers.webp";
import cr5 from "@/assets/products/cold-rooms-range.webp";
import cr6 from "@/assets/products/cold-rooms-temperature.webp";

const coldRoomProducts = [
    {
        title: "Chiller Rooms",
        blurb:
            "Ideal for fruits, vegetables, flowers, chocolates, and medicines with precise temperature control.",
        icon: <Snowflake size={40} />,
        id: "chiller-rooms",
        image: cr1,
        bullets: [
            "Maintain freshness and quality",
            "Custom sizes for different storage needs",
            "-40°C to +20°C range",
        ],
        tags: ["Chiller", "Fresh storage", "Temperature control"],
    },
    {
        title: "Freezer Rooms",
        blurb: "Designed for fish, meat, and ice cream — perfect for long-term frozen storage.",
        icon: <Package size={40} />,
        id: "freezer-rooms",
        image: cr2,
        bullets: ["Deep freezing capacity", "Energy-efficient insulation", "Food safety compliant"],
        tags: ["Freezer", "Frozen storage", "Food safety"],
    },
    {
        title: "Blast Chillers & Blast Freezers",
        blurb: "Rapid cooling and freezing solutions to preserve texture, flavor, and safety.",
        icon: <Thermometer size={40} />,
        id: "blast-chillers-and-freezers",
        image: cr3,
        bullets: [
            "Fast pull-down temperatures",
            "Ideal for bakeries, seafood, and meat processing",
            "Preserves product integrity",
        ],
        tags: ["Blast", "Fast cooling", "Processing"],
    },
    {
        title: "Condensing Units & Evaporators",
        blurb: "Reliable supply and installation for cold room systems of any scale.",
        icon: <Wrench size={40} />,
        id: "condensers-and-evaporators",
        image: cr4,
        bullets: ["Tailored to your cold storage needs", "Professional installation", "Long service life"],
        tags: ["Components", "Installation", "Reliable"],
    },
    {
        title: "Different Range of Machines",
        blurb:
            "Choose from a wide range of cold room and ice block machine models to match your capacity and budget.",
        icon: <Settings size={40} />,
        image: cr5,
        bullets: [
            "From compact units to large-scale plants",
            "Suitable for multiple industries",
            "Configurable features available",
        ],
        tags: ["Machines", "Scalable", "Custom options"],
    },
    {
        title: "Wide Temperature Range",
        blurb:
            "Our systems can reliably maintain temperatures from -40°C to +20°C for all types of storage needs.",
        icon: <Gauge size={40} />,
        image: cr6,
        bullets: ["Covers both deep freezing and chilling", "Precise digital controls", "All-season performance"],
        tags: ["Temperature", "Precision", "Versatile"],
    },
];

export default function ColdRoomsSection() {
    return (
        <section className="py-12 bg-gray-100 dark:bg-gray-950 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-gray-800 dark:text-gray-200 font-bold text-3xl pb-8 text-center">
                    Cold Rooms
                </h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {coldRoomProducts.map((product, i) => (
                        <ProductCard key={i} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
