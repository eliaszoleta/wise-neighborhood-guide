import TopicPage from "@/components/TopicPage";

const AcquisitionsManagerRealEstate = () => (
  <TopicPage
    title="What Do Acquisitions Managers Do in Real Estate? Roles & Responsibilities"
    metaDesc="The acquisitions manager is the person who closes deals — meeting sellers, running property analysis, and negotiating contracts. Here's what the role actually looks like."
    parentLabel="Blog"
    parentHref="/blog"
    intro="In a real estate investment operation, the acquisitions manager is the person who turns qualified leads into signed contracts. They go on seller appointments, evaluate properties, run the numbers to determine maximum allowable offers, present those offers to sellers, and negotiate. In wholesaling businesses, a strong acquisitions manager is often the highest-value person in the entire company — because deals only exist if someone closes them."
    sections={[
      {
        heading: "What Acquisitions Managers Actually Do Day-to-Day",
        content: "The acquisitions pipeline starts where lead management ends. When a lead manager qualifies a seller as genuinely motivated and willing to consider a below-market offer, that lead gets passed to acquisitions. The acquisitions manager then: schedules a property appointment, physically visits the property to assess condition, runs a comparative market analysis (CMA) to estimate ARV, estimates renovation costs using contractor relationships or their own experience, calculates the maximum allowable offer using the company's formula (typically 70% of ARV minus repairs minus assignment fee), presents and negotiates the offer in person or by phone, and gets the purchase agreement signed. Once a contract is signed, they typically hand it off to dispositions (who find the end buyer) or to the internal team for closing coordination.",
        links: [],
      },
      {
        heading: "Key Skills the Role Requires",
        content: "Acquisitions is fundamentally a sales role. The acquisitions manager is selling the seller on accepting a below-market price — which means they need to be genuinely persuasive, good at building rapport quickly, and skilled at uncovering and addressing seller objections. Beyond people skills: they need to run accurate property valuations (bad ARV estimates kill deals or create unwinnable situations at the negotiating table), estimate rehab costs with reasonable precision (wildly inaccurate estimates mean deals that don't work for buyers), and know how to read a seller's motivation level to know when to push and when to back off. This role rewards people who are naturally competitive, persistent without being pushy, and comfortable with the uncertainty of commission-based income.",
        links: [],
      },
      {
        heading: "How Acquisitions Managers Are Compensated",
        content: "Most acquisitions managers in wholesaling businesses are paid on a commission-per-deal basis, with a small base salary as a draw. Common structures: $500–$2,000 per contract signed that eventually closes, or a percentage of the assignment fee (5–15%). Full-time acquisitions managers doing volume in active markets can earn $70,000–$150,000+ annually. The role requires thick skin — many seller appointments don't convert, and deals fall through after being signed. Top performers distinguish themselves by conversion rate (the percentage of appointments that result in signed contracts) and by consistent deal quality.",
        links: [],
      },
      {
        heading: "Building vs. Hiring an Acquisitions Function",
        content: "Many real estate investors start by doing acquisitions themselves, which is the best way to learn the fundamentals of deal analysis, seller conversations, and negotiation. As volume grows, hiring a dedicated acquisitions manager frees the investor to work on the business rather than in it. When hiring, look for candidates with sales backgrounds (not necessarily real estate), who can demonstrate a track record of hitting metrics, and who aren't deterred by rejection. The first 60–90 days of an acquisitions hire should include shadowing existing appointments, structured roleplay, and a clear ramp-up expectation for deal volume.",
        links: [],
      },
    ]}
    faqs={[
      {
        q: "Do acquisitions managers need a real estate license?",
        a: "In most states, no — acquisitions managers in a wholesaling operation are negotiating contracts on behalf of a principal buyer, which doesn't require a license. However, if the acquisitions manager is being paid per deal and functioning in ways that resemble a licensed real estate activity (representing buyers or sellers for compensation in a way that goes beyond assigning equitable interest), some states may interpret that as requiring a license. Consult a local real estate attorney for your specific business structure.",
      },
      {
        q: "What's the difference between an acquisitions manager and a buyer's agent?",
        a: "A buyer's agent is a licensed real estate professional representing someone buying a home — typically at or near market value. An acquisitions manager in an investment operation is focused specifically on off-market, below-market purchases of distressed properties. They're doing deal analysis, not representing retail buyers. The skill sets have some overlap (negotiation, property evaluation) but the deal flow, offer methodology, and seller relationships are entirely different.",
      },
      {
        q: "How many deals per month should a good acquisitions manager close?",
        a: "In a wholesaling operation with consistent marketing, 2–4 contracts per month per acquisitions manager is a reasonable benchmark. Top performers in active markets with strong marketing can do more. The conversion rate from appointment to contract typically ranges from 20–40% — meaning an acquisitions manager needs to go on 5–15 appointments to close 2–4 deals. Deal quality matters as much as volume: signing deals that can't be profitably assigned creates as many problems as not signing enough.",
      },
    ]}
  />
);

export default AcquisitionsManagerRealEstate;
