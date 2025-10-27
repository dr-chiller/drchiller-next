import { supabaseS } from "@/lib/supabaseServer";

export default async function sitemap() {
    const baseUrl = "https://drchiller.com";

    const staticPages = [
        "",
        "about",
        "contact",
        "blogs",
        "products",
        "services",
        "products/water-chillers-coolers-heat-pumps",
        "products/cold-rooms-ice-block-machines",
        "products/heat-exchangers-cooling-towers",
        "products/ac-units-air-curtains",
        "services/ac-chiller-genset-rentals",
        "services/chilled-water-pipeline-flushing",
        "services/ac-chiller-coldroom-maintenance",
        "services/coil-manufacturing-replacements",
        "services/overhauling-winding",
        "services/amc"
    ].map((route) => ({
        url: `${baseUrl}/${route}`,
        lastModified: new Date().toISOString(),
    }));

    const { data: blogs } = await supabaseS
        .from("blogs")
        .select("slug, updated_at");

    const blogPages =
        blogs?.map((blog) => ({
            url: `${baseUrl}/blogs/${blog.slug}`,
            lastModified: blog.updated_at || new Date().toISOString(),
        })) || [];

    return [...staticPages, ...blogPages];
}
