import BlogCategoryPage from "@/components/BlogCategoryPage";
import { getPostsByCategorySlug } from "@/data/blogPosts";

const posts = getPostsByCategorySlug("property-management");

const BlogCategoryPropertyManagement = () => (
  <BlogCategoryPage
    categorySlug="property-management"
    categoryLabel="Property Management"
    metaTitle="Property Management Guides for Landlords: Tenants, Expenses & Evictions"
    metaDesc="Practical property management guides covering tenant screening, rental expenses, working with property managers, handling non-payment, and the eviction process."
    intro="Practical guides for landlords — from finding and screening tenants to managing expenses, dealing with non-payment, and understanding the eviction process in your state."
    posts={posts}
  />
);

export default BlogCategoryPropertyManagement;
