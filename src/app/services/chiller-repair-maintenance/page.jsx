export const metadata = {
    title: "Chiller Repair, Services, and Maintenance in Ajman, UAE",
    description:
        "Chiller Technical Services L.L.C offers expert chiller repair and service in Ajman, UAE. Ensure your chiller system running efficiently.",
    alternates: { canonical: `/services/chiller-repair-maintenance` }
};

import PageHeader from "@/components/page-header";
import ChillerRepairHero from "@/components/seo/chiller-repair/hero";
import ChillerRepairCard from "@/components/seo/chiller-repair/list";
import ChillerRepairSections from "@/components/seo/chiller-repair/section";
import WhyChooseCTS_CRM from "@/components/seo/chiller-repair/why";

export default function ChillerRepairMaintenance() {
    return (
        <div>
            <PageHeader title="Chiller Repair Maintenance" backgroundImage={"/amc-header.webp"} />
            <ChillerRepairHero />
            <WhyChooseCTS_CRM />
            <ChillerRepairCard />
            <ChillerRepairSections />
        </div>
    )
}