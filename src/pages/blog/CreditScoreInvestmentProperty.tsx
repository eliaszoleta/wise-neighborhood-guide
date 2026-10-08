import { Link } from "react-router-dom";
import BlogPost from "@/components/BlogPost";

const CreditScoreInvestmentProperty = () => (
  <BlogPost
    title="What Credit Score Do You Need to Buy an Investment Property?"
    metaDesc="Lenders hold investment properties to a higher standard than a primary residence. Here's the real credit score, down payment, and reserve requirements you'll face."
    slug="financing/credit-score-investment-property"
    datePublished="2026-10-08"
    category="Financing"
    quickAnswer="Most conventional lenders want a 680-720 credit score for an investment property loan, versus 620 for a primary residence. Down payments start at 15-25%, and you'll typically need 6 months of cash reserves on top of that -- lenders treat rental properties as a bigger risk than the home you live in."
    faqs={[
      { q: "Can I buy an investment property with a 620 credit score?", a: "It's possible with some lenders, but expect a higher interest rate, a larger down payment requirement (often 25% or more), and fewer loan options. Most conventional investment property programs are built around a 680+ score, and the best rates usually require 740 or higher." },
      { q: "Why do lenders require a higher score for investment properties than a primary home?", a: "Borrowers are statistically more likely to default on an investment property than their own home when money gets tight -- you're not going to lose the roof over your head, just a rental. Lenders price that extra risk in through higher score requirements, bigger down payments, and rate add-ons." },
      { q: "How much down payment do I need for an investment property?", a: "Conventional loans typically require 15% down for a single-family rental and 25% for a 2-4 unit property. DSCR and portfolio loans sometimes go as low as 20-25% regardless of unit count, but almost nothing gets you below 15% on a true investment property." },
      { q: "Do lenders require cash reserves for investment properties?", a: "Yes, almost universally. Expect to show 2-6 months of the new mortgage payment in reserves, on top of your down payment and closing costs -- sometimes more if you already own other financed rental properties." },
      { q: "Does rental income from the property help me qualify?", a: "Often yes, typically counted at 75% of projected or actual rent to account for vacancy and expenses. This can offset the new mortgage payment in your debt-to-income calculation, which is part of why experienced investors can keep qualifying for new loans even as their portfolio grows." },
    ]}
    relatedArticles={[
      { label: "What Is a DSCR Loan?", href: "/blog/financing/dscr-loan-real-estate" },
      { label: "How to Find and Buy Your First Rental Property", href: "/blog/investing/first-rental-property" },
      { label: "Portfolio Loans for Real Estate Investors", href: "/blog/financing/portfolio-loan-real-estate" },
    ]}
  >
    <p>
      Getting approved for the house you live in and getting approved for a rental property are two very different conversations with a lender, even if your income and credit history haven't changed between the two applications. Lenders underwrite investment properties to a stricter standard across almost every metric.
    </p>

    <h2>Credit Score Thresholds</h2>
    <table>
      <thead>
        <tr><th>Score Range</th><th>What It Typically Gets You</th></tr>
      </thead>
      <tbody>
        <tr><td>740+</td><td>Best available rates and the widest range of loan programs</td></tr>
        <tr><td>700-739</td><td>Competitive rates, most programs still available</td></tr>
        <tr><td>680-699</td><td>Qualifies for most conventional investment loans, rate add-ons apply</td></tr>
        <tr><td>620-679</td><td>Limited options, higher rates, larger down payment usually required</td></tr>
        <tr><td>Below 620</td><td>Conventional financing mostly closed off; hard money or private lending becomes the realistic path</td></tr>
      </tbody>
    </table>

    <h2>Down Payment Expectations</h2>
    <p>
      Conventional investment property loans typically require:
    </p>
    <ul>
      <li><strong>15% down</strong> for a single-family rental (with strong credit)</li>
      <li><strong>25% down</strong> for a 2-4 unit property</li>
      <li><strong>20-30% down</strong> for DSCR or portfolio loans, less dependent on credit score but with its own minimums</li>
    </ul>
    <p>
      Compare that to a primary residence, where conventional loans go as low as 3-5% down, or FHA as low as 3.5%. The gap exists because lenders know a struggling borrower prioritizes their own home over a rental — and they price that risk directly into the down payment requirement.
    </p>

    <h2>Cash Reserve Requirements</h2>
    <p>
      Most investment property lenders want to see liquid reserves beyond the down payment and closing costs — commonly 2-6 months of the new mortgage payment (principal, interest, taxes, insurance). If you already own other financed rental properties, expect that reserve requirement to apply per property, not just once. An investor with three existing rental mortgages pursuing a fourth property can be asked to show reserves covering several of those loans simultaneously.
    </p>

    <h2>How Rental Income Factors In</h2>
    <p>
      If the property you're buying will generate rental income, most lenders let you count a portion of it — typically 75% of the lease amount or appraiser's market rent estimate — as offsetting income in your debt-to-income calculation. This is a big part of why experienced investors with growing portfolios can keep qualifying for new mortgages: the rental income from existing properties helps counterbalance those existing mortgage payments in the lender's math.
    </p>

    <h2>If Your Score Isn't There Yet</h2>
    <p>
      DSCR loans qualify you based on the property's own cash flow rather than your personal income and credit in the traditional sense, though they still have their own (usually lower) credit floors, often in the 640-680 range. Hard money and private lending go even further down the credit spectrum, trading a higher interest rate and shorter term for far more flexible underwriting — a reasonable bridge while you build credit or complete a project, not a long-term financing strategy.
    </p>
  </BlogPost>
);

export default CreditScoreInvestmentProperty;
