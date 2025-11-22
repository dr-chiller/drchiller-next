import img_1 from "@/assets/services/chilled-water-flushing.webp";
import img_2 from "@/assets/services/coil-copper-brazing.webp";
import ServiceHero from "../main/hero";

const ChillerRepairHero = () => {
    return (
        <ServiceHero
            heading="Chiller Repair and Maintenance in Ajman, UAE"
            description={`Keeping your chiller running efficiently in UAE’s harsh climate requires expert care. At Chiller Technical Services L.L.C. (CTS), we specialize in chiller repair, servicing and maintenance for commercial, industrial and residential systems in Ajman and across the UAE.

                        We focus on fast, reliable solutions that extend equipment life, save energy, and prevent costly breakdowns.`}
            image1={img_1}
            image2={img_2}
            alt1="Chiller Water Flushing"
            alt2="Coil Copper Brazing"
        />

    );
};

export default ChillerRepairHero;
