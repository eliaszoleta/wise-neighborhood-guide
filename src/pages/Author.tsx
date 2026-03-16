import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Helmet } from "react-helmet-async";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

const coverageAreas = [
  {
    category: "Financing",
    href: "/blog/financing",
    description: "Hard money, private money, seller financing, assumable mortgages, HELOCs, bridge loans, self-directed IRAs, and mortgage insurance.",
    count: 14,
  },
  {
    category: "Investing",
    href: "/blog/investing",
    description: "Rental property analysis, the BRRRR strategy, house flipping, and understanding real estate asset classes.",
    count: 4,
  },
  {
    category: "Property Management",
    href: "/blog/property-management",
    description: "Tenant screening, rental expenses, working with property managers, non-payment, and the eviction process.",
    count: 5,
  },
  {
    category: "Wholesaling",
    href: "/blog/wholesaling",
    description: "How the wholesale process works, assigning contracts, and finding motivated sellers.",
    count: 1,
  },
  {
    category: "Real Estate Careers",
    href: "/blog/real-estate-careers",
    description: "Agent vs. Realtor vs. broker differences, licensing paths, and first-year expectations.",
    count: 2,
  },
  {
    category: "Real Estate Business",
    href: "/blog/real-estate-business",
    description: "Lead management, acquisitions, bookkeeping, and the CRM tools that keep operations running.",
    count: 4,
  },
];

const editorialStandards = [
  {
    heading: "Primary sources first",
    body: "We reference official sources — state real estate commission websites, IRS publications (such as Publication 527 and Topic 705), HUD guidelines, CFPB resources — rather than repeating secondhand claims. When a statistic or rule is cited, we link to its origin.",
  },
  {
    heading: "No affiliate-driven recommendations",
    body: "We do not accept payment to recommend specific lenders, brokers, CRMs, or services. Tool and service mentions are editorially independent. The site is supported by display advertising, not by commissions on the products we cover.",
  },
  {
    heading: "Accuracy over confidence",
    body: "Real estate law, tax rules, and lending programs vary by state and change over time. When a definitive answer depends on jurisdiction or individual circumstances, we say so explicitly rather than giving oversimplified guidance that breaks down in practice.",
  },
  {
    heading: "Regular review and updates",
    body: "Content is reviewed and updated when regulations change, rate environments shift, or reader questions reveal gaps. The dateModified field in each article's schema reflects the last substantive update.",
  },
];

