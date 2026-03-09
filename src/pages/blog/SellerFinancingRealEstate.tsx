import BlogPost from "@/components/BlogPost";

const SellerFinancingRealEstate = () => (
  <BlogPost
    title="Seller Financing in Real Estate: How It Works and When It Makes Sense"
    metaDesc="Seller financing is when the person selling a property acts as the bank. Here's how the deal is structured, what rates and terms look like, and when it's actually worth pursuing."
  >
    <p>The conventional path to buying real estate runs through a bank. You apply, they underwrite, they decide, they set the terms. For most transactions that's fine. But banks say no to a lot of deals that have real logic behind them — the credit score is a few points low, the property needs work and won't appraise, the income is self-employment and complicated to document, or the timeline doesn't fit a 30–45 day close.</p>

    <p>Seller financing is the structure where you skip the bank entirely. The seller extends credit directly to the buyer. Instead of getting paid in full at closing, the seller receives a down payment and then monthly payments — principal plus interest — until the loan is paid off or the buyer refinances out. The property is the collateral. It's a real loan, with real documentation, just issued by a person instead of an institution.</p>

    <h2>The Core Documents</h2>

    <p>Two documents make a seller-financed deal legally real:</p>

    <p><strong>The promissory note</strong> is the loan agreement. It states the loan amount, interest rate, payment schedule, maturity date, and what happens in default. This is the buyer's binding promise to repay. Every material term needs to be spelled out here — vague notes cause expensive disputes later.</p>

    <p><strong>The deed of trust (or mortgage, depending on state)</strong> is the security instrument. It's recorded with the county and creates a lien on the property in the seller's favor. If the buyer stops paying, the seller can foreclose through this lien. The deed of trust works in lockstep with the promissory note — the terms in both documents must match exactly. If there's a discrepancy between interest rates, payment amounts, or maturity dates across the two documents, you've created a legal problem.</p>

    <p>At closing, the buyer takes title to the property. The seller holds the lien. Once the loan is fully paid, the seller releases it and the buyer owns free and clear.</p>

    <h2>What the Terms Actually Look Like</h2>

    <p>Seller financing is not bank financing with a different lender. The structure is different and so are the economics.</p>

    <p>Interest rates typically run 6–10%, sometimes higher. This is above conventional mortgage rates for a reason: the seller is taking on credit risk without the underwriting infrastructure a bank has. The seller doesn't know with certainty that the buyer will pay. The rate compensates for that.</p>

    <p>Amortization is negotiable but rarely 30 years. Most seller-financed deals use a 15–30 year amortization schedule — which keeps monthly payments manageable — with a balloon payment due in 3–7 years. That balloon is the critical piece: when it comes due, the buyer either pays off the full remaining balance or refinances into a conventional loan. If neither is possible when the balloon hits, the buyer is in default. Don't enter a seller-financed deal without a credible plan for the balloon.</p>

    <p>Down payments are typically 10–30% depending on the seller's situation and willingness to take on risk. A seller with no urgency to sell will want more down. A motivated seller might take less. The down payment is the seller's primary protection against immediate loss if the buyer defaults shortly after closing.</p>

    <h2>Why Sellers Agree to It</h2>

    <p>Not every seller wants a lump sum. Counterintuitive as that sounds, a seller who has a paid-off property and accepts seller financing spreads their capital gains over the life of the loan — this is an installment sale under IRS rules, and it can significantly reduce the tax hit compared to receiving the full purchase price in one year. The seller also earns interest income, which can function as a steady revenue stream, especially for retired sellers who don't need all the cash immediately.</p>

    <p>Sellers also use it to move properties that would otherwise be hard to sell conventionally — older buildings, mixed-use, rural land, or anything that a bank appraiser might struggle to value or approve. If the bank won't lend on it, seller financing is often the only way to find a buyer.</p>

    <h2>Why Buyers Pursue It</h2>

    <p>Speed is part of it — seller-financed deals close faster because there's no bank underwriting process. For a buyer who needs to close in two weeks, this matters.</p>

    <p>Flexibility is the bigger part. A buyer who doesn't qualify for conventional financing — self-employed income that's hard to document, a credit score in the high 600s, a property condition that fails appraisal — may qualify for seller financing where a bank would decline. The seller sets the qualification criteria based on their own judgment and the deal structure.</p>

    <p>It's also sometimes the only way to acquire a specific property. If a seller owns something free and clear and isn't desperate for cash, they may prefer the installment sale structure for tax reasons and simply won't sell conventionally. The buyer who wants that property has to work within the seller's preferred structure.</p>

    <h2>The Risks — Honestly</h2>

    <p>For buyers: the interest rate is almost always higher than what a bank would charge a well-qualified borrower. The balloon creates refinance risk — if rates are high or your credit hasn't improved when the balloon comes due, you may not be able to refinance on terms that work. And seller financing is less regulated than bank lending, which means the deal is only as sound as the documents you signed.</p>

    <p>For sellers: default is real. If the buyer stops paying, foreclosing is slower and more expensive than people expect — especially in judicial foreclosure states where the process runs through the courts. During the foreclosure, the seller isn't receiving payments and may be dealing with a deteriorating property. Sellers also give up the liquidity of a full cash sale — though there's a secondary market where sellers can sell the promissory note to investors, typically at a discount.</p>

    <h2>When to Use It</h2>

    <ul>
      <li><strong>Property that won't pass conventional appraisal or underwriting</strong> — land, rural properties, distressed buildings, mixed-use</li>
      <li><strong>Sellers who benefit from an installment sale</strong> — free-and-clear properties, sellers managing capital gains</li>
      <li><strong>Buyers who need a faster close or don't fit conventional loan criteria</strong></li>
      <li><strong>Deals where negotiating the terms directly creates better structure</strong> than what a bank would offer</li>
    </ul>

    <p>Get an attorney for every seller-financed deal. The promissory note and deed of trust need to be drafted correctly for your state — foreclosure law is state-specific and inconsistencies in the documents create risk for both sides. This is not the place for a template from the internet. The cost of proper legal documentation is small relative to what goes wrong when it isn't done right.</p>

    <div className="callout">
      <p>Seller financing is a real tool, not a workaround. When the structure fits — the seller's tax situation, the buyer's financing challenge, or a property banks won't touch — it can make deals happen that otherwise wouldn't. Understand the balloon, know your exit, and document everything properly.</p>
    </div>
  </BlogPost>
);

export default SellerFinancingRealEstate;
