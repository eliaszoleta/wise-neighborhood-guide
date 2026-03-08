import TopicPage from "@/components/TopicPage";

const RealEstateAgentBroker = () => (
  <TopicPage
    title="Real Estate Agent vs. Realtor vs. Broker: Key Differences Explained"
    metaDesc="These three terms get used interchangeably, but they mean different things. Here's the actual distinction between a real estate agent, a Realtor, and a real estate broker."
    parentLabel="Blog"
    parentHref="/blog"
    intro="Most people use 'agent,' 'Realtor,' and 'broker' interchangeably, but they're not the same thing. Understanding the distinctions matters if you're buying or selling a home, if you're considering a real estate career, or if you're building an investor team and need to know who can legally do what."
    sections={[
      {
        heading: "What Is a Real Estate Agent?",
        content: "A real estate agent is anyone who has passed their state's real estate licensing exam and holds an active license. The license allows them to represent buyers and sellers in real estate transactions. However, agents cannot operate independently — they must work under the supervision of a licensed real estate broker. All real estate agents are licensed, but not all agents are Realtors, and no agent can legally work without a supervising broker. Agents earn commissions, typically 2.5–3% of the sale price on each side of a transaction, paid at closing. In recent years, commission structures have become more variable following changes in how buyer's agent compensation is disclosed and negotiated.",
        links: [],
      },
      {
        heading: "What Is a Realtor?",
        content: "A Realtor is a real estate agent (or broker) who is a member of the National Association of Realtors (NAR). Membership requires paying dues and agreeing to NAR's Code of Ethics, which includes standards around client representation, disclosure, and professional conduct. Not every licensed agent is a Realtor — membership is voluntary. The term 'Realtor' is a trademarked designation belonging to NAR. You'll often see it capitalized for this reason. In practical terms, most consumers don't distinguish between an agent and a Realtor, but the Code of Ethics theoretically provides an additional professional standard. If a Realtor violates the Code of Ethics, they can be disciplined through NAR or local association processes.",
        links: [],
      },
      {
        heading: "What Is a Real Estate Broker?",
        content: "A real estate broker has completed additional education beyond the agent license requirement and passed a broker licensing exam. Brokers can own and operate their own real estate business, supervise agents, and hold client funds in a trust account. There are two types of brokers in practice: a managing broker or designated broker runs an office and is responsible for the agents working there. An associate broker has earned the broker license but chooses to work under another broker rather than open their own firm. The additional licensing and responsibility of a broker typically comes with higher income potential but also more regulatory compliance obligations — especially around handling escrow funds.",
        links: [],
      },
      {
        heading: "Why the Distinction Matters",
        content: "For buyers and sellers: you're almost always working with an agent who is supervised by a broker, even if you never meet the broker directly. The broker is ultimately responsible for their agents' conduct. For investors: knowing whether you need an agent or a broker matters when building your team. If you're submitting many offers, an agent with strong investment experience and access to MLS is what you want. For career consideration: becoming a broker typically requires 2–4 years of active agent experience plus additional coursework. The broker license gives you more autonomy and the ability to run your own shop, but it comes with compliance overhead that agents don't carry.",
        links: [],
      },
    ]}
    faqs={[
      {
        q: "Do I need a Realtor to buy or sell a home?",
        a: "No — you can buy or sell without an agent. FSBO (for sale by owner) is legal in all states. However, for most people, working with an experienced agent saves time and often results in a better price or terms. For sellers, the listing agent markets the property, negotiates on your behalf, and handles the complex paperwork. For buyers, an agent provides MLS access, local market knowledge, and transaction management. The question of whether it's worth the commission depends on your experience and how complex the transaction is.",
      },
      {
        q: "What's the difference between a buyer's agent and a listing agent?",
        a: "The listing agent (or seller's agent) represents the seller and has a fiduciary duty to get the seller the best price and terms. The buyer's agent represents the buyer and is supposed to act in the buyer's interest. Both are often Realtors and both earn commissions, but their loyalty is to opposite parties. Dual agency — where one agent represents both sides — creates an obvious conflict of interest and is illegal in some states.",
      },
      {
        q: "How much do real estate agents and brokers make?",
        a: "The median income for real estate agents in the U.S. is around $50,000–$60,000/year, but the distribution is wide. Top producers in high-cost markets earn several hundred thousand dollars annually; many part-time agents earn under $30,000. Income is entirely commission-based and directly tied to transaction volume. Brokers who own offices earn additional income from the split they take on their agents' deals. Starting out, it typically takes 6–12 months to close a first deal.",
      },
    ]}
  />
);

export default RealEstateAgentBroker;
