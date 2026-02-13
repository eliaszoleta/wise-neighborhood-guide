import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, BookOpen, TrendingUp, Users, ArrowRight, Mail, Building2, DollarSign, Megaphone, MapPin } from "lucide-react";
import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.jpg";

const US_STATES = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia",
  "Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland",
  "Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey",
  "New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina",
  "South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"
];

const Index = () => {
  return (
    <Layout>
      {/* JSON-LD Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Neighborhood Guidelines",
        description: "Real Estate Simplified – Learn investing, wholesaling, marketing & licensing.",
        url: "https://neighborhoodguidelines.com",
      })}} />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden hero-bg" aria-label="Hero">
        <div className="absolute inset-0 opacity-20">
          <img src={heroBg} alt="" className="h-full w-full object-cover" aria-hidden="true" />
        </div>
        <div className="relative container-wide section-padding py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl space-y-6">
            <h1 className="font-heading text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
              Learn Real Estate Investing, Wholesaling &amp; Marketing{" "}
              <span className="text-gradient">the Smart Way</span>
            </h1>
            <p className="text-lg leading-relaxed text-primary-foreground/80 md:text-xl">
              Step-by-step guides, tools, and strategies to build income through real estate — whether you're a complete beginner or scaling your portfolio.
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
              <span className="flex items-center gap-2"><Shield className="h-4 w-4" /> 10+ Years Experience</span>
              <span className="flex items-center gap-2"><BookOpen className="h-4 w-4" /> 100% Educational Focus</span>
              <span className="flex items-center gap-2"><Users className="h-4 w-4" /> Beginner Friendly</span>
            </div>
          </div>
        </div>
      </section>

      {/* START HERE SECTION */}
      <section className="section-alt section-padding" aria-label="Getting started">
        <div className="container-wide">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">New to Real Estate? Start Here</h2>
            <p className="mt-3 text-muted-foreground">Follow our beginner roadmap to get started with confidence.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Building2, title: "What is Real Estate Investing?", desc: "Understand the fundamentals of building wealth through property.", link: "/real-estate-investing" },
              { icon: DollarSign, title: "Beginner's Guide to Wholesaling", desc: "Learn how to profit from real estate without buying property.", link: "/real-estate-wholesaling" },
              { icon: MapPin, title: "How to Get a Real Estate License", desc: "State-by-state requirements, exams, and application steps.", link: "/real-estate-license" },
              { icon: TrendingUp, title: "Start With Little or No Money", desc: "Strategies to break into real estate with minimal capital.", link: "/real-estate-investing" },
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
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">Deep Dive Into Real Estate</h2>
            <p className="mt-3 text-muted-foreground">Expert guides organized by topic for serious learners.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Investing Silo */}
            <div className="rounded-xl border border-border bg-card p-8 card-hover">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <TrendingUp className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mb-3 font-heading text-xl font-bold text-card-foreground">Real Estate Investing</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Rental Property Investing</li>
                <li>• BRRRR Strategy Guide</li>
                <li>• Funding & Financing Deals</li>
                <li>• Cash Flow & ROI Calculations</li>
              </ul>
              <Button variant="link" className="mt-4 p-0 text-accent" asChild>
                <Link to="/real-estate-investing">Explore Investing <ArrowRight className="ml-1 h-3 w-3" /></Link>
              </Button>
            </div>

            {/* Wholesaling Silo */}
            <div className="rounded-xl border border-border bg-card p-8 card-hover">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <DollarSign className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mb-3 font-heading text-xl font-bold text-card-foreground">Real Estate Wholesaling</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• How Wholesaling Works</li>
                <li>• Finding Motivated Sellers</li>
                <li>• Dispositions & Acquisitions</li>
                <li>• Contracts & Assignment Fees</li>
              </ul>
              <Button variant="link" className="mt-4 p-0 text-accent" asChild>
                <Link to="/real-estate-wholesaling">Explore Wholesaling <ArrowRight className="ml-1 h-3 w-3" /></Link>
              </Button>
            </div>

            {/* Marketing Silo */}
            <div className="rounded-xl border border-border bg-card p-8 card-hover">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <Megaphone className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mb-3 font-heading text-xl font-bold text-card-foreground">Real Estate Marketing</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Lead Generation Strategies</li>
                <li>• Facebook & Google Ads</li>
                <li>• Cold Calling & SMS Marketing</li>
                <li>• CRM & Automation Tools</li>
              </ul>
              <Button variant="link" className="mt-4 p-0 text-accent" asChild>
                <Link to="/real-estate-marketing">Explore Marketing <ArrowRight className="ml-1 h-3 w-3" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* GET LICENSED SECTION */}
      <section className="section-alt section-padding" aria-label="Get licensed by state">
        <div className="container-wide">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">Get Your Real Estate License</h2>
            <p className="mt-3 text-muted-foreground">Find requirements, exam info, costs, and step-by-step guides for all 50 states.</p>
          </div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {US_STATES.map((state) => (
              <Link
                key={state}
                to={`/real-estate-license/${state.toLowerCase().replace(/\s+/g, '-')}`}
                className="rounded-md border border-border bg-card px-3 py-2.5 text-center text-sm font-medium text-card-foreground transition-colors hover:border-accent hover:text-accent"
              >
                {state}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* EMAIL CAPTURE SECTION */}
      <section className="hero-bg section-padding" aria-label="Newsletter signup">
        <div className="container-narrow text-center">
          <Mail className="mx-auto mb-4 h-10 w-10 text-accent" />
          <h2 className="font-heading text-3xl font-bold text-primary-foreground md:text-4xl">
            Free Beginner Real Estate Starter Guide
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-primary-foreground/70">
            Join thousands of aspiring investors. Get our free PDF guide plus weekly tips on investing, wholesaling, and marketing.
          </p>
          <form className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-md border-0 bg-primary-foreground/10 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent"
              aria-label="Email address"
              required
            />
            <Button variant="hero" size="lg" type="submit">
              Get Free Guide
            </Button>
          </form>
          <p className="mt-3 text-xs text-primary-foreground/40">No spam. Unsubscribe anytime.</p>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
