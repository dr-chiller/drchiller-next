export const metadata = {
    title: "Industrial Chiller Maintenance | CTS, UAE",
    description:
        "Ensure peak performance with expert industrial chiller maintenance by CTS. Our technicians provide top service in UAE to keep your systems running efficiently.",
    alternates: { canonical: `/services/industrial-chiller-maintenance` }

};

import PageHeader from "@/components/page-header";
import ChillerMaintenanceHero from "@/components/seo/chiller-maintenance/hero";
import ChillerMaintenanceCard from "@/components/seo/chiller-maintenance/list";
import ChillerMaintenanceSections from "@/components/seo/chiller-maintenance/section";
import WhyChooseCTS_ICM from "@/components/seo/chiller-maintenance/why";

export default function IndustrialChillerMaintenancePage() {
    return (
        <div>
            <PageHeader title="Industrial Chiller Maintenance" backgroundImage={"/maintenance-header.webp"} />
            <ChillerMaintenanceHero />
            <WhyChooseCTS_ICM />
            <ChillerMaintenanceCard />
            <ChillerMaintenanceSections />
        </div>
    )
}