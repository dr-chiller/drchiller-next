import InfoList from "../main/list";

const ServiceData = {
    title: "Our Heat Exchanger Range",
    items: [
        {
            title: "Shell and Tube Heat Exchangers",
            description: `Ideal for heavy-duty cooling and industrial applications, shell and tube heat exchangers provide strong performance and long operational life.`,
            sub_desc: "Key Features:",
            bullets: [
                "High thermal efficiency",
                "Easy to clean and maintain",
                "Suitable for high-pressure operations",
                "Reliable for continuous industrial processes",
            ],
            footer: `Commonly used in chemical plants, manufacturing units, chillers, and HVAC systems.`
        },
        {
            title: "Plate Heat Exchangers",
            description: `Plate heat exchangers offer excellent heat transfer in a compact design, making them suitable for commercial and light industrial use.`,
            sub_desc: "Benefits:",
            bullets: [
                "High heat transfer rate",
                "Compact and space-saving",
                "Easy to service",
                "Low fluid volume requirement",
            ],
            footer: "Ideal for HVAC applications, district cooling, food processing, and water-to-water systems."
        },
        {
            title: "Brazed Plate Heat Exchangers",
            description: `These compact, sealed units are built for high efficiency in systems where leak-proof performance is critical.`,
            sub_desc: "Advantages:",
            bullets: [
                "Lightweight and compact",
                "No gaskets required",
                "High-pressure and high-temperature capability",
                "Long-lasting and reliable",
            ],
            footer: "Best for heat pumps, refrigeration systems, cooling units and small process applications."
        }, 
        {
            title: "Custom Heat Exchangers",
            description: `Some industries require specialized designs. CTS provides custom-built heat exchangers based on:`,
            bullets: [
                "Required capacity",
                "Temperature differential",
                "Fluid type and flow rate",
                "Pressure and space limitations",
                "Application-specific needs",
            ],
            footer: "We deliver tailored solutions that match your operational requirements."
        }
    ]
};

export default function HeatExchangerCard() {
    return <InfoList data={ServiceData} />
}