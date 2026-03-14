import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Shield, TrendingUp, Users, ArrowRight, Mail, Building2, DollarSign, Megaphone, MapPin, BookOpen, CheckCircle, ChevronDown } from "lucide-react";
import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.jpg";

// Replace with your Formspree form ID after signing up at formspree.io
const NEWSLETTER_FORM_ID = "YOUR_NEWSLETTER_FORM_ID";

const US_STATES = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia",
  "Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland",
  "Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey",
  "New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina",
  "South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"
];

const POPULAR_STATES = ["California","Texas","Florida","New York","Georgia","Arizona","Colorado","Washington"];

const toSlug = (state: string) => state.toLowerCase().replace(/\s+/g, "-");

const Index = () => {
  const [emailStatus, setEmailStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [selectedState, setSelectedState] = useState("");
  const navigate = useNavigate();

  const handleNewsletterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmailStatus("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch(`https://formspree.io/f/${NEWSLETTER_FORM_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setEmailStatus("success");
        form.reset();
      } else {
        setEmailStatus("error");
      }
    } catch {
      setEmailStatus("error");
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Peasant House | Real Estate Investing, Wholesaling & Licensing Guides</title>
        <meta name="description" content="Free real estate education on investing strategies, wholesaling, marketing, and step-by-step licensing guides for all 50 states. No courses. No upsells. Just straight answers." />
        <link rel="canonical" href="https://peasanthouse.com/" />
        <meta property="og:title" content="Peasant House | Real Estate Investing, Wholesaling & Licensing Guides" />
        <meta property="og:description" content="Free real estate education on investing, wholesaling, marketing, and state licensing guides for all 50 states." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://peasanthouse.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Peasant House | Real Estate Investing, Wholesaling & Licensing Guides" />
        <meta name="twitter:description" content="Free real estate education on investing, wholesaling, marketing, and licensing guides for all 50 states." />
      </Helmet>

      {/* JSON-LD: WebSite */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Peasant House",
        description: "Free real estate education on investing, wholesaling, marketing, and state licensing guides for all 50 states.",
        url: "https://peasanthouse.com",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://peasanthouse.com/blog?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      })}} />

      {/* JSON-LD: Organization */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Peasant House",
        url: "https://peasanthouse.com",
        logo: {
          "@type": "ImageObject",
          url: "https://peasanthouse.com/favicon.svg",
        },
        contactPoint: {
          "@type": "ContactPoint",
          email: "contact@peasanthouse.com",
          contactType: "customer support",
        },
        sameAs: [],
      })}} />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden hero-bg" aria-label="Hero">
        <div className="absolute inset-0 opacity-20">
          <img src={heroBg} alt="" className="h-full w-full object-cover" aria-hidden="true" />
        </div>
        <div className="relative container-wide section-padding py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl space-y-6">
            <h1 className="font-heading text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
              Real Estate Education{" "}
              <span className="text-gradient">That Doesn't Talk Down to You</span>
            </h1>
            <p className="text-lg leading-relaxed text-primary-foreground/80 md:text-xl">
              Practical guides on investing, wholesaling, marketing, and getting your real estate license — covering the things most courses skim over or charge thousands to explain.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/start-here">Start Learning <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/real-estate-license">Get Licensed in Your State</Link>
              </Button>
            </div>
            {/* Trust signals */}
            <div className="flex flex-wrap gap-6 pt-4 text-sm text-primary-foreground/60">
              <span className="flex items-center gap-2"><Shield className="h-4 w-4" /> 50 State Licensing Guides</span>
              <span className="flex items-center gap-2"><BookOpen className="h-4 w-4" /> Free — No Upsells</span>
              <span className="flex items-center gap-2"><Users className="h-4 w-4" /> Beginners Welcome</span>
            </div>
          </div>
        </div>
      </section>

      {/* START HERE SECTION */}
      <section className="section-alt section-padding" aria-label="Getting started">
        <div className="container-wide">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">New Here? Pick a Path.</h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">You don't need to understand all of real estate before you start. Figure out which direction fits your situation and go from there.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Building2,
                title: "Real Estate Investing",
                desc: "How rental properties, BRRRR, and long-term holds actually build wealth — and what the numbers need to look like before you buy.",
                link: "/real-estate-investing",
              },
              {
                icon: DollarSign,
                title: "Real Estate Wholesaling",
                desc: "Finding discounted deals and assigning them to buyers for a fee — without needing to buy the property yourself or get a loan.",
                link: "/real-estate-wholesaling",
              },
              {
                icon: MapPin,
                title: "Get a Real Estate License",
                desc: "State-specific requirements, exam details, costs, and the step-by-step application process — organized for all 50 states.",
                link: "/real-estate-license",
              },
              {
                icon: TrendingUp,
                title: "Getting In With Limited Capital",
                desc: "House hacking, DSCR loans, seller financing, and other ways into real estate that don't require a massive down payment.",
                link: "/real-estate-investing/funding-financing",
              },
            ].map((card) => (
              <Link to={card.link} key={card.title} className="group card-hover rounded-lg border border-border bg-card p-6 block">
                <card.icon className="mb-4 h-8 w-8 text-accent" />
                <h3 className="mb-2 font-heading text-lg font-semibold text-card-foreground group-hover:text-accent transition-colors">{card.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{card.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT SILOS SECTION */}
      <section className="section-padding" aria-label="Content pillars">
        <div className="container-wide">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">Go Deeper on What Matters to You</h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">Three areas of real estate, each broken into focused guides you can actually use — not just read once and forget.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">

            {/* Investing Silo */}
            <div className="rounded-xl border border-border bg-card p-8 card-hover">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <TrendingUp className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mb-2 font-heading text-xl font-bold text-card-foreground">Real Estate Investing</h3>
              <p className="mb-4 text-sm text-muted-foreground leading-relaxed">How to buy, finance, and manage income-producing properties — including the math that actually determines whether a deal makes sense.</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Rental Property Investing</li>
                <li>• The BRRRR Strategy</li>
                <li>• Funding &amp; Financing Deals</li>
                <li>• Cash Flow &amp; ROI Calculations</li>
              </ul>
              <Button variant="link" className="mt-4 p-0 text-accent" asChild>
                <Link to="/real-estate-investing">Explore Investing Guides <ArrowRight className="ml-1 h-3 w-3" /></Link>
              </Button>
            </div>

            {/* Wholesaling Silo */}
            <div className="rounded-xl border border-border bg-card p-8 card-hover">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <DollarSign className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mb-2 font-heading text-xl font-bold text-card-foreground">Real Estate Wholesaling</h3>
              <p className="mb-4 text-sm text-muted-foreground leading-relaxed">The low-capital entry point into real estate — finding motivated sellers, putting properties under contract, and assigning deals to buyers for a fee.</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• How Wholesaling Works</li>
                <li>• Finding Motivated Sellers</li>
                <li>• Dispositions &amp; Acquisitions</li>
                <li>• Contracts &amp; Assignment Fees</li>
              </ul>
              <Button variant="link" className="mt-4 p-0 text-accent" asChild>
                <Link to="/real-estate-wholesaling">Explore Wholesaling Guides <ArrowRight className="ml-1 h-3 w-3" /></Link>
              </Button>
            </div>

            {/* Marketing Silo */}
            <div className="rounded-xl border border-border bg-card p-8 card-hover">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <Megaphone className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mb-2 font-heading text-xl font-bold text-card-foreground">Real Estate Marketing</h3>
              <p className="mb-4 text-sm text-muted-foreground leading-relaxed">Lead generation, digital ads, cold calling, and automation — the channels that keep deal flow consistent when you most need it.</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Lead Generation Strategies</li>
                <li>• Facebook &amp; Google Ads</li>
                <li>• Cold Calling &amp; SMS Marketing</li>
                <li>• CRM &amp; Automation Tools</li>
              </ul>
              <Button variant="link" className="mt-4 p-0 text-accent" asChild>
                <Link to="/real-estate-marketing">Explore Marketing Guides <ArrowRight className="ml-1 h-3 w-3" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* GET LICENSED SECTION */}
      <section className="section-alt section-padding" aria-label="Get licensed by state">
        <div className="container-wide">
          <div className="mb-8 text-center">
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">Get Your Real Estate License</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Every state has different hour requirements, exam providers, costs, and renewal cycles. Select yours below for the full breakdown.
            </p>
          </div>

          {/* Compact State Picker */}
          <div className="mx-auto max-w-xl">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <select
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="w-full appearance-none rounded-lg border border-border bg-card px-4 py-3 pr-10 text-sm font-medium text-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-accent cursor-pointer"
                >
                  <option value="" disabled>Select your state…</option>
                  {US_STATES.map((state) => (
                    <option key={state} value={toSlug(state)}>{state}</option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              </div>
              <Button
                onClick={() => selectedState && navigate(`/real-estate-license/${selectedState}`)}
                disabled={!selectedState}
                className="shrink-0"
              >
                View Guide <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>

            {/* Popular states quick links */}
            <div className="mt-4 flex flex-wrap gap-2 justify-center">
              <span className="text-xs text-muted-foreground self-center">Popular:</span>
              {POPULAR_STATES.map((state) => (
                <Link
                  key={state}
                  to={`/real-estate-license/${toSlug(state)}`}
                  className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-card-foreground hover:border-accent hover:text-accent transition-colors"
                >
                  {state}
                </Link>
              ))}
            </div>

            <p className="mt-4 text-center text-xs text-muted-foreground">
              <Link to="/real-estate-license" className="text-accent hover:underline font-medium">
                Browse all 50 state licensing guides →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* EMAIL CAPTURE SECTION */}
      <section className="hero-bg section-padding" aria-label="Newsletter signup">
        <div className="container-narrow text-center">
          <Mail className="mx-auto mb-4 h-10 w-10 text-accent" />
          <h2 className="font-heading text-3xl font-bold text-primary-foreground md:text-4xl">
            Get the Free Beginner Real Estate Guide
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-primary-foreground/70">
            A free PDF walkthrough of the basics, plus occasional tips on investing, wholesaling, and licensing. No sales pitches, no courses to buy.
          </p>
          {emailStatus === "success" ? (
            <div className="mx-auto mt-8 flex max-w-md items-center gap-3 rounded-lg bg-primary-foreground/10 px-6 py-4 text-primary-foreground">
              <CheckCircle className="h-5 w-5 shrink-0 text-accent" />
              <p className="text-sm font-medium">You're in! Check your inbox for the guide.</p>
            </div>
          ) : (
            <form className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                className="flex-1 rounded-md border-0 bg-primary-foreground/10 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent"
                aria-label="Email address"
                required
              />
              <Button variant="hero" size="lg" type="submit" disabled={emailStatus === "submitting"}>
                {emailStatus === "submitting" ? "Sending…" : "Send It to Me"}
              </Button>
            </form>
          )}
          {emailStatus === "error" && (
            <p className="mt-2 text-xs text-red-300">Something went wrong. Please try again.</p>
          )}
          <p className="mt-3 text-xs text-primary-foreground/40">Unsubscribe anytime. We don't share or sell your information.</p>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
