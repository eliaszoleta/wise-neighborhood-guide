import { useState } from "react";
import Layout from "@/components/Layout";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown, MapPin, Clock, BookOpen, CheckCircle } from "lucide-react";
import StateLicenseTabs from "@/components/StateLicenseTabs";

const US_STATES = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia",
  "Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland",
  "Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey",
  "New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina",
  "South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"
];

const toSlug = (state: string) => state.toLowerCase().replace(/\s+/g, "-");
const toName = (slug: string) =>
  slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

const RealEstateLicense = () => {
  const [selectedSlug, setSelectedSlug] = useState("alabama");
  const navigate = useNavigate();

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const slug = e.target.value;
    setSelectedSlug(slug);
    // Update URL without navigating away — keeps hub page intact for SEO
    window.history.replaceState(null, "", `/real-estate-license/${slug}`);
  };

  const selectedName = toName(selectedSlug);

  const metaTitle = "How to Get a Real Estate License — All 50 States (2026 Guide)";
  const metaDesc =
    "State-by-state real estate licensing guides covering pre-licensing education hours, exam providers, costs, renewal schedules, and step-by-step application walkthroughs for all 50 states. Select your state to get started.";

  return (
    <Layout>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDesc} />
        <link rel="canonical" href="https://peasanthouse.com/real-estate-license" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDesc} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://peasanthouse.com/real-estate-license" />
      </Helmet>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: metaTitle,
            description: metaDesc,
            url: "https://peasanthouse.com/real-estate-license",
            publisher: {
              "@type": "Organization",
              name: "Peasant House",
              url: "https://peasanthouse.com",
            },
            hasPart: US_STATES.map((state) => ({
              "@type": "WebPage",
              name: `How to Get a Real Estate License in ${state}`,
              url: `https://peasanthouse.com/real-estate-license/${toSlug(state)}`,
            })),
          }),
        }}
      />

      <section className="section-padding">
        <div className="container-wide">

          {/* Page Intro */}
          <div className="max-w-3xl">
            <nav className="mb-6 text-sm text-muted-foreground" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-foreground">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">Get Licensed</span>
            </nav>

            <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl">
              How to Get a Real Estate License
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Licensing is handled at the state level — which means education hours, exam providers, costs,
              and renewal cycles vary dramatically. Texas requires 180 hours; Massachusetts requires 40.
              Louisiana renews annually; California renews every four years.
            </p>
            <p className="mt-3 text-muted-foreground">
              Select your state below to see a full breakdown: eligibility requirements, pre-licensing
              education, the licensing exam, step-by-step application process, cost breakdown, renewal
              schedule, and a FAQ section with state-specific answers.
            </p>

            {/* What's covered callouts */}
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                { icon: Clock, label: "Hours Required" },
                { icon: CheckCircle, label: "Eligibility & Requirements" },
                { icon: BookOpen, label: "Exam Info" },
                { icon: MapPin, label: "Costs & Renewal" },
              ].map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-medium text-muted-foreground"
                >
                  <Icon className="h-3.5 w-3.5 text-accent" />
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* State Selector */}
          <div className="mt-10 max-w-xl">
            <label
              htmlFor="state-select"
              className="mb-2 block text-sm font-semibold text-foreground"
            >
              Choose your state
            </label>
            <div className="relative">
              <select
                id="state-select"
                value={selectedSlug}
                onChange={handleStateChange}
                className="w-full appearance-none rounded-lg border border-border bg-card px-4 py-3 pr-10 text-sm font-medium text-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-accent cursor-pointer"
              >
                {US_STATES.map((state) => (
                  <option key={state} value={toSlug(state)}>
                    {state}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              Or view the{" "}
              <Link
                to={`/real-estate-license/${selectedSlug}`}
                className="text-accent hover:underline font-medium"
              >
                dedicated {selectedName} guide
              </Link>{" "}
              for its own shareable URL.
            </p>
          </div>

          {/* State Heading + Tabs */}
          <div className="mt-8 max-w-4xl">
            <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
              Real Estate License in {selectedName}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Navigate the tabs below to explore each part of the {selectedName} licensing process.
            </p>

            <StateLicenseTabs stateSlug={selectedSlug} stateName={selectedName} />
          </div>

          {/* Internal linking — all states list (SEO anchor links, visually compact) */}
          <div className="mt-16 max-w-4xl">
            <h2 className="font-heading text-xl font-bold text-foreground mb-2">
              Browse All 50 States
            </h2>
            <p className="text-sm text-muted-foreground mb-5">
              Each state has a dedicated, full-length guide at its own URL — bookmarkable and shareable.
            </p>
            <div className="flex flex-wrap gap-2">
              {US_STATES.map((state) => {
                const slug = toSlug(state);
                return (
                  <Link
                    key={state}
                    to={`/real-estate-license/${slug}`}
                    className={`rounded-md border px-3 py-1.5 text-xs font-medium transition-colors ${
                      slug === selectedSlug
                        ? "border-accent bg-accent/10 text-accent"
                        : "border-border bg-card text-card-foreground hover:border-accent hover:text-accent"
                    }`}
                  >
                    {state}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* General Info Box */}
          <div className="mt-10 max-w-4xl rounded-lg border border-border bg-muted/40 p-6">
            <h2 className="font-heading text-lg font-bold text-foreground mb-3">
              The General Licensing Process (Every State)
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Regardless of state, the process follows the same sequence: complete your pre-licensing
              education, pass the state licensing exam (national + state-specific sections), clear a
              background check, find a sponsoring broker, and submit your application. The differences lie
              in how many hours your state requires, which exam provider administers the test, and what
              the total cost adds up to.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Most people complete the entire process in 2–4 months. Budget between $300 and $900 total
              for education, exam fees, background check, and the application fee — though costs vary by
              state and by which school you choose.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Want to understand the difference between a real estate agent, Realtor, and broker?{" "}
              <Link to="/blog/real-estate-agent-realtor-broker" className="text-accent hover:underline font-medium">
                Read our guide on agent vs. broker roles →
              </Link>
            </p>
          </div>

        </div>
      </section>
    </Layout>
  );
};

export default RealEstateLicense;
