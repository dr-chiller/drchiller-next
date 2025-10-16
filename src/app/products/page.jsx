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