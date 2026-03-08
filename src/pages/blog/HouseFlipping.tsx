import TopicPage from "@/components/TopicPage";

const HouseFlipping = () => (
  <TopicPage
    title="House Flipping 101: What It Is, How It Works, and What It Actually Costs"
    metaDesc="House flipping is buying undervalued properties, renovating them, and selling at a profit. Here's a realistic look at how it works, what it costs, and what separates profitable flips from money losers."
    parentLabel="Blog"
    parentHref="/blog"
    intro="House flipping is real. Investors who do it well make consistent, significant profits. But the TV version — buy cheap, renovate in 30 days, sell for $100K profit — glosses over the costs, the risks, and the operational competence required. This is what house flipping actually looks like when you run the numbers honestly."
    sections={[
      {
        heading: "The Basic Model",
        content: "Buy a property below market value, improve it through renovation, sell it at a higher price. The profit is the spread between your all-in cost (purchase + renovation + holding costs + selling costs) and the sale price. Simple in concept. The challenge is that every variable in that equation requires real expertise to estimate accurately. Underestimate renovation costs by $20,000 and a planned $40,000 profit becomes $20,000 — or less, once you account for a longer hold, carrying costs, and selling expenses. The 70% rule is the standard filter: offer no more than 70% of ARV minus estimated renovation costs. On a $250,000 ARV property with $40,000 in estimated repairs, the maximum offer is $135,000. This rule exists to leave enough margin to absorb overruns and still be profitable.",
        links: [],
      },
      {
        heading: "Full Cost Breakdown — What Most Beginners Miss",
        content: "Renovation costs are what everyone thinks about. What often surprises new flippers: Purchase closing costs: 1–3% of purchase price. Financing costs: If using hard money, 10–15% annual rate plus 2–4 points. On a $150,000 loan held 6 months, that's $11,250–$22,500 in financing costs alone. Property taxes, insurance, utilities during rehab: $1,500–$3,000/month depending on the property and market. Selling costs: agent commissions (typically 5–6%), transfer taxes, and staging typically run 8–10% of the sale price. The total transaction cost on a flip — from buy closing to sell closing — is usually 15–25% of the all-in cost. That's your starting hurdle before you earn a dollar of profit.",
        links: [],
      },
      {
        heading: "The Renovation Component",
        content: "Renovation is where most flips succeed or fail. The most common problems: scope creep (finding problems behind walls that weren't in the original budget), contractor delays and cost overruns, and over-improving a property beyond what the neighborhood will support at appraisal. Effective flippers develop their renovation scope skills over many projects — learning to quickly walk a property and estimate costs within 10%, managing contractor timelines, and knowing which upgrades drive resale value in their specific market. Kitchen and bathroom upgrades consistently deliver the best return per dollar. Over-customizing finishes, adding amenities the neighborhood doesn't support, or spending $50,000 on renovations in a $150,000 ARV market are common mistakes that erode margins.",
        links: [],
      },
      {
        heading: "Is House Flipping Right for You?",
        content: "House flipping is an active business, not a passive investment. Successful flippers are operationally intense — they're managing deal flow, contractor relationships, timelines, project budgets, and dispositions simultaneously. If you're looking for passive income, flipping isn't it. If you're comfortable managing contractors, analyzing deals quickly, and absorbing the occasional bad flip as a tuition cost, it can generate strong returns. Most experienced flippers aim for $30,000–$60,000 net profit per deal with a 4–6 month hold period. In high-cost markets, gross profits can be higher but so are costs. The best entry path: start with a light cosmetic flip where renovation scope is predictable, and build the contractor network and deal analysis skills before taking on a heavy rehab.",
        links: [],
      },
    ]}
    faqs={[
      {
        q: "How much money do you need to start flipping houses?",
        a: "With conventional financing, you'd need 20–25% down plus renovation costs plus 6 months of carrying costs in reserve — on a $200,000 deal that's roughly $50,000–$70,000 in accessible capital. With hard money financing, lenders often cover the purchase and a portion of renovation costs, reducing out-of-pocket requirements — but hard money is expensive and those costs come out of your profit. Many new flippers partner with an experienced investor to do their first deal, contributing time and management in exchange for a share of the profit.",
      },
      {
        q: "What's the average profit on a house flip?",
        a: "ATTOM Data reports median gross flip profits of $60,000–$80,000 in recent years, but gross profit doesn't account for renovation costs, financing, and selling expenses. Net profit per flip for experienced investors typically ranges $25,000–$60,000 depending on deal quality and market. Beginners often net much less on their first few deals due to underestimated costs and a learning curve on renovation management.",
      },
      {
        q: "Do you pay taxes on house flip profits?",
        a: "Yes. Properties held less than a year are taxed at short-term capital gains rates — which is the same as your ordinary income tax rate. For investors in higher brackets, that can be 32–37%. Properties held more than a year qualify for long-term capital gains rates (0%, 15%, or 20%). Most flippers work with a CPA who specializes in real estate investors to structure the business correctly — many operate flips through an LLC or S-Corp — to optimize the tax treatment.",
      },
    ]}
  />
);

export default HouseFlipping;
