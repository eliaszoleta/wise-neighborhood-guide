import TopicPage from "@/components/TopicPage";

const PrivateMoneyLender = () => (
  <TopicPage
    title="Private Money Lenders in Real Estate: How They Work and How to Find One"
    metaDesc="Private money lenders are individuals who lend their own capital to real estate investors. Learn how private money differs from hard money, how deals are structured, and how to find lenders."
    parentLabel="Blog"
    parentHref="/blog"
    intro="Private money lenders are individuals — not companies — who lend their own capital directly to real estate investors. This could be a retired professional, a high-net-worth neighbor, a former colleague, or an experienced investor who's moved from active investing to passive lending. Private money is often cheaper and more flexible than institutional hard money, but it requires building real relationships. Many successful real estate investors say their private money network is their most valuable asset."
    sections={[
      {
        heading: "Private Money vs. Hard Money: The Key Differences",
        content: "Hard money comes from institutional lenders — private lending companies with set programs, standardized rates, and formal processes. Private money comes from individuals lending their own savings or IRA funds. Because private lenders are people, not institutions, the terms are negotiable. A private lender might charge 6–10% instead of the 12–15% typical of hard money companies. They might offer interest-only payments, deferred interest, or more flexible repayment schedules. They might not charge origination points at all. The tradeoff: relationships take time to build, private lenders can be slower to commit, and deals sometimes fall apart when a private lender gets cold feet at closing.",
        links: [],
      },
      {
        heading: "Who Are Private Money Lenders?",
        content: "They're almost always people who have capital they want to put to work but don't want the responsibility of actively managing real estate. Common profiles include retirees with IRAs or savings earning low returns in the market, professionals in their 50s–60s who've accumulated capital and want secured, passive income, other real estate investors who've 'retired' from active deals and now lend, and business owners or high earners who want diversification from stocks. The key insight is that private lenders benefit from this relationship as much as you do. If you can offer a 7–9% secured return on a first-position lien — better than their savings account or bond portfolio — that's genuinely valuable to them.",
        links: [],
      },
      {
        heading: "How Private Money Deals Are Structured",
        content: "Most private money deals involve the lender funding the purchase (and sometimes rehab) in exchange for a promissory note and a recorded deed of trust or mortgage — meaning they hold a lien on the property, secured by the real estate. Terms are negotiated, but common structures include: 6–18 month term with interest-only payments, balloon payment at maturity, 7–10% annual interest rate, no points. For IRA lenders, the funds come from a self-directed IRA through a custodian like Equity Trust or Advanta IRA. The investor receives interest income inside the IRA, tax-advantaged. Always use a real estate attorney to draft the promissory note and deed of trust — don't use templates from the internet for real lending transactions.",
        links: [],
      },
      {
        heading: "How to Find Private Money Lenders",
        content: "The fastest path to private money is through existing relationships. Start by letting people in your network know what you do: colleagues, neighbors, accountants, attorneys, family friends. You're not asking for money — you're sharing what you invest in and how it works. Many investors find their first private lender is someone they've known for years who didn't realize this type of lending existed. Beyond your immediate network: local real estate investor associations (REIAs) are full of both borrowers and lenders, real estate attorney networks, and financial advisors whose clients are looking for yield. Build credibility first by demonstrating that you know what you're doing — track record, deals you've analyzed, your process. No one lends $150,000 to someone they just met who pitched them in an elevator.",
        links: [],
      },
    ]}
    faqs={[
      {
        q: "Is private money lending legal?",
        a: "Yes. Private money lending between individuals is legal in all 50 states. However, there are securities law implications if you're raising money from multiple lenders on a single deal or operating what amounts to a pooled investment fund — that area requires securities attorney guidance. For direct bilateral lending (one lender, one borrower, one property), the main legal requirements are proper promissory note and lien documentation, state usury law compliance (check your state's interest rate caps), and proper disclosure of terms.",
      },
      {
        q: "What rate should I offer a private money lender?",
        a: "Typical private money rates are 6–10% annually, which should be competitive relative to what private lenders can earn on bonds or savings accounts. The rate you offer should reflect the risk: a short-term first-position lien at 65% LTV on a renovated property is very safe; a second-position lien or a deal in a thin market warrants a higher rate. Match the rate to the risk level, and be honest with lenders about what the risks are.",
      },
      {
        q: "Can I use private money for a primary residence purchase?",
        a: "If you're buying a home for yourself rather than as an investment, private money lending falls under different regulations — specifically, most private lenders are not licensed mortgage originators, which is required for owner-occupied residential lending under the Dodd-Frank Act. Private money works cleanly for investment properties. For owner-occupied transactions, you generally need to work with a licensed lender.",
      },
    ]}
  />
);

export default PrivateMoneyLender;
