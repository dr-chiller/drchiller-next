export const metadata = {
    title: "AC Service Dubai | CTS - Chiller Technical Services",
    description:
        "Ensure your AC runs smoothly year-round with expert AC service in Dubai. Our skilled technicians provide thorough repair and maintenance for lasting comfort.",
    alternates: { canonical: `/services/ac-service-dubai` }

};

import PageHeader from "@/components/page-header";
import ACServiceHero from "@/components/seo/ac-service/hero";
import ACServiceCard from "@/components/seo/ac-service/list";
import ACSections from "@/components/seo/ac-service/section";
import WhyChooseCTS from "@/components/seo/ac-service/why";

export default function ACServiceDubaiPage() {
    return (
        <div>
            <PageHeader title={"AC Service Dubai"} backgroundImage={"/ac-units-header.webp"} />
            <ACServiceHero />
            <WhyChooseCTS />
            <ACServiceCard />
            <ACSections />
        </div>
    )
}