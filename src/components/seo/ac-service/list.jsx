import InfoList from "../main/list";

const ServiceData = {
    title: "Our AC Services",
    items: [
        {
            title: "AC Repair",
            description: `We repair all AC issues including low cooling, compressor faults, gas leaks, electrical failures, clogged coils and noisy units. Our technicians identify the root cause quickly and restore your AC to stable performance with minimal downtime.`,
            bullets: [],
            footer: `We use original spare parts and follow manufacturer standards to extend the life of your system.`
        },
        {
            title: "Preventive AC Maintenance",
            description: `Regular AC maintenance improves cooling, reduces energy consumption and prevents sudden breakdowns. Our preventive service includes:`,
            bullets: [
                "Deep cleaning of coils and filters",
                "Checking refrigerant pressure and possible leaks",
                "Inspection of wiring, PCB and sensors",
                "Drain line cleaning to avoid water leakage",
                "Temperature and performance testing",
                "Maintenance checklist after every visit",
            ],
            footer: `Preventive care keeps your system running smoothly all year.`
        },
        {
            title: "AC Servicing and Overhauling",
            description: `If your AC is old or underperforming, our complete overhauling service restores it to near-new efficiency. We provide:`,
            bullets: [
                "Motor servicing or rewinding",
                "Coil cleaning or replacement",
                "System recalibration",
                "Fan and blower servicing",
                "Full performance testing",
            ],
            footer: `Overhauling helps avoid costly new system replacements.`
        }, 
        {
            title: "Duct Cleaning and Air Quality Treatment",
            description: `Dust-filled ducts reduce airflow and affect indoor air quality. We offer professional duct cleaning and sanitization to remove dirt, mold, allergens and debris. Clean ducts ensure better cooling and healthier air circulation.`,
            bullets: []
        },
        {
            title: "Annual Maintenance Contracts (AMC)",
            description: `Our AMCs provide scheduled visits, priority support and performance tracking for your AC systems. You get:`,
            bullets: [
                "Regular inspections",
                "Emergency support",
                "Reduced downtime",
                "Consistent cooling",
                "Better energy efficiency",
            ],
            footer: `AMCs are ideal for villas, offices, buildings and industrial spaces.`
        }
    ]
};

export default function ACServiceCard() {
    return <InfoList data={ServiceData} />
}