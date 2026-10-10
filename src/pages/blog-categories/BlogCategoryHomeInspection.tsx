import BlogCategoryPage from "@/components/BlogCategoryPage";
import { getPostsByCategorySlug } from "@/data/blogPosts";

const posts = getPostsByCategorySlug("home-inspection");

const BlogCategoryHomeInspection = () => (
  <BlogCategoryPage
    categorySlug="home-inspection"
    categoryLabel="Home Inspection"
    metaTitle="How to Start a Home Inspection Business: Guides & Certification"
    metaDesc="Practical guides for starting a home inspection business -- costs, ASHI/InterNACHI certification, equipment, pricing, and building realtor referral relationships."
    intro="Home inspectors sit at the center of every home sale. Here's what it actually takes to start an inspection business: certification, equipment, pricing, and getting your first clients."
    posts={posts}
  />
);

export default BlogCategoryHomeInspection;
