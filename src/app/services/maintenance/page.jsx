import PageHeader from "@/components/page-header";
import MaintenanceHero from "@/components/services/maintenance/hero";
import MaintenanceSections from "@/components/services/maintenance/section";
import RelatedServices from "@/components/services/related-services";

export default function MaintenancePage() {
    return (
        <div>
            <PageHeader title="A/C, Chiller & Cold Room Maintenance" backgroundImage="/maintenance-header.webp" />
            <MaintenanceHero />
            <MaintenanceSections />
            <RelatedServices current="A/C, Chiller & Coldroom Maintenance" />
        </div>
    )
}