import TopicPage from "@/components/TopicPage";

const MortgageLoansHomebuyers = () => (
  <TopicPage
    title="Types of Mortgage Loans for First-Time Homebuyers: FHA, VA, USDA, and Conventional"
    metaDesc="The mortgage loan you choose affects your down payment, monthly payment, and long-term costs. Here's a plain-English breakdown of the main loan types available to first-time buyers."
    parentLabel="Blog"
    parentHref="/blog"
    intro="Most first-time homebuyers don't realize they have meaningful choices in what kind of mortgage they get — or that the wrong choice can cost thousands of dollars in unnecessary fees, insurance, and interest over the life of the loan. Here's what each major loan program offers, who qualifies, and when each makes sense."
    sections={[
      {
        heading: "Conventional Loans",
        content: "A conventional loan is any mortgage not backed by a government agency. They're the most common loan type and come in two categories: conforming (within Fannie Mae and Freddie Mac limits, currently $766,550 in most markets for 2024) and jumbo (above that limit). Conventional loans require a minimum 3–5% down payment for primary residences, a 620+ credit score (better terms at 700+), and private mortgage insurance (PMI) if your down payment is under 20%. PMI typically costs 0.5–1.5% of the loan balance annually. The upside: once you have 20% equity, you can request PMI removal. Conventional loans offer the most flexibility in property types — they work for single-family, condos, multi-family up to 4 units, and investment properties.",
        links: [],
      },
      {
        heading: "FHA Loans",
        content: "FHA loans are insured by the Federal Housing Administration and designed to help buyers with lower credit scores or smaller down payments. Key features: minimum 3.5% down with a 580+ credit score (10% down required for scores 500–579), more flexible debt-to-income ratio allowances, and FHA can be used on 1–4 unit properties if you live in one. The catch: FHA requires mortgage insurance premium (MIP) — both an upfront premium of 1.75% of the loan amount at closing, and an annual premium of 0.55–1.05% depending on loan-to-value and term. Unlike conventional PMI, FHA MIP stays for the life of the loan if your down payment is under 10%. For buyers who put down 10%+, MIP drops off after 11 years. FHA is a smart tool for buyers with lower credit who can't afford 20% down — but run the numbers comparing FHA MIP to conventional PMI over your expected hold period.",
        links: [],
      },
      {
        heading: "VA Loans",
        content: "VA loans are available to eligible veterans, active-duty service members, and surviving spouses. They're one of the best mortgage programs available — no down payment required (0% down), no PMI, competitive interest rates, and more flexible credit requirements. The main cost is the VA funding fee: a one-time fee of 1.25–3.3% of the loan amount (depending on down payment and first-time vs. subsequent use) that can be rolled into the loan. Disabled veterans are often exempt from the funding fee entirely. VA loans can only be used for primary residences, but they can be used multiple times over a lifetime. For eligible borrowers, a VA loan is almost always the best option — no other loan program combines zero down payment with no mortgage insurance.",
        links: [],
      },
      {
        heading: "USDA Loans",
        content: "USDA loans are backed by the U.S. Department of Agriculture and designed for buyers in rural and suburban areas. Key features: 0% down payment required, below-market interest rates, and income limits apply (typically 115% of the area median income). The property must be in a USDA-eligible area — which covers more of the country than many people assume, including many suburban areas outside major metros. USDA loans require a guarantee fee (upfront 1% of the loan) and annual fee (0.35% of the loan balance), both of which are lower than FHA MIP. For buyers who qualify based on income and location, USDA loans offer excellent terms. Check the USDA eligibility map to see if your target area qualifies.",
        links: [],
      },
    ]}
    faqs={[
      {
        q: "Which mortgage loan type is best for first-time buyers?",
        a: "It depends on your situation. If you're a veteran, the VA loan is almost certainly the best option. If you have strong credit (700+) and can put down 20%, conventional is typically cheapest long-term. If your credit is 580–680 or you can only put down 3.5%, FHA is usually the most accessible. If you're buying in a rural or suburban area and your income qualifies, USDA offers the best rate with no down payment. Run the numbers on total cost over your expected hold period — not just monthly payment.",
      },
      {
        q: "Can a first-time buyer use a conventional loan with 3% down?",
        a: "Yes. Conventional loans allow as low as 3% down for first-time buyers (Fannie Mae's HomeReady and Freddie Mac's Home Possible programs). You'll pay PMI at that LTV, but unlike FHA MIP, conventional PMI cancels once you reach 20% equity. If you have good credit and can swing the slightly higher PMI payment initially, conventional at 3–5% down is often better long-term than FHA because you avoid the lifetime MIP on lower down payments.",
      },
      {
        q: "What is a debt-to-income ratio and why does it matter?",
        a: "Debt-to-income (DTI) ratio is your total monthly debt payments divided by your gross monthly income. Mortgage lenders use it to assess how much of your income will go toward debt. Conventional loans typically cap at 43–45% DTI (front-end housing expense under 28–31%). FHA allows higher DTI with compensating factors. If your DTI is too high, you either need to pay down existing debt, earn more, or buy a less expensive home. High DTI is one of the most common reasons mortgage applications are denied.",
      },
    ]}
  />
);

export default MortgageLoansHomebuyers;
