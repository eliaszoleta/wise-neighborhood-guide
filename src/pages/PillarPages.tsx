import Layout from "@/components/Layout";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface PillarPageProps {
  title: string;
  metaTitle: string;
  metaDesc: string;
  intro: string;
  topics: { title: string; desc: string; link: string }[];
}

const PillarPage = ({ title, metaTitle, metaDesc, intro, topics }: PillarPageProps) => (
  <Layout>
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDesc} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:type" content="article" />
    </Helmet>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: title,
      description: metaDesc,
      publisher: { "@type": "Organization", name: "Peasant House", url: "https://peasanthouse.com" },
    })}} />
    <section className="section-padding">
      <div className="container-narrow max-w-3xl">
        <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl">{title}</h1>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{intro}</p>
        <div className="mt-12 space-y-6">
          {topics.map((t) => (
            <Link to={t.link} key={t.title} className="block card-hover rounded-lg border border-border bg-card p-6 group">
              <h2 className="font-heading text-xl font-bold text-card-foreground group-hover:text-accent transition-colors">{t.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
              <span className="mt-3 inline-flex items-center text-sm font-semibold text-accent">
                Read the full guide <ArrowRight className="ml-1 h-3 w-3" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export const Investing = () => (
  <PillarPage
    title="Real Estate Investing"
    metaTitle="Real Estate Investing Guide: Rentals, BRRRR, Financing & Cash Flow | Peasant House"
    metaDesc="Learn real estate investing from the ground up — rental properties, the BRRRR strategy, financing options, and how to calculate cash flow and ROI before you buy."
    intro="Real estate investing is one of the most proven ways ordinary people build lasting wealth — but it's not a shortcut, and the strategy that works in one market can fail badly in another. These guides focus on the practical side: how to analyze deals, find financing, manage properties, and scale responsibly over time."
    topics={[
      {
        title: "Rental Property Investing",
        desc: "How to find, analyze, and manage rental properties that generate consistent monthly cash flow — including what the numbers need to look like before a deal makes sense.",
        link: "/real-estate-investing/rental-property-investing",
      },
      {
        title: "The BRRRR Strategy",
        desc: "Buy, Rehab, Rent, Refinance, Repeat — the method that lets investors recycle the same capital to build a growing portfolio without tying up money deal after deal.",
        link: "/real-estate-investing/brrrr-strategy",
      },
      {
        title: "Funding & Financing Deals",
        desc: "Conventional mortgages, hard money loans, DSCR loans, private money, and creative financing strategies — what each one costs and when each one makes sense.",
        link: "/real-estate-investing/funding-financing",
      },
      {
        title: "Cash Flow & ROI Calculations",
        desc: "Cap rate, cash-on-cash return, NOI, and the 1% rule — the metrics that actually tell you whether a property is worth buying, and how to calculate them correctly.",
        link: "/real-estate-investing/cash-flow-roi",
      },
    ]}
  />
);

export const Wholesaling = () => (
  <PillarPage
    title="Real Estate Wholesaling"
    metaTitle="Real Estate Wholesaling Guide: How It Works, Finding Sellers & Closing Deals | Peasant House"
    metaDesc="Complete guide to real estate wholesaling — how the process works, how to find motivated sellers, how to build a buyers list, and how to legally assign contracts for a profit."
    intro="Wholesaling is one of the few ways to get active in real estate with limited capital — you're not buying property, you're finding deals and selling the right to buy them to investors who will. It takes more hustle than money to start, but it has a legitimate business model behind it. These guides cover the process honestly, including the legal side that a lot of wholesaling content glosses over."
    topics={[
      {
        title: "How Wholesaling Works",
        desc: "The full process from finding a motivated seller to collecting your assignment fee at closing — including what can go wrong and how to handle it.",
        link: "/real-estate-wholesaling/how-wholesaling-works",
      },
      {
        title: "Finding Motivated Sellers",
        desc: "Driving for dollars, direct mail, skip tracing, online lead generation, and networking — the specific methods that actually produce distressed seller leads.",
        link: "/real-estate-wholesaling/finding-motivated-sellers",
      },
      {
        title: "Dispositions & Acquisitions",
        desc: "The two sides of the wholesaling business: locking up deals (acquisitions) and selling them to cash buyers (dispositions) — and how to run both effectively.",
        link: "/real-estate-wholesaling/dispositions-acquisitions",
      },
      {
        title: "Contracts & Assignment Fees",
        desc: "Purchase agreements, assignment contracts, double closings, and how to structure your fee — including the legal compliance issues that wholesalers can't afford to ignore.",
        link: "/real-estate-wholesaling/contracts-assignment-fees",
      },
    ]}
  />
);

export const Marketing = () => (
  <PillarPage
    title="Real Estate Marketing"
    metaTitle="Real Estate Marketing Guide: Lead Generation, Digital Ads, Cold Calling & CRM | Peasant House"
    metaDesc="Real estate marketing strategies that actually drive leads — SEO and content, Facebook and Google ads, cold calling and SMS campaigns, and CRM automation for agents and investors."
    intro="Every real estate business runs on leads — and every agent and investor has to figure out how to generate them consistently without spending money they don't have. These guides cover the main marketing channels used by working real estate professionals, with enough detail to actually implement them rather than just understand them conceptually."
    topics={[
      {
        title: "Lead Generation Strategies",
        desc: "The full range of lead gen options — SEO, direct mail, networking, referrals, and digital advertising — and how to prioritize based on your budget and time.",
        link: "/real-estate-marketing/lead-generation",
      },
      {
        title: "Facebook & Google Ads",
        desc: "How to run paid digital campaigns that produce actual real estate leads — targeting, ad copy, budget ranges, cost-per-lead benchmarks, and how to optimize.",
        link: "/real-estate-marketing/facebook-google-ads",
      },
      {
        title: "Cold Calling & SMS Marketing",
        desc: "Direct outbound marketing to property owners — scripts, list-building, compliance with TCPA, and the tools that make high-volume outreach manageable.",
        link: "/real-estate-marketing/cold-calling-sms",
      },
      {
        title: "CRM & Automation Tools",
        desc: "The software that keeps lead pipelines organized and follow-up consistent — including the best CRMs for investors vs. agents and what to look for in each.",
        link: "/real-estate-marketing/crm-automation",
      },
    ]}
  />
);
