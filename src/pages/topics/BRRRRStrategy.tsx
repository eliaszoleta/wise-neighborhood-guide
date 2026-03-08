import TopicPage from "@/components/TopicPage";

const BRRRRStrategy = () => (
  <TopicPage
    title="The BRRRR Strategy: How to Recycle Capital and Grow a Real Estate Portfolio"
    metaDesc="A real guide to the BRRRR method — Buy, Rehab, Rent, Refinance, Repeat. What it actually takes, what goes wrong, and how to run the numbers before you commit."
    parentLabel="Real Estate Investing"
    parentHref="/real-estate-investing"
    intro="The BRRRR strategy appeals to investors because the math looks compelling on paper: buy a distressed property below market value, fix it up, rent it out, then refinance based on the new appraised value to pull your money back out and do it again. When it works, you end up with a cash-flowing rental property and most of your capital returned to invest elsewhere. When it doesn't work — which is more often than most BRRRR content admits — you're left with less money than you started with and a property you're now stuck in. Here's what actually determines whether a deal succeeds."
    sections={[
      {
        heading: "Step 1: Buy Below Market Value (This Is the Whole Game)",
        content: "Everything in BRRRR flows from this step. If you pay too much upfront, the refinance won't return your capital and the math falls apart. Most experienced BRRRR investors target properties where purchase price plus rehab cost equals 70–75% of the after-repair value (ARV). So on a property with a $200,000 ARV, you'd want to be all-in at $140,000–$150,000 or less. Finding deals at that discount requires targeting distressed properties — foreclosures, estate sales, off-market motivated sellers — and doing enough deals to develop accurate local ARV and rehab cost judgment.",
        links: [
          { label: "Auction.com — Foreclosures", url: "https://www.auction.com/" },
          { label: "HUD Home Store", url: "https://www.hudhomestore.gov/" },
          { label: "PropStream — Off-Market Deal Finding", url: "https://www.propstream.com/" },
        ],
      },
      {
        heading: "Step 2: Rehab with the Refinance in Mind",
        content: "The rehab scope needs to balance two things: what makes the property rentable and what adds appraised value. Kitchens, bathrooms, flooring, and curb appeal consistently move appraiser values. Expensive upgrades that don't show up in comps — high-end finishes in a C-class neighborhood, for example — will cost you money without improving your refinance outcome. Always get your rehab scope and budget locked in before you buy, not after. Contractors who give verbal estimates and wide cost ranges are a liability on BRRRR deals. Scope creep kills BRRRR returns faster than anything else.",
        links: [
          { label: "HomeAdvisor — Find Local Contractors", url: "https://www.homeadvisor.com/" },
          { label: "Renovation Cost Estimator", url: "https://www.remodelingcalculator.org/" },
        ],
      },
      {
        heading: "Step 3: Rent It to a Screened Tenant",
        content: "Don't rush the tenant placement. A bad tenant during the seasoning period — typically 6–12 months before refinancing — can complicate your refi, hurt your cash flow, and create expensive problems at exactly the wrong time. Price the rent based on current comparable rentals, not wishful thinking. Screen for income (at least 3x monthly rent), credit, and rental history. A well-placed tenant strengthens your refinance application by demonstrating stable income and reduces the risk of the whole BRRRR timeline going sideways.",
        links: [
          { label: "Zillow Rental Manager", url: "https://www.zillow.com/rental-manager/" },
          { label: "Apartments.com — List Rentals", url: "https://www.apartments.com/" },
        ],
      },
      {
        heading: "Step 4: Refinance and Pull Out Capital",
        content: "Most lenders require a 6-month seasoning period after purchase before they'll do a cash-out refinance based on the new appraised value — so plan your timeline accordingly. At refinance, most lenders will go up to 75–80% of the appraised value. On the $200,000 ARV example: if you refinanced at 75%, you'd pull $150,000 out. If you were all-in at $145,000, you've recovered your investment and have $5,000 back in your pocket — with a cash-flowing rental remaining. This is when BRRRR works. The appraisal coming in low is the most common failure point — one reason buying well below ARV creates crucial margin for error.",
        links: [
          { label: "Bankrate Cash-Out Refinance Rates", url: "https://www.bankrate.com/mortgages/cash-out-refinance-rates/" },
          { label: "LendingTree — Compare Lenders", url: "https://www.lendingtree.com/" },
        ],
      },
      {
        heading: "Step 5: Repeat — But Don't Rush",
        content: "The point of recovering your capital is to redeploy it into the next deal. Over time, each cycle adds another cash-flowing rental to your portfolio while using the same initial money. The investors who get in trouble with BRRRR are those who repeat before they've learned from the previous cycle — scaling into bigger rehabs or more complex markets before the fundamentals are solid. Every deal will teach you something about local contractor costs, appraisal dynamics, and rental demand. Build that knowledge deliberately before adding volume.",
        links: [],
      },
    ]}
    faqs={[
      {
        q: "How much capital do I need to start a BRRRR deal?",
        a: "Typically $30,000–$80,000 for the down payment and rehab costs, depending on the market and property. The goal is to recover most or all of that through the refinance — but you need to have it available upfront. Hard money lenders can sometimes fund a larger portion of the purchase and rehab, which reduces your upfront cash requirement but increases your carrying costs.",
      },
      {
        q: "What is the seasoning period and why does it matter?",
        a: "Most conventional lenders require you to own the property for 6 months before doing a cash-out refinance based on the new appraised value rather than the purchase price. Some portfolio lenders will work with shorter seasoning periods — worth asking about if you're moving fast. Factor the seasoning period into your BRRRR timeline: you'll be carrying costs (mortgage or hard money loan, taxes, insurance) for those months before you can refinance.",
      },
      {
        q: "What are the most common ways BRRRR deals fail?",
        a: "The three most common failure points are: (1) overpaying for the property so the refinance can't return enough capital, (2) underestimating rehab costs so you're over-budget before the deal closes, and (3) the appraisal coming in lower than expected because you overestimated the ARV or chose an appraiser unfamiliar with the local comp set. Honest, conservative underwriting before you buy is the only real protection against all three.",
      },
    ]}
  />
);

export default BRRRRStrategy;
