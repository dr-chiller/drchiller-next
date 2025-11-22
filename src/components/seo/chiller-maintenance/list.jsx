import InfoList from "../main/list";

const ServiceData = {
    title: "Our Industrial Chiller Maintenance Services",
    items: [
        {
            title: "Preventive Maintenance",
            description: `Preventive maintenance keeps your system operating at peak efficiency and reduces operational costs.`,
            sub_desc: "Service includes:",
            bullets: [
                "Deep cleaning of coils and heat exchangers",
                "Checking refrigerant levels and leak points",
                "Tightening electrical connections",
                "Inspecting compressor health",
                "Monitoring water flow and temperature",
                "Verifying control panel and sensor performance",
            ],
            footer: `Regular care prevents major failures and ensures consistent cooling for industrial processes.`
        },
        {
            title: "Comprehensive System Inspection",
            description: `We conduct full system audits to detect issues early and prevent downtime.`,
            sub_desc: "Inspection covers:",
            bullets: [
                "Compressors and motors",
                "Condensers and evaporators",
                "Pumps, valves and piping",
                "DCooling towers (if applicable)",
                "Control circuits and safety devices",
            ],
            footer: `Our team identifies faults before they grow into costly repairs.`
        },
        {
            title: "Coil and Heat Exchanger Cleaning",
            description: `Dirt and scale reduce cooling output and increase energy consumption. We provide thorough cleaning for:`,
            bullets: [
                "Condenser coils",
                "Evaporator coils",
                "Plate heat exchangers",
                "Shell and tube exchangers",
            ],
            footer: `Clean surfaces improve heat transfer and reduce load on the chiller.`
        }, 
        {
            title: "Pump and Pipeline Maintenance",
            description: `Stable water flow is critical for efficient cooling. We inspect and maintain`,
            bullets: [
                "Chilled water pumps",
                "Valves and strainers",
                "Pipeline leak points",
                "Water quality and scaling issues",
            ],
            footer: "Proper flow ensures steady temperature control during production.",
        },
        {
            title: "Emergency Maintenance and Breakdown Support",
            description: `Industrial facilities cannot afford downtime. CTS offers fast response for sudden breakdowns, cooling failures or abnormal chiller performance.`,
            bullets: [],
            footer: `We diagnose and fix issues quickly to restore operations.`
        },
        {
            title: "Annual Maintenance Contracts (AMC)",
            description: `Our AMC packages offer scheduled visits, priority service and continuous performance tracking.`,
            sub_desc: "You get:",
            bullets: [
                "Routine inspections",
                "Cleaning and tune-ups",
                "Emergency support",
                "Performance monitoring",
                "Reduced operational disruptions",
            ],
            footer: "AMCs are ideal for plants running chillers 24/7.",
        }
    ]
};

export default function ChillerMaintenanceCard() {
    return <InfoList data={ServiceData} />
}