export const metadata = {
    title: "Coil Manufacturing & Replacement | CTS, UAE",
    description:
        "Get custom coil manufacturing and replacement services from CTS. Durable coils designed for superior chiller and HVAC performance across the UAE.",
    alternates: { canonical: `/services/coil-manufacturing-replacements` }

};

import PageHeader from "@/components/page-header";
import CoilManufacturingHero from "@/components/services/coil-manufacturing/hero";
import CoilManufacturingSections from "@/components/services/coil-manufacturing/section";
import RelatedServices from "@/components/services/related-services";

export default function CoilManufacturingPage() {
    return (
        <div>
            <PageHeader title="Coil Manufacturing & Replacement" backgroundImage="/coil-header.webp" />
            <CoilManufacturingHero />
            <CoilManufacturingSections />
            <RelatedServices current="Coil Manufacturing & Replacements" />
        </div>
    )
}