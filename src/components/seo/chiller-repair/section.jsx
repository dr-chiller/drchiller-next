import ContactSection from "../main/sections/contact";
import ServiceProcess from "../main/sections/service";
import AreasWeServe from "../main/sections/areas";
import BenefitsSection from "../main/sections/benefits";

export default function ChillerRepairSections() {
    return (
        <section className="py-16 bg-white dark:bg-black">
            <div className="max-w-7xl mx-auto px-4">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                    <ServiceProcess
                        title="Our Service Process"
                        steps={[
                            { title: "Site Visit & Inspection", text: "We assess your chiller system and identify key issues." },
                            { title: "Diagnosis & Quotation", text: "You receive a clear problem report and cost estimate." },
                            { title: "Repair or Maintenance Work", text: "We carry out the service with skilled technicians." },
                            { title: "Testing & Quality Check", text: "The system is tested for performance and safety." },
                            { title: "Regular Follow-Up", text: "We track performance to ensure consistent efficiency." },
                        ]}
                    />

                    <AreasWeServe
                        title="Areas We Serve"
                        description="We are based in Ajman Industrial Area 02, serving clients across Ajman, Sharjah, Dubai, and the Northern Emirates. Whether you manage a building, factory or cooling plant, we can support your maintenance needs all over the UAE."
                    />

                    <BenefitsSection
                        title="Why Regular Maintenance Matters?"
                        benefits={[
                            "Reduces unexpected breakdowns",
                            "Increases energy efficiency",
                            "Extends chiller lifespan",
                            "Ensures consistent cooling performance",
                            "Keeps systems compliant with UAE standards",
                        ]}
                    />

                    <ContactSection
                        data={{
                            title: "Contact Us",
                            description: "Get expert help for your chiller repair and maintenance in Ajman, UAE.",
                            location: "CTS - Chiller Technical Services L.L.C., Industrial Area 02, Ajman, UAE",
                            email: "info@drchiller.com",
                            phones: [
                                { label: "+971 67434537", tel: "+97167434537" },
                                { label: "+971 556700789", tel: "+971556700789" }
                            ],
                            footer: "Request a service visit today and keep your cooling system in perfect condition."
                        }}
                    />
                </div>
            </div>
        </section >
    )
}