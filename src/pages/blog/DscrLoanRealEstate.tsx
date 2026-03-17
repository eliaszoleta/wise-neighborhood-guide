import { Link } from "react-router-dom";
import BlogPost from "@/components/BlogPost";

const DscrLoanRealEstate = () => (
  <BlogPost
    title="What Is a DSCR Loan? How Real Estate Investors Use Debt Service Coverage"
    metaDesc="A DSCR loan qualifies investors based on rental income instead of W-2s or tax returns. Here's how the debt service coverage ratio works, what lenders require, and when this loan type makes sense."
    slug="financing/dscr-loan-real-estate"
    datePublished="2026-03-16"
    category="Financing"
    faqs={[
      { q: "What is the minimum DSCR most lenders require?", a: "Most DSCR lenders set a floor of 1.0x, meaning rental income at least equals the monthly debt payment. Better rates and terms typically require 1.20x to 1.25x. Some lenders offer a 'no-ratio' product below 1.0x but charge significantly higher rates and cap LTV at 65%." },
      { q: "How is a DSCR loan different from a conventional investment property loan?", a: "Conventional investment loans require W-2s, tax returns, and count your personal debt-to-income ratio. DSCR loans ignore your personal income entirely — the property's rental income is the primary underwriting factor beyond credit score and LTV. This makes DSCR especially useful for self-employed investors whose tax returns show low net income after deductions." },
      { q: "Does your credit score still matter for a DSCR loan?", a: "Yes. Most DSCR lenders require a minimum 620-640 FICO, and the best rates go to borrowers above 740-760. Credit score affects both your rate and the maximum LTV you can access. A 680 score borrower may be capped at 70% LTV while a 760+ borrower can access 75-80% LTV on the same property." },
      { q: "What is the maximum LTV on a typical DSCR loan?", a: "Most DSCR lenders cap purchase loans at 75-80% LTV for single-family and small multifamily. Cash-out refinances are typically limited to 70-75% LTV. Some lenders drop the max to 65-70% if the DSCR is below 1.20x or the borrower's credit score is below 680." },
      { q: "Can short-term rental income count toward DSCR qualification?", a: "Some DSCR lenders accept short-term rental income from platforms like Airbnb and VRBO, but typically require 12-24 months of documented rental history and apply a conservative haircut — often 75-80% of gross receipts. Many lenders fall back to a market long-term rent estimate from an appraiser if STR history is thin. Underwriting standards vary significantly by lender." },
    ]}
  >
    <p>You've found a property that cash flows, but your tax returns show $40,000 in net income after depreciation and deductions — and a conventional lender is turning you down because your debt-to-income ratio is too high. That's exactly the problem a DSCR loan was built to solve. The loan qualifies based on what the property earns, not what you earn personally.</p>
    <p>DSCR loans have become the dominant financing tool for active real estate investors, especially those who've hit Fannie Mae's 10-property conventional limit or who can't document enough personal income to satisfy traditional underwriting. Understanding how the ratio is calculated — and how lenders apply it — determines whether a deal works on paper before you ever apply.</p>

    <h2>What DSCR Actually Means</h2>
    <p>DSCR stands for Debt Service Coverage Ratio. The formula: divide the property's gross rental income by its total monthly debt service (principal, interest, taxes, insurance, and HOA if applicable — collectively called PITIA). A 1.0x DSCR means rent exactly covers the payment. A 1.25x DSCR means rent covers 125% of the payment.</p>
    <div className="callout">
      <strong>The formula:</strong> DSCR = Monthly Gross Rent ÷ Monthly PITIA. Some lenders use annual figures (Net Operating Income ÷ Annual Debt Service), but for residential DSCR loans the monthly calculation is standard.
    </div>
    <p>Lenders use market rent — what an appraiser determines the property should rent for — not necessarily the current lease amount. If you have a below-market tenant paying $1,400/month but market rent is $1,700, the lender will typically use $1,700 in the calculation.</p>

    <h2>Running the Numbers: A Real Example</h2>
    <p>Single-family rental, purchase price $200,000, 25% down ($50,000), loan amount $150,000. At 7.5% on a 30-year term, the P&amp;I payment is $1,049. Add $250/month in taxes and $100/month in insurance: total PITIA is $1,399. Market rent per the appraisal: $1,800/month.</p>
    <p>DSCR = $1,800 ÷ $1,399 = 1.29x. That clears most lenders' 1.20-1.25x minimum. Now run the same deal at $1,600 rent — DSCR drops to 1.14x, still qualifying at most lenders but at a higher rate tier. At $1,400 rent you're at 1.00x, hitting the floor for most programs and getting the worst pricing tier.</p>
    <div className="callout">
      <strong>Rate impact:</strong> DSCR loans typically run 1-2% above comparable conventional investment property rates. If conventional 30-year investment loans are at 7%, expect DSCR rates of 7.75-9% depending on DSCR ratio, LTV, credit score, and lender.
    </div>

    <h2>Who DSCR Loans Are Built For</h2>
    <p>The clearest use case is the investor who has maximized conventional financing. Fannie Mae and Freddie Mac limit investors to 10 financed properties. Once you hit that cap, conventional loans stop being an option regardless of credit strength. DSCR loans have no such limit — some investors carry 20, 30, or 50 DSCR loans across their portfolio.</p>
    <p>The second major use case is the self-employed investor. If you run an S-corp, take depreciation on multiple properties, and run legitimate business expenses, your adjusted gross income may be $50,000 on paper even if you're generating $300,000 in gross receipts. Conventional DTI underwriting penalizes this structure. DSCR underwriting ignores it entirely.</p>
    <ul>
      <li>Investors at or beyond the 10-property Fannie/Freddie limit</li>
      <li>Self-employed borrowers with low documented net income</li>
      <li>LLCs and other business entities — many DSCR lenders lend to LLCs directly</li>
      <li>Foreign nationals who lack U.S. income documentation</li>
      <li>Investors who want a faster close without weeks of income doc review</li>
    </ul>

    <h2>DSCR Loan Terms and Structure</h2>
    <p>Most DSCR loans are 30-year fixed or 5/1, 7/1, and 10/1 ARMs. Prepayment penalties are common — typically a 3-year or 5-year step-down structure (3-2-1 or 5-4-3-2-1 percent of the loan balance). If you're running a <Link to="/blog/investing/brrrr-method-real-estate">BRRRR strategy</Link> and plan to refinance within 36 months, the prepayment penalty must be part of your exit math before signing — it can cost $4,000-$8,000 on a $200,000 loan.</p>
    <p>Loan amounts typically range from $100,000 to $3-5 million. Most DSCR programs cover 1-4 unit residential properties; some extend to 5-8 unit small multifamily. Commercial DSCR on apartment complexes, retail, and office operates under entirely different underwriting standards.</p>

    <h2>How DSCR Compares to Other Investor Loan Types</h2>
    <p>DSCR loans sit between conventional investment loans and <Link to="/blog/financing/hard-money-lender">hard money lenders</Link> on the spectrum of ease-versus-cost. Conventional loans are cheapest but hardest to qualify for. Hard money is easiest to qualify for but most expensive (10-14% rates) and short-term. DSCR is the middle ground: no income documentation, reasonable rates, 30-year amortization.</p>
    <blockquote>
      If you need short-term capital for a flip or value-add project, a <Link to="/blog/financing/hard-money-lender">hard money loan</Link> or <Link to="/blog/financing/bridge-loan-real-estate">bridge loan</Link> is usually the right tool. DSCR loans are designed for stabilized, rent-ready properties you intend to hold long-term — they don't work for properties with deferred maintenance or vacant units awaiting rehab.
    </blockquote>
    <p><Link to="/blog/financing/private-money-lender">Private money lenders</Link> can sometimes beat DSCR on flexibility, but they rarely offer 30-year amortization. Most private deals are 1-5 year terms with balloon payments, which creates refinance risk.</p>

    <h2>Calculating Whether a DSCR Loan Pencils</h2>
    <p>Before applying, run this quick stress test: increase the projected PITIA by 10% (for rate fluctuations and insurance increases) and decrease the rent estimate by 5% (for vacancy). If you still clear 1.20x on those adjusted figures, the deal has a cushion. If you're depending on both perfect occupancy and perfect rates to hit 1.0x, the deal is fragile regardless of what the lender will approve.</p>
    <p>Also account for reserve requirements. Most DSCR lenders require 6 months of PITIA in liquid reserves — on a $1,400/month PITIA, that's $8,400 you can't count as part of your down payment. Factor reserves into your total capital needed at closing.</p>

    <h2>When DSCR Doesn't Make Sense</h2>
    <p>If you can qualify conventionally and you're under the 10-property limit, you'll almost always get a better rate through Fannie/Freddie. The 1-2% rate premium on a DSCR loan on a $200,000 balance translates to roughly $100-200/month in extra interest. Over 5 years that's $6,000-$12,000 in additional cost — a real drag on your returns.</p>
    <p>DSCR also doesn't work for properties that don't yet generate rental income. A vacant property, a live-in flip, or a primary residence can't be underwritten on rental DSCR. For those situations, look at <Link to="/blog/financing/cash-out-refinance">cash-out refinance</Link> on existing equity or a <Link to="/blog/financing/bridge-loan-real-estate">bridge loan</Link> to get through the transition period.</p>

    <h2>Finding and Vetting DSCR Lenders</h2>
    <p>DSCR loans aren't available at traditional retail banks — you'll find them through mortgage brokers who specialize in investment property, non-QM lenders, or direct lenders like Visio, Kiavi, Civic Financial, and Lima One Capital. Rates and program overlays vary significantly between lenders, so get at least three quotes before committing.</p>
    <p>Ask specifically about: minimum DSCR threshold, prepayment penalty structure, whether they lend to LLCs in your state, how they treat short-term rental income, and whether they cap the total number of financed properties. Brokers who specialize in investor lending often have access to 15-20 DSCR lenders and can match your deal's profile to the lender with the best terms — one situation where using a broker typically saves money rather than costs it.</p>
  </BlogPost>
);

export default DscrLoanRealEstate;
