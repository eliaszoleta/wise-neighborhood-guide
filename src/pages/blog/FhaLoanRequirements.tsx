import { Link } from "react-router-dom";
import BlogPost from "@/components/BlogPost";

const FhaLoanRequirements = () => (
  <BlogPost
    title="FHA Loan Requirements 2026: Credit Score, Down Payment & Eligibility"
    metaDesc="FHA loans let buyers qualify with a 580 credit score and 3.5% down. Here's exactly what you need to qualify, what it costs, and when an FHA loan isn't your best option."
    slug="financing/fha-loan-requirements"
    datePublished="2026-10-08"
    category="Financing"
    quickAnswer="FHA loans require a minimum 580 credit score for 3.5% down (500 with 10% down), a debt-to-income ratio generally under 43%, and mortgage insurance that lasts for the life of most loans. They're the most accessible mortgage product for buyers with limited savings or imperfect credit."
    keyTakeaways={[
      "Minimum credit score is 580 for 3.5% down, or 500 for 10% down",
      "Mortgage insurance premium (MIP) applies upfront and annually, and usually lasts the life of the loan",
      "FHA loan limits vary by county and are reset every year",
      "The property must meet FHA minimum property standards, not just appraise at value",
    ]}
    faqs={[
      { q: "What credit score do I need for an FHA loan?", a: "580 qualifies you for the minimum 3.5% down payment. A score between 500 and 579 still qualifies, but requires at least 10% down. Below 500, FHA won't insure the loan at all. Individual lenders can set higher minimums than FHA requires, so a 580 score meeting FHA's floor doesn't guarantee approval everywhere." },
      { q: "How much down payment does an FHA loan require?", a: "3.5% of the purchase price with a 580+ credit score. On a $300,000 home, that's $10,500 — compared to $60,000 for a 20% conventional down payment. The down payment can come from gifts, down payment assistance programs, or your own savings." },
      { q: "Does FHA mortgage insurance ever go away?", a: "On loans with less than 10% down, no — MIP lasts for the life of the loan. The only way to remove it is to refinance into a conventional loan once you have enough equity, typically 20%. Loans with 10% or more down drop MIP after 11 years." },
      { q: "Can I use an FHA loan for an investment property?", a: "No. FHA loans require the home to be your primary residence, and you must move in within 60 days of closing. There's a narrow exception for multi-unit properties (2-4 units) where you live in one unit and rent the others — this is how many investors start house hacking." },
      { q: "What's the FHA loan limit in 2026?", a: "FHA loan limits are set per county based on local home prices and adjust annually. Most counties fall in the standard range, while high-cost areas (parts of California, New York, Hawaii) have limits roughly 1.5x higher. Check your specific county's limit before assuming a property qualifies." },
    ]}
    relatedArticles={[
      { label: "Types of Mortgage Loans for First-Time Homebuyers", href: "/blog/financing/mortgage-loans-first-time-homebuyers" },
      { label: "MIP vs. PMI Explained", href: "/blog/financing/mip-vs-pmi-explained" },
      { label: "What Credit Score Do You Need for an Investment Property?", href: "/blog/financing/credit-score-investment-property" },
    ]}
  >
    <p>
      FHA loans exist because conventional lending leaves a lot of qualified buyers behind. If you don't have 20% to put down, or your credit took a hit a few years ago, an FHA loan is often the fastest path to actually owning a home instead of waiting years to save a larger down payment.
    </p>
    <p>
      Backed by the Federal Housing Administration, these loans don't come from the government directly — they come from regular lenders, with the FHA insuring the lender against default. That insurance is what lets lenders approve buyers they'd otherwise turn away.
    </p>

    <h2>Credit Score and Down Payment Requirements</h2>
    <p>
      FHA sets two tiers:
    </p>
    <ul>
      <li><strong>580 or higher:</strong> 3.5% minimum down payment</li>
      <li><strong>500 to 579:</strong> 10% minimum down payment</li>
      <li><strong>Below 500:</strong> Not eligible for FHA financing</li>
    </ul>
    <div className="callout">
      <strong>Example: $300,000 purchase</strong>
      <ul>
        <li>580+ credit score: $10,500 down (3.5%)</li>
        <li>500-579 credit score: $30,000 down (10%)</li>
      </ul>
    </div>
    <p>
      Those are FHA's floors, not guarantees. Individual lenders routinely require a higher score — a 620 or 640 minimum is common — because they're still on the hook for underwriting quality even with FHA insurance behind them. Shop multiple lenders if your score sits near the minimum.
    </p>

    <h2>Debt-to-Income Ratio</h2>
    <p>
      FHA generally wants your total monthly debt payments (including the new mortgage) under 43% of gross income, though approvals up to 50% happen with compensating factors like strong credit, significant savings, or a low loan-to-value ratio. This is more flexible than most conventional loan programs, which is part of why FHA works for buyers juggling student loans or other debt.
    </p>

    <h2>Mortgage Insurance Premium (MIP)</h2>
    <p>
      FHA loans carry two insurance charges instead of the single PMI charge on a conventional loan:
    </p>
    <ul>
      <li><strong>Upfront MIP:</strong> 1.75% of the loan amount, paid at closing or rolled into the loan</li>
      <li><strong>Annual MIP:</strong> Typically 0.5%-0.75% of the loan balance, split into monthly payments</li>
    </ul>
    <p>
      The catch: on loans with less than 10% down, MIP lasts for the entire life of the loan — not just until you hit 20% equity, the way conventional PMI works. Your only way out is refinancing into a conventional loan once your equity (or the market) gets you there. Loans with at least 10% down drop MIP after 11 years.
    </p>

    <h2>Property Requirements</h2>
    <p>
      FHA doesn't just care about the buyer — it cares about the property. An FHA appraisal checks for health and safety issues beyond a standard conventional appraisal: peeling paint (especially in pre-1978 homes, due to lead paint rules), exposed wiring, missing handrails, roof condition, and working mechanical systems. A property with deferred maintenance that would sail through a conventional appraisal can get flagged and require repairs before an FHA loan closes.
    </p>

    <h2>When an FHA Loan Isn't the Right Call</h2>
    <p>
      If you have strong credit (680+) and can put down at least 5-10%, a conventional loan is often cheaper over time — conventional PMI cancels once you reach 20% equity, while FHA's MIP frequently doesn't. Run both scenarios with a loan officer before assuming FHA is automatically the better deal; it's the right tool for buyers who need the lower credit/down payment floor, not a default choice for everyone.
    </p>
  </BlogPost>
);

export default FhaLoanRequirements;
