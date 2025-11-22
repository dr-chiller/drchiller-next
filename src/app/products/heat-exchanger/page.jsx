export const metadata = {
    title: "Heat Exchanger Companies in UAE | CTS",
    description:
        "CTS - Chiller Technical Services is among the trusted heat exchanger companies in UAE, offering durable, efficient, and high-quality cooling solutions.",
    alternates: { canonical: `/products/heat-exchanger` }
};

import PageHeader from "@/components/page-header";
import HeatExchangerHero from "@/components/seo/heat-exchanger/hero";
import HeatExchangerCard from "@/components/seo/heat-exchanger/list";
import HeatExchangerSections from "@/components/seo/heat-exchanger/section";
import WhyChooseCTS_HE from "@/components/seo/heat-exchanger/why";

export default function HeatExchangerPage() {
    return (
        <div>
            <PageHeader title="Heat Exchanger" backgroundImage={"/heat-exchangers-header.webp"} />
            <HeatExchangerHero />
            <WhyChooseCTS_HE />
            <HeatExchangerCard />
            <HeatExchangerSections />
        </div>
    )
}