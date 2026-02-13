import Layout from "@/components/Layout";
import { useParams, Link } from "react-router-dom";
import { stateLicenseData } from "@/data/stateLicenseData";
import { ExternalLink } from "lucide-react";

const StateLicense = () => {
  const { state } = useParams<{ state: string }>();
  const stateSlug = state || '';
  const stateName = stateSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const data = stateLicenseData[stateSlug];

  const extLink = (url: string, label: string) => (
    <a href={url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-accent hover:underline font-medium">
      {label} <ExternalLink className="h-3.5 w-3.5" />
    </a>
  );

  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: `How do I get a real estate license in ${stateName}?`, acceptedAnswer: { "@type": "Answer", text: `To get a real estate license in ${stateName}, you need to meet the age and education requirements, complete pre-licensing courses, pass the state exam, and submit your application${data ? ` through the ${data.commission}` : ''}.` }},
          { "@type": "Question", name: `How much does a real estate license cost in ${stateName}?`, acceptedAnswer: { "@type": "Answer", text: `Costs vary but typically include pre-licensing education ($200–$600), exam fees ($50–$100), and application fees ($50–$200).` }},
          { "@type": "Question", name: `How long does it take to get licensed in ${stateName}?`, acceptedAnswer: { "@type": "Answer", text: `Most people complete the process in 2–4 months, depending on study pace and exam scheduling.` }},
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

          {data && (
            <p className="mt-4 text-muted-foreground">
              The licensing process in {stateName} is overseen by the {extLink(data.commissionUrl, data.commission)}. Below is everything you need to know to get started.
            </p>
          )}

          <div className="mt-8 space-y-8 text-muted-foreground leading-relaxed">
            {/* Requirements */}
            <div>
              <h2 className="mb-3 font-heading text-xl font-bold text-foreground">Requirements</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Must be at least <strong>{data?.minAge || '18'} years old</strong></li>
                <li>Must be a U.S. citizen or legal resident</li>
                <li>Complete <strong>{data?.preLicenseHours || 'required'} hours</strong> of pre-licensing education {data?.onlineEducationUrl ? <>— {extLink(data.onlineEducationUrl, 'find approved courses')}</> : data ? <>— {extLink(data.commissionUrl, 'see approved providers')}</> : null}</li>
                <li>Pass a background check {data?.backgroundCheckUrl ? <>— {extLink(data.backgroundCheckUrl, 'submit background check')}</> : null}</li>
                <li>View the full requirements on the {data ? extLink(data.commissionUrl, `${stateName} real estate commission website`) : 'state real estate commission website'}</li>
              </ul>
            </div>

            {/* Pre-Licensing Education */}
            <div>
              <h2 className="mb-3 font-heading text-xl font-bold text-foreground">Pre-Licensing Education</h2>
              <p>
                {stateName} requires <strong>{data?.preLicenseHours || 'a set number of'} hours</strong> of pre-licensing education from an approved provider. Courses cover real estate principles, practices, and state-specific laws.
              </p>
              {data && (
                <p className="mt-2">
                  {data.onlineEducationUrl
                    ? <>Many providers offer online courses. {extLink(data.onlineEducationUrl, `Browse approved ${stateName} real estate schools`)}</>
                    : <>Check the {extLink(data.commissionUrl, `${data.commission} website`)} for a list of approved education providers.</>
                  }
                </p>
              )}
            </div>

            {/* Exam Information */}
            <div>
              <h2 className="mb-3 font-heading text-xl font-bold text-foreground">Exam Information</h2>
              <p>
                The {stateName} real estate exam consists of a national portion and a state-specific portion.
                {data && <> Exams are administered by {extLink(data.examProviderUrl, data.examProvider)}.</>}
              </p>
              {data && (
                <p className="mt-2">
                  {extLink(data.examProviderUrl, `Schedule your ${stateName} real estate exam`)} — You can register, find testing center locations, and view exam content outlines on the {data.examProvider} website.
                </p>
              )}
            </div>

            {/* Application Steps */}
            <div>
              <h2 className="mb-3 font-heading text-xl font-bold text-foreground">Application Steps</h2>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Complete {data?.preLicenseHours || 'required'} hours of pre-licensing education {data?.onlineEducationUrl ? <>({extLink(data.onlineEducationUrl, 'find courses')})</> : null}</li>
                <li>Submit your exam application through {data ? extLink(data.examProviderUrl, data.examProvider) : 'the exam provider'}</li>
                <li>Pass the state licensing exam</li>
                <li>Find a sponsoring broker</li>
                <li>Submit your license application {data ? <>through the {extLink(data.applyUrl, `${stateName} online licensing portal`)}</> : 'through the state licensing portal'}</li>
              </ol>
            </div>

            {/* Costs */}
            <div>
              <h2 className="mb-3 font-heading text-xl font-bold text-foreground">Costs</h2>
              <p>Expect to spend $300–$900 total including education, exam fees, background check, and application fees.</p>
              {data && (
                <p className="mt-2">
                  For the most up-to-date fee schedule, visit the {extLink(data.commissionUrl, `${data.commission} website`)}.
                </p>
              )}
            </div>

            {/* Renewal Process */}
            <div>
              <h2 className="mb-3 font-heading text-xl font-bold text-foreground">Renewal Process</h2>
              <p>
                Real estate licenses in {stateName} must be renewed every <strong>{data?.renewalYears || '2–4'} year{data?.renewalYears === '1' ? '' : 's'}</strong>.
                {data?.ceHours && <> Renewal requires <strong>{data.ceHours} hours</strong> of continuing education credits and a renewal fee.</>}
              </p>
              {data && (
                <p className="mt-2">
                  {extLink(data.applyUrl, `Renew your ${stateName} real estate license online`)} — You can also check your license status and continuing education requirements.
                </p>
              )}
            </div>

            {/* FAQ Section */}
            <div>
              <h2 className="mb-3 font-heading text-xl font-bold text-foreground">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground">How long does it take to get licensed in {stateName}?</h3>
                  <p>Most people complete the process in 2–4 months, depending on study pace and exam scheduling. You'll need to complete {data?.preLicenseHours || 'the required'} hours of education before sitting for the exam.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Can I get my {stateName} real estate license online?</h3>
                  <p>
                    Yes, many states allow you to complete pre-licensing education online. The exam is typically taken in person at a testing center.
                    {data && <> {extLink(data.applyUrl, `Start your ${stateName} license application online`)}</>}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Where do I apply for a real estate license in {stateName}?</h3>
                  <p>
                    You can apply directly through the {data ? extLink(data.applyUrl, `${data.commission} licensing portal`) : 'state real estate commission website'}. Make sure you have your education certificates, exam results, and background check ready before applying.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Who administers the {stateName} real estate exam?</h3>
                  <p>
                    The {stateName} real estate exam is administered by {data ? extLink(data.examProviderUrl, data.examProvider) : 'a third-party testing provider'}. You can schedule your exam, find testing center locations, and review study materials on their website.
                  </p>
                </div>
              </div>
            </div>

            {/* Official Resources */}
            {data && (
              <div className="rounded-lg border border-border bg-card p-6">
                <h2 className="mb-3 font-heading text-xl font-bold text-foreground">Official {stateName} Resources</h2>
                <ul className="space-y-2">
                  <li>🏛️ {extLink(data.commissionUrl, `${data.commission} — Official Website`)}</li>
                  <li>📝 {extLink(data.applyUrl, `Apply for Your ${stateName} Real Estate License`)}</li>
                  <li>📋 {extLink(data.examProviderUrl, `${data.examProvider} — Schedule Your Exam`)}</li>
                  {data.onlineEducationUrl && <li>🎓 {extLink(data.onlineEducationUrl, `Approved Pre-Licensing Education Providers`)}</li>}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default StateLicense;
