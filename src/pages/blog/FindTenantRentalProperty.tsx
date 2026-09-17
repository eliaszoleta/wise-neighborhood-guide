import { Link } from "react-router-dom";
import BlogPost from "@/components/BlogPost";

const FindTenantRentalProperty = () => (
  <BlogPost
    title="How to Find a Tenant for Your Rental Property"
    metaDesc="Finding a good tenant involves more than posting a listing. Here's how to market your vacancy, screen applicants properly, and avoid costly placement mistakes."
    slug="property-management/find-tenant-rental-property"
    datePublished="2026-02-13"
    category="Property Management"
    faqs={[
      { q: "Where should I list my rental property to find tenants?", a: "Zillow Rental Manager, Apartments.com, and Facebook Marketplace each have massive reach, and listing on two of the three generates enough leads for most markets. What separates a high-performing listing from a low-performing one is the quality of photos, an accurate description, and competitive pricing — not which platforms you use." },
      { q: "What income do tenants need to qualify for a rental?", a: "The standard rule is that an applicant's gross monthly income should be at least 3 times the monthly rent. If rent is $1,200, the applicant needs to earn at least $3,600/month gross. This is the single most predictive indicator of whether a tenant will pay consistently." },
      { q: "Can a landlord reject a tenant based on credit score?", a: "Yes, as long as you apply the same credit criteria consistently to every applicant and document your standards in writing before you review any applications. A prior eviction judgment or landlord-related collections are typically stronger disqualifying factors than credit score alone, which requires reading the report in context." },
      { q: "What does a landlord ask when calling a previous landlord reference?", a: "The most valuable questions are: Did they pay on time? Would you rent to them again? Did they give proper notice when they moved out? An actual prior landlord won't lie to another landlord the way friends or family will, making this reference call far more reliable than character references." },
      { q: "What documents should a landlord collect before a tenant moves in?", a: "You should collect first month's rent, last month's rent, and the full security deposit before handing over keys — no exceptions or partial payments. You should also conduct a documented move-in walk-through where both parties sign a condition report with photos, which becomes your protection when disputes arise at move-out." },
    ]}
    relatedArticles={[
      { label: "Rental Property Expenses Breakdown", href: "/blog/property-management/rental-property-expenses" },
      { label: "Property Management Companies", href: "/blog/property-management/property-management-companies" },
      { label: "How to Write a Lease Agreement", href: "/blog/property-management/how-to-write-lease-agreement" },
    ]}
  >
    <p>
      Before you post your listing, do this math.
    </p>
    <p>
      A bad tenant costs you more than a vacancy. For a complete picture of what a rental property actually costs — including management fees — see our <Link to="/blog/property-management/rental-property-expenses">rental property expenses breakdown</Link>. A tenant who doesn't pay, damages the property, or requires eviction will typically consume 8–10 months of rent by the time you account for lost income during the process, legal fees, repairs, and re-leasing costs. A vacancy between good tenants? Maybe 3–4 weeks. The incentive to just "get someone in there" is one of the most expensive mistakes a landlord can make.
    </p>
    <p>
      Good tenant placement is mostly process. Here's the process.
    </p>

    <h2>Where to List Your Property</h2>
    <p>
      The platforms matter less than most landlords think. Zillow Rental Manager, Apartments.com, and Facebook Marketplace each have massive reach. For most markets, listing on two of the three will generate enough leads. You don't need all of them.
    </p>
    <p>
      What actually separates a listing that gets ten inquiries from one that gets three is the quality of the listing itself. Specifically:
    </p>
    <ul>
      <li><strong>Photos.</strong> Good natural light, wide angles, every room. This isn't the place to use your phone's default camera in a dim hallway. Better photos = better applicants. Seriously.</li>
      <li><strong>Accurate description.</strong> List what the property actually is: square footage, bedrooms, baths, parking, laundry, pet policy, utilities included or not, lease length. Applicants who are a mismatch will self-select out, saving you time.</li>
      <li><strong>Price competitively.</strong> Check what comparable units are renting for right now, not six months ago. An overpriced listing sits. A sitting vacancy costs money every day.</li>
    </ul>
    <p>
      Set your availability date clearly. If the unit is available in three weeks, say so. Applicants who need housing today will move on, and that's fine.
    </p>

    <h2>The Screening Process</h2>
    <p>
      Screening is where landlords either protect themselves or create future problems. The goal is to evaluate every applicant against the same objective criteria — not to find reasons to reject people, but to identify applicants who are genuinely likely to pay rent consistently and treat the property reasonably.
    </p>
    <p>
      The steps:
    </p>
    <ol>
      <li>
        <strong>Written application.</strong> Everyone who wants to be considered fills out an application — name, current address, employment, income, rental history, references. No exceptions. If someone won't fill out a basic application, that's information.
      </li>
      <li>
        <strong>Credit and background check.</strong> Run these on every adult who will live in the unit. Services like SmartMove (TransUnion) and RentSpree are built for landlords and cost $35–$45 per applicant, usually paid by the applicant.
      </li>
      <li>
        <strong>Call the previous landlord.</strong> Not just any reference — the actual previous landlord. Ask: did they pay on time? Would you rent to them again? Did they give proper notice? People can coach their friends to say good things. An actual landlord who had to deal with them won't lie to another landlord.
      </li>
    </ol>

    <h2>What to Actually Look For</h2>
    <p>
      Here's what matters in a screening report:
    </p>
    <ul>
      <li><strong>Income at least 3x the monthly rent.</strong> If rent is $1,200, the applicant should earn at least $3,600/month gross. This is the single most predictive indicator of whether they'll pay consistently.</li>
      <li><strong>Eviction history.</strong> This is a hard stop. A prior eviction judgment means a landlord went all the way through the legal process to remove this person. That doesn't happen easily. One prior eviction should disqualify an applicant from most situations.</li>
      <li><strong>Collections from a landlord.</strong> A balance owed to a prior landlord or property management company showing up in collections is nearly as serious as an eviction. Someone who skipped out on a landlord and was sent to collections is not a low-risk placement.</li>
      <li><strong>Credit score context.</strong> Credit score matters, but context matters more. A 620 score because of medical debt is different from a 620 score because of a pattern of unpaid bills. Read the report, don't just look at the number.</li>
    </ul>
    <div className="callout">
      <strong>Set your criteria in writing before you start screening.</strong> Document your minimum income requirement, credit thresholds, and disqualifying factors before you see any applications. This protects you legally and helps you apply standards consistently. Changing your criteria after you've seen an application — especially if the applicant is a member of a protected class — is exactly the kind of thing fair housing complaints are built on.
    </div>

    <h2>Fair Housing: The Basics You Must Know</h2>
    <p>
      The Fair Housing Act prohibits discrimination based on race, color, national origin, religion, sex, familial status, and disability. Many states and cities add protected classes — source of income, sexual orientation, and marital status are common additions.
    </p>
    <p>
      The practical implication is straightforward: use objective criteria applied the same way to every applicant. Income requirement, credit threshold, rental history — these are legitimate screening factors. "I just had a bad feeling about them" is not a documented criterion and creates legal exposure.
    </p>
    <p>
      When you deny an applicant, you're generally required to send an adverse action notice if the decision was based on a consumer report (credit/background check). SmartMove and RentSpree handle this automatically. Read the instructions for the service you use.
    </p>

    <h2>Before They Move In</h2>
    <p>
      The move-in process sets the tone for the entire tenancy. Do it right.
    </p>
    <ul>
      <li><strong>For landlords who prefer professional help, see our guide to <Link to="/blog/property-management/property-management-companies">property management companies</Link>. Use a state-specific lease.</strong> Generic leases from the internet may have provisions that are unenforceable in your state. Your local landlord association or a real estate attorney can provide a lease written for your jurisdiction.</li>
      <li><strong>Conduct a documented walk-through.</strong> Go through every room together before move-in. Note every scuff, every scratch, every existing issue. Both parties sign the move-in condition report. Take photos. This document is your protection when the tenant moves out and claims they didn't cause the damage to the wall they definitely caused.</li>
      <li><strong>Collect first month, last month, and security deposit before handing over keys.</strong> No exceptions, no partial payments, no "I'll get you the rest next week." Money collected before keys is the only money that's easy to collect.</li>
    </ul>

    <blockquote>
      The <a href="https://www.hud.gov/program_offices/fair_housing_equal_opp/fair_housing_act_overview" target="_blank" rel="noopener noreferrer">HUD Fair Housing Act overview</a> covers the full list of protected classes and landlord obligations. Explore our <Link to="/real-estate-investing/rental-property-investing">rental property investing topic page</Link> for more landlord guidance. The landlords who have the fewest tenant problems are almost never the ones who got lucky with good tenants. They're the ones who built a real screening process and stuck to it — even when a unit had been sitting vacant for two weeks and someone eager was standing in front of them.
    </blockquote>

    <p>
      Take your time. The right tenant is worth waiting for.
    </p>
  </BlogPost>
);

export default FindTenantRentalProperty;
