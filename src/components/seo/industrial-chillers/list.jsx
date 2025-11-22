import InfoList from "../main/list";

const ServiceData = {
    title: "Our Water Chiller Range",
    items: [
        {
            title: "Air Cooled Industrial Chillers",
            description: `Air cooled chillers are ideal for sites without cooling towers. They offer easy installation, low maintenance and excellent energy efficiency.`,
            sub_desc: "Key Features:",
            bullets: [
                "Weather-resistant outdoor design",
                "High-efficiency compressors",
                "Microprocessor-based controls",
                "Quiet operation",
                "Suitable for commercial and industrial plants",
            ],
            footer: `Air cooled units are perfect for factories, warehouses, workshops and medium-to-large production spaces.`
        },
        {
            title: "Water Cooled Industrial Chillers",
            description: `Water cooled chillers deliver high cooling capacity and stable temperatures for continuous industrial processes.`,
            sub_desc: "Benefits include:",
            bullets: [
                "Better efficiency in high ambient conditions",
                "Long service life",
                "Higher cooling output for large-scale operations",
                "Ideal for 24/7 production environments",
            ],
            footer: "Best suited for manufacturing plants, food industries, data centers, plastic molding and heavy-duty cooling needs."
        },
        {
            title: "Process Chillers",
            description: `Process chillers are built for industries that require precise temperature control for machinery and manufacturing lines.`,
            sub_desc: "Applications:",
            bullets: [
                "Injection molding",
                "Chemical processing",
                "Pharmaceutical production",
                "Printing and packaging",
                "Food processing and storage",
            ],
            footer: "These chillers deliver accurate, stable cooling to ensure smooth production and equipment protection."
        }, 
        {
            title: "Custom-Built Chillers",
            description: `Every industry has unique cooling demands. CTS provides custom-built industrial chillers tailored to:`,
            bullets: [
                "Required tonnage",
                "Temperature range",
                "Space limitations",
                "Energy-saving targets",
                "Special materials or design needs",
            ],
            footer: "We design and build systems that match your exact operational requirements."
        }
    ]
};

export default function IndustrialChillerCard() {
    return <InfoList data={ServiceData} />
}