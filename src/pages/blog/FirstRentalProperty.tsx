import TopicPage from "@/components/TopicPage";

const FirstRentalProperty = () => (
  <TopicPage
    title="How to Find and Buy Your First Rental Property: A Step-by-Step Guide"
    metaDesc="Buying your first rental property is different from buying a home. Here's a practical, step-by-step guide to finding, analyzing, financing, and closing your first rental."
    parentLabel="Blog"
    parentHref="/blog"
    intro="Buying a rental property is one of the most reliable long-term wealth-building strategies available to ordinary people — but it's not passive from day one. The research, analysis, and due diligence required before the first purchase will either set you up for consistent cash flow or saddle you with a money-losing asset. Here's how to approach it correctly."
    sections={[
      {
        heading: "Step 1: Get Clear on Your Strategy Before You Look at a Single Property",
        content: "Are you buying to cash flow immediately, or to buy in a high-appreciation market and accept thin margins in exchange for equity growth? Are you managing yourself or hiring a property manager? Are you targeting single-family homes, small multifamily, or something else? These decisions narrow your market and your criteria before you ever pull up a listing. Many first-time rental buyers make the mistake of falling in love with a property and reverse-engineering justification — that's backwards. Define your minimum acceptable cash flow (most investors target $200–$400/month after all expenses on a single-family), your max purchase price, and your target neighborhoods before your search starts.",
        links: [],
      },
      {
        heading: "Step 2: Analyze Deals Using Real Numbers — Not Best-Case Assumptions",
        content: "The two most common mistakes in rental property analysis: underestimating expenses and overestimating rent. Run your numbers with vacancy at 5–8% of gross rent, property management at 8–12% even if you plan to self-manage (because circumstances change), maintenance and CapEx reserves at 10–15% of gross rent, and insurance plus property taxes as line items. A property grossing $18,000/year in rent does not cash flow $18,000/year — it might net $5,000–$8,000 depending on financing and expense load. Use the 50% rule as a quick filter: if half of gross rent doesn't cover your mortgage, the property probably won't cash flow. Then do a full proforma before making any offer.",
        links: [],
      },
      {
        heading: "Step 3: Finance It Correctly",
        content: "Investment property financing is different from primary residence financing. Conventional investment property loans typically require 15–25% down, carry interest rates 0.5–1% above primary residence rates, and require stronger credit (680+ is a common floor). FHA and VA loans can only be used on properties you intend to live in — although the FHA house hacking strategy (buying a 2–4 unit, living in one unit, renting the others) is a legitimate exception. DSCR loans — which qualify you based on the property's income rather than your personal income — have become popular with investors who have multiple properties or are self-employed. Get pre-approved before making offers, and make sure your lender knows the property is an investment, not a primary.",
        links: [],
      },
      {
        heading: "Step 4: Due Diligence Before Closing",
        content: "Never skip the inspection on an investment property. Budget for a general inspection ($300–$500), plus sewer scope ($150–$250) and roof inspection if the roof is more than 10 years old. Review the rent roll if there's an existing tenant: verify the lease terms, security deposit amount, and payment history. Pull the local rental comps to verify your rent estimate is realistic for the actual unit condition — not what you plan to renovate it to. Check the flood zone status, local landlord-tenant laws, and whether the municipality requires rental registration or inspections. Title search should reveal any liens, easements, or encumbrances. Your closing attorney or title company handles this, but you should review the title commitment before closing.",
        links: [],
      },
    ]}
    faqs={[
      {
        q: "What's a good return on a first rental property?",
        a: "Most investors target a cash-on-cash return of 6–10% on a conventional financed rental, meaning $6,000–$10,000 annual cash flow for every $100,000 invested. In high-cost markets, 4–6% cash-on-cash is considered acceptable if appreciation potential is strong. On all-cash purchases, 6–8% cap rate is a reasonable benchmark in most markets. Define your acceptable return threshold before you look at deals so you have an objective filter.",
      },
      {
        q: "Should I buy in my local market or invest out of state?",
        a: "Starting in your local market has advantages: you can physically inspect properties, you know the neighborhoods, and managing it yourself is feasible. Investing out of state makes sense if local prices are too high to generate cash flow, but it requires building a reliable team — agent, property manager, contractor — in a market you can't easily visit. Most investors do their first deal locally to learn the process before expanding to remote markets.",
      },
      {
        q: "Can I get a rental property with 10% down?",
        a: "Not with conventional investment financing — 15–25% is standard for investment properties with conventional loans. The exception is house hacking: if you buy a 1–4 unit property and live in one unit as your primary residence, you can use FHA (3.5% down) or conventional primary residence loans (as low as 3–5% down). This is one of the most capital-efficient ways to buy a first rental.",
      },
    ]}
  />
);

export default FirstRentalProperty;
