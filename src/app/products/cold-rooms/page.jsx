import PageHeader from "@/components/page-header";
import ColdRoomsHero from "@/components/products/cold-rooms/hero";
import ColdRoomsSection from "@/components/products/cold-rooms/section";
import ColdRoomsSubSection from "@/components/products/cold-rooms/sub-section";
import RelatedProducts from "@/components/products/related-products";

export default function ColdRoomsPage() {
    return (
        <div>
            <PageHeader title="Cold Rooms & Ice Block Machines" backgroundImage="/cold-rooms-header.webp" />\
            <ColdRoomsHero />
            <ColdRoomsSection />
            <ColdRoomsSubSection />
            <RelatedProducts current="Cold Rooms" />
        </div>
    )
}