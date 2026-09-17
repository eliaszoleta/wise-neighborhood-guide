import { useState } from "react";
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
    excerpt: "Residential, commercial, and land each have different risk profiles, financing rules, and return dynamics. Here's how the three asset classes compare and where investors typically start.",
    image: imgTypesProperty,
    alt: "Three types of real estate properties including residential home, condo building, and commercial property",
  },
  {
    title: "BRRRR Method in Real Estate Investing: What It Is & How It Works",
    category: "Investing",
    slug: "/blog/investing/brrrr-method-real-estate",
    excerpt: "Buy, Rehab, Rent, Refinance, Repeat. The BRRRR method lets you recycle the same capital across multiple deals. Here's how the strategy works and where most investors get tripped up.",
    image: imgBrrrr,
    alt: "Real estate investor analyzing BRRRR method property renovation blueprints with calculator",
  },
  {
    title: "How to Find and Buy Your First Rental Property: Step-by-Step Guide",
    category: "Investing",
    slug: "/blog/investing/first-rental-property",
    excerpt: "From analyzing markets and running the numbers to financing and managing the property — everything a first-time rental investor needs to know before making an offer.",
    image: imgFirstRental,
    alt: "First-time investor viewing a suburban rental house for sale",
  },
  {
    title: "What Is a Hard Money Lender in Real Estate? Complete Beginner Guide",
    category: "Financing",
    slug: "/blog/financing/hard-money-lender",
    excerpt: "Hard money lenders provide short-term, asset-based loans for investors buying distressed properties. Here's how they work, what they actually cost, and when to use one.",
    image: imgHardMoney,
    alt: "Hard money lender meeting with real estate investor reviewing loan documents",
  },
  {
    title: "Private Money Lenders in Real Estate: How They Work & How to Find One",
    category: "Financing",
    slug: "/blog/financing/private-money-lender",
    excerpt: "Private money lenders are individuals who fund deals from their own capital. Here's how private money differs from hard money, how deals are structured, and how to build your lender network.",
    image: imgPrivateMoney,
    alt: "Private money lender and investor shaking hands over property investment deal",
  },
  {
    title: "How to Find a Tenant for Your Rental Property: Proven Strategies",
    category: "Property Management",
    slug: "/blog/property-management/find-tenant-rental-property",
    excerpt: "Tenant selection is where landlords make or break their investment. Here's how to screen properly, what red flags to look for, and how to place a tenant who actually pays.",
    image: imgFindTenant,
    alt: "Landlord showing rental apartment to prospective tenants during property tour",
  },
  {
    title: "Cash-Out Refinance Explained: How Real Estate Investors Use Home Equity",
    category: "Financing",
    slug: "/blog/financing/cash-out-refinance",
    excerpt: "A cash-out refinance replaces your existing mortgage with a larger one and pays you the difference in cash. Here's how investors use it to fund their next deal without selling.",
    image: imgCashOut,
    alt: "Homeowner reviewing cash-out refinance documents with equity growth chart",
  },
  {
    title: "Types of Refinance: Rate-and-Term, Cash-Out, Streamline & DSCR",
    category: "Financing",
    slug: "/blog/financing/types-of-refinance",
    excerpt: "Not every refinance is the same. Here's how rate-and-term, cash-out, streamline, and DSCR refinances differ — and which one actually fits your situation.",
    image: imgTypesRefinance,
    alt: "Mortgage refinance documents and calculator comparing different refinance options",
  },
  {
    title: "Real Estate Agent vs Realtor vs Broker: Key Differences Explained",
    category: "Careers",
    slug: "/blog/real-estate-careers/real-estate-agent-realtor-broker",
    excerpt: "Agent, Realtor, and broker are not the same thing. Here's what each title actually means, what they're legally allowed to do, and how the compensation structure works.",
    image: imgAgentBroker,
    alt: "Professional real estate agent and broker discussing property sale outside home",
  },
  {
    title: "What Do Lead Managers Do in a Real Estate Business?",
    category: "Business",
    slug: "/blog/real-estate-business/lead-managers-real-estate",
    excerpt: "The lead manager is the first human contact in a wholesale or investment operation. Here's what the role actually involves, how it differs from acquisitions, and what good performance looks like.",
    image: imgLeadManagers,
    alt: "Lead manager working at computer with CRM dashboard showing real estate leads",
  },
  {
    title: "What Do Acquisitions Managers Do in Real Estate? Roles & Responsibilities",
    category: "Business",
    slug: "/blog/real-estate-business/acquisitions-manager-real-estate",
    excerpt: "Acquisitions managers convert motivated seller leads into signed contracts. Here's what the job requires, how they're compensated, and what separates the ones who close from those who don't.",
    image: imgAcquisitions,
    alt: "Acquisitions manager reviewing property deals and investment contracts at desk",
  },
  {
    title: "House Flipping 101: What It Is, How It Works & What It Actually Costs",
    category: "Investing",
    slug: "/blog/investing/house-flipping",
    excerpt: "House flipping looks simple from the outside. Here's what the numbers actually look like — ARV, rehab costs, financing, holding costs — and why most beginners underestimate the risk.",
    image: imgHouseFlipping,
    alt: "House being renovated for flipping with construction tools and blueprints",
  },
  {
    title: "Monthly Rental Property Expenses Every Landlord Should Budget For",
    category: "Property Management",
    slug: "/blog/property-management/rental-property-expenses",
    excerpt: "Most landlords drastically underestimate their real expenses. Here's every cost category — maintenance, vacancy, insurance, management, taxes — with realistic numbers.",
    image: imgRentalExpenses,
    alt: "Rental property owner reviewing monthly expense spreadsheet with bills and calculator",
  },
  {
    title: "Types of Mortgage Loans for First-Time Homebuyers: FHA, VA, USDA & More",
    category: "Financing",
    slug: "/blog/financing/mortgage-loans-first-time-homebuyers",
    excerpt: "FHA, VA, USDA, and conventional loans all work differently. Here's a plain-language breakdown of what each requires, who qualifies, and which makes sense for your situation.",
    image: imgMortgageLoans,
    alt: "First-time homebuyer couple meeting with mortgage loan officer to discuss options",
  },
  {
    title: "Real Estate Wholesaling Explained: How It Works Step by Step",
    category: "Wholesaling",
    slug: "/blog/wholesaling/real-estate-wholesaling-explained",
    excerpt: "Wholesaling is finding distressed properties, getting them under contract, and selling the contract to an investor for a fee — without ever owning the property. Here's the full process.",
    image: imgWholesaling,
    alt: "Real estate wholesaler negotiating property deal with motivated seller",
  },
  {
    title: "How to Become a Real Estate Agent or Broker: Career Path & Expectations",
    category: "Careers",
    slug: "/blog/real-estate-careers/become-realtor-broker",
    excerpt: "The licensing process, what to expect in your first year, how income actually works in real estate sales, and what separates agents who make it from those who don't.",
    image: imgBecomeRealtor,
    alt: "Professional realtor holding house keys in front of sold property",
  },
  {
    title: "Property Management Companies: What They Do & Whether You Need One",
    category: "Property Management",
    slug: "/blog/property-management/property-management-companies",
    excerpt: "A property manager handles tenants, maintenance, and legal compliance for 8–10% of monthly rent. Here's what that actually includes and whether the cost makes sense for your portfolio.",
    image: imgPropertyMgmt,
    alt: "Property management team inspecting rental apartment with maintenance checklist",
  },
  {
    title: "How Bookkeepers Help Real Estate Businesses Stay Organized and Tax-Ready",
    category: "Business",
    slug: "/blog/real-estate-business/bookkeepers-real-estate",
    excerpt: "Clean books are the foundation of every tax strategy in real estate. Here's what a good bookkeeper actually does, what they cost, and when you need one.",
    image: imgBookkeepers,
    alt: "Bookkeeper organizing real estate financial records on laptop with accounting software",
  },
  {
    title: "MIP vs. PMI: Mortgage Insurance Explained for Homebuyers",
    category: "Financing",
    slug: "/blog/financing/mip-vs-pmi-explained",
    excerpt: "MIP is for FHA loans. PMI is for conventional. They work very differently — and one of them never goes away. Here's what you actually need to know before you choose a loan.",
    image: imgMipPmi,
    alt: "Mortgage insurance MIP and PMI comparison documents with house model",
  },
  {
    title: "Top Lead Management Tools for Real Estate Professionals in 2026",
    category: "Business",
    slug: "/blog/real-estate-business/lead-management-tools",
    excerpt: "The right CRM separates operations that scale from ones that stall. Here's an honest breakdown of the lead management tools that actually fit real estate investor and agent workflows.",
    image: imgLeadTools,
    alt: "Real estate manager using lead management software on multiple screens with CRM analytics",
  },
  {
    title: "Subject-To Real Estate Deals: How They Work and What You're Actually Agreeing To",
    category: "Financing",
    slug: "/blog/financing/subject-to-real-estate",
    excerpt: "In a subject-to deal, you take over a property while the seller's existing mortgage stays in place. Here's the real mechanics, the due-on-sale risk, and when this strategy makes sense.",
    image: imgHardMoney,
    alt: "Real estate investor reviewing subject-to deal documents with seller at closing table",
  },
  {
    title: "Seller Financing in Real Estate: How It Works and When It Makes Sense",
    category: "Financing",
    slug: "/blog/financing/seller-financing-real-estate",
    excerpt: "Seller financing is when the property owner acts as the bank. Here's how the deal is structured, what rates and terms look like, and when it's worth pursuing.",
    image: imgCashOut,
    alt: "Seller and buyer signing seller financing promissory note and deed of trust documents",
  },
  {
    title: "Lease Option Real Estate: How It Works, Who It's For, and What to Watch Out For",
    category: "Financing",
    slug: "/blog/financing/lease-option-real-estate",
    excerpt: "A lease option lets you rent a property today with the right to buy it later at a locked-in price. Here's how the deal is structured, who benefits, and the risks both sides need to understand.",
    image: imgPrivateMoney,
    alt: "Tenant-buyer and seller signing lease option agreement at table with house keys",
  },
  {
    title: "What Is an Assumable Mortgage? How Buyers Can Take Over a 3% Rate in a 7% Market",
    category: "Financing",
    slug: "/blog/financing/assumable-mortgage",
    excerpt: "An assumable mortgage lets a buyer take over the seller's existing FHA or VA loan — same rate, same balance, same terms. Here's how the process works and how to bridge the equity gap.",
    image: imgMortgageLoans,
    alt: "Buyer and seller reviewing assumable mortgage loan documents at closing table",
  },
  {
    title: "What Is a Blanket Mortgage? A Guide for Real Estate Investors With Multiple Properties",
    category: "Financing",
    slug: "/blog/financing/blanket-mortgage",
    excerpt: "A blanket mortgage covers multiple properties under one loan. Here's how the release clause works, when consolidating a portfolio makes sense, and the risks involved.",
    image: imgHardMoney,
    alt: "Real estate investor reviewing blanket mortgage portfolio documents with multiple property files",
  },
  {
    title: "How Real Estate Investors Use a HELOC to Fund Deals",
    category: "Financing",
    slug: "/blog/financing/heloc-real-estate",
    excerpt: "A HELOC turns your home equity into a revolving line of credit. Here's how investors use it for down payments, rehabs, and the BRRRR cycle — and where the risk gets real.",
    image: imgCashOut,
    alt: "Homeowner reviewing HELOC home equity line of credit documents for real estate investment",
  },
  {
    title: "What Is a Bridge Loan in Real Estate and When Does One Actually Make Sense?",
    category: "Financing",
    slug: "/blog/financing/bridge-loan-real-estate",
    excerpt: "A bridge loan is short-term financing that closes fast when conventional mortgages can't. Here's how the terms work, what they actually cost, and when the math justifies using one.",
    image: imgHardMoney,
    alt: "Real estate investor signing bridge loan documents for short-term property financing",
  },
  {
    title: "How to Buy Real Estate With a Self-Directed IRA",
    category: "Financing",
    slug: "/blog/financing/self-directed-ira-real-estate",
    excerpt: "A self-directed IRA lets you hold rental property inside a retirement account — tax-deferred or tax-free with a Roth. Here's how it works and the rules you must follow.",
    image: imgFirstRental,
    alt: "Investor reviewing self-directed IRA real estate investment documents with retirement account statements",
  },
  {
    title: "Tenant Stopped Paying Rent? Here's What to Do Step by Step",
    category: "Property Management",
    slug: "/blog/property-management/tenant-not-paying-rent",
    excerpt: "A non-paying tenant is a legal problem as much as a cash flow problem. How you respond in the first week determines whether this resolves quickly or drags into an eviction.",
    image: imgFindTenant,
    alt: "Landlord reviewing late rent notice documents and tenant communication records",
  },
  {
    title: "The Eviction Process for Landlords: Step-by-Step Legal Guide",
    category: "Property Management",
    slug: "/blog/property-management/eviction-process-landlord",
    excerpt: "Eviction is a legal procedure and every state has its own version. Here's how it works from notice to sheriff enforcement — and the mistakes that get cases thrown out.",
    image: imgRentalExpenses,
    alt: "Landlord reviewing eviction process legal documents and court filing paperwork",
  },
];

