import TopicPage from "@/components/TopicPage";

const DispositionsAcquisitions = () => (
  <TopicPage
    title="Dispositions & Acquisitions in Wholesaling: Running Both Sides of the Business"
    metaDesc="How acquisitions and dispositions work in real estate wholesaling — finding and contracting deals, building a cash buyers list, marketing to investors, managing pipeline, and closing consistently."
    slug="/real-estate-wholesaling/dispositions-acquisitions"
    datePublished="2026-02-13"
    dateModified="2026-03-17"
    parentLabel="Real Estate Wholesaling"
    parentHref="/real-estate-wholesaling"
    intro="A wholesale business has two distinct functions: acquisitions (finding deals and getting properties under contract with motivated sellers) and dispositions (finding buyers and selling those contracts to investors before the closing deadline). In early-stage wholesaling, one person typically handles both. As the business grows, most operators separate these into distinct roles with separate accountability. Understanding both functions — and how they must work together — is what separates wholesalers who close occasionally from those who build a consistent, scalable operation."
    sections={[
      {
        heading: "Acquisitions: Locking Up Deals from Motivated Sellers",
        content: "The acquisitions function is all about finding motivated sellers and negotiating purchase contracts at prices that create enough spread for everyone to profit. This requires two core skills: the ability to accurately estimate a property's after-repair value (ARV) and renovation costs, and the ability to build rapport with a distressed seller and have an honest conversation about their situation and timeline. Acquisitions is a numbers game — you'll evaluate many sellers who aren't motivated enough, priced too high, or have title complications that make the deal unworkable. The best acquisitions people are organized and consistent in their follow-up (most deals close on the 3rd–8th contact, not the first), genuine in their conversations with sellers rather than script-reading, and disciplined about not overpaying just to get a deal done.",
        links: [
          { label: "PropStream — Comp Analysis and ARV Tool", url: "https://www.propstream.com/" },
          { label: "Privy — Investment Comparable Data", url: "https://www.privy.pro/" },
        ],
      },
      {
        heading: "Dispositions: Moving Deals to Cash Buyers",
        content: "Once a property is under contract, you have a limited window — typically 30–45 days — to find a qualified buyer and coordinate closing. The disposition manager markets contracted properties to the cash buyers list, coordinates walkthroughs, fields and negotiates buyer offers, finalizes assignment agreements, and manages the closing timeline with the title company. Speed and accuracy are the core competencies in dispositions: the faster and more reliably you move deals, the better your reputation in the investor community. Cash buyers talk. A disposition person who consistently delivers clean, accurately described deals at honest prices builds a buyers list that practically self-generates. One who overstates ARV, inflates scope estimates, or leaves deals sitting gets ignored when the next deal hits.",
        links: [
          { label: "Connected Investors — Cash Buyer Network", url: "https://connectedinvestors.com/" },
        ],
      },
      {
        heading: "Building a Cash Buyers List from Zero",
        content: "Your buyers list is one of your most valuable business assets and gets more valuable with each deal you close. Start by pulling county property records for the past 12 months and filtering for cash transactions in your target zip codes — these are investors actively buying in your market. Contact them directly to introduce yourself and understand their buying criteria. Local REIA (Real Estate Investor Association) meetings are worth attending specifically to meet buyers face to face. Facebook groups for local real estate investors, Craigslist investor ads, and networking with other wholesalers who are already working the market are additional sources. When you add a buyer, document their criteria in your CRM: neighborhoods, price range, condition tolerance, rehab appetite (turnkey vs. full gut), and whether they're buy-and-hold or fix-and-flip. That profile makes every future deal faster to match and move.",
        links: [
          { label: "National REIA — Find Local Groups", url: "https://www.nationalreia.org/" },
          { label: "NETRONLINE — County Property Records", url: "https://www.publicrecords.netronline.com/" },
          { label: "Facebook Real Estate Investor Groups", url: "https://www.facebook.com/groups/" },
        ],
      },
      {
        heading: "How to Price and Market a Wholesale Deal",
        content: "When marketing a contracted deal to buyers, lead with the numbers: the purchase price (what the buyer will pay including your fee), estimated ARV based on specific comparable sales, estimated rehab range, key property details (beds/baths, sqft, lot size, year built), and what's known about condition. Never inflate ARV or understate repairs — experienced buyers will catch it, will not close, and will not trust your future deals. A deal marketed honestly at fair pricing will close faster than a deal marketed with optimistic numbers that falls apart after due diligence. Your fee should be priced so the deal still works for a cash buyer targeting 65–70% of ARV minus repairs as their maximum all-in acquisition cost.",
        links: [],
      },
      {
        heading: "Managing Both Functions with a CRM",
        content: "Running acquisitions and dispositions without a CRM is operationally unsustainable at any volume. A CRM tracks every motivated seller lead through the acquisitions pipeline (initial contact, follow-up, offer, contract) and every contracted deal through the disposition process (marketing, showings, buyer offer, assignment, closing). More importantly, it automates the follow-up sequences so that leads you couldn't convert today get consistent touches over weeks and months — the 5th or 8th follow-up is often when sellers are finally ready. Most deals close on follow-up, not first contact. The CRM makes that follow-up happen reliably, regardless of how busy the active pipeline is.",
        links: [
          { label: "REISift — Investor and Wholesaling CRM", url: "https://www.reisift.io/" },
          { label: "InvestorFuse — Wholesaling CRM", url: "https://www.investorfuse.com/" },
          { label: "Podio — Customizable CRM Platform", url: "https://podio.com/" },
        ],
      },
    ]}
    faqs={[
      {
        q: "What's the actual difference between acquisitions and dispositions in wholesaling?",
        a: "Acquisitions is the seller-facing side: finding motivated sellers, evaluating properties, making offers, and getting purchase contracts signed. Dispositions is the buyer-facing side: marketing contracted deals to investors, managing walkthroughs and showings, negotiating assignment fees, and closing. Both sides have to work well for a wholesale business to be profitable — most failures happen because one side is strong and the other is neglected.",
      },
      {
        q: "How do I build a buyers list if I'm just starting out?",
        a: "Pull county records for recent cash purchases in your target area — these are your buyers. Attend local REIA meetings and introduce yourself as a wholesaler looking for cash buyers to send deals to. Post in local real estate Facebook groups. Connect with other wholesalers in your market — they may have buyers willing to co-wholesale your first deal. Aim to document 20–30 active buyers with clear criteria before you start aggressively marketing your first deals. Having qualified buyers before you have deals makes everything move faster.",
      },
      {
        q: "How fast should I be able to sell a wholesale deal once it's under contract?",
        a: "A well-priced deal with accurate numbers and an active buyers list should be under contract with a buyer within 3–7 days of being marketed. If a deal sits for more than 10–14 days without a taker, investigate: either the price is too high relative to what buyers think the ARV is, the rehab estimate is off, there's a title or structural issue buyers are wary of, or you're not reaching the right buyers. Proactively call buyers for feedback — they'll usually tell you exactly what's keeping them from making an offer.",
      },
      {
        q: "When should a wholesaling business hire an acquisitions or dispositions person?",
        a: "Most wholesalers can close 2–3 deals per month solo. Above that, the time demands of managing both seller conversations and buyer marketing simultaneously start constraining growth. The typical scaling sequence: hire a cold caller or VA first to generate more inbound leads, then hire a dedicated acquisitions person to handle seller appointments and negotiations, then a dedicated dispositions manager as deal volume increases. Most businesses hire acquisitions before dispositions because seller conversion is where most of the work and skill concentration lives.",
      },
      {
        q: "How do you evaluate a potential cash buyer before adding them to your list?",
        a: "Ask for proof of funds — a recent bank statement, a hard money pre-approval, or a line of credit letter. Real buyers provide this without hesitation. Search county records for their name or LLC to verify recent closed purchases. A buyer who has closed 10 transactions in your county in the past 12 months is clearly active and credible. A buyer who can't produce proof of funds and has no verifiable closed deals is high-risk for a failed closing — which will have cost you your deal.",
      },
    ]}
  />
);

export default DispositionsAcquisitions;
