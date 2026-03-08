import TopicPage from "@/components/TopicPage";

const BrrrMethodRealEstate = () => (
  <TopicPage
    title="The BRRRR Method in Real Estate Investing: What It Is and How It Works"
    metaDesc="BRRRR stands for Buy, Rehab, Rent, Refinance, Repeat. Here's a plain-English walkthrough of how the strategy works, the math behind it, and where it breaks down."
    parentLabel="Blog"
    parentHref="/blog"
    intro="BRRRR stands for Buy, Rehab, Rent, Refinance, Repeat. The strategy is built around one idea: use a refinance to pull your invested capital back out of a property so you can redeploy it into the next deal. Done right, you can grow a rental portfolio without constantly needing fresh cash for each purchase. Done poorly, you end up with equity trapped in an over-improved property and a cash flow problem. This is how it actually works."
    sections={[
      {
        heading: "The Five Stages Explained",
        content: "Buy: You acquire a distressed or underpriced property — typically something that needs enough work that it won't qualify for conventional financing. Hard money loans or cash are the typical purchase mechanism. The buy price plus renovation cost should land you at 70–75% of the after-repair value (ARV), which is what leaves room for the refinance to work. Rehab: You renovate the property to bring it up to rentable condition. The scope of work matters: you're rehabbing to rent, not to resell, so finishes should be durable and functional rather than luxury. Rent: Once rehabbed, you place a tenant. Lenders typically want to see 6 months of rental seasoning before they'll do a cash-out refinance at the new appraised value. Refinance: You refinance with a conventional lender at the new appraised ARV and pull your invested capital back out. If you bought and rehabbed well, the refinance proceeds should cover most or all of your original investment. Repeat: With your capital returned, you start the cycle again.",
        links: [],
      },
      {
        heading: "The Math That Has to Work",
        content: "Here's a concrete example. ARV: $200,000. You buy at $110,000 and spend $30,000 on rehab — total invested: $140,000. At 75% of ARV, a refinance would give you $150,000. You pull back $140,000 (your full investment) plus $10,000. The deal stays in the portfolio at essentially zero cost of capital. This math only works if your buy price plus rehab costs stay under the LTV threshold your refinance lender will go to — typically 70–75% of ARV. The common failure mode: renovation costs run over, the appraisal comes in below expectations, or the lender's LTV is more conservative than you modeled. Always stress-test your numbers with a 10–15% cost overrun buffer and a 5–10% appraisal buffer.",
        links: [],
      },
      {
        heading: "What BRRRR Is Not",
        content: "BRRRR is not a way to get rich with zero risk. The 'nothing left in the deal' scenario requires discipline on the buy, execution on the rehab, and favorable appraisal conditions — none of which are guaranteed. It's also not a strategy for every market. In high-cost metros where homes trade at 8–10x rent multiples, the numbers often don't support a cash-flowing refinanced rental. BRRRR works best in markets with relatively affordable purchase prices, strong rental demand, and enough distressed inventory to find deals below ARV. And it requires access to bridge financing — either hard money lenders or private money — which isn't free. Hard money typically costs 10–15% annually plus 2–4 origination points.",
        links: [],
      },
      {
        heading: "Is BRRRR Right for You?",
        content: "BRRRR is a good fit if you have construction management experience or a reliable contractor network, access to short-term financing, and are investing in a market with cap rates that support cash flow after a refinance. It rewards investors who are operationally capable — finding deals, managing contractors, managing tenants, and navigating the refinance process. If any of those pieces are weak, the strategy amplifies the problem rather than solving it. For investors who aren't ready to manage renovations, a simpler rental acquisition strategy — buying a turnkey or lightly distressed property with conventional financing — is a lower-risk entry point into the same long-term wealth-building outcome.",
        links: [],
      },
    ]}
    faqs={[
      {
        q: "How long does a full BRRRR cycle take?",
        a: "Typically 9–15 months from purchase to when the refinance is complete. The rehab phase usually takes 2–4 months depending on scope, followed by a 6-month rental seasoning period most lenders require before they'll do a cash-out refinance at the improved value. Lenders who do DSCR loans sometimes waive seasoning for investors with strong cash flow documentation, which can shorten the cycle.",
      },
      {
        q: "What's the biggest risk in a BRRRR deal?",
        a: "The appraisal coming in below your projected ARV, which means the refinance won't return as much capital as planned. This can happen because your ARV estimate was off, comparable sales shifted during your hold period, or the appraiser is conservative. Building a 10% buffer into your ARV estimate on the front end is the best protection. The second biggest risk is renovation cost overruns — almost universal on first deals, and something experienced investors budget for explicitly.",
      },
      {
        q: "Can you BRRRR with no money down?",
        a: "Not in a practical sense. Even if the refinance returns 100% of your capital, you need capital to start: purchase price, rehab costs, carrying costs during the rehab and seasoning period, and closing costs on both the buy and the refinance. The BRRRR strategy recycles capital — it doesn't create it. You need a starting pool of money or private lender backing to run the first deal.",
      },
    ]}
  />
);

export default BrrrMethodRealEstate;
