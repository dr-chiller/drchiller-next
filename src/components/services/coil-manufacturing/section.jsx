"use client";

import { Wrench, Droplets, ShieldCheck, Repeat2 } from "lucide-react";
import ServiceCard from "@/components/services/service-card";

import coil_replace from "@/assets/services/coil-replacement.webp";
import anti_corrosion from "@/assets/services/coil-anti-corrosion-coating.webp";
import gas_recovery from "@/assets/services/coil-gas-recovery.webp";
import brazing from "@/assets/services/coil-copper-brazing.webp";
import pressure_test from "@/assets/services/coil-nitrogen-pressure-testing.webp";
import vacuum_charge from "@/assets/services/coil-scrap.webp";

const coilServices = [
    {
        title: "Coil Replacement (AC / Chiller / Cold Room)",
        image: coil_replace,
        icon: <Wrench size={32} />,
        blurb:
            "Replacement of damaged condenser and evaporator coils for chillers, ACs and cold rooms using high-efficiency copper/aluminium construction.",
        bullets: [
            "Condenser and evaporator coils",
            "On-site removal and installation",
            "Bespoke coil fabrication available",
        ],
    },
    {
        title: "Anti-Corrosion Coating",
        image: anti_corrosion,
        icon: <ShieldCheck size={32} />,
        id: "anti-corrosion-coating",
        blurb:
            "Protective coating for coils exposed to corrosive environments (coastal / industrial). Extends service life and improves performance.",
        bullets: [
            "Epoxy / hydrophilic coating",
            "High salt-spray resistance",
            "Suitable for new & existing coils",
        ],
    },
    {
        title: "Gas Recovery",
        image: gas_recovery,
        icon: <Droplets size={32} />,
        id: "gas-recovery",
        blurb:
            "Safe recovery of refrigerant gases prior to coil replacement or equipment maintenance.",
        bullets: [
            "R22 / R134a / R407c / R410a",
            "Compliant with environmental standards",
            "Re-use after filtration & charging",
        ],
    },
    {
        title: "Copper Brazing",
        image: brazing,
        icon: <Wrench size={32} />,
        id: "copper-brazing",
        blurb:
            "Professional brazing of copper tubes and joints for leak-free and long-lasting connections.",
        bullets: [
            "High-temperature oxygen-acetylene brazing",
            "Leak-proof joints",
            "Conforms to HVAC standards",
        ],
    },
    {
        title: "Nitrogen Pressure Testing",
        image: pressure_test,
        icon: <ShieldCheck size={32} />,
        blurb:
            "Leak detection using nitrogen pressurisation before charging refrigerant into the system.",
        bullets: [
            "Accurate detection of micro-leaks",
            "Ensures system integrity",
            "Recommended after coil replacement",
        ],
    },
    {
        title: "Vacuuming, Gas Charging & Coil Scrap Purchase",
        image: vacuum_charge,
        icon: <Repeat2 size={32} />,
        blurb:
            "Full commissioning after coil replacement including vacuuming and charging. We also purchase scrap coils.",
        bullets: [
            "Deep-vacuum & refrigerant charging",
            "Functional testing",
            "Scrap copper / aluminium coil buy-back",
        ],
    },
];

export default function CoilManufacturingSections() {
    return (
        <section className="py-12 bg-gray-100 dark:bg-gray-950 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-200 text-center mb-10">
                    Coil Manufacturing & Replacement Services
                </h2>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {coilServices.map((item, i) => (
                        <ServiceCard key={i} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}
