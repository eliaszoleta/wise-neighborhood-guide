import { Link } from "react-router-dom";
import BlogPost from "@/components/BlogPost";

const LandlordInsuranceExplained = () => (
  <BlogPost
    title="Landlord Insurance Explained: What It Covers and What It Doesn't"
    metaDesc="A standard homeowners policy doesn't cover a rental property. Here's what landlord (dwelling) insurance actually covers, what it costs, and the gaps you still need to fill yourself."
    slug="property-management/landlord-insurance-explained"
    datePublished="2026-10-08"
    category="Property Management"
    quickAnswer="Landlord insurance (often called a dwelling or DP-3 policy) covers the structure, lost rental income during a covered repair, and liability -- things a standard homeowners policy excludes once a property is tenant-occupied. It typically costs 15-25% more than homeowners insurance on the same property, and it doesn't cover the tenant's belongings or normal wear and tear."
    faqs={[
      { q: "Can I just keep my homeowners insurance after renting out the property?", a: "No -- most homeowners policies explicitly exclude coverage once a property is rented to a tenant, and simply not telling your insurer can void coverage entirely when you file a claim. You need to switch to a landlord/dwelling policy specifically designed for rental property." },
      { q: "How much more does landlord insurance cost than homeowners insurance?", a: "Typically 15-25% more for similar coverage limits, reflecting the added risk insurers associate with tenant-occupied property -- more turnover, less owner oversight day to day, and the liability exposure of having renters on the premises." },
      { q: "Does landlord insurance cover my tenant's belongings?", a: "No. Your policy covers the structure and your own property (appliances, fixtures you own). Tenants need their own renters insurance to cover their personal belongings -- many landlords now require proof of renters insurance as a lease condition for exactly this reason." },
      { q: "What is loss-of-rent coverage?", a: "It reimburses you for lost rental income if the property becomes uninhabitable due to a covered event (fire, storm damage) while repairs are underway. Without it, you're covering the mortgage on a property generating zero income during the repair period." },
      { q: "Does landlord insurance cover flood or earthquake damage?", a: "Almost never as a standard inclusion. Flood and earthquake coverage are separate policies you purchase on top of a standard landlord policy, and they're essential if your property sits in a flood zone or seismic risk area -- standard dwelling coverage excludes both perils entirely." },
    ]}
    relatedArticles={[
      { label: "Monthly Rental Property Expenses Every Landlord Should Budget For", href: "/blog/property-management/rental-property-expenses" },
      { label: "Rental Property Inspection Checklist", href: "/blog/property-management/rental-inspection-checklist" },
      { label: "Property Management Companies: What They Do", href: "/blog/property-management/property-management-companies" },
    ]}
  >
    <p>
      One of the most common — and most expensive — mistakes new landlords make is renting out a property while still carrying a standard homeowners policy. Insurers write homeowners policies assuming an owner-occupant lives there; once a tenant moves in, that assumption breaks, and so can your coverage exactly when you need it most.
    </p>

    <h2>What Landlord Insurance Covers</h2>
    <ul>
      <li><strong>Dwelling coverage</strong> — rebuilds or repairs the physical structure after a covered loss like fire, wind, or certain water damage</li>
      <li><strong>Liability coverage</strong> — protects you if a tenant or visitor is injured on the property and sues</li>
      <li><strong>Loss of rental income</strong> — reimburses lost rent while the unit is uninhabitable due to a covered repair</li>
      <li><strong>Landlord-owned contents</strong> — appliances, fixtures, and furnishings you own and provide, like a washer/dryer in a furnished rental</li>
    </ul>

    <h2>What It Doesn't Cover</h2>
    <ul>
      <li><strong>Tenant belongings</strong> — their furniture, electronics, clothing. This is what renters insurance is for, and it's reasonable to require tenants carry it.</li>
      <li><strong>Normal wear and tear</strong> — insurance covers sudden, accidental damage, not gradual deterioration from ordinary use.</li>
      <li><strong>Flood damage</strong> — requires a separate flood policy, typically through the National Flood Insurance Program or a private flood carrier.</li>
      <li><strong>Earthquake damage</strong> — also a separate add-on policy in most states where it's a relevant risk.</li>
      <li><strong>Intentional tenant damage in some cases</strong> — policies vary, but malicious damage by a tenant can fall into a coverage gray area; review your specific policy language.</li>
    </ul>

    <h2>Why It Costs More Than Homeowners Insurance</h2>
    <p>
      Insurers price in the added risk of tenant occupancy: more move-in/move-out turnover, reduced day-to-day owner oversight, and liability exposure from having non-owner occupants on the property. Expect roughly 15-25% higher premiums than a comparable homeowners policy on the same structure.
    </p>

    <h2>Policy Types</h2>
    <table>
      <thead>
        <tr><th>Form</th><th>Coverage Level</th></tr>
      </thead>
      <tbody>
        <tr><td>DP-1 (Basic)</td><td>Named perils only, actual cash value (depreciated) payout — the minimum, least expensive option</td></tr>
        <tr><td>DP-2 (Broad)</td><td>Broader list of named perils, often replacement cost rather than depreciated value</td></tr>
        <tr><td>DP-3 (Special)</td><td>Most comprehensive — covers all perils except those specifically excluded, the most common choice for serious landlords</td></tr>
      </tbody>
    </table>

    <h2>Smart Additions Worth Considering</h2>
    <ul>
      <li><strong>Umbrella liability policy</strong> — extends liability coverage well beyond your dwelling policy's limit, cheap relative to the protection it adds, especially once you own multiple properties</li>
      <li><strong>Requiring tenant renters insurance</strong> — shifts responsibility for their belongings off your policy and reduces disputes after a loss</li>
      <li><strong>Flood coverage</strong> — non-negotiable if the property is in or near a flood zone, regardless of whether a lender requires it</li>
    </ul>
  </BlogPost>
);

export default LandlordInsuranceExplained;
