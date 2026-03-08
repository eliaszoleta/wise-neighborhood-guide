import TopicPage from "@/components/TopicPage";

const RentalPropertyInvesting = () => (
  <TopicPage
    title="Rental Property Investing: How to Build Real Passive Income"
    metaDesc="A practical guide to rental property investing — how to find profitable properties, run the numbers correctly, secure financing, and manage tenants without it consuming your life."
    parentLabel="Real Estate Investing"
    parentHref="/real-estate-investing"
    intro="Rental property investing works for a lot of people because the core mechanics are straightforward: buy a property, rent it out, collect more than you spend, and let appreciation and equity build in the background. The hard part is doing that first step correctly — because buying the wrong property at the wrong price undoes everything else. Here's how to approach it without common beginner mistakes."
    sections={[
      {
        heading: "Why Rental Properties Work (and When They Don't)",
        content: "The wealth-building case for rentals rests on four things happening simultaneously: monthly cash flow after expenses, long-term appreciation as values rise, tax benefits through depreciation and deductions, and equity growth as tenants pay down your mortgage. Unlike stocks, real estate lets you control the asset, improve it, and force appreciation through renovations. The risk side is equally real: bad tenants, vacancy, unexpected repairs, and markets that don't appreciate can all eat your returns. The difference between investors who build wealth with rentals and those who don't usually comes down to whether they ran honest numbers before buying.",
        links: [
          { label: "IRS Rental Income and Expense Guide", url: "https://www.irs.gov/businesses/small-businesses-self-employed/rental-income-and-expenses-real-estate-tax-tips" },
          { label: "Investopedia: Buying Your First Rental Property", url: "https://www.investopedia.com/articles/investing/090815/buying-your-first-investment-property-top-10-tips.asp" },
        ],
      },
      {
        heading: "How to Find Rental Properties Worth Buying",
        content: "Location drives rental demand more than any other single factor. Look for markets with strong employment (ideally diverse employers, not one dominant industry), low vacancy rates, growing or stable population, and rents that support positive cash flow at current purchase prices. Within a market, neighborhoods with quality school districts, low crime, and access to employment centers tend to hold value and attract reliable tenants. The 1% rule — monthly rent should equal at least 1% of the purchase price — is a useful quick filter, but it's not a substitute for a full cash flow analysis. In competitive markets, hitting 1% may be impossible, and in some markets it's achievable and still a bad deal.",
        links: [
          { label: "Zillow Rental Manager", url: "https://www.zillow.com/rental-manager/" },
          { label: "Rentometer — Rent Comparison Tool", url: "https://www.rentometer.com/" },
          { label: "BiggerPockets Rental Property Calculator", url: "https://www.biggerpockets.com/investment-property-calculator" },
        ],
      },
      {
        heading: "Financing Your First Rental Property",
        content: "Investment property financing is more expensive than owner-occupied financing — expect to put down 15–25% with a conventional loan, and rates will run 0.5–1% higher than what you'd see for a primary residence. FHA loans (3.5% down) are an option only if you're house hacking — buying a small multifamily and living in one unit. DSCR loans have become popular for investors because they qualify you based on the property's rental income rather than your personal income — useful if you're self-employed or have complex taxes. Shop at least 3–4 lenders before committing. A 0.25% rate difference on a 30-year mortgage adds up faster than most people realize.",
        links: [
          { label: "Bankrate Mortgage Rate Comparison", url: "https://www.bankrate.com/mortgages/mortgage-rates/" },
          { label: "NerdWallet: Investment Property Loans", url: "https://www.nerdwallet.com/article/mortgages/investment-property-loans" },
        ],
      },
      {
        heading: "Managing Tenants Without It Becoming a Second Job",
        content: "Tenant screening is the most important thing you do as a landlord. A poorly screened tenant costs more — in time, money, and stress — than a vacancy. At minimum, check credit (look for a score above 620 and no recent evictions), verify income at 3x the monthly rent, contact prior landlords, and run a background check. Once you have tenants, invest in a legally compliant lease, document the property's condition at move-in with photos, and respond to maintenance requests promptly — deferred maintenance almost always costs more than the repair would have. Self-managing works well for local portfolios of 1–5 units. Once you're managing remotely or scaling beyond that, a property manager at 8–12% of rent usually pays for itself.",
        links: [
          { label: "TransUnion SmartMove — Tenant Screening", url: "https://www.mysmartmove.com/" },
          { label: "Avail — Landlord Software", url: "https://www.avail.co/" },
          { label: "State Landlord-Tenant Laws Reference", url: "https://www.nolo.com/legal-encyclopedia/state-landlord-tenant-laws" },
        ],
      },
    ]}
    faqs={[
      {
        q: "How much money do I actually need to start investing in rental properties?",
        a: "For a conventional investment property loan, plan on 15–25% down plus closing costs (typically 2–5%) and 3–6 months of reserves. On a $200,000 property, that might mean $35,000–$55,000 out of pocket. If you house hack by buying a duplex or small multifamily with an FHA loan and living in one unit, you can get started with 3.5% down — though that approach requires you to be willing to live next to your tenants.",
      },
      {
        q: "What's the biggest mistake first-time rental property investors make?",
        a: "Underestimating expenses. Most beginners budget mortgage, taxes, and insurance — and forget vacancy (plan 5–8%), maintenance (budget 1% of property value per year), CapEx reserves for big-ticket items like roofs and HVAC, and property management if they ever want to stop self-managing. A property that looks cash-flow positive without those numbers often turns negative once you run them honestly.",
      },
      {
        q: "Should I hire a property manager or self-manage?",
        a: "If your rental is within 30 minutes of where you live and you have the time, self-managing saves you 8–12% of gross rent annually — which on a $1,500/month rental is $1,440–$2,160 per year. That's meaningful. But if your goal is passive income rather than a second job, or if you're investing out of state, a good property manager is worth it. Interview at least two before hiring and check reviews carefully.",
      },
    ]}
  />
);

export default RentalPropertyInvesting;
