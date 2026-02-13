import Layout from "@/components/Layout";
import { useParams, Link } from "react-router-dom";

const StateLicense = () => {
  const { state } = useParams<{ state: string }>();
  const stateName = state?.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') || '';

  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: `How do I get a real estate license in ${stateName}?`, acceptedAnswer: { "@type": "Answer", text: `To get a real estate license in ${stateName}, you need to meet the age and education requirements, complete pre-licensing courses, pass the state exam, and submit your application.` }},
          { "@type": "Question", name: `How much does a real estate license cost in ${stateName}?`, acceptedAnswer: { "@type": "Answer", text: `Costs vary but typically include pre-licensing education ($200–$600), exam fees ($50–$100), and application fees ($50–$200).` }},
        ]
      })}} />

      <section className="section-padding">
        <div className="container-narrow max-w-3xl">
          <nav className="mb-6 text-sm text-muted-foreground" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/real-estate-license" className="hover:text-foreground">Get Licensed</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{stateName}</span>
          </nav>

          <h1 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            How to Get a Real Estate License in {stateName}
          </h1>

          <div className="mt-8 space-y-8 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="mb-3 font-heading text-xl font-bold text-foreground">Requirements</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Must be at least 18 years old (varies by state)</li>
                <li>Must be a U.S. citizen or legal resident</li>
                <li>Complete required pre-licensing education hours</li>
                <li>Pass a background check</li>
              </ul>
            </div>
            <div>
              <h2 className="mb-3 font-heading text-xl font-bold text-foreground">Pre-Licensing Education</h2>
              <p>Complete the state-required number of education hours from an approved provider. Courses cover real estate principles, practices, and state-specific laws.</p>
            </div>
            <div>
              <h2 className="mb-3 font-heading text-xl font-bold text-foreground">Exam Information</h2>
              <p>The {stateName} real estate exam consists of a national portion and a state-specific portion. Most exams are administered by PSI or Pearson VUE.</p>
            </div>
            <div>
              <h2 className="mb-3 font-heading text-xl font-bold text-foreground">Application Steps</h2>
              <ol className="list-decimal pl-5 space-y-1">
                <li>Complete pre-licensing education</li>
                <li>Submit your exam application</li>
                <li>Pass the state licensing exam</li>
                <li>Find a sponsoring broker</li>
                <li>Submit your license application</li>
              </ol>
            </div>
            <div>
              <h2 className="mb-3 font-heading text-xl font-bold text-foreground">Costs</h2>
              <p>Expect to spend $300–$900 total including education, exam fees, background check, and application fees.</p>
            </div>
            <div>
              <h2 className="mb-3 font-heading text-xl font-bold text-foreground">Renewal Process</h2>
              <p>Real estate licenses in {stateName} must be renewed periodically (typically every 2–4 years). Renewal requires continuing education credits and a renewal fee.</p>
            </div>

            {/* FAQ Section */}
            <div>
              <h2 className="mb-3 font-heading text-xl font-bold text-foreground">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground">How long does it take to get licensed in {stateName}?</h3>
                  <p>Most people complete the process in 2–4 months, depending on study pace and exam scheduling.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Can I get my license online?</h3>
                  <p>Yes, many states allow you to complete pre-licensing education online. The exam is typically taken in person at a testing center.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default StateLicense;
