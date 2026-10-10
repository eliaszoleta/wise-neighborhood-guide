// ─── Config for the 3 new "start a business" verticals ─────────────────────
// Drives StartBusinessHub.tsx and StartBusinessStatePage.tsx -- one shared
// pair of components, parameterized by this config, rather than three
// near-identical copies. See stateBusinessStartup.ts for the LLC data these
// pages pull from (shared across all three verticals, since LLC filing
// facts don't depend on industry).
//
// licensingHedge is deliberately generic/non-state-specific: unlike the LLC
// filing fee (a stable, verifiable, state-published number), contractor,
// property-management, and professional licensing requirements vary by
// state in ways that are harder to verify at this scale and carry real
// consequences if asserted incorrectly. Each config points readers to the
// right TYPE of regulator and national certifying body instead of guessing
// state-specific specifics.

export type VerticalKey = "pm-business" | "home-inspection" | "mortgage-broker";

export interface VerticalChecklistStep {
  title: string;
  body: string;
  href: string;
  linkText: string;
}

export interface VerticalConfig {
  key: VerticalKey;
  urlPrefix: string; // e.g. "start-a-property-management-business"
  businessLabel: string; // e.g. "Property Management Company"
  heroDescription: string;
  blogCategorySlug: string;
  blogCategoryLabel: string;
  nationalBody: { name: string; description: string };
  licensingHedge: string;
  checklist: VerticalChecklistStep[];
  faqExtra: (stateName: string) => { q: string; a: string }[];
}

