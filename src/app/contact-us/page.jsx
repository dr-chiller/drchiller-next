import ContactUsMap from "@/components/contact/map";
import ContactUsSection from "@/components/contact/section";
import PageHeader from "@/components/page-header";

export default function ContactPage() {
    return (
        <div>
            <PageHeader title="Contact Us" backgroundImage="/contact-us-header.webp" />
            <ContactUsSection />
            <ContactUsMap />
        </div>
    )
}