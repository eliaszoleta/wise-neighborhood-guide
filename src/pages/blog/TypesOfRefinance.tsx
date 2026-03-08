import TopicPage from "@/components/TopicPage";

const TypesOfRefinance = () => (
  <TopicPage
    title="Types of Mortgage Refinance: Rate-and-Term, Cash-Out, Streamline & More"
    metaDesc="Not all refinances are the same. Rate-and-term, cash-out, streamline, and DSCR refinances each serve a different purpose. Here's when to use each one."
    parentLabel="Blog"
    parentHref="/blog"
    intro="Refinancing means replacing an existing mortgage with a new one. Why would you do that? To lower your interest rate, change your loan term, pull out equity, or transition from short-term bridge financing to long-term debt. The type of refinance you use depends on what problem you're solving. Here's a breakdown of the main options and when each makes sense."
    sections={[
      {
        heading: "Rate-and-Term Refinance",
        content: "A rate-and-term refinance changes your interest rate, your loan term, or both — without significantly changing the loan balance. If you bought a home at 7.5% and rates drop to 5.5%, a rate-and-term refi captures that savings. The only cash involved at closing is covering closing costs. Typical reasons to do a rate-and-term: lock in a lower rate when the market moves, shorten a 30-year loan to 15-year to pay off faster, remove PMI or MIP by refinancing once you have sufficient equity, or convert an adjustable-rate mortgage to a fixed rate for predictability. The break-even calculation is essential: divide closing costs by monthly savings to find how many months it takes to recoup the cost. If you plan to sell before the break-even, the refi doesn't save you money.",
        links: [],
      },
      {
        heading: "Cash-Out Refinance",
        content: "A cash-out refinance replaces your mortgage with a larger loan and gives you the difference in cash. You're trading equity for liquidity. This is a primary tool for real estate investors — using equity in existing properties to fund new acquisitions without selling. The maximum loan-to-value is typically 80% for primary residences, 75% for investment properties on conventional loans. The risk: you're increasing your debt and monthly payment in exchange for cash. The cash should produce a return that exceeds the incremental borrowing cost. Using a cash-out to buy depreciating assets or fund personal expenses is a financially risky move that leaves you over-leveraged.",
        links: [],
      },
      {
        heading: "Streamline Refinance (FHA and VA)",
        content: "Streamline refinances are simplified refi programs available for existing FHA or VA loan borrowers. The key features: minimal documentation, no appraisal required in most cases, and faster processing. The FHA Streamline requires no income verification and no new appraisal — the lender simply needs to verify you're current on your existing FHA loan and that the refi lowers your payment. The VA Interest Rate Reduction Refinance Loan (IRRRL) works similarly for veterans. The downside: streamlines are only available to existing FHA or VA borrowers, you can't take cash out, and the property must already be your primary residence. But for eligible borrowers, they're among the fastest and cheapest ways to capture a rate reduction.",
        links: [],
      },
      {
        heading: "DSCR Refinance (Investor Loans)",
        content: "DSCR stands for Debt Service Coverage Ratio — a measure of whether a rental property's income covers its debt payments. DSCR loans qualify investors based on the property's income, not the borrower's personal income. This makes them popular with self-employed investors, those with multiple properties, and anyone who doesn't fit conventional income documentation. A DSCR of 1.0 means rent exactly covers the mortgage; lenders typically want 1.0–1.25 minimum. DSCR refinances are used by investors to: exit hard money loans with long-term debt, cash-out equity from investment properties without income documentation, and scale portfolios without personal income becoming a constraint. Rates are typically 0.5–1.5% higher than conventional investment property loans.",
        links: [],
      },
    ]}
    faqs={[
      {
        q: "How often can you refinance a mortgage?",
        a: "There's no legal limit on how often you can refinance, but some loans have prepayment penalties that make refinancing shortly after closing expensive. FHA loans refinanced too quickly can trigger a seasoning requirement. Conventional lenders generally want to see 6–12 months of on-time payments before they'll refinance. From a practical standpoint, refinancing has closing costs each time — you need a clear financial reason each time you do it.",
      },
      {
        q: "Does refinancing hurt your credit score?",
        a: "Yes, temporarily. Applying for a refinance triggers a hard inquiry, which typically drops your score by 5–10 points. If you rate-shop with multiple lenders within 14–45 days, the credit bureaus treat those inquiries as a single event (mortgage rate shopping is expected). The impact is temporary — scores typically recover within a few months of consistent payment history.",
      },
      {
        q: "What documents do I need to refinance?",
        a: "For conventional rate-and-term or cash-out refinances: last two years of tax returns and W-2s, last 30 days of pay stubs, two months of bank statements, current mortgage statement, homeowners insurance information, and the property title. Self-employed borrowers also need business returns and may need a P&L. DSCR loans for investment properties often replace personal income docs with a signed lease or rent analysis.",
      },
    ]}
  />
);

export default TypesOfRefinance;
