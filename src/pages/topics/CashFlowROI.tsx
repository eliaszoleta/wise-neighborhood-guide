import TopicPage from "@/components/TopicPage";

const CashFlowROI = () => (
  <TopicPage
    title="Cash Flow & ROI: How to Analyze Real Estate Deals"
    metaDesc="Learn how to calculate cash flow, cap rate, cash-on-cash return, and ROI on rental properties. Master the numbers behind profitable real estate investing."
    parentLabel="Real Estate Investing"
    parentHref="/real-estate-investing"
    intro="Before buying any investment property, you need to run the numbers. Understanding cash flow, cap rate, and return on investment helps you avoid bad deals, compare opportunities, and build a profitable portfolio. Here's how to analyze real estate deals like a pro."
    sections={[
      {
        heading: "Understanding Cash Flow",
        content: "Cash flow is the money left over after you collect rent and pay all expenses — mortgage, taxes, insurance, maintenance, vacancies, and property management. Positive cash flow means you're profiting monthly. Aim for at least $100-$200 per unit per month as a starting target. Negative cash flow means you're subsidizing the property out of pocket.",
        links: [
          { label: "BiggerPockets Rental Calculator", url: "https://www.biggerpockets.com/investment-property-calculator" },
          { label: "DealCheck – Analyze Properties", url: "https://dealcheck.io/" },
        ],
      },
      {
        heading: "Cap Rate (Capitalization Rate)",
        content: "Cap rate measures a property's return independent of financing. It's calculated as Net Operating Income (NOI) divided by the purchase price. A 6-10% cap rate is typical for residential rentals. Higher cap rates mean higher returns but often come with more risk. Use cap rates to compare properties in the same market.",
        links: [
          { label: "Investopedia: Cap Rate Explained", url: "https://www.investopedia.com/terms/c/capitalizationrate.asp" },
        ],
      },
      {
        heading: "Cash-on-Cash Return",
        content: "Cash-on-cash return measures your annual pre-tax cash flow relative to the total cash you invested. If you invested $40,000 and earn $4,800/year in cash flow, your cash-on-cash return is 12%. This metric accounts for leverage and is one of the most practical ways to evaluate rental property performance.",
        links: [
          { label: "Cash-on-Cash Calculator", url: "https://www.calculator.net/rental-property-calculator.html" },
        ],
      },
      {
        heading: "The 1% and 50% Rules",
        content: "The 1% rule is a quick screening tool — monthly rent should be at least 1% of the purchase price. The 50% rule estimates that 50% of gross rent will go toward operating expenses (excluding the mortgage). These aren't exact calculations but help you quickly filter out bad deals before doing a full analysis.",
        links: [],
      },
      {
        heading: "Net Operating Income (NOI)",
        content: "NOI is your gross rental income minus all operating expenses (excluding mortgage payments). It's the foundation for calculating cap rate and overall property performance. Track NOI annually and compare it to your projections to ensure your investment is performing as expected.",
        links: [
          { label: "Stessa – Free Rental Tracking", url: "https://www.stessa.com/" },
        ],
      },
    ]}
    faqs={[
      { q: "What is a good cash-on-cash return for rental property?", a: "Most investors target 8-12% cash-on-cash return. Anything above 10% is generally considered strong. However, this varies by market — higher-priced markets may have lower returns but better appreciation." },
      { q: "How do I calculate cash flow on a rental property?", a: "Cash Flow = Gross Rent – (Mortgage + Taxes + Insurance + Maintenance + Vacancy + Property Management). Use a rental property calculator for accurate projections." },
      { q: "What cap rate should I look for?", a: "For residential rentals, 5-8% is common in most markets. Higher cap rates (8%+) often indicate higher risk or less desirable locations. Lower cap rates (4-5%) are typical in premium markets with strong appreciation." },
    ]}
  />
);

export default CashFlowROI;
