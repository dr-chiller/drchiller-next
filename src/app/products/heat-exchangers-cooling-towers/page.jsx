import PageHeader from "@/components/page-header";
import HeatExchangersHero from "@/components/products/heat-exchangers/hero";
import HeatExchangersSection from "@/components/products/heat-exchangers/section";
import HeatExchangersSubSection from "@/components/products/heat-exchangers/sub-section";
import RelatedProducts from "@/components/products/related-products";

export default function HeatExchangersPage() {
    return (
        <div>
            <PageHeader title="Heat Exchangers & Cooling Towers" backgroundImage="/heat-exchangers-header.webp" />
            <HeatExchangersHero />
            <HeatExchangersSection />
            <HeatExchangersSubSection />
            <RelatedProducts current="Heat Exchangers" />
        </div>
    )
}