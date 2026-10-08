import { Link } from "react-router-dom";
import BlogPost from "@/components/BlogPost";

const RentalInspectionChecklist = () => (
  <BlogPost
    title="Rental Property Inspection Checklist: What Landlords Should Check Every Visit"
    metaDesc="A move-in, routine, and move-out inspection each catch different problems. Here's a complete checklist for every stage of a tenancy, plus how often to inspect without overstepping tenant rights."
    slug="property-management/rental-inspection-checklist"
    datePublished="2026-10-08"
    category="Property Management"
    quickAnswer="Landlords should do a detailed move-in inspection with photos, routine inspections every 6-12 months (with proper notice), and a thorough move-out inspection compared directly against the move-in record. Each stage catches different problems and protects you if a security deposit dispute ever goes to court."
    faqs={[
      { q: "How much notice do I need to give before a routine inspection?", a: "Most states require 24-48 hours written notice for non-emergency entry, though a handful require more. Always check your specific state's notice requirements -- entering without proper notice can expose you to legal liability even if your intentions are reasonable." },
      { q: "How often should I inspect an occupied rental?", a: "Every 6-12 months is standard for most landlords -- frequent enough to catch maintenance issues and lease violations early, infrequent enough to respect the tenant's right to quiet enjoyment of the property. More frequent inspections without cause can start to look like harassment." },
      { q: "What should I photograph during a move-in inspection?", a: "Every room, every wall, flooring, appliances, fixtures, and any existing damage or wear -- with timestamps. This record is what you compare against at move-out to determine what's normal wear and tear versus tenant-caused damage you can legally deduct from the deposit." },
      { q: "Can I inspect for any reason I want?", a: "No -- entry is generally limited to specific legitimate purposes: repairs, routine inspection, showing the unit to prospective tenants or buyers, or emergencies. Using inspections as a pretext to monitor or intimidate a tenant can violate quiet enjoyment laws." },
      { q: "What if the tenant refuses to allow an inspection?", a: "Provide proper written notice per your state's requirements and lease terms. If a tenant still refuses entry without a valid reason, document the refusal and consult your state's landlord-tenant law or an attorney -- most states have a legal process for this, but it typically isn't immediate forced entry." },
    ]}
    relatedArticles={[
      { label: "Normal Wear and Tear in Rental Property", href: "/blog/property-management/normal-wear-and-tear" },
      { label: "How to Write a Rental Lease Agreement", href: "/blog/property-management/how-to-write-lease-agreement" },
      { label: "Security Deposit Rules for Landlords", href: "/blog/property-management/security-deposit-rules-landlord" },
    ]}
  >
    <p>
      Most security deposit disputes come down to one question: what condition was this unit actually in before the tenant moved out? Landlords who inspect consistently and document thoroughly win those disputes easily. Landlords who don't are stuck arguing from memory against a tenant who's motivated to disagree.
    </p>

    <h2>Move-In Inspection</h2>
    <p>
      Do this before handing over keys, ideally with the tenant present so both parties agree on the starting condition.
    </p>
    <ul>
      <li>Photograph or video every room, including close-ups of any existing damage, wear, or stains</li>
      <li>Test every appliance, faucet, outlet, light switch, and smoke/CO detector</li>
      <li>Check all door and window locks, and window screens</li>
      <li>Note flooring condition room by room (carpet stains, scratches on hardwood, tile cracks)</li>
      <li>Document wall condition — nail holes, scuffs, paint condition</li>
      <li>Have the tenant sign a move-in condition form acknowledging the documented state</li>
    </ul>

    <h2>Routine Inspections (Every 6-12 Months)</h2>
    <p>
      With proper notice given per your state's requirements, check for:
    </p>
    <ul>
      <li>Unauthorized occupants, pets, or subletting not disclosed on the lease</li>
      <li>Signs of water damage, mold, or pest activity</li>
      <li>HVAC filter condition and general system function</li>
      <li>Smoke and carbon monoxide detector batteries</li>
      <li>Any maintenance issues the tenant hasn't reported</li>
      <li>General upkeep and whether the property is being reasonably maintained</li>
    </ul>

    <h2>Move-Out Inspection</h2>
    <p>
      This is where your move-in documentation pays off. Walk the unit against your original photos and condition form, and separate findings into two categories:
    </p>
    <ul>
      <li><strong>Normal wear and tear</strong> — faded paint, minor carpet wear in high-traffic areas, small nail holes — not deductible from the deposit</li>
      <li><strong>Actual damage</strong> — broken fixtures, large stains, holes in walls, missing items — legitimately deductible, with documentation and often receipts required</li>
    </ul>
    <p>
      Photograph the move-out condition the same thorough way you did at move-in, and provide an itemized list of any deductions within your state's required timeframe — most states set a specific deadline (often 14-30 days) to return the deposit or provide a written accounting.
    </p>

    <h2>Entry Notice Rules</h2>
    <p>
      Nearly every state requires advance written notice before entering an occupied rental for a non-emergency purpose, commonly 24-48 hours. Emergencies (fire, flooding, gas leak) are the exception where immediate entry is legally justified without advance notice. Always check your specific state's requirements, since notice periods and acceptable entry reasons vary.
    </p>
  </BlogPost>
);

export default RentalInspectionChecklist;
