import PageHeader from "@/components/page-header";
import RelatedProducts from "@/components/products/related-products";
import WaterChillersHero from "@/components/products/water-chillers/hero";
import WaterChillersSections from "@/components/products/water-chillers/section";
import WaterChillersSubSection from "@/components/products/water-chillers/sub-section";

export default function WaterChillersPage() {
    return (
        <div>
            <PageHeader title="Water Chillers, Water Coolers & Heat Pumps" backgroundImage="/water-chiller-header.webp" />
            <WaterChillersHero />
            <WaterChillersSections />
            <WaterChillersSubSection />
            <RelatedProducts current="Water Chillers" />
        </div>
    )
}