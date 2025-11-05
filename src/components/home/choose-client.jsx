// components/HomeChooseClient.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { Snowflake } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomeChooseClient({ reasons }) {
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

    return (
        <section
            ref={sectionRef}
            className="relative py-16 pb-28 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-950 transition-colors duration-300 overflow-hidden"
        >
            {/* Animated Snowflakes */}
            <Snowflake
                size={140}
                className="absolute -top-2 -left-2 md:top-0 md:left-2 text-emerald-500/10 animate-spin-slow pointer-events-none select-none"
            />
            <Snowflake
                size={140}
                className="absolute -bottom-0 right-0 md:bottom-10 md:right-16 text-emerald-500/10 animate-spin-slow pointer-events-none select-none"
            />

            {/* Main Content */}
            <div
                className={`max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center 
          transform transition-all duration-1000 ease-out
          ${isVisible
                        ? "opacity-100 translate-y-0 scale-100"
                        : "opacity-0 translate-y-10 scale-90"
                    }`}
            >
                {/* Left Side - Images */}
                <div className="relative flex flex-col items-center lg:block lg:ms-12 sm:mb-12">
                    <div
                        className={`hidden sm:block relative w-72 h-80 rounded-xl shadow-lg border-2 border-white dark:border-gray-900 overflow-hidden sm:rotate-[-3deg]
              transition-all duration-1000 ease-out
              ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
                    >
                        <Image
                            src="/about1.webp"
                            alt="Our Team"
                            fill
                            className="object-cover rounded-xl"
                            loading="lazy"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    <div
                        className={`relative w-64 h-72 rounded-xl shadow-lg border-2 border-white dark:border-gray-900 overflow-hidden sm:rotate-[12deg] 
              sm:absolute sm:top-20 sm:left-20 lg:top-20 lg:left-40
              transition-all duration-1000 delay-200 ease-out
              ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
                    >
                        <Image
                            src="/about2.webp"
                            alt="Work in Action"
                            fill
                            className="object-cover rounded-xl"
                            loading="lazy"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                </div>

                {/* Right Side - Text & Reasons */}
                <div
                    className={`relative transition-all duration-1000 delay-400 ease-out
            ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                        }`}
                >
                    <h1 className="text-3xl sm:text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-6">
                        Chiller Maintenance Company in UAE
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        At{" "}
                        <span className="font-semibold text-emerald-700 dark:text-emerald-300">
                            CTS - Chiller Technical Services L.L.C
                        </span>
                        , we combine years of expertise with modern technology to deliver
                        exceptional cooling solutions. Our focus is on reliability,
                        innovation, and customer satisfaction — making us the trusted
                        partner for businesses across the region.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                        {reasons.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center space-x-3 group transition-transform duration-300 hover:translate-x-1"
                            >
                                <div className="text-2xl text-yellow-400 dark:text-yellow-400 transition-transform group-hover:scale-110">
                                    {item.icon}
                                </div>
                                <span className="text-gray-800 dark:text-gray-200 font-medium">
                                    {item.title}
                                </span>
                            </div>
                        ))}
                    </div>

                    <Link
                        href="/about-us"
                        className="inline-block bg-emerald-500 text-white text-sm font-medium py-2 px-4 rounded-md hover:bg-emerald-600 transition"
                        aria-label="Learn more about us"
                    >
                        Learn More
                        <span className="sr-only"> about us</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
