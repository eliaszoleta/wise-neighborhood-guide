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
  /** Omitted for newer posts without a sourced photo -- cards fall back to a category-colored icon tile. */
  image?: string;
  alt?: string;
}

interface Presentation {
  title: string;
  excerpt: string;
  image?: string;
  alt?: string;
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

  // ── October 2026 batch ──
  "/blog/financing/fha-loan-requirements": {
    title: "FHA Loan Requirements 2026: Credit Score, Down Payment & Eligibility",
    excerpt: "FHA loans let buyers qualify with a 580 credit score and 3.5% down. Here's exactly what you need to qualify, what it costs, and when an FHA loan isn't your best option.",
    image: imgMortgageLoans,
    alt: "First-time homebuyer reviewing FHA loan requirements and down payment documents",
  },
  "/blog/financing/cash-out-refinance-vs-heloc": {
    title: "Cash-Out Refinance vs HELOC: Which Should You Use to Fund Your Next Deal?",
    excerpt: "A cash-out refinance replaces your mortgage; a HELOC sits on top of it. Here's how the costs, rates, and flexibility actually compare for real estate investors.",
    image: imgCashOut,
    alt: "Homeowner comparing cash-out refinance and HELOC paperwork side by side",
  },
  "/blog/financing/credit-score-investment-property": {
    title: "What Credit Score Do You Need to Buy an Investment Property?",
    excerpt: "Lenders hold investment properties to a higher standard than a primary residence. Here's the real credit score, down payment, and reserve requirements you'll face.",
    image: imgPrivateMoney,
    alt: "Investor reviewing credit score and investment property loan requirements",
  },
  "/blog/investing/how-to-invest-no-money": {
    title: "How to Invest in Real Estate With No Money: 7 Strategies That Actually Work",
    excerpt: "\"No money\" usually means no cash for a down payment, not zero capital of any kind. Here are 7 real strategies investors use to control real estate without a traditional down payment.",
    image: imgFirstRental,
    alt: "Investor reviewing no-money-down real estate investing strategies",
  },
  "/blog/investing/one-percent-rule-real-estate": {
    title: "The 1% Rule in Real Estate: What It Means and Why It's Not Enough",
    excerpt: "The 1% rule says monthly rent should equal at least 1% of the purchase price. Here's how to use it as a fast screening tool -- and why it can't replace a real deal analysis.",
    image: imgRentalExpenses,
    alt: "Investor calculating the 1% rule against a property's purchase price and rent",
  },
  "/blog/investing/reits-vs-direct-investing": {
    title: "REITs vs Direct Real Estate Investing: Which Builds Wealth Faster?",
    excerpt: "REITs offer liquidity and zero management; direct ownership offers leverage and tax advantages. Here's a clear-eyed comparison of returns, risk, and effort for each.",
    image: imgTypesProperty,
    alt: "Investor comparing REIT shares and a direct rental property investment",
  },
  "/blog/property-management/rental-inspection-checklist": {
    title: "Rental Property Inspection Checklist: What Landlords Should Check Every Visit",
    excerpt: "A move-in, routine, and move-out inspection each catch different problems. Here's a complete checklist for every stage of a tenancy, plus how often to inspect without overstepping tenant rights.",
    image: imgPropertyMgmt,
    alt: "Landlord completing a rental property inspection checklist room by room",
  },
  "/blog/property-management/how-to-raise-rent-legally": {
    title: "How to Raise Rent Legally: Notice Requirements and Rent Increase Rules",
    excerpt: "Rent increases are governed by your lease terms, state notice laws, and in some cities, rent control. Here's how to raise rent the right way without triggering a legal dispute.",
    image: imgFindTenant,
    alt: "Landlord preparing a written rent increase notice for a tenant",
  },
  "/blog/property-management/landlord-insurance-explained": {
    title: "Landlord Insurance Explained: What It Covers and What It Doesn't",
    excerpt: "A standard homeowners policy doesn't cover a rental property. Here's what landlord (dwelling) insurance actually covers, what it costs, and the gaps you still need to fill yourself.",
    image: imgCashOut,
    alt: "Landlord reviewing a dwelling insurance policy for a rental property",
  },
  "/blog/wholesaling/is-wholesaling-legal": {
    title: "Is Wholesaling Real Estate Legal? What the Law Actually Says",
    excerpt: "Wholesaling is legal in every state, but a growing number now require a real estate license or impose specific disclosure rules. Here's what's actually regulated and what isn't.",
    image: imgWholesaling,
    alt: "Wholesaler reviewing state wholesaling disclosure and licensing requirements",
  },
  "/blog/wholesaling/assignment-of-contract": {
    title: "Assignment of Contract in Real Estate Wholesaling: How It Works",
    excerpt: "Assignment of contract is how most wholesale deals actually get paid. Here's exactly how the clause works, how the assignment fee gets collected, and the risks to watch for.",
    image: imgWholesaling,
    alt: "Wholesaler signing an assignment of contract agreement with an end buyer",
  },
  "/blog/wholesaling/how-much-wholesalers-make": {
    title: "How Much Do Real Estate Wholesalers Actually Make?",
    excerpt: "Assignment fees typically run $5,000-$20,000 per deal, but income varies enormously based on deal volume, market, and experience. Here's a realistic breakdown of wholesaler earnings.",
    image: imgWholesaling,
    alt: "Wholesaler reviewing assignment fee income and deal volume numbers",
  },
  "/blog/real-estate-careers/how-much-agents-make": {
    title: "How Much Do Real Estate Agents Make? Commission, Splits, and Real Numbers",
    excerpt: "Agent income is almost entirely commission-based, and the headline percentage isn't what agents actually take home. Here's how commission splits really work and what agents typically earn.",
    image: imgAgentBroker,
    alt: "Real estate agent reviewing commission split and closing statement numbers",
  },
  "/blog/real-estate-careers/license-reciprocity": {
    title: "Real Estate License Reciprocity: Can You Use Your License in Another State?",
    excerpt: "Reciprocity rules vary enormously -- some states offer full reciprocity, others require a portability course, and some require you to start the licensing process from scratch.",
    image: imgBecomeRealtor,
    alt: "Real estate agent reviewing license reciprocity requirements between two states",
  },
  "/blog/real-estate-careers/become-property-manager": {
    title: "How to Become a Property Manager: Licensing, Skills, and Career Path",
    excerpt: "Property management licensing requirements vary by state -- some require a real estate license, others a separate property management license, others nothing at all. Here's the real path.",
    image: imgPropertyMgmt,
    alt: "Aspiring property manager reviewing licensing requirements and career path options",
  },
  "/blog/real-estate-business/llc-for-real-estate": {
    title: "Should You Form an LLC for Your Real Estate Investments?",
    excerpt: "An LLC can shield your personal assets from a lawsuit tied to a rental property, but it also complicates financing and adds ongoing costs. Here's how to decide if it's worth it.",
    image: imgBookkeepers,
    alt: "Real estate investor reviewing LLC formation documents for a rental property",
  },
  "/blog/real-estate-business/direct-mail-marketing": {
    title: "Direct Mail Marketing for Real Estate Investors: Does It Still Work?",
    excerpt: "Direct mail remains one of the most reliable ways investors find motivated sellers, but response rates and cost per lead vary enormously based on list quality and consistency.",
    image: imgLeadManagers,
    alt: "Real estate investor reviewing a direct mail marketing campaign and response tracking",
  },
  "/blog/real-estate-business/virtual-assistants-real-estate": {
    title: "Virtual Assistants for Real Estate Investors: What to Outsource First",
    excerpt: "A good VA can take cold calling, lead follow-up, and data entry off your plate for a fraction of a full-time hire's cost. Here's what to delegate first and what to keep doing yourself.",
    image: imgAcquisitions,
    alt: "Real estate investor working with a virtual assistant on lead follow-up tasks",
  },

