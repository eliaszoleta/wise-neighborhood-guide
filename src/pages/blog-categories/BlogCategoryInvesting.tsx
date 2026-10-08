import BlogCategoryPage from "@/components/BlogCategoryPage";
import { getPostsByCategorySlug } from "@/data/blogPosts";

const posts = getPostsByCategorySlug("investing");

const BlogCategoryInvesting = () => (
  <BlogCategoryPage
    categorySlug="investing"
    categoryLabel="Investing"
    metaTitle="Real Estate Investing Guides: Rentals, BRRRR, Flipping & More"
    metaDesc="Practical real estate investing guides covering rental properties, the BRRRR method, house flipping, and the different types of real estate you can invest in."
    intro="Practical guides for real estate investors — from understanding the different asset classes and running deal analysis to executing your first rental or flip."
    posts={posts}
    pillarLink={{ label: "Explore the Real Estate Investing hub", href: "/real-estate-investing" }}
  />
);

export default BlogCategoryInvesting;
