import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import AdSlot from "@/components/AdSlot";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, BookOpen, Clock } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

interface Section {
  heading: string;
  content: string;
  links?: { label: string; url: string }[];
}

interface TopicPageProps {
  title: string;
  metaDesc: string;
  slug: string;
  parentLabel: string;
  parentHref: string;
  datePublished: string;
  dateModified?: string;
  intro: string;
  sections: Section[];
  faqs: { q: string; a: string }[];
}

const extLink = (url: string, label: string) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1 text-accent underline underline-offset-2 hover:text-accent/80 font-medium"
  >
    {label} <ExternalLink className="h-3 w-3" />
  </a>
);

// Derive a URL-friendly anchor id from a heading string
const toAnchor = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

// Estimate reading time (words / 200 wpm)
const estimateReadTime = (sections: Section[], intro: string, faqs: { q: string; a: string }[]) => {
  const allText = [
    intro,
    ...sections.map((s) => s.heading + " " + s.content),
    ...faqs.map((f) => f.q + " " + f.a),
  ].join(" ");
  const words = allText.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
};

const TopicPage = ({
  title,
  metaDesc,
  slug,
  parentLabel,
  parentHref,
  datePublished,
  dateModified,
  intro,
  sections,
  faqs,
}: TopicPageProps) => {
  const canonicalUrl = `https://homenexio.com${slug}`;
  const readTime = estimateReadTime(sections, intro, faqs);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: metaDesc,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      "@type": "Organization",
      name: "Home Nexio",
      url: "https://homenexio.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Home Nexio",
      url: "https://homenexio.com",
      logo: {
        "@type": "ImageObject",
        url: "https://homenexio.com/favicon.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://homenexio.com" },
      { "@type": "ListItem", position: 2, name: parentLabel, item: `https://homenexio.com${parentHref}` },
      { "@type": "ListItem", position: 3, name: title, item: canonicalUrl },
    ],
  };

  const faqSchema = faqs.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  return (
    <Layout>
      <Helmet>
        <title>{title} | Home Nexio</title>
        <meta name="description" content={metaDesc} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={`${title} | Home Nexio`} />
        <meta property="og:description" content={metaDesc} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="Home Nexio" />
        <meta property="article:published_time" content={datePublished} />
        <meta property="article:modified_time" content={dateModified ?? datePublished} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${title} | Home Nexio`} />
        <meta name="twitter:description" content={metaDesc} />
      </Helmet>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      <section className="section-padding">
        <div className="container-wide max-w-7xl">

          {/* Breadcrumb */}
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to={parentHref}>{parentLabel}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Page header */}
          <div className="mb-8 max-w-3xl">
            <Link
              to={parentHref}
              className="inline-block rounded-sm bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent mb-3 hover:bg-accent/20 transition-colors"
            >
              {parentLabel}
            </Link>
            <h1 className="font-heading text-3xl font-bold text-foreground md:text-4xl lg:text-5xl leading-tight">
              {title}
            </h1>
            <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <Link to="/author" className="hover:text-accent hover:underline transition-colors">
                By the Home Nexio Editorial Team
              </Link>
              <span aria-hidden>·</span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {readTime} min read
              </span>
              {dateModified && (
                <>
                  <span aria-hidden>·</span>
                  <span>Updated {new Date(dateModified).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
                </>
              )}
            </div>
          </div>

          {/* Two-column layout: content + sidebar */}
          <div className="lg:grid lg:grid-cols-[1fr_300px] lg:gap-12 xl:gap-16">

            {/* ── MAIN CONTENT ── */}
            <div className="min-w-0">

              {/* Intro */}
              <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-prose">{intro}</p>

              {/* In-article ad — above the fold after intro */}
              <AdSlot slot="1111111111" format="horizontal" className="mb-10" />

              {/* Sections */}
              <div className="space-y-10">
                {sections.map((s, i) => (
                  <div key={i}>
                    <h2
                      id={toAnchor(s.heading)}
                      className="font-heading text-2xl font-bold text-foreground mb-3 scroll-mt-24"
                    >
                      {s.heading}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">{s.content}</p>
                    {s.links && s.links.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-3">
                        {s.links.map((l) => (
                          <span key={l.url}>{extLink(l.url, l.label)}</span>
                        ))}
                      </div>
                    )}
                    {/* Mid-content ad after 3rd section */}
                    {i === 2 && (
                      <AdSlot slot="2222222222" format="in-article" className="mt-8" />
                    )}
                  </div>
                ))}
              </div>

              {/* FAQs */}
              {faqs.length > 0 && (
                <div className="mt-14">
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                    Frequently Asked Questions
                  </h2>
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

              {/* Bottom ad */}
              <AdSlot slot="3333333333" format="horizontal" className="mt-12" />

              {/* Back link */}
              <div className="mt-10 border-t border-border pt-8">
                <Link to={parentHref} className="inline-flex items-center gap-2 text-accent font-semibold hover:underline">
                  <ArrowLeft className="h-4 w-4" /> Back to {parentLabel}
                </Link>
              </div>
            </div>

            {/* ── SIDEBAR ── */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-6">

                {/* Table of Contents */}
                {sections.length >= 2 && (
                  <nav aria-label="Table of contents" className="rounded-lg border border-border bg-muted/40 p-5">
                    <div className="flex items-center gap-2 mb-4">
                      <BookOpen className="h-4 w-4 text-accent shrink-0" />
                      <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        In This Guide
                      </p>
                    </div>
                    <ol className="space-y-2">
                      {sections.map((s, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-xs font-semibold text-accent tabular-nums w-4 shrink-0 mt-0.5">
                            {i + 1}.
                          </span>
                          <a
                            href={`#${toAnchor(s.heading)}`}
                            className="text-sm text-foreground hover:text-accent hover:underline transition-colors leading-snug"
                          >
                            {s.heading}
                          </a>
                        </li>
                      ))}
                      {faqs.length > 0 && (
                        <li className="flex items-start gap-2 pt-1 border-t border-border mt-1">
                          <span className="text-xs font-semibold text-muted-foreground tabular-nums w-4 shrink-0 mt-0.5">
                            ❓
                          </span>
                          <a
                            href="#frequently-asked-questions"
                            className="text-sm text-foreground hover:text-accent hover:underline transition-colors leading-snug"
                          >
                            Frequently Asked Questions
                          </a>
                        </li>
                      )}
                    </ol>
                  </nav>
                )}

                {/* Sidebar ad */}
                <AdSlot slot="4444444444" format="rectangle" className="w-full" />

                {/* Related pillar */}
                <div className="rounded-lg border border-border bg-card p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                    Related Hub
                  </p>
                  <Link
                    to={parentHref}
                    className="group flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
                  >
                    <BookOpen className="h-4 w-4 shrink-0" />
                    {parentLabel} — Full Guide Hub
                  </Link>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                    Browse all topics in the {parentLabel} section, plus related articles.
                  </p>
                </div>

                {/* Second sidebar ad (lower) */}
                <AdSlot slot="5555555555" format="rectangle" className="w-full" />
              </div>
            </aside>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TopicPage;
