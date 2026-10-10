import { useState } from "react";
import Layout from "@/components/Layout";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MapPin, CheckCircle, ChevronDown, AlertTriangle } from "lucide-react";
import { getStateBusinessStartupBySlug, STATE_BUSINESS_STARTUP } from "@/data/stateBusinessStartup";
import { VERTICAL_CONFIGS, type VerticalKey } from "@/data/verticalBusinessConfigs";

function formatPrice(n: number) {
  return `$${n.toLocaleString("en-US")}`;
}

interface Props {
  configKey: VerticalKey;
}

const StartBusinessStatePage = ({ configKey }: Props) => {
  const [openFaq, setOpenFaq] = useState(0);
  const { state } = useParams<{ state: string }>();
  const config = VERTICAL_CONFIGS[configKey];
  const stateSlug = state || "california";
  const biz = getStateBusinessStartupBySlug(stateSlug);
  const otherStates = STATE_BUSINESS_STARTUP.filter((s) => s.slug !== stateSlug);

  if (!biz) {
    return (
      <Layout>
        <div className="section-padding">
          <div className="container-wide max-w-4xl text-center">
            <h1 className="font-heading text-2xl font-bold text-foreground">State not found</h1>
            <Link to={`/${config.urlPrefix}`} className="text-accent hover:underline font-medium">
              ← Back to all states
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const stateName = biz.name;
  const faqs = [
    ...config.faqExtra(stateName),
    { q: `How much does it cost to form an LLC in ${stateName}?`, a: `See the exact filing fee and agency above. The LLC fee itself is the same regardless of industry -- what varies for a ${config.businessLabel.toLowerCase()} specifically is licensing and insurance, covered in the sections above.` },
    { q: `What's the fastest way to get my first client in ${stateName}?`, a: `Your personal network and direct referral relationships (covered in our full guides below) almost always outperform cold marketing when you're just starting out.` },
  ];

  const title = `How to Start a ${config.businessLabel} in ${stateName} (2026): Costs & Licensing | Home Nexio`;
  const metaDesc = `Everything you need to start a ${config.businessLabel.toLowerCase()} in ${stateName}: LLC filing fee (${formatPrice(biz.llcFee)}), licensing, and the full step-by-step checklist.`;
  const canonicalUrl = `https://homenexio.com/${config.urlPrefix}/${stateSlug}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://homenexio.com" },
      { "@type": "ListItem", position: 2, name: `Start a ${config.businessLabel}`, item: `https://homenexio.com/${config.urlPrefix}` },
      { "@type": "ListItem", position: 3, name: `${config.businessLabel} in ${stateName}`, item: canonicalUrl },
    ],
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={metaDesc} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metaDesc} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
      </Helmet>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="section-padding">
        <div className="container-wide max-w-4xl">

          <nav className="mb-6 text-sm text-muted-foreground" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <span className="mx-2">/</span>
            <Link to={`/${config.urlPrefix}`} className="hover:text-foreground">Start a {config.businessLabel}</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{stateName}</span>
          </nav>

          <div className="flex items-center gap-2 mb-3">
            <MapPin className="h-4 w-4 text-accent" />
            <span className="text-xs font-bold uppercase tracking-wider text-accent">{stateName}</span>
          </div>
          <h1 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            How to Start a {config.businessLabel} in {stateName}
          </h1>
          <p className="mt-3 text-muted-foreground leading-relaxed max-w-2xl">{config.heroDescription}</p>

          {/* LLC Quick Facts */}
          <div className="mt-8 rounded-lg border border-border bg-card p-6">
            <h2 className="font-heading text-lg font-bold text-foreground mb-4">{stateName} LLC Filing Quick Facts</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-md border border-accent/20 bg-accent/5 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-accent">LLC Filing Fee</p>
                <p className="mt-1 text-xl font-bold text-foreground">{formatPrice(biz.llcFee)}</p>
              </div>
              <div className="rounded-md border border-border bg-background p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Filing Agency</p>
                <p className="mt-1 text-sm font-semibold text-foreground">{biz.agency}</p>
              </div>
              <div className="rounded-md border border-border bg-background p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">State Income Tax</p>
                <p className="mt-1 text-sm font-semibold text-foreground">{biz.noIncomeTax ? "None" : "Applies"}</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{biz.note}</p>
            <p className="mt-3 text-xs text-muted-foreground">
              Filing fees change periodically — confirm the current fee directly with the {biz.agency} before filing.
              This is general informational content, not legal or tax advice.
            </p>
          </div>

          {/* Licensing hedge */}
          <div className="mt-6 rounded-lg border border-amber-500/30 bg-amber-500/5 p-5">
            <div className="flex items-start gap-3">
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
              <div>
                <p className="font-semibold text-foreground text-sm mb-1.5">Licensing varies by state — don't guess</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{config.licensingHedge}</p>
              </div>
            </div>
          </div>

          {/* National body */}
          <div className="mt-6 rounded-lg border border-border bg-muted/40 p-5">
            <p className="font-semibold text-foreground text-sm mb-1.5">{config.nationalBody.name}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{config.nationalBody.description}</p>
          </div>

          {/* Checklist */}
          <div className="mt-8">
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">
              Startup Checklist for {stateName}
            </h2>
            <div className="space-y-4">
              {config.checklist.map((step, i) => (
                <div key={step.title} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <div>
                    <p className="font-semibold text-sm text-foreground">{i + 1}. {step.title}</p>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      {step.body}{" "}
                      <Link to={step.href} className="text-accent font-medium hover:underline">{step.linkText} →</Link>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-10">
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">FAQs</h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => {
                const open = openFaq === i;
                return (
                  <div key={faq.q} className="rounded-lg border border-border bg-muted/40 overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(open ? -1 : i)}
                      className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left"
                      aria-expanded={open}
                    >
                      <span className="font-semibold text-sm text-foreground">{faq.q}</span>
                      <ChevronDown className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
                    </button>
                    {open && <p className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Full guide links */}
          <div className="mt-10 rounded-lg border border-border bg-muted/40 p-5">
            <p className="font-semibold text-foreground text-sm mb-3">The Full {config.businessLabel} Guide</p>
            <Link to={`/blog/${config.blogCategorySlug}`} className="text-sm font-semibold text-accent hover:underline">
              See all {config.blogCategoryLabel} guides →
            </Link>
          </div>

          {/* Other states */}
          <div className="mt-10">
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
              Start a {config.businessLabel} in Other States
            </p>
            <div className="flex flex-wrap gap-2">
              {otherStates.map((s) => (
                <Link
                  key={s.slug}
                  to={`/${config.urlPrefix}/${s.slug}`}
                  className="rounded-md border border-border bg-card px-3 py-1.5 text-xs font-medium text-card-foreground hover:border-accent hover:text-accent transition-colors"
                >
                  {s.name}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
};

export default StartBusinessStatePage;
