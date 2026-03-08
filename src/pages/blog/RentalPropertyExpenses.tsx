import TopicPage from "@/components/TopicPage";

const RentalPropertyExpenses = () => (
  <TopicPage
    title="Monthly Rental Property Expenses Every Landlord Should Budget For"
    metaDesc="Most new landlords underestimate what a rental property actually costs to own. Here's a complete breakdown of monthly and recurring expenses, with realistic ranges for each."
    parentLabel="Blog"
    parentHref="/blog"
    intro="One of the most common mistakes first-time landlords make is treating rent as profit. Rent is revenue. The actual cash flow — what's left after expenses — is typically a fraction of the gross rent. Understanding all the expense categories before you buy (not after) is what separates investors who build long-term wealth from those who get burned on a property that looks good on paper."
    sections={[
      {
        heading: "Fixed Monthly Expenses",
        content: "These are expenses you pay every month regardless of whether the unit is occupied. Mortgage payment (principal and interest): this is typically the largest single expense for financed properties. Property taxes: usually paid annually or semi-annually but should be budgeted monthly. Divide the annual property tax bill by 12 to get the monthly figure. Insurance: landlord insurance (also called dwelling or fire policy) is required by most lenders and typically costs $800–$2,000/year for a single-family home, depending on location and property value. HOA fees: if the property is in a condo, townhome, or planned community, HOA fees can range from $100 to $500+/month and must be included. Some lenders require an escrow account that automatically funds taxes and insurance — your monthly payment already includes those. Know whether yours does.",
        links: [],
      },
      {
        heading: "Variable Operating Expenses",
        content: "These occur regularly but vary in timing and amount. Property management: if you hire a property manager, expect 8–12% of gross monthly rent plus a leasing fee (typically 50–100% of one month's rent when placing a new tenant). Maintenance and repairs: budget 5–10% of gross rent monthly as a maintenance reserve. On a $1,500/month property, that's $75–$150/month set aside. This covers minor repairs — plumbing leaks, appliance issues, HVAC service calls. Vacancy: even in tight rental markets, units sit vacant between tenants. Budget 5–8% of gross rent annually for vacancy (roughly 3–4 weeks per year). Landlord-paid utilities: some rentals include water, trash, or lawn care. Know which utilities you're responsible for before running your numbers.",
        links: [],
      },
      {
        heading: "CapEx Reserves — The Expense Most Landlords Ignore",
        content: "CapEx stands for capital expenditures — major repairs and replacements that happen infrequently but cost significant money when they do. HVAC replacement: $4,000–$8,000. Roof replacement: $8,000–$20,000 depending on size and materials. Water heater: $800–$2,000. Electrical panel upgrade: $2,000–$5,000. Flooring replacement: $3,000–$8,000 for a house. These are not maintenance — they're replacements of major systems. A property with a 12-year-old roof, 15-year-old HVAC, and original plumbing is going to hit you with significant CapEx within the next few years. Build a monthly CapEx reserve of 5–10% of gross rent (separate from your maintenance reserve) to avoid being cash-strapped when a major system fails. Experienced investors who skip CapEx reserves often describe the moment a roof or HVAC fails as the moment their 'cash-flowing' property suddenly produced negative income for 6–12 months.",
        links: [],
      },
      {
        heading: "The 50% Rule as a Quick Sanity Check",
        content: "The 50% rule says that, on average, operating expenses (everything except debt service) will consume about 50% of gross rent. It's not exact — a newer property with low taxes might run 35%; an older property with deferred maintenance might run 60% — but it's a useful back-of-envelope filter. If your mortgage payment equals 50% or more of gross rent, the property almost certainly doesn't cash flow after expenses. For a $1,500/month rental: $750 covers operating expenses (taxes, insurance, management, maintenance, vacancy, CapEx), leaving $750 for debt service and profit. If your mortgage payment is $900, you're cash-flow negative by $150/month before accounting for anything else.",
        links: [],
      },
    ]}
    faqs={[
      {
        q: "What expenses can landlords deduct on their taxes?",
        a: "Rental property expenses are generally tax-deductible, including mortgage interest, property taxes, insurance, property management fees, repairs and maintenance, depreciation (a non-cash deduction on the building value, typically over 27.5 years), professional fees (accounting, legal), and travel related to property management. Consult a CPA — real estate tax rules are complex and the deductibility of some expenses depends on your income level and how much time you actively spend managing properties.",
      },
      {
        q: "How do I know if a rental property will cash flow?",
        a: "Run a full proforma: monthly gross rent, minus vacancy (5–8%), minus property management (8–12%), minus taxes and insurance (get actual quotes), minus maintenance reserve (5–10% of gross rent), minus CapEx reserve (5–10%), minus any landlord-paid utilities. What's left is your net operating income (NOI). Subtract your monthly mortgage payment. What remains is your monthly cash flow. If it's negative or near zero, the deal probably doesn't make sense as a cash flow investment — appreciation plays are a different calculation.",
      },
      {
        q: "Should I use a property manager or self-manage?",
        a: "Self-managing saves 8–12% of gross rent but requires your time, availability, and emotional bandwidth to handle tenant issues, maintenance calls, and turnover. Property managers are worth it when you don't want to be a hands-on landlord, when you invest out of state, or when your time has higher-value uses. Budget for property management even if you plan to self-manage — circumstances change, and you want to know the deal still works if you eventually hire one.",
      },
    ]}
  />
);

export default RentalPropertyExpenses;
