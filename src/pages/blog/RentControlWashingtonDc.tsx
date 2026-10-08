import { Link } from "react-router-dom";
import BlogPost from "@/components/BlogPost";

const RentControlWashingtonDc = () => (
  <BlogPost
    title="Rent Control in Washington, D.C.: The Rental Housing Act Explained"
    metaDesc="DC's Rental Housing Act covers a large share of older rental buildings and ties annual increases to inflation. Here's what's covered, what's exempt, and the tenant notice rules that come with it."
    slug="property-management/rent-control-washington-dc"
    datePublished="2026-10-15"
    category="Property Management"
    quickAnswer="Washington D.C.'s Rental Housing Act covers most rental properties built before 1975 with five or more units, excluding properties owned by small landlords with four or fewer total units citywide. Annual increases are tied to a CPI-based formula, and the city requires a Tenant Opportunity to Purchase Act (TOPA) notice before selling a covered building."
    faqs={[
      { q: "Which DC properties are covered by rent control?", a: "Generally, rental properties built before 1975 containing five or more units. A small-landlord exemption applies for owners with four or fewer rental units total in the city -- confirm current thresholds, since exemption criteria can be updated by the DC Council." },
      { q: "How much can rent increase annually in DC?", a: "DC ties the allowable annual increase to a CPI-based formula published each year by the Rental Housing Commission, with a different (often higher) allowable increase specifically for units occupied by elderly or disabled tenants -- check current published rates rather than assuming a fixed percentage." },
      { q: "What is TOPA and how does it affect selling a rental property?", a: "The Tenant Opportunity to Purchase Act requires DC landlords to offer tenants the right of first refusal before selling a covered rental property -- this is a significant and DC-specific requirement that affects timeline and process when disposing of a rental property, independent of rent control itself." },
      { q: "Are single-family homes exempt from DC rent control?", a: "Many single-family homes and smaller buildings fall under the small-landlord exemption or other exemption categories, but verify the specific property's status rather than assuming based on property type alone, since exemption rules have specific criteria beyond just unit count." },
      { q: "What happens if I violate DC's rent control rules?", a: "Tenants can file complaints with the Rental Housing Commission, and violations can result in rent refunds, penalties, and complications with future rent increases -- this is an area where compliance documentation matters significantly if a dispute arises." },
    ]}
    relatedArticles={[
      { label: "How to Raise Rent Legally", href: "/blog/property-management/how-to-raise-rent-legally" },
      { label: "The Eviction Process for Landlords", href: "/blog/property-management/eviction-process-landlord" },
      { label: "Security Deposit Rules for Landlords", href: "/blog/property-management/security-deposit-rules-landlord" },
    ]}
  >
    <p>
      Washington D.C.'s rent control system comes with a feature that catches many out-of-state investors off guard: the Tenant Opportunity to Purchase Act, which affects not just how you manage a covered rental but how you eventually sell it.
    </p>

    <h2>Coverage and the Small-Landlord Exemption</h2>
    <p>
      DC's Rental Housing Act generally covers buildings constructed before 1975 with five or more units, though a small-landlord exemption applies for owners with four or fewer rental units total across the city. This exemption structure means an individual investor's total DC rental portfolio size — not just the specific building — can determine coverage status.
    </p>

    <h2>Annual Increase Limits</h2>
    <p>
      Allowable annual rent increases are tied to a CPI-based formula published by the Rental Housing Commission each year, with a separate (often higher) allowable increase specifically available for units occupied by elderly or disabled tenants under certain conditions. These figures change annually — verify the current published rates before setting a new rent.
    </p>

    <h2>TOPA: The Tenant Opportunity to Purchase Act</h2>
    <p>
      This is one of DC's most distinctive landlord obligations: before selling a covered rental property, the owner generally must offer tenants the right of first refusal to purchase it. This process has its own notice requirements and timelines, and failing to properly comply with TOPA can create significant complications — including potential delays or legal challenges — when trying to close a sale. This applies independent of whether the specific unit is otherwise rent-controlled.
    </p>

    <h2>Why Out-of-State Investors Often Miss This</h2>
    <p>
      TOPA in particular is uncommon outside DC, meaning investors accustomed to other markets' straightforward sale processes are sometimes caught off guard by the notice and right-of-first-refusal requirements when they try to sell a DC property on a normal timeline.
    </p>

    <h2>Practical Takeaway</h2>
    <p>
      Before purchasing a DC rental property, confirm its rent control coverage status and TOPA applicability with the DC Rental Housing Commission or a qualified local attorney, and build TOPA's notice and response timelines into any planned future sale rather than assuming a standard, immediate closing process.
    </p>
  </BlogPost>
);

export default RentControlWashingtonDc;
