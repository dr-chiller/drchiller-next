"use client";

import Image from "next/image";
import { Wrench, RefreshCcw, ShieldCheck, Cog, Droplets, Zap } from "lucide-react";

import maintenance_installation from "@/assets/services/maintenance-installation.webp";
import maintenance_spare_replacement from "@/assets/services/maintenance-replacement.webp";
import maintenance_coil from "@/assets/services/maintenance-condenser-coil.webp";
import maintenance_duct_cleaning from "@/assets/services/maintenance-duct-cleaning.webp";
import maintenance_panel_rewiring from "@/assets/services/maintenance-electric-panel.webp";
import maintenance_water_service from "@/assets/services/maintenance-water-service.webp";

const maintenanceServices = [
    {
        title: "Installation of New / Used Units",
        image: maintenance_installation,
        icon: <Wrench size={30} />,
        blurb: "Professional installation and commissioning of AC, chillers and cold room units.",
        bullets: [
            "Cold room AC systems",
            "Industrial chillers (new & refurbished)",
        ],
    },
    {
        title: "Spare Parts Replacement",
        image: maintenance_spare_replacement,
        icon: <RefreshCcw size={30} />,
        blurb: "Original spare parts for reliable, long lasting performance.",
        bullets: ["Compressors, fans, motors", "Control valves & sensors"],
    },
    {
        title: "Condenser Coil Replacement",
        image: maintenance_coil,
        icon: <ShieldCheck size={30} />,
        blurb: "Faulty condenser coils replaced with high-efficiency models.",
        bullets: ["High-efficiency coils", "Quick on-site retroﬁt"],
    },
    {
        title: "Duct Cleaning",
        image: maintenance_duct_cleaning,
        icon: <Cog size={30} />,
        id: "duct-cleaning",
        blurb: "Thorough duct cleaning to improve air quality and airflow.",
        bullets: [
            "Removal of dust & microbial growth",
            "Improves airflow performance",
        ],
    },
    {
        title: "Electric Panel Rewiring",
        image: maintenance_panel_rewiring,
        icon: <Zap size={30} />,
        id: "electric-panel",
        blurb: "Repair and rewiring of electrical control panels for safe operation.",
        bullets: [
            "Control panel overhauling",
            "Wiring upgrades & safety checks",
        ],
    },
    {
        title: "Gas Leak Arresting & Water Servicing",
        image: maintenance_water_service,
        icon: <Droplets size={30} />,
        id: "gas-leak-arresting",
        blurb: "Complete refrigerant leak detection and water servicing of systems.",
        bullets: [
            "Leak detection & refrigerant recharge",
            "Full water service of condensing units",
        ],
    },
];

export default function MaintenanceSections() {
    return (
        <section className="py-12 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-gray-800 dark:text-gray-200">
                    Our AC, Chiller & Cold Room Maintenance Services
                </h2>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {maintenanceServices.map((s, i) => (
                        <div
                            id={s.id ? s.id : ""}
                            key={i}
                            className="group bg-white dark:bg-gray-900 rounded-xl p-3 border border-transparent dark:border-gray-800
              overflow-hidden shadow hover:shadow-lg hover:border-emerald-500/50 dark:hover:border-emerald-500/80
              transition-all"
                        >
                            <div className="relative h-32 w-full rounded-xl overflow-hidden">
                                <Image
                                    src={s.image}
                                    alt={s.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    priority={i < 2}
                                />
                            </div>

                            <div className="p-5">
                                <div className="flex items-center gap-3 mb-2 text-emerald-600 dark:text-emerald-400">
                                    {s.icon}
                                    <h3 className="font-semibold">{s.title}</h3>
                                </div>

                                <p className="text-base mb-3 text-gray-700 dark:text-gray-300">
                                    {s.blurb}
                                </p>

                                <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-base">
                                    {s.bullets.map((b, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <span className="text-emerald-500">❄</span>
                                            {b}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
