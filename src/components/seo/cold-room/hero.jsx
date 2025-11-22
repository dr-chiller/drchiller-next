import img_1 from "@/assets/products/cold-rooms-2.webp";
import img_2 from "@/assets/products/chiller-rooms.webp";
import ServiceHero from "../main/hero";

const ColdRoomHero = () => {
    return (
        <ServiceHero
            heading="Cold Rooms in UAE"
            description={`Cold rooms are essential for industries that require controlled storage temperatures to protect food, medicines, chemicals and perishable goods. At Chiller Technical Services L.L.C. (CTS), we design, build and install high-quality cold rooms that deliver stable cooling and long-term reliability in UAE’s climate.

                        Our cold rooms are widely used in restaurants, supermarkets, food processing units, warehouses and industrial facilities.`}
            image1={img_1}
            image2={img_2}
            alt1="Cold Rooms"
            alt2="Chiller Rooms"
        />
    );
};

export default ColdRoomHero;
