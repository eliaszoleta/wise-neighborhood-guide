import { Link } from "react-router-dom";
import BlogPost from "@/components/BlogPost";

const WraparoundMortgage = () => (
  <BlogPost
    title="What Is a Wraparound Mortgage and How Do Real Estate Investors Use It?"
    metaDesc="A wraparound mortgage lets sellers carry financing while keeping their existing mortgage in place. Learn how the math works, the legal risks, and when it makes sense."
    slug="financing/wraparound-mortgage"
    datePublished="2026-03-16"
    category="Financing"
    faqs={[
      { q: "What is a wraparound mortgage?", a: "A wraparound mortgage is a seller-financing arrangement where the seller keeps their existing mortgage in place and creates a new, larger mortgage for the buyer. The buyer makes payments to the seller on the new loan; the seller continues making payments to the original lender. The seller earns the interest rate spread between what the buyer pays them and what they pay the bank." },
      { q: "How is a wraparound different from subject-to financing?", a: "In a subject-to deal, the seller transfers title to the buyer and the buyer takes over payments on the existing mortgage — but the loan stays in the seller's name. In a wraparound, the seller creates a new loan instrument for the buyer (an all-inclusive trust deed or land contract) and retains title or transfers it through an escrow arrangement. With a wrap, the seller actively manages payments between the buyer and the original lender. With subject-to, the buyer owns the property and controls payments directly." },
      { q: "What is the due-on-sale clause risk in a wraparound mortgage?", a: "Most modern mortgages contain a due-on-sale clause, which gives the lender the right to call the entire loan balance due immediately upon transfer of ownership. A wraparound mortgage typically triggers this clause. In practice, many lenders don't catch or enforce it if payments keep coming in, but the risk is real: the lender could demand full repayment, forcing the buyer to refinance or lose the property. Never do a wraparound without understanding this risk and having a contingency plan." },
      { q: "Is a wraparound mortgage legal?", a: "Wraparound mortgages are legal in most states, but the legality of specific structures varies. Some states regulate seller financing heavily, require licensed mortgage originator involvement, or have restrictions on land contracts. An all-inclusive deed of trust (AITD) is the most common vehicle used in states like California, Texas, and Oregon. Always work with a real estate attorney familiar with seller financing in your specific state before executing a wraparound." },
      { q: "Who benefits most from a wraparound mortgage arrangement?", a: "Buyers who can't qualify for conventional financing benefit from getting into a property with seller financing. Sellers with a low-rate existing mortgage benefit by earning the spread between the buyer's rate and their own — for example, paying 3.5% to their lender while collecting 6.5% from the buyer on a larger balance. The seller essentially becomes a bank, earning passive interest income while selling a property they're ready to exit." },
    ]}
    relatedArticles={[
      { label: "Seller Financing Explained", href: "/blog/financing/seller-financing-real-estate" },
      { label: "Subject-To Real Estate Explained", href: "/blog/financing/subject-to-real-estate" },
      { label: "Lease Option Real Estate", href: "/blog/financing/lease-option-real-estate" },
    ]}
  >
    <p>
      A seller bought a house in 2020 with a 3.5% mortgage. They owe $120,000.
      The property is worth $200,000 today. They want to sell, but every
      prospective buyer is shocked by 7.5% market rates. So instead of selling
      outright, the seller offers to carry the financing themselves — at 6.5%,
      on a new loan of $180,000, with a $60,000 down payment. The buyer gets
      below-market financing. The seller gets full price, earns interest income,
      and pockets the 3% spread between what the buyer pays them and what they
      owe the bank. That's a wraparound mortgage.
    </p>

    <h2>How the Mechanics Actually Work</h2>
    <p>
      In a standard property sale, the seller's mortgage gets paid off at
      closing. In a wraparound, it doesn't. The seller's existing loan stays
      in place. The seller then creates a new, larger loan — the "wrap" — that
      the buyer signs. This new loan literally wraps around the original.
    </p>
    <p>
      The payment flow looks like this:
    </p>
    <ol>
      <li>Buyer makes monthly payments to the seller on the new wraparound loan</li>
      <li>Seller uses part of those payments to cover their existing mortgage payment</li>
      <li>Seller keeps the difference as profit — the interest rate spread</li>
    </ol>
    <p>
      The buyer typically doesn't interact with the original lender at all. From
      the original bank's perspective, its borrower (the seller) is still making
      payments on time. From the buyer's perspective, they have a mortgage with
      the seller.
    </p>

    <h2>The Math: Where the Seller Makes Money</h2>
    <p>
      Here's the example spelled out with real numbers:
    </p>
    <ul>
      <li>Seller's existing mortgage balance: $120,000 at 4% (originated 2020)</li>
      <li>Seller's existing monthly P&amp;I payment: ~$660</li>
      <li>Wraparound loan amount: $180,000 at 6%</li>
      <li>Buyer's monthly P&amp;I payment to seller: ~$1,079 (30-year amortization)</li>
      <li>Seller's net monthly spread: $1,079 − $660 = <strong>$419/month</strong></li>
    </ul>
    <p>
      But it gets better for the seller. The seller earns 6% on the full
      $180,000 outstanding balance, while only paying 4% on the $120,000 they
      owe the bank. The spread isn't just the payment difference — it's the
      interest rate differential applied across the entire wraparound balance.
      On a $180,000 wrap, that's effectively earning 6% on $60,000 of equity
      that would have just been cashed out at sale, plus the 2% spread on the
      remaining $120,000. Over five years, a seller in this position nets
      tens of thousands in interest income they wouldn't have earned in a
      conventional sale.
    </p>
    <div className="callout">
      <strong>The seller becomes the bank:</strong> In a wraparound, the seller
      takes on the role of a lender. They collect payments, manage the escrow
      account (or use a third-party servicer), and are responsible for paying
      the underlying mortgage on time regardless of whether the buyer pays them.
    </div>

    <h2>Wraparound vs. Subject-To</h2>
    <p>
      People sometimes confuse wraparound mortgages with subject-to financing
      because both involve keeping an existing mortgage in place. The key
      differences:
    </p>
    <ul>
      <li>
        <strong>Subject-to:</strong> Seller transfers title to the buyer. The
        buyer owns the property and makes payments on the seller's existing
        mortgage directly (or through a servicer). The loan is still in the
        seller's name, but the buyer controls the property.
      </li>
      <li>
        <strong>Wraparound:</strong> Seller creates a new loan instrument
        (all-inclusive trust deed, land contract, or installment sale contract).
        The seller manages payments between the buyer and the original lender.
        Title transfer arrangements vary by state and structure.
      </li>
    </ul>
    <p>
      The practical difference matters most for risk allocation. In a
      subject-to, the buyer controls the property and is responsible for
      payments — if they stop paying, the property is theirs to deal with.
      In a wraparound, the seller is the intermediary, which means if the
      buyer stops paying them, the seller still owes the bank.
    </p>
    <blockquote>
      <Link to="/blog/financing/subject-to-real-estate">Subject-to financing</Link> is
      a related creative financing strategy where the buyer takes title subject
      to the existing mortgage remaining in the seller's name. Both strategies
      carry due-on-sale risk, but the legal structures and risk profiles differ.
      If you're exploring seller financing options, understand both before you
      choose.
    </blockquote>

    <h2>The Due-On-Sale Clause Risk</h2>
    <p>
      This is the part that can blow up a wraparound deal, and you need to
      understand it clearly before proceeding.
    </p>
    <p>
      Nearly every mortgage originated after 1982 contains a due-on-sale
      clause (also called an acceleration clause). This clause gives the lender
      the right to call the entire remaining loan balance due immediately if the
      property is sold or transferred without the lender's consent. A wraparound
      mortgage — especially one that involves a transfer of title — potentially
      triggers this clause.
    </p>
    <p>
      In practice, many lenders don't discover or enforce the due-on-sale clause
      as long as payments keep coming in. The bank isn't reviewing county
      recorder filings every month looking for title transfers on properties in
      their loan portfolio. But "they probably won't notice" is not a risk
      management strategy.
    </p>
    <p>
      Scenarios that increase the chance of triggering a due-on-sale call:
    </p>
    <ul>
      <li>Recording the wraparound deed of trust publicly (this makes it findable)</li>
      <li>The original lender being acquired, with new scrutiny of the loan portfolio</li>
      <li>The seller filing for bankruptcy (triggers disclosure)</li>
      <li>The buyer seeking homeowner's insurance in their name</li>
      <li>Property tax records being updated with a new owner name</li>
    </ul>
    <p>
      If the lender calls the loan, the seller would need to either pay off the
      existing mortgage immediately (refinance) or the deal structure collapses.
      The buyer's ability to stay in the property depends entirely on resolving
      the underlying mortgage crisis.
    </p>

    <h2>Why Buyers Use Wraparound Mortgages</h2>
    <p>
      Buyers turn to wraparound financing when they can't qualify for conventional
      lending — bruised credit, recent bankruptcy, self-employment with limited
      documented income, or simply needing terms that the current market won't
      provide. Specific scenarios:
    </p>
    <ul>
      <li>
        Buyers with credit scores below 620 who can't access FHA or conventional
        financing
      </li>
      <li>
        Real estate investors who've maxed out their conventional loan count
        and need another avenue
      </li>
      <li>
        Buyers who want below-market interest rates in a high-rate environment
        (getting 6% when banks are at 8% is significant)
      </li>
      <li>
        Fast closings where the buyer needs to move quickly and can't wait for
        bank underwriting
      </li>
    </ul>

    <h2>Legal Protections Both Parties Need</h2>
    <p>
      A handshake wraparound deal is a nightmare waiting to happen. Both the
      buyer and the seller need formal legal protections in place.
    </p>

    <h3>Use a Third-Party Loan Servicer</h3>
    <p>
      A loan servicer (typically $25–$50/month) acts as the payment processor.
      The buyer sends their payment to the servicer, the servicer pays the
      original mortgage, and the net is forwarded to the seller. This creates
      a paper trail, ensures the underlying mortgage actually gets paid, and
      removes the "I sent you the money and you didn't pay the bank" dispute
      that can destroy these arrangements. Some dedicated servicers for
      seller-financed transactions include First American Exchange and
      National Loan Exchange.
    </p>

    <h3>All-Inclusive Deed of Trust (AITD)</h3>
    <p>
      In states that use deeds of trust (California, Texas, Oregon, and others),
      the standard vehicle for a wraparound is an All-Inclusive Trust Deed.
      This is a recorded document that creates the wraparound loan and defines
      the terms, payment obligations, and what happens in default. It typically
      stays subordinate to the existing underlying mortgage.
    </p>

    <h3>Land Contract vs. AITD</h3>
    <p>
      In some states (particularly Midwest and Southeast states that use
      mortgages rather than deeds of trust), wraparounds are structured as
      land contracts or installment sale contracts. In a land contract, the
      seller retains legal title until the buyer has paid down the loan
      sufficiently or paid it off entirely. The buyer has equitable title but
      not legal title during this period.
    </p>
    <p>
      Land contracts favor sellers in default situations (easier to terminate
      the buyer's interest than to foreclose), which is why buyer's attorneys
      often prefer AITD structures where the buyer receives title at closing.
      Know which structure your state recognizes and what each means for your
      protection.
    </p>

    <h2>State-Specific Risks and Considerations</h2>
    <p>
      Wraparound mortgage legality and structure vary by state. A few specifics:
    </p>
    <ul>
      <li>
        <strong>Texas:</strong> Has specific requirements for executory contracts
        (which is what a land contract is called in Texas). Sellers must provide
        disclosures, annual statements, and have the deed recorded within 30
        days of the contract. Texas law is actually fairly protective of both
        parties if followed correctly.
      </li>
      <li>
        <strong>California:</strong> AITD is well-established but recording
        requirements and foreclosure processes are complex. Due-on-sale risk
        exists for any transfer of beneficial interest.
      </li>
      <li>
        <strong>New York:</strong> Wraparound structures are uncommon and
        heavily scrutinized. Seek specialized legal counsel.
      </li>
    </ul>
    <p>
      Regardless of state, never execute a wraparound without a real estate
      attorney experienced in seller financing reviewing and drafting the
      documents. The $500–$1,500 in legal fees is cheap compared to the cost
      of a poorly structured deal collapsing two years in.
    </p>
    <div className="callout">
      <strong>Minimum documentation for a wraparound:</strong> A promissory note
      defining the loan terms, an AITD or installment sale agreement, a third-party
      loan servicer agreement, and an escrow arrangement for insurance and taxes.
      Verbal agreements or informal notes are not sufficient.
    </div>

    <h2>When a Wraparound Actually Makes Sense</h2>
    <p>
      Wraparound mortgages are a niche tool. They work well in specific circumstances:
    </p>
    <ul>
      <li>
        The seller has a low-rate mortgage (3–4%) they originated before 2022,
        creating a meaningful rate spread opportunity
      </li>
      <li>
        The seller wants installment sale treatment for tax purposes, spreading
        capital gains recognition over several years
      </li>
      <li>
        The buyer genuinely cannot access conventional financing and the
        seller wants full asking price without a price reduction
      </li>
      <li>
        The transaction is a commercial property where due-on-sale clauses
        are sometimes negotiable or structured differently
      </li>
    </ul>
    <p>
      If the seller's mortgage rate is already at 7% and market rates are 8%,
      the spread is too thin to justify the risk and complexity. The tool
      only makes economic sense when there's a real rate gap to exploit.
    </p>
  </BlogPost>
);

export default WraparoundMortgage;
