import HomeHeroClient from "./hero-client";

const slides = [
    {
        header: "Water Chillers, Coolers & Heat Pumps",
        description:
            "High-efficiency water chillers designed for reliable cooling of industrial and commercial applications.",
        button: "/products/water-chillers",
        image: "/hero1.webp",
    },
    {
        header: "Cold Rooms & Ice Block Machines",
        description:
            "Custom-built cold rooms and walk-in freezers for food, pharmaceuticals and logistics industries.",
        button: "/products/cold-rooms",
        image: "/hero2.webp",
    },
    {
        header: "Heat Exchangers & Cooling Towers",
        description:
            "High-performance heat exchangers for efficient thermal transfer in HVAC and process systems.",
        button: "/products/heat-exchangers",
        image: "/hero4.webp",
    },
    {
        header: "A/C Units & Air Curtains",
        description:
            "Robust air conditioning systems for residential, commercial and industrial environments.",
        button: "/products/ac-units",
        image: "/hero3.webp",
    },
    {
        header: "A/C, Chiller & Genset Rentals",
        description:
            "Short and long-term rental solutions including A/C units, water chillers and diesel generators.",
        button: "/services/rentals",
        image: "/hero5.webp",
    },
    {
        header: "Chilled Water Pipeline & Flushing",
        description:
            "Design, installation and flushing of chilled water pipelines for efficient system performance.",
        button: "/services/pipeline",
        image: "/hero6.webp",
    },
    {
        header: "A/C, Chiller & Coldroom Maintenance",
        description:
            "Preventive and corrective maintenance services for air conditioning, chiller and cold room systems.",
        button: "/services/maintenance",
        image: "/hero7.webp",
    },
    {
        header: "Coil Manufacturing & Replacements",
        description:
            "Custom coil fabrication and replacement services to restore capacity and improve system efficiency.",
        button: "/services/coil",
        image: "/hero8.webp",
    },
    {
        header: "Overhauling & Winding",
        description:
            "Professional compressor overhauling and motor winding services to extend equipment lifespan.",
        button: "/services/overhauling",
        image: "/hero9.webp",
    },
    {
        header: "AMC",
        description:
            "Annual Maintenance Contracts providing priority support and long-term service coverage.",
        button: "/services/amc",
        image: "/hero10.webp",
    },
];

export default function HomeHero() {
    return <HomeHeroClient slides={slides} />
}
