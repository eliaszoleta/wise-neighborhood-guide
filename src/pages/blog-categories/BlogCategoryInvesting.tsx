import BlogCategoryPage from "@/components/BlogCategoryPage";
import imgTypesProperty from "@/assets/blog/types-of-real-estate-property.jpg";
import imgBrrrr from "@/assets/blog/brrrr-method-real-estate.jpg";
import imgFirstRental from "@/assets/blog/first-rental-property.jpg";
import imgHouseFlipping from "@/assets/blog/house-flipping.jpg";

const posts = [
  {
    title: "3 Main Types of Real Estate Property: Residential, Commercial & Land Explained",
    slug: "/blog/investing/types-of-real-estate-property",
    excerpt: "Residential, commercial, and land each have different risk profiles, financing rules, and return dynamics. Here's how the three asset classes compare and where investors typically start.",
    image: imgTypesProperty,
    alt: "Three types of real estate properties including residential home, condo building, and commercial property",
  },
  {
    title: "BRRRR Method in Real Estate Investing: What It Is & How It Works",
    slug: "/blog/investing/brrrr-method-real-estate",
    excerpt: "Buy, Rehab, Rent, Refinance, Repeat. The BRRRR method lets you recycle the same capital across multiple deals. Here's how the strategy works and where most investors get tripped up.",
    image: imgBrrrr,
    alt: "Real estate investor analyzing BRRRR method property renovation blueprints with calculator",
  },
  {
    title: "How to Find and Buy Your First Rental Property: Step-by-Step Guide",
    slug: "/blog/investing/first-rental-property",
    excerpt: "From analyzing markets and running the numbers to financing and managing the property — everything a first-time rental investor needs to know before making an offer.",
    image: imgFirstRental,
    alt: "First-time investor viewing a suburban rental house for sale",
  },
  {
    title: "House Flipping 101: What It Is, How It Works & What It Actually Costs",
    slug: "/blog/investing/house-flipping",
    excerpt: "House flipping looks simple from the outside. Here's what the numbers actually look like — ARV, rehab costs, financing, holding costs — and why most beginners underestimate the risk.",
    image: imgHouseFlipping,
    alt: "House being renovated for flipping with construction tools and blueprints",
  },
];

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
