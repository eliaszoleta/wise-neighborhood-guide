import TopicPage from "@/components/TopicPage";

const HardMoneyLender = () => (
  <TopicPage
    title="What Is a Hard Money Lender in Real Estate? Complete Beginner Guide"
    metaDesc="Hard money loans are short-term, asset-based financing used by real estate investors for fix-and-flip and BRRRR deals. Here's how they work, what they cost, and when to use one."
    parentLabel="Blog"
    parentHref="/blog"
    intro="Hard money lenders are private lenders — usually companies or individuals — that make short-term loans secured by real estate. Unlike a bank, they're not primarily evaluating your income, credit score, or employment history. They're evaluating the property: what it's worth today, what it will be worth after renovation, and whether the deal leaves enough margin to protect their loan if something goes wrong. For real estate investors doing fix-and-flip or BRRRR deals, hard money is often the only viable financing option for distressed properties that don't qualify for conventional loans."
    sections={[
      {
        heading: "How Hard Money Loans Work",
        content: "Hard money loans are structured around two key numbers: the loan-to-value (LTV) on the current as-is value, and the loan-to-ARV (after-repair value) on the projected finished value. A typical hard money lender will lend 65–75% of ARV, which means if a property's ARV is $200,000, they'll loan up to $130,000–$150,000 total — covering both the purchase and some or all of the rehab budget. Loan terms are short, typically 6–24 months. Interest rates are high relative to conventional mortgages: 10–15% annually is common, plus origination fees of 2–4 points (each point is 1% of the loan amount). So on a $150,000 loan, you might pay $4,500–$6,000 upfront in points plus interest during the hold period.",
        links: [],
      },
      {
        heading: "Hard Money vs. Conventional Financing",
        content: "The fundamental difference is speed and qualification criteria. Conventional loans take 30–45 days and require income verification, credit checks, debt-to-income calculations, and property condition that meets lender standards. Most distressed properties fail conventional underwriting because of condition. Hard money lenders can close in 7–14 days and don't care that the property has no working kitchen or a failing roof — because they're lending against what it will be worth after renovation, not what it looks like today. The tradeoff is cost. Hard money is significantly more expensive than conventional financing. It's a short-term tool for active investors who plan to either sell (flip) or refinance (BRRRR) within months — not a long-term hold strategy.",
        links: [],
      },
      {
        heading: "When Hard Money Makes Sense",
        content: "Hard money is the right tool when: the property is too distressed to qualify for conventional financing, you need to close quickly to win a competitive deal, you're buying at auction where financing contingencies aren't accepted, or you're executing a BRRRR strategy and plan to refinance into a conventional loan after rehab and seasoning. It doesn't make sense for turnkey or lightly distressed properties that qualify for conventional loans — the added cost is unnecessary. It also doesn't make sense for long-term holds unless you can't secure conventional financing post-rehab.",
        links: [],
      },
      {
        heading: "How to Find and Evaluate Hard Money Lenders",
        content: "The best hard money lenders come through referrals from other investors in your local market. Local real estate investor associations (REIAs) are the fastest way to get vetted recommendations. When evaluating lenders, ask about their LTV/LTC (loan-to-cost) ratios, points and interest rate, draw schedule for rehab funds, prepayment penalties, and how quickly they can close. Be cautious of any lender who charges large upfront fees before providing a term sheet, or who is vague about their draw process. Also verify they actually lend in your state and on your property type — some hard money lenders specialize in residential only, others do commercial.",
        links: [],
      },
    ]}
    faqs={[
      {
        q: "What credit score do you need for a hard money loan?",
        a: "Many hard money lenders have no minimum credit score requirement, or a very low threshold (600–620). They're underwriting the deal and the collateral, not your personal credit profile. Some lenders do pull credit as a background check and will decline at extremely low scores or if you have recent bankruptcies or foreclosures, but a good deal can often overcome a mediocre credit score with a hard money lender in a way that's impossible with a conventional bank.",
      },
      {
        q: "How much do hard money loans cost?",
        a: "Expect to pay 2–4 origination points upfront and 10–15% annual interest during the loan term. On a $150,000 loan held for 9 months, that's roughly $3,000–$6,000 in origination fees plus $11,250–$16,875 in interest — $14,000–$23,000 in total financing cost. This needs to be built into your deal analysis from the start. If your projected profit doesn't comfortably absorb these costs, the deal may not pencil.",
      },
      {
        q: "Are hard money lenders regulated?",
        a: "Regulation varies by state. Some states treat hard money lenders as mortgage lenders and require licensing; others have minimal regulation for investor-to-investor lending. As a borrower, you have less consumer protection with a hard money lender than with a bank — the documents are often shorter and terms can be aggressive. Always have a real estate attorney review the loan documents before signing.",
      },
    ]}
  />
);

export default HardMoneyLender;
