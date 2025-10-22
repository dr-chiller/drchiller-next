import PageHeader from "@/components/page-header";
import CoilManufacturingHero from "@/components/services/coil-manufacturing/hero";
import CoilManufacturingSections from "@/components/services/coil-manufacturing/section";
import RelatedServices from "@/components/services/related-services";

export default function CoilManufacturingPage() {
    return(
        <div>
            <PageHeader title="Coil Manufacturing & Replacement" backgroundImage="/coil-header.webp" />
            <CoilManufacturingHero />
            <CoilManufacturingSections />
            <RelatedServices current="Coil Manufacturing & Replacements" />
        </div>
    )
}