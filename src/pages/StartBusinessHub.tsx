import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Rocket } from "lucide-react";
import { STATE_BUSINESS_STARTUP } from "@/data/stateBusinessStartup";
import { VERTICAL_CONFIGS, type VerticalKey } from "@/data/verticalBusinessConfigs";
import { getPostsByCategorySlug } from "@/data/blogPosts";

interface Props {
  configKey: VerticalKey;
}

const StartBusinessHub = ({ configKey }: Props) => {
  const config = VERTICAL_CONFIGS[configKey];
  const posts = getPostsByCategorySlug(config.blogCategorySlug);

  const title = `How to Start a ${config.businessLabel} (2026): Costs, Licensing & State-by-State Guide | Home Nexio`;
  const metaDesc = `Everything you need to start a ${config.businessLabel.toLowerCase()}: licensing, costs, and getting your first client -- plus the LLC filing fee for every state.`;
  const canonicalUrl = `https://homenexio.com/${config.urlPrefix}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://homenexio.com" },
      { "@type": "ListItem", position: 2, name: `Start a ${config.businessLabel}`, item: canonicalUrl },
    ],
  };

  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={metaDesc} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metaDesc} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
      </Helmet>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="section-padding">
        <div className="container-wide max-w-5xl">

          <nav className="mb-6 text-sm text-muted-foreground" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Start a {config.businessLabel}</span>
          </nav>

          <div className="flex items-center gap-2 mb-3">
            <Rocket className="h-4 w-4 text-accent" />
            <span className="text-xs font-bold uppercase tracking-wider text-accent">Starting Your Business</span>
          </div>
          <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl">
            How to Start a {config.businessLabel}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            {config.heroDescription}
          </p>

          {/* Guides grid */}
          <div className="mt-10">
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">
              The Complete {config.blogCategoryLabel} Guide
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  to={post.slug}
                  className="rounded-lg border border-border bg-card p-5 hover:border-accent transition-colors"
                >
                  <p className="font-heading text-sm font-bold text-card-foreground leading-snug">{post.title}</p>
                  <span className="mt-2 inline-block text-xs font-semibold text-accent">Read guide →</span>
                </Link>
              ))}
            </div>
          </div>

          {/* State selector */}
          <div className="mt-12 rounded-lg border border-border bg-card p-6">
            <h2 className="font-heading text-lg font-bold text-foreground mb-2">
              Find Your State's LLC Filing Fee
            </h2>
            <p className="text-sm text-muted-foreground mb-5">
              LLC filing fees, filing agencies, and state-specific notes for every state.
            </p>
            <div className="flex flex-wrap gap-2">
              {STATE_BUSINESS_STARTUP.map((s) => (
                <Link
                  key={s.slug}
                  to={`/${config.urlPrefix}/${s.slug}`}
                  className="rounded-md border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground hover:border-accent hover:text-accent transition-colors"
                >
                  {s.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Cross-link to Start Here */}
          <div className="mt-10 rounded-lg border border-border bg-muted/40 p-6 text-center">
            <p className="font-heading text-lg font-bold text-foreground mb-2">New to real estate entirely?</p>
            <p className="text-sm text-muted-foreground mb-4 max-w-md mx-auto">
              If you're not sure which path fits you yet, our Start Here guide walks through investing, wholesaling,
              getting licensed, and marketing.
            </p>
            <Link to="/start-here" className="text-sm font-semibold text-accent hover:underline">
              Go to Start Here →
            </Link>
          </div>

        </div>
      </section>
    </Layout>
  );
};

export default StartBusinessHub;
