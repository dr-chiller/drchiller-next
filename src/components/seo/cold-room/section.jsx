import ContactSection from "../main/sections/contact";
import ServiceProcess from "../main/sections/service";
import AreasWeServe from "../main/sections/areas";
import BenefitsSection from "../main/sections/benefits";

export default function ColdRoomSections() {
    return (
        <section className="py-16 bg-white dark:bg-black">
            <div className="max-w-7xl mx-auto px-4">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                    <ServiceProcess
                        title="Our Installation Process"
                        steps={[
                            { title: " Site Inspection and Measurement", text: " We assess your available space, storage needs and temperature requirements." },
                            { title: "Design and Planning", text: "We create the cold room layout with panels, doors, cooling units and controls." },
                            { title: "Supply and Installation", text: "Our technicians install panels, refrigeration systems and electrical connections professionally." },
                            { title: "Testing and Commissioning", text: "We ensure correct temperature levels, airflow and overall cooling stability." },
                            { title: "Support and Maintenance", text: "CTS offers maintenance and servicing to keep your cold room performing efficiently." },
                        ]}
                    />

                    <AreasWeServe
                        title="Industries We Serve"
                        description="Our cold rooms are widely used across the UAE in:"
                        areas={["Food and beverage industry", "Restaurants and catering companies", "Supermarkets and retail outlets", "Pharmaceutical and medical storage", "Logistics and warehouses", "Hotels and hospitality", "Chemical and industrial facilities"]}
                    />

                    <BenefitsSection
                        title="Benefits of CTS Cold Rooms"
                        benefits={[
                            "Reliable cooling performance",
                            "Energy-efficient operation",
                            "Long-lasting insulation",
                            "Consistent temperature control",
                            "Customizable sizes and layouts",
                            "Built to handle UAE weather",
                        ]}
                    />

                    <ContactSection
                        data={{
                            title: "Contact Us",
                            description: "Looking for reliable cold room manufacturers in UAE? CTS designs and installs cold rooms built for efficiency and long-term performance.",
                            location: "CTS - Chiller Technical Services L.L.C., Industrial Area 02, Ajman, UAE",
                            email: "info@drchiller.com",
                            phones: [
                                { label: "+971 67434537", tel: "+97167434537" },
                                { label: "+971 556700789", tel: "+971556700789" }
                            ],
                            footer: "Request a consultation and build the right cold room for your facility.",
                        }}
                    />
                </div>
            </div>
        </section >
    )
}