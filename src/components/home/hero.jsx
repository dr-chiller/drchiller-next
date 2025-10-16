"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion";

const slides = [
    {
        header: "Water Chillers, Coolers & Heat Pumps",
        description:
            "High-efficiency water chillers designed for reliable cooling of industrial and commercial applications.",
        button: "/products/water-chillers",
        image: "/hero1.webp",
    },
    {
        header: "Cold Rooms & Ice Block Machines",
        description:
            "Custom-built cold rooms and walk-in freezers for food, pharmaceuticals and logistics industries.",
        button: "/products/cold-rooms",
        image: "/hero2.webp",
    },
    {
        header: "Heat Exchangers & Cooling Towers",
        description:
            "High-performance heat exchangers for efficient thermal transfer in HVAC and process systems.",
        button: "/products/heat-exchangers",
        image: "/hero4.webp",
    },
    {
        header: "A/C Units & Air Curtains",
        description:
            "Robust air conditioning systems for residential, commercial and industrial environments.",
        button: "/products/ac-units",
        image: "/hero3.webp",
    },
    {
        header: "A/C, Chiller & Genset Rentals",
        description:
            "Short and long-term rental solutions including A/C units, water chillers and diesel generators.",
        button: "/services/rentals",
        image: "/hero5.webp",
    },
    {
        header: "Chilled Water Pipeline & Flushing",
        description:
            "Design, installation and flushing of chilled water pipelines for efficient system performance.",
        button: "/services/pipeline",
        image: "/hero6.webp",
    },
    {
        header: "A/C, Chiller & Coldroom Maintenance",
        description:
            "Preventive and corrective maintenance services for air conditioning, chiller and cold room systems.",
        button: "/services/maintenance",
        image: "/hero7.webp",
    },
    {
        header: "Coil Manufacturing & Replacements",
        description:
            "Custom coil fabrication and replacement services to restore capacity and improve system efficiency.",
        button: "/services/coil",
        image: "/hero8.webp",
    },
    {
        header: "Overhauling & Winding",
        description:
            "Professional compressor overhauling and motor winding services to extend equipment lifespan.",
        button: "/services/overhauling",
        image: "/hero9.webp",
    },
    {
        header: "AMC",
        description:
            "Annual Maintenance Contracts providing priority support and long-term service coverage.",
        button: "/services/amc",
        image: "/hero10.webp",
    },
];

export default function HomeHero() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [paused, setPaused] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        if (paused) return;
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [paused]);

    return (
        <div
            ref={sectionRef}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="relative h-screen overflow-hidden"
        >
            {/* background crossfade */}
            <div className="absolute inset-0 w-screen h-screen">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 w-screen h-screen transition-opacity duration-700 ${index === currentIndex ? "opacity-100" : "opacity-0"
                            }`}
                        style={{
                            backgroundImage: `url(${slide.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    />
                ))}
            </div>

            <div className="absolute inset-0 bg-black/50" />

            {/* Content */}
            <div className="relative z-10 flex flex-col md:flex-row w-full h-full pt-12 md:pt-16">
                <LazyMotion features={domAnimation}>
                    <AnimatePresence mode="wait">
                        <m.div
                            key={currentIndex}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="flex flex-col md:w-7/10 h-full text-white px-6 md:px-12"
                        >
                            <div className="flex-1 flex items-center gap-3">
                                <Image
                                    src="/logo-single.png"
                                    width={64}
                                    height={64}
                                    className="rounded-3xl"
                                    alt="Dr.Chiller Logo"
                                />
                                <div>
                                    <h4 className="text-xl md:text-2xl font-bold">
                                        CTS - Chiller Technical Services L.L.C
                                    </h4>
                                    <span className="text-sm italic md:text-md font-semibold text-emerald-400 uppercase">
                                        Skill to Chill
                                    </span>
                                </div>
                            </div>

                            <div className="pb-16 md:pb-10">
                                <h1 className="text-2xl sm:text-3xl md:text-5xl text-emerald-500 font-bold mb-3">
                                    {slides[currentIndex].header}
                                </h1>
                                <p className="text-base sm:text-lg md:text-xl mb-6 max-w-2xl">
                                    {slides[currentIndex].description}
                                </p>
                                <Link
                                    href={slides[currentIndex].button}
                                    className="inline-block px-4 py-1.5 bg-emerald-500 text-black rounded-md font-semibold shadow hover:bg-emerald-600 transition"
                                >
                                    Explore
                                </Link>
                            </div>
                        </m.div>
                    </AnimatePresence>
                </LazyMotion>

                {/* Desktop list */}
                <div className="hidden md:flex md:w-3/10 h-full flex-col justify-end space-y-3 p-4">
                    <div className="backdrop-blur rounded-lg p-3 pt-4 max-h-full">
                        {slides.map((slide, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-full text-left px-4 py-2 rounded-md mb-2 shadow transition ${index === currentIndex
                                        ? "bg-emerald-500 text-white"
                                        : "bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200"
                                    } hover:scale-105`}
                            >
                                {slide.header}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Mobile buttons */}
                <div className="md:hidden absolute bottom-2 w-full px-4 flex gap-2 overflow-x-auto no-scrollbar">
                    {slides.map((slide, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`flex-shrink-0 px-4 py-2 rounded-full text-sm transition ${index === currentIndex
                                    ? "bg-emerald-500 text-white"
                                    : "bg-white dark:bg-gray-900 text-black dark:text-white"
                                } hover:bg-emerald-600 hover:text-white`}
                        >
                            {slide.header}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
