export const metadata = {
    title: " Industrial Chillers | CTS - Chiller Technical Services",
    description:
        "Reliable industrial chillers built for performance and efficiency. CTS provides advanced cooling solutions for every industrial need in UAE.",
    alternates: { canonical: `/products/industrial-chillers` }
};

import PageHeader from "@/components/page-header";
import IndustrialChillerHero from "@/components/seo/industrial-chillers/hero";
import IndustrialChillerCard from "@/components/seo/industrial-chillers/list";
import IndustrialChillerSections from "@/components/seo/industrial-chillers/section";
import WhyChooseCTS_IC from "@/components/seo/industrial-chillers/why";

export default function IndustrialChillerPage() {
    return (
        <div>
            <PageHeader title="Industrial Chillers in UAE" backgroundImage={"/rental-header.webp"} />
            <IndustrialChillerHero />
            <WhyChooseCTS_IC />
            <IndustrialChillerCard />
            <IndustrialChillerSections />
        </div>
    )
}