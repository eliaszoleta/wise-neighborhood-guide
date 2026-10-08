import { Link } from "react-router-dom";
import BlogPost from "@/components/BlogPost";

const OnePercentRule = () => (
  <BlogPost
    title="The 1% Rule in Real Estate: What It Means and Why It's Not Enough"
    metaDesc="The 1% rule says monthly rent should equal at least 1% of the purchase price. Here's how to use it as a fast screening tool -- and why it can't replace a real deal analysis."
    slug="investing/one-percent-rule-real-estate"
    datePublished="2026-10-08"
    category="Investing"
    quickAnswer="The 1% rule says a rental property's monthly rent should be at least 1% of its purchase price -- a $200,000 property should rent for at least $2,000/month. It's a fast screening filter to eliminate obviously bad deals, not a substitute for a full cash flow analysis."
    faqs={[
      { q: "What is the 1% rule in real estate?", a: "Monthly rent should equal 1% or more of the property's purchase price. A $250,000 property passing the rule would need to rent for $2,500 or more per month. Properties that clear this bar aren't automatically good deals, but properties that fall well short rarely cash flow after expenses and financing." },
      { q: "Is the 1% rule realistic in every market?", a: "No. In high-appreciation coastal metros, almost no properties hit 1% -- investors there often accept 0.5-0.7% because they're underwriting for appreciation, not cash flow. In Midwest and Southern cash-flow markets, 1% or higher is common and sometimes the baseline expectation." },
      { q: "What's the difference between the 1% rule and the 2% rule?", a: "They're the same concept at different thresholds. The 2% rule is a stricter version used mostly in lower-priced, higher-cash-flow markets -- think smaller multifamily in the Midwest -- where rents relative to price run higher than in most metro areas." },
      { q: "Why isn't the 1% rule enough on its own?", a: "It ignores property taxes, insurance, maintenance, vacancy, property management, and financing costs entirely. Two properties that both clear 1% can have wildly different actual cash flow once you subtract real expenses -- one in a high-tax area with an old roof, one in a low-tax area recently renovated." },
      { q: "Should I walk away from every deal that fails the 1% rule?", a: "Not automatically. Properties in strong appreciation markets, properties with below-market rent you can raise, or value-add deals where you'll renovate and re-rent at a higher rate can still be excellent investments despite failing the 1% test on day one." },
    ]}
    relatedArticles={[
      { label: "How to Analyze a Rental Property Before Making an Offer", href: "/blog/investing/how-to-analyze-rental-property" },
      { label: "Cap Rate vs Cash-on-Cash Return", href: "/blog/investing/cap-rate-vs-cash-on-cash" },
      { label: "Monthly Rental Property Expenses Every Landlord Should Budget For", href: "/blog/property-management/rental-property-expenses" },
    ]}
  >
    <p>
      The 1% rule is the most common real estate shorthand you'll hear in investor forums, and for good reason — it takes two numbers and five seconds to apply. The problem isn't the rule itself; it's investors treating a screening tool like a full underwriting process.
    </p>

    <h2>How the 1% Rule Works</h2>
    <p>
      <strong>Monthly Rent ÷ Purchase Price ≥ 1%</strong>
    </p>
    <div className="callout">
      <strong>Example</strong>
      <ul>
        <li>Purchase price: $220,000</li>
        <li>Required rent to pass: $2,200/month</li>
        <li>Actual market rent: $2,100/month</li>
        <li>Result: 0.95% — fails the rule, worth a closer look before ruling it out</li>
      </ul>
    </div>
    <p>
      It's deliberately crude. The whole point is to let you scan 20 listings in a few minutes and eliminate the ones that have no realistic path to cash flowing, before spending real time on full analysis for each one.
    </p>

    <h2>What the Rule Gets Right</h2>
    <p>
      In most cash-flow-focused markets, properties that clear 1% have a meaningfully better shot at positive cash flow after real expenses than properties sitting at 0.5-0.6%. It correlates with cash flow potential even though it doesn't calculate it directly — which is exactly what a good screening filter should do.
    </p>

    <h2>What It Completely Ignores</h2>
    <ul>
      <li><strong>Property taxes</strong> — can range from under 0.5% to over 2.5% of value annually depending on the state and county</li>
      <li><strong>Insurance</strong> — varies enormously by region, especially in flood or hurricane zones</li>
      <li><strong>Maintenance and capex reserves</strong> — an older property needs more set aside than a recently renovated one</li>
      <li><strong>Vacancy</strong> — a property in a soft rental market will sit empty longer between tenants</li>
      <li><strong>Financing costs</strong> — the rule says nothing about your actual mortgage payment</li>
    </ul>
    <p>
      Two properties can both hit exactly 1% and produce completely different actual returns once you run real numbers through a proper cash flow analysis.
    </p>

    <h2>Why It Fails in Appreciation Markets</h2>
    <p>
      In coastal metros and other high-demand markets, property values are driven heavily by appreciation and scarcity, not rental yield. It's common for solid, desirable properties in these markets to rent for 0.5-0.7% of purchase price — well under the 1% threshold — while still being excellent long-term investments because of consistent price appreciation and low vacancy. Applying the 1% rule rigidly in these markets filters out properties that are actually the strongest performers locally.
    </p>

    <h2>Use It as a Filter, Not a Final Answer</h2>
    <p>
      The right use of the 1% rule: run it on a stack of listings, eliminate the ones that fall far short (say, under 0.6% in a cash-flow market), and spend your real analysis time — actual rent comps, real tax bills, real insurance quotes, realistic vacancy and maintenance assumptions — on the properties that survive the first pass.
    </p>
  </BlogPost>
);

export default OnePercentRule;
