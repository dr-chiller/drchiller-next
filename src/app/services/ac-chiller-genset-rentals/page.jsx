export const metadata = {
    title: "AC, Chiller & Genset Rentals | CTS, UAE",
    description:
        "Rent AC units, chillers, and gensets from CTS for short or long-term needs. Reliable cooling and power rental services across the UAE.",
    alternates: { canonical: `/services/ac-chiller-genset-rentals` }

};

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