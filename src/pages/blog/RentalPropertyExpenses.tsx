import BlogPost from "@/components/BlogPost";

const RentalPropertyExpenses = () => (
  <BlogPost
    title="Monthly Expenses Every Rental Property Owner Should Budget For"
    metaDesc="Most first-time landlords treat rent as profit. It isn't. Here's a complete breakdown of what rental properties actually cost to own, including the expenses that catch beginners off guard."
    slug="rental-property-expenses"
    datePublished="2026-02-13"
    category="Property Management"
    faqs={[
      { q: "What is the 50% rule in rental property investing?", a: "The 50% rule states that operating expenses (excluding the mortgage payment) on a rental property will average about 50% of gross rent over time. On a $1,500/month rental, that means budgeting $750/month for taxes, insurance, management, maintenance, vacancy, and CapEx reserves — before your mortgage payment. It's a quick filter for deal analysis, not a replacement for detailed underwriting." },
      { q: "What is a CapEx reserve for rental properties?", a: "CapEx (capital expenditure) reserves are funds set aside monthly to cover major one-time replacements like roofs ($8,000–$20,000), HVAC systems ($4,000–$8,000), water heaters, flooring, and windows. Most investors budget 5–10% of monthly rent specifically for CapEx, kept separate from the maintenance budget, so that large expenses don't create a cash crisis when they hit." },
      { q: "How much should I budget for maintenance on a rental property?", a: "Budget 5–10% of gross monthly rent for ongoing maintenance — toilets, appliances, HVAC filters, minor repairs. On a $1,500/month rental, that's $75–$150/month. Some months will be zero; some months an appliance fails or a plumbing issue requires $1,500. The average holds over time, which is why budgeting it consistently — not just when something breaks — matters." },
      { q: "What expenses can landlords deduct on their taxes?", a: "Landlords can deduct mortgage interest, property taxes, insurance premiums, management fees, repairs and maintenance, depreciation (1/27.5th of the building's cost basis annually), advertising, legal and professional fees, and travel for property management purposes. Depreciation is the most valuable deduction because it's non-cash — it reduces taxable income without reducing actual cash flow." },
      { q: "What is vacancy rate and how does it affect rental income?", a: "Vacancy rate is the percentage of time a rental unit sits empty in a given year. A 7% vacancy rate means you budget for roughly 25 days of vacancy per year — about 2.5 weeks between tenants or during turnover. On $1,500/month rent, that's $1,050/year in lost income. Always model vacancy in your cash flow analysis; assuming 100% occupancy sets you up for disappointment." },
    ]}
  >
    <p>Here's a mistake that costs landlords real money: they look at rent as revenue and the mortgage payment as the only expense. Everything in between — vacancy, management, maintenance, reserves — gets forgotten until it bites them.</p>

    <p>A property renting for $1,500/month with an $1,100 mortgage payment is not generating $400/month in profit. It might be generating $0. It might be negative. Here's the actual math.</p>

    <h2>Fixed Monthly Expenses</h2>
    <p>These don't change month to month, which makes them easy to account for — and yet people still miss them:</p>

    <ul>
      <li><strong>Mortgage (principal and interest):</strong> The number your lender gives you. Easy.</li>
      <li><strong>Property taxes:</strong> Divide your annual bill by 12 and treat it as a monthly cost. On a $200,000 property in a typical market, this might be $200–$400/month.</li>
      <li><strong>Insurance:</strong> Landlord insurance (not homeowner's — different policy) runs higher than owner-occupied rates. Budget $100–$200/month on a single-family rental.</li>
      <li><strong>HOA fees:</strong> If applicable. These vary wildly and can significantly affect cash flow, especially in condo associations.</li>
    </ul>

    <h2>Variable Operating Expenses</h2>
    <p>These fluctuate but need to be budgeted as if they're monthly costs, because on average they are:</p>

    <ul>
      <li><strong>Property management (8–12% of gross rent + leasing fee):</strong> If you hire a manager, expect 10% of collected rent plus one month's rent as a leasing fee every time you turn the unit. On $1,500/month rent, that's $150/month ongoing, and $1,500 every time you place a new tenant. That leasing fee often gets forgotten in pro formas.</li>
      <li><strong>Maintenance (5–10% of gross rent):</strong> Budget $75–$150/month on a $1,500 rental. Some months are zero. Some months the HVAC fails and it's $3,000. This average holds over time.</li>
      <li><strong>Vacancy (5–8%):</strong> Even good landlords with good tenants experience turnover. Budget one month empty per year at minimum — that's 8.3% of annual rent. On a $1,500 property, that's $1,500 per year, or $125/month amortized.</li>
    </ul>

    <h2>CapEx Reserves — The Most Ignored Category</h2>
    <p>Capital expenditures are the big-ticket replacements that aren't maintenance — they're one-time costs that happen every 10–25 years. Most landlords save nothing for these, then get surprised when a $6,000 HVAC replacement shows up.</p>

    <p>The major items to reserve for:</p>
    <ul>
      <li>HVAC system: $4,000–$8,000 to replace</li>
      <li>Roof: $8,000–$20,000 depending on size and materials</li>
      <li>Water heater: $800–$2,000</li>
      <li>Flooring replacement: $3,000–$8,000 for a full house</li>
      <li>Windows, appliances, plumbing, electrical — all eventually need attention</li>
    </ul>

    <p>A reasonable CapEx reserve is 5–10% of gross monthly rent, kept <em>separate</em> from your maintenance budget. It's not money you spend — it's money you accumulate so that when the roof needs replacing in year 14, you're not scrambling.</p>

    <h2>The Full Picture on a $1,500/Month Rental</h2>
    <p>Let's run the actual numbers on a $1,500/month rental with a $1,100 mortgage payment:</p>

    <ul>
      <li>Mortgage (P&I): $1,100</li>
      <li>Property taxes: $250</li>
      <li>Insurance: $100</li>
      <li>Management (10%): $150</li>
      <li>Maintenance reserve (7%): $105</li>
      <li>Vacancy reserve (7%): $105</li>
      <li>CapEx reserve (7%): $105</li>
    </ul>

    <p>Total expenses: $1,915. Monthly rent: $1,500. That property is losing $415/month before you've fixed a single thing.</p>

    <p>This is the 50% rule in action. Operating expenses excluding debt service typically run 40–60% of gross rent. On $1,500/month, that's $600–$900 in non-mortgage expenses. If your mortgage is above $600–$900, you almost certainly don't cash flow. Many landlords own properties that match this description exactly and wonder why the investment isn't "working."</p>

    <h2>Tax Deductions That Offset the Costs</h2>
    <p>Rental property ownership does have real tax advantages — they just don't change the cash flow math above. What you can deduct against rental income:</p>

    <ul>
      <li>Mortgage interest (not the full payment — just the interest portion)</li>
      <li>Property taxes</li>
      <li>Depreciation — the IRS lets you deduct 1/27.5th of the property value annually, which is a non-cash deduction that can offset income</li>
      <li>Management fees, maintenance and repairs, insurance, advertising, professional fees</li>
    </ul>

    <p>Depreciation is real money. On a $200,000 property value (excluding land), that's $7,272/year in paper deductions that reduce your taxable income. But it doesn't put cash in your account. Understand what these deductions do and don't do before you build a business case around them.</p>

    <h2>Self-Managing vs. Hiring a Property Manager</h2>
    <p>Keeping the 10% management fee in your pocket is real — on a $1,500 rental, that's $1,800/year. But self-managing costs you something too: time, knowledge of landlord-tenant law in your state, the stress of late-night maintenance calls, and the expertise to handle evictions without making expensive legal mistakes.</p>

    <p>For one property in your backyard: self-managing is reasonable if you're willing to learn the legal requirements. For multiple properties, properties out of state, or if you have a day job you're not willing to compromise — the management fee is almost certainly worth it. The math changes when one poorly-handled eviction costs you $3,000 in legal fees and two months of vacancy.</p>

    <div className="callout">
      <p>The question is never just "what does rent cover?" The question is: after mortgage, taxes, insurance, management, maintenance, vacancy, and CapEx reserves — is there anything left? Model it honestly before you buy.</p>
    </div>
  </BlogPost>
);

export default RentalPropertyExpenses;
