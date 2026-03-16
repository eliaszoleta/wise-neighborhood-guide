import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Helmet } from "react-helmet-async";

import imgTypesProperty from "@/assets/blog/types-of-real-estate-property.jpg";
import imgBrrrr from "@/assets/blog/brrrr-method-real-estate.jpg";
import imgFirstRental from "@/assets/blog/first-rental-property.jpg";
import imgHardMoney from "@/assets/blog/hard-money-lender.jpg";
import imgPrivateMoney from "@/assets/blog/private-money-lender.jpg";
import imgFindTenant from "@/assets/blog/find-tenant-rental.jpg";
import imgCashOut from "@/assets/blog/cash-out-refinance.jpg";
import imgTypesRefinance from "@/assets/blog/types-of-refinance.jpg";
import imgAgentBroker from "@/assets/blog/real-estate-agent-broker.jpg";
import imgLeadManagers from "@/assets/blog/lead-managers-real-estate.jpg";
import imgAcquisitions from "@/assets/blog/acquisitions-manager.jpg";
import imgHouseFlipping from "@/assets/blog/house-flipping.jpg";
import imgRentalExpenses from "@/assets/blog/rental-property-expenses.jpg";
import imgMortgageLoans from "@/assets/blog/mortgage-loans-homebuyers.jpg";
import imgWholesaling from "@/assets/blog/real-estate-wholesaling.jpg";
import imgBecomeRealtor from "@/assets/blog/become-realtor-broker.jpg";
import imgPropertyMgmt from "@/assets/blog/property-management.jpg";
import imgBookkeepers from "@/assets/blog/bookkeepers-real-estate.jpg";
import imgMipPmi from "@/assets/blog/mip-pmi-explained.jpg";
import imgLeadTools from "@/assets/blog/lead-management-tools.jpg";

