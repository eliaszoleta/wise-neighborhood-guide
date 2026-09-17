import BlogCategoryPage from "@/components/BlogCategoryPage";
import imgHardMoney from "@/assets/blog/hard-money-lender.jpg";
import imgPrivateMoney from "@/assets/blog/private-money-lender.jpg";
import imgCashOut from "@/assets/blog/cash-out-refinance.jpg";
import imgTypesRefinance from "@/assets/blog/types-of-refinance.jpg";
import imgMortgageLoans from "@/assets/blog/mortgage-loans-homebuyers.jpg";
import imgMipPmi from "@/assets/blog/mip-pmi-explained.jpg";
import imgFirstRental from "@/assets/blog/first-rental-property.jpg";

const posts = [
  {
    title: "What Is a Hard Money Lender in Real Estate Investing?",
    slug: "/blog/financing/hard-money-lender",
    excerpt: "Hard money lenders provide short-term, asset-based loans for investors buying distressed properties. Here's how they work, what they actually cost, and when to use one.",
    image: imgHardMoney,
    alt: "Hard money lender meeting with real estate investor reviewing loan documents",
  },
  {
    title: "Private Money Lenders in Real Estate: How to Find Them and Work With Them",
    slug: "/blog/financing/private-money-lender",
    excerpt: "Private money lenders are individuals who fund deals from their own capital. Here's how private money differs from hard money, how deals are structured, and how to build your lender network.",
    image: imgPrivateMoney,
    alt: "Private money lender and investor shaking hands over property investment deal",
  },
  {
    title: "Cash-Out Refinance Explained: How Real Estate Investors Use Home Equity",
    slug: "/blog/financing/cash-out-refinance",
    excerpt: "A cash-out refinance replaces your existing mortgage with a larger one and pays you the difference in cash. Here's how investors use it to fund their next deal without selling.",
    image: imgCashOut,
    alt: "Homeowner reviewing cash-out refinance documents with equity growth chart",
  },
  {
    title: "Types of Refinance: Rate-and-Term, Cash-Out, Streamline & DSCR",
    slug: "/blog/financing/types-of-refinance",
    excerpt: "Not every refinance is the same. Here's how rate-and-term, cash-out, streamline, and DSCR refinances differ — and which one actually fits your situation.",
    image: imgTypesRefinance,
    alt: "Mortgage refinance documents and calculator comparing different refinance options",
  },
  {
    title: "Types of Mortgage Loans for First-Time Homebuyers: FHA, VA, USDA & More",
    slug: "/blog/financing/mortgage-loans-first-time-homebuyers",
    excerpt: "FHA, VA, USDA, and conventional loans all work differently. Here's a plain-language breakdown of what each requires, who qualifies, and which makes sense for your situation.",
    image: imgMortgageLoans,
    alt: "First-time homebuyer couple meeting with mortgage loan officer to discuss options",
  },
  {
    title: "Subject-To Real Estate Deals: How They Work and What You're Actually Agreeing To",
    slug: "/blog/financing/subject-to-real-estate",
    excerpt: "In a subject-to deal, you take over a property while the seller's existing mortgage stays in place. Here's the real mechanics, the due-on-sale risk, and when this strategy makes sense.",
    image: imgHardMoney,
    alt: "Real estate investor reviewing subject-to deal documents with seller at closing table",
  },
  {
    title: "Seller Financing in Real Estate: How It Works and When It Makes Sense",
    slug: "/blog/financing/seller-financing-real-estate",
    excerpt: "Seller financing is when the property owner acts as the bank. Here's how the deal is structured, what rates and terms look like, and when it's worth pursuing.",
    image: imgCashOut,
    alt: "Seller and buyer signing seller financing promissory note and deed of trust documents",
  },
  {
    title: "Lease Option Real Estate: How It Works, Who It's For, and What to Watch Out For",
    slug: "/blog/financing/lease-option-real-estate",
    excerpt: "A lease option lets you rent a property today with the right to buy it later at a locked-in price. Here's how the deal is structured, who benefits, and the risks both sides need to understand.",
    image: imgPrivateMoney,
    alt: "Tenant-buyer and seller signing lease option agreement at table with house keys",
  },
  {
    title: "What Is an Assumable Mortgage? How Buyers Can Take Over a 3% Rate in a 7% Market",
    slug: "/blog/financing/assumable-mortgage",
    excerpt: "An assumable mortgage lets a buyer take over the seller's existing FHA or VA loan — same rate, same balance, same terms. Here's how the process works and how to bridge the equity gap.",
    image: imgMortgageLoans,
    alt: "Buyer and seller reviewing assumable mortgage loan documents at closing table",
  },
  {
    title: "What Is a Blanket Mortgage? A Guide for Real Estate Investors With Multiple Properties",
    slug: "/blog/financing/blanket-mortgage",
    excerpt: "A blanket mortgage covers multiple properties under one loan. Here's how the release clause works, when consolidating a portfolio makes sense, and the risks involved.",
    image: imgHardMoney,
    alt: "Real estate investor reviewing blanket mortgage portfolio documents with multiple property files",
  },
  {
    title: "How Real Estate Investors Use a HELOC to Fund Deals",
    slug: "/blog/financing/heloc-real-estate",
    excerpt: "A HELOC turns your home equity into a revolving line of credit. Here's how investors use it for down payments, rehabs, and the BRRRR cycle — and where the risk gets real.",
    image: imgCashOut,
    alt: "Homeowner reviewing HELOC home equity line of credit documents for real estate investment",
  },
  {
    title: "What Is a Bridge Loan in Real Estate and When Does One Actually Make Sense?",
    slug: "/blog/financing/bridge-loan-real-estate",
    excerpt: "A bridge loan is short-term financing that closes fast when conventional mortgages can't. Here's how the terms work, what they actually cost, and when the math justifies using one.",
    image: imgHardMoney,
    alt: "Real estate investor signing bridge loan documents for short-term property financing",
  },
  {
    title: "How to Buy Real Estate With a Self-Directed IRA",
    slug: "/blog/financing/self-directed-ira-real-estate",
    excerpt: "A self-directed IRA lets you hold rental property inside a retirement account — tax-deferred or tax-free with a Roth. Here's how it works and the rules you must follow.",
    image: imgFirstRental,
    alt: "Investor reviewing self-directed IRA real estate investment documents with retirement account statements",
  },
  {
    title: "MIP vs. PMI: Mortgage Insurance Explained for Homebuyers",
    slug: "/blog/financing/mip-vs-pmi-explained",
    excerpt: "MIP is for FHA loans. PMI is for conventional. They work very differently — and one of them never goes away. Here's what you actually need to know before you choose a loan.",
    image: imgMipPmi,
    alt: "Mortgage insurance MIP and PMI comparison documents with house model",
  },
];

const BlogCategoryFinancing = () => (
  <BlogCategoryPage
    categorySlug="financing"
    categoryLabel="Financing"
    metaTitle="Real Estate Financing Guides: Hard Money, Mortgages & Creative Strategies"
    metaDesc="Clear, practical guides on real estate financing — hard money, private money, seller financing, assumable mortgages, HELOCs, and more. Learn how investors fund deals."
    intro="Everything you need to understand how real estate deals get funded — from conventional mortgages to hard money, seller financing, and creative strategies like subject-to and lease options."
    posts={posts}
    pillarLink={{ label: "Explore the Funding & Financing topic hub", href: "/real-estate-investing/funding-financing" }}
  />
);

export default BlogCategoryFinancing;
