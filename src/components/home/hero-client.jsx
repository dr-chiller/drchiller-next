"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function HomeHeroClient({ slides }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sectionRef = useRef(null);

    useEffect(() => {
        slides.forEach((slide) => {
            const img = new Image();
            img.src = slide.image;
        });
    }, [slides]);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <div ref={sectionRef} className="relative h-[80vh] sm:h-screen overflow-hidden">
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

            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col md:flex-row w-full h-full pt-12 md:pt-16">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex flex-col md:w-7/10 h-full text-white px-6 md:px-12"
                    >
                        <div className="flex-1 flex items-center gap-3">
                            <img
                                src="/logo-single.png"
                                className="w-16 h-16 rounded-3xl"
                                alt="Dr.Chiller Logo"
                            />
                            <div>
                                <p className="text-lg sm:text-xl md:text-2xl font-bold">
                                    CTS - Chiller Technical Services L.L.C
                                </p>
                                <span className="text-xs sm:text-sm italic md:text-md font-semibold text-emerald-400 uppercase">
                                    Skill to Chill
                                </span>
                            </div>
                        </div>

                        <div className="pb-16 md:pb-10">
                            <p className="text-2xl sm:text-3xl md:text-5xl text-emerald-500 font-bold mb-3">
                                {slides[currentIndex].header}
                            </p>
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
                    </motion.div>
                </AnimatePresence>

                {/* Desktop list */}
                <nav className="hidden md:flex md:w-3/10 h-full flex-col justify-end space-y-3 p-4">
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
                </nav>

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
