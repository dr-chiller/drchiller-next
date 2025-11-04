export const metadata = {
    title: "CTS Products | Industrial & Commercial Chillers UAE",
    description:
        "Browse CTS's range of industrial and commercial chillers. We provide reliable cooling products and solutions for businesses across the UAE.",
    alternates: { canonical: `/products` }

};
import PageHeader from "@/components/page-header";
import ProductsList from "@/components/products/main/list";

export default function Products() {
    return (
        <div>
            <PageHeader title="Products" backgroundImage="/ac-units-header.webp" />
            <ProductsList />
        </div>
    )
}