import AboutHero from "@/components/about/hero";
import AboutSection from "@/components/about/section";
import PageHeader from "@/components/page-header";

export default function About() {
    return(
        <div>
            <PageHeader title="About" backgroundImage="/about-us-header.webp" />
            <AboutHero />
            <AboutSection />
        </div>
    )
}