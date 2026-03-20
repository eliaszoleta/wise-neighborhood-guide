import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

export interface CategoryPost {
  title: string;
  slug: string;       // full path e.g. "/blog/financing/hard-money-lender"
  excerpt: string;
  image: string;
  alt: string;
}

interface BlogCategoryPageProps {
  categorySlug: string;             // e.g. "financing"
  categoryLabel: string;            // e.g. "Financing"
  metaTitle: string;
  metaDesc: string;
  intro: string;
  posts: CategoryPost[];
  pillarLink?: { label: string; href: string };
}

const BlogCategoryPage = ({
  categorySlug,
  categoryLabel,
  metaTitle,
  metaDesc,
  intro,
  posts,
  pillarLink,
}: BlogCategoryPageProps) => {
  const canonicalUrl = `https://homenexio.com/blog/${categorySlug}`;

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: metaTitle,
    description: metaDesc,
    url: canonicalUrl,
    publisher: {
      "@type": "Organization",
      name: "Home Nexio",
      url: "https://homenexio.com",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://homenexio.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://homenexio.com/blog" },
      { "@type": "ListItem", position: 3, name: categoryLabel, item: canonicalUrl },
    ],
  };

  return (
    <Layout>
      <Helmet>
        <title>{metaTitle} | Home Nexio</title>
        <meta name="description" content={metaDesc} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={`${metaTitle} | Home Nexio`} />
        <meta property="og:description" content={metaDesc} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="Home Nexio" />
      </Helmet>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="section-padding">
        <div className="container-wide">
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild><Link to="/">Home</Link></BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild><Link to="/blog">Blog</Link></BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{categoryLabel}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="mb-10">
            <span className="inline-block rounded-sm bg-accent/10 px-3 py-1 text-xs font-semibold text-accent mb-3">
              {categoryLabel}
            </span>
            <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl mb-4">
              {categoryLabel} Guides
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">{intro}</p>
            {pillarLink && (
              <Link
                to={pillarLink.href}
                className="inline-flex items-center gap-2 mt-4 text-accent font-semibold hover:underline text-sm"
              >
                {pillarLink.label} →
              </Link>
            )}
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                to={post.slug}
                className="card-hover group block overflow-hidden rounded-lg border border-border bg-card"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.alt}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <span className="inline-block rounded-sm bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent">
                    {categoryLabel}
                  </span>
                  <h2 className="mt-3 font-heading text-lg font-bold leading-snug text-card-foreground group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 border-t border-border pt-8">
            <Link to="/blog" className="inline-flex items-center gap-2 text-accent font-semibold hover:underline">
              ← All Articles
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogCategoryPage;
