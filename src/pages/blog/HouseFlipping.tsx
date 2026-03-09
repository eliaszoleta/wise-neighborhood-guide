import BlogPost from "@/components/BlogPost";

const HouseFlipping = () => (
  <BlogPost
    title="House Flipping: What It Is, How It Works, and What It Actually Costs"
    metaDesc="House flipping means buying undervalued homes, renovating them, and selling for profit. Here's an honest breakdown of how the model works, what total costs look like, and what makes flips fail."
  >
    <p>
      Cable TV did a number on house flipping. The shows make it look like you find a beat-up house, spend a few weekends painting and installing subway tile, and walk away with $80,000. In reality, the investors you see on those shows are often working with producers who help source deals, the renovations take months not weeks, and the "profit" shown rarely accounts for every cost. This is a real business model — a good one when done right — but the math is uglier and more complicated than it looks on screen.
    </p>

    <h2>The Basic Model</h2>
    <p>
      Buy a property below market value, renovate it, sell it at market value. That's the whole concept. The challenge is that "below market value" has to be far enough below to cover renovations, transaction costs, carrying costs, and still leave a meaningful profit. Getting that math right on the buy side is everything. You cannot renovate your way out of a bad purchase price.
    </p>
    <p>
      The most common framework for figuring out your maximum offer is the <strong>70% rule</strong>. The formula: Maximum Purchase Price = (ARV × 70%) - Estimated Rehab Costs.
    </p>
    <p>
      Example: A house will be worth $250,000 after repairs. It needs $50,000 in renovations. Your maximum purchase price is ($250,000 × 0.70) - $50,000 = $125,000. If you pay $140,000 for that property, you've already set yourself up for a rough outcome before the first contractor shows up.
    </p>
    <p>
      The 70% rule isn't perfect — in expensive markets or on larger deals, investors might go to 75%, and in slower markets they might require 65% — but it exists to create a built-in buffer for all the costs the TV shows don't show you.
    </p>

    <h2>The Full Cost Breakdown (What People Miss)</h2>
    <p>
      Here's what it actually costs to flip a house, beyond just the purchase price and rehab:
    </p>
    <ul>
      <li><strong>Acquisition closing costs:</strong> 1-3% of purchase price. Lender fees, title, escrow, recording fees. On a $125,000 purchase, that's $1,250-$3,750 you're paying before you own the house.</li>
      <li><strong>Hard money financing:</strong> Most flippers use hard money loans or private money — not conventional mortgages. Hard money typically runs 10-15% interest annually plus 2-4 points upfront. On a $125,000 loan at 12% for 6 months, that's $7,500 in interest alone, plus potentially $3,750 in points at 3%.</li>
      <li><strong>Carrying costs:</strong> While you own the property, you're paying for it. Property taxes, utilities, insurance, lawn maintenance, possibly HOA. Budget $1,500-$3,000 per month depending on the property. A 6-month flip costs $9,000-$18,000 in carry.</li>
      <li><strong>Selling costs:</strong> Real estate commissions (5-6%), closing costs, seller concessions if the buyer negotiates them, staging. Total selling costs are typically 8-10% of the sale price. On a $250,000 sale, that's $20,000-$25,000 gone before you see a dollar.</li>
    </ul>
    <p>
      Add it up and your total transaction cost — everything outside the rehab itself — is typically <strong>15-25% of the sale price</strong>. That's why the 70% rule exists. It's not arbitrary conservatism; it's the math of what flipping actually costs.
    </p>

    <h2>Renovation: Where Deals Go Wrong</h2>
    <p>
      The renovation is where most new flippers bleed money. Three problems show up repeatedly:
    </p>
    <p>
      <strong>Scope creep.</strong> You open a wall to fix a plumbing issue and find knob-and-tube wiring. You replace the flooring and the subfloor underneath is rotted. You start the kitchen and realize the layout needs to change to be functional. Every one of these discoveries adds cost and time. Experienced investors build a 10-20% contingency into every rehab budget. New investors don't, and they get hit.
    </p>
    <p>
      <strong>Over-improving for the neighborhood.</strong> Installing $15,000 custom cabinets and a $4,000 range in a $180,000 ARV neighborhood doesn't get you more money — buyers in that price range don't expect or pay for those finishes. You're buying finishes that won't appraise. Know your buyer and what comparable sales look like before you decide on finish level.
    </p>
    <p>
      <strong>What actually adds value versus what doesn't.</strong> Kitchens and bathrooms move the needle most consistently. Fresh paint, updated flooring, and curb appeal are high-ROI improvements. Adding a bedroom where it makes sense can meaningfully bump ARV. A new roof doesn't add value above the comp line — it just removes a reason for a price reduction. A pool in most markets actually hurts you because buyers see liability and maintenance cost. Don't add a pool.
    </p>

    <h2>Capital Requirements: What You Actually Need</h2>
    <p>
      People underestimate how much cash you need to flip even with financing. On a $125,000 purchase with hard money covering 70-80% of the purchase price, you might be borrowing $87,500-$100,000. You still need to cover:
    </p>
    <ul>
      <li>The down payment gap (20-30% of purchase = $25,000-$37,500)</li>
      <li>Lender points upfront ($2,600-$4,000)</li>
      <li>Rehab costs — many hard money lenders fund rehab draws, but you often need cash to start work before the first draw is released</li>
      <li>Carrying costs for 4-6 months</li>
      <li>Closing costs on both ends</li>
    </ul>
    <p>
      For a $200,000 ARV deal using hard money, a realistic cash requirement is <strong>$50,000-$70,000 out of pocket</strong>. Anyone telling you that you can flip with $5,000 and a credit card is describing a very specific, very risky scenario — not a repeatable business model.
    </p>

    <div className="callout">
      <strong>Taxes on Flips: The Part No One Mentions</strong>
      <p>
        If you flip a house and sell it within 12 months of purchase, your profit is taxed as ordinary income — not at the lower long-term capital gains rate. Depending on your total income, that could mean a federal tax rate of 22-37%. On a $40,000 profit, you might owe $10,000-$15,000 to the IRS. Add self-employment tax if you're operating as a sole proprietor. Flipping through an LLC or S-corp changes some of the mechanics but doesn't eliminate the tax burden. Talk to a CPA who works with real estate investors before you do your first deal.
      </p>
    </div>

    <h2>Why Flips Fail</h2>
    <p>
      After the numbers, the most common failure modes are timeline and contractor problems. A flip that was supposed to take 90 days stretching to 180 days doubles your carrying costs and your interest expense. Contractors who go dark mid-project, do shoddy work that has to be redone, or pull permits incorrectly can add months and tens of thousands of dollars to a project.
    </p>
    <p>
      The second biggest killer is market timing. If you buy in a hot market, renovate over six months, and the market softens — your ARV assumptions no longer hold. You've locked in your costs but your exit price has moved. Unlike wholesaling, flipping concentrates all the market risk on you.
    </p>
    <p>
      None of this means flipping is a bad strategy. It can generate substantial income. But it requires real capital, real systems, and a realistic view of what you're getting into. The numbers work when you execute. They don't forgive bad assumptions.
    </p>
  </BlogPost>
);

export default HouseFlipping;
