import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

interface BlogPostProps {
  title: string;
  metaDesc: string;
  /** Full path after /blog/ — e.g. "financing/hard-money-lender" */
  slug: string;
  datePublished: string;       // ISO 8601: "2026-03-09"
  dateModified?: string;
  /** Display label — e.g. "Financing" */
  category?: string;
  faqs?: { q: string; a: string }[];
  children: ReactNode;
}

const categoryDisplayNames: Record<string, string> = {
  "financing": "Financing",
  "investing": "Investing",
  "property-management": "Property Management",
  "wholesaling": "Wholesaling",
  "real-estate-careers": "Real Estate Careers",
  "real-estate-business": "Real Estate Business",
};

const BlogPost = ({
  title,
  metaDesc,
  slug,
  datePublished,
  dateModified,
  category,
  faqs,
  children,
}: BlogPostProps) => {
  const canonicalUrl = `https://peasanthouse.com/blog/${slug}`;

  // Derive category slug from the first segment of slug (e.g. "financing" from "financing/hard-money-lender")
  const slugParts = slug.split("/");
  const categorySlug = slugParts.length > 1 ? slugParts[0] : null;
  const categoryLabel = categorySlug ? (categoryDisplayNames[categorySlug] ?? category) : category;
  const categoryUrl = categorySlug ? `https://peasanthouse.com/blog/${categorySlug}` : null;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: metaDesc,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      "@type": "Organization",
      name: "Peasant House Editorial Team",
      url: "https://peasanthouse.com/about",
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
    ...(categoryLabel ? { articleSection: categoryLabel } : {}),
  };

  const breadcrumbItems = [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://peasanthouse.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://peasanthouse.com/blog" },
    ...(categorySlug && categoryLabel ? [{ "@type": "ListItem", position: 3, name: categoryLabel, item: categoryUrl }] : []),
    { "@type": "ListItem", position: categorySlug ? 4 : 3, name: title, item: canonicalUrl },
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems,
  };

  const faqSchema = faqs && faqs.length > 0
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
        {categoryLabel && <meta property="article:section" content={categoryLabel} />}
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
                  <Link to="/blog">Blog</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              {categorySlug && categoryLabel && (
                <>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to={`/blog/${categorySlug}`}>{categoryLabel}</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </>
              )}
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <article className="prose-article">
            <h1 className="font-heading text-3xl font-bold text-foreground md:text-4xl lg:text-5xl leading-tight">
              {title}
            </h1>
            {categoryLabel && (
              <div className="mt-3 flex items-center gap-3 text-sm text-muted-foreground">
                <Link
                  to={`/blog/${categorySlug}`}
                  className="inline-block rounded-sm bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent hover:bg-accent/20 transition-colors"
                >
                  {categoryLabel}
                </Link>
                <span>·</span>
                <span>By the Peasant House Editorial Team</span>
              </div>
            )}
            <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
              {children}
            </div>
          </article>

          {faqs && faqs.length > 0 && (
            <div className="mt-12 border-t border-border pt-8">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
              <div className="space-y-5">
                {faqs.map((faq, i) => (
                  <div key={i} className="rounded-lg border border-border bg-muted/40 p-5">
                    <h3 className="font-heading text-base font-semibold text-foreground mb-2">{faq.q}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-12 border-t border-border pt-8 flex items-center gap-6">
            {categorySlug && categoryLabel && (
              <Link
                to={`/blog/${categorySlug}`}
                className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
              >
                <ArrowLeft className="h-4 w-4" /> Back to {categoryLabel}
              </Link>
            )}
            <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent font-medium hover:underline text-sm">
              All Articles
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost;
