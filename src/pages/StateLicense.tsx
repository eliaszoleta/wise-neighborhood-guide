import Layout from "@/components/Layout";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { stateLicenseData } from "@/data/stateLicenseData";
import { ExternalLink, Clock, RefreshCw, GraduationCap, DollarSign, User, BookOpen } from "lucide-react";

const StateLicense = () => {
  const { state } = useParams<{ state: string }>();
  const stateSlug = state || '';
  const stateName = stateSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const data = stateLicenseData[stateSlug];

  const metaTitle = `How to Get a Real Estate License in ${stateName} (${new Date().getFullYear()} Requirements)`;
  const metaDesc = data
    ? `Complete guide to getting your real estate license in ${stateName}: ${data.preLicenseHours} hours of pre-licensing education, ${data.examProvider} exam, costs, renewal requirements, and a step-by-step application walkthrough.`
    : `Step-by-step guide to getting your real estate license in ${stateName}. Requirements, exam info, costs, and how to apply.`;

  const extLink = (url: string, label: string) => (
    <a href={url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-accent hover:underline font-medium">
      {label} <ExternalLink className="h-3.5 w-3.5" />
    </a>
  );

  return (
    <Layout>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDesc} />
        <link rel="canonical" href={`https://peasanthouse.com/real-estate-license/${stateSlug}`} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDesc} />
        <meta property="og:type" content="article" />
      </Helmet>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: `How many hours of pre-licensing education are required in ${stateName}?`,
            acceptedAnswer: { "@type": "Answer", text: `${stateName} requires ${data?.preLicenseHours || 'a set number of'} hours of pre-licensing education from an approved provider before you can sit for the licensing exam.` }
          },
          {
            "@type": "Question",
            name: `Who administers the real estate licensing exam in ${stateName}?`,
            acceptedAnswer: { "@type": "Answer", text: `The ${stateName} real estate licensing exam is administered by ${data?.examProvider || 'a state-approved testing provider'}. You can register and schedule your exam on their website.` }
          },
          {
            "@type": "Question",
            name: `How much does it cost to get a real estate license in ${stateName}?`,
            acceptedAnswer: { "@type": "Answer", text: `Total costs in ${stateName} typically range from $300–$900, covering pre-licensing education ($150–$600), the ${data?.examProvider || 'licensing'} exam fee ($50–$100), background check, and the state application fee.` }
          },
          {
            "@type": "Question",
            name: `How often do you need to renew a real estate license in ${stateName}?`,
            acceptedAnswer: { "@type": "Answer", text: `Real estate licenses in ${stateName} must be renewed every ${data?.renewalYears || '2'} year${data?.renewalYears === '1' ? '' : 's'}${data?.ceHours ? `, with ${data.ceHours} hours of continuing education required at each renewal` : ''}.` }
          },
        ]
      })}} />

      <section className="section-padding">
        <div className="container-narrow max-w-3xl">

          {/* Breadcrumb */}
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

          {/* Unique state-specific intro */}
          <p className="mt-4 text-muted-foreground leading-relaxed">
            {data?.stateIntro || `The real estate licensing process in ${stateName} is overseen by the ${data ? data.commission : 'state real estate commission'}. Below is everything you need to know to get started, from education requirements to the final application.`}
          </p>

          {/* Quick Facts Box */}
          {data && (
            <div className="mt-8 rounded-xl border border-border bg-card p-6">
              <h2 className="mb-4 font-heading text-lg font-bold text-foreground">{stateName} Real Estate License — At a Glance</h2>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">Pre-License Hours</p>
                    <p className="font-semibold text-foreground">{data.preLicenseHours} hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <User className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">Minimum Age</p>
                    <p className="font-semibold text-foreground">{data.minAge} years old</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">Exam Provider</p>
                    <p className="font-semibold text-foreground">{data.examProvider}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <RefreshCw className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">License Renewal</p>
                    <p className="font-semibold text-foreground">Every {data.renewalYears} year{data.renewalYears === '1' ? '' : 's'}</p>
                  </div>
                </div>
                {data.ceHours && (
                  <div className="flex items-start gap-3">
                    <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">CE at Renewal</p>
                      <p className="font-semibold text-foreground">{data.ceHours} hours</p>
                    </div>
                  </div>
                )}
                <div className="flex items-start gap-3">
                  <DollarSign className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">Estimated Cost</p>
                    <p className="font-semibold text-foreground">$300–$900</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="mt-8 space-y-8 text-muted-foreground leading-relaxed">

            {/* Eligibility Requirements */}
            <div>
              <h2 className="mb-3 font-heading text-xl font-bold text-foreground">Eligibility Requirements</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Must be at least <strong className="text-foreground">{data?.minAge || '18'} years old</strong></li>
                <li>Must be a U.S. citizen or have legal authorization to work in the United States</li>
                <li>
                  Must complete <strong className="text-foreground">{data?.preLicenseHours || 'required'} hours</strong> of pre-licensing education from a state-approved provider
                  {data?.onlineEducationUrl ? <> — {extLink(data.onlineEducationUrl, 'browse approved courses')}</> : data ? <> — {extLink(data.commissionUrl, 'find approved providers on the commission site')}</> : null}
                </li>
                <li>
                  Must pass a criminal background check
                  {data?.backgroundCheckUrl ? <> — {extLink(data.backgroundCheckUrl, 'submit background check')}</> : null}
                </li>
                <li>Must pass both sections of the {stateName} licensing exam</li>
                <li>Must obtain sponsorship from a licensed, active broker before your license activates</li>
              </ul>
              {data && (
                <p className="mt-3 text-sm">
                  Review the complete requirements on the {extLink(data.commissionUrl, `${data.commission} website`)}.
                </p>
              )}
            </div>

            {/* Pre-Licensing Education */}
            <div>
              <h2 className="mb-3 font-heading text-xl font-bold text-foreground">Pre-Licensing Education</h2>
              <p>
                {stateName} requires <strong className="text-foreground">{data?.preLicenseHours || 'a set number of'} hours</strong> of pre-licensing coursework from a state-approved school. The curriculum covers real estate principles, contracts, finance, fair housing law, and {stateName}-specific regulations and practice. You must complete all required hours before you're eligible to register for the licensing exam — there are no shortcuts.
              </p>
              {data && (
                <p className="mt-3">
                  {data.onlineEducationUrl
                    ? <>Many approved schools offer fully online courses, so you can complete your {data.preLicenseHours} hours on your own schedule. {extLink(data.onlineEducationUrl, `Browse approved ${stateName} real estate schools`)}</>
                    : <>For an up-to-date list of approved education providers in {stateName}, visit the {extLink(data.commissionUrl, `${data.commission} website`)}.</>
                  }
                </p>
              )}
            </div>

            {/* Exam Information */}
            <div>
              <h2 className="mb-3 font-heading text-xl font-bold text-foreground">The Licensing Exam</h2>
              <p>
                The {stateName} real estate exam has two sections: a national portion covering general real estate principles that apply across all states, and a {stateName}-specific portion covering state law, regulations, and commission rules. You must pass both sections — usually with a score of 70–75% or higher — to receive your license.
                {data && <> In {stateName}, exams are administered by {extLink(data.examProviderUrl, data.examProvider)}.</>}
              </p>
              {data && (
                <p className="mt-3">
                  {extLink(data.examProviderUrl, `Schedule your ${stateName} real estate exam`)} — Register, find testing center locations, and access the candidate handbook on the {data.examProvider} website. The handbook includes the exact content outline, which is worth reviewing before you start studying.
                </p>
              )}
              {data?.examTip && (
                <div className="mt-4 rounded-lg border border-accent/20 bg-accent/5 p-4">
                  <p className="text-sm font-semibold text-foreground mb-1">Exam Prep Tip for {stateName}</p>
                  <p className="text-sm">{data.examTip}</p>
                </div>
              )}
            </div>

            {/* Step-by-Step */}
            <div>
              <h2 className="mb-3 font-heading text-xl font-bold text-foreground">Step-by-Step: How to Get Licensed in {stateName}</h2>
              <ol className="list-decimal pl-5 space-y-3">
                <li>
                  <strong className="text-foreground">Complete {data?.preLicenseHours || 'required'} hours of pre-licensing education</strong> from a state-approved school
                  {data?.onlineEducationUrl ? <> ({extLink(data.onlineEducationUrl, 'find courses here')})</> : null}
                </li>
                <li>
                  <strong className="text-foreground">Register for your licensing exam</strong> through {data ? extLink(data.examProviderUrl, data.examProvider) : 'the state-approved exam provider'} and schedule a test date at a convenient location
                </li>
                <li>
                  <strong className="text-foreground">Pass both sections of the exam</strong> — national and {stateName}-specific — on the same sitting or separately (check provider rules)
                </li>
                <li>
                  <strong className="text-foreground">Complete your background check</strong>
                  {data?.backgroundCheckUrl ? <> through {extLink(data.backgroundCheckUrl, 'the approved provider')}</> : null}
                </li>
                <li>
                  <strong className="text-foreground">Find a sponsoring broker</strong> — your license must be held under an active, licensed broker before you can legally represent clients
                </li>
                <li>
                  <strong className="text-foreground">Submit your license application</strong> {data ? <>through the {extLink(data.applyUrl, `${stateName} online licensing portal`)}</> : 'through the state licensing portal'} with your education certificate, exam results, background check, broker affiliation, and application fee
                </li>
              </ol>
            </div>

            {/* Costs */}
            <div>
              <h2 className="mb-3 font-heading text-xl font-bold text-foreground">Cost Breakdown</h2>
              <p>Most candidates in {stateName} spend between <strong className="text-foreground">$300 and $900</strong> to get licensed from start to finish, depending on which school they choose and how many times they need to take the exam. Here's a typical cost breakdown:</p>
              <ul className="mt-3 list-disc pl-5 space-y-2">
                <li>Pre-licensing education: <strong className="text-foreground">$150–$600</strong> (varies by school and format)</li>
                <li>{data?.examProvider || 'Licensing'} exam fee: <strong className="text-foreground">$50–$100</strong> per attempt</li>
                <li>Background check: <strong className="text-foreground">$30–$75</strong></li>
                <li>State application fee: <strong className="text-foreground">$50–$200</strong></li>
              </ul>
              {data && (
                <p className="mt-3 text-sm">
                  For the most current fee schedule, visit the {extLink(data.commissionUrl, `${data.commission} website`)} directly — fees are updated periodically.
                </p>
              )}
            </div>

            {/* Renewal Process */}
            <div>
              <h2 className="mb-3 font-heading text-xl font-bold text-foreground">License Renewal in {stateName}</h2>
              <p>
                {stateName} real estate licenses must be renewed every <strong className="text-foreground">{data?.renewalYears || '2'} year{data?.renewalYears === '1' ? '' : 's'}</strong>.
                {data?.ceHours && <> Each renewal period requires <strong className="text-foreground">{data.ceHours} hours</strong> of continuing education from a state-approved provider, plus payment of the renewal fee.</>}
              </p>
              <p className="mt-3">
                {data?.renewalYears === '1'
                  ? `${stateName} has one of the shortest renewal cycles in the country — annual renewals mean you'll be managing CE requirements and renewal fees every year from day one. Plan your continuing education schedule from the start.`
                  : `Set a reminder well before your renewal deadline. Operating on an expired license — even briefly — can result in fines or disciplinary action from the commission.`
                }
              </p>
              {data && (
                <p className="mt-2">
                  {extLink(data.applyUrl, `Renew your ${stateName} real estate license online`)} — You can also check your license status and current CE requirements on the {data.commission} website.
                </p>
              )}
            </div>

            {/* FAQs */}
            <div>
              <h2 className="mb-4 font-heading text-xl font-bold text-foreground">Frequently Asked Questions</h2>
              <div className="space-y-5">
                <div>
                  <h3 className="font-semibold text-foreground">How long does it take to get a real estate license in {stateName}?</h3>
                  <p className="mt-1">
                    Most people complete the process in 2–4 months. You'll need time to finish {data?.preLicenseHours || 'the required'} hours of coursework (typically 4–8 weeks depending on pace), then schedule and sit for the {data?.examProvider || 'state'} exam, clear your background check, find a broker, and submit your application. Ambitious candidates who study full-time sometimes finish in under 6 weeks.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Can I complete {stateName} pre-licensing education online?</h3>
                  <p className="mt-1">
                    Yes — most state-approved schools in {stateName} offer online courses that let you complete your {data?.preLicenseHours || 'required'} hours on your own schedule. The licensing exam itself is typically taken in person at an approved testing center.
                    {data && <> {extLink(data.onlineEducationUrl || data.commissionUrl, `Find approved ${stateName} schools here`)}</>}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Where do I submit my {stateName} real estate license application?</h3>
                  <p className="mt-1">
                    Applications are submitted through the {data ? extLink(data.applyUrl, `${data.commission} online licensing portal`) : `${stateName} real estate commission's website`}. Have your education certificate, exam results, background check clearance, and sponsoring broker information ready before you start the application — the system works best when you submit everything at once.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">What if I fail the {stateName} licensing exam?</h3>
                  <p className="mt-1">
                    You can retake the exam — most states allow retakes after a short waiting period and payment of a retake fee. If you failed only one section (national or state), you typically only need to retake that section. Review the {data ? extLink(data.examProviderUrl, `${data.examProvider} retake policy`) : 'exam provider\'s retake policy'} for {stateName}-specific rules.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Do I need a sponsoring broker before applying?</h3>
                  <p className="mt-1">
                    Yes. In {stateName}, a newly licensed salesperson's license must be held under a licensed, active broker — you cannot practice independently. Many candidates reach out to potential brokers while they're still completing their coursework so they can apply immediately after passing the exam.
                  </p>
                </div>
              </div>
            </div>

            {/* Official Resources */}
            {data && (
              <div className="rounded-lg border border-border bg-card p-6">
                <h2 className="mb-3 font-heading text-xl font-bold text-foreground">Official {stateName} Licensing Resources</h2>
                <ul className="space-y-2 text-sm">
                  <li>🏛️ {extLink(data.commissionUrl, `${data.commission} — Official Website`)}</li>
                  <li>📝 {extLink(data.applyUrl, `Apply for Your ${stateName} Real Estate License`)}</li>
                  <li>📋 {extLink(data.examProviderUrl, `${data.examProvider} — Schedule Your Exam`)}</li>
                  {data.onlineEducationUrl && <li>🎓 {extLink(data.onlineEducationUrl, `Approved Pre-Licensing Education Providers in ${stateName}`)}</li>}
                  {data.backgroundCheckUrl && <li>🔍 {extLink(data.backgroundCheckUrl, `Background Check — Required for Licensing`)}</li>}
                </ul>
              </div>
            )}

            {/* Internal CTA */}
            <div className="border-t border-border pt-6">
              <p className="text-sm text-muted-foreground">
                Looking for a different state?{" "}
                <Link to="/real-estate-license" className="text-accent font-medium hover:underline">
                  Browse all 50 state real estate licensing guides →
                </Link>
              </p>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default StateLicense;
