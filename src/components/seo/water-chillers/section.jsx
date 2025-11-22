import ContactSection from "../main/sections/contact";
import ServiceProcess from "../main/sections/service";
import AreasWeServe from "../main/sections/areas";
import BenefitsSection from "../main/sections/benefits";

export default function WaterChillerSections() {
    return (
        <section className="py-16 bg-white dark:bg-black">
            <div className="max-w-7xl mx-auto px-4">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                    <ServiceProcess
                        title="Our Supply and Installation Process"
                        steps={[
                            { title: "Site Inspection and Load Study", text: "We analyze your cooling demand, available space and operational needs." },
                            { title: "Chiller Selection or Custom Design", text: "We recommend the ideal water chiller or create a custom unit if required." },
                            { title: "Professional Installation", text: "Our technicians install the system following industry standards and safety guidelines." },
                            { title: "Testing and Commissioning", text: "We run complete performance checks to ensure smooth, efficient cooling." },
                            { title: "Ongoing Support and Maintenance", text: "CTS provides service, repairs and long-term support for all installed units." },
                        ]}
                    />

                    <AreasWeServe
                        title="Where Our Water Chillers Are Used?"
                        description="CTS water chillers are widely used across multiple sectors in the UAE, including:"
                        areas={["Industrial plants", "Commercial buildings", "Food and beverage processing", "Pharmaceutical and chemical production", "Plastic and rubber manufacturing", "Cold storage", "HVAC and district cooling systems"]}
                    />

                    <BenefitsSection
                        title="Benefits of CTS Water Chillers"
                        benefits={[
                            "Higher cooling output",
                            "Better energy savings",
                            "Long operational life",
                            "Reduced downtime",
                            "Stable temperature control",
                            "Reliable performance in UAE's climate",
                        ]}
                    />

                    <ContactSection
                        data={{
                            title: "Contact Us",
                            description: "Get high-quality water chillers designed for efficiency and long-term reliability.",
                            location: "CTS - Chiller Technical Services L.L.C., Industrial Area 02, Ajman, UAE",
                            email: "info@drchiller.com",
                            phones: [
                                { label: "+971 67434537", tel: "+97167434537" },
                                { label: "+971 556700789", tel: "+971556700789" }
                            ],
                            footer: "Request a consultation and choose the right water chiller for your facility."
                        }}
                    />
                </div>
            </div>
        </section >
    )
}