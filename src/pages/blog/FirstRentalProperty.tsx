import { Link } from "react-router-dom";
import BlogPost from "@/components/BlogPost";

const FirstRentalProperty = () => (
  <BlogPost
    title="How to Find and Buy Your First Rental Property"
    metaDesc="Buying your first rental requires different thinking than buying a home to live in. Here's a practical guide to finding the right property, analyzing it correctly, and closing without regrets."
    slug="investing/first-rental-property"
    datePublished="2026-02-13"
    category="Investing"
    faqs={[
      { q: "How much money do you need to buy your first rental property?", a: "For a conventional investment property loan, expect to put down 20–25% plus closing costs and 6 months of reserves. On a $150,000 property that means roughly $35,000–$45,000 in total cash needed before you collect a dollar in rent. The exception is house hacking a 2–4 unit property with an FHA loan, which can reduce the down payment to 3.5%." },
      { q: "What is a good cash-on-cash return for a rental property?", a: "A cash-on-cash return of 8–12% is generally considered solid for a buy-and-hold rental, though what's achievable varies significantly by market. Cash-flow-focused markets like the Midwest or Southeast often hit this range; appreciation markets on the coasts frequently produce negative cash-on-cash returns with the expectation that equity gains make up the difference over time." },
      { q: "Is it better to buy a rental property locally or out of state?", a: "Local investing lets you manage easily and know the neighborhood firsthand, but many local markets don't produce positive cash flow. Out-of-state investing opens up markets where the price-to-rent ratios work, but requires a reliable property manager and more upfront research. Neither is universally better — match your strategy to your market and management capacity." },
      { q: "What expenses do first-time landlords typically underestimate?", a: "The four most underestimated expense categories are vacancy (budget 5–8% of annual rent), CapEx reserves for major replacements like roofs and HVAC (5–10% of rent), property management fees including the leasing fee at tenant placement, and maintenance that averages out to 5–10% of rent annually even if some months are zero." },
      { q: "Should you get a home inspection on an investment property?", a: "Yes — and go beyond a standard inspection. Always add a sewer scope ($150–$300), which a general inspection won't catch, since sewer line replacement can run $8,000–$20,000. Get the roof condition documented separately if the inspector flags anything, and verify the age and condition of the HVAC system before you close." },
    ]}
    relatedArticles={[
      { label: "How to Analyze a Rental Property Deal", href: "/blog/investing/how-to-analyze-rental-property" },
      { label: "The BRRRR Strategy Explained", href: "/blog/investing/brrrr-method-real-estate" },
      { label: "Short-Term Rental Investing", href: "/blog/investing/short-term-rental-investing" },
    ]}
  >
    <p>
      There are two versions of how a first rental property goes.
    </p>
    <p>
      In one version, you close on a property, place a tenant within three weeks, collect rent for years, and refinance when the equity builds. The monthly cash flow isn't massive — maybe $200 after everything — but the equity growth and tax benefits make it a strong long-term hold. You learn a ton, make some mistakes, and buy a second one eighteen months later.
    </p>
    <p>
      In the other version, you overpay for a property in a market you didn't research, underestimate expenses, place a bad tenant because you're in a hurry, and spend your first year fielding calls, paying for repairs you didn't budget for, and questioning every decision you made. A few people in that version sell the property at a loss within two years.
    </p>
    <p>
      The difference between those two outcomes is almost entirely in what you do before you make an offer.
    </p>

    <h2>Step 1: Choose Your Market Deliberately</h2>
    <p>
      The first question isn't "what property should I buy?" It's "where should I be buying?"
    </p>
    <p>
      Local investing has real advantages — you can drive to the property, you know the neighborhoods, and you can manage it yourself if needed. But local markets aren't always the right fit financially. High-cost cities often produce negative cash flow even when you buy well.
    </p>
    <p>
      Out-of-state investing opens up markets where the price-to-rent ratios actually work. The trade-off is that you're managing from a distance, which requires a good property manager and more upfront research.
    </p>
    <p>
      Two different strategies produce two different market profiles:
    </p>
    <ul>
      <li><strong>Cash flow markets:</strong> Midwest and Southeast cities where rents are strong relative to purchase prices. Think Memphis, Cleveland, Indianapolis. Lower appreciation potential, but the property often pays for itself from day one.</li>
      <li><strong>Appreciation markets:</strong> Coastal or high-demand cities where rents barely cover expenses but properties gain value over time. This works — but it requires patience, capital reserves, and a longer time horizon.</li>
    </ul>
    <p>
      Neither strategy is wrong. But mixing them up — expecting appreciation-market returns in a cash-flow market, or expecting cash flow in an appreciation market — is how investors end up disappointed.
    </p>

    <h2>Step 2: Run the Numbers Honestly</h2>
    <p>
      This is where most first-time investors go wrong. They see a property renting for $1,400/month, do the math against the mortgage payment, and call it $600/month in profit. It isn't.
    </p>
    <p>
      A realistic expense analysis looks like this:
    </p>
    <ul>
      <li><strong>Vacancy (5–8%):</strong> On $1,400/month rent, budget $70–$112/month for times the unit sits empty between tenants or during evictions.</li>
      <li><strong>Property management (8–10%):</strong> Even if you self-manage now, budget $112–$140/month. You may not self-manage forever, and this keeps your analysis honest.</li>
      <li><strong>Maintenance (5–10%):</strong> Toilets, appliances, HVAC filters, general upkeep — budget $70–$140/month.</li>
      <li><strong>CapEx reserve (5–10%):</strong> Big-ticket items — roof, water heater, HVAC system, windows. Budget another $70–$140/month.</li>
      <li><strong>Insurance and property taxes:</strong> Run the actual numbers for the specific property. Don't guess.</li>
    </ul>
    <div className="callout">
      <strong>The real math on that $1,400/month rental:</strong>
      <ul>
        <li>Gross rent: $1,400</li>
        <li>Vacancy (6%): -$84</li>
        <li>Management (9%): -$126</li>
        <li>Maintenance (7%): -$98</li>
        <li>CapEx reserve (7%): -$98</li>
        <li>Insurance: -$75</li>
        <li>Property taxes: -$125</li>
        <li>Total expenses (ex-mortgage): -$606</li>
        <li>Net operating income: $794</li>
      </ul>
      <p>If your mortgage payment on this property is $750, you're at $44/month cash flow. Not $600. That's why the analysis matters.</p>
    </div>
    <p>
      For a detailed breakdown of every cost category, see our <Link to="/blog/property-management/rental-property-expenses">complete rental property expenses guide</Link>. A property that pencils at thin margins after full expenses isn't necessarily a bad investment — equity paydown and appreciation contribute to total return. But you need to know what you're actually buying.
    </p>

    <h2>Step 3: Understand the Financing</h2>
    <p>
      Investment property loans are different from primary residence loans. Expect:
    </p>
    <ul>
      <li>20–25% down payment (single-family rentals typically 20%, multifamily 25%)</li>
      <li>Interest rates 0.5–1% higher than primary residence rates</li>
      <li>680+ credit score to get competitive rates; below 660 and your options narrow significantly</li>
      <li>Higher reserves requirement — many lenders want 6 months of PITI in the bank after closing</li>
    </ul>
    <p>
      There's one major exception worth knowing: if you're buying a 2–4 unit property and plan to live in one of the units (house hacking), you can use an <Link to="/blog/financing/mortgage-loans-first-time-homebuyers">FHA loan</Link> with as little as 3.5% down. The income from the other units offsets your housing cost. It's one of the best first moves in real estate for investors who are willing to live near their tenants, at least temporarily.
    </p>

    <h2>Step 4: Do Real Due Diligence</h2>
    <p>
      A general home inspection is the minimum. It is not sufficient for an investment property.
    </p>
    <p>
      Get a sewer scope. Seriously. Replacing a sewer line costs $8,000–$20,000 and a standard inspection won't catch it. A sewer scope costs $150–$300. It's the best money you'll spend in due diligence.
    </p>
    <p>
      Get the roof inspected separately if the general inspector flags any concerns at all. Roof replacement runs $10,000–$25,000 on a typical house. Know its age and condition before you close.
    </p>
    <p>
      If the property is occupied, do all of the following:
    </p>
    <ol>
      <li><strong>Read the actual lease.</strong> When does it expire? What does it say about rent increases, pets, subletting? Are there any side agreements or verbal promises you'll need to honor?</li>
      <li><strong>Talk to the tenant directly.</strong> Even a five-minute conversation tells you a lot. Do they seem stable? Are there maintenance issues the seller hasn't mentioned?</li>
      <li><strong>Check local landlord-tenant laws. When you're ready to find a tenant, see our guide to <Link to="/blog/property-management/find-tenant-rental-property">tenant screening and placement</Link>.</strong> Some cities have rent control. Some states have extremely tenant-friendly eviction processes that take 6+ months. You need to know the legal landscape before you're in it.</li>
    </ol>

    <blockquote>
      The <a href="https://www.hud.gov/topics/buying_a_home" target="_blank" rel="noopener noreferrer">HUD homebuying guide</a> covers federal protections for buyers. Explore the full <Link to="/real-estate-investing/rental-property-investing">rental property investing topic page</Link> for more guidance. Buying your first rental property is supposed to be uncomfortable. You're putting real money into a deal with real risks, operating in a market you're still learning. The goal isn't to eliminate that discomfort — it's to make sure the discomfort is from appropriate risk, not from mistakes you could have avoided with better preparation.
    </blockquote>

    <p>
      Do the work upfront. The investors who buy a second property and a third are almost always the ones who were honest with themselves about the numbers on the first one.
    </p>
  </BlogPost>
);

export default FirstRentalProperty;
