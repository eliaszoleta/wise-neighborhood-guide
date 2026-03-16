import { Link } from "react-router-dom";
import BlogPost from "@/components/BlogPost";

const CapRateVsCashOnCash = () => (
  <BlogPost
    title="Cap Rate vs Cash-on-Cash Return: What Each Metric Actually Tells You"
    metaDesc="Cap rate and cash-on-cash return measure different things. Learn when to use each metric, how to calculate them, and why confusing them leads to bad investment decisions."
    slug="investing/cap-rate-vs-cash-on-cash"
    datePublished="2026-03-16"
    category="Investing"
    faqs={[
      { q: "What is a good cap rate for a rental property?", a: "It depends heavily on market type. Urban core markets like major coastal cities typically yield 4-6% cap rates. Suburban markets in mid-size cities run 6-8%. Rural or tertiary markets can hit 8-12%. A higher cap rate isn't always better — it often reflects higher risk, lower demand, or a less liquid market." },
      { q: "Can cash-on-cash return exceed the cap rate?", a: "Yes, and it frequently does when you use leverage intelligently. If you borrow at a rate below the cap rate, your cash-on-cash return will be higher than the cap rate. This is called positive leverage. The reverse — borrowing above the cap rate — creates negative leverage and depresses your cash-on-cash return below the cap rate." },
      { q: "What does cap rate tell you that cash-on-cash doesn't?", a: "Cap rate strips out financing and tells you the inherent income-producing efficiency of a property based on its value. This makes it useful for comparing properties across different ownership structures, evaluating market pricing, and calculating a maximum offer price given a target return. Cash-on-cash tells you nothing about the underlying asset — only about how your specific deal is structured." },
      { q: "What is the gross rent multiplier and when should I use it?", a: "GRM is purchase price divided by annual gross rents. A property selling for $200,000 that rents for $20,000 per year has a GRM of 10. It's a quick filter, not a full analysis — it ignores vacancy, expenses, and financing. Use it to screen out overpriced deals before spending time on a full underwrite. In cash-flow markets, a GRM under 10-12 is worth investigating further." },
      { q: "Why is a high cash-on-cash return sometimes a warning sign?", a: "Extremely high cash-on-cash returns often signal higher risk. The property may be in a declining area with poor long-term demand, it may require significant deferred maintenance that will erode future returns, or the seller may be presenting favorable numbers that don't hold up under scrutiny. Analyze what's driving a high CoC before getting excited about it." },
    ]}
  >
    <p>
      Two investors are looking at the same $200,000 rental property. One says it's an 8% deal. The other says it's an 8% deal. They're both right — and they're talking about completely different things. That's the cap rate vs. cash-on-cash problem, and it causes more confused investment analysis than almost any other concept in real estate.
    </p>

    <h2>What Cap Rate Actually Measures</h2>
    <p>
      Cap rate — capitalization rate — is the simplest expression of a property's income-producing potential relative to its value. The formula is:
    </p>
    <p>
      <strong>Cap Rate = Net Operating Income (NOI) ÷ Property Value</strong>
    </p>
    <p>
      NOI is gross rents minus all operating expenses. Operating expenses include property taxes, insurance, maintenance, property management fees, and capital expenditure reserves. What NOI does <em>not</em> include is any mortgage payment. Financing is deliberately excluded.
    </p>
    <p>
      That exclusion is the whole point. Cap rate measures the property itself, independent of how you finance it. A property generating $16,000 in NOI and valued at $200,000 has an 8% cap rate whether you paid cash, put 25% down, or borrowed 80%. The number doesn't change based on your deal structure.
    </p>
    <div className="callout">
      <strong>Cap Rate Example:</strong>
      <ul>
        <li>Property value: $200,000</li>
        <li>Gross annual rents: $20,000</li>
        <li>Operating expenses (taxes, insurance, maintenance, mgmt, capex): $4,000</li>
        <li>NOI: $16,000</li>
        <li>Cap Rate: $16,000 ÷ $200,000 = <strong>8%</strong></li>
      </ul>
    </div>

    <h3>What Cap Rate Is Good For</h3>
    <p>
      Cap rate is the right tool when you want to compare properties independent of financing — which is most of the time during initial evaluation. Use it to:
    </p>
    <ul>
      <li>Benchmark a deal against market cap rates in that area</li>
      <li>Calculate a maximum offer price given a target return (NOI ÷ target cap rate = max price)</li>
      <li>Compare two properties in the same market without letting different financing structures cloud the comparison</li>
      <li>Understand how the market is pricing income properties generally</li>
    </ul>
    <p>
      If you know the market cap rate for a class of property in a given area, you can work backwards. A property generating $14,000 in NOI in a market where similar properties trade at 7% cap rates is worth roughly $200,000 ($14,000 ÷ 0.07). If someone is asking $250,000, you're buying at a 5.6% cap — either the market is wrong, or the seller is.
    </p>

    <h2>What Cash-on-Cash Return Measures</h2>
    <p>
      Cash-on-cash return (CoC) measures your actual annual cash return relative to the actual cash you invested. The formula is:
    </p>
    <p>
      <strong>Cash-on-Cash Return = Annual Pre-Tax Cash Flow ÷ Total Cash Invested</strong>
    </p>
    <p>
      Annual pre-tax cash flow is NOI minus your annual mortgage payments (principal and interest). Total cash invested includes your down payment, closing costs, and any immediate repairs or renovation costs at purchase.
    </p>
    <div className="callout">
      <strong>Cash-on-Cash Example (same property, 25% down):</strong>
      <ul>
        <li>Property value: $200,000</li>
        <li>Down payment (25%): $50,000</li>
        <li>Closing costs: $3,000</li>
        <li>Total cash invested: $53,000</li>
        <li>NOI: $16,000</li>
        <li>Annual mortgage payments (30yr, 7.5% on $150K): $12,580</li>
        <li>Annual cash flow: $3,420</li>
        <li>Cash-on-Cash Return: $3,420 ÷ $53,000 = <strong>6.5%</strong></li>
      </ul>
    </div>
    <p>
      Notice that the cap rate is 8% but CoC comes in at 6.5%. That happens when your borrowing rate exceeds the cap rate — the mortgage costs more than the property earns at its unleveraged rate, which drags CoC below the cap rate. This is called negative leverage.
    </p>

    <h3>How Leverage Amplifies Cash-on-Cash</h3>
    <p>
      If you put only 20% down instead of 25%, leverage works differently. With $40,000 down plus $3,000 in closing costs, your total cash invested drops to $43,000. Your mortgage balance increases to $160,000, and annual mortgage payments rise to approximately $13,418. Annual cash flow: $16,000 - $13,418 = $2,582. Cash-on-Cash: $2,582 ÷ $43,000 = <strong>6%</strong>. In this case, more leverage actually lowered CoC because you borrowed at a rate above the property's cap rate.
    </p>
    <p>
      Now flip the scenario: imagine rates were 6% and the cap rate was still 8%. With 25% down and a $150K mortgage at 6%, annual payments drop to roughly $10,800. Cash flow: $16,000 - $10,800 = $5,200. CoC: $5,200 ÷ $53,000 = <strong>9.8%</strong>. Leverage amplified CoC above the cap rate because you borrowed below the property's yield. This is positive leverage.
    </p>
    <blockquote>
      The relationship between your borrowing rate and the cap rate determines whether leverage helps or hurts your cash-on-cash return. See our analysis of <Link to="/blog/investing/first-rental-property">buying your first rental property</Link> for how to evaluate whether a deal works under current financing conditions.
    </blockquote>

    <h2>Cap Rate Benchmarks by Market Type</h2>
    <p>
      Cap rates vary significantly by geography, property type, and asset quality. Here's a realistic range by market tier:
    </p>
    <ul>
      <li><strong>Urban core (major coastal cities):</strong> 4–6% cap rates are typical. Lower yields reflect high demand, lower perceived risk, and strong appreciation expectations. Think Manhattan, San Francisco, Seattle.</li>
      <li><strong>Suburban and mid-size markets:</strong> 6–8% cap rates. Solid fundamentals with more room for cash flow. Nashville, Charlotte, Denver outer suburbs fall here.</li>
      <li><strong>Rural and tertiary markets:</strong> 8–12% or higher. Higher yields compensate for thinner tenant pools, slower appreciation, and more difficulty selling. These markets can work, but you're taking on more risk and illiquidity in exchange for the higher cap rate.</li>
    </ul>
    <p>
      A 10% cap rate in a rural Ohio town is not the same as a 10% cap rate in a Phoenix suburb. The yield premium exists for a reason. Always ask what risk you're being paid to take.
    </p>

    <h2>Why High Cash-on-Cash Can Be Deceptive</h2>
    <p>
      A 20% cash-on-cash return sounds excellent. Sometimes it is. More often, it's a signal to slow down.
    </p>
    <p>
      High CoC can result from very low purchase prices — which often means the property is in a weak rental market, has deferred maintenance, or is located somewhere tenants don't want to stay long-term. Vacancy and turnover costs will eat into that attractive CoC number quickly.
    </p>
    <p>
      It can also result from seller-provided financials that inflate rents or understate expenses. Always reconstruct the NOI from market data, not from what the seller hands you.
    </p>
    <p>
      Sustainable CoC in the 8–12% range on a stabilized, well-located property often produces better long-term outcomes than a 20% CoC deal with structural problems underneath it.
    </p>

    <h2>GRM: The 30-Second Screen</h2>
    <p>
      Before you calculate cap rate or cash-on-cash, there's a faster filter worth running: the Gross Rent Multiplier.
    </p>
    <p>
      <strong>GRM = Purchase Price ÷ Annual Gross Rents</strong>
    </p>
    <p>
      A property asking $200,000 that generates $22,000 in annual gross rents has a GRM of 9.1. GRM ignores vacancy and all expenses, so it's not a buy signal on its own. But it's a fast way to screen deals before spending time on a full underwrite. In cash-flow markets, a GRM under 10–12 is generally worth investigating further. In appreciation markets, GRMs of 20+ are common and still make sense as long-term holds.
    </p>
    <p>
      Use GRM to eliminate deals quickly. Once a deal passes the GRM screen, move to cap rate. Once you're negotiating a specific structure, move to cash-on-cash.
    </p>

    <h2>Using Both Metrics Together</h2>
    <p>
      Cap rate and cash-on-cash aren't competing metrics — they answer different questions and you need both.
    </p>
    <ul>
      <li>Use <strong>cap rate</strong> to evaluate whether the property itself makes sense at the asking price, independent of your financing.</li>
      <li>Use <strong>cash-on-cash</strong> to evaluate whether your specific deal structure — your down payment, your loan terms — produces an acceptable return on the capital you're actually deploying.</li>
    </ul>
    <p>
      A property with a strong cap rate can produce a weak CoC if current interest rates are high. A property with a weak cap rate can produce a strong CoC if you found unusually favorable seller financing. Neither metric alone gives you the full picture.
    </p>
    <p>
      For deeper analysis of how to put these metrics together in a full deal evaluation, see the guide on <Link to="/blog/investing/brrrr-method-real-estate">the BRRRR method</Link>, where leverage and forced appreciation dramatically change how both metrics work over time.
    </p>
  </BlogPost>
);

export default CapRateVsCashOnCash;
