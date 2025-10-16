import PageHeader from "@/components/page-header";
import AMCHero from "@/components/services/amc/hero";
import AMCSections from "@/components/services/amc/section";
import RelatedServices from "@/components/services/related-services";

export default function AMCPage() {
    return (
        <div>
            <PageHeader title="AMC" backgroundImage="/amc-header.webp" />
            <AMCHero />
            <AMCSections />
            <RelatedServices current="AMC" />
        </div>
    )
}