const CATEGORIES = ["All", "Financing", "Investing", "Property Management", "Wholesaling", "Careers", "Business"] as const;

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered = activeCategory === "All"
    ? blogPosts
    : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      <Helmet>
        <title>Real Estate Blog | Investing, Wholesaling & Financing Guides — Home Nexio</title>
        <meta name="description" content="Expert guides on real estate investing, wholesaling, financing, and property management to help you build wealth." />
        <link rel="canonical" href="https://homenexio.com/blog" />
        <meta property="og:title" content="Real Estate Blog | Home Nexio" />
        <meta property="og:description" content="Expert guides on real estate investing, wholesaling, financing, and property management." />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Home Nexio Real Estate Blog",
          description: "Expert guides on real estate investing, wholesaling, financing, and property management to help you build wealth.",
          url: "https://homenexio.com/blog",
          publisher: {
            "@type": "Organization",
            name: "Home Nexio",
            url: "https://homenexio.com",
            logo: { "@type": "ImageObject", url: "https://homenexio.com/favicon.svg" },
          },
        })}</script>
      </Helmet>

      <section className="section-padding">
        <div className="container-wide">
          <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl">Real Estate Blog</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">Expert guides on real estate investing, wholesaling, financing, and property management to help you build wealth.</p>

          {/* Category filter tabs */}
          <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Filter by category">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-accent text-accent-foreground"
                    : "border border-border bg-card text-muted-foreground hover:border-accent hover:text-accent"
                }`}
              >
                {cat}
                {cat === "All" && (
                  <span className="ml-1.5 text-xs opacity-60">{blogPosts.length}</span>
                )}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post) => (
              <Link
                key={post.slug}
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
                  <span className="inline-block rounded-sm bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent">
                    {post.category}
                  </span>
                  <h2 className="mt-3 font-heading text-lg font-bold leading-snug text-card-foreground">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="mt-16 text-center text-muted-foreground">No articles in this category yet.</p>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
