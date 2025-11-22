export const metadata = {
    title: "Water Chillers | CTS - Chiller Technical Services",
    description:
        "High-performance water chillers designed for efficient cooling. CTS delivers reliable and energy-saving solutions for commercial and industrial needs in UAE.",
    alternates: { canonical: `/products/water-chillers` }
};

import PageHeader from "@/components/page-header";
import WaterChillerHero from "@/components/seo/water-chillers/hero";
import WaterChillerCard from "@/components/seo/water-chillers/list";
import WaterChillerSections from "@/components/seo/water-chillers/section";
import WhyChooseCTS_WC from "@/components/seo/water-chillers/why";

export default function WaterChillerPage() {
    return (
        <div>
            <PageHeader title="Water Chillers" backgroundImage={"/water-chiller-header.webp"} />
            <WaterChillerHero />
            <WhyChooseCTS_WC />
            <WaterChillerCard />
            <WaterChillerSections />
        </div>
    )
}