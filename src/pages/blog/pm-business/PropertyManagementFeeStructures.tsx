import BlogPost from "@/components/BlogPost";

const PropertyManagementFeeStructures = () => (
  <BlogPost
    title="Property Management Fee Structures: How PM Companies Charge"
    metaDesc="A breakdown of how property management companies actually charge -- percentage-of-rent management fees, leasing fees, maintenance markup, and what owners expect to be included."
    slug="pm-business/property-management-fee-structures"
    datePublished="2026-10-17"
    category="PM Business"
    faqs={[
      { q: "What percentage do property managers typically charge?", a: "Most full-service residential property managers charge 8-12% of monthly collected rent, though this varies by market, property type, and how much is bundled into the base fee versus billed separately." },
      { q: "What is a leasing fee in property management?", a: "A leasing fee is a separate charge for finding and placing a new tenant -- marketing the vacancy, showing the unit, screening applicants, and preparing the lease. It's commonly 50-100% of one month's rent, charged on top of the ongoing management fee once a tenant moves in." },
      { q: "Do property managers charge during vacancy?", a: "Most percentage-of-rent management fees aren't charged while a unit sits vacant, since there's no rent collected to take a percentage of -- this is actually a meaningful incentive alignment point to highlight to prospective owners, since it means you're motivated to fill vacancies quickly." },
      { q: "Should a new PM company charge flat fees instead of percentages?", a: "Some new PM companies use flat monthly fees per door instead of a percentage, which can be simpler to explain and more predictable for owners with lower-rent units where a percentage fee would be unusually small. Either model can work -- the key is being clear and consistent about what's included." },
    ]}
    relatedArticles={[
      { label: "How to Start a Property Management Company", href: "/pm-business/how-to-start-a-property-management-company" },
      { label: "How to Get Your First Property Management Clients", href: "/pm-business/how-to-get-property-management-clients" },
      { label: "Property Management Company Startup Costs", href: "/pm-business/property-management-company-startup-costs" },
    ]}
  >
    <p>
      Pricing is one of the first conversations you'll have with a
      prospective owner client, and getting the structure right matters as
      much as the number itself — owners want to know exactly what's included
      before they hand over the keys to their investment.
    </p>

    <h2>The Standard Fee Components</h2>
    <table>
      <thead><tr><th>Fee Type</th><th>Typical Range</th><th>What It Covers</th></tr></thead>
      <tbody>
        <tr><td>Management fee</td><td>8-12% of collected rent</td><td>Rent collection, maintenance coordination, tenant communication, ongoing admin</td></tr>
        <tr><td>Leasing fee</td><td>50-100% of one month's rent</td><td>Marketing, showings, applicant screening, lease preparation for a new tenant</td></tr>
        <tr><td>Renewal fee</td><td>$0-$200 or a smaller % of rent</td><td>Processing a lease renewal with an existing tenant</td></tr>
        <tr><td>Maintenance markup</td><td>0-15% on top of vendor invoices</td><td>Coordinating and overseeing repair work</td></tr>
        <tr><td>Setup/onboarding fee</td><td>$0-$300 one-time</td><td>Initial property assessment and account setup</td></tr>
      </tbody>
    </table>

    <h2>Percentage of Collected Rent vs. Percentage of Asking Rent</h2>
    <p>
      Charge your management fee on <strong>collected</strong> rent, not
      asking rent. This single distinction matters a lot: if an owner's unit
      sits vacant or a tenant pays late, a fee based on collected rent means
      you're only paid when they're actually paid — a meaningful trust signal
      that your incentives are aligned with theirs, and one worth explaining
      explicitly in your pitch.
    </p>

    <h2>What Owners Expect to Be Included vs. Billed Separately</h2>
    <p>
      Be explicit in your management agreement about what's bundled into the
      base management fee (typically: rent collection, tenant communication,
      routine coordination) versus what's billed separately (typically:
      actual maintenance/repair costs, leasing fees for new tenants, eviction
      filing costs if it comes to that). Ambiguity here is one of the most
      common sources of owner dissatisfaction with PM companies — not the
      fee amount itself, but surprise charges nobody explained upfront.
    </p>

    <h2>Setting Your Rates as a New Company</h2>
    <p>
      New PM companies sometimes underprice to win their first few clients,
      reasoning they need the track record more than the margin. This can
      work short-term, but property management is a long-term, low-churn
      relationship business — underpriced clients from day one are hard to
      re-price later without risk of losing them. Price at a sustainable rate
      from the start, and compete on responsiveness and communication rather
      than being the cheapest option in your market.
    </p>
  </BlogPost>
);

export default PropertyManagementFeeStructures;
