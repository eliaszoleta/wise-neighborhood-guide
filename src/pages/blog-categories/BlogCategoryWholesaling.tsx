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
  {
    title: "How to Build a Cash Buyers List for Real Estate Wholesaling",
    slug: "/blog/wholesaling/cash-buyers-list-real-estate",
    excerpt: "A cash buyers list is the asset that makes wholesaling work — without buyers who close fast, your contracts are worthless. Here's how to build one from scratch.",
    image: imgWholesaling,
    alt: "Real estate investor reviewing cash buyers list and contact database on laptop",
  },
  {
    title: "Double Closing in Real Estate: How It Works and When Wholesalers Use It",
    slug: "/blog/wholesaling/double-closing-real-estate",
    excerpt: "A double closing is two back-to-back transactions that keep your profit private. Here's how it works, what it costs, and when to use it over a simple assignment.",
    image: imgWholesaling,
    alt: "Title company closing documents for a real estate double closing transaction",
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
