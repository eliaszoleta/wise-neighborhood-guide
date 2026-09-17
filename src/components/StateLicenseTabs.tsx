import { ExternalLink, Clock, RefreshCw, GraduationCap, DollarSign, User, BookOpen, CheckCircle } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { stateLicenseData } from "@/data/stateLicenseData";

interface Props {
  stateSlug: string;
  stateName: string;
}

const tabTriggerClass =
  "rounded-none border-b-2 border-transparent px-4 py-3 text-sm font-medium text-muted-foreground transition-none data-[state=active]:border-b-accent data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-none shrink-0";

const StateLicenseTabs = ({ stateSlug, stateName }: Props) => {
  const data = stateLicenseData[stateSlug];

  const extLink = (url: string, label: string) => (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-accent hover:underline font-medium"
    >
      {label} <ExternalLink className="h-3.5 w-3.5 shrink-0" />
    </a>
  );

  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden shadow-sm">
      <Tabs defaultValue="overview" className="w-full">
        {/* Tab Headers */}
        <div className="border-b border-border bg-muted/30 overflow-x-auto">
          <TabsList className="h-auto w-max min-w-full rounded-none bg-transparent p-0 flex">
            <TabsTrigger value="overview" className={tabTriggerClass}>Overview</TabsTrigger>
            <TabsTrigger value="requirements" className={tabTriggerClass}>Requirements</TabsTrigger>
            <TabsTrigger value="hours-exam" className={tabTriggerClass}>Hours & Exam</TabsTrigger>
            <TabsTrigger value="costs-renewal" className={tabTriggerClass}>Costs & Renewal</TabsTrigger>
            <TabsTrigger value="faq" className={tabTriggerClass}>FAQ</TabsTrigger>
          </TabsList>
        </div>

        {/* OVERVIEW TAB */}
        <TabsContent value="overview" className="p-6 md:p-8 mt-0 space-y-6">
          <p className="text-muted-foreground leading-relaxed">
            {data?.stateIntro ||
              `The real estate licensing process in ${stateName} is overseen by the ${data ? data.commission : "state real estate commission"}. Below is everything you need to know to get started.`}
          </p>

          {/* Quick Facts Grid */}
          {data && (
            <div className="rounded-lg border border-border bg-background p-5">
              <h3 className="mb-4 font-heading text-base font-bold text-foreground">
                {stateName} — At a Glance
              </h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">Pre-License Hours</p>
                    <p className="font-semibold text-foreground">{data.preLicenseHours} hrs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <User className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">Minimum Age</p>
                    <p className="font-semibold text-foreground">{data.minAge} yrs</p>
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
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">Renewal</p>
                    <p className="font-semibold text-foreground">
                      Every {data.renewalYears} yr{data.renewalYears === "1" ? "" : "s"}
                    </p>
                  </div>
                </div>
                {data.ceHours && (
                  <div className="flex items-start gap-3">
                    <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">CE at Renewal</p>
                      <p className="font-semibold text-foreground">{data.ceHours} hrs</p>
                    </div>
                  </div>
                )}
                <div className="flex items-start gap-3">
                  <DollarSign className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">Est. Total Cost</p>
                    <p className="font-semibold text-foreground">$300–$900</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Official Resources */}
          {data && (
            <div className="rounded-lg border border-border bg-background p-5">
              <h3 className="mb-3 font-heading text-base font-bold text-foreground">
                Official {stateName} Licensing Resources
              </h3>
              <ul className="space-y-2 text-sm">
                <li>🏛️ {extLink(data.commissionUrl, `${data.commission} — Official Website`)}</li>
                <li>📝 {extLink(data.applyUrl, `Apply for Your ${stateName} Real Estate License`)}</li>
                <li>📋 {extLink(data.examProviderUrl, `${data.examProvider} — Schedule Your Exam`)}</li>
                {data.onlineEducationUrl && (
                  <li>🎓 {extLink(data.onlineEducationUrl, `Approved Pre-Licensing Schools in ${stateName}`)}</li>
                )}
                {data.backgroundCheckUrl && (
                  <li>🔍 {extLink(data.backgroundCheckUrl, "Background Check — Required for Licensing")}</li>
                )}
              </ul>
            </div>
          )}
        </TabsContent>

        {/* REQUIREMENTS TAB */}
        <TabsContent value="requirements" className="p-6 md:p-8 mt-0 space-y-6">
          <div>
            <h3 className="mb-3 font-heading text-lg font-bold text-foreground">Eligibility Requirements</h3>
            <ul className="space-y-2 text-muted-foreground">
              {[
                <>Must be at least <strong className="text-foreground">{data?.minAge || "18"} years old</strong></>,
                <>Must be a U.S. citizen or have legal authorization to work in the United States</>,
                <>
                  Must complete{" "}
                  <strong className="text-foreground">{data?.preLicenseHours || "required"} hours</strong> of
                  pre-licensing education from a state-approved provider
                  {data?.onlineEducationUrl ? (
                    <> — {extLink(data.onlineEducationUrl, "browse approved courses")}</>
                  ) : data ? (
                    <> — {extLink(data.commissionUrl, "find approved providers")}</>
                  ) : null}
                </>,
                <>
                  Must pass a criminal background check
                  {data?.backgroundCheckUrl ? (
                    <> — {extLink(data.backgroundCheckUrl, "submit background check")}</>
                  ) : null}
                </>,
                <>Must pass both sections of the {stateName} licensing exam (national + state-specific)</>,
                <>Must obtain sponsorship from a licensed, active broker before your license activates</>,
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            {data && (
              <p className="mt-4 text-sm text-muted-foreground">
                Full requirements on the{" "}
                {extLink(data.commissionUrl, `${data.commission} website`)}.
              </p>
            )}
          </div>

          <div>
            <h3 className="mb-3 font-heading text-lg font-bold text-foreground">
              Step-by-Step: How to Get Licensed in {stateName}
            </h3>
            <ol className="space-y-3 text-muted-foreground">
              {[
                <>
                  <strong className="text-foreground">
                    Complete {data?.preLicenseHours || "required"} hours of pre-licensing education
                  </strong>{" "}
                  from a state-approved school
                  {data?.onlineEducationUrl ? (
                    <> ({extLink(data.onlineEducationUrl, "find courses here")})</>
                  ) : null}
                </>,
                <>
                  <strong className="text-foreground">Register for your licensing exam</strong> through{" "}
                  {data
                    ? extLink(data.examProviderUrl, data.examProvider)
                    : "the state-approved exam provider"}{" "}
                  and schedule a test date
                </>,
                <>
                  <strong className="text-foreground">Pass both sections of the exam</strong> — national
                  and {stateName}-specific
                </>,
                <>
                  <strong className="text-foreground">Complete your background check</strong>
                  {data?.backgroundCheckUrl ? (
                    <> through {extLink(data.backgroundCheckUrl, "the approved provider")}</>
                  ) : null}
                </>,
                <>
                  <strong className="text-foreground">Find a sponsoring broker</strong> — your license
                  must be held under an active, licensed broker
                </>,
                <>
                  <strong className="text-foreground">Submit your license application</strong>{" "}
                  {data ? (
                    <>through the {extLink(data.applyUrl, `${stateName} online licensing portal`)}</>
                  ) : (
                    "through the state licensing portal"
                  )}{" "}
                  with your education certificate, exam results, background check, and broker affiliation
                </>,
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-bold text-accent">
                    {i + 1}
                  </span>
                  <span className="pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </TabsContent>

        {/* HOURS & EXAM TAB */}
        <TabsContent value="hours-exam" className="p-6 md:p-8 mt-0 space-y-6">
          <div>
            <h3 className="mb-3 font-heading text-lg font-bold text-foreground">Pre-Licensing Education</h3>
            <p className="text-muted-foreground leading-relaxed">
              {stateName} requires{" "}
              <strong className="text-foreground">
                {data?.preLicenseHours || "a set number of"} hours
              </strong>{" "}
              of pre-licensing coursework from a state-approved school. The curriculum covers real estate
              principles, contracts, finance, fair housing law, and {stateName}-specific regulations. You must
              complete all required hours before you're eligible to register for the licensing exam.
            </p>
            {data && (
              <p className="mt-3 text-muted-foreground">
                {data.onlineEducationUrl ? (
                  <>
                    Many approved schools offer fully online courses.{" "}
                    {extLink(data.onlineEducationUrl, `Browse approved ${stateName} real estate schools`)}
                  </>
                ) : (
                  <>
                    For an up-to-date list of approved providers, visit the{" "}
                    {extLink(data.commissionUrl, `${data.commission} website`)}.
                  </>
                )}
              </p>
            )}
          </div>

          <div>
            <h3 className="mb-3 font-heading text-lg font-bold text-foreground">The Licensing Exam</h3>
            <p className="text-muted-foreground leading-relaxed">
              The {stateName} real estate exam has two sections: a national portion covering general real
              estate principles, and a {stateName}-specific portion covering state law, regulations, and
              commission rules. You must pass both sections — usually with a score of 70–75% or higher.
              {data && (
                <>
                  {" "}
                  Exams in {stateName} are administered by{" "}
                  {extLink(data.examProviderUrl, data.examProvider)}.
                </>
              )}
            </p>
            {data && (
              <p className="mt-3 text-muted-foreground">
                {extLink(data.examProviderUrl, `Schedule your ${stateName} real estate exam`)} — register,
                find testing centers, and access the candidate handbook (which outlines the exact content
                covered on your exam).
              </p>
            )}
          </div>

          {data?.examTip && (
            <div className="rounded-lg border border-accent/20 bg-accent/5 p-4">
              <p className="mb-1 text-sm font-semibold text-foreground">Exam Prep Tip for {stateName}</p>
              <p className="text-sm text-muted-foreground">{data.examTip}</p>
            </div>
          )}
        </TabsContent>

        {/* COSTS & RENEWAL TAB */}
        <TabsContent value="costs-renewal" className="p-6 md:p-8 mt-0 space-y-6">
          <div>
            <h3 className="mb-3 font-heading text-lg font-bold text-foreground">Cost Breakdown</h3>
            <p className="text-muted-foreground">
              Most candidates in {stateName} spend between{" "}
              <strong className="text-foreground">$300 and $900</strong> total, depending on which school
              they choose and how many exam attempts they need.
            </p>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {[
                { label: "Pre-licensing education", value: "$150–$600" },
                {
                  label: `${data?.examProvider || "Licensing"} exam fee`,
                  value: "$50–$100 per attempt",
                },
                { label: "Background check", value: "$30–$75" },
                { label: "State application fee", value: "$50–$200" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between rounded-md border border-border bg-background px-4 py-2.5 text-sm"
                >
                  <span className="text-muted-foreground">{item.label}</span>
                  <span className="font-semibold text-foreground">{item.value}</span>
                </div>
              ))}
            </div>
            {data && (
              <p className="mt-3 text-sm text-muted-foreground">
                For the current fee schedule, check the{" "}
                {extLink(data.commissionUrl, `${data.commission} website`)} directly — fees are updated
                periodically.
              </p>
            )}
          </div>

          <div>
            <h3 className="mb-3 font-heading text-lg font-bold text-foreground">
              License Renewal in {stateName}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {stateName} real estate licenses must be renewed every{" "}
              <strong className="text-foreground">
                {data?.renewalYears || "2"} year{data?.renewalYears === "1" ? "" : "s"}
              </strong>
              .
              {data?.ceHours && (
                <>
                  {" "}
                  Each renewal requires{" "}
                  <strong className="text-foreground">{data.ceHours} hours</strong> of continuing education
                  from a state-approved provider, plus the renewal fee.
                </>
              )}
            </p>
            <p className="mt-3 text-muted-foreground text-sm">
              {data?.renewalYears === "1"
                ? `${stateName} has one of the shortest renewal cycles in the country. Annual renewals mean you'll manage CE requirements every year — plan your continuing education schedule from day one.`
                : `Set a reminder well before your renewal deadline. Operating on an expired license — even briefly — can result in fines or disciplinary action.`}
            </p>
            {data && (
              <p className="mt-2 text-sm text-muted-foreground">
                {extLink(data.applyUrl, `Renew your ${stateName} real estate license online`)} — you can
                also check your license status and current CE requirements on the {data.commission} website.
              </p>
            )}
          </div>
        </TabsContent>

        {/* FAQ TAB */}
        <TabsContent value="faq" className="p-6 md:p-8 mt-0">
          <h3 className="mb-5 font-heading text-lg font-bold text-foreground">
            Frequently Asked Questions
          </h3>
          <div className="space-y-5">
            {[
              {
                q: `How long does it take to get a real estate license in ${stateName}?`,
                a: `Most people complete the process in 2–4 months. You'll need time to finish ${data?.preLicenseHours || "the required"} hours of coursework (typically 4–8 weeks), then schedule and sit for the ${data?.examProvider || "state"} exam, clear your background check, find a broker, and submit your application. Ambitious candidates who study full-time sometimes finish in under 6 weeks.`,
              },
              {
                q: `Can I complete ${stateName} pre-licensing education online?`,
                a: `Yes — most state-approved schools in ${stateName} offer online courses that let you complete your ${data?.preLicenseHours || "required"} hours on your own schedule. The licensing exam itself is typically taken in person at an approved testing center.`,
                link: data?.onlineEducationUrl || data?.commissionUrl
                  ? {
                      url: data?.onlineEducationUrl || data?.commissionUrl || "",
                      label: `Find approved ${stateName} schools here`,
                    }
                  : null,
              },
              {
                q: `Where do I submit my ${stateName} real estate license application?`,
                a: `Applications are submitted through the ${data ? "" : `${stateName} real estate commission's website`}${data ? `${data.commission} online licensing portal` : ""}. Have your education certificate, exam results, background check clearance, and sponsoring broker information ready before you start.`,
                link: data ? { url: data.applyUrl, label: `Go to ${stateName} licensing portal` } : null,
              },
              {
                q: `What if I fail the ${stateName} licensing exam?`,
                a: `You can retake the exam — most states allow retakes after a short waiting period and payment of a retake fee. If you failed only one section (national or state), you typically only need to retake that section.`,
                link: data
                  ? { url: data.examProviderUrl, label: `${data.examProvider} retake policy` }
                  : null,
              },
              {
                q: `Do I need a sponsoring broker before applying?`,
                a: `Yes. In ${stateName}, a newly licensed salesperson's license must be held under a licensed, active broker — you cannot practice independently. Many candidates reach out to potential brokers while still completing their coursework so they can apply immediately after passing the exam.`,
              },
            ].map((item) => (
              <div key={item.q} className="rounded-lg border border-border bg-background p-4">
                <h4 className="font-semibold text-foreground">{item.q}</h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                {"link" in item && item.link && (
                  <p className="mt-2 text-sm">
                    {extLink(item.link.url, item.link.label)}
                  </p>
                )}
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StateLicenseTabs;