const blogPosts = [
  {
    title: "3 Main Types of Real Estate Property: Residential, Commercial & Land Explained",
    category: "Investing",
    slug: "/blog/investing/types-of-real-estate-property",
    image: imgTypesProperty,
    alt: "Three types of real estate properties including residential home, condo building, and commercial property",
  },
  {
    title: "BRRRR Method in Real Estate Investing: What It Is & How It Works",
    category: "Investing",
    slug: "/blog/investing/brrrr-method-real-estate",
    image: imgBrrrr,
    alt: "Real estate investor analyzing BRRRR method property renovation blueprints with calculator",
  },
  {
    title: "How to Find and Buy Your First Rental Property: Step-by-Step Guide",
    category: "Investing",
    slug: "/blog/investing/first-rental-property",
    image: imgFirstRental,
    alt: "First-time investor viewing a suburban rental house for sale",
  },
  {
    title: "What Is a Hard Money Lender in Real Estate? Complete Beginner Guide",
    category: "Financing",
    slug: "/blog/financing/hard-money-lender",
    image: imgHardMoney,
    alt: "Hard money lender meeting with real estate investor reviewing loan documents",
  },
  {
    title: "Private Money Lenders in Real Estate: How They Work & How to Find One",
    category: "Financing",
    slug: "/blog/financing/private-money-lender",
    image: imgPrivateMoney,
    alt: "Private money lender and investor shaking hands over property investment deal",
  },
  {
    title: "How to Find a Tenant for Your Rental Property: Proven Strategies",
    category: "Property Management",
    slug: "/blog/property-management/find-tenant-rental-property",
    image: imgFindTenant,
    alt: "Landlord showing rental apartment to prospective tenants during property tour",
  },
  {
    title: "Cash-Out Refinance Explained: How Real Estate Investors Use Home Equity",
    category: "Financing",
    slug: "/blog/financing/cash-out-refinance",
    image: imgCashOut,
    alt: "Homeowner reviewing cash-out refinance documents with equity growth chart",
  },
  {
    title: "Types of Refinance: Rate-and-Term, Cash-Out, Streamline & DSCR",
    category: "Financing",
    slug: "/blog/financing/types-of-refinance",
    image: imgTypesRefinance,
    alt: "Mortgage refinance documents and calculator comparing different refinance options",
  },
  {
    title: "Real Estate Agent vs Realtor vs Broker: Key Differences Explained",
    category: "Careers",
    slug: "/blog/real-estate-careers/real-estate-agent-realtor-broker",
    image: imgAgentBroker,
    alt: "Professional real estate agent and broker discussing property sale outside home",
  },
  {
    title: "What Do Lead Managers Do in a Real Estate Business?",
    category: "Business",
    slug: "/blog/real-estate-business/lead-managers-real-estate",
    image: imgLeadManagers,
    alt: "Lead manager working at computer with CRM dashboard showing real estate leads",
  },
  {
    title: "What Do Acquisitions Managers Do in Real Estate? Roles & Responsibilities",
    category: "Business",
    slug: "/blog/real-estate-business/acquisitions-manager-real-estate",
    image: imgAcquisitions,
    alt: "Acquisitions manager reviewing property deals and investment contracts at desk",
  },
  {
    title: "House Flipping 101: What It Is, How It Works & What It Actually Costs",
    category: "Investing",
    slug: "/blog/investing/house-flipping",
    image: imgHouseFlipping,
    alt: "House being renovated for flipping with construction tools and blueprints",
  },
  {
    title: "Monthly Rental Property Expenses Every Landlord Should Budget For",
    category: "Property Management",
    slug: "/blog/property-management/rental-property-expenses",
    image: imgRentalExpenses,
    alt: "Rental property owner reviewing monthly expense spreadsheet with bills and calculator",
  },
  {
    title: "Types of Mortgage Loans for First-Time Homebuyers: FHA, VA, USDA & More",
    category: "Financing",
    slug: "/blog/financing/mortgage-loans-first-time-homebuyers",
    image: imgMortgageLoans,
    alt: "First-time homebuyer couple meeting with mortgage loan officer to discuss options",
  },
  {
    title: "Real Estate Wholesaling Explained: How It Works Step by Step",
    category: "Wholesaling",
    slug: "/blog/wholesaling/real-estate-wholesaling-explained",
    image: imgWholesaling,
    alt: "Real estate wholesaler negotiating property deal with motivated seller",
  },
  {
    title: "How to Become a Real Estate Agent or Broker: Career Path & Expectations",
    category: "Careers",
    slug: "/blog/real-estate-careers/become-realtor-broker",
    image: imgBecomeRealtor,
    alt: "Professional realtor holding house keys in front of sold property",
  },
  {
    title: "Property Management Companies: What They Do & Whether You Need One",
    category: "Property Management",
    slug: "/blog/property-management/property-management-companies",
    image: imgPropertyMgmt,
    alt: "Property management team inspecting rental apartment with maintenance checklist",
  },
  {
    title: "How Bookkeepers Help Real Estate Businesses Stay Organized and Tax-Ready",
    category: "Business",
    slug: "/blog/real-estate-business/bookkeepers-real-estate",
    image: imgBookkeepers,
    alt: "Bookkeeper organizing real estate financial records on laptop with accounting software",
  },
  {
    title: "MIP vs. PMI: Mortgage Insurance Explained for Homebuyers",
    category: "Financing",
    slug: "/blog/financing/mip-vs-pmi-explained",
    image: imgMipPmi,
    alt: "Mortgage insurance MIP and PMI comparison documents with house model",
  },
  {
    title: "Top Lead Management Tools for Real Estate Professionals in 2026",
    category: "Marketing",
    slug: "/blog/real-estate-business/lead-management-tools",
    image: imgLeadTools,
    alt: "Real estate manager using lead management software on multiple screens with CRM analytics",
  },
  {
    title: "Subject-To Real Estate Deals: How They Work and What You're Actually Agreeing To",
    category: "Financing",
    slug: "/blog/financing/subject-to-real-estate",
    image: imgHardMoney,
    alt: "Real estate investor reviewing subject-to deal documents with seller at closing table",
  },
  {
    title: "Seller Financing in Real Estate: How It Works and When It Makes Sense",
    category: "Financing",
    slug: "/blog/financing/seller-financing-real-estate",
    image: imgCashOut,
    alt: "Seller and buyer signing seller financing promissory note and deed of trust documents",
  },
  {
    title: "Lease Option Real Estate: How It Works, Who It's For, and What to Watch Out For",
    category: "Financing",
    slug: "/blog/financing/lease-option-real-estate",
    image: imgPrivateMoney,
    alt: "Tenant-buyer and seller signing lease option agreement at table with house keys",
  },
  {
    title: "What Is an Assumable Mortgage? How Buyers Can Take Over a 3% Rate in a 7% Market",
    category: "Financing",
    slug: "/blog/financing/assumable-mortgage",
    image: imgMortgageLoans,
    alt: "Buyer and seller reviewing assumable mortgage loan documents at closing table",
  },
  {
    title: "What Is a Blanket Mortgage? A Guide for Real Estate Investors With Multiple Properties",
    category: "Financing",
    slug: "/blog/financing/blanket-mortgage",
    image: imgHardMoney,
    alt: "Real estate investor reviewing blanket mortgage portfolio documents with multiple property files",
  },
  {
    title: "How Real Estate Investors Use a HELOC to Fund Deals",
    category: "Financing",
    slug: "/blog/financing/heloc-real-estate",
    image: imgCashOut,
    alt: "Homeowner reviewing HELOC home equity line of credit documents for real estate investment",
  },
  {
    title: "What Is a Bridge Loan in Real Estate and When Does One Actually Make Sense?",
    category: "Financing",
    slug: "/blog/financing/bridge-loan-real-estate",
    image: imgHardMoney,
    alt: "Real estate investor signing bridge loan documents for short-term property financing",
  },
  {
    title: "How to Buy Real Estate With a Self-Directed IRA",
    category: "Financing",
    slug: "/blog/financing/self-directed-ira-real-estate",
    image: imgFirstRental,
    alt: "Investor reviewing self-directed IRA real estate investment documents with retirement account statements",
  },
  {
    title: "Tenant Stopped Paying Rent? Here's What to Do Step by Step",
    category: "Property Management",
    slug: "/blog/property-management/tenant-not-paying-rent",
    image: imgFindTenant,
    alt: "Landlord reviewing late rent notice documents and tenant communication records",
  },
  {
    title: "The Eviction Process for Landlords: Step-by-Step Legal Guide",
    category: "Property Management",
    slug: "/blog/property-management/eviction-process-landlord",
    image: imgRentalExpenses,
    alt: "Landlord reviewing eviction process legal documents and court filing paperwork",
  },
];

