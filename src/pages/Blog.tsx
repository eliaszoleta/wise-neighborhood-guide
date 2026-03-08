import Layout from "@/components/Layout";

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
    url: "https://peasanthouse.com/3-main-types-of-real-estate-property-for-home-buyers-sellers-and-investors/",
    image: imgTypesProperty,
    alt: "Three types of real estate properties including residential home, condo building, and commercial property",
  },
  {
    title: "BRRRR Method in Real Estate Investing: What It Is & How It Works",
    category: "Investing",
    url: "https://peasanthouse.com/real-estate-brrrr-method-what-in-the-world-is-it-and-how-does-it-works/",
    image: imgBrrrr,
    alt: "Real estate investor analyzing BRRRR method property renovation blueprints with calculator",
  },
  {
    title: "How to Find and Buy Your First Rental Property: Step-by-Step Guide",
    category: "Investing",
    url: "https://peasanthouse.com/how-to-find-and-buy-a-house-for-your-first-rental-property/",
    image: imgFirstRental,
    alt: "First-time investor viewing a suburban rental house for sale",
  },
  {
    title: "What Is a Hard Money Lender in Real Estate? Complete Beginner Guide",
    category: "Financing",
    url: "https://peasanthouse.com/what-is-a-hard-money-lender-in-real-estate-investing/",
    image: imgHardMoney,
    alt: "Hard money lender meeting with real estate investor reviewing loan documents",
  },
  {
    title: "Private Money Lenders in Real Estate: How They Work & How to Find One",
    category: "Financing",
    url: "https://peasanthouse.com/what-is-a-private-money-lender-in-real-estate-investing/",
    image: imgPrivateMoney,
    alt: "Private money lender and investor shaking hands over property investment deal",
  },
  {
    title: "How to Find a Tenant for Your Rental Property: Proven Strategies",
    category: "Property Management",
    url: "https://peasanthouse.com/how-can-i-find-a-tenant-for-my-rental-property/",
    image: imgFindTenant,
    alt: "Landlord showing rental apartment to prospective tenants during property tour",
  },
  {
    title: "Cash-Out Refinance Explained: How Real Estate Investors Use Home Equity",
    category: "Financing",
    url: "https://peasanthouse.com/what-is-a-cash-out-refinance-in-real-estate-investing/",
    image: imgCashOut,
    alt: "Homeowner reviewing cash-out refinance documents with equity growth chart",
  },
  {
    title: "Types of Refinance in Real Estate Investing: Rate-and-Term, Cash-Out & More",
    category: "Financing",
    url: "https://peasanthouse.com/what-are-the-types-of-refinance-in-real-estate-investing/",
    image: imgTypesRefinance,
    alt: "Mortgage refinance documents and calculator comparing different refinance options",
  },
  {
    title: "Real Estate Agent vs Realtor vs Broker: Key Differences Explained",
    category: "Careers",
    url: "https://peasanthouse.com/what-is-a-real-estate-agent-realtor-and-real-estate-broker/",
    image: imgAgentBroker,
    alt: "Professional real estate agent and broker discussing property sale outside home",
  },
  {
    title: "What Do Lead Managers Do in a Real Estate Business?",
    category: "Business",
    url: "https://peasanthouse.com/what-do-lead-managers-do-in-a-real-estate-business/",
    image: imgLeadManagers,
    alt: "Lead manager working at computer with CRM dashboard showing real estate leads",
  },
  {
    title: "What Do Acquisitions Managers Do in Real Estate? Roles & Responsibilities",
    category: "Business",
    url: "https://peasanthouse.com/what-do-acquisitions-managers-do-in-a-real-estate-business/",
    image: imgAcquisitions,
    alt: "Acquisitions manager reviewing property deals and investment contracts at desk",
  },
  {
    title: "House Flipping 101: What It Is, How It Works & How to Get Started",
    category: "Investing",
    url: "https://peasanthouse.com/house-flipping-what-is-it-and-how-does-it-work/",
    image: imgHouseFlipping,
    alt: "House being renovated for flipping with construction tools and blueprints",
  },
  {
    title: "Monthly Rental Property Expenses Every Landlord Should Know",
    category: "Property Management",
    url: "https://peasanthouse.com/monthly-real-estate-rental-property-owners-expenses/",
    image: imgRentalExpenses,
    alt: "Rental property owner reviewing monthly expense spreadsheet with bills and calculator",
  },
  {
    title: "Types of Mortgage Loans for First-Time Homebuyers: FHA, VA, USDA & More",
    category: "Financing",
    url: "https://peasanthouse.com/types-of-mortgage-loans-for-first-time-homebuyers/",
    image: imgMortgageLoans,
    alt: "First-time homebuyer couple meeting with mortgage loan officer to discuss options",
  },
  {
    title: "Real Estate Wholesaling Explained: How It Works Step by Step",
    category: "Wholesaling",
    url: "https://peasanthouse.com/what-is-real-estate-wholesaling-how-does-it-works/",
    image: imgWholesaling,
    alt: "Real estate wholesaler negotiating property deal with motivated seller",
  },
  {
    title: "How to Become a Realtor or Real Estate Broker: Career Guide",
    category: "Careers",
    url: "https://peasanthouse.com/what-do-realtors-and-real-estate-brokers-do-and-how-to-become-one/",
    image: imgBecomeRealtor,
    alt: "Professional realtor holding house keys in front of sold property",
  },
  {
    title: "Property Management Companies: What They Do & Why You Need One",
    category: "Property Management",
    url: "https://peasanthouse.com/property-management-companies-what-they-are-and-what-they-do/",
    image: imgPropertyMgmt,
    alt: "Property management team inspecting rental apartment with maintenance checklist",
  },
  {
    title: "How Bookkeepers Help Real Estate Businesses Save Money & Stay Compliant",
    category: "Business",
    url: "https://peasanthouse.com/how-bookeepers-help-real-estate-business/",
    image: imgBookkeepers,
    alt: "Bookkeeper organizing real estate financial records on laptop with accounting software",
  },
  {
    title: "Mortgage Insurance Explained: MIP vs PMI and What Homebuyers Must Know",
    category: "Financing",
    url: "https://peasanthouse.com/mortage-loans-mip-and-pmi-explained/",
    image: imgMipPmi,
    alt: "Mortgage insurance MIP and PMI comparison documents with house model",
  },
  {
    title: "Top 5 Lead Management Tools for Real Estate Professionals in 2025",
    category: "Marketing",
    url: "https://peasanthouse.com/top-5-lead-management-tools-for-real-estate-managers-in-2025/",
    image: imgLeadTools,
    alt: "Real estate manager using lead management software on multiple screens with CRM analytics",
  },
];

const Blog = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-wide">
          <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl">Real Estate Blog</h1>
          <p className="mt-4 text-lg text-muted-foreground">Expert guides on real estate investing, wholesaling, financing, and property management to help you build wealth.</p>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <a
                key={post.title}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
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
              </a>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
