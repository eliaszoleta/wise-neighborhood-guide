import TopicPage from "@/components/TopicPage";

const HowWholesalingWorks = () => (
  <TopicPage
    title="How Real Estate Wholesaling Works: The Honest Step-by-Step Guide"
    metaDesc="A practical explanation of how real estate wholesaling works — the full process from finding distressed properties to collecting your assignment fee, including what actually goes wrong."
    parentLabel="Real Estate Wholesaling"
    parentHref="/real-estate-wholesaling"
    intro="Real estate wholesaling is the business of finding properties priced significantly below market value, getting them under contract, and selling that contract to an end buyer — usually a fix-and-flip investor or landlord — before ever closing on the property yourself. You never own the house. Your profit is the spread between what the seller agreed to and what the end buyer pays. It sounds simple, but each step requires real skill and consistent effort to execute reliably. Here's what the process actually looks like."
    sections={[
      {
        heading: "The Wholesale Process, Step by Step",
        content: "Step 1 — Find a motivated seller with a distressed or underpriced property. 'Motivated' means they have a genuine reason to sell below market: divorce, inherited property they don't want, financial hardship, tax liens, or a property in such rough condition it won't qualify for conventional financing. Step 2 — Analyze the after-repair value (ARV) and estimate renovation costs to set your maximum allowable offer. Most wholesalers use 70% of ARV minus repairs as the ceiling, leaving room for their fee and the buyer's profit. Step 3 — Negotiate a contract price that leaves enough spread for both your assignment fee and the end buyer's rehab costs and margin. Step 4 — Sign a purchase agreement with an assignment clause. Step 5 — Market the deal to your buyers list and assign the contract for your fee. Step 6 — The buyer closes with the seller. The cycle typically takes 2–6 weeks.",
        links: [
          { label: "BiggerPockets: Wholesaling 101", url: "https://www.biggerpockets.com/guides/wholesaling" },
        ],
      },
      {
        heading: "Is Wholesaling Legal?",
        content: "Wholesaling is legal in all 50 states, but the legal environment around it has gotten more complicated over the past few years. The concern regulators raise: if you're marketing a property you don't own to the general public, some states argue you're performing a real estate act that requires a license. In practice, this means you should be marketing your equitable interest in the contract — not the property itself — and clearly disclosing that you're assigning your contract position, not selling the home as an owner or agent. Illinois has passed specific laws around wholesale marketing practices. Several other states have increased scrutiny. Work with a local real estate attorney familiar with investor transactions before you send out your first deal.",
        links: [
          { label: "BiggerPockets: Is Wholesaling Legal?", url: "https://www.biggerpockets.com/blog/is-wholesaling-real-estate-legal" },
          { label: "Find a Real Estate Attorney via Avvo", url: "https://www.avvo.com/real-estate-lawyer" },
        ],
      },
      {
        heading: "How Much Do Wholesalers Actually Make?",
        content: "Assignment fees on residential deals typically range from $5,000 to $20,000, with some deals in high-priced markets or on larger properties running higher. Your profit depends on two things: how far below ARV you can negotiate the purchase price, and how strong buyer demand is for that type of property in that area. Wholesaling is a volume business — most full-time wholesalers need to close 2–4 deals per month to generate a sustainable income. New wholesalers should realistically expect to spend 2–4 months building their marketing pipeline before a first deal closes. The investors who succeed are those who treat it like a business from day one, not a side hustle they dip in and out of.",
        links: [],
      },
      {
        heading: "What You Actually Need to Get Started",
        content: "The real barrier to entry isn't capital to buy properties — it's marketing budget to generate seller leads. You'll need money for direct mail, cold calling lists and dialing tools, or digital ads. Beyond marketing, you need: a CRM to track leads and follow-up sequences, skip tracing tools to find property owner contact information, contract templates reviewed by a local attorney, and a working knowledge of how to estimate ARV and renovation costs. The wholesalers who fail almost always underinvested in consistent lead generation — they tried to find motivated sellers without building a real, repeatable system to surface them.",
        links: [
          { label: "REISift — Wholesaling CRM", url: "https://www.reisift.io/" },
          { label: "BatchLeads — Skip Tracing", url: "https://batchleads.io/" },
          { label: "DealMachine — Driving for Dollars App", url: "https://www.dealmachine.com/" },
        ],
      },
    ]}
    faqs={[
      {
        q: "Do I need money to start wholesaling real estate?",
        a: "You need marketing money more than purchase capital. Main expenses include lead generation (direct mail, calling lists, digital ads), skip tracing tools, CRM software, and earnest money deposits on contracts — typically $100–$1,000. You don't need to buy the property or get a loan. Budget $500–$2,000/month in marketing costs to generate enough lead volume to close deals consistently.",
      },
      {
        q: "Do I need a real estate license to wholesale?",
        a: "In most states, no — but the rules are evolving and vary by state. The safest practice is to always be transparent that you're assigning contract rights, not acting as a licensed agent. Some states have specific disclosure requirements. A local real estate attorney who works with investors can give you a current, accurate answer for your specific market — that conversation is worth having before you sign your first contract.",
      },
      {
        q: "How long does a wholesale deal take from start to finish?",
        a: "From signed purchase agreement to receiving your assignment fee: 2–6 weeks. Finding the deal in the first place is a separate timeline — most wholesalers spend months building their marketing system before their first signed contract. Factor both when setting realistic expectations for how long it takes to start generating income from wholesaling.",
      },
    ]}
  />
);

export default HowWholesalingWorks;
