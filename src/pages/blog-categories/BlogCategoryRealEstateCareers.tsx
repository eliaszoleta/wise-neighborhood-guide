import BlogCategoryPage from "@/components/BlogCategoryPage";
import imgAgentBroker from "@/assets/blog/real-estate-agent-broker.jpg";
import imgBecomeRealtor from "@/assets/blog/become-realtor-broker.jpg";

const posts = [
  {
    title: "Real Estate Agent vs Realtor vs Broker: Key Differences Explained",
    slug: "/blog/real-estate-careers/real-estate-agent-realtor-broker",
    excerpt: "Agent, Realtor, and broker are not the same thing. Here's what each title actually means, what they're legally allowed to do, and how the compensation structure works.",
    image: imgAgentBroker,
    alt: "Professional real estate agent and broker discussing property sale outside home",
  },
  {
    title: "How to Become a Real Estate Agent or Broker: Career Path & Expectations",
    slug: "/blog/real-estate-careers/become-realtor-broker",
    excerpt: "The licensing process, what to expect in your first year, how income actually works in real estate sales, and what separates agents who make it from those who don't.",
    image: imgBecomeRealtor,
    alt: "Professional realtor holding house keys in front of sold property",
  },
];

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