  // ── City-targeted guides ──
  "/blog/investing/airbnb-rules-nyc": {
    title: "Airbnb & Short-Term Rental Rules in New York City (2026 Guide)",
    excerpt: "NYC has some of the strictest short-term rental rules in the country under Local Law 18. Here's what's actually allowed, what requires registration, and what gets fined.",
    image: imgPropertyMgmt,
    alt: "New York City apartment building considered for short-term rental registration",
  },
  "/blog/investing/airbnb-rules-los-angeles": {
    title: "Airbnb & Short-Term Rental Rules in Los Angeles (2026 Guide)",
    excerpt: "LA's Home-Sharing Ordinance limits most short-term rentals to a host's primary residence. Here's what's allowed, the registration process, and the 90-day unhosted cap.",
    image: imgTypesProperty,
    alt: "Los Angeles home considered for short-term rental under the Home-Sharing Ordinance",
  },
  "/blog/investing/airbnb-rules-san-francisco": {
    title: "Airbnb & Short-Term Rental Rules in San Francisco (2026 Guide)",
    excerpt: "San Francisco requires hosts to register, live in the unit as their primary residence, and caps unhosted rentals at 90 days a year. Here's the full breakdown.",
    image: imgFirstRental,
    alt: "San Francisco residence being registered for short-term rental hosting",
  },
  "/blog/investing/airbnb-rules-austin": {
    title: "Airbnb & Short-Term Rental Rules in Austin, Texas (2026 Guide)",
    excerpt: "Austin licenses short-term rentals but caps non-owner-occupied licenses in residential neighborhoods. Here's how the license types work and where investment-focused STRs are still viable.",
    image: imgHouseFlipping,
    alt: "Austin property being evaluated for a short-term rental license",
  },
  "/blog/investing/airbnb-rules-nashville": {
    title: "Airbnb & Short-Term Rental Rules in Nashville (2026 Guide)",
    excerpt: "Nashville permits short-term rentals but draws a hard line between owner-occupied and non-owner-occupied permits, with the latter capped and restricted in many residential zones.",
    image: imgPropertyMgmt,
    alt: "Nashville home considered for a non-owner-occupied short-term rental permit",
  },
  "/blog/investing/airbnb-rules-new-orleans": {
    title: "Airbnb & Short-Term Rental Rules in New Orleans (2026 Guide)",
    excerpt: "New Orleans heavily restricts short-term rentals in the French Quarter and many residential neighborhoods, while permitting them more freely in commercial zones. Here's the breakdown.",
    image: imgTypesProperty,
    alt: "New Orleans property near the French Quarter considered for short-term rental",
  },
  "/blog/investing/airbnb-rules-miami": {
    title: "Airbnb & Short-Term Rental Rules in Miami (2026 Guide)",
    excerpt: "Miami and Miami Beach have notably different short-term rental rules -- some residential zones carry steep fines for unpermitted STRs while others are wide open. Here's how to tell the difference.",
    image: imgFirstRental,
    alt: "Miami condo tower considered for short-term rental investment",
  },
  "/blog/investing/airbnb-rules-denver": {
    title: "Airbnb & Short-Term Rental Rules in Denver (2026 Guide)",
    excerpt: "Denver limits short-term rental licenses to a host's primary residence, closing off the dedicated-investment-property model within city limits. Here's what's actually allowed.",
    image: imgHouseFlipping,
    alt: "Denver home considered for short-term rental licensing",
  },
  "/blog/investing/airbnb-rules-chicago": {
    title: "Airbnb & Short-Term Rental Rules in Chicago (2026 Guide)",
    excerpt: "Chicago requires registration and allows individual wards and buildings to opt out or add restrictions. Here's how the city's shared housing ordinance actually works.",
    image: imgPropertyMgmt,
    alt: "Chicago apartment building checked against the city's short-term rental ineligible buildings list",
  },
  "/blog/investing/airbnb-rules-san-diego": {
    title: "Airbnb & Short-Term Rental Rules in San Diego (2026 Guide)",
    excerpt: "San Diego caps the total number of non-primary-residence short-term rental licenses citywide and runs a lottery when demand exceeds supply. Here's how the license tiers work.",
    image: imgTypesProperty,
    alt: "San Diego property considered for a non-primary-residence short-term rental license",
  },
  "/blog/property-management/rent-control-nyc": {
    title: "Rent Control and Rent Stabilization in NYC: What Landlords Need to Know",
    excerpt: "NYC runs two separate systems -- rent control and rent stabilization -- covering a large share of the city's rental units. Here's how each works and what it means for owners.",
    image: imgRentalExpenses,
    alt: "Landlord reviewing NYC rent stabilization guidelines for a covered unit",
  },
  "/blog/property-management/rent-control-los-angeles": {
    title: "Rent Control in Los Angeles: The Rent Stabilization Ordinance Explained",
    excerpt: "LA's Rent Stabilization Ordinance covers a large share of older multi-unit buildings and caps annual increases. Here's what's covered, what's exempt, and the just-cause eviction rules that come with it.",
    image: imgFindTenant,
    alt: "Landlord reviewing LA Rent Stabilization Ordinance coverage for a building",
  },
  "/blog/property-management/rent-control-san-francisco": {
    title: "Rent Control in San Francisco: The Rent Ordinance Explained",
    excerpt: "San Francisco's Rent Ordinance covers most buildings built before 1979 and includes some of the strongest tenant eviction protections in the country. Here's what owners need to know.",
    image: imgRentalExpenses,
    alt: "Landlord reviewing San Francisco Rent Ordinance just-cause eviction requirements",
  },
  "/blog/property-management/rent-control-oakland": {
    title: "Rent Control in Oakland: The Rent Adjustment Program Explained",
    excerpt: "Oakland's Rent Adjustment Program caps annual increases and requires just cause for eviction on most pre-1983 buildings. Here's how the petition process and banking of unused increases work.",
    image: imgFindTenant,
    alt: "Landlord reviewing Oakland Rent Adjustment Program petition paperwork",
  },
  "/blog/property-management/rent-control-washington-dc": {
    title: "Rent Control in Washington, D.C.: The Rental Housing Act Explained",
    excerpt: "DC's Rental Housing Act covers a large share of older rental buildings and ties annual increases to inflation. Here's what's covered, what's exempt, and the tenant notice rules that come with it.",
    image: imgRentalExpenses,
    alt: "Landlord reviewing Washington DC Rental Housing Act and TOPA notice requirements",
  },
  "/blog/property-management/rent-control-portland": {
    title: "Rent Control in Portland, Oregon: Statewide Rules Every Landlord Should Know",
    excerpt: "Oregon was one of the first states to pass statewide rent control, applying in Portland and beyond. Here's how the state cap, just-cause eviction rules, and relocation assistance work.",
    image: imgFindTenant,
    alt: "Landlord reviewing Oregon statewide rent control requirements under SB 608",
  },
  "/blog/investing/best-cities-real-estate-investing": {
    title: "Best Cities for Real Estate Investing: A Framework, Not a Guess",
    excerpt: "Instead of a ranked list that goes stale the moment prices move, here's the actual framework investors use to evaluate any city -- job diversification, landlord-friendliness, supply constraints, and population trends.",
    image: imgTypesProperty,
    alt: "Investor comparing multiple cities using a real estate investing evaluation framework",
  },

