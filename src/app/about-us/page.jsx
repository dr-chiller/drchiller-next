export const metadata = {
    title: "About CTS - Chiller Technical Services in Ajman, UAE",
    description:
        "CTS - Chiller Technical Services, a trusted Ajman-based company offering expert chiller repair, maintenance, and installation services across the UAE.",
};

import AboutHero from "@/components/about/hero";
import AboutSection from "@/components/about/section";
import PageHeader from "@/components/page-header";

export default function About() {
    return (
        <div>
            <PageHeader title="About" backgroundImage="/about-us-header.webp" />
            <AboutHero />
            <AboutSection />
        </div>
    )
}