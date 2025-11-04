export const metadata = {
    title: "AC Units & Air Curtains | CTS Cooling Solutions UAE",
    description:
        "Find CTS's range of AC units and air curtains for efficient cooling and airflow. Trusted solutions for commercial and industrial spaces across the UAE.",
    alternates: { canonical: `/products/ac-units-air-curtains` }

};

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