export const VERTICAL_CONFIGS: Record<VerticalKey, VerticalConfig> = {
  "pm-business": {
    key: "pm-business",
    urlPrefix: "start-a-property-management-business",
    businessLabel: "Property Management Company",
    heroDescription:
      "What it costs to register and insure a property management company, what to check on licensing, and the full step-by-step checklist to land your first owner client.",
    blogCategorySlug: "pm-business",
    blogCategoryLabel: "PM Business",
    nationalBody: {
      name: "NARPM (National Association of Residential Property Managers)",
      description:
        "NARPM is the industry's primary voluntary professional association, offering respected designations like RMP and MPM. It's a credibility layer, not a substitute for your state's licensing requirement.",
    },
    licensingHedge:
      "Property management licensing varies significantly by state -- some states treat it as real estate brokerage activity requiring a licensed broker, some have a separate property-manager-specific license, and others have minimal state-level requirements. Confirm the current rule with your state real estate commission before signing your first management agreement.",
    checklist: [
      { title: "Choose a business structure", body: "Form an LLC rather than operating as a sole proprietor -- you'll be handling other people's rent and deposits.", href: "/pm-business/how-to-start-a-property-management-company", linkText: "Full startup guide" },
      { title: "Confirm your licensing requirement", body: "Check whether your state requires a real estate broker affiliation or a separate PM license.", href: "/pm-business/property-management-licensing-requirements", linkText: "Licensing guide" },
      { title: "Set up trust accounting", body: "Client rent and deposits need a properly segregated trust account before you take your first client.", href: "/pm-business/property-management-software-tools", linkText: "Software & tools guide" },
      { title: "Get insured", body: "General liability plus errors & omissions coverage, before your first signed agreement.", href: "/pm-business/how-to-start-a-property-management-company", linkText: "Insurance overview" },
      { title: "Set your fee structure", body: "Know your management fee, leasing fee, and maintenance markup before you quote an owner.", href: "/pm-business/property-management-fee-structures", linkText: "Fee structure guide" },
      { title: "Find your first owner client", body: "Your network and real estate agent referrals first, cold marketing second.", href: "/pm-business/how-to-get-property-management-clients", linkText: "Client acquisition guide" },
    ],
    faqExtra: (stateName) => [
      { q: `Do I need a real estate broker license to manage property in ${stateName}?`, a: `This genuinely varies by state and isn't worth guessing on. Confirm directly with the ${stateName} real estate commission whether property management for other owners requires broker affiliation, a separate PM license, or neither.` },
    ],
  },
  "home-inspection": {
    key: "home-inspection",
    urlPrefix: "start-a-home-inspection-business",
    businessLabel: "Home Inspection Business",
    heroDescription:
      "What it costs to register and insure a home inspection business, what to check on certification and state licensing, and the full step-by-step checklist to get your first inspection booked.",
    blogCategorySlug: "home-inspection",
    blogCategoryLabel: "Home Inspection",
    nationalBody: {
      name: "ASHI & InterNACHI",
      description:
        "The two major national home inspector associations, each offering training and voluntary certification. Neither replaces your state's licensing requirement where one exists.",
    },
    licensingHedge:
      "Most states license home inspectors with some combination of training hours, a supervised inspection count, and an exam -- but a smaller number of states have no state-level licensing requirement at all. Confirm the current rule with your state's licensing board before planning your timeline.",
    checklist: [
      { title: "Get trained", body: "Complete a structured training program through ASHI, InterNACHI, or a state-approved provider.", href: "/home-inspection/home-inspector-certification-ashi-vs-internachi", linkText: "ASHI vs InterNACHI guide" },
      { title: "Confirm your state's licensing requirement", body: "Some states license inspectors, some don't -- check directly with your state board.", href: "/home-inspection/how-to-start-a-home-inspection-business", linkText: "Full startup guide" },
      { title: "Get insured", body: "General liability plus errors & omissions coverage -- the real risk here is a missed defect, not physical injury.", href: "/home-inspection/home-inspection-business-startup-costs", linkText: "Startup cost breakdown" },
      { title: "Buy your equipment", body: "Ladder, moisture meter, outlet tester, and report software at minimum.", href: "/home-inspection/home-inspection-equipment-checklist", linkText: "Equipment checklist" },
      { title: "Set your pricing", body: "Price by square footage and age, plus common add-ons like radon and sewer scope.", href: "/home-inspection/how-to-price-home-inspections", linkText: "Pricing guide" },
      { title: "Build realtor relationships", body: "Most inspection business comes through buyer's agent referrals, not direct buyer searches.", href: "/home-inspection/how-to-get-home-inspection-clients", linkText: "Client acquisition guide" },
    ],
    faqExtra: (stateName) => [
      { q: `Does ${stateName} require a home inspector license?`, a: `Licensing requirements for home inspectors vary by state, and this changes periodically as states update their rules. Confirm the current requirement directly with ${stateName}'s licensing board rather than assuming.` },
    ],
  },
  "mortgage-broker": {
    key: "mortgage-broker",
    urlPrefix: "start-a-mortgage-broker-business",
    businessLabel: "Mortgage Broker / Loan Officer Career",
    heroDescription:
      "What it costs to get NMLS licensed, how the federal SAFE Act framework works in your state, and the full step-by-step checklist to get your first borrower client.",
    blogCategorySlug: "mortgage-broker",
    blogCategoryLabel: "Mortgage Broker",
    nationalBody: {
      name: "NMLS (Nationwide Multistate Licensing System)",
      description:
        "The single national system every state uses to license mortgage loan originators under the federal SAFE Act -- the most standardized licensing framework covered on this site.",
    },
    licensingHedge:
      "The core NMLS/SAFE Act framework (20 hours of national pre-licensing education, the SAFE exam, a background check) is the same nationally, but each state adds its own additional education hours, fees, and sometimes a state law exam component. Confirm your state's exact add-on requirements on the NMLS Resource Center before registering for courses.",
    checklist: [
      { title: "Complete NMLS pre-licensing education", body: "20 hours nationally, plus any additional hours your state requires.", href: "/mortgage-broker/nmls-safe-act-licensing-explained", linkText: "NMLS & SAFE Act guide" },
      { title: "Pass the SAFE MLO exam", body: "The national test, plus a state law component in some states.", href: "/mortgage-broker/how-to-become-a-mortgage-loan-officer", linkText: "Full licensing guide" },
      { title: "Clear your background check", body: "Fingerprinting and a credit report review, submitted through NMLS.", href: "/mortgage-broker/mortgage-loan-officer-license-cost", linkText: "Licensing cost breakdown" },
      { title: "Get sponsored by a licensed company", body: "Your individual license needs a sponsoring lender or brokerage before it's active.", href: "/mortgage-broker/loan-officer-vs-mortgage-broker", linkText: "Loan officer vs broker guide" },
      { title: "Understand your pay structure", body: "Commission-based, tied to closed loan volume -- know the basics before you start.", href: "/mortgage-broker/how-loan-officers-get-paid", linkText: "Compensation guide" },
      { title: "Build your referral pipeline", body: "Real estate agent relationships drive most new originator business.", href: "/mortgage-broker/how-to-get-first-mortgage-clients", linkText: "Client acquisition guide" },
    ],
    faqExtra: (stateName) => [
      { q: `What does ${stateName} add on top of the national NMLS requirements?`, a: `Most states add some combination of extra education hours, a state law exam component, and state-specific fees on top of the national 20-hour course and SAFE exam. Check ${stateName}'s exact current add-on requirements on the NMLS Resource Center before registering for courses.` },
    ],
  },
};
