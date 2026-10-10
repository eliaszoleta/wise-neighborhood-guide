import BlogCategoryPage from "@/components/BlogCategoryPage";
import { getPostsByCategorySlug } from "@/data/blogPosts";

const posts = getPostsByCategorySlug("mortgage-broker");

const BlogCategoryMortgageBroker = () => (
  <BlogCategoryPage
    categorySlug="mortgage-broker"
    categoryLabel="Mortgage Broker"
    metaTitle="How to Become a Mortgage Loan Officer: NMLS Licensing & Career Guides"
    metaDesc="Practical guides for becoming a licensed mortgage loan officer -- NMLS/SAFE Act requirements, costs, compensation, and getting your first borrower clients."
    intro="Every mortgage loan officer in the US is licensed through the same national system. Here's how the NMLS process actually works, what it costs, how pay is structured, and how to get your first clients."
    posts={posts}
  />
);

export default BlogCategoryMortgageBroker;
