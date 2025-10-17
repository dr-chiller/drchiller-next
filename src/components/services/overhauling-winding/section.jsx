"use client";

import ServiceCard from "@/components/services/service-card";
import { Wrench, RefreshCcw, Repeat2 } from "lucide-react";

import semi_sealed from "@/assets/services/overhauling-semi-sealed-compressor.webp";
import oil_topup from "@/assets/services/overhauling-oil-refilling.webp";
import rewinding from "@/assets/services/overhauling-motor-winding.webp";
import used_parts from "@/assets/services/overhauling-used-fan-parts.webp";
import dismantling from "@/assets/services/overhauling-compressor-dismantling.webp";
import refurbish from "@/assets/services/overhauling-compressor-refurbishing.webp";

const overhaulingServices = [
    {
        title: "Semi-Sealed Compressor Parts Replacement",
        image: semi_sealed,
        icon: <Wrench size={32} />,
        blurb:
            "Replacement of worn-out internal components in semi-sealed compressors to restore full operational reliability.",
        bullets: ["Rotors / bearings / seals", "OEM-grade spare parts", "Quick turnaround service"],
    },
    {
        title: "3GS / 4GS Oil Top-Up & Re-Filling",
        image: oil_topup,
        icon: <RefreshCcw size={32} />,
        blurb:
            "Proper oil top-up and replacement using high-grade 3GS / 4GS oils to ensure safe compressor operation and lubrication.",
        bullets: ["Oil draining and refilling", "Suitable for all compressor types", "Prevents excessive wear"],
    },
    {
        title: "Fan & Compressor Rewinding",
        image: rewinding,
        icon: <Repeat2 size={32} />,
        blurb:
            "Rewinding of compressor and fan motors using heat-resistant insulation and high-quality copper wire.",
        bullets: ["Motor inspection and dismantle", "Re-winding and varnish treatment", "Dynamic balancing test"],
    },
    {
        title: "Used Compressor Fan Motor & Parts Supply",
        image: used_parts,
        icon: <Wrench size={32} />,
        blurb:
            "Cost-effective replacement of fan motors and compressor components from tested and verified used stock.",
        bullets: ["Refurbished OEM motors", "Budget-friendly spare parts", "Functional testing included"],
    },
    {
        title: "Compressor Dismantling Service",
        image: dismantling,
        icon: <Wrench size={32} />,
        id: "compressor-dismantling",
        blurb:
            "Professional dismantling and removal of failed compressors prior to replacement or overhaul.",
        bullets: ["Safe removal procedures", "Environmental gas recovery", "Site cleanup included"],
    },
    {
        title: "Retrofit & Refurbishment of Sealed Compressors",
        image: refurbish,
        icon: <Wrench size={32} />,
        blurb:
            "Refurbishment and retrofitting of sealed compressors to extend service life and improve performance.",
        bullets: ["Internal overhaul and testing", "Adaptation to new refrigerants", "Improved operating efficiency"],
    },
];

export default function OverhaulingSections() {
    return (
        <section className="py-12 bg-gray-100 dark:bg-gray-950 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-200 text-center mb-10">
                    Compressor Overhauling & Rewinding Services
                </h2>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {overhaulingServices.map((item, i) => (
                        <ServiceCard key={i} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}
