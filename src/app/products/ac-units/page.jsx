import PageHeader from "@/components/page-header";
import ACUnitsHero from "@/components/products/ac-units/hero";
import ACUnitsSections from "@/components/products/ac-units/section";
import ACUnitsSubSection from "@/components/products/ac-units/sub-section";
import RelatedProducts from "@/components/products/related-products";

export default function ACUnitsPage() {
    return (
        <div>
            <PageHeader title="A/C Units & Air Curtains" backgroundImage="/ac-units-header.webp" />
            <ACUnitsHero />
            <ACUnitsSections />
            <ACUnitsSubSection />
            <RelatedProducts current="A/C Units" />
        </div>
    )
}