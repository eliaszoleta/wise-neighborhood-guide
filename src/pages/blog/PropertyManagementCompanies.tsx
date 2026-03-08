import TopicPage from "@/components/TopicPage";

const PropertyManagementCompanies = () => (
  <TopicPage
    title="Property Management Companies: What They Do and Whether You Need One"
    metaDesc="Property management companies handle tenants, maintenance, rent collection, and compliance on your behalf. Here's what they do, what they cost, and how to decide if hiring one is worth it."
    parentLabel="Blog"
    parentHref="/blog"
    intro="A property management company takes the day-to-day operations of a rental off your plate: marketing vacancies, screening tenants, collecting rent, coordinating maintenance, handling tenant issues, and keeping the property in compliance with local landlord-tenant law. For some investors, this is essential. For others, it's an unnecessary expense. Here's how to evaluate the decision honestly."
    sections={[
      {
        heading: "What Property Managers Actually Do",
        content: "Full-service property management typically includes: marketing vacant units on Zillow, Apartments.com, and other rental platforms; showing the property to prospective tenants; running credit, background, and income checks; drafting and executing lease agreements; collecting monthly rent and handling late payments; coordinating routine and emergency maintenance with a contractor network; conducting move-in and move-out inspections; managing security deposit accounting; handling lease renewals and rent increases; and dealing with lease violations, non-payment, and evictions when necessary. Some property managers also provide monthly financial statements, annual tax summaries, and 24/7 maintenance hotlines. The scope of services varies — read the management agreement carefully to understand what's included versus billed separately.",
        links: [],
      },
      {
        heading: "What Property Management Costs",
        content: "Standard fee structure: monthly management fee of 8–12% of gross rent collected, plus a leasing fee when a new tenant is placed (typically 50–100% of one month's rent). So on a $1,500/month rental with 10% management and a one-month leasing fee: $150/month management plus $1,500 per tenant placement. Over a two-year tenancy with one placement, that's $3,600 in management fees plus $1,500 in leasing fees — $5,100 total. Watch out for additional fees that some managers charge: lease renewal fee (some charge 25–50% of a month's rent for renewals), maintenance markup (some charge 10–15% on top of contractor invoices), vacancy management fee, and early termination fee.",
        links: [],
      },
      {
        heading: "Evaluating Whether to Self-Manage or Hire",
        content: "Self-management saves the 8–12% monthly fee and leasing fees — significant over time. But it costs your time: taking maintenance calls at inconvenient hours, handling tenant disputes, staying current on landlord-tenant law in your jurisdiction, and processing rent payments and late notices. For investors with one or two local properties, self-management is often feasible and worthwhile. It becomes less practical as you scale, as the properties are farther away, or when your time has higher-value uses. The classic decision point: if your hourly rate in your primary work exceeds the cost of management per hour of saved time, hire the manager. Also consider risk tolerance — property managers carry E&O insurance and have legal expertise around tenant screening and eviction procedures that individual landlords often lack.",
        links: [],
      },
      {
        heading: "How to Find and Vet a Property Manager",
        content: "Start with referrals from other local investors — the best property managers get most of their new clients through word of mouth. Investor associations and local real estate meetups are good sources. Interview at least 2–3 managers before signing. Questions to ask: How many units do they manage? What's their average vacancy rate? How do they handle maintenance calls? What's their eviction rate and process? How quickly do they fill vacancies? Can they provide references from current clients? Red flags: vague answers on fees, unwillingness to show you sample monthly statements, high staff turnover, or an office that seems disorganized when you visit. Review the management agreement with an attorney before signing — look especially at cancellation terms and what happens if they sell a property on your behalf.",
        links: [],
      },
    ]}
    faqs={[
      {
        q: "Is a property manager worth the cost?",
        a: "For most investors who own properties remotely, have full-time jobs, or own more than 2–3 units, yes — the time savings and professional tenant screening often justify the 8–12% monthly cost. For self-employed investors or those with a single local property, the math is less clear. Run your numbers: calculate your monthly management fee and annual leasing fees, and compare that to the realistic value of your time spent managing.",
      },
      {
        q: "Can a property manager help me if I have a difficult tenant?",
        a: "Yes, and this is one of the clearest cases where professional management is worth it. Experienced property managers have handled hundreds of difficult tenant situations — payment issues, lease violations, emotional confrontations — and know the legally compliant process for each. They have established relationships with eviction attorneys. Many landlords who try to self-manage a difficult tenant situation make costly procedural mistakes (improper notices, self-help evictions, illegal actions) that extend the problem and expose them to counter-claims.",
      },
      {
        q: "What's the difference between a property manager and a real estate agent?",
        a: "A real estate agent helps you buy and sell properties. A property manager handles the ongoing operation of a rental property you already own. Some real estate agents also offer property management services, but they're different functions. A dedicated property management company — focused exclusively on operations — is generally more effective for active portfolio management than a sales agent who also manages a few rentals as a side service.",
      },
    ]}
  />
);

export default PropertyManagementCompanies;
