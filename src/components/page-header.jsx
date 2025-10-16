"use client";

import { BiArrowBack } from "react-icons/bi";
import { useRouter } from "next/navigation";

export default function PageHeader({ title, backgroundImage}) {
    const router = useRouter();

    return (
        <section
            className={`relative h-[25vh] flex items-center justify-center text-center text-white`}
            style={{
                backgroundImage: `url('${backgroundImage}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Back Button */}
            <button
                onClick={() => router.back()}
                className="absolute cursor-pointer flex items-center gap-1 bottom-1 sm:bottom-5 right-5 bg-white/20 hover:bg-white/40 text-white px-4 py-2 rounded-lg backdrop-blur-sm transition-all duration-200"
            >
                <BiArrowBack /> Back
            </button>

            {/* Title */}
            <div className="relative z-10 px-4">
                <h1 className="text-3xl sm:text-5xl font-bold drop-shadow-lg">{title}</h1>
            </div>
        </section>
    );
}
