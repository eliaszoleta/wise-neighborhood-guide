import { Link } from "react-router-dom";
import BlogPost from "@/components/BlogPost";

const AssignmentOfContract = () => (
  <BlogPost
    title="Assignment of Contract in Real Estate Wholesaling: How It Works"
    metaDesc="Assignment of contract is how most wholesale deals actually get paid. Here's exactly how the clause works, how the assignment fee gets collected, and the risks to watch for."
    slug="wholesaling/assignment-of-contract"
    datePublished="2026-10-08"
    category="Wholesaling"
    quickAnswer="Assignment of contract lets you transfer your rights and obligations under a purchase agreement to another buyer in exchange for a fee, without ever taking title to the property yourself. The end buyer closes directly with the original seller; you collect your assignment fee at closing."
    faqs={[
      { q: "What exactly am I selling in an assignment of contract?", a: "Your equitable interest in the purchase agreement -- the right to buy the property under the terms you negotiated with the seller. You're not selling real estate; you're selling your position in a contract, which is why you don't need to actually own or finance the property." },
      { q: "When do I get paid my assignment fee?", a: "At closing, when the end buyer closes with the original seller. The assignment fee is typically collected directly by the title company or closing attorney from the proceeds, which is cleaner and more verifiable than collecting it separately from the buyer." },
      { q: "Can every purchase contract be assigned?", a: "No -- the contract must either explicitly permit assignment or at minimum not prohibit it. Many standard contracts include an 'and/or assigns' clause after the buyer's name specifically to preserve this right. Always confirm assignability before counting on it." },
      { q: "What if the seller doesn't want their contract assigned?", a: "Some sellers, especially those working with a real estate agent, prefer not to see 'and/or assigns' language. In those cases wholesalers sometimes use a double closing instead, which involves the wholesaler briefly taking and immediately reselling title rather than assigning the contract outright." },
      { q: "Does the end buyer know how much my assignment fee is?", a: "Often yes, especially where disclosure is required by state law or simply good practice -- the end buyer typically sees the original purchase price and the total they're paying, with the assignment fee as the visible difference. Being upfront about this builds trust with repeat cash buyers." },
    ]}
    relatedArticles={[
      { label: "Real Estate Wholesaling Explained", href: "/blog/wholesaling/real-estate-wholesaling-explained" },
      { label: "Is Wholesaling Real Estate Legal?", href: "/blog/wholesaling/is-wholesaling-legal" },
      { label: "How to Build a Cash Buyers List", href: "/blog/wholesaling/cash-buyers-list-real-estate" },
    ]}
  >
    <p>
      Assignment of contract is the mechanism that makes wholesaling work without ever requiring the wholesaler to buy, finance, or own the property. Understanding exactly how it functions — and where it can go wrong — separates wholesalers who close deals smoothly from those who lose deals at the finish line.
    </p>

    <h2>How It Works, Step by Step</h2>
    <ol>
      <li>You get a property under contract with the seller at an agreed purchase price, typically with language like "[Your Name] and/or assigns" as the buyer</li>
      <li>You market your contract to your cash buyer list at a higher price — the difference is your assignment fee</li>
      <li>You and the end buyer sign an Assignment of Contract agreement, transferring your rights and obligations to them</li>
      <li>The end buyer closes directly with the original seller, using the original purchase contract (now assigned to them)</li>
      <li>At closing, the title company disburses your assignment fee to you directly from the proceeds</li>
    </ol>

    <div className="callout">
      <strong>Example</strong>
      <ul>
        <li>You contract to buy the property for $150,000</li>
        <li>You assign the contract to an investor for $165,000</li>
        <li>Your assignment fee: $15,000, collected at closing</li>
        <li>The end buyer pays $165,000 total and takes title directly from the original seller</li>
      </ul>
    </div>

    <h2>The "And/Or Assigns" Clause</h2>
    <p>
      This is the language that preserves your right to assign. Without it — or an explicit prohibition on assignment — most contracts default to being assignable under general contract law, but including the clause explicitly removes any ambiguity and avoids a dispute at closing when the title company reviews the paperwork.
    </p>

    <h2>Risks and Pitfalls</h2>
    <ul>
      <li><strong>Non-assignable contracts.</strong> Some sellers, agents, or specific contract forms explicitly prohibit assignment. Confirm this before you ever market the deal.</li>
      <li><strong>Seller discomfort at closing.</strong> If the seller sees a different buyer name at the closing table than who they negotiated with, and wasn't informed, it can create last-minute friction or even a refusal to close.</li>
      <li><strong>Failing to close on time.</strong> If you can't find an end buyer before your contract's closing deadline, you risk losing your earnest money deposit and the deal entirely.</li>
      <li><strong>Double-assigning.</strong> Assigning the same contract to more than one buyer is both unethical and a clear path to legal trouble — don't do it.</li>
    </ul>

    <h2>When to Use Double Closing Instead</h2>
    <p>
      If a contract isn't assignable, the seller objects to assignment language, or you simply want the assignment fee amount kept private from both parties, a double closing — where you briefly take title and immediately resell — accomplishes a similar economic outcome through two separate closings instead of one assignment.
    </p>
  </BlogPost>
);

export default AssignmentOfContract;
