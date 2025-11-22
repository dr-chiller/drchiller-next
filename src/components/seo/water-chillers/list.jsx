import InfoList from "../main/list";

const ServiceData = {
    title: "Our Water Chiller Range",
    items: [
        {
            title: "Air Cooled Water Chillers",
            description: `Air cooled water chillers are ideal for locations without cooling towers. They offer simple installation, strong cooling output and low maintenance requirements.`,
            sub_desc: "Features include:",
            bullets: [
                "Weatherproof outdoor units",
                "High-efficiency compressors",
                "Intelligent control systems",
                "Energy-efficient operation",
                "Suitable for commercial and light industrial use",
            ],
            footer: `These are a reliable choice for offices, warehouses, villas, hotels and mid-sized production facilities.`
        },
        {
            title: "Water Cooled Water Chillers",
            description: `Designed for heavy-duty cooling, water cooled chillers deliver superior efficiency and high-capacity performance for large industrial operations.`,
            sub_desc: "Advantages:",
            bullets: [
                "High cooling output",
                "Stable performance during peak weather",
                "Longer equipment life",
                "Ideal for continuous and demanding processes",
            ],
            footer: "Commonly used in manufacturing plants, data centers, food processing units and high-load commercial facilities."
        },
        {
            title: "Process Water Chillers",
            description: `Process water chillers are built for industries that require accurate and consistent temperature control for equipment and production lines.`,
            sub_desc: "Suitable for:",
            bullets: [
                "Injection molding",
                "Chemical processing",
                "Pharmaceutical production",
                "Printing, laser and packaging machines",
                "Food and beverage industries",
            ],
            footer: "These chillers ensure machinery protection, process stability and improved production efficiency."
        }, 
        {
            title: "Customized Water Chillers",
            description: `Some applications need a tailored cooling system. CTS offers custom-built water chillers designed according to your:`,
            bullets: [
                "Required cooling capacity",
                "Temperature range",
                "Available space",
                "Industry-specific needs",
                "Energy-efficiency goals",
            ],
            footer: "We design solutions that match your exact working environment."
        }
    ]
};

export default function WaterChillerCard() {
    return <InfoList data={ServiceData} />
}