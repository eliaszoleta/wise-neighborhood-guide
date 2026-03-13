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
  slug: string;
  datePublished: string;       // ISO 8601: "2026-03-09"
  dateModified?: string;
  category?: string;
  faqs?: { q: string; a: string }[];
  children: ReactNode;
}

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
    ...(category ? { articleSection: category } : {}),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://peasanthouse.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://peasanthouse.com/blog" },
      { "@type": "ListItem", position: 3, name: title, item: canonicalUrl },
    ],
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
            <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
              {children}
            </div>
          </article>

          <div className="mt-12 border-t border-border pt-8">
            <Link to="/blog" className="inline-flex items-center gap-2 text-accent font-semibold hover:underline">
              <ArrowLeft className="h-4 w-4" /> Back to Blog
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost;
