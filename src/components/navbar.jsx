"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { BiMoon, BiSun } from "react-icons/bi";
import { FiMenu, FiX } from "react-icons/fi";
import NavbarSearch from "./search";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
    const [isDark, setIsDark] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [showDropdownP, setShowDropdownP] = useState(false);
    const [showDropdownS, setShowDropdownS] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [dropdownTimeoutP, setDropdownTimeoutP] =
        useState(null);
    const [dropdownTimeoutS, setDropdownTimeoutS] =
        useState(null);

    const pathname = usePathname();
    const router = useRouter();

    const isServicesActive = pathname?.startsWith("/services");
    const isProductsActive = pathname?.startsWith("/products");

    const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("themeData");
        const themeData = storedTheme ? JSON.parse(storedTheme) : null;

        if (themeData) {
            const now = new Date().getTime();
            const sevenDays = 7 * 24 * 60 * 60 * 1000;

            if (now - themeData.timestamp < sevenDays) {
                setIsDark(themeData.isDark);
                if (themeData.isDark) document.documentElement.classList.add("dark");
            }
        }
    }, []);

    const toggleDark = () => {
        setIsDark((prev) => {
            const newMode = !prev;
            if (newMode) document.documentElement.classList.add("dark");
            else document.documentElement.classList.remove("dark");

            localStorage.setItem(
                "themeData",
                JSON.stringify({ isDark: newMode, timestamp: new Date().getTime() })
            );
            return newMode;
        });
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
        if (mobileMenuOpen) {
            setMobileProductsOpen(false);
            setMobileServicesOpen(false);
        }
    };

    const handleMouseEnterP = () => {
        if (dropdownTimeoutP) clearTimeout(dropdownTimeoutP);
        setShowDropdownP(true);
    };

    const handleMouseLeaveP = () => {
        const timeout = setTimeout(() => setShowDropdownP(false), 200);
        setDropdownTimeoutP(timeout);
    };

    const handleMouseEnterS = () => {
        if (dropdownTimeoutS) clearTimeout(dropdownTimeoutS);
        setShowDropdownS(true);
    };

    const handleMouseLeaveS = () => {
        const timeout = setTimeout(() => setShowDropdownS(false), 200);
        setDropdownTimeoutS(timeout);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > window.innerHeight * 0.05);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLink =
        "text-emerald-500 dark:text-emerald-400 hover:text-emerald-400 dark:hover:text-emerald-500 font-medium transition-colors cursor-pointer";

    const menuItems = {
        products: [
            { label: "All Products", path: "/products" },
            { label: "Water Chillers, Coolers & Heat Pumps", path: "/products/water-chillers" },
            { label: "Cold Rooms & Ice Block Machines", path: "/products/cold-rooms" },
            { label: "Heat Exchangers & Cooling Towers", path: "/products/heat-exchangers" },
            { label: "A/C Units & Air Curtains", path: "/products/ac-units" },
        ],
        services: [
            { label: "All Services", path: "/services" },
            { label: "A/C, Chiller & Genset Rentals", path: "/services/rentals" },
            { label: "Chilled Water Pipeline & Flushing", path: "/services/pipeline" },
            { label: "A/C, Chiller & Cold Room Maintenance", path: "/services/maintenance" },
            { label: "Coil Manufacturing & Replacement", path: "/services/coil" },
            { label: "Overhauling & Winding", path: "/services/overhauling" },
            { label: "AMC", path: "/services/amc" },
        ],
    };

    return (
        <nav
            className={`fixed z-20 w-full transition-all duration-300 ${scrolled ? "bg-white dark:bg-gray-900 shadow-md dark:shadow-lg" : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center space-x-2 flex-shrink-0 dark:text-emerald-400 text-emerald-500">
                        <Link href="/">
                            <img src="/logo-single.png" alt="Logo" className="h-8 w-8 object-contain" />
                        </Link>
                        <h2 className="text-xl font-bold">CTS</h2>
                    </div>

                    {/* Hamburger (Mobile) */}
                    <div className="md:hidden flex items-center gap-3">
                        <NavbarSearch />

                        <button onClick={toggleDark} className={`${navLink} cursor-pointer`}>
                            {isDark ? <BiMoon size={20} /> : <BiSun size={20} />}
                        </button>

                        <button onClick={toggleMobileMenu} className={`${navLink} focus:outline-none`}>
                            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6 items-center">
                        <Link href="/" className={`${navLink} ${pathname === "/" ? "font-semibold text-green-400 dark:text-green-400" : ""}`}>
                            Home
                        </Link>
                        <Link href="/about-us" className={`${navLink} ${pathname === "/about-us" ? "font-semibold text-green-400 dark:text-green-400" : ""}`}>
                            About Us
                        </Link>

                        {/* Products Dropdown */}
                        <div className="relative" onMouseEnter={handleMouseEnterP} onMouseLeave={handleMouseLeaveP}>
                            <button className={`${navLink} ${isProductsActive ? "font-semibold text-green-400 dark:text-green-400" : ""}`}>
                                Products
                            </button>
                            {showDropdownP && (
                                <div className="absolute left-0 top-full mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg rounded-md z-20 w-84">
                                    <ul className="py-2">
                                        {menuItems.products.map((item, index) => (
                                            <li key={index}>
                                                <Link
                                                    href={item.path}
                                                    className={`block px-4 py-2 ${index === 0 ? "text-base font-medium" : "text-base"} hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-emerald-400 text-gray-800 dark:text-gray-200`}
                                                >
                                                    {item.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* Services Dropdown */}
                        <div className="relative" onMouseEnter={handleMouseEnterS} onMouseLeave={handleMouseLeaveS}>
                            <button className={`${navLink} ${isServicesActive ? "font-semibold text-green-400 dark:text-green-400" : ""}`}>
                                Services
                            </button>
                            {showDropdownS && (
                                <div className="absolute -left-12 top-full mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg rounded-md z-20 w-86">
                                    <ul className="py-2">
                                        {menuItems.services.map((item, index) => (
                                            <li key={index}>
                                                <Link
                                                    href={item.path}
                                                    className={`block px-4 py-2 ${index === 0 ? "text-base font-medium" : "text-base"} hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-emerald-400 text-gray-800 dark:text-gray-200`}
                                                >
                                                    {item.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        <Link href="/contact-us" className={`${navLink} ${pathname === "/contact-us" ? "text-green-400 dark:text-green-400 font-semibold" : ""}`}>
                            Contact Us
                        </Link>

                        <NavbarSearch />

                        <div className="relative group">
                            <button onClick={toggleDark} className={`${navLink} cursor-pointer`}>
                                {isDark ? <BiMoon size={20} /> : <BiSun size={20} />}
                            </button>
                            <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition pointer-events-none">
                                Theme
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden px-4 py-4 space-y-3 bg-white dark:bg-gray-900">
                    {["/", "/about-us"].map((path) => (
                        <Link
                            key={path}
                            href={path}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`block ${navLink} ${pathname === path ? "text-blue-700 dark:text-blue-300 font-semibold" : ""}`}
                        >
                            {path === "/" ? "Home" : "About Us"}
                        </Link>
                    ))}

                    {/* Mobile Products */}
                    <div>
                        <button
                            onClick={() => {
                                setMobileServicesOpen(false);
                                setMobileProductsOpen(!mobileProductsOpen);
                            }}
                            className={`${navLink} w-full text-left flex items-center gap-1 ${isProductsActive ? "font-semibold text-green-400 dark:text-green-400" : ""}`}
                        >
                            <span>Products</span>
                            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileProductsOpen ? "rotate-180" : "rotate-0"}`} />
                        </button>
                        {mobileProductsOpen && (
                            <ul className="ml-4 mt-2 space-y-2">
                                {menuItems.products.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={item.path}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="block px-4 py-2 text-base hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-emerald-400 dark:hover:text-emerald-500 text-emerald-600 dark:text-emerald-400"
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* Mobile Services */}
                    <div>
                        <button
                            onClick={() => {
                                setMobileProductsOpen(false);
                                setMobileServicesOpen(!mobileServicesOpen);
                            }}
                            className={`${navLink} w-full text-left flex items-center gap-1 ${isServicesActive ? "font-semibold text-green-400 dark:text-green-400" : ""}`}
                        >
                            <span>Services</span>
                            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : "rotate-0"}`} />
                        </button>
                        {mobileServicesOpen && (
                            <ul className="ml-4 mt-2 space-y-2">
                                {menuItems.services.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={item.path}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="block px-4 py-2 text-base hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-emerald-400 dark:hover:text-emerald-500 text-emerald-600 dark:text-emerald-400"
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <Link
                        href="/contact-us"
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block ${navLink} flex items-center gap-1 ${pathname === "/contact-us" ? "text-blue-700 dark:text-blue-300 font-semibold" : ""}`}
                    >
                        Contact Us
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
