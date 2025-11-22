import ContactSection from "../main/sections/contact";
import ServiceProcess from "../main/sections/service";
import AreasWeServe from "../main/sections/areas";
import BenefitsSection from "../main/sections/benefits";

export default function HeatExchangerSections() {
    return (
        <section className="py-16 bg-white dark:bg-black">
            <div className="max-w-7xl mx-auto px-4">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                    <ServiceProcess
                        title="Our Supply and Installation Process"
                        steps={[
                            { title: "Requirement Assessment", text: "We study your cooling load, fluid type and process needs." },
                            { title: " Product Selection or Custom Design", text: "We recommend the best heat exchanger or design a custom model." },
                            { title: "Professional Installation", text: "Our technicians install the unit with proper alignment, safety checks and system integration." },
                            { title: "Testing and Commissioning", text: "We ensure correct flow, pressure and temperature performance." },
                            { title: "Ongoing Support and Maintenance", text: "We provide servicing and cleaning support for long-term efficiency." },
                        ]}
                    />

                    <AreasWeServe
                        title="Industries We Serve"
                        description="CTS heat exchangers are used across a wide range of sectors in the UAE, including:"
                        areas={["Manufacturing plants", "Chemical and pharmaceutical industries", "Food and beverage processing", "HVAC and district cooling", "Power and energy plants", "Water treatment facilities", "Refrigeration and cooling systems"]}
                    />

                    <BenefitsSection
                        title="Benefits of CTS Heat Exchangers"
                        benefits={[
                            "Higher cooling output",
                            "Better energy performance",
                            "Reduced maintenance costs",
                            "Long operational lifespan",
                            "Corrosion-resistant materials",
                            "Reliable performance in UAE conditions",
                        ]}
                    />

                    <ContactSection
                        data={{
                            title: "Contact Us",
                            description: "Looking for trusted heat exchanger companies in UAE? CTS provides durable, efficient and engineered solutions for all industries.",
                            location: "CTS - Chiller Technical Services L.L.C., Industrial Area 02, Ajman, UAE",
                            email: "info@drchiller.com",
                            phones: [
                                { label: "+971 67434537", tel: "+97167434537" },
                                { label: "+971 556700789", tel: "+971556700789" }
                            ],
                            footer: "Request a consultation and choose the right heat exchanger for your cooling system."
                        }}
                    />
                </div>
            </div>
        </section >
    )
}