const Author = () => {
  const authorSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://peasanthouse.com/author",
    name: "Peasant House Editorial Team",
    url: "https://peasanthouse.com/author",
    description: "The Peasant House Editorial Team produces practical, research-based guides on real estate investing, financing, wholesaling, property management, and licensing.",
    parentOrganization: {
      "@type": "Organization",
      name: "Peasant House",
      url: "https://peasanthouse.com",
      logo: { "@type": "ImageObject", url: "https://peasanthouse.com/favicon.svg" },
    },
    knowsAbout: [
      "Real estate investing",
      "Real estate financing",
      "Hard money lending",
      "Private money lending",
      "Real estate wholesaling",
      "Rental property management",
      "Real estate licensing",
      "Mortgage loans",
      "Property management",
    ],
    sameAs: ["https://peasanthouse.com/about"],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://peasanthouse.com" },
      { "@type": "ListItem", position: 2, name: "Editorial Team", item: "https://peasanthouse.com/author" },
    ],
  };

  return (
    <Layout>
      <Helmet>
        <title>Peasant House Editorial Team | Real Estate Research & Writing</title>
        <meta name="description" content="The Peasant House Editorial Team writes practical, source-backed guides on real estate investing, financing, wholesaling, property management, and licensing. Learn about our editorial standards." />
        <link rel="canonical" href="https://peasanthouse.com/author" />
        <meta property="og:title" content="Peasant House Editorial Team | Real Estate Research & Writing" />
        <meta property="og:description" content="Source-backed real estate guides written by the Peasant House Editorial Team. Learn about our research process, standards, and the topics we cover." />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://peasanthouse.com/author" />
        <meta property="og:site_name" content="Peasant House" />
      </Helmet>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="section-padding">
        <div className="container-narrow max-w-3xl">
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Editorial Team</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Header */}
          <div className="flex items-start gap-5">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-accent/15 text-2xl font-bold text-accent select-none">
              PH
            </div>
            <div>
              <h1 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
                Peasant House Editorial Team
              </h1>
              <p className="mt-1 text-sm text-muted-foreground">
                Real estate research &amp; writing —{" "}
                <Link to="/about" className="text-accent hover:underline">Peasant House</Link>
              </p>
            </div>
          </div>

          <div className="mt-10 space-y-10 text-muted-foreground leading-relaxed">

            {/* About */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">About the Team</h2>
              <p>
                The Peasant House Editorial Team produces practical, research-backed guides on real estate investing, financing, property management, wholesaling, and licensing. Our goal is straightforward: explain how real estate actually works without the hype, the sales pitch, or the oversimplification that makes most online real estate content useless in practice.
              </p>
              <p className="mt-4">
                We cover topics that attract broad search traffic — hard money loans, BRRRR investing, seller financing, the eviction process — but we write them the way we'd want them written: with real numbers, honest caveats, and links to the primary sources that back up what we're saying. We don't cover things we haven't researched thoroughly, and we don't pretend certainty where rules vary by state or situation.
              </p>
            </div>

            {/* Expertise */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">What We Cover</h2>
              <p className="mb-5">
                Our content spans six topic categories, each with its own dedicated hub page:
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {coverageAreas.map((area) => (
                  <div key={area.category} className="rounded-lg border border-border bg-muted/40 p-4">
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <Link
                        to={area.href}
                        className="font-heading text-base font-semibold text-foreground hover:text-accent transition-colors"
                      >
                        {area.category}
                      </Link>
                      <span className="shrink-0 rounded-sm bg-accent/10 px-2 py-0.5 text-xs font-semibold text-accent">
                        {area.count} {area.count === 1 ? "guide" : "guides"}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed">{area.description}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5">
                Browse all articles on the{" "}
                <Link to="/blog" className="text-accent hover:underline font-medium">
                  Real Estate Blog
                </Link>
                , or explore our pillar hubs for{" "}
                <Link to="/real-estate-investing" className="text-accent hover:underline">investing</Link>,{" "}
                <Link to="/real-estate-wholesaling" className="text-accent hover:underline">wholesaling</Link>, and{" "}
                <Link to="/real-estate-marketing" className="text-accent hover:underline">marketing</Link>.
              </p>
            </div>

            {/* Editorial standards */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Editorial Standards</h2>
              <p className="mb-5">
                Everything published under the Peasant House byline follows the same research and writing standards:
              </p>
              <div className="space-y-4">
                {editorialStandards.map((standard) => (
                  <div key={standard.heading} className="flex gap-3">
                    <span className="mt-1 shrink-0 text-accent font-bold" aria-hidden>—</span>
                    <div>
                      <p className="font-semibold text-foreground">{standard.heading}</p>
                      <p className="mt-1 text-sm leading-relaxed">{standard.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Corrections & transparency */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Corrections &amp; Feedback</h2>
              <p>
                If you find an error — a fact that's outdated, a number that's wrong, a state-specific rule we got wrong — use the{" "}
                <Link to="/contact" className="text-accent hover:underline">contact page</Link> to let us know. We take corrections seriously and update content promptly when errors are confirmed. We'd rather fix something than leave inaccurate information live.
              </p>
            </div>

            {/* Disclaimer box */}
            <div className="rounded-lg border border-border bg-muted/50 p-6">
              <h3 className="font-heading text-base font-semibold text-foreground">Editorial Disclaimer</h3>
              <p className="mt-2 text-sm">
                Content on Peasant House is for general educational purposes only. Nothing here constitutes legal, financial, tax, or investment advice. Real estate markets, regulations, and tax rules vary by state and change over time — always verify current requirements with the relevant state commission or a licensed professional before making decisions.
              </p>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Author;
