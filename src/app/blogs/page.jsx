import BlogsList from "@/components/blogs/list";
import PageHeader from "@/components/page-header";

export default function BlogsPage() {
    return (
        <div>
            <PageHeader title="Blogs" backgroundImage="/about-us-header.webp" />
            <BlogsList />
        </div>
    )
}