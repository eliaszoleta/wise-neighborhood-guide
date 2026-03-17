import Layout from "@/components/Layout";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, TrendingUp, DollarSign, Megaphone } from "lucide-react";

interface PillarPageProps {
  title: string;
  metaTitle: string;
  metaDesc: string;
  slug: string;
  datePublished: string;
  intro: string;
  bodyContent: React.ReactNode;
  topics: { title: string; desc: string; link: string }[];
  faqs: { q: string; a: string }[];
  relatedLinks: { label: string; href: string }[];
  icon: React.ElementType;
}

const PillarPage = ({ title, metaTitle, metaDesc, slug, datePublished, intro, bodyContent, topics, faqs, relatedLinks, icon: Icon }: PillarPageProps) => {
  const canonicalUrl = `https://peasanthouse.com${slug}`;
  return (
  <Layout>
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDesc} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Peasant House" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDesc} />
    </Helmet>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: title,
      description: metaDesc,
      datePublished,
      dateModified: "2026-03-17",
      author: { "@type": "Organization", name: "Peasant House", url: "https://peasanthouse.com" },
      publisher: {
        "@type": "Organization",
        name: "Peasant House",
        url: "https://peasanthouse.com",
        logo: { "@type": "ImageObject", url: "https://peasanthouse.com/favicon.svg" },
      },
      mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
    })}} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://peasanthouse.com" },
        { "@type": "ListItem", position: 2, name: title, item: canonicalUrl },
      ],
    })}} />
    {faqs.length > 0 && (
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      })}} />
    )}

    <section className="section-padding">
      <div className="container-narrow max-w-3xl">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-muted-foreground" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-accent">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground font-medium">{title}</span>
        </nav>

        {/* Header */}
        <div className="flex items-start gap-4 mb-6">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10">
            <Icon className="h-6 w-6 text-accent" />
          </div>
          <div>
            <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl">{title}</h1>
          </div>
        </div>

        <p className="text-lg text-muted-foreground leading-relaxed mb-8">{intro}</p>

        {/* Body content */}
        {bodyContent && <div className="prose-like mb-10 space-y-4 text-muted-foreground leading-relaxed">{bodyContent}</div>}

        {/* Topic cards */}
        <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Guides in This Section</h2>
        <div className="space-y-4 mb-12">
          {topics.map((t) => (
            <Link to={t.link} key={t.title} className="block card-hover rounded-lg border border-border bg-card p-6 group">
              <h3 className="font-heading text-xl font-bold text-card-foreground group-hover:text-accent transition-colors">{t.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
              <span className="mt-3 inline-flex items-center text-sm font-semibold text-accent">
                Read the full guide <ArrowRight className="ml-1 h-3 w-3" />
              </span>
            </Link>
          ))}
        </div>

        {/* FAQs */}
        {faqs.length > 0 && (
          <div className="mb-12">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((f, i) => (
                <div key={i} className="rounded-lg border border-border bg-card p-6">
                  <h3 className="font-heading text-base font-semibold text-card-foreground">{f.q}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related blog content */}
        {relatedLinks.length > 0 && (
          <div className="rounded-xl border border-border bg-card p-6 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="h-4 w-4 text-accent" />
              <h3 className="font-heading text-base font-semibold text-card-foreground">Related Articles</h3>
            </div>
            <ul className="space-y-2">
              {relatedLinks.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-sm text-accent hover:underline inline-flex items-center gap-1">
                    <ArrowRight className="h-3 w-3" /> {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  </Layout>
  );
};

export const Investing = () => (
  <PillarPage
    title="Real Estate Investing"
    metaTitle="Real Estate Investing: Complete Guide to Rentals, BRRRR, Financing & Cash Flow Analysis"
    metaDesc="Learn how to invest in real estate — rental property strategies, the BRRRR method, financing options (hard money, DSCR, conventional), and how to analyze deals with cap rate, cash flow, and ROI metrics."
    slug="/real-estate-investing"
    datePublished="2026-02-13"
    icon={TrendingUp}
    intro="Real estate investing is one of the most proven paths to building long-term wealth for ordinary people — but only when you understand what you're doing before you buy. Overpaying, underestimating expenses, or choosing the wrong market can turn a promising deal into a money pit. These guides focus on the practical side: analyzing deals correctly, finding financing, managing properties, and scaling responsibly."
    bodyContent={
      <>
        <p>
          The core mechanics of rental property investing are straightforward: buy a property, collect more in rent than you spend on expenses, and let appreciation and equity paydown build in the background over time. What makes investing genuinely difficult is getting that first step right — buying at the right price, with the right financing, in a market that supports your numbers.
        </p>
        <p>
          This section covers the full spectrum of real estate investment strategies: long-term buy-and-hold rentals, the BRRRR (Buy, Rehab, Rent, Refinance, Repeat) method for building a portfolio without tying up capital indefinitely, how to evaluate deals using metrics like cap rate and cash-on-cash return, and how to finance acquisitions using conventional mortgages, hard money loans, DSCR loans, private money, and creative strategies.
        </p>
        <p>
          Whether you're analyzing your first rental property or trying to scale from five units to fifty, the fundamental discipline is the same: run honest numbers before you buy, account for every expense including vacancy and CapEx reserves, and don't let optimism about appreciation paper over a deal that doesn't work on cash flow alone.
        </p>
      </>
    }
    topics={[
      {
        title: "Rental Property Investing: How to Build Real Passive Income",
        desc: "How to find, evaluate, and manage rental properties that generate consistent monthly cash flow — including what the numbers need to look like before a deal makes financial sense, how to screen tenants properly, and when to hire a property manager.",
        link: "/real-estate-investing/rental-property-investing",
      },
      {
        title: "The BRRRR Strategy: Buy, Rehab, Rent, Refinance, Repeat",
        desc: "The method that lets investors recycle the same capital across multiple deals to build a growing rental portfolio. What it actually takes to execute, what the refinance math needs to look like, and the failure points most BRRRR content skips over.",
        link: "/real-estate-investing/brrrr-strategy",
      },
      {
        title: "Real Estate Funding & Financing: Every Option Explained",
        desc: "Conventional mortgages, hard money loans, DSCR loans, private money, seller financing, and creative strategies — what each one costs, who qualifies, and when each option makes the most sense for your deal.",
        link: "/real-estate-investing/funding-financing",
      },
      {
        title: "Cash Flow & ROI: How to Analyze a Rental Property Deal",
        desc: "Cap rate, cash-on-cash return, net operating income, the 1% rule, and the 50% rule — the metrics that tell you whether a property is actually worth buying, calculated correctly with realistic expense assumptions.",
        link: "/real-estate-investing/cash-flow-roi",
      },
    ]}
    faqs={[
      {
        q: "How much money do I need to start investing in real estate?",
        a: "For a conventional investment property loan, plan on 15–25% down plus 2–5% closing costs and 3–6 months of cash reserves. On a $200,000 property, that might be $40,000–$60,000 out of pocket. If you house hack — buying a 2–4 unit multifamily with an FHA loan and living in one unit — you can get started with 3.5% down. DSCR loans and hard money loans have different requirements. The amount needed varies significantly based on strategy and market.",
      },
      {
        q: "Is real estate investing worth it in 2026?",
        a: "Real estate investing continues to produce strong risk-adjusted returns for investors who buy in the right markets at the right prices. Higher interest rates have compressed cash flow margins compared to 2020–2021, which means underwriting discipline is more important than ever. Markets with strong employment growth, limited housing supply, and rising rents continue to support good returns. Markets with weak population trends and stagnant rents require stronger cash flow to be worth holding.",
      },
      {
        q: "What is the BRRRR method in real estate?",
        a: "BRRRR stands for Buy, Rehab, Rent, Refinance, Repeat. You buy a distressed property below market value, renovate it to improve its appraised value, rent it out to establish cash flow, then do a cash-out refinance based on the new appraised value to pull your original investment back out — then repeat the process with the same capital. When it works, you end up with a performing rental and most of your money returned. When it doesn't work — usually because of overpaying or a low appraisal — you're stuck with less capital than you started with.",
      },
      {
        q: "What is a good cap rate for investment property?",
        a: "Cap rates vary significantly by market. In gateway cities like New York, LA, and San Francisco, cap rates of 3–5% reflect expectations of strong appreciation. In secondary and Midwestern markets, cap rates of 6–10% are more common and appropriate for cash flow-focused investors. A 'good' cap rate is relative to comparable properties in the same area — evaluate cap rate locally, not as an absolute standard.",
      },
      {
        q: "What type of loan is best for an investment property?",
        a: "For long-term rental holds, a conventional 30-year fixed-rate loan offers the lowest long-term cost if you can qualify — steady payment, longest amortization, best rates. DSCR loans are the next best choice for investors who can't qualify conventionally because the property's rental income, not your personal income, is the primary qualification factor. Hard money works for short-term situations like fix-and-flip or BRRRR where speed matters and you plan to pay off the loan quickly.",
      },
    ]}
    relatedLinks={[
      { label: "BRRRR Method Explained — Blog Deep Dive", href: "/blog/investing/brrrr-method-real-estate" },
      { label: "How to Find and Buy Your First Rental Property", href: "/blog/investing/first-rental-property" },
      { label: "House Flipping: What It Actually Costs", href: "/blog/investing/house-flipping" },
      { label: "Short-Term Rental Investing: The Real Numbers", href: "/blog/investing/short-term-rental-investing" },
      { label: "Hard Money Lenders Explained", href: "/blog/financing/hard-money-lender" },
      { label: "DSCR Loans for Real Estate Investors", href: "/blog/financing/dscr-loan-real-estate" },
    ]}
  />
);

export const Wholesaling = () => (
  <PillarPage
    title="Real Estate Wholesaling"
    metaTitle="Real Estate Wholesaling Guide: How It Works, Finding Sellers, Contracts & Assignment Fees"
    metaDesc="Complete guide to real estate wholesaling — how the process works step by step, how to find motivated sellers, how to build a cash buyers list, and how to legally assign contracts for a fee without buying the property."
    slug="/real-estate-wholesaling"
    datePublished="2026-02-13"
    icon={DollarSign}
    intro="Real estate wholesaling is finding distressed properties at a discount, getting them under contract, and selling that contract to a cash buyer investor for an assignment fee — without ever owning the property or getting a loan yourself. It's one of the few ways to generate income in real estate without significant starting capital, but it requires consistent marketing effort, a real understanding of deal analysis, and legal compliance that many wholesaling courses downplay."
    bodyContent={
      <>
        <p>
          The business model is simple: find properties worth significantly less than market value because of condition, seller motivation, or both; get the seller under contract at a price that leaves room for your fee and the buyer's profit margin; then sell your position in that contract to an end buyer who will close, renovate, and either rent or flip the property.
        </p>
        <p>
          What makes wholesaling challenging is finding consistent deal flow. Motivated sellers don't advertise themselves. You have to reach them through direct mail campaigns, cold calling, SMS outreach, driving for dollars, networking, and paid digital marketing. Most wholesalers need 2–4 months of consistent lead generation before their first deal closes. The ones who quit before that point miss the moment when the pipeline starts producing.
        </p>
        <p>
          These guides cover the entire wholesaling process honestly — from how the legal structure actually works and what regulations you need to know, to building a buyers list from scratch and running both sides of the business (acquisitions and dispositions) once you're doing volume.
        </p>
      </>
    }
    topics={[
      {
        title: "How Real Estate Wholesaling Works: The Honest Step-by-Step Guide",
        desc: "The full process from finding a motivated seller to collecting your assignment fee at closing — including what the timeline looks like, how much wholesalers actually make, and the legal compliance issues you can't ignore.",
        link: "/real-estate-wholesaling/how-wholesaling-works",
      },
      {
        title: "Finding Motivated Sellers: Real Strategies That Produce Leads",
        desc: "Direct mail, driving for dollars, cold calling, SMS outreach, skip tracing, and networking — the specific methods experienced wholesalers use to surface distressed property owners who are open to selling below market value.",
        link: "/real-estate-wholesaling/finding-motivated-sellers",
      },
      {
        title: "Dispositions & Acquisitions: Running Both Sides of the Business",
        desc: "Acquisitions is locking up deals from motivated sellers. Dispositions is selling those deals to cash buyers quickly and consistently. How both functions work, how to build a buyers list from scratch, and how to use a CRM to manage pipeline.",
        link: "/real-estate-wholesaling/dispositions-acquisitions",
      },
      {
        title: "Wholesale Contracts & Assignment Fees: What You Need to Know",
        desc: "Purchase agreements with assignment clauses, assignment contracts, double closings, how to structure and disclose your fee — and the legal compliance issues that expose wholesalers to liability when they get them wrong.",
        link: "/real-estate-wholesaling/contracts-assignment-fees",
      },
    ]}
    faqs={[
      {
        q: "Do you need a real estate license to wholesale?",
        a: "In most states, no — but the legal environment is evolving. You're not buying or selling the property as a licensed agent; you're assigning your contractual interest in a purchase agreement. The key compliance requirement is marketing your equitable interest in the contract, not the property itself, and disclosing that you're a contract holder rather than the owner. Some states (notably Illinois) have passed specific laws around wholesaling practices. Work with a local real estate attorney before your first deal.",
      },
      {
        q: "How much money do you need to start wholesaling real estate?",
        a: "You need marketing budget, not purchase capital. Main expenses are lead generation (direct mail, calling lists, digital ads: $500–$2,000/month), skip tracing tools ($50–$200/month), CRM software ($50–$200/month), and earnest money deposits on contracts ($100–$1,000 per contract, refunded or applied at closing). You don't buy the property or get a loan. Budget $1,000–$3,000 to get started and sustain marketing for 60–90 days before your first deal closes.",
      },
      {
        q: "How long does it take to close your first wholesale deal?",
        a: "Most new wholesalers spend 2–4 months building their marketing pipeline before their first signed purchase contract. Once under contract, the assignment typically takes 2–6 weeks to close. Setting a realistic expectation of 3–6 months from starting to earning your first assignment fee is appropriate. Wholesalers who quit after 60 days without a deal almost always quit before the pipeline they built starts producing.",
      },
      {
        q: "What is an assignment fee in wholesaling?",
        a: "An assignment fee is your profit for finding the deal and selling your contract position to the end buyer. It's calculated as the difference between the price you agreed to pay the seller and the price the buyer pays to take over your position. On residential deals, fees typically range from $5,000 to $20,000. The fee is paid at closing — the title company distributes it from the buyer's funds as part of the settlement statement.",
      },
      {
        q: "What is the difference between wholesale and double closing?",
        a: "In a standard assignment, you never close on the property — you sell your contract rights to the buyer, who closes directly with the seller. Your fee is visible to both parties on the settlement statement. In a double closing, you formally purchase the property in a first transaction (A-B) and immediately resell it in a second transaction (B-C), keeping your profit private from both the original seller and end buyer. Double closings are used when assignment isn't available or when profit margin privacy is important.",
      },
    ]}
    relatedLinks={[
      { label: "Real Estate Wholesaling Explained — Full Blog Post", href: "/blog/wholesaling/real-estate-wholesaling-explained" },
      { label: "How to Build a Cash Buyers List", href: "/blog/wholesaling/cash-buyers-list-real-estate" },
      { label: "Double Closing: How It Works", href: "/blog/wholesaling/double-closing-real-estate" },
      { label: "Lead Management Tools for Wholesalers", href: "/blog/real-estate-business/lead-management-tools" },
      { label: "Acquisitions Manager Role Explained", href: "/blog/real-estate-business/acquisitions-manager-real-estate" },
    ]}
  />
);

export const Marketing = () => (
  <PillarPage
    title="Real Estate Marketing"
    metaTitle="Real Estate Marketing Guide: Lead Generation, Digital Ads, Cold Calling, SMS & CRM Automation"
    metaDesc="Real estate marketing strategies that actually drive leads — SEO and content, Facebook and Google Ads, cold calling and SMS campaigns, direct mail, and CRM automation for agents and investors."
    slug="/real-estate-marketing"
    datePublished="2026-02-13"
    icon={Megaphone}
    intro="Every real estate business — whether you're an agent, an investor, or a wholesaler — runs on leads. Without a consistent pipeline of buyers, sellers, or motivated property owners, the business stalls. The challenge is that there are dozens of lead generation channels, each with different costs, conversion rates, and time horizons. Most agents and investors spread themselves too thin, half-heartedly trying five channels at once instead of mastering one or two."
    bodyContent={
      <>
        <p>
          Real estate marketing breaks into two broad categories: inbound (people find you through search, content, or referrals) and outbound (you reach people who haven't raised their hand — cold calling, SMS, direct mail, paid ads). Both can work, and both require sustained effort before they produce consistent results.
        </p>
        <p>
          SEO and content marketing take 6–18 months to generate meaningful traffic but produce leads for years with no ongoing ad spend. Paid digital advertising (Google Ads, Facebook Ads) generates leads immediately but requires continuous spending. Cold calling and SMS outreach require high volume, compliance infrastructure, and daily consistency to produce deal flow. Referrals and sphere-of-influence networking produce the highest-converting leads but take the longest to build.
        </p>
        <p>
          These guides cover the main marketing channels used by working real estate professionals in enough detail to actually implement them — not just understand the concepts. That includes realistic cost and performance benchmarks, the tools experienced operators use, and the compliance requirements (especially for outbound channels like cold calling and SMS) that can expose you to liability if ignored.
        </p>
      </>
    }
    topics={[
      {
        title: "Real Estate Lead Generation: What Actually Works and What Doesn't",
        desc: "SEO and content marketing, PPC ads, direct mail, social media, referrals, and sphere of influence — with realistic expectations, cost benchmarks, and conversion rates for each channel based on how it actually performs in practice.",
        link: "/real-estate-marketing/lead-generation",
      },
      {
        title: "Facebook & Google Ads for Real Estate: A Practical Guide",
        desc: "How to run paid digital campaigns that produce real estate leads — targeting options, ad copy, landing page strategy, budget minimums, cost-per-lead benchmarks, and how to measure campaigns so you know what's actually working.",
        link: "/real-estate-marketing/facebook-google-ads",
      },
      {
        title: "Cold Calling & SMS Marketing for Real Estate: What Works in Practice",
        desc: "Scripts, power dialers, list building, skip tracing, TCPA compliance for SMS campaigns, and realistic performance benchmarks — what experienced investors and wholesalers actually do to generate motivated seller leads through outbound marketing.",
        link: "/real-estate-marketing/cold-calling-sms",
      },
      {
        title: "Real Estate CRM & Automation: How to Build a Follow-Up System",
        desc: "The software that keeps lead pipelines organized and follow-up consistent — the best CRMs for investors vs. agents, what to look for in each, and how to build an automation workflow that converts leads without sounding automated.",
        link: "/real-estate-marketing/crm-automation",
      },
    ]}
    faqs={[
      {
        q: "What is the best lead generation strategy for real estate agents?",
        a: "New agents should start with their sphere of influence — everyone they know, asked for referrals — and open houses, which put you in front of buyers who already raised their hand. Once you have income, invest in a content-optimized website for organic lead generation. Avoid expensive PPC campaigns until you have a conversion process in place. Experienced agents with established businesses typically generate the majority of their leads through referrals and past client relationships, supplemented by digital advertising.",
      },
      {
        q: "How much should I spend on real estate marketing?",
        a: "A commonly used benchmark is 10–20% of gross commission income reinvested in lead generation. New agents and investors without income yet should set a sustainable monthly budget — $500–$2,000 depending on their market — and commit to one or two channels long enough to actually measure results. Switching channels every 4–6 weeks because you haven't closed a deal is the most common failure pattern in real estate marketing.",
      },
      {
        q: "Is cold calling still effective for real estate investors?",
        a: "Yes, for investors who do it consistently and systematically. Cold calling generates motivated seller leads at a lower cost per deal than most digital advertising channels. The key is daily dialing (not occasional sessions), high-quality targeted lists (pre-foreclosure, tax delinquent, absentee owners), a power dialer to increase volume, and a CRM to manage follow-up. Most callers make 80–150 dials per day and find 1–3 motivated sellers worth pursuing. At that rate, consistent deal flow requires calling every working day.",
      },
      {
        q: "What is the best CRM for real estate investors?",
        a: "REISift and InvestorFuse are purpose-built for real estate investors and wholesalers managing motivated seller lead pipelines. REI BlackBook combines CRM with website and marketing tools. Podio is highly customizable and popular with larger wholesaling operations. For agents rather than investors, Follow Up Boss and kvCORE are the most widely used platforms among top-producing teams. The best CRM is the simplest one you'll actually use consistently.",
      },
      {
        q: "How do I get leads without spending money on advertising?",
        a: "Organic lead generation channels that don't require ad spend: SEO and content marketing (takes 6–18 months to rank but then free indefinitely), referrals from past clients and professional contacts (attorneys, lenders, accountants who encounter real estate transactions), driving for dollars to identify distressed properties, attending local REIA meetings and investor groups, and networking with other wholesalers for co-wholesale opportunities. None of these are instant, but they compound over time in ways that paid advertising doesn't.",
      },
    ]}
    relatedLinks={[
      { label: "Lead Management Tools for Real Estate Investors", href: "/blog/real-estate-business/lead-management-tools" },
      { label: "What Does a Lead Manager Do in Real Estate?", href: "/blog/real-estate-business/lead-managers-real-estate" },
      { label: "Real Estate Agent vs. Realtor vs. Broker: What's the Difference?", href: "/blog/real-estate-careers/real-estate-agent-realtor-broker" },
    ]}
  />
);
