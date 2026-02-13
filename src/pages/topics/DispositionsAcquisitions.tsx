import TopicPage from "@/components/TopicPage";

const DispositionsAcquisitions = () => (
  <TopicPage
    title="Dispositions & Acquisitions in Real Estate Wholesaling"
    metaDesc="Learn about dispositions and acquisitions in real estate wholesaling. Build a buyers list, match deals with investors, and close more wholesale transactions."
    parentLabel="Real Estate Wholesaling"
    parentHref="/real-estate-wholesaling"
    intro="In real estate wholesaling, acquisitions is the process of finding and locking up deals, while dispositions is the process of selling those deals to end buyers. Mastering both sides of the equation is essential for running a profitable wholesaling operation."
    sections={[
      {
        heading: "The Acquisitions Side: Locking Up Deals",
        content: "Acquisitions managers find motivated sellers, negotiate purchase prices, and get properties under contract. The goal is to secure deals at 60-70% of ARV (after repair value) minus estimated repairs. Strong acquisitions require excellent communication skills, market knowledge, and the ability to build rapport with distressed sellers quickly.",
        links: [
          { label: "PropStream – Comp Analysis", url: "https://www.propstream.com/" },
          { label: "Privy – Investment Comps", url: "https://www.privy.pro/" },
        ],
      },
      {
        heading: "The Dispositions Side: Selling to Buyers",
        content: "Dispositions managers match contracted deals with cash buyers from the company's buyers list. They market properties to investors, coordinate showings, negotiate assignment fees, and ensure deals close on time. Speed matters — the faster you can move a deal, the more reliable you become in the investor community.",
        links: [
          { label: "Connected Investors – Buyer Network", url: "https://connectedinvestors.com/" },
        ],
      },
      {
        heading: "Building a Cash Buyers List",
        content: "Your buyers list is your most valuable asset in wholesaling. Find cash buyers at local REIA meetings, on Craigslist, through county records (search for recent cash purchases), Facebook groups, and investor networking events. Organize your list by buy criteria — location, property type, price range, and rehab level.",
        links: [
          { label: "National REIA", url: "https://www.nationalreia.org/" },
          { label: "Facebook RE Investor Groups", url: "https://www.facebook.com/groups/" },
          { label: "County Property Records", url: "https://www.publicrecords.netronline.com/" },
        ],
      },
      {
        heading: "CRM Tools for Managing Pipeline",
        content: "Use a CRM system to track your acquisitions pipeline (leads, follow-ups, contracts) and your dispositions pipeline (buyer preferences, deal blasts, closing status). Automating follow-up sequences and deal notifications ensures nothing falls through the cracks as you scale.",
        links: [
          { label: "REISift CRM", url: "https://www.reisift.io/" },
          { label: "InvestorFuse", url: "https://www.investorfuse.com/" },
          { label: "Podio – Custom CRM", url: "https://podio.com/" },
        ],
      },
    ]}
    faqs={[
      { q: "What is the difference between acquisitions and dispositions?", a: "Acquisitions focuses on finding and contracting deals with sellers. Dispositions focuses on selling those contracted deals to cash buyers. Together they form the two sides of the wholesaling business." },
      { q: "How do I build a buyers list from scratch?", a: "Start by attending local REIA meetings, searching county records for recent cash purchases, posting in Facebook investor groups, and networking with other wholesalers. Aim for 50-100 active buyers before scaling your acquisitions." },
      { q: "How fast should I be able to sell a wholesale deal?", a: "A well-priced deal with an active buyers list should be assigned within 3-7 days. If deals are sitting for more than 2 weeks, you may be pricing too high or targeting the wrong buyers." },
    ]}
  />
);

export default DispositionsAcquisitions;