  // ── New-vertical batch: no sourced photos yet -- cards fall back to the ──
  // ── icon tile (see BlogPostCard / CategoryPostCard) until real images   ──
  // ── are added.                                                          ──
  "/blog/pm-business/how-to-start-a-property-management-company": {
    title: "How to Start a Property Management Company",
    excerpt: "Managing property for other owners is a different business than managing your own rentals -- it's a licensed, insured service business. Here's the step-by-step path from idea to your first signed management agreement.",
  },
  "/blog/pm-business/property-management-company-startup-costs": {
    title: "How Much Does It Cost to Start a Property Management Company?",
    excerpt: "Property management is capital-light compared to a trade business, but licensing, insurance, and trust accounting still add up. Here's a realistic, itemized budget.",
  },
  "/blog/pm-business/property-management-licensing-requirements": {
    title: "Property Management Licensing: What to Check in Your State",
    excerpt: "Some states require a real estate broker license to manage property for others, some have a separate PM license, and some require neither. Here's what to actually check before you sign your first client.",
  },
  "/blog/pm-business/property-management-fee-structures": {
    title: "Property Management Fee Structures: How PM Companies Charge",
    excerpt: "Percentage-of-rent management fees, leasing fees, and maintenance markup -- here's how property managers actually price their services and what owners expect included.",
  },
  "/blog/pm-business/property-management-software-tools": {
    title: "Property Management Software & Tools for a New PM Business",
    excerpt: "Property management runs on specialized software for trust accounting, rent collection, and owner reporting -- here's why general bookkeeping tools fall short and what to look for instead.",
  },
  "/blog/pm-business/how-to-get-property-management-clients": {
    title: "How to Get Your First Property Management Clients",
    excerpt: "Property management is a trust-based, ongoing relationship business. Here's how new PM companies actually land their first owner clients -- starting with referrals, not cold marketing.",
  },

