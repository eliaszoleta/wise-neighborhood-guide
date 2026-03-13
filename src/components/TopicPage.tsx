import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
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
  datePublished: string;  // ISO 8601: "2026-03-09"
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
  const canonicalUrl = `https://peasanthouse.com${slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: metaDesc,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      "@type": "Organization",
      name: "Peasant House",
      url: "https://peasanthouse.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Peasant House",
      url: "https://peasanthouse.com",
      logo: {
        "@type": "ImageObject",
        url: "https://peasanthouse.com/favicon.svg",
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
      { "@type": "ListItem", position: 1, name: "Home", item: "https://peasanthouse.com" },
      { "@type": "ListItem", position: 2, name: parentLabel, item: `https://peasanthouse.com${parentHref}` },
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
        <title>{title} | Peasant House</title>
        <meta name="description" content={metaDesc} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={`${title} | Peasant House`} />
        <meta property="og:description" content={metaDesc} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="Peasant House" />
        <meta property="article:published_time" content={datePublished} />
        <meta property="article:modified_time" content={dateModified ?? datePublished} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${title} | Peasant House`} />
        <meta name="twitter:description" content={metaDesc} />
      </Helmet>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

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

          <h1 className="font-heading text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">{title}</h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{intro}</p>

          <div className="mt-10 space-y-10">
            {sections.map((s, i) => (
              <div key={i}>
                <h2 className="font-heading text-2xl font-bold text-foreground">{s.heading}</h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">{s.content}</p>
                {s.links && s.links.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-3">
                    {s.links.map((l) => (
                      <span key={l.url}>{extLink(l.url, l.label)}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {faqs.length > 0 && (
            <div className="mt-14">
              <h2 className="font-heading text-2xl font-bold text-foreground">Frequently Asked Questions</h2>
              <div className="mt-6 space-y-6">
                {faqs.map((f, i) => (
                  <div key={i} className="rounded-lg border border-border bg-card p-6">
                    <h3 className="font-heading text-lg font-semibold text-card-foreground">{f.q}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-12">
            <Link to={parentHref} className="inline-flex items-center gap-2 text-accent font-semibold hover:underline">
              <ArrowLeft className="h-4 w-4" /> Back to {parentLabel}
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TopicPage;
