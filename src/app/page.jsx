export const metadata = {
  title: "CTS - Chiller Maintenance Company | HVAC Experts in UAE",
  description:
    "CTS - a trusted chiller maintenance company in UAE, offering expert HVAC, AC, and chiller services with reliable solutions for every cooling need.",
};

import HomeBlogs from "@/components/home/blogs";
import dynamic from "next/dynamic";

const HomeHero = dynamic(() => import("@/components/home/hero-server"), { ssr: true });
const HomeChoose = dynamic(() => import("@/components/home/choose-server"));
const HomeOffers = dynamic(() => import("@/components/home/offer"));
const HomeProducts = dynamic(() => import("@/components/home/products"));
const HomeServices = dynamic(() => import("@/components/home/services"));
const HomeRentals = dynamic(() => import("@/components/home/rentals"));


export default function Home() {
  return (
    <div>
      <HomeHero />
      <HomeChoose />
      <HomeOffers />
      <HomeProducts />
      <HomeServices />
      <HomeRentals />
      <HomeBlogs />
    </div>
  );
}
