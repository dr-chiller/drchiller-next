export const metadata = {
    title: "Cold Room Manufacturers | CTS - Chiller Technical Services",
    description:
        "CTS is one of the leading cold room manufacturers in UAE providing reliable cooling solutions. We design and install efficient cold rooms for all industries.",
    alternates: { canonical: `/products/cold-room` }
};

import PageHeader from "@/components/page-header";
import ColdRoomComponents from "@/components/seo/cold-room/components";
import ColdRoomHero from "@/components/seo/cold-room/hero";
import ColdRoomCard from "@/components/seo/cold-room/list";
import ColdRoomSections from "@/components/seo/cold-room/section";
import WhyChooseCTS_CR from "@/components/seo/cold-room/why";

export default function WaterChillerPage() {
    return (
        <div>
            <PageHeader title="Cold Room" backgroundImage={"/cold-rooms-header.webp"} />
            <ColdRoomHero />
            <WhyChooseCTS_CR />
            <ColdRoomCard />
            <ColdRoomComponents />
            <ColdRoomSections />
        </div>
    )
}