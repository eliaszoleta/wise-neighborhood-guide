import { useState } from "react";
import Layout from "@/components/Layout";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { stateLicenseData } from "@/data/stateLicenseData";
import { ChevronDown } from "lucide-react";
import StateLicenseTabs from "@/components/StateLicenseTabs";

const US_STATES = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia",
  "Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland",
  "Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey",
  "New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina",
  "South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"
];

const toSlug = (state: string) => state.toLowerCase().replace(/\s+/g, "-");

const StateLicense = () => {
  const { state } = useParams<{ state: string }>();
  const navigate = useNavigate();
  const stateSlug = state || "alabama";
  const stateName = stateSlug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
  const data = stateLicenseData[stateSlug];

  const metaTitle = `How to Get a Real Estate License in ${stateName} (${new Date().getFullYear()} Requirements)`;
  const metaDesc = data
    ? `Complete guide to getting your real estate license in ${stateName}: ${data.preLicenseHours} hours of pre-licensing education, ${data.examProvider} exam, costs, renewal requirements, and a step-by-step walkthrough.`
    : `Step-by-step guide to getting your real estate license in ${stateName}. Requirements, exam info, costs, and how to apply.`;

  return (
    <Layout>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDesc} />
        <link
          rel="canonical"
          href={`https://peasanthouse.com/real-estate-license/${stateSlug}`}
        />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDesc} />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://peasanthouse.com/real-estate-license/${stateSlug}`}
        />
      </Helmet>

      {/* FAQPage + HowTo Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: `How many hours of pre-licensing education are required in ${stateName}?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `${stateName} requires ${data?.preLicenseHours || "a set number of"} hours of pre-licensing education from an approved provider before you can sit for the licensing exam.`,
                },
              },
              {
                "@type": "Question",
                name: `Who administers the real estate licensing exam in ${stateName}?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `The ${stateName} real estate licensing exam is administered by ${data?.examProvider || "a state-approved testing provider"}.`,
                },
              },
              {
                "@type": "Question",
                name: `How much does it cost to get a real estate license in ${stateName}?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `Total costs in ${stateName} typically range from $300–$900, covering pre-licensing education ($150–$600), the ${data?.examProvider || "licensing"} exam fee ($50–$100), background check, and the state application fee.`,
                },
              },
              {
                "@type": "Question",
                name: `How often do you need to renew a real estate license in ${stateName}?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `Real estate licenses in ${stateName} must be renewed every ${data?.renewalYears || "2"} year${data?.renewalYears === "1" ? "" : "s"}${data?.ceHours ? `, with ${data.ceHours} hours of continuing education required at each renewal` : ""}.`,
                },
              },
              {
                "@type": "Question",
                name: `Do I need a sponsoring broker to get licensed in ${stateName}?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `Yes. In ${stateName}, a newly licensed salesperson's license must be held under a licensed, active broker. You cannot practice real estate independently as a new licensee.`,
                },
              },
            ],
          }),
        }}
      />

      <section className="section-padding">
        <div className="container-wide max-w-4xl">

          {/* Breadcrumb */}
          <nav className="mb-6 text-sm text-muted-foreground" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/real-estate-license" className="hover:text-foreground">Get Licensed</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{stateName}</span>
          </nav>

          {/* Page Header */}
          <h1 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            How to Get a Real Estate License in {stateName}
          </h1>
          <p className="mt-3 text-muted-foreground leading-relaxed max-w-2xl">
            {data?.stateIntro
              ? data.stateIntro.substring(0, 180) + "…"
              : `Everything you need to know to get your ${stateName} real estate license — from education requirements to the final application.`}
          </p>

          {/* State Switcher */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <label htmlFor="state-switcher" className="text-sm font-medium text-foreground shrink-0">
              Switch state:
            </label>
            <div className="relative">
              <select
                id="state-switcher"
                value={stateSlug}
                onChange={(e) => navigate(`/real-estate-license/${e.target.value}`)}
                className="appearance-none rounded-md border border-border bg-card py-2 pl-3 pr-8 text-sm font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-accent cursor-pointer"
              >
                {US_STATES.map((s) => (
                  <option key={s} value={toSlug(s)}>
                    {s}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
            </div>
            <Link
              to="/real-estate-license"
              className="text-xs text-muted-foreground hover:text-accent hover:underline"
            >
              ← Back to all states
            </Link>
          </div>

          {/* Tabs */}
          <div className="mt-6">
            <StateLicenseTabs stateSlug={stateSlug} stateName={stateName} />
          </div>

          {/* Internal links for SEO */}
          <div className="mt-10 rounded-lg border border-border bg-muted/40 p-5 text-sm text-muted-foreground space-y-2">
            <p className="font-semibold text-foreground">Related guides you might find useful:</p>
            <ul className="space-y-1.5">
              <li>
                →{" "}
                <Link to="/blog/real-estate-agent-realtor-broker" className="text-accent hover:underline">
                  Real Estate Agent vs. Realtor vs. Broker — What's the Difference?
                </Link>
              </li>
              <li>
                →{" "}
                <Link to="/blog/become-realtor-broker" className="text-accent hover:underline">
                  How to Become a Realtor or Broker
                </Link>
              </li>
              <li>
                →{" "}
                <Link to="/real-estate-investing" className="text-accent hover:underline">
                  Real Estate Investing Guides — Where to Go After Getting Licensed
                </Link>
              </li>
              <li>
                →{" "}
                <Link to="/real-estate-license" className="text-accent hover:underline">
                  Browse All 50 State Licensing Guides
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </section>
    </Layout>
  );
};

export default StateLicense;
