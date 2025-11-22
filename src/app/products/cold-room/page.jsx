export const metadata = {
    title: "Cold Room Manufacturers | CTS - Chiller Technical Services",
    description:
        "CTS is one of the leading cold room manufacturers in UAE providing reliable cooling solutions. We design and install efficient cold rooms for all industries.",
    alternates: { canonical: `/products/cold-room` }
};

import PageHeader from "@/components/page-header";
import WaterChillerHero from "@/components/seo/water-chillers/hero";
import WaterChillerCard from "@/components/seo/water-chillers/list";
import WaterChillerSections from "@/components/seo/water-chillers/section";
import WhyChooseCTS_WC from "@/components/seo/water-chillers/why";

export default function WaterChillerPage() {
    return (
        <div>
            <PageHeader title="Cold Room" backgroundImage={"/cold-rooms-header.webp"} />
            <WaterChillerHero />
            <WhyChooseCTS_WC />
            <WaterChillerCard />
            <WaterChillerSections />
        </div>
    )
}