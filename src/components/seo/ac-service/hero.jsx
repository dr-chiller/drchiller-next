import amc_1 from "@/assets/services/maintenance-2.webp";
import amc_2 from "@/assets/services/amc-contract.webp";
import ServiceHero from "../main/hero";

const ACServiceHero = () => {
    return (
        <ServiceHero
            heading="AC Service in Dubai"
            description={`Dubai's climate demands an air conditioning system that performs reliably every day. At Chiller Technical Services L.L.C. (CTS), we provide professional AC service, repair and maintenance for residential, commercial and industrial properties across Dubai.

                        We focus on fast service, accurate diagnosis and long-term solutions that improve cooling efficiency, lower energy use and reduce breakdowns.`}
            image1={amc_1}
            image2={amc_2}
            alt1="AC Maintenance"
            alt2="AMC Contract"
        />

    );
};

export default ACServiceHero;
