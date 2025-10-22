import BlogDetail from "@/components/blogs/blog-detail";
import PageHeader from "@/components/page-header";

export default function BlogDetailPage() {
    return (
        <div>
            <PageHeader title="Blog Details" backgroundImage="/about-us-header.webp" />
            <BlogDetail />
        </div>
    )
}