import TopicPage from "@/components/TopicPage";

const FindTenantRentalProperty = () => (
  <TopicPage
    title="How to Find a Tenant for Your Rental Property: Proven Strategies That Work"
    metaDesc="Finding a good tenant is more than posting on Zillow and hoping. Here's how to market a vacancy, screen applicants, and select tenants who pay on time and take care of the property."
    parentLabel="Blog"
    parentHref="/blog"
    intro="A vacant rental property is one of the most expensive things a landlord can have. Every month without a tenant is a month of mortgage, insurance, taxes, and utilities you're covering with no offsetting income. But the rush to fill a vacancy is also one of the most common causes of landlord headaches — because a bad tenant costs far more, and causes far more stress, than a 30-day vacancy. Here's how to find tenants efficiently without compromising on quality."
    sections={[
      {
        heading: "Where to List Your Vacancy",
        content: "Zillow Rental Manager, Apartments.com, and Facebook Marketplace are the three highest-traffic platforms for residential rentals. Zillow syndicates to HotPads and Trulia automatically; Apartments.com syndicates to Realtor.com. A well-written listing on those three platforms covers the vast majority of renter search traffic. For higher-end or furnished rentals, add Furnished Finder (great for travel nurses and corporate tenants) and Craigslist. The listing itself matters: use clear, natural-light photos of every room; include exact square footage, bedroom/bathroom count, pet policy, parking situation, and which utilities are included or excluded. Vague listings attract vague applicants. Be specific about your requirements upfront — minimum income (typically 3x the monthly rent), credit score expectations, no-smoking policy — so unqualified applicants self-select out before wasting your time.",
        links: [],
      },
      {
        heading: "Tenant Screening: What to Check and Why",
        content: "A rental application should collect: full legal name, date of birth, Social Security number, employment information and income documentation, rental history with landlord references, and consent to a background and credit check. Run a credit check (TransUnion SmartMove, Rentec Direct, or RentSpree are common platforms). Look at the credit score as a general indicator, but pay more attention to: history of evictions, past landlord collections, active court judgments, and patterns of late payment. Check criminal background according to your state's fair housing guidelines — some states restrict what criminal history you can screen on. Call previous landlords. This step is skipped by many landlords and is often the most revealing: ask directly whether they would rent to this person again.",
        links: [],
      },
      {
        heading: "Income and Employment Verification",
        content: "The standard income requirement is 3x gross monthly rent. For a $1,500/month apartment, the applicant should earn at least $4,500/month before taxes. Ask for the last two pay stubs, or a bank statement showing consistent deposits if self-employed. For self-employed applicants, last year's tax return is more reliable than income they claim but can't document. Be careful not to require income documentation that creates disparate impact on protected classes — fair housing law applies here. If you have multiple qualified applicants, use objective criteria to select (credit score, income ratio, application date) rather than subjective preferences.",
        links: [],
      },
      {
        heading: "Setting Clear Move-In Terms",
        content: "Before signing a lease, walk the property with the tenant and document the condition in writing with photos — both parties should sign the move-in inspection. This protects you at move-out when deducting from the security deposit. Your lease should clearly specify rent due date and late fee schedule, pet policy and pet deposit, maintenance request process, lease renewal terms, entry notice requirements (typically 24–48 hours required by law), and what counts as a lease violation. Use a state-specific lease template — generic online forms often miss required disclosures and can be unenforceable. Your local apartment association often sells state-compliant lease templates for $20–$50.",
        links: [],
      },
    ]}
    faqs={[
      {
        q: "How long does it typically take to find a tenant?",
        a: "In most markets, a well-priced, well-listed property in move-in condition will generate inquiries within 24–72 hours and typically place a tenant within 2–4 weeks. Pricing is the biggest variable: an overpriced rental sits vacant; a well-priced rental in a rental-demand market might receive multiple applications within days. Seasonality matters too — listings in May and June move faster than those listed in November.",
      },
      {
        q: "Should I allow pets in my rental?",
        a: "Allowing pets increases your applicant pool significantly — roughly 70% of renters own a pet, and finding pet-friendly housing is a pain point for many of them. The risk is property damage. Mitigate it with a pet deposit (or non-refundable pet fee, depending on your state's rules), require renters insurance, and specify breed/weight restrictions in your lease. Properties that prohibit pets often take longer to rent, especially in suburban markets where pet ownership rates are higher.",
      },
      {
        q: "Can I reject an applicant based on credit score?",
        a: "You can use credit score as a screening criterion as long as it's applied consistently to all applicants and isn't being used as a proxy for a protected class. Document your minimum credit score requirement in advance and apply it uniformly. Many landlords set a floor of 620–650. If you reject an applicant based on credit, you're generally required to provide an adverse action notice explaining why and which credit reporting agency was used.",
      },
    ]}
  />
);

export default FindTenantRentalProperty;
