import { Link } from "react-router-dom";
import BlogPost from "@/components/BlogPost";

const TypesOfRefinance = () => (
  <BlogPost
    title="Types of Refinance in Real Estate: Rate-and-Term, Cash-Out, Streamline & More"
    metaDesc="Not all refinances work the same way. Rate-and-term, cash-out, streamline, and DSCR refinances each serve different goals. Here's when to use each one."
    slug="financing/types-of-refinance"
    datePublished="2026-02-13"
    category="Financing"
    faqs={[
      { q: "What is a rate-and-term refinance?", a: "A rate-and-term refinance replaces your existing mortgage with a new one at a different interest rate, a different loan term, or both — without taking any cash out. The goal is typically to lower your monthly payment, reduce total interest paid, shorten the loan term, or remove private mortgage insurance once you have 20% equity." },
      { q: "What is the difference between a cash-out refinance and a rate-and-term refinance?", a: "A rate-and-term refinance only changes your loan's rate or term — you walk away with a new loan and no cash. A cash-out refinance replaces your loan with a larger one, and the difference between the old balance and the new loan comes to you as cash. Cash-out costs more (higher rate, higher closing costs) and increases your loan balance, while rate-and-term is purely about restructuring debt." },
      { q: "What is a DSCR loan and who should use it?", a: "A DSCR (debt service coverage ratio) loan qualifies based on the rental property's income — not the borrower's personal W-2 or tax returns. The lender divides gross rental income by total debt service; a ratio above 1.0–1.25 qualifies. It's designed for self-employed investors and portfolio landlords who can't qualify for conventional loans due to complex income or high DTI from multiple properties." },
      { q: "What is a streamline refinance?", a: "A streamline refinance is a simplified rate-reduction process available only for existing FHA or VA loans. It requires no appraisal, minimal income documentation, and no asset verification — you're essentially swapping your current government-backed loan for a new one at a lower rate. You cannot take cash out, and you must currently be making timely payments on the existing loan." },
      { q: "How do I know if refinancing is worth it?", a: "Calculate your break-even point: divide total closing costs by your monthly payment savings. If closing costs are $4,500 and you'll save $150/month, you break even in 30 months. If you plan to sell or refinance again before then, the refi doesn't pay off. If you'll hold the loan past that point, it does. Also factor in whether you're resetting a loan term — starting a new 30-year loan 10 years in can cost more in total interest even at a lower rate." },
    ]}
  >
    <p>
      Refinancing means replacing your existing mortgage with a new one — but why you'd do that varies a lot. Lower your payment. Pull out equity. Ditch mortgage insurance. Qualify based on property income instead of your W-2. Each of those goals corresponds to a different type of refinance, and picking the wrong one means either leaving money on the table or not getting approved at all.
    </p>
    <p>
      Here's how each type works and when it makes sense. All of these strategies connect to broader <Link to="/real-estate-investing/funding-financing">financing and funding options</Link> investors use across a portfolio.
    </p>

    <h2>Rate-and-Term Refinance</h2>
    <p>
      This is the most common refinance. You replace your existing loan with a new one at a different rate, a different term, or both. No cash comes out — you're just restructuring the debt.
    </p>
    <p>
      Three reasons people do rate-and-term refis:
    </p>
    <ul>
      <li><strong>Lower the interest rate.</strong> If rates have dropped since you bought, refinancing can reduce your monthly payment and total interest paid over the life of the loan.</li>
      <li><strong>Change the loan term.</strong> Going from a 30-year to a 15-year accelerates equity build-up (and raises your payment). Going from a 15-year to a 30-year lowers your payment and frees up monthly cash flow.</li>
      <li><strong>Remove private mortgage insurance (PMI). See our guide to <Link to="/blog/financing/mip-vs-pmi-explained">MIP vs. PMI</Link> for more on how mortgage insurance cancellation works.</strong> If you put less than 20% down, you're paying PMI. Once you have 20% equity — either from payments or appreciation — a refinance officially gets rid of it.</li>
    </ul>
    <p>
      The calculation that actually matters here is break-even. Refinancing costs money — typically 2–3% of the loan amount in closing costs. Divide the closing costs by your monthly savings to figure out how many months until you recoup the expense.
    </p>
    <div className="callout">
      <strong>Break-even example:</strong>
      <ul>
        <li>Closing costs: $4,500</li>
        <li>Monthly payment reduction: $150</li>
        <li>Break-even: 30 months (2.5 years)</li>
      </ul>
      <p>If you plan to sell or refinance again before 30 months, the rate-and-term refi doesn't pay off. If you'll hold the loan longer than that, it does.</p>
    </div>

    <h2>Cash-Out Refinance</h2>
    <p>
      A cash-out refinance replaces your existing mortgage with a larger loan, and the difference comes to you as cash. You're converting equity into liquidity.
    </p>
    <p>
      The mechanics: on a primary residence, most lenders allow a cash-out refi up to 80% LTV. On investment properties, the cap is typically 75% LTV. Closing costs run 2–5% of the new loan amount, and rates are usually slightly higher than a rate-and-term refi.
    </p>
    <p>
      Real estate investors use cash-out refis to fund new acquisitions, execute the refinance step in a BRRRR strategy, or retire expensive hard money loans. The key discipline: every dollar extracted carries an ongoing interest cost. If you can't deploy that capital at a return exceeding your borrowing cost, leaving the equity in the property is the better move.
    </p>
    <p>
      For a full breakdown of how cash-out refinancing works — including a detailed dollar example — see our <Link to="/blog/financing/cash-out-refinance">dedicated article on cash-out refinances</Link>.
    </p>

    <h2>Streamline Refinance (FHA and VA)</h2>
    <p>
      Streamline refinances are only available to borrowers who already have an FHA or VA loan. If that's not you, skip this section.
    </p>
    <p>
      For those who do qualify, a streamline refi is remarkably efficient. The defining feature is reduced documentation requirements. No appraisal (in most cases). No full income verification. No asset documentation. You're essentially just replacing your existing government-backed loan with a new one at a lower rate, and the agency's existing insurance or guarantee carries over.
    </p>
    <p>
      What you can and can't do:
    </p>
    <ul>
      <li>You can lower your rate and monthly payment</li>
      <li>You cannot take cash out — this is a rate-and-term only transaction</li>
      <li>You must be current on your existing loan (typically no 30-day lates in the past 12 months)</li>
      <li>There must be a "net tangible benefit" — your new payment must be meaningfully lower than your current one</li>
    </ul>
    <p>
      The streamline refi exists because FHA and VA want borrowers to succeed. If rates drop significantly after you close, the streamline path lets you capture that savings quickly and cheaply. The lack of an appraisal is particularly valuable — you don't need to worry about whether the property appraises.
    </p>

    <h2>DSCR Refinance (for Investors)</h2>
    <p>
      Debt service coverage ratio (DSCR) loans are a different underwriting approach entirely. Instead of qualifying based on your personal income and debt-to-income ratio, the lender qualifies the loan based on the property's income.
    </p>
    <p>
      The DSCR calculation: divide the property's gross rental income by the total debt service (principal, interest, taxes, insurance, and any HOA). A DSCR of 1.0 means the property exactly covers the loan payments. Most lenders require 1.1–1.25, meaning the property earns 10–25% more than the debt service.
    </p>
    <p>
      Who DSCR refinances are for:
    </p>
    <ul>
      <li>Self-employed investors whose tax returns show low income (because they're writing everything off)</li>
      <li>Investors who own enough properties that their DTI exceeds conventional limits</li>
      <li>Anyone who wants to scale a portfolio without conventional lending bottlenecks</li>
    </ul>
    <p>
      The trade-off is rate. DSCR loans typically price 0.5–1.5% above conventional investment property rates. That's real money over a 30-year term — but for investors who can't qualify conventionally, it's the difference between being able to grow and being stuck.
    </p>

    <h2>Which One Is Right for You</h2>
    <p>
      The answer depends on what you're trying to accomplish:
    </p>
    <ul>
      <li>Rates dropped significantly since you bought and you want a lower payment → <strong>rate-and-term refi</strong></li>
      <li>You have equity and want to deploy it into another investment → <strong>cash-out refi</strong></li>
      <li>You have an FHA or VA loan and just want a better rate with minimal friction → <strong>streamline refi</strong></li>
      <li>You're a scaled investor or self-employed and conventional DTI limits are blocking you → <strong>DSCR refi</strong></li>
    </ul>
    <p>
      These aren't mutually exclusive over time, either. A common investor path: buy with hard money, refinance into a DSCR loan once the property is stabilized, then do a cash-out refi two years later when the property has appreciated enough to pull equity. Each step uses a different refinance type for a different purpose.
    </p>

    <blockquote>
      The <a href="https://www.consumerfinance.gov/owning-a-home/loan-options/" target="_blank" rel="noopener noreferrer">CFPB's mortgage options guide</a> covers how lenders evaluate refinance applications. Understanding what type of refinance applies to your situation is half the battle. The other half is running the actual numbers — closing costs, new rate, new payment, and break-even timeline — before you commit. A refinance that saves you money on paper can still be a bad decision if the costs don't recoup within your holding period.
    </blockquote>
  </BlogPost>
);

export default TypesOfRefinance;
