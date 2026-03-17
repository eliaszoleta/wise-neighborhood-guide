import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Shield, TrendingUp, Users, ArrowRight, Mail, Building2, DollarSign, Megaphone, MapPin, BookOpen, CheckCircle, ChevronDown, Star, FileText, BarChart3 } from "lucide-react";
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

const faqs = [
  {
    q: "What is the best way to start investing in real estate with little money?",
    a: "House hacking — buying a small multifamily property with an FHA loan (3.5% down), living in one unit, and renting the others — is the most reliable low-capital entry point. DSCR loans, seller financing, and partnerships are other legitimate strategies. Wholesaling requires marketing budget rather than purchase capital and is another path into real estate without needing a large down payment.",
  },
  {
    q: "How do I get a real estate license?",
    a: "Requirements vary by state. You'll need to complete state-approved pre-licensing education (40–180 hours depending on your state), pass a real estate exam, submit a license application, and affiliate with a licensed broker. Costs typically run $500–$1,500 total. Select your state from our licensing guide for the exact requirements, approved course providers, exam details, and costs.",
  },
  {
    q: "What is real estate wholesaling and how does it work?",
    a: "Wholesaling is finding distressed properties at a discount, getting them under contract, and selling that contract to a cash buyer investor for an assignment fee — without ever purchasing the property yourself. Your profit is the spread between the seller's contract price and what the end buyer pays. Assignment fees typically run $5,000–$20,000 on residential deals. It requires consistent marketing effort to find motivated sellers, not large amounts of capital.",
  },
  {
    q: "What is the BRRRR strategy in real estate?",
    a: "BRRRR stands for Buy, Rehab, Rent, Refinance, Repeat. You purchase a distressed property below market value, renovate it, rent it out, then cash-out refinance based on the new appraised value to pull your capital back out and repeat the process. When executed correctly, this strategy lets investors build a rental portfolio while recycling the same initial capital across multiple deals.",
  },
  {
    q: "How much do property managers charge?",
    a: "Residential property managers typically charge 8–12% of monthly gross rent plus leasing fees (usually 50–100% of one month's rent for finding and placing a tenant). On a $1,500/month rental, that's $120–$180/month in management fees. The fee covers tenant communication, rent collection, maintenance coordination, and legal compliance. For investors managing remotely or scaling beyond 5 units, a property manager usually pays for itself.",
  },
  {
    q: "What is a DSCR loan and who qualifies?",
    a: "A DSCR (Debt Service Coverage Ratio) loan qualifies real estate investors based on the rental property's income rather than personal W-2 income or tax returns. The lender compares monthly rental income to the mortgage payment — a 1.0 DSCR means rent exactly covers the mortgage, most lenders want 1.1+. DSCR loans are popular with self-employed investors and portfolio builders because there's no personal income verification. Expect 20–25% down and slightly higher rates than conventional loans.",
  },
];

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
        <title>Real Estate Investing, Wholesaling & Licensing Guides | Peasant House</title>
        <meta name="description" content="Free real estate education: how to invest in rental properties, wholesale deals, generate leads, and get your real estate license in all 50 states. No courses, no upsells — just clear answers." />
        <link rel="canonical" href="https://peasanthouse.com/" />
        <meta property="og:title" content="Real Estate Investing, Wholesaling & Licensing Guides | Peasant House" />
        <meta property="og:description" content="Free guides on real estate investing, wholesaling, marketing, and state licensing. Rental properties, BRRRR, hard money, DSCR loans, motivated sellers, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://peasanthouse.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Real Estate Investing, Wholesaling & Licensing Guides | Peasant House" />
        <meta name="twitter:description" content="Free real estate guides on investing, wholesaling, marketing, and licensing for all 50 states." />
      </Helmet>

      {/* JSON-LD: WebSite */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Peasant House",
        description: "Free real estate education on investing, wholesaling, marketing, financing, and state licensing guides for all 50 states.",
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

      {/* JSON-LD: FAQPage */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      })}} />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden hero-bg" aria-label="Hero">
        <div className="absolute inset-0 opacity-20">
          <img src={heroBg} alt="" className="h-full w-full object-cover" aria-hidden="true" />
        </div>
        <div className="relative container-wide section-padding py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl space-y-6">
            <h1 className="font-heading text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
              Real Estate Investing, Wholesaling & Licensing —{" "}
              <span className="text-gradient">Explained Without the Sales Pitch</span>
            </h1>
            <p className="text-lg leading-relaxed text-primary-foreground/80 md:text-xl">
              Free guides on rental property investing, the BRRRR strategy, real estate wholesaling, motivated seller marketing, hard money and DSCR loans, and how to get your real estate license in any state. No courses to buy. No email course funnels. Just the information.
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
              <span className="flex items-center gap-2"><Star className="h-4 w-4" /> No Courses to Sell</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK STATS STRIP */}
      <section className="border-b border-border bg-card" aria-label="Site stats">
        <div className="container-wide py-6">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { label: "Topics Covered", value: "50+" },
              { label: "State Licensing Guides", value: "50" },
              { label: "Financing Strategies", value: "15+" },
              { label: "Blog Articles", value: "45+" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-heading text-2xl font-bold text-accent md:text-3xl">{stat.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* START HERE SECTION */}
      <section className="section-alt section-padding" aria-label="Getting started paths">
        <div className="container-wide">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">Where Do You Want to Start?</h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">Real estate education doesn't have to start at the beginning. Pick the area that matches where you are right now and go from there.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Building2,
                title: "Real Estate Investing",
                desc: "Rental properties, the BRRRR strategy, how to analyze deals, and what the numbers need to look like before you buy. Includes financing options from conventional to DSCR loans.",
                link: "/real-estate-investing",
              },
              {
                icon: DollarSign,
                title: "Real Estate Wholesaling",
                desc: "Find motivated sellers, put distressed properties under contract, and assign the deal to a cash buyer for a fee — without buying the property or getting a loan.",
                link: "/real-estate-wholesaling",
              },
              {
                icon: MapPin,
                title: "Get a Real Estate License",
                desc: "Step-by-step licensing guides for all 50 states — pre-licensing hours, exam providers, application costs, and renewal requirements organized by state.",
                link: "/real-estate-license",
              },
              {
                icon: TrendingUp,
                title: "Limited Capital Strategies",
                desc: "House hacking with FHA loans, DSCR loans for investors, seller financing, subject-to deals, and other ways into real estate without a massive down payment.",
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
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">In-Depth Guides on Every Major Topic</h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">Three areas of real estate, each broken into focused guides you can actually use — not just read once and forget.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">

            {/* Investing Silo */}
            <div className="rounded-xl border border-border bg-card p-8 card-hover">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <TrendingUp className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mb-2 font-heading text-xl font-bold text-card-foreground">Real Estate Investing</h3>
              <p className="mb-4 text-sm text-muted-foreground leading-relaxed">How to buy, finance, and manage income-producing properties — including the math that actually determines whether a deal makes sense before you commit capital.</p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                <li className="flex items-center gap-2"><ArrowRight className="h-3 w-3 text-accent shrink-0" /><Link to="/real-estate-investing/rental-property-investing" className="hover:text-accent transition-colors">Rental Property Investing</Link></li>
                <li className="flex items-center gap-2"><ArrowRight className="h-3 w-3 text-accent shrink-0" /><Link to="/real-estate-investing/brrrr-strategy" className="hover:text-accent transition-colors">The BRRRR Strategy</Link></li>
                <li className="flex items-center gap-2"><ArrowRight className="h-3 w-3 text-accent shrink-0" /><Link to="/real-estate-investing/funding-financing" className="hover:text-accent transition-colors">Funding &amp; Financing Deals</Link></li>
                <li className="flex items-center gap-2"><ArrowRight className="h-3 w-3 text-accent shrink-0" /><Link to="/real-estate-investing/cash-flow-roi" className="hover:text-accent transition-colors">Cash Flow &amp; ROI Calculations</Link></li>
              </ul>
              <Button variant="link" className="mt-2 p-0 text-accent" asChild>
                <Link to="/real-estate-investing">Explore Investing Guides <ArrowRight className="ml-1 h-3 w-3" /></Link>
              </Button>
            </div>

            {/* Wholesaling Silo */}
            <div className="rounded-xl border border-border bg-card p-8 card-hover">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <DollarSign className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mb-2 font-heading text-xl font-bold text-card-foreground">Real Estate Wholesaling</h3>
              <p className="mb-4 text-sm text-muted-foreground leading-relaxed">The low-capital entry point into real estate — finding motivated sellers, putting properties under contract, and assigning deals to cash buyers for a fee without a loan.</p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                <li className="flex items-center gap-2"><ArrowRight className="h-3 w-3 text-accent shrink-0" /><Link to="/real-estate-wholesaling/how-wholesaling-works" className="hover:text-accent transition-colors">How Wholesaling Works</Link></li>
                <li className="flex items-center gap-2"><ArrowRight className="h-3 w-3 text-accent shrink-0" /><Link to="/real-estate-wholesaling/finding-motivated-sellers" className="hover:text-accent transition-colors">Finding Motivated Sellers</Link></li>
                <li className="flex items-center gap-2"><ArrowRight className="h-3 w-3 text-accent shrink-0" /><Link to="/real-estate-wholesaling/dispositions-acquisitions" className="hover:text-accent transition-colors">Dispositions &amp; Acquisitions</Link></li>
                <li className="flex items-center gap-2"><ArrowRight className="h-3 w-3 text-accent shrink-0" /><Link to="/real-estate-wholesaling/contracts-assignment-fees" className="hover:text-accent transition-colors">Contracts &amp; Assignment Fees</Link></li>
              </ul>
              <Button variant="link" className="mt-2 p-0 text-accent" asChild>
                <Link to="/real-estate-wholesaling">Explore Wholesaling Guides <ArrowRight className="ml-1 h-3 w-3" /></Link>
              </Button>
            </div>

            {/* Marketing Silo */}
            <div className="rounded-xl border border-border bg-card p-8 card-hover">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <Megaphone className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mb-2 font-heading text-xl font-bold text-card-foreground">Real Estate Marketing</h3>
              <p className="mb-4 text-sm text-muted-foreground leading-relaxed">Lead generation, digital ads, cold calling, SMS outreach, and CRM automation — the marketing channels that keep deal flow consistent for agents and investors.</p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                <li className="flex items-center gap-2"><ArrowRight className="h-3 w-3 text-accent shrink-0" /><Link to="/real-estate-marketing/lead-generation" className="hover:text-accent transition-colors">Lead Generation Strategies</Link></li>
                <li className="flex items-center gap-2"><ArrowRight className="h-3 w-3 text-accent shrink-0" /><Link to="/real-estate-marketing/facebook-google-ads" className="hover:text-accent transition-colors">Facebook &amp; Google Ads</Link></li>
                <li className="flex items-center gap-2"><ArrowRight className="h-3 w-3 text-accent shrink-0" /><Link to="/real-estate-marketing/cold-calling-sms" className="hover:text-accent transition-colors">Cold Calling &amp; SMS Marketing</Link></li>
                <li className="flex items-center gap-2"><ArrowRight className="h-3 w-3 text-accent shrink-0" /><Link to="/real-estate-marketing/crm-automation" className="hover:text-accent transition-colors">CRM &amp; Automation Tools</Link></li>
              </ul>
              <Button variant="link" className="mt-2 p-0 text-accent" asChild>
                <Link to="/real-estate-marketing">Explore Marketing Guides <ArrowRight className="ml-1 h-3 w-3" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FINANCING DEEP-DIVE STRIP */}
      <section className="section-alt section-padding" aria-label="Financing strategies">
        <div className="container-wide">
          <div className="mb-8 text-center">
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">Real Estate Financing Strategies</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Conventional mortgages, hard money loans, DSCR loans, seller financing, subject-to deals, HELOCs, and more — every financing option real estate investors actually use.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: "Hard Money Loans", href: "/blog/financing/hard-money-lender", desc: "Fast-close bridge financing for fix-and-flip and BRRRR deals. Higher rates, flexible qualification." },
              { label: "DSCR Loans for Investors", href: "/blog/financing/dscr-loan-real-estate", desc: "Qualify based on rental income, not W-2 income. No personal income verification required." },
              { label: "Seller Financing", href: "/blog/financing/seller-financing-real-estate", desc: "The seller acts as the lender — flexible terms, no bank approval, negotiated directly." },
              { label: "Subject-To Deals", href: "/blog/financing/subject-to-real-estate", desc: "Take over the seller's existing mortgage without formally assuming it. Keeps their low rate in place." },
              { label: "Cash-Out Refinance", href: "/blog/financing/cash-out-refinance", desc: "Pull equity from an existing property to fund new acquisitions or renovations." },
              { label: "Private Money Lending", href: "/blog/financing/private-money-lender", desc: "Capital from individuals — friends, family, investors — with fully negotiable terms." },
            ].map((item) => (
              <Link key={item.href} to={item.href} className="group rounded-lg border border-border bg-card p-5 card-hover block">
                <div className="flex items-start gap-3">
                  <FileText className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <div>
                    <h3 className="font-semibold text-card-foreground group-hover:text-accent transition-colors text-sm">{item.label}</h3>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link to="/blog/financing" className="text-sm font-semibold text-accent hover:underline inline-flex items-center gap-1">
              Browse all financing guides <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* GET LICENSED SECTION */}
      <section className="section-padding" aria-label="Get licensed by state">
        <div className="container-wide">
          <div className="mb-8 text-center">
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">Get Your Real Estate License</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Every state has different education hour requirements, exam providers, application costs, and renewal cycles. Select your state for the full step-by-step breakdown.
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

      {/* WHY THIS SITE SECTION */}
      <section className="section-alt section-padding" aria-label="Why Peasant House">
        <div className="container-wide">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">Why a Free Real Estate Education Site?</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Most real estate education online is designed to sell you something at the end — a course, a coaching program, a mastermind. The free content exists to warm you up for the pitch.
              </p>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                This site is different. Everything here is free and complete. There's no premium tier, no upsell, no $997 course waiting at the end of an article. If the information is useful, the site succeeds.
              </p>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                We cover real estate investing for beginners and experienced investors, wholesaling from first deal to scaling a team, real estate marketing and lead generation, financing strategies including creative and non-conventional options, and step-by-step licensing guides for all 50 states.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: BookOpen, title: "Free & Complete", desc: "Every guide covers the full topic — not a teaser designed to sell you more." },
                { icon: Shield, title: "Honest Tradeoffs", desc: "We explain what works, what doesn't, and what the real risks are." },
                { icon: BarChart3, title: "Numbers-Focused", desc: "Real estate is a math business. We include the math, not just the concepts." },
                { icon: Users, title: "All Experience Levels", desc: "From complete beginners to investors scaling their third deal." },
              ].map((item) => (
                <div key={item.title} className="rounded-lg border border-border bg-card p-5">
                  <item.icon className="mb-3 h-5 w-5 text-accent" />
                  <h3 className="font-semibold text-card-foreground text-sm">{item.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="section-padding" aria-label="Frequently asked questions">
        <div className="container-narrow max-w-3xl">
          <div className="mb-10 text-center">
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">Common Real Estate Questions</h2>
            <p className="mt-3 text-muted-foreground">Direct answers to the questions beginners and investors ask most often.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-lg border border-border bg-card p-6">
                <h3 className="font-heading text-base font-semibold text-card-foreground">{faq.q}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
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
            A free PDF walkthrough covering investing basics, wholesaling fundamentals, and how to evaluate your first deal — plus occasional tips on financing and licensing. No sales pitches, no courses to buy.
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
