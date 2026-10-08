import BlogCategoryPage from "@/components/BlogCategoryPage";
import { getPostsByCategorySlug } from "@/data/blogPosts";

const posts = getPostsByCategorySlug("real-estate-business");

const BlogCategoryRealEstateBusiness = () => (
  <BlogCategoryPage
    categorySlug="real-estate-business"
    categoryLabel="Real Estate Business"
    metaTitle="Real Estate Business Guides: Operations, Roles & Tools"
    metaDesc="Guides on building and running a real estate business — lead managers, acquisitions, bookkeeping, and the CRM tools that keep operations running."
    intro="Guides on the operational side of running a real estate business — the roles you need to hire, the financial systems you need in place, and the tools that keep everything organized."
    posts={posts}
    pillarLink={{ label: "Explore the Real Estate Marketing hub", href: "/real-estate-marketing" }}
  />
);

export default BlogCategoryRealEstateBusiness;
