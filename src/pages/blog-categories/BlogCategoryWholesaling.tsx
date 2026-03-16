import BlogCategoryPage from "@/components/BlogCategoryPage";
import imgWholesaling from "@/assets/blog/real-estate-wholesaling.jpg";

const posts = [
  {
    title: "Real Estate Wholesaling Explained: How It Works Step by Step",
    slug: "/blog/wholesaling/real-estate-wholesaling-explained",
    excerpt: "Wholesaling is finding distressed properties, getting them under contract, and selling the contract to an investor for a fee — without ever owning the property. Here's the full process.",
    image: imgWholesaling,
    alt: "Real estate wholesaler negotiating property deal with motivated seller",
  },
];

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
