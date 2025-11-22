import img_1 from "@/assets/products/heat-exchangers-2.webp";
import img_2 from "@/assets/products/retubing-heat-exchangers.webp";
import ServiceHero from "../main/hero";

const HeatExchangerHero = () => {
    return (
        <ServiceHero
            heading="Heat Exchangers in UAE"
            description={`Heat exchangers are essential for efficient thermal transfer in cooling and industrial systems. At Chiller Technical Services L.L.C. (CTS), we supply high-quality heat exchangers designed for durability, high performance and consistent efficiency in UAE's demanding climate.

                        Our products support commercial, industrial and process-based applications that require stable temperature control and long-term reliability.`}
            image1={img_1}
            image2={img_2}
            alt1="Heat Exchanger"
            alt2="Retubing Heat Exchanger"
        />
    );
};

export default HeatExchangerHero;
