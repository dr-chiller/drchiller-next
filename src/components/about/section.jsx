"use client"

import { motion } from "framer-motion";
import { Target, Rocket } from "lucide-react";

export default function AboutSection() {
    return (
        <section className="relative bg-gray-100 dark:bg-gray-950 px-6 py-16">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-6xl mx-auto text-center space-y-12"
            >
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                        Our Mission & Goals
                    </h2>
                    <div className="mt-2 w-24 h-1 bg-emerald-600 dark:bg-emerald-400 mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">

                    <div className="p-6 rounded-lg shadow-lg bg-white dark:bg-gray-900">
                        <div className="flex items-center gap-3 mb-4">
                            <Rocket className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Mission
                            </h3>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            To deliver dependable, energy-efficient cooling and HVAC
                            solutions that empower businesses while ensuring long-term
                            sustainability and customer trust.
                        </p>
                    </div>

                    <div className="p-6 rounded-lg shadow-lg bg-white dark:bg-gray-900">
                        <div className="flex items-center gap-3 mb-4">
                            <Target className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Goals
                            </h3>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            To expand our reach across industries, innovate with
                            sustainable technologies, and provide exceptional service
                            that creates lasting value for clients and partners.
                        </p>
                    </div>

                </div>
            </motion.div>
        </section>
    );
}
