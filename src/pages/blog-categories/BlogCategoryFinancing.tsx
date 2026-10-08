import BlogCategoryPage from "@/components/BlogCategoryPage";
import { getPostsByCategorySlug } from "@/data/blogPosts";

const posts = getPostsByCategorySlug("financing");

const BlogCategoryFinancing = () => (
  <BlogCategoryPage
    categorySlug="financing"
    categoryLabel="Financing"
    metaTitle="Real Estate Financing Guides: Hard Money, Mortgages & Creative Strategies"
    metaDesc="Clear, practical guides on real estate financing — hard money, private money, seller financing, assumable mortgages, HELOCs, and more. Learn how investors fund deals."
    intro="Everything you need to understand how real estate deals get funded — from conventional mortgages to hard money, seller financing, and creative strategies like subject-to and lease options."
    posts={posts}
    pillarLink={{ label: "Explore the Funding & Financing topic hub", href: "/real-estate-investing/funding-financing" }}
  />
);

export default BlogCategoryFinancing;
