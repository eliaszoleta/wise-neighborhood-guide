import TopicPage from "@/components/TopicPage";

const CashOutRefinance = () => (
  <TopicPage
    title="Cash-Out Refinance Explained: How Real Estate Investors Use Home Equity"
    metaDesc="A cash-out refinance replaces your existing mortgage with a larger one and gives you the difference in cash. Here's how it works for homeowners and investors, including the costs and risks."
    parentLabel="Blog"
    parentHref="/blog"
    intro="A cash-out refinance is one of the most powerful tools in real estate investing — and one of the most misunderstood by new investors. Done right, it lets you extract equity from a property you own to fund the next deal without selling. Done carelessly, it can stretch your cash flow thin, leave you over-leveraged, and turn a good asset into a financial liability. Here's exactly how it works."
    sections={[
      {
        heading: "How a Cash-Out Refinance Works",
        content: "In a standard refinance, you replace your existing mortgage with a new one — same loan balance, different rate or term. In a cash-out refinance, you replace your mortgage with a larger loan and receive the difference in cash. Example: Your home is worth $300,000 and you have a $150,000 remaining balance. A lender will typically let you borrow up to 80% of the home's value — $240,000. After paying off your existing $150,000 mortgage, you walk away with $90,000 in cash. Your new mortgage is $240,000, your old one is paid off, and you have $90,000 to deploy. The trade: higher monthly mortgage payments and more debt against the property.",
        links: [],
      },
      {
        heading: "Cash-Out Refi vs. HELOC vs. Home Equity Loan",
        content: "These three products all let you access home equity, but they work differently. A cash-out refinance replaces your primary mortgage entirely — you get one loan. A HELOC (home equity line of credit) is a second lien that works like a credit card: you borrow what you need up to your limit, pay interest on what you draw, and the line revolves. A home equity loan is a second lien with a fixed lump sum and fixed payment schedule. Cash-out refis make sense when you want to lower your primary mortgage rate while extracting equity, or when you need a large lump sum. HELOCs are more flexible for variable capital needs. Home equity loans work when you need a set amount and want predictable payments. For investment properties, HELOCs and home equity loans are harder to get than on primary residences.",
        links: [],
      },
      {
        heading: "What Cash-Out Refis Cost",
        content: "Refinance closing costs typically run 2–5% of the loan amount. On a $240,000 refinance, that's $4,800–$12,000 in costs — appraisal, title insurance, origination fees, points, and prepaid interest. These can be paid out of pocket at closing or rolled into the loan. Rolling them in increases your loan balance and monthly payment. You'll also want to calculate the break-even period: if you're refinancing to get a lower rate as well as cash, how many months of savings does it take to recoup the closing costs? If you're planning to sell the property in 3 years and your break-even is 4 years, the refinance math doesn't work even if the rate is lower.",
        links: [],
      },
      {
        heading: "How Investors Use Cash-Out Refinances",
        content: "The most common use cases for investors are: funding the down payment and renovation costs on the next acquisition, executing the R in BRRRR (where the refinance is on an investment property post-rehab), paying off hard money or private money bridge loans with longer-term conventional debt, and portfolio repositioning — extracting equity from low-debt appreciating properties to deploy into higher-yield deals. The critical discipline: equity pulled out through a refinance must be invested productively. Using a $90,000 cash-out to buy a car or fund personal expenses while leaving you with a higher mortgage payment is how investors get into financial trouble. Every dollar pulled out should produce a return that exceeds the incremental borrowing cost.",
        links: [],
      },
    ]}
    faqs={[
      {
        q: "How much equity do I need to do a cash-out refinance?",
        a: "Most conventional lenders require you to retain at least 20% equity in the property after the cash-out — meaning you can borrow up to 80% of the appraised value. For investment properties, the cap is often 75% LTV or lower. VA loans allow cash-out up to 100% of appraised value for eligible veterans. The more equity you have, the more cash you can access, subject to these LTV limits.",
      },
      {
        q: "Does a cash-out refinance affect my taxes?",
        a: "The cash you receive from a refinance is not taxable income — it's loan proceeds, not earnings. However, the increased interest expense may or may not be deductible depending on how you use the funds. For investment properties, interest on money borrowed to fund other investment activities is typically deductible. Consult a CPA before doing a large cash-out refinance to understand the tax implications for your specific situation.",
      },
      {
        q: "What's the minimum credit score for a cash-out refinance?",
        a: "Conventional lenders typically require a 620 minimum credit score, but better rates require 700+. The higher the LTV on the cash-out, the stricter the credit requirements. FHA cash-out refinances allow 580+ credit scores but require mortgage insurance. Investment property cash-out refinances have stricter requirements than primary residences — expect 680+ as a practical floor.",
      },
    ]}
  />
);

export default CashOutRefinance;
