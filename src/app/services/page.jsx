export const metadata = {
    title: "CTS Services | Chiller Repair & HVAC Solutions UAE",
    description:
        "Explore CTS professional chiller, HVAC, and cooling services across the UAE. Expert repair, maintenance, and installation for all industrial needs.",
};

import PageHeader from "@/components/page-header";
import ServicesList from "@/components/services/main/list";

export default function Services() {
    return (
        <div>
            <PageHeader title="Services" backgroundImage="/ac-units-header.webp" />
            <ServicesList />
        </div>
    )
}