import PageHeader from "@/components/page-header";
import RelatedServices from "@/components/services/related-services";
import RentalsHero from "@/components/services/rentals/hero";
import RentalsSections from "@/components/services/rentals/section";

export default function RentalsPage() {
    return (
        <div>
            <PageHeader title="Rentals ( A/C, Chiller, Genset )" backgroundImage="/rental-header.webp" />
            <RentalsHero />
            <RentalsSections />
            <RelatedServices current="A/C, Chiller & Genset Rentals" />
        </div>
    )
}