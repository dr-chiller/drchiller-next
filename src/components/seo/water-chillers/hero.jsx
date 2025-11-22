import img_1 from "@/assets/products/water-chiller-1.webp";
import img_2 from "@/assets/products/air-cooled-industrial-water-chiller.webp";
import ServiceHero from "../main/hero";

const WaterChillerHero = () => {
    return (
        <ServiceHero
            heading="Water Chillers in UAE"
            description={`Water chillers are essential for cooling large spaces, industrial processes and commercial environments that demand stable, efficient temperature control. At Chiller Technical Services L.L.C. (CTS), we provide high-performance water chillers built for durability, low energy consumption and consistent cooling in UAE conditions.

                        Our systems are trusted by factories, warehouses, commercial buildings and specialized industries across the region.`}
            image1={img_1}
            image2={img_2}
            alt1="Water Chiller"
            alt2="Air Cooled Industrial Chiller"
        />
    );
};

export default WaterChillerHero;
