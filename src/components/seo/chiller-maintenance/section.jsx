import ContactSection from "../main/sections/contact";
import ServiceProcess from "../main/sections/service";
import AreasWeServe from "../main/sections/areas";
import BenefitsSection from "../main/sections/benefits";

export default function ChillerMaintenanceSections() {
    return (
        <section className="py-16 bg-white dark:bg-black">
            <div className="max-w-7xl mx-auto px-4">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                    <ServiceProcess
                        title="Our Service Process"
                        steps={[
                            { title: "Site Visit and System Check", text: "We evaluate the chiller's condition, cooling demand and operating history." },
                            { title: "Diagnosis and Service Plan", text: "You receive a clear summary of issues and recommended maintenance." },
                            { title: "Maintenance and Cleaning", text: "Our technicians carry out the required tasks using proper tools and genuine parts." },
                            { title: "Performance Testing", text: "We test cooling output, pressure levels and system stability." },
                            { title: "Follow-Up and Reporting", text: "A detailed report is provided after every visit for record and compliance." },
                        ]}
                    />

                    <AreasWeServe
                        title="Industries We Serve"
                        areas={["Manufacturing plants", "Plastic and rubber industries", "Food and beverage processing", "Pharmaceutical and chemical production", "Warehouses and cold storage", "Data centers and server facilities", "HVAC and district cooling systems"]}
                        description="CTS provides industrial chiller maintenance for a wide range of sectors, including:"
                    />

                    <BenefitsSection
                        title="Benefits of Regular Industrial Chiller Maintenance"
                        benefits={[
                            "Prevents costly downtime",
                            "Improves cooling efficiency",
                            "Reduces electricity consumption",
                            "Extends equipment lifespan",
                            "Maintains production stability",
                            "Ensures safety and compliance",
                        ]}
                    />

                    <ContactSection
                        data={{
                            title: "Contact Us",
                            description: "Keep your industrial chiller operating at peak efficiency with professional maintenance from CTS.",
                            location: "CTS - Chiller Technical Services L.L.C., Industrial Area 02, Ajman, UAE",
                            email: "info@drchiller.com",
                            phones: [
                                { label: "+971 67434537", tel: "+97167434537" },
                                { label: "+971 556700789", tel: "+971556700789" }
                            ],
                            footer: "Request a maintenance visit and keep your industrial chiller running reliably."
                        }}
                    />
                </div>
            </div>
        </section >
    )
}