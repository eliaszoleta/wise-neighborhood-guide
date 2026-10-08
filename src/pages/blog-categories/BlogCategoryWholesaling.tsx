import BlogCategoryPage from "@/components/BlogCategoryPage";
import { getPostsByCategorySlug } from "@/data/blogPosts";

const posts = getPostsByCategorySlug("wholesaling");

const BlogCategoryWholesaling = () => (
  <BlogCategoryPage
    categorySlug="wholesaling"
    categoryLabel="Wholesaling"
    metaTitle="Real Estate Wholesaling Guides: How to Find Deals and Assign Contracts"
    metaDesc="Clear guides on real estate wholesaling — how the process works, how to find motivated sellers, and how to assign contracts without ever owning a property."
    intro="Wholesaling is one of the lowest-capital entry points into real estate. These guides walk through exactly how the process works and what it takes to run a real operation."
    posts={posts}
    pillarLink={{ label: "Explore the Real Estate Wholesaling hub", href: "/real-estate-wholesaling" }}
  />
);

export default BlogCategoryWholesaling;
