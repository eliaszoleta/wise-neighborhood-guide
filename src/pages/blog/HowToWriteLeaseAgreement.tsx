import { Link } from "react-router-dom";
import BlogPost from "@/components/BlogPost";

const HowToWriteLeaseAgreement = () => (
  <BlogPost
    title="How to Write a Rental Lease Agreement: What Every Landlord Must Include"
    metaDesc="A lease agreement is your legal foundation as a landlord. Learn the required clauses, what protects you, what can get you in trouble, and how to use state-specific templates."
    slug="property-management/how-to-write-lease-agreement"
    datePublished="2026-03-16"
    category="Property Management"
    faqs={[
      { q: "Does a lease have to be in writing to be enforceable?", a: "Technically, oral leases are valid in most states for tenancies under one year, but they are nearly impossible to enforce. Without a written lease, you have no documented agreement about rent amount, due dates, pet policy, or any other term. If a dispute ends up in court, it becomes your word against the tenant's. Always use a written lease — no exceptions." },
      { q: "Can I write my own lease agreement?", a: "You can, but starting from scratch is risky. Lease law is state-specific, and missing a required disclosure or using an unenforceable clause can undermine the entire document. Use a state-specific template from your state's association of realtors, or platforms like Avail, TurboTenant, or Zillow Rental Manager as a starting point. Have a local landlord-tenant attorney review your first lease before you use it." },
      { q: "What is an illegal lease clause?", a: "An illegal clause is one that violates state or federal law — even if both parties sign it, the clause is void and unenforceable. Common examples include waiving the landlord's duty to maintain habitable conditions, charging a security deposit above the state-mandated maximum, requiring tenants to waive their right to sue, or allowing entry without notice. Some illegal clauses can expose you to liability even if you never tried to enforce them." },
      { q: "How much can I charge for a late fee?", a: "Late fee limits vary by state. Some states cap fees at a flat dollar amount (often $50-100), others limit it to a percentage of monthly rent (typically 5-10%), and a few states have no statutory cap but courts will still void fees deemed excessive. Whatever you charge, it must be specified in the lease. A late fee that isn't in writing is essentially uncollectable." },
      { q: "What happens if I don't include a required state disclosure in my lease?", a: "Missing a required disclosure can have serious consequences depending on the state. The most common required disclosure is the federal lead paint disclosure for properties built before 1978 — failing to provide it can result in fines up to $19,507 per violation under federal law. State-level disclosures for mold, flooding history, or bed bug history can similarly expose you to fines and give tenants grounds to break the lease without penalty." },
    ]}
  >
    <p>
      Most landlord-tenant disputes that end in court come down to one thing: what does the lease say? If your lease is vague, missing key terms, or contains clauses that are unenforceable under your state's law, you lose your leverage at exactly the moment you need it most. A lease isn't paperwork — it's the legal framework your entire relationship with a tenant stands on.
    </p>

    <h2>Why a Written Lease Is Non-Negotiable</h2>

    <p>
      A written lease does three things for you. First, it establishes enforceable terms — rent amount, due date, late fees, pet policy, maintenance expectations. Without written terms, courts default to state law minimums, which are almost always more tenant-friendly than what you'd choose. Second, it creates the legal basis for eviction. You cannot evict a tenant for violating a rule that isn't in the lease. Third, it documents the agreed-upon condition of the tenancy, which protects you when the tenant moves out and disputes the security deposit deduction.
    </p>

    <blockquote>
      A handshake deal or a verbal agreement might hold up for simple arrangements, but the moment rent goes unpaid or damage occurs, you need something a judge can read. State laws on landlord-tenant disputes favor the documented party almost universally.
    </blockquote>

    <h2>Required Clauses in Every Lease</h2>

    <p>
      Regardless of your state, every lease should contain all of the following. Missing any one of these creates ambiguity that works against you.
    </p>

    <ul>
      <li><strong>Names of all tenants.</strong> Every adult who will live in the unit must be named on the lease. This makes everyone financially and legally responsible for the rent and for any damage.</li>
      <li><strong>Property address.</strong> Full street address including unit number.</li>
      <li><strong>Rent amount and due date.</strong> Specify the exact monthly amount and which day of the month rent is due — typically the 1st.</li>
      <li><strong>Late fee terms.</strong> Amount charged, how many days grace period before the fee applies, and whether the fee compounds daily or is a flat charge.</li>
      <li><strong>Lease term.</strong> Start date, end date, and what happens at expiration — does it convert to month-to-month, or does the tenant need to sign a new lease?</li>
      <li><strong>Security deposit amount and terms.</strong> Dollar amount collected, how it will be held, what it can be used for, and when it will be returned.</li>
      <li><strong>Pet policy.</strong> Whether pets are allowed, what types and sizes, any additional deposit or monthly pet fee, and the tenant's liability for pet damage.</li>
      <li><strong>Maintenance responsibilities.</strong> Who handles what — lawn care, snow removal, HVAC filter replacements, light bulb replacements. Be specific.</li>
      <li><strong>Entry notice requirements.</strong> Specify the notice period you'll give before entering — typically 24-48 hours, as required by most states.</li>
    </ul>

    <h2>Clauses That Protect You</h2>

    <h3>Renewal and Month-to-Month Terms</h3>
    <p>
      Specify exactly what happens at lease end. If you want to offer a renewal, include the process and any rent adjustment terms. If the lease auto-converts to month-to-month, state the notice required to terminate (typically 30 days). Silence here creates uncertainty — and uncertain leases often favor tenants.
    </p>

    <h3>Subletting and Occupancy Limits</h3>
    <p>
      Prohibit subletting without your written approval. This prevents your carefully screened tenant from handing the unit off to someone you've never vetted. Occupancy limits — typically "no more than [X] persons" — are legal in most states as long as they don't violate fair housing guidelines for familial status. The HUD standard is two people per bedroom as a general starting point, though local codes vary.
    </p>

    <h3>Utilities</h3>
    <p>
      Spell out exactly who pays what: water, gas, electric, trash, internet. If you're paying any utilities as the landlord, note that. If utilities are included up to a cap, specify the cap and what happens when it's exceeded. Ambiguity here leads to billing disputes that erode the landlord-tenant relationship.
    </p>

    <h3>Smoking Policy</h3>
    <p>
      Include a clear smoking prohibition if you want one — smoke damage is real and expensive to remediate. Most landlords today prohibit smoking inside the unit and on the property entirely.
    </p>

    <h3>Move-In Condition</h3>
    <p>
      Reference the move-in condition checklist (more on this below) directly in the lease and specify that the tenant accepts the property in the condition documented at move-in.
    </p>

    <div className="callout">
      <strong>Clauses courts hate:</strong> Waiving the landlord's duty of habitability, charging a security deposit above your state's legal maximum, requiring tenants to waive their right to take you to court, and automatic renewal clauses with no notice requirement. These clauses are void even when signed — and in some states, having them in your lease can give the tenant grounds to sue you.
    </div>

    <h2>The Move-In Checklist</h2>

    <p>
      A move-in condition checklist is a room-by-room written record of the property's condition on the day the tenant takes possession. Both you and the tenant sign it. Attach it to the lease as an exhibit. This document is your defense when the tenant moves out and claims the carpet was already stained or the wall had a hole.
    </p>

    <p>
      Do the checklist with the tenant present. Walk every room together. Note every scratch, scuff, stain, and damaged item. Take dated photographs — a phone timestamp is fine, or use a timestamp app. The detail you put in here determines your ability to make legitimate security deposit deductions later.
    </p>

    <blockquote>
      Many states require a condition checklist by law. California, Michigan, and others mandate that landlords provide a written condition report at move-in. Failing to provide one can forfeit your right to make security deposit deductions for damages — even real ones.
    </blockquote>

    <h2>State-Specific Disclosures You Cannot Skip</h2>

    <p>
      Several disclosures are legally required in addition to the lease itself. Failing to provide them can result in fines and give tenants the legal right to break the lease.
    </p>

    <ul>
      <li><strong>Lead paint disclosure.</strong> Required by federal law for all properties built before 1978. You must disclose known lead paint hazards and provide the EPA's "Protect Your Family" pamphlet.</li>
      <li><strong>Mold disclosure.</strong> Required in California, Indiana, Texas, and other states. If you know mold is present or has previously been treated, you must disclose it.</li>
      <li><strong>Flooding history.</strong> Required in Texas and other flood-prone states. Disclose if the property has flooded in the past.</li>
      <li><strong>Bed bug history.</strong> Required in several states including Illinois and New York. Disclosure of prior infestations in the unit or building.</li>
      <li><strong>Security deposit banking details.</strong> Some states require you to tell tenants specifically where the deposit is held and whether it earns interest.</li>
    </ul>

    <p>
      Check your state's landlord-tenant statute directly or use a state-specific lease platform to ensure you're capturing all required disclosures for your jurisdiction.
    </p>

    <h2>Where to Get a Solid Lease Template</h2>

    <p>
      Don't start from scratch. These sources provide state-specific lease templates that are regularly updated for legal compliance:
    </p>

    <ul>
      <li><strong>Your state's Association of Realtors.</strong> Most publish landlord forms for members or for a modest fee.</li>
      <li><strong>Avail</strong> (avail.co) — free state-specific lease generation, widely used by independent landlords.</li>
      <li><strong>TurboTenant</strong> — free lease templates plus tenant screening bundled together.</li>
      <li><strong>Zillow Rental Manager</strong> — free e-sign lease for properties listed on Zillow.</li>
    </ul>

    <p>
      If this is your first lease or your first property in a new state, spend $200-400 to have a local landlord-tenant attorney review the lease before you use it. You'll catch any state-specific problems before they become expensive problems in court.
    </p>

    <h2>After the Lease Is Signed</h2>

    <p>
      Give the tenant a signed copy of the lease the day you sign it — this is legally required in many states and is just good practice everywhere. Keep your own signed original. Once the lease is active, follow its terms consistently. If you waive the late fee once without documenting it as a one-time exception, it becomes harder to enforce going forward.
    </p>

    <p>
      A strong lease also makes <Link to="/blog/property-management/find-tenant-rental-property">tenant screening and placement</Link> more professional. When prospective tenants see a well-organized lease, it signals that you're a serious landlord who enforces what's in writing — which tends to attract tenants who take their obligations seriously too.
    </p>

    <div className="callout">
      <strong>Bottom line:</strong> Your lease is the document that determines whether you win or lose in a dispute. Use a state-specific template, include all required clauses and disclosures, attach a signed move-in checklist, and have it reviewed by an attorney before your first rental. The $300 you spend upfront is the cheapest insurance you'll find in real estate.
    </div>
  </BlogPost>
);

export default HowToWriteLeaseAgreement;
