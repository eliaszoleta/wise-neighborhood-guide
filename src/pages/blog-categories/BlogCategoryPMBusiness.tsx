import BlogCategoryPage from "@/components/BlogCategoryPage";
import { getPostsByCategorySlug } from "@/data/blogPosts";

const posts = getPostsByCategorySlug("pm-business");

const BlogCategoryPMBusiness = () => (
  <BlogCategoryPage
    categorySlug="pm-business"
    categoryLabel="PM Business"
    metaTitle="How to Start a Property Management Company: Guides & Licensing"
    metaDesc="Practical guides for starting a property management company -- costs, licensing, fee structures, software, and getting your first management clients."
    intro="Starting a property management company is a different business than managing your own rentals -- you're a service provider to other owners. Here's what it actually takes: costs, licensing, pricing, and getting your first clients."
    posts={posts}
  />
);

export default BlogCategoryPMBusiness;
