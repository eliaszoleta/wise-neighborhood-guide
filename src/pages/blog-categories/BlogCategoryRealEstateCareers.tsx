import BlogCategoryPage from "@/components/BlogCategoryPage";
import { getPostsByCategorySlug } from "@/data/blogPosts";

const posts = getPostsByCategorySlug("real-estate-careers");

const BlogCategoryRealEstateCareers = () => (
  <BlogCategoryPage
    categorySlug="real-estate-careers"
    categoryLabel="Real Estate Careers"
    metaTitle="Real Estate Career Guides: Agent, Realtor, Broker & Licensing"
    metaDesc="Guides on real estate careers — the differences between agents, Realtors, and brokers, how to get licensed, and what to expect in your first years in the industry."
    intro="Whether you're considering getting licensed or trying to understand the industry hierarchy, these guides explain how real estate careers actually work."
    pillarLink={{ label: "Find your state's licensing requirements", href: "/real-estate-license" }}
    posts={posts}
  />
);

export default BlogCategoryRealEstateCareers;
