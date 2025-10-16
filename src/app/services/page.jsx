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