  "/blog/home-inspection/how-to-start-a-home-inspection-business": {
    title: "How to Start a Home Inspection Business",
    excerpt: "Home inspection is one of the more accessible real-estate-adjacent businesses to start -- but it still requires real training, certification, insurance, and a realtor referral network. Here's the full path.",
  },
  "/blog/home-inspection/home-inspection-business-startup-costs": {
    title: "How Much Does It Cost to Start a Home Inspection Business?",
    excerpt: "Training, certification, insurance, and equipment -- here's a realistic, itemized budget for starting a home inspection business, one of the lower-capital real estate careers.",
  },
  "/blog/home-inspection/home-inspector-certification-ashi-vs-internachi": {
    title: "Home Inspector Certification: ASHI vs. InterNACHI vs. State Licensing",
    excerpt: "ASHI and InterNACHI are the two major national home inspector associations -- but neither replaces your state's actual licensing requirement. Here's how they compare and how they fit together.",
  },
  "/blog/home-inspection/home-inspection-equipment-checklist": {
    title: "Home Inspection Equipment & Tools Checklist",
    excerpt: "From ladders and moisture meters to thermal imaging cameras -- here's everything a new home inspector needs to buy, and what can reasonably wait.",
  },
  "/blog/home-inspection/how-to-price-home-inspections": {
    title: "How to Price Home Inspections",
    excerpt: "Inspection pricing is typically based on square footage and age, plus add-ons like radon and sewer scope testing. Here's how to build your price list as a new inspector.",
  },
  "/blog/home-inspection/how-to-get-home-inspection-clients": {
    title: "How to Get Your First Home Inspection Clients",
    excerpt: "Most home inspection business comes through buyer's agent referrals, not direct buyer searches. Here's how new inspectors actually build that referral network.",
  },

