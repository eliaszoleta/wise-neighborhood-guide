import { Link } from "react-router-dom";
import BlogPost from "@/components/BlogPost";

const BridgeLoanRealEstate = () => (
  <BlogPost
    title="What Is a Bridge Loan in Real Estate and When Does One Actually Make Sense?"
    metaDesc="A bridge loan is short-term financing that closes fast when conventional mortgages can't. Here's how the terms work, what they actually cost, and when the math justifies using one."
    slug="bridge-loan-real-estate"
    datePublished="2026-02-13"
    category="Financing"
    faqs={[
      { q: "What is a bridge loan in real estate?", a: "A bridge loan is a short-term loan — typically 6–18 months — designed to fund a real estate transaction quickly when conventional financing either isn't available or isn't fast enough. Investors use bridge loans to buy distressed properties, close on acquisitions before their existing property sells, and fund value-add projects prior to refinancing into permanent financing. The loan is bridged to an exit: a sale, a refinance, or the completion of a transaction." },
      { q: "What are typical bridge loan interest rates and fees?", a: "Bridge loan rates typically run 8–15% annual interest depending on the lender type and deal. On top of interest, expect to pay 1–3 origination points at closing (each point equals 1% of the loan amount). On a $200,000 bridge loan at 11% for 10 months with 2 points, you'd pay $4,000 in points at closing plus $18,333 in interest — roughly $22,333 in total financing cost before you sell or refinance. Every month you hold it costs more." },
      { q: "How fast can a bridge loan close?", a: "Hard money bridge lenders can close in 5–10 business days when deals are clean and documentation is ready. Bank-issued bridge loans take 2–4 weeks. This speed is the entire point of bridge financing — it allows investors to compete for time-sensitive deals where conventional lenders would miss the window." },
      { q: "What is the difference between a bridge loan and a hard money loan?", a: "The terms overlap significantly. Hard money loans from private lenders are often marketed as bridge loans, and the structure is effectively identical: short-term, higher-rate, asset-based, interest-only with a balloon. The distinction is mainly about the lender type — bank-issued bridge loans tend to have slightly lower rates and longer terms; hard money bridge loans come from private lenders, have higher rates and shorter terms, and underwrite primarily on the property rather than the borrower." },
      { q: "What happens if I can't pay off a bridge loan when it matures?", a: "If you can't sell or refinance by the maturity date, most lenders offer an extension — typically at an additional fee (0.5–1 point) and possibly a higher rate. Extensions are not guaranteed, so treating the maturity date as a soft deadline is risky. Before taking a bridge loan, model your exit conservatively: how long will the renovation actually take, how long will the sale or refinance approval realistically require, and what is your buffer if things run long?" },
    ]}
  >
    <p>
      You find a distressed property at auction that needs to close in 10 days. Your bank needs 45 days minimum. The deal is going to generate $60,000 in profit and you're about to lose it because of a timing mismatch. That's the exact situation bridge loans exist for.
    </p>

    <p>
      Bridge loans are speed tools. They're expensive — meaningfully more than conventional financing — and they have a clock ticking from day one. But when the deal justifies the cost and conventional financing can't move fast enough, a bridge loan is often the only way to close.
    </p>

    <h2>What Bridge Loans Are Actually Used For</h2>

    <p>
      The name describes the function: you're bridging from where you are now to where you need to be, with the loan getting paid off when you arrive.
    </p>

    <p>
      <strong>For investors:</strong> Buying distressed properties that banks won't touch, competing at auction where close timelines are 7–14 days, buying before your capital is freed up from another deal, funding value-add projects that need to be stabilized before they qualify for long-term financing.
    </p>

    <p>
      <strong>For homeowners:</strong> Found your next house but haven't sold the current one. Need to move for a job relocation on a timeline. In a competitive market where contingent offers lose to non-contingent ones.
    </p>

    <p>
      In all these cases, the bridge loan is a short-term placeholder — not a permanent financing solution. Your exit strategy is what the lender evaluates most carefully, because without a clear, credible exit, the loan doesn't make sense for either party.
    </p>

    <h2>What Bridge Loans Cost — With Real Numbers</h2>

    <p>
      You're borrowing $200,000 at 11% interest with 2 origination points for an estimated 10-month hold:
    </p>

    <ul>
      <li><strong>Origination (2 points):</strong> $4,000 due at closing</li>
      <li><strong>Monthly interest (11% ÷ 12 = 0.917%):</strong> $1,833/month</li>
      <li><strong>10 months of interest:</strong> $18,333</li>
      <li><strong>Total financing cost:</strong> ~$22,333</li>
    </ul>

    <p>
      That $22,333 is the floor — it doesn't include the appraisal, title work, or any extension fees if the project runs long. Every additional month costs $1,833. If your flip is going to generate $55,000 in profit but you held 14 months instead of 10, you've just lost $7,333 to time.
    </p>

    <p>
      This is why deal math for bridge-financed projects has to include the full financing cost with a realistic hold period, not the optimistic one. Budget for delays. Contractors run late. Permits get held up. Buyers' financing falls through. The deal that looks like $55,000 profit assuming 8 months can look very different at 14 months.
    </p>

    <h3>Typical Terms</h3>

    <ul>
      <li><strong>Loan term:</strong> 6–18 months (12 months is most common)</li>
      <li><strong>Interest rate:</strong> 8–15% depending on lender type and deal</li>
      <li><strong>LTV:</strong> 65–80% of property value or ARV</li>
      <li><strong>Origination fees:</strong> 1–3 points paid at closing</li>
      <li><strong>Payment structure:</strong> Interest-only monthly, full principal due at maturity</li>
    </ul>

    <h2>Bridge Loans vs. Hard Money: What's the Difference?</h2>

    <p>
      Mostly, the label. <Link to="/blog/hard-money-lender">Hard money lenders</Link> often market their products as bridge loans, and the structure is effectively identical — short-term, higher-rate, asset-based, interest-only with a balloon payment.
    </p>

    <p>
      The cleaner distinction: bank-issued bridge loans tend to have slightly lower rates (8–10%), longer terms, and require more traditional borrower qualification. Hard money bridge loans from private lenders have higher rates (10–15%), shorter terms, and underwrite primarily on the property rather than the borrower. Hard money lenders also close faster — often 5–7 days versus 2–4 weeks for a bank.
    </p>

    <p>
      If you need to close in 7 business days, you're calling a hard money lender. If you have a month and want the lowest possible rate, a bank bridge product may be available. Evaluate based on your specific timeline and the actual rate differential — not the category name.
    </p>

    <h2>The Exit Strategy Is Everything</h2>

    <p>
      Before you take a bridge loan, write down your exit strategy and stress-test it.
    </p>

    <p>
      <strong>Exit: Sale.</strong> If you're flipping, what's your realistic sale timeline? Factor in rehab time, market days on market, buyer financing contingency period, and closing. How long does that actually take in your market?
    </p>

    <p>
      <strong>Exit: Refinance.</strong> If you're holding as a rental, most conventional lenders require a 6-month seasoning period before they'll appraise the improved value and issue a permanent loan. That's 6 months of bridge loan interest after rehab completion — build it into your cost model. The <Link to="/blog/brrrr-method-real-estate">BRRRR strategy</Link> depends entirely on this exit, and the math breaks when the seasoning period adds unexpected carrying costs.
    </p>

    <p>
      <strong>Extension.</strong> What does an extension cost if your timeline slips? Most lenders charge 0.5–1 additional points plus a possible rate adjustment. Know the extension terms before you close — not after you're in the deal.
    </p>

    <div className="callout">
      <strong>The most dangerous bridge loan is one with a vague exit.</strong> "We'll sell it" is not an exit strategy. "We'll sell it at $280,000, which is 12% below comparable sales, and we've budgeted 90 days on market plus a 45-day close, giving us a hard out by Month 11 on a 12-month loan" is an exit strategy.
    </div>

    <h2>Where to Find Bridge Loan Lenders</h2>

    <p>
      For speed, start with hard money lenders. Your local REIA network is the best referral source — experienced investors in your market have already sorted out which lenders fund reliably and which ones create problems mid-deal. For lower rates with more time, explore commercial banks and credit unions that offer bridge products for real estate investors.
    </p>

    <p>
      The <a href="https://www.investopedia.com/terms/b/bridgeloan.asp" target="_blank" rel="noopener noreferrer">Investopedia bridge loan overview</a> is a solid reference on the mechanics. For investors building out their full financing toolkit, the <Link to="/real-estate-investing/funding-financing">funding and financing page</Link> covers the complete range of short and long-term debt options.
    </p>

    <div className="callout">
      Bridge loans are the right tool when speed justifies the cost and the exit is clear. Use them to close deals you would otherwise lose. Avoid them when the deal's margin is thin enough that an extra month or two of carry would wipe out your profit. Every dollar of bridge loan interest is a dollar that has to be earned back from the deal itself.
    </div>
  </BlogPost>
);

export default BridgeLoanRealEstate;
