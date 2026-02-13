import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface PillarPageProps {
  title: string;
  metaDesc: string;
  intro: string;
  topics: { title: string; desc: string }[];
}

const PillarPage = ({ title, metaDesc, intro, topics }: PillarPageProps) => (
  <Layout>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: title,
      description: metaDesc,
    })}} />
    <section className="section-padding">
      <div className="container-narrow max-w-3xl">
        <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl">{title}</h1>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{intro}</p>
        <div className="mt-12 space-y-6">
          {topics.map((t) => (
            <div key={t.title} className="card-hover rounded-lg border border-border bg-card p-6">
              <h2 className="font-heading text-xl font-bold text-card-foreground">{t.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export const Investing = () => (
  <PillarPage
    title="Real Estate Investing"
    metaDesc="Learn real estate investing strategies including rental properties, BRRRR, financing, and cash flow analysis."
    intro="Real estate investing is one of the most proven paths to building long-term wealth. Whether you're interested in rental properties, fix-and-flips, or passive income strategies, this comprehensive guide will get you started."
    topics={[
      { title: "Rental Property Investing", desc: "Learn how to find, analyze, and manage rental properties that generate consistent monthly cash flow." },
      { title: "The BRRRR Strategy", desc: "Buy, Rehab, Rent, Refinance, Repeat — the proven method to scale a real estate portfolio quickly." },
      { title: "Funding & Financing Deals", desc: "Explore conventional loans, hard money lenders, private financing, and creative funding strategies." },
      { title: "Cash Flow & ROI Calculations", desc: "Master the numbers — learn to calculate cap rates, cash-on-cash returns, and net operating income." },
    ]}
  />
);

export const Wholesaling = () => (
  <PillarPage
    title="Real Estate Wholesaling"
    metaDesc="Complete guide to real estate wholesaling — find deals, assign contracts, and profit without buying property."
    intro="Real estate wholesaling lets you earn money from real estate transactions without ever purchasing property. It's an ideal entry point for aspiring investors with limited capital."
    topics={[
      { title: "How Wholesaling Works", desc: "Understand the wholesaling process from finding deals to assigning contracts and collecting your fee." },
      { title: "Finding Motivated Sellers", desc: "Learn to identify distressed properties and connect with sellers who need to sell quickly." },
      { title: "Dispositions & Acquisitions", desc: "Build a buyers list and master the art of matching deals with the right investors." },
      { title: "Contracts & Assignment Fees", desc: "Understand purchase agreements, assignment contracts, and how to structure your wholesale deals legally." },
    ]}
  />
);

export const Marketing = () => (
  <PillarPage
    title="Real Estate Marketing"
    metaDesc="Master real estate marketing with lead generation, digital advertising, cold calling, and CRM automation."
    intro="Effective marketing is the engine that drives every successful real estate business. Whether you're generating leads for deals or building a personal brand, these strategies will help you stand out."
    topics={[
      { title: "Lead Generation Strategies", desc: "Discover proven methods to generate a steady flow of motivated seller and buyer leads." },
      { title: "Facebook & Google Ads", desc: "Learn to create targeted ad campaigns that generate high-quality real estate leads at scale." },
      { title: "Cold Calling & SMS Marketing", desc: "Master outbound marketing strategies including phone scripts, SMS campaigns, and follow-up sequences." },
      { title: "CRM & Automation Tools", desc: "Use technology to automate your marketing, manage leads, and close more deals with less effort." },
    ]}
  />
);
