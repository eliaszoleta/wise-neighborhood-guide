import { Children, ReactNode, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import AdSlot from "@/components/AdSlot";
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Clock } from "lucide-react";
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
  datePublished: string;
  dateModified?: string;
  /** Display label — e.g. "Financing" */
  category?: string;
  /** One or two sentence direct answer shown above the TOC */
  quickAnswer?: string;
  /** Bullet points shown at the end of the article body */
  keyTakeaways?: string[];
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
  quickAnswer,
  keyTakeaways,
  faqs,
  children,
}: BlogPostProps) => {
  const canonicalUrl = `https://peasanthouse.com/blog/${slug}`;

  const slugParts = slug.split("/");
  const categorySlug = slugParts.length > 1 ? slugParts[0] : null;
  const categoryLabel = categorySlug ? (categoryDisplayNames[categorySlug] ?? category) : category;
  const categoryUrl = categorySlug ? `https://peasanthouse.com/blog/${categorySlug}` : null;

  const articleRef = useRef<HTMLDivElement>(null);
  const [toc, setToc] = useState<{ id: string; text: string }[]>([]);
  const [readTime, setReadTime] = useState(0);

  useEffect(() => {
    const el = articleRef.current;
    if (!el) return;

    // Build TOC from H2 elements and assign IDs
    const h2s = el.querySelectorAll("h2");
    const items: { id: string; text: string }[] = [];
    h2s.forEach((h2) => {
      const text = h2.textContent?.trim() ?? "";
      if (!text) return;
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
      h2.id = id;
      items.push({ id, text });
    });
    setToc(items);

    // Read time from word count (~200 wpm)
    const words = (el.textContent ?? "").trim().split(/\s+/).filter(Boolean).length;
    setReadTime(Math.max(1, Math.round(words / 200)));
  }, []);

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

  // Split children into two halves for mid-content ad injection
  const childArray = Children.toArray(children);
  const midpoint = Math.ceil(childArray.length / 2);
  const firstHalf = childArray.slice(0, midpoint);
  const secondHalf = childArray.slice(midpoint);

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
        <div className="container-wide max-w-7xl">

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

          {/* Two-column layout */}
          <div className="lg:grid lg:grid-cols-[1fr_300px] lg:gap-12 xl:gap-16">

            {/* ── MAIN ARTICLE ── */}
            <div className="min-w-0">
              <article className="prose-article">
                <h1 className="font-heading text-3xl font-bold text-foreground md:text-4xl lg:text-5xl leading-tight">
                  {title}
                </h1>

                {/* Byline */}
                <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
                  {categoryLabel && (
                    <>
                      <Link
                        to={`/blog/${categorySlug}`}
                        className="inline-block rounded-sm bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent hover:bg-accent/20 transition-colors"
                      >
                        {categoryLabel}
                      </Link>
                      <span aria-hidden>·</span>
                    </>
                  )}
                  <Link to="/author" className="hover:text-accent hover:underline transition-colors">
                    By the Peasant House Editorial Team
                  </Link>
                  {readTime > 0 && (
                    <>
                      <span aria-hidden>·</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {readTime} min read
                      </span>
                    </>
                  )}
                  {dateModified && (
                    <>
                      <span aria-hidden>·</span>
                      <span>Updated {new Date(dateModified).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
                    </>
                  )}
                </div>

                {/* Quick Answer box */}
                {quickAnswer && (
                  <div className="mt-6 rounded-lg border-l-4 border-accent bg-accent/5 px-5 py-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-accent mb-1">Quick Answer</p>
                    <p className="text-sm leading-relaxed text-foreground">{quickAnswer}</p>
                  </div>
                )}

                {/* Table of Contents */}
                {toc.length >= 3 && (
                  <nav aria-label="Table of contents" className="mt-6 rounded-lg border border-border bg-muted/40 px-5 py-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">In This Article</p>
                    <ol className="space-y-1.5 list-none m-0 p-0">
                      {toc.map((item, i) => (
                        <li key={item.id} className="flex items-baseline gap-2.5">
                          <span className="text-xs font-semibold text-accent tabular-nums w-4 shrink-0">{i + 1}.</span>
                          <a
                            href={`#${item.id}`}
                            className="text-sm text-foreground hover:text-accent hover:underline transition-colors leading-snug"
                          >
                            {item.text}
                          </a>
                        </li>
                      ))}
                    </ol>
                  </nav>
                )}

                {/* Ad after TOC / before article body */}
                <AdSlot slot="6666666666" format="in-article" className="mt-6" />

                {/* Article body — first half */}
                <div ref={articleRef} className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
                  {firstHalf}
                </div>

                {/* Mid-content ad */}
                {secondHalf.length > 0 && (
                  <AdSlot slot="7777777777" format="in-article" className="my-8" />
                )}

                {/* Article body — second half */}
                {secondHalf.length > 0 && (
                  <div className="space-y-6 text-muted-foreground leading-relaxed">
                    {secondHalf}
                  </div>
                )}

                {/* Key Takeaways */}
                {keyTakeaways && keyTakeaways.length > 0 && (
                  <div className="mt-10 rounded-lg border border-border bg-muted/40 px-5 py-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-accent mb-3">Key Takeaways</p>
                    <ul className="space-y-2 list-none m-0 p-0">
                      {keyTakeaways.map((point, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="mt-0.5 text-accent shrink-0" aria-hidden>✓</span>
                          <span className="text-sm leading-relaxed text-foreground">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </article>

              {/* Bottom ad before FAQs */}
              <AdSlot slot="8888888888" format="horizontal" className="mt-10" />

              {faqs && faqs.length > 0 && (
                <div className="mt-10 border-t border-border pt-8">
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

            {/* ── SIDEBAR ── */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-6">

                {/* TOC (mirrors what's built dynamically via useEffect) */}
                {toc.length >= 2 && (
                  <nav aria-label="Article sections" className="rounded-lg border border-border bg-muted/40 p-5">
                    <div className="flex items-center gap-2 mb-4">
                      <BookOpen className="h-4 w-4 text-accent shrink-0" />
                      <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        In This Article
                      </p>
                    </div>
                    <ol className="space-y-2">
                      {toc.map((item, i) => (
                        <li key={item.id} className="flex items-start gap-2">
                          <span className="text-xs font-semibold text-accent tabular-nums w-4 shrink-0 mt-0.5">
                            {i + 1}.
                          </span>
                          <a
                            href={`#${item.id}`}
                            className="text-sm text-foreground hover:text-accent hover:underline transition-colors leading-snug"
                          >
                            {item.text}
                          </a>
                        </li>
                      ))}
                    </ol>
                  </nav>
                )}

                {/* Sidebar rectangle ad */}
                <AdSlot slot="9999999999" format="rectangle" className="w-full" />

                {/* Category link */}
                {categorySlug && categoryLabel && (
                  <div className="rounded-lg border border-border bg-card p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                      More {categoryLabel} Articles
                    </p>
                    <Link
                      to={`/blog/${categorySlug}`}
                      className="text-sm font-semibold text-accent hover:underline flex items-center gap-1"
                    >
                      Browse all {categoryLabel} guides →
                    </Link>
                  </div>
                )}

                {/* Second sidebar ad */}
                <AdSlot slot="1010101010" format="rectangle" className="w-full" />
              </div>
            </aside>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost;
