"use client";

import { BiMobile } from "react-icons/bi";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="relative bg-gray-200 dark:bg-gray-900 text-gray-700 dark:text-gray-300 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.7fr_1.3fr_1.3fr_1.6fr] gap-8">
                {/* Brand & Description */}
                <div>
                    <div className="flex items-center space-x-1">
                        {/* Logo */}
                        <div className="shrink-0">
                            <img src="/logo-single.png" alt="Logo" className="h-12 w-12" />
                        </div>

                        {/* Text */}
                        <div className="text-start">
                            <p className="text-md font-medium">Chiller Technical Services L.L.C</p>
                            <p className="text-xl font-bold" dir="rtl">
                                خدمات التبريد التقنية ذ.م.م
                            </p>
                        </div>
                    </div>
                    <p className="text-sm leading-relaxed max-w-xs mt-4">
                        High-quality cooling and refrigeration solutions for industrial and commercial needs — built for performance, reliability, and efficiency.
                    </p>
                </div>

                {/* Products */}
                <div>
                    <h3 className="text-lg font-bold text-emerald-500 mb-4">Products</h3>
                    <ul className="space-y-2 text-sm">
                        {[
                            { name: "Water Chillers, Coolers & Heat Pumps", link: "/products/water-chillers-coolers-heat-pumps" },
                            { name: "Cold Rooms & Ice Block Machines", link: "/products/cold-rooms-ice-block-machines" },
                            { name: "Heat Exchangers & Cooling Towers", link: "/products/heat-exchangers-cooling-towers" },
                            { name: "A/C Units & Air Curtains", link: "/products/ac-units-air-curtains" },
                        ].map((item, i) => (
                            <li key={i}>
                                <Link href={item.link} className="hover:text-emerald-500 relative group">
                                    {item.name}
                                    <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h3 className="text-lg font-bold text-emerald-500 mb-4">Services</h3>
                    <ul className="space-y-2 text-sm">
                        {[
                            { name: "A/C, Chiller & Genset Rentals", link: "/services/ac-chiller-genset-rentals" },
                            { name: "Chilled Water Pipeline & Flushing", link: "/services/chilled-water-pipeline-flushing" },
                            { name: "A/C, Chiller & Coldroom Maintenance", link: "/services/ac-chiller-coldroom-maintenance" },
                            { name: "Coil Manufacturig & Replacements", link: "/services/coil-manufacturing-replacements" },
                            { name: "Overhauling & Winding", link: "/services/overhauling-winding" },
                            { name: "AMC", link: "/services/amc" },
                        ].map((item, i) => (
                            <li key={i}>
                                <Link href={item.link} className="hover:text-emerald-500 relative group">
                                    {item.name}
                                    <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-lg font-bold text-emerald-500 mb-4">Contact</h3>
                    <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                        <li className="flex items-center gap-2">
                            <MdEmail size={20} className="text-emerald-500" />
                            <span className="font-semibold">Email:</span>
                            <a href="mailto:info@drchiller.com" className="hover:text-emerald-500 relative group">
                                info@drchiller.com
                                <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        </li>

                        <li className="flex items-center gap-2">
                            <MdPhone size={20} className="text-emerald-500" />
                            <span className="font-semibold">Phone:</span>
                            <a href="tel:+97167434537" className="hover:text-emerald-500 relative group">
                                +971 67434537
                                <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        </li>

                        <li className="flex items-center gap-2">
                            <BiMobile size={20} className="text-emerald-500" />
                            <span className="font-semibold">Mobile:</span>
                            <a href="tel:+971556700789" className="hover:text-emerald-500 relative group">
                                +971 556700789
                                <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        </li>

                        <li className="flex gap-2">
                            <MdLocationOn size={20} className="text-emerald-500" />
                            <span className="font-semibold">Address:</span>
                            <a
                                href="https://maps.app.goo.gl/bpqPc2NjBGFzEAqD8"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-emerald-500 relative group"
                            >
                                <span>
                                    CTS - Chiller Technical Services L.L.C.
                                    <br />
                                    Industrial Area # 02.
                                    <br />
                                    Ajman, UAE.
                                </span>
                                <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-gray-300 dark:border-gray-800 py-4 mx-4 text-center text-xs text-gray-500 dark:text-gray-400">
                © {new Date().getFullYear()} CTS. All rights reserved.
                <br />
                <span className="text-gray-400 text-[0.7rem]">
                    Developed by{" "}
                    <a
                        href="https://wizaura.co"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-emerald-700 dark:text-emerald-400 hover:text-emerald-500 dark:hover:text-emerald-500"
                    >
                        Wizaura Developers
                    </a>
                </span>
            </div>
        </footer>
    );
};

export default Footer;
