import { Link } from "react-router-dom";
import BlogPost from "@/components/BlogPost";

const BrrrMethodRealEstate = () => (
  <BlogPost
    title="The BRRRR Method in Real Estate — What It Is and How It Actually Works"
    metaDesc="BRRRR stands for Buy, Rehab, Rent, Refinance, Repeat. It's a capital-recycling strategy for building a rental portfolio. Here's a plain walkthrough of the math and where deals break down."
    slug="investing/brrrr-method-real-estate"
    datePublished="2026-02-13"
    category="Investing"
    faqs={[
      { q: "What does BRRRR stand for in real estate?", a: "BRRRR stands for Buy, Rehab, Rent, Refinance, Repeat. It's a capital-recycling strategy where you acquire a distressed property, renovate it, place a tenant, refinance to pull your investment capital back out, and then deploy that same capital into the next deal." },
      { q: "What is the 70% rule in BRRRR investing?", a: "The 70% rule states that your total acquisition and renovation costs must stay at or below 70–75% of the property's after-repair value (ARV). This threshold is what allows the refinance to return most or all of your invested capital — at 80% of ARV, the math breaks and you can't fully recycle your investment." },
      { q: "What is seasoning in a BRRRR deal?", a: "Seasoning is the waiting period conventional lenders require before they'll appraise a renovated property at its improved value for a cash-out refinance — typically 6 months of the property being occupied and generating rental income. During this period you're still paying interest on the higher-cost bridge financing." },
      { q: "How much money do you need to start BRRRR investing?", a: "You need enough capital to cover the down payment or purchase price for bridge financing, the renovation costs, and several months of carrying costs during the rehab and seasoning period. On a deal with a $150,000 balance at 12%, holding costs alone run $9,000+ over a six-month seasoning window before you see any capital returned." },
      { q: "What happens if the appraisal comes in low on a BRRRR refinance?", a: "If the appraisal comes in below your target ARV, the refinance loan at 75% LTV may not be large enough to fully pay off your bridge financing — you'd have to bring cash to closing to cover the gap. This is why building a buffer into your ARV estimate matters: investors who model right at the edge have no margin for appraisal variance." },
    ]}
    relatedArticles={[
      { label: "How to Analyze a Rental Property Deal", href: "/blog/investing/how-to-analyze-rental-property" },
      { label: "First Rental Property: Step-by-Step Guide", href: "/blog/investing/first-rental-property" },
      { label: "Fix and Flip vs Buy and Hold", href: "/blog/investing/fix-and-flip-vs-buy-and-hold" },
    ]}
  >
    <p>
      The BRRRR method gets pitched at every real estate meetup as a way to build a portfolio without ever running out of money. Buy a house, fix it up, rent it out, refinance your capital back out, and do it again with the same money. Repeat until you're rich.
    </p>
    <p>
      The strategy is real. People do execute it successfully. But the version that circulates at meetups leaves out the part where it's hard — and those hard parts are exactly where most beginners lose money or get stuck. Here's what BRRRR actually looks like in practice.
    </p>

    <h2>Buy: The Number That Has to Work From Day One</h2>
    <p>
      BRRRR starts with finding a distressed property priced below its after-repair value (ARV). The distress is the point — it's what makes the property un-financeable through conventional channels and creates room for the strategy to work. <Link to="/blog/financing/hard-money-lender">Hard money lenders</Link> or <Link to="/blog/financing/private-money-lender">private money lenders</Link> provide the purchase capital, since banks won't touch properties in poor condition.
    </p>
    <p>
      The non-negotiable rule: <strong>your purchase price plus all renovation costs must stay at or below 70–75% of ARV</strong>. This threshold isn't a guideline. It's the number that determines whether your refinance can eventually return your capital. At 80% of ARV, the math breaks. Build that constraint into your offer before you get emotionally attached to a property.
    </p>

    <h2>Rehab: Where Most Beginners Lose Margin</h2>
    <p>
      The renovation phase in a BRRRR deal has one goal: bring the property to a condition that attracts tenants and appraises at ARV. That's it. Not to create something beautiful. Not to match the nicest house on the block.
    </p>
    <p>
      The most common mistake here is over-improving — spending money on finishes that make you proud of the property but don't affect the appraisal or the rent. Granite countertops and custom tile in a market where rental comps are $950/month don't add to your refinance outcome. They just eat your margin. Durable flooring, solid mechanicals, clean functional bathrooms — that's what moves the needle.
    </p>
    <p>
      Budget 15–20% above your contractor's estimate before deciding whether a deal works. Renovations find problems. Opening a wall reveals plumbing that wasn't in the scope. The permit process takes longer than expected. Costs run over almost every time. Build for it.
    </p>

    <h2>Rent: The Waiting Period That Gets Expensive</h2>
    <p>
      Once the property is rehabbed, you place a tenant. Conventional lenders typically want to see the property occupied and generating income for 6 months before they'll conduct a cash-out refinance at the improved value — this is called the seasoning period.
    </p>
    <p>
      During those six months, you're still paying interest on the hard money or private money loan used for the purchase. At 12% on a $150,000 balance, that's $9,000 in interest just during the seasoning window — before any renovation holding costs. That number belongs in your deal model from the start, not as an afterthought.
    </p>

    <h2>Refinance: Where You Find Out If the Math Worked</h2>
    <p>
      After seasoning, you apply for a conventional investment property loan. The lender orders an appraisal. If your rehab was executed well and your ARV estimate was accurate, the appraised value comes in at or near your target. You borrow at 70–75% LTV, pay off the bridge financing, and — ideally — receive some cash back.
    </p>
    <p>
      Here's a concrete example:
    </p>
    <ul>
      <li>ARV: $200,000</li>
      <li>Purchase price: $90,000</li>
      <li>Renovation cost: $42,000</li>
      <li>Total invested (after hard money points and interest): ~$143,000</li>
      <li>Refinance at 75% of ARV: $150,000</li>
      <li>Cash back after paying off bridge: $7,000</li>
    </ul>
    <p>
      That's a deal where most of the original capital comes back. The property stays in the portfolio with a conventional 30-year mortgage at investment property rates — much cheaper than the bridge loan it replaced. For the full mechanics of pulling equity back out, see our <Link to="/blog/financing/cash-out-refinance">cash-out refinance guide</Link>.
    </p>
    <p>
      What breaks this math: the appraiser values the property at $180,000 instead of $200,000. Now the refinance at 75% is only $135,000, not enough to fully pay off the bridge. You have to bring cash to close the gap. The buffer in your ARV estimate protects against this. Investors who appraise right at the edge have no room for error.
    </p>

    <h2>Repeat: The Actual Point of the Strategy</h2>
    <p>
      If you recycled most of your capital through the refinance, you now have that money available for the next deal. That's what makes BRRRR meaningful over time — not that any single deal is miraculous, but that the same pool of capital can fund multiple acquisitions instead of being permanently buried in each one.
    </p>
    <p>
      The strategy works in markets where distressed properties can be acquired at 70% of ARV or less — meaning there's enough room for renovation, holding costs, and still end up at 70–75% after repair. In high-cost markets where everything trades at 90%+ of value regardless of condition, BRRRR doesn't pencil. Know your market before you build your strategy around it.
    </p>
    <div className="callout">
      <p>For more on this strategy, explore the <Link to="/real-estate-investing/brrrr-strategy">BRRRR strategy overview</Link> or review <a href="https://www.nar.realtor/research-and-statistics" target="_blank" rel="noopener noreferrer">NAR's investment property research</a> for market context.</p>
    <p><strong>One thing worth saying plainly:</strong> BRRRR is an execution-heavy strategy. It rewards people who can manage contractors, read deals accurately, and stay disciplined about the 70% rule when a property is tempting but marginal. The investors who struggle with it are usually the ones who bent the rule once and learned the hard way why it exists.</p>
    </div>
  </BlogPost>
);

export default BrrrMethodRealEstate;
