// ─── State LLC startup data ─────────────────────────────────────────────────
// Powers /start-a-property-management-business/:state,
// /start-a-home-inspection-business/:state, and
// /start-a-mortgage-broker-business/:state (see StartBusinessStatePage.tsx
// and verticalBusinessConfigs.ts). LLC filing fees are set by each state's
// Secretary of State (or equivalent) and don't depend on industry, so this
// one file is shared across all three verticals rather than duplicated per
// vertical.
//
// Fees are standard, publicly published figures, but states change them --
// they're presented as approximate, and every page using this data should
// tell the reader to confirm the current fee on the filing agency's site
// before filing, not treat this as the final word. This file deliberately
// does NOT assert profession-specific licensing details (which vary far
// more, and far less predictably, than a flat filing fee) -- that's handled
// separately, with a hedged, generic note per vertical in
// verticalBusinessConfigs.ts.
//
// State list and slugs match US_STATES / toSlug() in StateLicense.tsx and
// RealEstateLicense.tsx exactly, so links between this content and the
// existing real-estate-license pages resolve correctly.

export interface StateBusinessStartupInfo {
  name: string;
  slug: string;
  llcFee: number;
  agency: string;
  noIncomeTax: boolean;
  note: string;
}

export const STATE_BUSINESS_STARTUP: StateBusinessStartupInfo[] = [
  { name: "Alabama", slug: "alabama", llcFee: 200, agency: "Alabama Secretary of State", noIncomeTax: false, note: "Alabama also requires an initial Business Privilege Tax return within the first few months of LLC formation." },
  { name: "Alaska", slug: "alaska", llcFee: 250, agency: "Alaska Division of Corporations", noIncomeTax: false, note: "Alaska has no state sales tax, though some municipalities levy their own local sales tax." },
  { name: "Arizona", slug: "arizona", llcFee: 50, agency: "Arizona Corporation Commission", noIncomeTax: false, note: "Arizona requires newspaper publication of your LLC formation in most counties, a small added cost beyond the filing fee." },
  { name: "Arkansas", slug: "arkansas", llcFee: 45, agency: "Arkansas Secretary of State", noIncomeTax: false, note: "The $45 fee applies to online filing; paper filing runs slightly higher." },
  { name: "California", slug: "california", llcFee: 70, agency: "California Secretary of State", noIncomeTax: false, note: "California also charges an $800/year minimum franchise tax on LLCs regardless of income -- factor this into your ongoing budget, not just the one-time filing fee." },
  { name: "Colorado", slug: "colorado", llcFee: 50, agency: "Colorado Secretary of State", noIncomeTax: false, note: "Colorado's filing process is entirely online and typically processes same-day." },
  { name: "Connecticut", slug: "connecticut", llcFee: 120, agency: "Connecticut Secretary of the State", noIncomeTax: false, note: "Connecticut requires an annual report with its own separate fee to keep the LLC in good standing." },
  { name: "Delaware", slug: "delaware", llcFee: 110, agency: "Delaware Division of Corporations", noIncomeTax: false, note: "Delaware LLCs owe a flat $300/year franchise tax regardless of where the business actually operates." },
  { name: "Florida", slug: "florida", llcFee: 125, agency: "Florida Division of Corporations", noIncomeTax: true, note: "Florida has no state personal income tax, which simplifies planning for a sole-member LLC taxed as a pass-through." },
  { name: "Georgia", slug: "georgia", llcFee: 100, agency: "Georgia Secretary of State", noIncomeTax: false, note: "Georgia requires an annual registration fee to keep the LLC active, separate from the initial filing." },
  { name: "Hawaii", slug: "hawaii", llcFee: 50, agency: "Hawaii Business Registration Division", noIncomeTax: false, note: "Hawaii's General Excise Tax applies broadly to services (not a typical sales tax) -- confirm how it applies to your specific business with the Hawaii Department of Taxation." },
  { name: "Idaho", slug: "idaho", llcFee: 100, agency: "Idaho Secretary of State", noIncomeTax: false, note: "Online filing is the cheaper option in Idaho versus filing by mail." },
  { name: "Illinois", slug: "illinois", llcFee: 150, agency: "Illinois Secretary of State", noIncomeTax: false, note: "Illinois requires an annual report with its own fee to stay in good standing." },
  { name: "Indiana", slug: "indiana", llcFee: 95, agency: "Indiana Secretary of State", noIncomeTax: false, note: "Indiana requires a biennial business entity report, separate from the initial filing." },
  { name: "Iowa", slug: "iowa", llcFee: 50, agency: "Iowa Secretary of State", noIncomeTax: false, note: "Iowa's formation process is straightforward and entirely online." },
  { name: "Kansas", slug: "kansas", llcFee: 160, agency: "Kansas Secretary of State", noIncomeTax: false, note: "Online filing is less expensive than paper filing in Kansas." },
  { name: "Kentucky", slug: "kentucky", llcFee: 40, agency: "Kentucky Secretary of State", noIncomeTax: false, note: "Kentucky has one of the lowest LLC filing fees in the country." },
  { name: "Louisiana", slug: "louisiana", llcFee: 100, agency: "Louisiana Secretary of State", noIncomeTax: false, note: "Louisiana requires an annual report filing to keep the LLC active." },
  { name: "Maine", slug: "maine", llcFee: 175, agency: "Maine Secretary of State", noIncomeTax: false, note: "Maine requires an annual report with its own fee." },
  { name: "Maryland", slug: "maryland", llcFee: 100, agency: "Maryland Department of Assessments and Taxation", noIncomeTax: false, note: "Maryland requires an annual Personal Property Return filing for LLCs." },
  { name: "Massachusetts", slug: "massachusetts", llcFee: 500, agency: "Massachusetts Secretary of the Commonwealth", noIncomeTax: false, note: "Massachusetts has one of the higher LLC filing fees in the country, plus an annual report fee of similar size." },
  { name: "Michigan", slug: "michigan", llcFee: 50, agency: "Michigan Department of Licensing and Regulatory Affairs", noIncomeTax: false, note: "Michigan requires an annual statement filing to keep the LLC active." },
  { name: "Minnesota", slug: "minnesota", llcFee: 155, agency: "Minnesota Secretary of State", noIncomeTax: false, note: "Mail filing is less expensive than online filing in Minnesota, the reverse of most states." },
  { name: "Mississippi", slug: "mississippi", llcFee: 50, agency: "Mississippi Secretary of State", noIncomeTax: false, note: "Mississippi's filing process is entirely online." },
  { name: "Missouri", slug: "missouri", llcFee: 50, agency: "Missouri Secretary of State", noIncomeTax: false, note: "Missouri does not require an annual report for LLCs, which keeps ongoing compliance simple." },
  { name: "Montana", slug: "montana", llcFee: 35, agency: "Montana Secretary of State", noIncomeTax: false, note: "Montana has no state sales tax, though this doesn't exempt you from income tax on business earnings." },
  { name: "Nebraska", slug: "nebraska", llcFee: 100, agency: "Nebraska Secretary of State", noIncomeTax: false, note: "Nebraska requires newspaper publication of your LLC formation, an added cost beyond the filing fee." },
  { name: "Nevada", slug: "nevada", llcFee: 425, agency: "Nevada Secretary of State", noIncomeTax: true, note: "Nevada's total startup cost is higher than most states because it bundles Articles of Organization, an initial list of managers/members, and a state business license into the total. In exchange, Nevada has no state personal income tax." },
  { name: "New Hampshire", slug: "new-hampshire", llcFee: 100, agency: "New Hampshire Secretary of State", noIncomeTax: true, note: "New Hampshire has no broad state sales tax and no tax on earned wages, though it does tax interest and dividend income." },
  { name: "New Jersey", slug: "new-jersey", llcFee: 125, agency: "New Jersey Division of Revenue", noIncomeTax: false, note: "New Jersey requires an annual report with its own fee to stay in good standing." },
  { name: "New Mexico", slug: "new-mexico", llcFee: 50, agency: "New Mexico Secretary of State", noIncomeTax: false, note: "New Mexico is one of the few states with no annual report requirement for LLCs." },
  { name: "New York", slug: "new-york", llcFee: 200, agency: "New York Department of State", noIncomeTax: false, note: "New York requires a publication step after formation (announcing the LLC in two local newspapers) that can add anywhere from roughly $50 to well over $1,000 depending on the county -- New York City counties are notably the most expensive." },
  { name: "North Carolina", slug: "north-carolina", llcFee: 125, agency: "North Carolina Secretary of State", noIncomeTax: false, note: "North Carolina requires an annual report with its own fee." },
  { name: "North Dakota", slug: "north-dakota", llcFee: 135, agency: "North Dakota Secretary of State", noIncomeTax: false, note: "North Dakota requires an annual report to keep the LLC active." },
  { name: "Ohio", slug: "ohio", llcFee: 99, agency: "Ohio Secretary of State", noIncomeTax: false, note: "Ohio does not require an annual report for LLCs, which simplifies ongoing compliance." },
  { name: "Oklahoma", slug: "oklahoma", llcFee: 100, agency: "Oklahoma Secretary of State", noIncomeTax: false, note: "Oklahoma requires an annual certificate filing with a modest fee." },
  { name: "Oregon", slug: "oregon", llcFee: 100, agency: "Oregon Secretary of State", noIncomeTax: false, note: "Oregon has no state sales tax, which simplifies pricing for service-based businesses." },
  { name: "Pennsylvania", slug: "pennsylvania", llcFee: 125, agency: "Pennsylvania Department of State", noIncomeTax: false, note: "Pennsylvania does not require a traditional annual report for most LLCs, though a periodic filing requirement has been phased in -- confirm current requirements before assuming none apply." },
  { name: "Rhode Island", slug: "rhode-island", llcFee: 150, agency: "Rhode Island Secretary of State", noIncomeTax: false, note: "Rhode Island requires an annual report with its own fee." },
  { name: "South Carolina", slug: "south-carolina", llcFee: 110, agency: "South Carolina Secretary of State", noIncomeTax: false, note: "South Carolina does not require an annual report for most LLCs." },
  { name: "South Dakota", slug: "south-dakota", llcFee: 150, agency: "South Dakota Secretary of State", noIncomeTax: true, note: "South Dakota has no state personal income tax, and its sales tax is broad enough to cover many services -- confirm taxability of your specific service with the South Dakota Department of Revenue." },
  { name: "Tennessee", slug: "tennessee", llcFee: 300, agency: "Tennessee Secretary of State", noIncomeTax: true, note: "Tennessee's LLC fee scales with the number of members ($50 per member, $300 minimum) and the state has no tax on wage income." },
  { name: "Texas", slug: "texas", llcFee: 300, agency: "Texas Secretary of State", noIncomeTax: true, note: "Texas has no state personal income tax. Texas also has no statewide general contractor license requirement, though licensing for specific professions (like real estate or electrical work) still applies separately where relevant." },
  { name: "Utah", slug: "utah", llcFee: 54, agency: "Utah Division of Corporations", noIncomeTax: false, note: "Utah requires an annual renewal filing with its own modest fee." },
  { name: "Vermont", slug: "vermont", llcFee: 125, agency: "Vermont Secretary of State", noIncomeTax: false, note: "Vermont requires an annual report with its own fee." },
  { name: "Virginia", slug: "virginia", llcFee: 100, agency: "Virginia State Corporation Commission", noIncomeTax: false, note: "Virginia requires an annual registration fee to keep the LLC active." },
  { name: "Washington", slug: "washington", llcFee: 200, agency: "Washington Secretary of State", noIncomeTax: true, note: "Washington has no state personal income tax, but applies a Business & Occupation (B&O) tax on gross receipts that applies broadly to service businesses -- confirm current treatment with the Washington Department of Revenue." },
  { name: "West Virginia", slug: "west-virginia", llcFee: 100, agency: "West Virginia Secretary of State", noIncomeTax: false, note: "West Virginia requires an annual report with its own fee." },
  { name: "Wisconsin", slug: "wisconsin", llcFee: 130, agency: "Wisconsin Department of Financial Institutions", noIncomeTax: false, note: "Online filing is less expensive than paper filing in Wisconsin." },
  { name: "Wyoming", slug: "wyoming", llcFee: 100, agency: "Wyoming Secretary of State", noIncomeTax: true, note: "Wyoming has no state personal income tax and is widely considered one of the most business-friendly states for LLC formation, with low ongoing compliance requirements." },
];

export function getStateBusinessStartupBySlug(slug: string): StateBusinessStartupInfo | null {
  return STATE_BUSINESS_STARTUP.find((s) => s.slug === slug) ?? null;
}