  "/blog/mortgage-broker/how-to-become-a-mortgage-loan-officer": {
    title: "How to Become a Mortgage Loan Officer",
    excerpt: "Every state uses the same federal licensing framework for mortgage loan officers. Here's the step-by-step NMLS process, from pre-licensing education through sponsorship.",
  },
  "/blog/mortgage-broker/nmls-safe-act-licensing-explained": {
    title: "NMLS Licensing: The SAFE Act Explained",
    excerpt: "The federal SAFE Act created a unified national licensing framework for mortgage loan officers. Here's how it actually works, and what each state adds on top.",
  },
  "/blog/mortgage-broker/mortgage-loan-officer-license-cost": {
    title: "How Much Does It Cost to Get Your Mortgage Loan Officer License?",
    excerpt: "MLO licensing is considerably cheaper than most licensed trades or a full real estate license. Here's a realistic, itemized breakdown of what it actually costs.",
  },
  "/blog/mortgage-broker/loan-officer-vs-mortgage-broker": {
    title: "Mortgage Loan Officer vs. Mortgage Broker: What's the Difference?",
    excerpt: "Loan officer and mortgage broker get used interchangeably, but they're genuinely different business structures. Here's how they differ in who they work for and how they're paid.",
  },
  "/blog/mortgage-broker/how-loan-officers-get-paid": {
    title: "How Mortgage Loan Officers Get Paid",
    excerpt: "Loan officer pay is almost entirely commission-based, tied to closed loan volume. Here's how basis points, lender-paid vs. borrower-paid compensation, and federal pay rules actually work.",
  },
  "/blog/mortgage-broker/how-to-get-first-mortgage-clients": {
    title: "How to Get Your First Clients as a New Loan Officer",
    excerpt: "Mortgage origination is a referral-driven business, led by real estate agent relationships. Here's how new loan officers realistically build a pipeline from zero.",
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
