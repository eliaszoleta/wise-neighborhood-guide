import Layout from "@/components/Layout";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const US_STATES = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia",
  "Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland",
  "Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey",
  "New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina",
  "South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"
];

const RealEstateLicense = () => {
  return (
    <Layout>
      <Helmet>
        <title>How to Get a Real Estate License — All 50 States | Peasant House</title>
        <meta name="description" content="State-by-state real estate licensing guides covering education hour requirements, exam providers, total costs, renewal schedules, and step-by-step application walkthroughs for all 50 states." />
        <link rel="canonical" href="https://peasanthouse.com/real-estate-license" />
        <meta property="og:title" content="How to Get a Real Estate License — All 50 States" />
        <meta property="og:description" content="Complete licensing guides for all 50 states — education requirements, exam info, costs, and how to apply." />
        <meta property="og:type" content="website" />
      </Helmet>

      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl">How to Get a Real Estate License</h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Real estate licensing is handled at the state level, which means education hour requirements, exam providers, costs, and renewal schedules vary significantly from state to state. Texas requires 180 hours of pre-licensing education. Massachusetts requires 40. Louisiana renews annually. California renews every four years. Select your state below for the full breakdown.
            </p>
            <p className="mt-3 text-muted-foreground">
              Each state guide covers: minimum age and eligibility requirements, pre-licensing education hours and approved schools, exam provider and registration, application steps, cost breakdown, renewal requirements, and a FAQ section with state-specific answers.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {US_STATES.map((state) => (
              <Link
                key={state}
                to={`/real-estate-license/${state.toLowerCase().replace(/\s+/g, '-')}`}
                className="card-hover rounded-lg border border-border bg-card px-4 py-3 text-center text-sm font-medium text-card-foreground transition-colors hover:border-accent hover:text-accent"
              >
                {state}
              </Link>
            ))}
          </div>

          <div className="mt-12 max-w-3xl rounded-lg border border-border bg-muted/40 p-6">
            <h2 className="font-heading text-lg font-bold text-foreground mb-3">What You'll Need to Get Licensed</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Regardless of state, the process generally follows the same sequence: complete your pre-licensing education, pass the state licensing exam (which has both a national and state-specific section), clear a background check, find a sponsoring broker, and submit your application. The differences are in how many hours of education your state requires, which exam provider administers the test, and what the total cost comes to.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Most people complete the entire process in 2–4 months, depending on how quickly they move through the coursework and how soon they schedule their exam. Budget between $300 and $900 total for education, exam fees, background check, and the application fee — though costs vary by state and by which school you choose.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RealEstateLicense;
