import img_1 from "@/assets/products/air-cooled-industrial-water-chiller.webp";
import img_2 from "@/assets/products/water-cooled-industrial-water-chiller.webp";
import ServiceHero from "../main/hero";

const IndustrialChillerHero = () => {
    return (
        <ServiceHero
            heading="Industrial Chillers in UAE"
            description={`Industrial operations need reliable cooling systems that perform under heavy load, long run hours and tough environmental conditions. At Chiller Technical Services L.L.C. (CTS), we supply high-performance industrial chillers designed for durability, energy efficiency and stable cooling output.

                        Our chillers support factories, warehouses, production units, commercial facilities and specialized industrial processes across the UAE.`}
            image1={img_1}
            image2={img_2}
            alt1="Air Cooled Industrial Water Chiller"
            alt2="Water Cooled Industrial Chiller"
        />
    );
};

export default IndustrialChillerHero;
