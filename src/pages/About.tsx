import Layout from "@/components/Layout";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <Layout>
      <Helmet>
        <title>About Home Nexio | Who We Are and Why This Site Exists</title>
        <meta name="description" content="Home Nexio is a free real estate education resource. No courses to sell, no upsells — just clear, researched guides on investing, wholesaling, marketing, and state licensing." />
        <link rel="canonical" href="https://homenexio.com/about" />
        <meta property="og:title" content="About Home Nexio | Who We Are and Why This Site Exists" />
        <meta property="og:description" content="Free real estate education — investing, wholesaling, marketing, and licensing guides for all 50 states. No courses to sell." />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About Home Nexio",
          description: "Home Nexio is a free real estate education resource. No courses to sell, no upsells — just clear, researched guides on investing, wholesaling, marketing, and state licensing.",
          url: "https://homenexio.com/about",
          publisher: {
            "@type": "Organization",
            name: "Home Nexio",
            url: "https://homenexio.com",
            logo: { "@type": "ImageObject", url: "https://homenexio.com/favicon.svg" },
          },
        })}</script>
      </Helmet>

      <section className="section-padding">
        <div className="container-narrow max-w-3xl">
          <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl">About Home Nexio</h1>

          <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">

            <p>
              Home Nexio exists because most real estate education online is either too vague to be useful or designed specifically to sell you a course, a coaching program, or a mastermind. We got tired of reading guides that explained everything except the part you actually needed to know.
            </p>

            <h2 className="font-heading text-2xl font-bold text-foreground">What We're Trying to Do</h2>
            <p>
              Real estate is one of the most reliable paths to building long-term wealth that ordinary people can realistically access. But the information environment around it is noisy — packed with jargon, hype, outdated advice, and guides that exist mainly to funnel you toward someone's paid offer. Home Nexio is built to cut through that. We write practical, research-based guides covering real estate investing, wholesaling, marketing, and state-by-state licensing requirements. Everything here is free and stays free.
            </p>

            <h2 className="font-heading text-2xl font-bold text-foreground">What We Cover</h2>
            <p>
              Our content falls into four main areas:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-foreground">Real Estate Investing</strong> — rental properties, the BRRRR strategy, financing options, and how to actually analyze whether a deal is worth doing</li>
              <li><strong className="text-foreground">Real Estate Wholesaling</strong> — how the wholesale process works, finding motivated sellers, building a buyers list, and understanding the legal side of assigning contracts</li>
              <li><strong className="text-foreground">Real Estate Marketing</strong> — lead generation, digital advertising, cold calling and SMS, and CRM tools to manage your pipeline</li>
              <li><strong className="text-foreground">State Licensing Guides</strong> — specific requirements, exam providers, costs, and step-by-step application walkthroughs for all 50 states</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold text-foreground">How We Approach It</h2>
            <p>
              We reference official sources — state real estate commission websites, IRS publications, industry data providers — rather than repeating what we've heard. When the facts are complicated or contested, we say so. We'd rather tell you "it depends, and here's why" than give you false confidence with a definitive-sounding answer that doesn't hold up in your specific situation.
            </p>
            <p>
              We also don't pretend that real estate is easy or that any particular strategy works in every market. Context matters. What makes a great rental in Memphis looks nothing like what works in San Francisco. We try to give you frameworks for thinking through decisions rather than rules that break down the moment you apply them somewhere specific.
            </p>

            <h2 className="font-heading text-2xl font-bold text-foreground">Who This Is For</h2>
            <p>
              This site is useful whether you're trying to understand if real estate even makes sense for your situation, actively working on your first deal, getting licensed as an agent, or scaling something that's already running. We don't assume experience, but we also don't write as if everything needs to be oversimplified. If a concept is complex, we explain it clearly — we just don't dumb it down so much that it stops being accurate.
            </p>

            <div className="mt-8 rounded-lg border border-border bg-muted/50 p-6">
              <h3 className="font-heading text-lg font-semibold text-foreground">Editorial Disclaimer</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                The content on Home Nexio is for general educational purposes only. Nothing here constitutes legal, financial, tax, or investment advice. Real estate markets, regulations, and laws change frequently — always verify current requirements with the relevant state commission or a licensed professional before making decisions. We do our best to keep information accurate and up to date, but we cannot guarantee completeness or currency for every piece of content on this site.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
