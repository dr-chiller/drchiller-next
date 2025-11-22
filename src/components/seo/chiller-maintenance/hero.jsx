import img_1 from "@/assets/services/chilled-water-fcu.webp";
import img_2 from "@/assets/services/chilled-water-leak.webp";
import ServiceHero from "../main/hero";

const ChillerMaintenanceHero = () => {
    return (
        <ServiceHero
            heading="Industrial Chiller Maintenance in UAE"
            description={`Industrial chillers work under heavy load and long operating hours, making proper maintenance essential for stable performance. At Chiller Technical Services L.L.C. (CTS), we provide professional industrial chiller maintenance that improves cooling efficiency, prevents unexpected shutdowns and extends equipment life.

                        Our technicians service all types and brands of industrial chillers used in factories, production units, warehouses and commercial facilities across the UAE.`}
            image1={img_1}
            image2={img_2}
            alt1="Chiller FCU"
            alt2="Industrial Chiller Leak"
        />

    );
};

export default ChillerMaintenanceHero;
