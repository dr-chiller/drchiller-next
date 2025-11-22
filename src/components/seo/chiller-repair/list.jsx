import InfoList from "../main/list";

const ServiceData = {
    title: "Our Chiller Services",
    items: [
        {
            title: "Chiller Repair",
            description: `Our team handles all kinds of chiller problems from compressor failures and coil leaks to refrigerant issues and motor faults. We inspect, repair and restore your system for stable operation with minimal downtime.`,
            bullets: [],
            footer: `We use genuine parts and ensure your system runs within manufacturer standards.`
        },
        {
            title: "Preventive Chiller Maintenance",
            description: `Regular service keeps your chiller running efficiently all year. Preventive maintenance not only improves cooling but also lowers your energy cost. Our maintenance includes:`,
            bullets: [
                "Cleaning filters, coils and heat exchangers",
                "Checking refrigerant levels and leak points",
                "Testing electrical and control systems",
                "Monitoring water flow, pressure and temperature",
                "Detailed performance reports for your records",
            ],
        },
        {
            title: "Chiller Servicing and Overhauling",
            description: `For aging or underperforming systems, we offer complete overhauling — including motor rewinding, coil replacement and system calibration. Our technicians restore old units to near-new performance, saving you from full replacement costs.`,
            bullets: [],
        }, 
        {
            title: "Chilled Water Pipeline Flushing",
            description: `Dirty pipelines affect your chiller's efficiency. CTS provides pipeline flushing and cleaning services to remove scale, debris and corrosion. Clean pipelines ensure better cooling performance and reduce energy waste.`,
            bullets: [],
        },
        {
            title: "Annual Maintenance Contracts (AMC)",
            description: `Our AMCs are designed for long-term system health. You get scheduled visits, priority service, and continuous performance monitoring. We keep your chillers ready for peak demand seasons without unexpected failures.`,
            bullets: [],
        },
    ]
};

export default function ChillerRepairCard() {
    return <InfoList data={ServiceData} />
}