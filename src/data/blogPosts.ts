// Single source of truth for every blog post's card metadata. Blog.tsx (the
// full index) and every BlogCategory*.tsx hub page both read from this list
// instead of keeping their own hand-copied subset -- previously each file had
// a separately hand-maintained array, and 16 of the site's 43 posts had
// drifted out of both the main index and their own category hub, leaving
// them with no path to be found except a direct link from another article.
// Adding a post now only requires one entry here plus one in
// blogPostRoutes.ts (kept separate so the sitemap/prerender scripts, which
// run in plain Node, don't have to load these image imports).
import { BLOG_POST_ROUTES, type BlogPostRoute } from "./blogPostRoutes";

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

export interface BlogPostMeta extends BlogPostRoute {
  title: string;
  excerpt: string;
  image: string;
  alt: string;
}

interface Presentation {
  title: string;
  excerpt: string;
  image: string;
  alt: string;
}

const PRESENTATION: Record<string, Presentation> = {
  "/blog/investing/types-of-real-estate-property": {
    title: "3 Main Types of Real Estate Property: Residential, Commercial & Land Explained",
    excerpt: "Residential, commercial, and land each have different risk profiles, financing rules, and return dynamics. Here's how the three asset classes compare and where investors typically start.",
    image: imgTypesProperty,
    alt: "Three types of real estate properties including residential home, condo building, and commercial property",
  },
  "/blog/investing/brrrr-method-real-estate": {
    title: "BRRRR Method in Real Estate Investing: What It Is & How It Works",
    excerpt: "Buy, Rehab, Rent, Refinance, Repeat. The BRRRR method lets you recycle the same capital across multiple deals. Here's how the strategy works and where most investors get tripped up.",
    image: imgBrrrr,
    alt: "Real estate investor analyzing BRRRR method property renovation blueprints with calculator",
  },
  "/blog/investing/first-rental-property": {
    title: "How to Find and Buy Your First Rental Property: Step-by-Step Guide",
    excerpt: "From analyzing markets and running the numbers to financing and managing the property — everything a first-time rental investor needs to know before making an offer.",
    image: imgFirstRental,
    alt: "First-time investor viewing a suburban rental house for sale",
  },
  "/blog/financing/hard-money-lender": {
    title: "What Is a Hard Money Lender in Real Estate? Complete Beginner Guide",
    excerpt: "Hard money lenders provide short-term, asset-based loans for investors buying distressed properties. Here's how they work, what they actually cost, and when to use one.",
    image: imgHardMoney,
    alt: "Hard money lender meeting with real estate investor reviewing loan documents",
  },
  "/blog/financing/private-money-lender": {
    title: "Private Money Lenders in Real Estate: How They Work & How to Find One",
    excerpt: "Private money lenders are individuals who fund deals from their own capital. Here's how private money differs from hard money, how deals are structured, and how to build your lender network.",
    image: imgPrivateMoney,
    alt: "Private money lender and investor shaking hands over property investment deal",
  },
  "/blog/property-management/find-tenant-rental-property": {
    title: "How to Find a Tenant for Your Rental Property: Proven Strategies",
    excerpt: "Tenant selection is where landlords make or break their investment. Here's how to screen properly, what red flags to look for, and how to place a tenant who actually pays.",
    image: imgFindTenant,
    alt: "Landlord showing rental apartment to prospective tenants during property tour",
  },
  "/blog/financing/cash-out-refinance": {
    title: "Cash-Out Refinance Explained: How Real Estate Investors Use Home Equity",
    excerpt: "A cash-out refinance replaces your existing mortgage with a larger one and pays you the difference in cash. Here's how investors use it to fund their next deal without selling.",
    image: imgCashOut,
    alt: "Homeowner reviewing cash-out refinance documents with equity growth chart",
  },
  "/blog/financing/types-of-refinance": {
    title: "Types of Refinance: Rate-and-Term, Cash-Out, Streamline & DSCR",
    excerpt: "Not every refinance is the same. Here's how rate-and-term, cash-out, streamline, and DSCR refinances differ — and which one actually fits your situation.",
    image: imgTypesRefinance,
    alt: "Mortgage refinance documents and calculator comparing different refinance options",
  },
  "/blog/real-estate-careers/real-estate-agent-realtor-broker": {
    title: "Real Estate Agent vs Realtor vs Broker: Key Differences Explained",
    excerpt: "Agent, Realtor, and broker are not the same thing. Here's what each title actually means, what they're legally allowed to do, and how the compensation structure works.",
    image: imgAgentBroker,
    alt: "Professional real estate agent and broker discussing property sale outside home",
  },
  "/blog/real-estate-business/lead-managers-real-estate": {
    title: "What Do Lead Managers Do in a Real Estate Business?",
    excerpt: "The lead manager is the first human contact in a wholesale or investment operation. Here's what the role actually involves, how it differs from acquisitions, and what good performance looks like.",
    image: imgLeadManagers,
    alt: "Lead manager working at computer with CRM dashboard showing real estate leads",
  },
  "/blog/real-estate-business/acquisitions-manager-real-estate": {
    title: "What Do Acquisitions Managers Do in Real Estate? Roles & Responsibilities",
    excerpt: "Acquisitions managers convert motivated seller leads into signed contracts. Here's what the job requires, how they're compensated, and what separates the ones who close from those who don't.",
    image: imgAcquisitions,
    alt: "Acquisitions manager reviewing property deals and investment contracts at desk",
  },
  "/blog/investing/house-flipping": {
    title: "House Flipping 101: What It Is, How It Works & What It Actually Costs",
    excerpt: "House flipping looks simple from the outside. Here's what the numbers actually look like — ARV, rehab costs, financing, holding costs — and why most beginners underestimate the risk.",
    image: imgHouseFlipping,
    alt: "House being renovated for flipping with construction tools and blueprints",
  },
  "/blog/property-management/rental-property-expenses": {
    title: "Monthly Rental Property Expenses Every Landlord Should Budget For",
    excerpt: "Most landlords drastically underestimate their real expenses. Here's every cost category — maintenance, vacancy, insurance, management, taxes — with realistic numbers.",
    image: imgRentalExpenses,
    alt: "Rental property owner reviewing monthly expense spreadsheet with bills and calculator",
  },
  "/blog/financing/mortgage-loans-first-time-homebuyers": {
    title: "Types of Mortgage Loans for First-Time Homebuyers: FHA, VA, USDA & More",
    excerpt: "FHA, VA, USDA, and conventional loans all work differently. Here's a plain-language breakdown of what each requires, who qualifies, and which makes sense for your situation.",
    image: imgMortgageLoans,
    alt: "First-time homebuyer couple meeting with mortgage loan officer to discuss options",
  },
  "/blog/wholesaling/real-estate-wholesaling-explained": {
    title: "Real Estate Wholesaling Explained: How It Works Step by Step",
    excerpt: "Wholesaling is finding distressed properties, getting them under contract, and selling the contract to an investor for a fee — without ever owning the property. Here's the full process.",
    image: imgWholesaling,
    alt: "Real estate wholesaler negotiating property deal with motivated seller",
  },
  "/blog/real-estate-careers/become-realtor-broker": {
    title: "How to Become a Real Estate Agent or Broker: Career Path & Expectations",
    excerpt: "The licensing process, what to expect in your first year, how income actually works in real estate sales, and what separates agents who make it from those who don't.",
    image: imgBecomeRealtor,
    alt: "Professional realtor holding house keys in front of sold property",
  },
  "/blog/property-management/property-management-companies": {
    title: "Property Management Companies: What They Do & Whether You Need One",
    excerpt: "A property manager handles tenants, maintenance, and legal compliance for 8–10% of monthly rent. Here's what that actually includes and whether the cost makes sense for your portfolio.",
    image: imgPropertyMgmt,
    alt: "Property management team inspecting rental apartment with maintenance checklist",
  },
  "/blog/real-estate-business/bookkeepers-real-estate": {
    title: "How Bookkeepers Help Real Estate Businesses Stay Organized and Tax-Ready",
    excerpt: "Clean books are the foundation of every tax strategy in real estate. Here's what a good bookkeeper actually does, what they cost, and when you need one.",
    image: imgBookkeepers,
    alt: "Bookkeeper organizing real estate financial records on laptop with accounting software",
  },
  "/blog/financing/mip-vs-pmi-explained": {
    title: "MIP vs. PMI: Mortgage Insurance Explained for Homebuyers",
    excerpt: "MIP is for FHA loans. PMI is for conventional. They work very differently — and one of them never goes away. Here's what you actually need to know before you choose a loan.",
    image: imgMipPmi,
    alt: "Mortgage insurance MIP and PMI comparison documents with house model",
  },
  "/blog/real-estate-business/lead-management-tools": {
    title: "Top Lead Management Tools for Real Estate Professionals in 2026",
    excerpt: "The right CRM separates operations that scale from ones that stall. Here's an honest breakdown of the lead management tools that actually fit real estate investor and agent workflows.",
    image: imgLeadTools,
    alt: "Real estate manager using lead management software on multiple screens with CRM analytics",
  },
  "/blog/financing/subject-to-real-estate": {
    title: "Subject-To Real Estate Deals: How They Work and What You're Actually Agreeing To",
    excerpt: "In a subject-to deal, you take over a property while the seller's existing mortgage stays in place. Here's the real mechanics, the due-on-sale risk, and when this strategy makes sense.",
    image: imgHardMoney,
    alt: "Real estate investor reviewing subject-to deal documents with seller at closing table",
  },
  "/blog/financing/seller-financing-real-estate": {
    title: "Seller Financing in Real Estate: How It Works and When It Makes Sense",
    excerpt: "Seller financing is when the property owner acts as the bank. Here's how the deal is structured, what rates and terms look like, and when it's worth pursuing.",
    image: imgCashOut,
    alt: "Seller and buyer signing seller financing promissory note and deed of trust documents",
  },
  "/blog/financing/lease-option-real-estate": {
    title: "Lease Option Real Estate: How It Works, Who It's For, and What to Watch Out For",
    excerpt: "A lease option lets you rent a property today with the right to buy it later at a locked-in price. Here's how the deal is structured, who benefits, and the risks both sides need to understand.",
    image: imgPrivateMoney,
    alt: "Tenant-buyer and seller signing lease option agreement at table with house keys",
  },
  "/blog/financing/assumable-mortgage": {
    title: "What Is an Assumable Mortgage? How Buyers Can Take Over a 3% Rate in a 7% Market",
    excerpt: "An assumable mortgage lets a buyer take over the seller's existing FHA or VA loan — same rate, same balance, same terms. Here's how the process works and how to bridge the equity gap.",
    image: imgMortgageLoans,
    alt: "Buyer and seller reviewing assumable mortgage loan documents at closing table",
  },
  "/blog/financing/blanket-mortgage": {
    title: "What Is a Blanket Mortgage? A Guide for Real Estate Investors With Multiple Properties",
    excerpt: "A blanket mortgage covers multiple properties under one loan. Here's how the release clause works, when consolidating a portfolio makes sense, and the risks involved.",
    image: imgHardMoney,
    alt: "Real estate investor reviewing blanket mortgage portfolio documents with multiple property files",
  },
  "/blog/financing/heloc-real-estate": {
    title: "How Real Estate Investors Use a HELOC to Fund Deals",
    excerpt: "A HELOC turns your home equity into a revolving line of credit. Here's how investors use it for down payments, rehabs, and the BRRRR cycle — and where the risk gets real.",
    image: imgCashOut,
    alt: "Homeowner reviewing HELOC home equity line of credit documents for real estate investment",
  },
  "/blog/financing/bridge-loan-real-estate": {
    title: "What Is a Bridge Loan in Real Estate and When Does One Actually Make Sense?",
    excerpt: "A bridge loan is short-term financing that closes fast when conventional mortgages can't. Here's how the terms work, what they actually cost, and when the math justifies using one.",
    image: imgHardMoney,
    alt: "Real estate investor signing bridge loan documents for short-term property financing",
  },
  "/blog/financing/self-directed-ira-real-estate": {
    title: "How to Buy Real Estate With a Self-Directed IRA",
    excerpt: "A self-directed IRA lets you hold rental property inside a retirement account — tax-deferred or tax-free with a Roth. Here's how it works and the rules you must follow.",
    image: imgFirstRental,
    alt: "Investor reviewing self-directed IRA real estate investment documents with retirement account statements",
  },
  "/blog/property-management/tenant-not-paying-rent": {
    title: "Tenant Stopped Paying Rent? Here's What to Do Step by Step",
    excerpt: "A non-paying tenant is a legal problem as much as a cash flow problem. How you respond in the first week determines whether this resolves quickly or drags into an eviction.",
    image: imgFindTenant,
    alt: "Landlord reviewing late rent notice documents and tenant communication records",
  },
  "/blog/property-management/eviction-process-landlord": {
    title: "The Eviction Process for Landlords: Step-by-Step Legal Guide",
    excerpt: "Eviction is a legal procedure and every state has its own version. Here's how it works from notice to sheriff enforcement — and the mistakes that get cases thrown out.",
    image: imgRentalExpenses,
    alt: "Landlord reviewing eviction process legal documents and court filing paperwork",
  },

  // ── Previously orphaned: not in Blog.tsx's index or their own category hub ──
  "/blog/financing/1031-exchange-real-estate": {
    title: "1031 Exchange in Real Estate: Rules, Timelines, and How to Defer Capital Gains",
    excerpt: "A 1031 exchange lets you defer capital gains taxes when selling investment property by rolling proceeds into a like-kind replacement. Here's exactly how it works.",
    image: imgTypesRefinance,
    alt: "Real estate investor reviewing 1031 exchange timeline and replacement property documents",
  },
  "/blog/financing/construction-loan-real-estate": {
    title: "Construction Loans for Real Estate Investors: Draw Schedules, Rates, and Exit Strategies",
    excerpt: "Construction loans are short-term, interest-only loans that fund new builds or major rehabs through a draw schedule. Here's how they work and what to plan for before you close.",
    image: imgMortgageLoans,
    alt: "Real estate investor reviewing construction loan draw schedule at a building site",
  },
  "/blog/financing/dscr-loan-real-estate": {
    title: "What Is a DSCR Loan? How Real Estate Investors Use Debt Service Coverage",
    excerpt: "A DSCR loan qualifies investors based on rental income instead of W-2s or tax returns. Here's how the debt service coverage ratio works and when this loan type makes sense.",
    image: imgCashOut,
    alt: "Investor calculating debt service coverage ratio for a DSCR loan application",
  },
  "/blog/financing/how-to-refinance-rental-property": {
    title: "How to Refinance a Rental Property: Timing, Requirements, and What to Expect",
    excerpt: "Refinancing a rental property is harder than your primary residence. Learn the equity requirements, how lenders count rental income, and when a refi actually makes financial sense.",
    image: imgTypesRefinance,
    alt: "Landlord reviewing rental property refinance paperwork with lender",
  },
  "/blog/financing/portfolio-loan-real-estate": {
    title: "Portfolio Loans for Real Estate Investors: What They Are and When They Make Sense",
    excerpt: "Portfolio loans stay in-house with the lender and bypass Fannie/Freddie guidelines. Learn who offers them, typical terms, and when they beat conventional financing.",
    image: imgMortgageLoans,
    alt: "Investor with multiple rental properties reviewing a portfolio loan agreement",
  },
  "/blog/financing/wraparound-mortgage": {
    title: "What Is a Wraparound Mortgage and How Do Real Estate Investors Use It?",
    excerpt: "A wraparound mortgage lets sellers carry financing while keeping their existing mortgage in place. Learn how the math works, the legal risks, and when it makes sense.",
    image: imgPrivateMoney,
    alt: "Seller and buyer reviewing wraparound mortgage terms at closing table",
  },
  "/blog/investing/cap-rate-vs-cash-on-cash": {
    title: "Cap Rate vs Cash-on-Cash Return: What Each Metric Actually Tells You",
    excerpt: "Cap rate and cash-on-cash return measure different things. Learn when to use each metric, how to calculate them, and why confusing them leads to bad investment decisions.",
    image: imgRentalExpenses,
    alt: "Investor comparing cap rate and cash-on-cash return calculations on a spreadsheet",
  },
  "/blog/investing/fix-and-flip-vs-buy-and-hold": {
    title: "Fix and Flip vs Buy and Hold: Which Real Estate Strategy Fits Your Situation?",
    excerpt: "Flipping generates faster income but requires active work and creates ordinary income tax. Buying and holding builds wealth slowly through cash flow and appreciation. Here's how to choose.",
    image: imgHouseFlipping,
    alt: "Investor weighing a fix-and-flip renovation project against a long-term rental property",
  },
  "/blog/investing/how-to-analyze-rental-property": {
    title: "How to Analyze a Rental Property Before Making an Offer",
    excerpt: "Step-by-step rental property analysis: estimate rents, apply vacancy, subtract real expenses, calculate NOI, and set your maximum offer price using a target cap rate.",
    image: imgFirstRental,
    alt: "Investor analyzing rental property numbers and NOI calculation before making an offer",
  },
  "/blog/investing/short-term-rental-investing": {
    title: "Short-Term Rental Investing: What the Numbers Actually Look Like",
    excerpt: "STRs can generate double the gross revenue of long-term rentals — but operating costs, regulatory risk, and management intensity cut deep into those margins. Here's the real math.",
    image: imgPropertyMgmt,
    alt: "Host preparing a short-term rental property for guest check-in",
  },
  "/blog/property-management/how-to-write-lease-agreement": {
    title: "How to Write a Rental Lease Agreement: What Every Landlord Must Include",
    excerpt: "A lease agreement is your legal foundation as a landlord. Learn the required clauses, what protects you, what can get you in trouble, and how to use state-specific templates.",
    image: imgFindTenant,
    alt: "Landlord drafting a rental lease agreement with a tenant at a desk",
  },
  "/blog/property-management/normal-wear-and-tear": {
    title: "Normal Wear and Tear in Rental Property: What Landlords Can and Can't Charge For",
    excerpt: "Landlords can't deduct normal wear and tear from a security deposit. Learn the legal definition, clear examples of wear vs. damage, and how to document properly.",
    image: imgRentalExpenses,
    alt: "Landlord inspecting a rental unit for wear and tear during a move-out walkthrough",
  },
  "/blog/property-management/security-deposit-rules-landlord": {
    title: "Security Deposit Rules for Landlords: Limits, Holding Requirements, and Legal Deductions",
    excerpt: "State rules on security deposits are strict and specific. Learn deposit limits, holding requirements, legal deductions, timelines to return deposits, and penalties for violations.",
    image: imgPropertyMgmt,
    alt: "Landlord reviewing security deposit paperwork and state deduction rules",
  },
  "/blog/wholesaling/cash-buyers-list-real-estate": {
    title: "How to Build a Cash Buyers List for Real Estate Wholesaling",
    excerpt: "A cash buyers list is the asset that makes wholesaling work — without buyers who close fast, your contracts are worthless. Here's how to build one from scratch and what makes a buyer actually valuable.",
    image: imgWholesaling,
    alt: "Wholesaler building a cash buyers list on a laptop with a CRM spreadsheet",
  },
  "/blog/wholesaling/double-closing-real-estate": {
    title: "Double Closing in Real Estate: How It Works and When Wholesalers Use It",
    excerpt: "A double closing is two back-to-back transactions where you buy and immediately sell a property, keeping your profit private. Here's how it works, what it costs, and when to use it over assignment.",
    image: imgWholesaling,
    alt: "Wholesaler signing double closing transaction documents at a title company",
  },
  "/blog/wholesaling/how-to-find-motivated-sellers": {
    title: "How to Find Motivated Sellers in Real Estate: 8 Methods That Actually Work",
    excerpt: "Motivated sellers are the foundation of wholesale, fix-and-flip, and creative financing deals. Here's where they come from, how to reach them, and what makes someone actually motivated to sell.",
    image: imgWholesaling,
    alt: "Wholesaler driving for dollars to find motivated sellers in a neighborhood",
  },
};

export const BLOG_POSTS: BlogPostMeta[] = BLOG_POST_ROUTES.map((route) => {
  const presentation = PRESENTATION[route.slug];
  if (!presentation) {
    throw new Error(`No presentation data (title/excerpt/image/alt) found for blog post "${route.slug}" in blogPosts.ts`);
  }
  return { ...route, ...presentation };
});

export function getPostsByCategorySlug(categorySlug: string): BlogPostMeta[] {
  return BLOG_POSTS.filter((p) => p.categorySlug === categorySlug);
}
