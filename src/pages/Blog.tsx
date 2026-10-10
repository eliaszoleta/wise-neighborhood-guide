import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { Helmet } from "react-helmet-async";
import { Search, X, BookOpen } from "lucide-react";
import { BLOG_POSTS, type BlogPostMeta } from "@/data/blogPosts";

const CATEGORIES = ["All", "Financing", "Investing", "Property Management", "Wholesaling", "Careers", "Business", "PM Business", "Home Inspection", "Mortgage Broker"] as const;

const BlogPostCard = ({ post }: { post: BlogPostMeta }) => (
  <Link
    to={post.slug}
    className="card-hover group block overflow-hidden rounded-lg border border-border bg-card"
  >
    <div className="aspect-[16/10] overflow-hidden">
      {post.image ? (
        <img
          src={post.image}
          alt={post.alt}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent/15 to-accent/5">
          <BookOpen className="h-10 w-10 text-accent/50" aria-hidden />
        </div>
      )}
    </div>
    <div className="p-5">
      <span className="inline-block rounded-sm bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent">
        {post.category}
      </span>
      <h2 className="mt-3 font-heading text-lg font-bold leading-snug text-card-foreground">
        {post.title}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-3">
        {post.excerpt}
      </p>
    </div>
  </Link>
);

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") ?? "";

  const filtered = useMemo(() => {
    const byCategory = activeCategory === "All" ? BLOG_POSTS : BLOG_POSTS.filter((p) => p.category === activeCategory);
    if (!query.trim()) return byCategory;
    const q = query.trim().toLowerCase();
    return byCategory.filter((p) => p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q));
  }, [activeCategory, query]);

  // Foundation posts (the site's original 46) always lead, in their existing
  // order, with newer posts after a divider -- regardless of category filter
  // or search.
  const foundationPosts = filtered.filter((p) => p.foundation);
  const newerPosts = filtered.filter((p) => !p.foundation);

  return (
    <Layout>
      <Helmet>
        <title>Real Estate Blog | Investing, Wholesaling & Financing Guides — Home Nexio</title>
        <meta name="description" content="Expert guides on real estate investing, wholesaling, financing, and property management to help you build wealth." />
        <link rel="canonical" href="https://homenexio.com/blog" />
        <meta property="og:title" content="Real Estate Blog | Home Nexio" />
        <meta property="og:description" content="Expert guides on real estate investing, wholesaling, financing, and property management." />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Home Nexio Real Estate Blog",
          description: "Expert guides on real estate investing, wholesaling, financing, and property management to help you build wealth.",
          url: "https://homenexio.com/blog",
          publisher: {
            "@type": "Organization",
            name: "Home Nexio",
            url: "https://homenexio.com",
            logo: { "@type": "ImageObject", url: "https://homenexio.com/favicon.svg" },
          },
        })}</script>
      </Helmet>

      <section className="section-padding">
        <div className="container-wide">
          <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl">Real Estate Blog</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">Expert guides on real estate investing, wholesaling, financing, and property management to help you build wealth.</p>

          {/* Search -- matches the SearchAction target in the homepage's WebSite schema */}
          <div className="mt-6 relative max-w-md">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              value={query}
              onChange={(e) => {
                const v = e.target.value;
                setSearchParams(v ? { q: v } : {}, { replace: true });
              }}
              placeholder="Search articles..."
              aria-label="Search articles"
              className="w-full appearance-none rounded-full border border-border bg-card py-2 pl-9 pr-9 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent [&::-webkit-search-cancel-button]:appearance-none"
            />
            {query && (
              <button
                type="button"
                onClick={() => setSearchParams({}, { replace: true })}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Category filter tabs */}
          <div className="mt-6 flex flex-wrap gap-2" role="tablist" aria-label="Filter by category">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-accent text-accent-foreground"
                    : "border border-border bg-card text-muted-foreground hover:border-accent hover:text-accent"
                }`}
              >
                {cat}
                {cat === "All" && (
                  <span className="ml-1.5 text-xs opacity-60">{BLOG_POSTS.length}</span>
                )}
              </button>
            ))}
          </div>

          {foundationPosts.length > 0 && (
            <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {foundationPosts.map((post) => (
                <BlogPostCard key={post.slug} post={post} />
              ))}
            </div>
          )}

          {foundationPosts.length > 0 && newerPosts.length > 0 && (
            <div className="my-12 flex items-center gap-4" role="separator" aria-label="More recently added guides">
              <div className="h-px flex-1 bg-border" />
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground whitespace-nowrap">
                More Guides
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>
          )}

          {newerPosts.length > 0 && (
            <div className={`grid gap-8 md:grid-cols-2 lg:grid-cols-3 ${foundationPosts.length === 0 ? "mt-10" : ""}`}>
              {newerPosts.map((post) => (
                <BlogPostCard key={post.slug} post={post} />
              ))}
            </div>
          )}

          {filtered.length === 0 && (
            <p className="mt-16 text-center text-muted-foreground">No articles match your search.</p>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
