"use client";

import { useEffect, useRef, useState } from "react";
import { FaExchangeAlt, FaTools, FaWarehouse, FaHeadset } from "react-icons/fa";
import { Snowflake } from "lucide-react";

export default function HomeOffers() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.01 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const services = [
        {
            icon: <FaExchangeAlt />,
            title: "Trading",
            text: "High-quality cooling systems and equipment from trusted brands, ensuring performance and durability you can rely on."
        },
        {
            icon: <FaTools />,
            title: "Maintenance",
            text: "Regular check-ups and quick repairs to keep your equipment running efficiently with minimal downtime."
        },
        {
            icon: <FaWarehouse />,
            title: "Rentals",
            text: "Flexible rental options for all types of cooling systems, perfect for temporary needs or seasonal projects."
        },
        {
            icon: <FaHeadset />,
            title: "Services",
            text: "From consultation to installation and after-sales support, our team ensures you get complete peace of mind."
        }
    ];

    return (
        <section
            ref={sectionRef}
            className="relative py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-300 overflow-hidden"
        >
            {/* Snowflakes */}
            <Snowflake
                size={140}
                className="absolute -top-20 left-0 md:top-16 md:left-20 text-emerald-500/10 animate-spin-slow pointer-events-none select-none"
            />
            <Snowflake
                size={140}
                className="absolute top-56 right-2 md:top-30 md:right-10 text-emerald-500/10 animate-spin-slow pointer-events-none select-none"
            />
            <Snowflake
                size={140}
                className="absolute bottom-0 z-10 right-4 md:bottom-10 md:right-20 text-emerald-500/10 animate-spin-slow pointer-events-none select-none"
            />

            {/* Heading */}
            <div
                className={`relative max-w-4xl mx-auto text-center mb-12 transition-all duration-1000 ease-out
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
                <h2 className="text-3xl sm:text-4xl font-bold text-emerald-600 dark:text-emerald-400">
                    What We Offer
                </h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                    At{" "}
                    <span className="font-semibold text-emerald-700 dark:text-emerald-300">
                        CTS - Chiller Technical Services L.L.C
                    </span>
                    , we provide top-notch solutions for all your cooling needs. From
                    premium trading options to expert maintenance, flexible rentals, and
                    dedicated after-sales services — our mission is to keep you cool,
                    comfortable, and satisfied year-round.
                </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {services.map((service, i) => (
                    <div
                        key={i}
                        className={`group relative flex flex-col p-6 rounded-xl shadow-md bg-gray-50 dark:bg-gray-800 transition-all duration-700 ease-out
              hover:scale-105 hover:shadow-2xl
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            `}
                        style={{ transitionDelay: `${i * 150}ms` }}
                    >
                        {/* Left green bar hover effect */}
                        <span className="absolute left-0 top-0 h-0 w-1 bg-yellow-300 transition-all duration-500 group-hover:h-full rounded-tl rounded-bl"></span>

                        {/* Icon */}
                        <div className="text-4xl text-emerald-600 dark:text-emerald-400 mb-4 transition-transform duration-500 group-hover:scale-110">
                            {service.icon}
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                            {service.title}
                        </h3>

                        {/* Description */}
                        <p className="mt-2 text-gray-600 dark:text-gray-400">{service.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
