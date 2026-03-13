import TopicPage from "@/components/TopicPage";

const CashFlowROI = () => (
  <TopicPage
    title="Cash Flow & ROI: How to Actually Analyze a Rental Property Deal"
    metaDesc="Learn to calculate cash flow, cap rate, cash-on-cash return, and NOI for rental properties. The real numbers behind investment decisions — with examples and common mistakes."
    slug="/real-estate-investing/cash-flow-roi"
    datePublished="2026-02-13"
    parentLabel="Real Estate Investing"
    parentHref="/real-estate-investing"
    intro="More investors lose money because of bad math than bad luck. Understanding how to calculate what a property will actually earn — not what you hope it will earn — is the single most important skill in rental property investing. These metrics aren't just academic concepts; they're the filter that keeps you out of deals that look attractive but aren't."
    sections={[
      {
        heading: "Cash Flow: What Actually Hits Your Bank Account",
        content: "Cash flow is the money remaining after you collect rent and pay every expense associated with the property. The expenses that beginners consistently undercount: vacancy (assume 5–8% of gross rent, even in strong markets), maintenance (budget 1% of property value per year), capital expenditures or CapEx (roofs, HVAC, water heaters — budget separately from maintenance), and property management (8–12% of rent if you hire out). The calculation is: Gross Rent – Vacancy – Operating Expenses – Debt Service = Cash Flow. A property with $1,500/month rent that looks great can produce negative cash flow once you run those numbers honestly. Aim for at least $100–$200 per door per month as a minimum threshold — anything less leaves almost no margin for error.",
        links: [
          { label: "BiggerPockets Rental Property Calculator", url: "https://www.biggerpockets.com/investment-property-calculator" },
          { label: "DealCheck — Property Analyzer", url: "https://dealcheck.io/" },
        ],
      },
      {
        heading: "Cap Rate: Comparing Properties Without the Financing Noise",
        content: "Cap rate (capitalization rate) measures a property's income-producing ability completely independent of how it's financed. The formula is: Net Operating Income (NOI) ÷ Purchase Price. If a property produces $12,000 in NOI annually and you paid $150,000, the cap rate is 8%. Cap rates are useful for comparing properties and markets — but they only matter relative to comparable properties in the same area. A 5% cap rate in a gateway city with strong appreciation history is very different from a 5% cap rate in a declining market. Use cap rates to compare apples to apples, not as an absolute benchmark across all markets.",
        links: [
          { label: "Investopedia: Capitalization Rate Explained", url: "https://www.investopedia.com/terms/c/capitalizationrate.asp" },
        ],
      },
      {
        heading: "Cash-on-Cash Return: How Well Your Down Payment is Working",
        content: "Cash-on-cash return measures what percentage of your invested cash you're earning back annually in pre-tax cash flow. Formula: Annual Cash Flow ÷ Total Cash Invested. If you put $40,000 into a deal (down payment, closing costs, initial repairs) and the property generates $4,800 in annual cash flow, your CoC is 12%. This is arguably the most practically useful metric for individual investors because it accounts for leverage — a lower-priced market with modest appreciation might outperform a high-priced market on a CoC basis even if the cap rates look similar. Target 8–12%+ cash-on-cash return as a general guideline, though this varies significantly by market and strategy.",
        links: [
          { label: "Rental Property Calculator", url: "https://www.calculator.net/rental-property-calculator.html" },
        ],
      },
      {
        heading: "The 1% Rule and 50% Rule: Useful Shortcuts With Real Limitations",
        content: "The 1% rule says monthly rent should be at least 1% of the purchase price — so a $150,000 property should rent for $1,500/month. It's a quick screening tool that's useful for eliminating deals obviously before running full numbers. The 50% rule estimates that roughly 50% of gross rent will go toward operating expenses (not including the mortgage). Both rules are rough approximations that were calibrated on older, cheaper markets. In most high-cost metros, hitting 1% is nearly impossible, and many investors still do well there. Treat these as filters, not verdicts — if a deal fails the 1% rule badly, it needs a very strong appreciation case to be worth pursuing.",
        links: [],
      },
      {
        heading: "Net Operating Income (NOI): The Foundation of Everything",
        content: "NOI is gross rental income minus all operating expenses, before accounting for debt service (mortgage payments). Operating expenses include property taxes, insurance, maintenance, management fees, vacancy, and CapEx reserves — but not the mortgage. NOI is the number cap rates are calculated from, and it's how commercial lenders and appraisers value income properties. Track your actual NOI against your projections annually. If your NOI is consistently coming in below underwriting, your deal analysis assumptions need to be recalibrated for future purchases.",
        links: [
          { label: "Stessa — Free Rental Property Tracking", url: "https://www.stessa.com/" },
        ],
      },
    ]}
    faqs={[
      {
        q: "What is a good cash-on-cash return for rental property?",
        a: "Most investors target 8–12%+ cash-on-cash return. Anything above 10% is generally considered strong for a stabilized rental. In expensive coastal markets, 4–6% CoC with a strong appreciation thesis is common and can still be a solid investment decision. In Midwest or Southeast markets with lower appreciation, the bar for cash flow is typically higher because appreciation can't subsidize weak returns.",
      },
      {
        q: "How do I calculate actual cash flow on a rental property?",
        a: "Start with gross annual rent. Subtract vacancy (5–8%), then operating expenses: property taxes, insurance, maintenance (1% of value/year), CapEx reserve, and property management if applicable. The result is NOI. Then subtract your annual debt service (monthly mortgage × 12). What's left is your annual cash flow. Divide by 12 for monthly. Use a deal calculator rather than doing this by hand — errors in manual calculations are how investors get into trouble.",
      },
      {
        q: "What cap rate should I look for?",
        a: "This depends entirely on the market. In primary markets like NYC, LA, and San Francisco, cap rates of 3–5% are common and reflect the expectation of strong appreciation. In secondary and tertiary markets in the Midwest and Southeast, 6–10% cap rates are more achievable and appropriate for cash flow-focused investors. A higher cap rate isn't automatically better — it often reflects higher perceived risk, a less desirable location, or a declining market. Always evaluate cap rate in the context of comparable properties locally.",
      },
    ]}
  />
);

export default CashFlowROI;
