"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Breadcrumbs from "@/components/breadcrumbs";
import LogoLoader from "@/components/loader";

export default function ClientWrapper() {
    const [loading, setLoading] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setLoading(true);
        const timeout = setTimeout(() => setLoading(false), 500);
        return () => clearTimeout(timeout);
    }, [pathname]);

    if (pathname === "/") return null;

    return (
        <>
            {loading && <LogoLoader />}
            <Breadcrumbs />
        </>
    );
}
