import PageHeader from "@/components/page-header";
import OverhaulingHero from "@/components/services/overhauling-winding/hero";
import OverhaulingSections from "@/components/services/overhauling-winding/section";
import RelatedServices from "@/components/services/related-services";

export default function OverhaulingPage() {
    return (
        <div>
            <PageHeader title="Overhauling & Winding" backgroundImage="/overhauling-header.webp" />
            <OverhaulingHero />
            <OverhaulingSections />
            <RelatedServices current="Overhauling & Winding" />
        </div>
    )
}