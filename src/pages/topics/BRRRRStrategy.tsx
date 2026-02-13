import TopicPage from "@/components/TopicPage";

const BRRRRStrategy = () => (
  <TopicPage
    title="The BRRRR Strategy: Buy, Rehab, Rent, Refinance, Repeat"
    metaDesc="Master the BRRRR method to scale your real estate portfolio. Learn how to buy, rehab, rent, refinance, and repeat to build wealth with less capital."
    parentLabel="Real Estate Investing"
    parentHref="/real-estate-investing"
    intro="The BRRRR strategy is a powerful real estate investing method that lets you recycle your capital and scale your portfolio quickly. By buying undervalued properties, rehabbing them, renting them out, and then refinancing to pull your money back out, you can reinvest the same capital over and over again."
    sections={[
      {
        heading: "Step 1: Buy Below Market Value",
        content: "The foundation of BRRRR is buying properties significantly below their after-repair value (ARV). Look for distressed properties, foreclosures, and motivated sellers. Target properties where you can add value through renovation. Most successful BRRRR investors buy at 65-75% of ARV minus repair costs.",
        links: [
          { label: "Auction.com – Foreclosures", url: "https://www.auction.com/" },
          { label: "HUD Home Store", url: "https://www.hudhomestore.gov/" },
          { label: "PropStream – Deal Finding", url: "https://www.propstream.com/" },
        ],
      },
      {
        heading: "Step 2: Rehab the Property",
        content: "Focus renovations on improvements that increase value and appeal to renters: kitchens, bathrooms, flooring, paint, and curb appeal. Create a detailed scope of work and budget before starting. Build relationships with reliable contractors and always get multiple bids. Stay on budget and on timeline to protect your returns.",
        links: [
          { label: "HomeAdvisor – Find Contractors", url: "https://www.homeadvisor.com/" },
          { label: "Renovation Cost Estimator", url: "https://www.remodelingcalculator.org/" },
        ],
      },
      {
        heading: "Step 3: Rent to Quality Tenants",
        content: "Once the rehab is complete, rent the property to a qualified tenant. Price the rent competitively based on comparable rentals in the area. Screen tenants for credit, income (at least 3x rent), rental history, and background. A well-placed tenant protects your investment and strengthens your refinance application.",
        links: [
          { label: "Zillow Rental Manager", url: "https://www.zillow.com/rental-manager/" },
          { label: "Apartments.com – List Rentals", url: "https://www.apartments.com/" },
        ],
      },
      {
        heading: "Step 4: Refinance and Pull Out Capital",
        content: "After a seasoning period (typically 6-12 months), refinance the property based on its new appraised value. Most lenders will refinance up to 75% of the appraised value. If you bought and rehabbed well, you should be able to pull out most or all of your original investment while keeping the rental income flowing.",
        links: [
          { label: "Bankrate Cash-Out Refi Rates", url: "https://www.bankrate.com/mortgages/cash-out-refinance-rates/" },
          { label: "LendingTree – Compare Lenders", url: "https://www.lendingtree.com/" },
        ],
      },
      {
        heading: "Step 5: Repeat the Process",
        content: "Take your recovered capital and repeat the entire process with a new property. Each cycle adds another cash-flowing rental to your portfolio while recycling the same money. Over time, this snowball effect can help you build a substantial portfolio much faster than traditional buy-and-hold investing.",
        links: [],
      },
    ]}
    faqs={[
      { q: "How much capital do I need to start a BRRRR?", a: "Most BRRRR deals require $30,000-$80,000 in initial capital for the purchase and rehab. The goal is to recover most of this through the refinance, so you can reuse it on the next deal." },
      { q: "What is the seasoning period for a BRRRR refinance?", a: "Most lenders require a 6-month seasoning period after purchase before they'll do a cash-out refinance based on the new appraised value. Some portfolio lenders may allow shorter seasoning." },
      { q: "What are the risks of the BRRRR strategy?", a: "Key risks include over-paying for the property, underestimating rehab costs, not being able to rent at the expected rate, and the appraisal coming in lower than expected during refinance." },
    ]}
  />
);

export default BRRRRStrategy;
