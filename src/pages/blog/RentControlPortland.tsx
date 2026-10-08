import { Link } from "react-router-dom";
import BlogPost from "@/components/BlogPost";

const RentControlPortland = () => (
  <BlogPost
    title="Rent Control in Portland, Oregon: Statewide Rules Every Landlord Should Know"
    metaDesc="Oregon was one of the first states to pass statewide rent control, applying in Portland and beyond. Here's how the state cap, just-cause eviction rules, and relocation assistance work."
    slug="property-management/rent-control-portland"
    datePublished="2026-10-15"
    category="Property Management"
    quickAnswer="Oregon has statewide rent control under SB 608, applying in Portland and nearly every city in the state -- not just a local ordinance. It caps annual rent increases using a formula tied to inflation, exempts buildings newer than 15 years, and requires just cause for eviction after a tenant's first year, with relocation assistance required for certain no-fault terminations."
    faqs={[
      { q: "Is Portland's rent control a city ordinance or state law?", a: "It's primarily state law -- Oregon's SB 608 established rent control and just-cause eviction protections statewide, applying in Portland the same way it applies across most of Oregon, rather than being a Portland-specific local ordinance." },
      { q: "Are new construction properties exempt from Oregon's rent control?", a: "Yes -- buildings newer than 15 years old are generally exempt from the annual rent increase cap, which is meant to preserve incentive for new housing construction." },
      { q: "How is the annual rent increase cap calculated?", a: "Oregon's formula ties the cap to the Consumer Price Index plus a fixed percentage, recalculated annually by the state -- check the current year's published figure rather than assuming a static number." },
      { q: "When does just-cause eviction protection start for a new tenant?", a: "Generally after the tenant has occupied the unit for a set initial period (commonly cited as the first year of tenancy) -- before that threshold, standard month-to-month termination rules without a specific cause requirement generally apply, then just-cause protections take effect." },
      { q: "Do I have to pay relocation assistance to end a tenancy in Oregon?", a: "For certain no-fault terminations (such as the landlord or a family member moving in, demolishing the unit, or converting it to non-residential use), Oregon law requires relocation assistance payments to the tenant -- specific amounts and qualifying conditions should be verified against the current statute." },
    ]}
    relatedArticles={[
      { label: "How to Raise Rent Legally", href: "/blog/property-management/how-to-raise-rent-legally" },
      { label: "The Eviction Process for Landlords", href: "/blog/property-management/eviction-process-landlord" },
      { label: "Rental Property Inspection Checklist", href: "/blog/property-management/rental-inspection-checklist" },
    ]}
  >
    <p>
      Oregon's rent control is unusual in a key way: it's not a Portland city ordinance at all, but a statewide law under SB 608 that applies across nearly the entire state. Landlords sometimes assume this is a Portland-specific issue when it actually governs properties statewide — understanding this distinction matters for anyone investing anywhere in Oregon, not just within city limits.
    </p>

    <h2>A Statewide Law, Not a City Ordinance</h2>
    <p>
      Oregon became one of the first states to pass statewide rent control and just-cause eviction protections. This means the rules discussed here generally apply the same way in Portland as in most other Oregon cities, rather than being unique to Portland specifically — a meaningful difference from states like California where local cities each run their own separate ordinances.
    </p>

    <h2>The Annual Increase Cap</h2>
    <p>
      Oregon's formula ties the maximum allowable annual rent increase to the Consumer Price Index plus a set additional percentage, recalculated each year by the state. Buildings newer than 15 years old are exempt from this cap, a provision specifically designed to avoid discouraging new housing construction.
    </p>

    <h2>Just-Cause Eviction</h2>
    <p>
      After an initial tenancy period (commonly the first year), landlords generally need a legally recognized just cause to terminate a month-to-month tenancy — simply ending the tenancy without cause is no longer broadly available the way it might be in a state without these protections, once the threshold period has passed.
    </p>

    <h2>Relocation Assistance for No-Fault Terminations</h2>
    <p>
      For certain no-fault reasons — the owner or a qualifying family member moving in, demolition, or conversion to non-residential use — Oregon law requires relocation assistance payments to the displaced tenant. This is a real cost factor that should be budgeted into any decision to end a tenancy for these reasons, not an optional courtesy.
    </p>

    <h2>Practical Takeaway</h2>
    <p>
      Because this is statewide law, any Oregon rental property — not just those in Portland — needs to be evaluated against SB 608's framework. Confirm the building's age (for the 15-year exemption), current year's allowable increase percentage, and applicable just-cause/relocation requirements with the Oregon Rental Housing Association or a qualified local attorney before setting rent or pursuing a tenancy change.
    </p>
  </BlogPost>
);

export default RentControlPortland;
