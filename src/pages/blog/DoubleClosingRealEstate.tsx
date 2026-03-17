import { Link } from "react-router-dom";
import BlogPost from "@/components/BlogPost";

const DoubleClosingRealEstate = () => (
  <BlogPost
    title="Double Closing in Real Estate: How It Works and When Wholesalers Use It"
    metaDesc="A double closing is two back-to-back transactions where you buy and immediately sell a property, keeping your profit private. Here's how it works, what it costs, and when to use it over assignment."
    slug="wholesaling/double-closing-real-estate"
    datePublished="2026-03-16"
    category="Wholesaling"
    faqs={[
      {
        q: "What is transactional funding?",
        a: "Transactional funding — also called flash funding — is a very short-term loan (usually 24 to 48 hours) used specifically to fund the AB purchase in a double close. The lender wires the funds to the title company for the first closing, then gets repaid from the proceeds of the BC closing that happens the same day or within a day or two. Lenders typically charge 1% to 2% of the loan amount or a flat fee of $500 to $2,000, depending on the deal size.",
      },
      {
        q: "Is double closing legal?",
        a: "Yes, double closing is legal in all U.S. states when done correctly. The key is full disclosure to your title company and using legitimate transactional funding — not attempting to use the buyer's funds from the BC closing to fund the AB purchase without proper disclosure, which can constitute fraud. Some states have wet closing requirements where both transactions must fund simultaneously, while others allow dry closings with a short gap between them. Always work with a title company experienced in double closes.",
      },
      {
        q: "How much does a double close cost?",
        a: "A double close costs more than an assignment because you pay closing costs twice — once on the AB transaction and once on the BC transaction. Total additional costs typically run $1,500 to $4,000 depending on the deal size, state, and title company. Add transactional funding fees of 1% to 2% of the purchase price or $500 to $2,000 flat. On a $150,000 AB purchase, you might pay $1,500 in transactional funding plus $1,500 to $2,500 in double closing costs, totaling $3,000 to $4,000 in extra expenses versus a simple assignment.",
      },
      {
        q: "When should you use double close vs assignment?",
        a: "Use an assignment when your profit is modest, the buyer accepts assignment contracts, and you have no objection to the profit being visible on the HUD. Use a double close when your profit is large enough that revealing it might cause the seller or buyer to renegotiate, when your end buyer's lender won't accept an assignment, when the seller's contract prohibits assignment, or when your title company won't process assignment closings. The double close adds cost but protects your margin and gives you more deal flexibility.",
      },
      {
        q: "Does the seller find out your profit in a double close?",
        a: "No. In a double close, the seller (party A) receives a separate settlement statement showing only the AB transaction — what they're selling for and their net proceeds. They do not see the BC settlement statement showing what you sold to the end buyer. That's the primary reason wholesalers use double closes over assignments: privacy of your profit margin from both the original seller and, in some cases, the end buyer.",
      },
    ]}
  >
    <p>
      You're under contract to buy a house for $120,000. Your end buyer will pay $155,000. If you assign the contract, everyone sees your $35,000 profit on the closing statement. If that makes your seller uncomfortable — or your buyer's lender won't accept an assignment — you need a different structure. That's what double closing is for.
    </p>

    <h2>Assignment vs. Double Close: The Core Difference</h2>
    <p>
      In a standard assignment, you never actually buy the property. You sign a purchase contract with the seller, then assign your rights in that contract to an end buyer for an assignment fee. Simple, cheap, and effective — but your profit shows on the closing documents, and some deals won't work this way because sellers object, buyers' lenders won't accept it, or the purchase contract prohibits assignment.
    </p>
    <p>
      In a double close, you actually purchase the property (the AB transaction) and then immediately sell it (the BC transaction) — often on the same day. Two separate closings, two separate HUD settlement statements. The seller on the A side sees only the AB closing. Your end buyer on the C side sees only the BC closing. Your profit stays private.
    </p>
    <div className="callout">
      <strong>Key distinction:</strong> Assignment = you never close. Double close = you close twice. The difference in cost and complexity is significant, so you should only use a double close when an assignment won't work.
    </div>

    <h2>How Transactional Funding Works</h2>
    <p>
      The obvious problem with a double close: if you're buying at $120,000 in the AB transaction, where does that money come from? You're a wholesaler — you don't have $120,000 sitting in cash. The answer is transactional funding, also called flash funding.
    </p>
    <p>
      A transactional lender wires the purchase funds directly to the title company to fund the AB closing. The lender gets repaid from the proceeds of the BC closing that happens the same day or within 24 to 48 hours. The lender's risk window is extremely short — sometimes just hours — so they charge accordingly: typically 1% to 2% of the loan amount, or a flat fee ranging from $500 to $2,000 on smaller deals.
    </p>
    <p>
      On a $120,000 AB purchase, a 1.5% transactional funding fee costs $1,800. That comes out of your profit. If you're making $35,000 on the deal, that's manageable. If your margin is $5,000, a double close may not make financial sense.
    </p>

    <h2>The Two Settlement Statements</h2>
    <p>
      Each transaction in a double close produces its own HUD-1 settlement statement (or Closing Disclosure under TRID rules). The AB statement shows the original seller what they're receiving — their sale price, prorated taxes, any liens being paid off, and net proceeds. They do not see the BC statement.
    </p>
    <p>
      The BC statement shows your end buyer what they're paying — the purchase price, closing costs, and their net obligation. They don't see the AB statement. Your position in the middle — buying at $120,000 and selling at $155,000 — is never visible on either document. This is the entire point of the structure for deals where profit privacy matters.
    </p>

    <h2>State Laws: Wet vs. Dry Closings</h2>
    <p>
      Not all states treat double closes the same way. In wet closing states, funds must be disbursed on the day of signing — meaning your AB and BC transactions need to happen nearly simultaneously, with transactional funding bridging the gap. In dry closing states, there's a brief window between document signing and fund disbursement, which gives you slightly more flexibility in sequencing the two transactions.
    </p>
    <p>
      States with stricter wet closing requirements include New York, New Jersey, and a handful of others. Your title company should know the specific requirements in your market. This is one reason you must work with a title company experienced in double closes — a title officer who's never done one may not understand the sequencing required, and a mistake can unwind the entire transaction.
    </p>

    <h2>Title Company Relationships Are Critical</h2>
    <p>
      Not all title companies will handle double closes. Some have policies against it; others simply don't understand the structure. Before you go under contract on a deal you plan to double close, confirm with your title company that they handle simultaneous or back-to-back closings with transactional funding. Ask directly: "Do you handle double closes with transactional funding?" If they hesitate or say no, find a different title company.
    </p>
    <p>
      Building a relationship with one title company that handles investor deals — assignments, double closes, short sales — is one of the most valuable things a wholesaler can do. They'll know your deals, process them faster, and flag issues before they become problems.
    </p>
    <blockquote>
      The double close is one tool in a larger deal structure toolkit. Understanding when to use it versus an assignment is what separates wholesalers who close consistently from those who lose deals on technicalities. Read more about building your full wholesaling operation in our guide to <Link to="/blog/wholesaling/real-estate-wholesaling-explained">real estate wholesaling explained</Link>.
    </blockquote>

    <h2>Common Mistakes in Double Closes</h2>
    <p>
      The most common mistake is not lining up transactional funding before going under contract on a deal you plan to double close. Transactional lenders need to review the deal and confirm they'll fund it — this isn't automatic. Get pre-approval from a transactional lender before you need the money.
    </p>
    <p>
      Second most common: using a title company that's never done a double close and discovering this on the day of closing. Vet your title company before the deal, not during it. The third mistake is attempting to use the end buyer's funds from the BC closing to fund the AB purchase without a legitimate transactional lender in place — this can constitute mortgage or wire fraud, depending on how it's structured. Do it right: use actual transactional funding, full stop.
    </p>
    <p>
      For deals where the buyer is using financing rather than cash, be aware that most conventional lenders have seasoning requirements — they won't lend on a property the current owner has held for less than 90 days. Hard money and cash buyers don't have this issue, but if your end buyer needs conventional financing, a same-day double close won't work. See our breakdown of <Link to="/blog/financing/hard-money-lender">hard money lending</Link> to understand how investor buyers typically fund their purchases.
    </p>

    <h2>When a Double Close Makes Sense vs. an Assignment</h2>
    <p>
      Use an assignment when your profit is modest (under $15,000 or so), your buyer accepts assignment contracts, and neither party will object to seeing the fee on the closing statement. Assignments are faster, cheaper by $2,000 to $4,000+, and simpler to execute.
    </p>
    <p>
      Use a double close when your spread is large enough that revealing it could blow up the deal, when your end buyer is using a lender that requires you to be on title, when the purchase contract prohibits assignment, or when you want to work with a broader pool of buyers who don't understand or accept wholesale assignments. The extra cost is the price of a cleaner, more private transaction.
    </p>
  </BlogPost>
);

export default DoubleClosingRealEstate;
