export const metadata = {
    title: "CTS Blog | Chiller Maintenance Tips & HVAC Insights",
    description:
        "Explore the CTS Blog for expert tips on chiller repair, maintenance, and HVAC efficiency. Stay updated with insights from UAE's leading cooling specialists.",
};
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