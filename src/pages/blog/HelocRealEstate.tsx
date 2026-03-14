import { Link } from "react-router-dom";
import BlogPost from "@/components/BlogPost";

const HelocRealEstate = () => (
  <BlogPost
    title="How Real Estate Investors Use a HELOC to Fund Deals"
    metaDesc="A HELOC turns your home equity into a revolving line of credit. Here's how investors use it for down payments, rehabs, and the BRRRR cycle — and where the risk of using your home as collateral gets real."
    slug="heloc-real-estate"
    datePublished="2026-02-13"
    category="Financing"
    faqs={[
      { q: "What is a HELOC and how does it work?", a: "A HELOC (Home Equity Line of Credit) is a revolving line of credit secured by your home's equity. The lender approves a maximum credit limit, and you can draw from it, repay it, and draw again during the draw period — typically 5–10 years. Most lenders require interest-only payments during the draw period. After it ends, you enter the repayment phase (10–20 years) paying both principal and interest, which significantly increases the monthly payment." },
      { q: "How much can you borrow with a HELOC?", a: "Most lenders allow you to borrow up to 80–85% of your home's value minus your current mortgage balance. On a home worth $400,000 with a $250,000 mortgage, 80% of value is $320,000, minus the $250,000 balance leaves $70,000 in available HELOC credit. Some lenders cap at 75–80% CLTV (combined loan-to-value), so your available credit may be lower depending on your lender's policy." },
      { q: "Can you get a HELOC on an investment property?", a: "Yes, but lenders apply stricter terms than for primary residences. Investment property HELOCs typically have LTV limits of 70–75% rather than 80–85%, charge 1–2% higher interest rates, require stronger credit scores (700+), and have fewer lender options. If you have significant equity in a rental property, it's worth exploring — but most investors find it easier to access a primary residence HELOC first." },
      { q: "What is payment shock on a HELOC?", a: "Payment shock occurs when the HELOC transitions from the interest-only draw period to the full principal-and-interest repayment period. If you've borrowed $80,000 at 9% and only been paying interest ($600/month), your payment will roughly double when you start repaying principal over the remaining term. Investors who aren't planning for this transition can get caught off guard — model the full repayment payment before you commit to a large HELOC balance." },
      { q: "Is a HELOC better than a cash-out refinance for investors?", a: "It depends on how you plan to use the equity. A HELOC offers revolving access — draw what you need, pay it back, draw again — which is ideal for ongoing deal flow, down payments on multiple properties, or funding multiple renovation projects. A cash-out refinance provides a lump sum at a fixed rate, replacing your existing mortgage. For investors who want flexible, repeated access to equity across multiple deals, the HELOC is usually the better structure. For one large capital pull, a cash-out refi may be cleaner." },
    ]}
  >
    <p>
      You've got equity in a property. There's a deal on the table that needs $50,000 in two weeks. Getting a new mortgage takes 30–45 days. A HELOC solves that problem — it's a line of credit that's already approved and sitting there. When you need $50,000 for a down payment or $30,000 for a rehab, you pull it. When you've paid it back, you can pull again.
    </p>

    <p>
      This is why experienced investors set up HELOCs before they need them, not after. The setup takes 4–6 weeks. Having it ready means you can move when deals come up, not when the bank finally processes your application.
    </p>

    <h2>The Two Phases You Need to Understand</h2>

    <p>
      A HELOC has a draw period and a repayment period. The second one catches people off guard.
    </p>

    <p>
      During the <strong>draw period</strong> (usually 5–10 years), you can borrow, repay, and borrow again up to your credit limit. Most lenders only require interest-only payments during this phase, which keeps monthly cost low. A $70,000 HELOC at 9% costs roughly $525/month in interest-only payments when fully drawn.
    </p>

    <p>
      When the <strong>repayment period</strong> starts (usually 10–20 years), you can no longer draw. You start paying both principal and interest on whatever balance remains. That same $70,000 at 9% over 15 years becomes roughly $710/month — a payment that nearly doubles compared to the interest-only phase.
    </p>

    <p>
      This transition is called payment shock. Build it into your planning. If you're carrying a large HELOC balance when the draw period ends, the payment increase can affect your cash flow significantly.
    </p>

    <h2>How Much Equity You Can Access</h2>

    <p>
      The math uses your combined loan-to-value (CLTV) limit:
    </p>

    <ul>
      <li>Home value: $400,000</li>
      <li>80% CLTV limit: $320,000</li>
      <li>Current mortgage balance: $250,000</li>
      <li><strong>Available HELOC: $70,000</strong></li>
    </ul>

    <p>
      The rate is variable — typically tied to the prime rate plus a margin. If prime is 8.5% and your margin is 0.5%, your HELOC rate is 9%. That rate moves when prime moves, which means your carrying costs on a drawn balance change with the interest rate environment.
    </p>

    <h2>How Investors Actually Use HELOCs</h2>

    <h3>Down Payments on Investment Properties</h3>

    <p>
      Investment property loans require 20–25% down. On a $200,000 property, that's $40,000–$50,000. Many investors use HELOC draws for these down payments, then pay the HELOC back with rental income over time. The key: the rental cash flow needs to service the HELOC interest. If the deal doesn't pencil with the HELOC cost included, it shouldn't be done this way.
    </p>

    <h3>Rehab Funding</h3>

    <p>
      Bought a distressed property that needs renovation? Use the HELOC for rehab costs. Once the work is complete and the property is either sold or stabilized as a rental, pay the HELOC back from proceeds or rental income. The HELOC functions as a short-term renovation loan without the origination costs of a hard money draw.
    </p>

    <h3>The BRRRR Cycle Accelerator</h3>

    <p>
      The <Link to="/blog/brrrr-method-real-estate">BRRRR method</Link> requires capital for purchase and rehab, then a refinance to recycle that capital into the next deal. A HELOC is the revolving fund that keeps the cycle moving. You pull from the HELOC to fund the deal, refinance the stabilized property to pay back the HELOC, and repeat. Done properly, the same HELOC balance can fund multiple deals over a few years.
    </p>

    <h3>Quick Capital for Competitive Offers</h3>

    <p>
      With an established HELOC, you have same-day access to capital — no underwriting delay, no approval timeline. That lets you make strong offers with fast close timelines, which sellers price positively in competitive situations.
    </p>

    <h2>HELOC vs. Cash-Out Refinance</h2>

    <p>
      Both access equity. The choice depends on how you plan to use it.
    </p>

    <p>
      A <Link to="/blog/cash-out-refinance">cash-out refinance</Link> replaces your mortgage with a new, larger loan and gives you the difference at closing. It's a lump sum, usually at a fixed rate — good for one large capital pull, but it replaces your existing mortgage, which matters if your current rate is below market.
    </p>

    <p>
      A HELOC sits alongside your existing mortgage without changing its terms and gives you revolving access rather than one lump sum. For investors who want repeated, flexible access to equity across multiple deals, the HELOC structure usually wins.
    </p>

    <div className="callout">
      <strong>Many experienced investors use both.</strong> A cash-out refi to pull a large equity chunk into working capital, and a HELOC for ongoing smaller draws. The tools aren't mutually exclusive.
    </div>

    <h2>The Risks That Actually Matter</h2>

    <p>
      You're borrowing against your home. If your investment doesn't perform and you can't service the HELOC, the lender's collateral is your primary residence. That's a different risk profile than a hard money loan on an investment property.
    </p>

    <p>
      The real dangers are overleveraging and rate exposure. An investor who maxes out a HELOC across speculative deals and then hits a vacancy problem has created a situation where their home is at risk from their rental portfolio's underperformance. Variable rates that move significantly can turn a manageable HELOC payment into a cash flow problem.
    </p>

    <p>
      The discipline: use the HELOC for deals that clearly pencil including the HELOC carrying cost, maintain cash reserves to service the HELOC during vacancies or project delays, and pay it down between deals rather than treating the credit line as permanent capital.
    </p>

    <p>
      The <a href="https://www.consumerfinance.gov/ask-cfpb/what-is-a-home-equity-line-of-credit-heloc-en-106/" target="_blank" rel="noopener noreferrer">CFPB's HELOC overview</a> explains the consumer protections and key terms. For the full toolkit of investor financing options, see the <Link to="/real-estate-investing/funding-financing">funding and financing overview</Link>.
    </p>

    <div className="callout">
      A HELOC is one of the most capital-efficient tools available to an investor who owns property with equity. Set it up before you need it, use it for deals that cash flow with the cost factored in, and pay it down between deals. The investors who use it well treat it as a tool that accelerates deals — not as a substitute for having a real capital base.
    </div>
  </BlogPost>
);

export default HelocRealEstate;
