import Layout from "@/components/Layout";
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
      <section className="section-padding">
        <div className="container-wide">
          <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl">How to Get a Real Estate License</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Every state has different requirements for getting your real estate license. Select your state below to see the full guide including requirements, exam info, costs, and application steps.
          </p>
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
        </div>
      </section>
    </Layout>
  );
};

export default RealEstateLicense;
