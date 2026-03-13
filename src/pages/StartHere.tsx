import Layout from "@/components/Layout";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, TrendingUp, DollarSign, MapPin } from "lucide-react";

const StartHere = () => {
  const guides = [
    {
      icon: TrendingUp,
      title: "Real Estate Investing 101",
      desc: "Understand how rental properties, BRRRR deals, and long-term holds build wealth — and what the numbers actually need to look like before a deal makes sense.",
      link: "/real-estate-investing",
    },
    {
      icon: DollarSign,
      title: "Wholesaling for Beginners",
      desc: "How to find deeply discounted properties, get them under contract, and assign those contracts to buyers for a fee — without purchasing anything yourself.",
      link: "/real-estate-wholesaling",
    },
    {
      icon: BookOpen,
      title: "Real Estate Marketing",
      desc: "The lead generation, advertising, and follow-up systems that real estate businesses run on — including what works for both agents and investors.",
      link: "/real-estate-marketing",
    },
    {
      icon: MapPin,
      title: "Get Your Real Estate License",
      desc: "State-specific guides covering education requirements, exam providers, total costs, and the step-by-step application process for all 50 states.",
      link: "/real-estate-license",
    },
  ];

  return (
    <Layout>
      <Helmet>
        <title>Start Here | Real Estate Beginner's Guide — Peasant House</title>
        <meta name="description" content="New to real estate? Start here. Choose between investing, wholesaling, getting licensed, or marketing — and we'll walk you through it step by step." />
        <link rel="canonical" href="https://peasanthouse.com/start-here" />
        <meta property="og:title" content="Start Here | Real Estate Beginner's Guide — Peasant House" />
        <meta property="og:description" content="New to real estate? Pick a path — investing, wholesaling, licensing, or marketing — and start learning with free step-by-step guides." />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Start Here | Real Estate Beginner's Guide — Peasant House",
          description: "New to real estate? Start here. Choose between investing, wholesaling, getting licensed, or marketing — and we'll walk you through it step by step.",
          url: "https://peasanthouse.com/start-here",
          publisher: {
            "@type": "Organization",
            name: "Peasant House",
            url: "https://peasanthouse.com",
          },
        })}</script>
      </Helmet>

      <section className="section-padding">
        <div className="container-narrow">
          <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl">Start Here</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Real estate covers a lot of territory. You don't need to understand all of it before you take a step — you just need to figure out which direction makes sense for where you are right now. Pick a path below to start.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {guides.map((g) => (
              <Link to={g.link} key={g.title} className="group card-hover rounded-xl border border-border bg-card p-8 block">
                <g.icon className="mb-4 h-8 w-8 text-accent" />
                <h2 className="mb-2 font-heading text-xl font-bold text-card-foreground group-hover:text-accent transition-colors">{g.title}</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">{g.desc}</p>
                <span className="mt-4 inline-flex items-center text-sm font-semibold text-accent">
                  Start here <ArrowRight className="ml-1 h-3 w-3" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-12 rounded-lg border border-border bg-muted/40 p-6">
            <h2 className="font-heading text-lg font-bold text-foreground mb-2">Not sure where to start?</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              If you're completely new, the most common starting points are: <strong className="text-foreground">real estate investing</strong> if you have some capital and want to build passive income, <strong className="text-foreground">wholesaling</strong> if you have limited capital but want to get active in the market quickly, or <strong className="text-foreground">getting licensed</strong> if you want to work as an agent and earn commissions. There's no universal right answer — it depends on your situation, your goals, and how much time and money you can put in.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default StartHere;
