import TopicPage from "@/components/TopicPage";

const DispositionsAcquisitions = () => (
  <TopicPage
    title="Dispositions & Acquisitions in Wholesaling: Running Both Sides of the Business"
    metaDesc="How acquisitions and dispositions work in real estate wholesaling — finding and contracting deals, building a buyers list, marketing to investors, and closing consistently."
    slug="/real-estate-wholesaling/dispositions-acquisitions"
    datePublished="2026-02-13"
    parentLabel="Real Estate Wholesaling"
    parentHref="/real-estate-wholesaling"
    intro="A wholesale business has two distinct functions: acquisitions (finding deals and getting properties under contract with motivated sellers) and dispositions (finding buyers and selling those contracts to investors). In early-stage wholesaling, one person typically does both. As the business grows, most operators separate these into distinct roles. Understanding both sides — and how they need to work together — is what separates wholesalers who close one deal from those who build a real operation."
    sections={[
      {
        heading: "Acquisitions: Locking Up Deals",
        content: "The acquisitions side is all about finding motivated sellers and negotiating purchase contracts at prices that create enough spread for everyone to profit. This requires two key skills: the ability to accurately estimate a property's after-repair value (ARV) and renovation costs, and the ability to build enough rapport with a distressed seller to have an honest conversation about their situation and timeline. Acquisitions is a numbers game — you'll talk to many sellers who aren't motivated enough, priced too high, or have title complications that make the deal unworkable. The best acquisitions people are organized, consistent, and genuinely good at listening to sellers rather than pushing a script.",
        links: [
          { label: "PropStream — Comp Analysis Tool", url: "https://www.propstream.com/" },
          { label: "Privy — Investment Comp Data", url: "https://www.privy.pro/" },
        ],
      },
      {
        heading: "Dispositions: Moving Deals to Buyers",
        content: "Once a property is under contract, you have a limited window — usually 30–45 days — to find a buyer and get the deal closed. Dispositions managers market contracted properties to the cash buyers list, coordinate walkthroughs, field offers, negotiate assignment fees, and manage the closing timeline. Speed matters: the faster and more reliably you move deals, the better your reputation becomes with the investor community. Cash buyers talk. A disposition person who consistently delivers clean, accurately described deals at fair prices will build a buyers list that practically sells itself. One who overstates ARV or leaves deals sitting gets ignored.",
        links: [
          { label: "Connected Investors — Cash Buyer Network", url: "https://connectedinvestors.com/" },
        ],
      },
      {
        heading: "Building a Cash Buyers List from Scratch",
        content: "Your buyers list is an asset you build over time and it becomes more valuable with each deal you close. Start by pulling county property records and searching for recent cash purchases in your target zip codes — these are investors actively buying in your market. Local REIA (Real Estate Investor Association) meetings are worth attending specifically to meet buyers and understand their criteria. Facebook groups for local real estate investors, Craigslist investor ads, and connecting with other wholesalers who are already working the area are all legitimate sources. When you add a buyer, record their criteria: what neighborhoods they buy in, what price range, how much rehab they're comfortable with. That information makes every future deal faster to move.",
        links: [
          { label: "National REIA — Find Local Groups", url: "https://www.nationalreia.org/" },
          { label: "Facebook Real Estate Investor Groups", url: "https://www.facebook.com/groups/" },
          { label: "NETRONLINE — County Property Records", url: "https://www.publicrecords.netronline.com/" },
        ],
      },
      {
        heading: "Managing Pipeline with a CRM",
        content: "Running acquisitions and dispositions without a CRM is like running a sales operation on sticky notes — eventually something critical falls through. A CRM tracks every lead through the acquisitions pipeline (initial contact, follow-up, offer, contract) and every deal through the disposition process (marketing, showings, buyer offer, assignment agreement, closing). More importantly, it runs automated follow-up sequences so that leads you couldn't convert today get consistent touches over weeks and months. Many deals close on the 5th or 8th follow-up, not the first. The CRM is what makes that follow-up happen without relying on memory.",
        links: [
          { label: "REISift — Investor CRM", url: "https://www.reisift.io/" },
          { label: "InvestorFuse — Wholesaling CRM", url: "https://www.investorfuse.com/" },
          { label: "Podio — Customizable CRM", url: "https://podio.com/" },
        ],
      },
    ]}
    faqs={[
      {
        q: "What's the actual difference between acquisitions and dispositions?",
        a: "Acquisitions is the seller-facing side: finding motivated sellers, evaluating properties, making offers, and getting purchase contracts signed. Dispositions is the buyer-facing side: marketing contracted deals to investors, managing showings, negotiating assignment fees, and closing. Both sides have to work well for a wholesale business to be profitable — most failures happen because one side is strong and the other is neglected.",
      },
      {
        q: "How do I build a buyers list if I'm just starting out?",
        a: "Pull county records for recent cash purchases in your target area — these are your buyers. Attend local REIA meetings and introduce yourself as a wholesaler looking for buyers. Post in local Facebook real estate groups. Connect with other wholesalers in your market — they may already have buyers you can co-wholesale with. Aim to understand 20–30 active buyers' criteria before you start heavily marketing your first deals. Having qualified buyers before you have deals makes everything move faster.",
      },
      {
        q: "How fast should I be able to sell a wholesale deal?",
        a: "A well-priced deal with accurate numbers and an active buyers list should be under contract with a buyer within 3–7 days of being marketed. If a deal sits for more than 10–14 days without a taker, something is off — either the price is too high relative to what buyers think the ARV is, the rehab estimate is off, there's a title or structural issue buyers are wary of, or you're not reaching the right buyers. Get feedback from buyers who passed and use it to diagnose which of those is the issue.",
      },
    ]}
  />
);

export default DispositionsAcquisitions;
