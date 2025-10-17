"use client";

import { Wrench, ShieldCheck, Repeat2 } from "lucide-react";
import ServiceCard from "@/components/services/service-card";

import amc_1 from "@/assets/services/amc-contract.webp";
import amc_2 from "@/assets/services/amc-multi-sector.webp";
import amc_3 from "@/assets/services/amc-preventive-maintenance.webp";
import amc_4 from "@/assets/services/amc-breakdown-maintenance.webp";
import amc_5 from "@/assets/services/amc-priority.webp";
import amc_6 from "@/assets/services/amc-parts-replacement.webp";

const amcServices = [
    {
        title: "Annual Maintenance Contract",
        icon: <ShieldCheck size={32} />,
        image: amc_1,
        blurb:
            "Comprehensive AMC plans for chillers, cold rooms and all types of AC units — ensuring uninterrupted performance throughout the year.",
        bullets: [
            "With or without materials",
            "Includes preventive & breakdown maintenance",
            "Priority support available",
        ],
    },
    {
        title: "Multi-Sector Coverage",
        icon: <ShieldCheck size={32} />,
        image: amc_2,
        blurb:
            "Tailored AMC packages for villas, schools, fisheries, apartments, factories and hospitals.",
        bullets: [
            "Residential & commercial facilities",
            "Customised visit schedules",
            "24/7 service response (optional)",
        ],
    },
    {
        title: "Preventive Maintenance",
        icon: <Wrench size={32} />,
        id: "preventive-maintenance",
        image: amc_3,
        blurb:
            "Scheduled inspections and servicing to avoid expensive downtime and keep your systems running efficiently.",
        bullets: [
            "Filter cleaning and condenser wash",
            "Operational parameter checks",
            "Performance optimisation",
        ],
    },
    {
        title: "Breakdown Maintenance",
        icon: <Repeat2 size={32} />,
        id: "breakdown-maintenance",
        image: amc_4,
        blurb:
            "Rapid fault diagnosis and rectification for any sudden system breakdown or technical failure.",
        bullets: [
            "On-site troubleshooting",
            "Component repair / replacement",
            "Minimum turnaround time",
        ],
    },
    {
        title: "Priority Support",
        icon: <ShieldCheck size={32} />,
        image: amc_5,
        blurb:
            "Get access to our priority support channel for faster response and guaranteed call attendance.",
        bullets: [
            "Fast dispatch of technicians",
            "Emergency service option",
            "Higher SLA commitment",
        ],
    },
    {
        title: "Parts Replacement",
        icon: <Wrench size={32} />,
        image: amc_6,
        blurb:
            "Replacement of worn-out or damaged parts as part of the AMC scope. Both OEM and compatible parts available.",
        bullets: [
            "Compressors, motors & fans",
            "Valves, controls & sensors",
            "Flexible material options",
        ],
    },
];

export default function AMCSections() {
    return (
        <section className="py-12 bg-gray-100 dark:bg-gray-950 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-200 text-center mb-10">
                    AMC Services - What's Included
                </h2>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {amcServices.map((item, idx) => (
                        <ServiceCard key={idx} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}
