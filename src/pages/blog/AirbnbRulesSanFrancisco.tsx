import { Link } from "react-router-dom";
import BlogPost from "@/components/BlogPost";

const AirbnbRulesSanFrancisco = () => (
  <BlogPost
    title="Airbnb & Short-Term Rental Rules in San Francisco (2026 Guide)"
    metaDesc="San Francisco requires hosts to register, live in the unit as their primary residence, and caps unhosted rentals at 90 days a year. Here's the full breakdown."
    slug="investing/airbnb-rules-san-francisco"
    datePublished="2026-10-15"
    category="Investing"
    quickAnswer="San Francisco requires short-term rental hosts to register with the city, live in the unit as their permanent residence, and caps unhosted (host-away) rentals at 90 days per calendar year. Hosted rentals, where the host is present, don't face the same night cap."
    faqs={[
      { q: "Can I short-term rent an investment property I don't live in, in San Francisco?", a: "Generally no -- the registration requirement ties legal short-term rental status to the host's permanent residence, ruling out the dedicated non-owner-occupied investment model in most cases." },
      { q: "What's the 90-day cap exactly?", a: "It applies to unhosted rentals -- stays where the host isn't present. Once a unit hits 90 unhosted nights in a calendar year, it must stop unhosted rentals for the remainder of the year, though hosted stays (host present) aren't subject to the same limit." },
      { q: "Do I need a business registration in addition to the short-term rental registration?", a: "Typically yes -- hosts are generally expected to register as a business with the city in addition to the short-term rental-specific registration, since hosting is treated as a business activity subject to applicable local business taxes." },
      { q: "What if my building is a rent-controlled unit?", a: "Subletting a rent-controlled unit as a short-term rental raises additional legal complications beyond the short-term rental ordinance itself, including potential lease violations -- check both your lease terms and rent control rules before attempting this." },
      { q: "Are there HOA or building restrictions beyond city law?", a: "Often yes. Many condo and co-op buildings in San Francisco separately prohibit or restrict short-term rentals through their own governing documents, regardless of what city registration allows." },
    ]}
    relatedArticles={[
      { label: "Short-Term Rental Investing: What the Numbers Look Like", href: "/blog/investing/short-term-rental-investing" },
      { label: "Rent Control in San Francisco", href: "/blog/property-management/rent-control-san-francisco" },
      { label: "Cap Rate vs Cash-on-Cash Return", href: "/blog/investing/cap-rate-vs-cash-on-cash" },
    ]}
  >
    <p>
      San Francisco's short-term rental framework follows a similar pattern to other major California cities: registration, a primary residence requirement, and a cap on unhosted rentals. For investors, the primary residence rule is the headline constraint to understand before planning a strategy here.
    </p>

    <h2>Registration and Primary Residence</h2>
    <p>
      To legally operate a short-term rental, hosts must register with the city and demonstrate the unit is their permanent residence — generally defined as living there for the majority of the year. This single requirement is why San Francisco isn't a market for buying a separate, dedicated short-term rental investment property.
    </p>

    <h2>The 90-Day Unhosted Cap</h2>
    <p>
      Unhosted rentals — where the host is traveling and the full unit is rented out — are capped at 90 nights per calendar year. Hosted stays, where the host remains on the property, are generally not subject to the same cap. This structure incentivizes the "rent a room while I'm home" model over the "whole place while I'm away" model for the majority of the year.
    </p>

    <h2>Business Registration Requirement</h2>
    <p>
      Hosting is generally treated as a business activity in San Francisco, meaning hosts are typically expected to register for a business account with the city and remit applicable local taxes on rental income, separate from the short-term rental registration itself.
    </p>

    <h2>Added Complications for Renters</h2>
    <p>
      If you're renting (not owning) and considering subletting your unit as a short-term rental, be aware this can violate your lease terms independent of what city short-term rental law technically permits — and if the unit is rent-controlled, the stakes of a lease violation are higher given San Francisco's strong tenant protections.
    </p>

    <h2>What This Means for Investors</h2>
    <p>
      San Francisco's framework is built around resident hosts supplementing their income, not investors operating dedicated short-term rental businesses. Investors specifically targeting the STR model typically look to nearby markets with more permissive rules rather than trying to force the strategy into San Francisco's residency-based system.
    </p>
    <p>
      <strong>Rules change.</strong> Confirm current requirements with the San Francisco Office of Short-Term Rentals before listing, since enforcement priorities and specific thresholds can shift.
    </p>
  </BlogPost>
);

export default AirbnbRulesSanFrancisco;
