import ContactSection from "../main/sections/contact";
import ServiceProcess from "../main/sections/service";
import AreasWeServe from "../main/sections/areas";
import BenefitsSection from "../main/sections/benefits";

export default function IndustrialChillerSections() {
    return (
        <section className="py-16 bg-white dark:bg-black">
            <div className="max-w-7xl mx-auto px-4">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                    <ServiceProcess
                        title="Our Supply and Installation Process"
                        steps={[
                            { title: "Site Visit and Load Assessment", text: "We evaluate your cooling needs, space and power requirements." },
                            { title: "Chiller Selection or Custom Design", text: "We recommend the best-fit chiller or design a tailored solution." },
                            { title: "Delivery and Installation", text: "Our technicians install the unit with proper safety and quality standards." },
                            { title: "Testing and Commissioning", text: "We run complete performance tests for cooling efficiency and reliability." },
                            { title: "After-Sales Support", text: "We offer maintenance, servicing and long-term support for your system." },
                        ]}
                    />

                    <AreasWeServe
                        title="Industries We Serve"
                        description="Our industrial chillers support a wide range of operations across the UAE, including:"
                        areas={["Manufacturing plants", "Plastic and rubber industries", "Food and beverage processing", "Chemical and pharmaceutical industries", "Printing and packaging", "HVAC and district cooling systems", "Commercial and storage facilities"]}
                    />

                    <BenefitsSection
                        title="Benefits of CTS Industrial Chillers"
                        benefits={[
                            "Lower operational costs",
                            "Stable temperature control",
                            "Higher production efficiency",
                            "Reduced breakdowns",
                            "Long equipment lifespan",
                            "Optimized energy performance",
                        ]}
                    />

                    <ContactSection
                        data={{
                            title: "Contact Us",
                            description: "For industrial chillers built for performance and reliability, reach out to our team.",
                            location: "CTS - Chiller Technical Services L.L.C., Industrial Area 02, Ajman, UAE",
                            email: "info@drchiller.com",
                            phones: [
                                { label: "+971 67434537", tel: "+97167434537" },
                                { label: "+971 556700789", tel: "+971556700789" }
                            ],
                            footer: "Request a consultation and choose the right cooling system for your industrial facility."
                        }}
                    />
                </div>
            </div>
        </section >
    )
}