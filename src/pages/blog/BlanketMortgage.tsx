import { Link } from "react-router-dom";
import BlogPost from "@/components/BlogPost";

const BlanketMortgage = () => (
  <BlogPost
    title="What Is a Blanket Mortgage? A Guide for Real Estate Investors With Multiple Properties"
    metaDesc="A blanket mortgage covers multiple properties under one loan. Here's how the release clause works, when consolidating a portfolio makes sense, and the risks of linking all your properties to one lender."
    slug="financing/blanket-mortgage"
    datePublished="2026-02-13"
    category="Financing"
    faqs={[
      { q: "What is a blanket mortgage in real estate?", a: "A blanket mortgage is a single loan that uses multiple properties as collateral. Instead of a separate loan on each property, you have one loan, one payment, and one lender securing all the included properties. Blanket mortgages are used by investors consolidating portfolios, developers building multiple units, and investors who have hit the conventional financing limit of 10 properties." },
      { q: "What is a release clause in a blanket mortgage?", a: "A release clause allows an individual property to be sold and removed from the blanket mortgage without requiring the entire loan to be paid off. When you sell a property, you pay down a portion of the balance — often 115–125% of that property's allocated loan value — the lender releases its lien on that property, and your remaining properties stay in the blanket mortgage. Without a release clause, selling any single property triggers the full loan payoff." },
      { q: "Where do you get a blanket mortgage?", a: "Blanket mortgages come from portfolio lenders, commercial banks, credit unions that hold their own loans, and some hard money lenders — not from retail mortgage lenders who sell loans to Fannie Mae or Freddie Mac. Because each deal is custom underwriting, expect to shop multiple lenders and negotiate terms directly. Commercial real estate brokers who specialize in investor financing can help source the right lender for your portfolio." },
      { q: "What credit score and experience do you need for a blanket mortgage?", a: "Most portfolio lenders want at least a 680 credit score, though some commercial lenders weight the portfolio's income performance more heavily than personal credit. More importantly, they want to see that you have experience managing the properties in the loan — inexperienced investors with large portfolios get scrutinized heavily. The properties need to demonstrate stable occupancy and rent rolls that support the debt service coverage ratio the lender requires." },
      { q: "What are the risks of a blanket mortgage?", a: "The primary risk is cross-collateralization: if you default on the blanket mortgage, the lender can foreclose on all the properties in the loan, not just the one generating the problem. With individual mortgages, a cash flow issue on one property is isolated. Under a blanket mortgage, one underperforming property can potentially destabilize the entire portfolio. This risk is manageable with solid reserves and conservative underwriting, but it's real and must be understood before consolidating." },
    ]}
    relatedArticles={[
      { label: "Portfolio Loans for Investors", href: "/blog/financing/portfolio-loan-real-estate" },
      { label: "DSCR Loans for Investors", href: "/blog/financing/dscr-loan-real-estate" },
      { label: "Hard Money Lenders Explained", href: "/blog/financing/hard-money-lender" },
    ]}
  >
    <p>
      At some point in a portfolio investor's growth, the financing system stops working the way it did at the start. Conventional loans cap out at 10 properties for most investors. Every new acquisition requires a separate application, a separate appraisal, a separate closing. The administrative overhead becomes significant. That's the problem a blanket mortgage solves.
    </p>

    <p>
      It's a portfolio-level tool — not a beginner product, not something your retail lender offers. If you're managing five-plus properties and the friction of individual financing is slowing you down, it's worth understanding how these loans work and when the consolidation math actually makes sense.
    </p>

    <h2>How a Blanket Mortgage Works</h2>

    <p>
      One loan, multiple properties. All the included properties serve as collateral for the single loan balance. You make one monthly payment instead of five or ten. There's one lender relationship to manage, one insurance conversation, one escrow account.
    </p>

    <p>
      The loan is underwritten based on the combined value and income of all the properties. Lenders look at the portfolio's debt service coverage ratio (DSCR) — the combined rental income relative to the combined loan payment — as the primary underwriting metric. Strong cash-flowing properties can compensate for weaker ones in the mix.
    </p>

    <h3>The Release Clause</h3>

    <p>
      This is the mechanism that makes blanket mortgages viable for investors who buy and sell. Without a release clause, every property in the loan is locked until the entire loan is paid off — you cannot sell a single house without triggering the full payoff. That defeats the purpose.
    </p>

    <p>
      A standard release clause works like this: you sell Property C, which has an allocated loan value of $80,000. The lender requires you to pay 115–125% of that allocated value ($92,000–$100,000) from the sale proceeds to release the lien. The remaining properties stay in the blanket mortgage at the adjusted balance.
    </p>

    <p>
      Before signing a blanket mortgage, make sure the release clause terms are clearly defined — what percentage of the allocated value is required, how properties are valued, and whether the clause applies to all properties equally. This is the most negotiated part of the term sheet.
    </p>

    <h2>When Blanket Mortgages Make Sense</h2>

    <ul>
      <li><strong>You've hit the conventional limit.</strong> Fannie Mae caps conventional financing at 10 financed properties. Once you're there, portfolio lenders and blanket mortgages are how growth continues.</li>
      <li><strong>You're a developer building multiple units.</strong> A blanket mortgage on a parcel with multiple homes under construction lets you sell individual lots or units as they're completed using the release clause.</li>
      <li><strong>You're consolidating a fragmented portfolio.</strong> Multiple lenders, multiple rates, multiple servicing relationships — rolling them into one loan can simplify operations and sometimes improve terms through the larger loan size.</li>
      <li><strong>You want one payment over many.</strong> The administrative simplification is real. Some investors with 15+ properties find it worth a slightly higher rate for the clean management structure.</li>
    </ul>

    <h2>When to Stay With Individual Loans</h2>

    <ul>
      <li>You have fewer than five properties — the savings don't outweigh the complexity</li>
      <li>You can still access conventional rates — blanket mortgage rates are usually higher</li>
      <li>You're executing the <Link to="/blog/investing/brrrr-method-real-estate">BRRRR strategy</Link>, which requires refinancing each property individually as it seasons</li>
      <li>You want to keep each property's risk isolated — cross-collateralization is a real constraint</li>
    </ul>

    <div className="callout">
      <strong>The rate tradeoff is real.</strong> Conventional loans at 7–8% versus blanket mortgage rates that often run 8–10% or higher depending on the lender and deal. You're trading rate efficiency for operational simplicity and access above the conventional property cap. Whether that trade makes sense depends on your portfolio size and how much the administrative overhead is actually costing you.
    </div>

    <h2>The Risk You Need to Take Seriously</h2>

    <p>
      Cross-collateralization cuts both ways. All your properties are stronger collateral together, which is why the lender can offer one consolidated loan. But if you default — even if the problem is one underperforming property in a portfolio of ten solid ones — the lender has a claim on everything.
    </p>

    <p>
      With individual mortgages, a bad property is a contained problem. A vacancy on one house creates a payment issue on that mortgage, not the other nine. Under a blanket mortgage, cash flow stress anywhere in the portfolio can threaten all of it.
    </p>

    <p>
      This is why blanket mortgages require strong reserves. A practical minimum: six-plus months of total debt service in liquid reserves, plus operating reserves for each individual property. Don't consolidate into one loan if your liquidity is thin.
    </p>

    <h2>Where to Find Blanket Mortgage Lenders</h2>

    <p>
      Retail mortgage lenders don't offer these. You're looking for portfolio lenders — banks and credit unions that hold their own loans rather than selling them to Fannie Mae or Freddie Mac. Community banks and regional banks in your market are often the first call. Commercial real estate lenders who specialize in investor portfolios underwrite on property income rather than your personal income, which can work in your favor.
    </p>

    <p>
      Some <Link to="/blog/financing/hard-money-lender">hard money lenders</Link> offer blanket structures for transitional portfolios, though at higher rates and shorter terms. For a broader look at portfolio financing options, the <Link to="/real-estate-investing/funding-financing">funding and financing overview</Link> covers the full range of debt tools available to investors.
    </p>

    <p>
      The <a href="https://www.investopedia.com/terms/b/blanket-mortgage.asp" target="_blank" rel="noopener noreferrer">Investopedia overview of blanket mortgages</a> covers the core structure and terminology in depth.
    </p>

    <div className="callout">
      A blanket mortgage is a consolidation tool, not a growth hack. Use it when individual financing has genuinely become a bottleneck — not before. The right time is when the administrative overhead of multiple loans is real, you've hit or are approaching conventional limits, and you have the cash reserves to handle what cross-collateralization means for portfolio risk.
    </div>
  </BlogPost>
);

export default BlanketMortgage;
