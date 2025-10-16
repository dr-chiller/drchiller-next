"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import rentalImg from "@/assets/services/rental-ac.webp";
import chilledWaterImg from "@/assets/services/pipe-insulation.webp";
import maintenanceImg from "@/assets/services/maintenance-replacement.webp";
import coilImg from "@/assets/services/coil-anti-corrosion-coating.webp";
import overhaulingImg from "@/assets/services/overhauling-motor-winding.webp";
import amcImg from "@/assets/services/amc-contract.webp";

const services = [
    {
        name: "A/C, Chiller & Genset Rentals",
        description: "Short and long-term rental solutions for ACs, chillers and diesel gensets.",
        image: rentalImg,
        link: "/services/rentals",
    },
    {
        name: "Chilled Water Pipeline & Flushing",
        description: "Comprehensive chilled water pipeline installation, flushing and commissioning services.",
        image: chilledWaterImg,
        link: "/services/pipeline",
    },
    {
        name: "A/C, Chiller & Coldroom Maintenance",
        description: "Routine maintenance and servicing for A/Cs, chillers and cold rooms for optimal performance.",
        image: maintenanceImg,
        link: "/services/maintenance",
    },
    {
        name: "Coil Manufacturing & Replacements",
        description: "Custom coil manufacturing and replacement services for various cooling systems.",
        image: coilImg,
        link: "/services/coil",
    },
    {
        name: "Overhauling & Winding",
        description: "Professional overhauling and winding services to extend equipment lifespan.",
        image: overhaulingImg,
        link: "/services/overhauling",
    },
    {
        name: "AMC",
        description: "Annual Maintenance Contracts providing long-term coverage and priority service support.",
        image: amcImg,
        link: "/services/amc",
    },
];

export default function HomeServices() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-300"
        >
            <div
                className={`max-w-7xl mx-auto text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                    }`}
            >
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                    Our Services
                </h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
                    From chilled water systems to complete AC maintenance, we provide a full range of professional HVAC services.
                </p>

                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    navigation
                    pagination={{ clickable: true }}
                    breakpoints={{
                        320: { slidesPerView: 1.2 },
                        640: { slidesPerView: 2.2 },
                        768: { slidesPerView: 3.2 },
                        1024: { slidesPerView: 4.2 },
                    }}
                >
                    {services.map((service, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className={`bg-gray-100 dark:bg-gray-950 rounded-xl shadow-md overflow-hidden hover:shadow-lg dark:hover:shadow-xl transition transform hover:-translate-y-1 flex flex-col h-[400px] ${isVisible ? "animate-[fadeInUp_0.8s_ease-out_forwards]" : "opacity-0"
                                    }`}
                                style={{ animationDelay: `${index * 0.15}s` }}
                            >
                                <Image
                                    src={service.image}
                                    alt={service.name}
                                    width={400}
                                    height={200}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4 flex flex-col justify-between flex-grow">
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                                            {service.name}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                                            {service.description}
                                        </p>
                                    </div>
                                    <Link
                                        href={service.link}
                                        className="inline-block bg-emerald-500 text-white text-sm font-medium py-2 px-4 rounded-md hover:bg-emerald-600 transition relative"
                                        aria-label={`Learn more about ${service.name}`}
                                    >
                                        Learn More
                                        <span className="sr-only"> about {service.name}</span>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
        </section>
    );
}
