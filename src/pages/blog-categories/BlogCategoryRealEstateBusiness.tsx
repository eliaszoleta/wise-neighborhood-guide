import BlogCategoryPage from "@/components/BlogCategoryPage";
import imgLeadManagers from "@/assets/blog/lead-managers-real-estate.jpg";
import imgAcquisitions from "@/assets/blog/acquisitions-manager.jpg";
import imgBookkeepers from "@/assets/blog/bookkeepers-real-estate.jpg";
import imgLeadTools from "@/assets/blog/lead-management-tools.jpg";

const posts = [
  {
    title: "What Do Lead Managers Do in a Real Estate Business?",
    slug: "/blog/real-estate-business/lead-managers-real-estate",
    excerpt: "The lead manager is the first human contact in a wholesale or investment operation. Here's what the role actually involves, how it differs from acquisitions, and what good performance looks like.",
    image: imgLeadManagers,
    alt: "Lead manager working at computer with CRM dashboard showing real estate leads",
  },
  {
    title: "What Do Acquisitions Managers Do in Real Estate? Roles & Responsibilities",
    slug: "/blog/real-estate-business/acquisitions-manager-real-estate",
    excerpt: "Acquisitions managers convert motivated seller leads into signed contracts. Here's what the job requires, how they're compensated, and what separates the ones who close from those who don't.",
    image: imgAcquisitions,
    alt: "Acquisitions manager reviewing property deals and investment contracts at desk",
  },
  {
    title: "How Bookkeepers Help Real Estate Businesses Stay Organized and Tax-Ready",
    slug: "/blog/real-estate-business/bookkeepers-real-estate",
    excerpt: "Clean books are the foundation of every tax strategy in real estate. Here's what a good bookkeeper actually does, what they cost, and when you need one.",
    image: imgBookkeepers,
    alt: "Bookkeeper organizing real estate financial records on laptop with accounting software",
  },
  {
    title: "Top Lead Management Tools for Real Estate Professionals in 2026",
    slug: "/blog/real-estate-business/lead-management-tools",
    excerpt: "The right CRM separates operations that scale from ones that stall. Here's an honest breakdown of the lead management tools that actually fit real estate investor and agent workflows.",
    image: imgLeadTools,
    alt: "Real estate manager using lead management software on multiple screens with CRM analytics",
  },
];

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
