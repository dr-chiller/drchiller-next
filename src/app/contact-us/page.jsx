export const metadata = {
    title: "Contact CTS - Chiller Technical Services in Ajman, UAE",
    description:
        "Get in touch with CTS - Chiller Technical Services, Ajman. Contact us for expert chiller repair, maintenance, and installation services across the UAE.",
};
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