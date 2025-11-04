export const metadata = {
    title: "Chilled Water Pipeline Flushing | CTS UAE Experts",
    description:
        "CTS offers professional chilled water pipeline flushing services. Improve cooling system efficiency and prevent blockages across the UAE.",
};

import PageHeader from "@/components/page-header";
import ChilledWaterPipelineHero from "@/components/services/chilled-water-pipeline/hero";
import ChilledWaterPipelineSections from "@/components/services/chilled-water-pipeline/section";
import RelatedServices from "@/components/services/related-services";

export default function ChilledWaterPipelinePage() {
    return (
        <div>
            <PageHeader title="Chilled Water Pipeline & Flushing" backgroundImage="/chilled-water-pipeline-header.webp" />
            <ChilledWaterPipelineHero />
            <ChilledWaterPipelineSections />
            <RelatedServices current="Chilled Water Pipeline & Flushing" />
        </div>
    )
}