const Blog = () => {
  return (
    <Layout>
      <Helmet>
        <title>Real Estate Blog | Investing, Wholesaling & Financing Guides — Peasant House</title>
        <meta name="description" content="Expert guides on real estate investing, wholesaling, financing, and property management to help you build wealth." />
        <link rel="canonical" href="https://peasanthouse.com/blog" />
        <meta property="og:title" content="Real Estate Blog | Peasant House" />
        <meta property="og:description" content="Expert guides on real estate investing, wholesaling, financing, and property management." />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Peasant House Real Estate Blog",
          description: "Expert guides on real estate investing, wholesaling, financing, and property management to help you build wealth.",
          url: "https://peasanthouse.com/blog",
          publisher: {
            "@type": "Organization",
            name: "Peasant House",
            url: "https://peasanthouse.com",
            logo: { "@type": "ImageObject", url: "https://peasanthouse.com/favicon.svg" },
          },
        })}</script>
      </Helmet>
      <section className="section-padding">
        <div className="container-wide">
          <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl">Real Estate Blog</h1>
          <p className="mt-4 text-lg text-muted-foreground">Expert guides on real estate investing, wholesaling, financing, and property management to help you build wealth.</p>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                key={post.title}
                to={post.slug}
                className="card-hover group block overflow-hidden rounded-lg border border-border bg-card"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.alt}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <span className="inline-block rounded-sm bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent">{post.category}</span>
                  <h2 className="mt-3 font-heading text-lg font-bold leading-snug text-card-foreground">{post.title}</h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
