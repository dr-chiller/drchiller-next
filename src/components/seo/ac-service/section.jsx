import ContactSection from "../main/sections/contact";
import ServiceProcess from "../main/sections/service";
import AreasWeServe from "../main/sections/areas";
import BenefitsSection from "../main/sections/benefits";

export default function ACSections() {
    return (
        <section className="py-16 bg-white dark:bg-black">
            <div className="max-w-7xl mx-auto px-4">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                    <ServiceProcess
                        title="Our Service Process"
                        steps={[
                            { title: "Site Visit and Inspection", text: "We check your AC system, cooling output and visible faults." },
                            { title: "Diagnosis and Estimate", text: "You receive a clear report with recommended solutions and cost." },
                            { title: "Repair or Maintenance", text: "Our technicians complete the job with proper tools and standards." },
                            { title: "Testing and Quality Check", text: "We verify performance, airflow and electrical safety." },
                            { title: "Follow-Up Support", text: "We ensure your system stays efficient after the service." },
                        ]}
                    />

                    <AreasWeServe
                        title="Areas We Serve"
                        areas={["Dubai", "Ajman", "Sharjah", "Umm Al Quwain", "Northern Emirates"]}
                        description="Whether you manage a home, office, building or facility, we support all AC service needs across the UAE."
                    />

                    <BenefitsSection
                        title="Benefits of Regular AC Service"
                        benefits={[
                            "Prevents sudden failures",
                            "Improves cooling output",
                            "Reduces electricity bills",
                            "Extends AC lifespan",
                            "Keeps indoor air clean",
                            "Maintains UAE safety standards",
                        ]}
                    />

                    <ContactSection
                        data={{
                            title: "Contact Us",
                            location: "CTS - Chiller Technical Services L.L.C., Industrial Area 02, Ajman, UAE",
                            email: "info@drchiller.com",
                            phones: [
                                { label: "+971 67434537", tel: "+97167434537" },
                                { label: "+971 556700789", tel: "+971556700789" }
                            ],
                            footer: "Request a service visit today and keep your AC running at peak performance."
                        }}
                    />
                </div>
            </div>
        </section >
    )
}