"use client";

import Link from "next/link";
import Image from "next/image";

import wc from "@/assets/products/air-cooled-industrial-water-chiller.webp";
import cr from "@/assets/products/chiller-rooms.webp";
import he from "@/assets/products/heat-exchangers-1.webp";
import ac from "@/assets/products/ac-units-2.webp";

const allProducts = [
    { name: "Water Chillers, Coolers & Heat Pumps",value: "Water Chillers", link: "/products/water-chillers", image: wc },
    { name: "Cold Rooms & Ice Block Machines",value: "Cold Rooms", link: "/products/cold-rooms", image: cr },
    { name: "Heat Exchangers & Cooling Towers",value: "Heat Exchangers", link: "/products/heat-exchangers", image: he },
    { name: "A/C Units & Air Curtains",value: "A/C Units", link: "/products/ac-units", image: ac }
];

const RelatedProducts = ({ current }) => {
    const related = allProducts.filter((p) => p.value !== current);

    return (
        <section className="py-12 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h3 className="text-2xl font-bold mb-10 text-center text-gray-800 dark:text-gray-200">
                    Related Products
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:flex lg:flex-wrap lg:justify-center lg:gap-8">
                    {related.map((p, i) => (
                        <Link
                            key={i}
                            href={p.link}
                            className="w-full sm:w-full lg:w-[280px] group rounded-lg overflow-hidden bg-white dark:bg-gray-900 border border-transparent dark:border-gray-800 hover:border-emerald-500/50 dark:hover:border-emerald-500/80 shadow-md hover:shadow-xl transition-all duration-300"
                        >
                            <div className="relative w-full h-36">
                                <Image
                                    src={p.image}
                                    alt={p.name}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-2 text-center">
                                <h4 className="text-gray-800 dark:text-gray-200 text-lg font-semibold group-hover:text-emerald-500 transition-colors">
                                    {p.name}
                                </h4>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RelatedProducts;
