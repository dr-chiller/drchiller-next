import HomeChoose from "@/components/home/choose-server";
import HomeHero from "@/components/home/hero-server";
import HomeOffers from "@/components/home/offer";
import HomeProducts from "@/components/home/products";
import HomeRentals from "@/components/home/rentals";
import HomeServices from "@/components/home/services";

export default function Home() {
  return (
    <div>
      <HomeHero />
      <HomeChoose />
      <HomeOffers />
      <HomeProducts />
      <HomeServices />
      <HomeRentals />
    </div>
  );
}
