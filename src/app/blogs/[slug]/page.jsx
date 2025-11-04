import { supabaseS } from "@/lib/supabaseServer";
import BlogDetail from "@/components/blogs/blog-detail";

export async function generateMetadata({ params }) {
    const { slug } = params;

    const { data: blog } = await supabaseS
        .from("blogs")
        .select("title, meta_title, meta_description, image_url")
        .eq("slug", slug)
        .single();

    return {
        title: blog?.meta_title || blog?.title || "Blog | Dr.Chiller",
        description: blog?.meta_description || "Read insightful blogs on drchiller.",
        openGraph: {
            title: blog?.meta_title || blog?.title,
            description: blog?.meta_description,
            images: [blog?.image_url || "/default-og.png"],
        },
        alternates: {
            canonical: `/blog/${slug}`,
        },
    };
}

export default async function BlogDetailPage({ params }) {
    const { slug } = params;

    const { data: blog, error } = await supabaseS
        .from("blogs")
        .select("*")
        .eq("slug", slug)
        .single();

    if (error || !blog) {
        return <div className="text-center py-20 text-gray-500">Blog not found</div>;
    }

    return (
        <div className="min-h-screen py-10">
            <BlogDetail blog={blog} />
        </div>
    );
}
