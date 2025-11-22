import InfoList from "../main/list";

const ServiceData = {
    title: "Our Cold Room Solutions",
    items: [
        {
            title: "Chiller Rooms",
            description: `Chiller rooms are designed for medium-temperature storage used for fresh food, dairy, beverages and day-to-day commercial operations.`,
            sub_desc: "Features:",
            bullets: [
                "Temperature range typically 0°C to 10°C",
                "High-efficiency compressors",
                "Quality insulated panels",
                "Ideal for restaurants, supermarkets and kitchens",
            ],
        },
        {
            title: "Freezer Rooms",
            description: `Freezer rooms offer low-temperature storage for frozen foods, meat, seafood, ice cream and long-term preservation.`,
            sub_desc: "Benefits:",
            bullets: [
                "Temperature range from -18°C to -25°C",
                "Heavy-duty insulation",
                "Strong cooling performance",
                "Suitable for warehouses, food factories and cold storage facilities",
            ],
        },
        {
            title: "Walk-In Cold Rooms",
            description: `Walk-in cold rooms are built for easy access and dependable cooling. They can be customized in any size or layout according to your space.`,
            sub_desc: "Best for:",
            bullets: [
                "Hotels",
                "Catering services",
                "Retail stores",
                "Distribution centers",
            ],
            footer: "We ensure optimal airflow and uniform cooling throughout the room."
        }, 
        {
            title: "Custom-Built Cold Rooms",
            description: `Some industries require specialized cold storage. CTS provides tailor-made cold rooms for:`,
            bullets: [
                "Pharma and medical storage",
                "Floral storage",
                "Chemical storage",
                "Large industrial facilities",
                "Multi-temperature storage applications",
            ],
            footer: "We design precise cooling systems that meet safety and regulatory standards."
        }
    ]
};

export default function ColdRoomCard() {
    return <InfoList data={ServiceData} />
}