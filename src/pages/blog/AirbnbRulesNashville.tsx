import { Link } from "react-router-dom";
import BlogPost from "@/components/BlogPost";

const AirbnbRulesNashville = () => (
  <BlogPost
    title="Airbnb & Short-Term Rental Rules in Nashville (2026 Guide)"
    metaDesc="Nashville permits short-term rentals but draws a hard line between owner-occupied and non-owner-occupied permits, with the latter capped and restricted in many residential zones."
    slug="investing/airbnb-rules-nashville"
    datePublished="2026-10-15"
    category="Investing"
    quickAnswer="Nashville requires a short-term rental permit and distinguishes between owner-occupied (unrestricted in most residential zones) and non-owner-occupied permits, which have been capped and are harder to obtain in many residential areas due to a density cap the city has enforced by zip code or council district."
    faqs={[
      { q: "Can I get a non-owner-occupied STR permit anywhere in Nashville?", a: "Not necessarily -- the city has enforced caps on non-owner-occupied permits in many residential zones, meaning availability depends on current permit counts in that specific area. Some zones may be at capacity with no new non-owner-occupied permits currently issuable." },
      { q: "What's the difference in requirements between owner-occupied and non-owner-occupied permits?", a: "Owner-occupied permits apply when the host lives at the property and generally face fewer restrictions. Non-owner-occupied permits apply to dedicated investment properties and have faced tighter caps and more scrutiny, particularly in single-family residential zones." },
      { q: "Does downtown Nashville have different rules than residential neighborhoods?", a: "Generally yes -- commercially zoned and higher-density areas, including parts of downtown, have historically faced a less restrictive path for non-owner-occupied short-term rentals than single-family residential neighborhoods." },
      { q: "What happens if an STR permit holder sells the property?", a: "Permits are generally tied to the property and permit holder rather than automatically transferring -- a buyer typically needs to apply for their own permit, and if the zone is at its non-owner-occupied cap, a new non-owner-occupied permit may not be available even if the previous owner held one." },
      { q: "Are HOA rules a factor in Nashville too?", a: "Yes -- as with most markets, individual HOA or neighborhood association rules can further restrict short-term rentals beyond what city permitting allows, so check both layers before purchasing." },
    ]}
    relatedArticles={[
      { label: "Short-Term Rental Investing: What the Numbers Look Like", href: "/blog/investing/short-term-rental-investing" },
      { label: "How to Find and Buy Your First Rental Property", href: "/blog/investing/first-rental-property" },
      { label: "What Is a DSCR Loan?", href: "/blog/financing/dscr-loan-real-estate" },
    ]}
  >
    <p>
      Nashville's tourism-driven short-term rental market has made it one of the most actively regulated mid-size cities for STR policy, with permit caps specifically targeting non-owner-occupied rentals in residential neighborhoods.
    </p>

    <h2>Permit Types</h2>
    <ul>
      <li><strong>Owner-occupied</strong> — generally the more accessible path, applying when the host lives at the property</li>
      <li><strong>Non-owner-occupied</strong> — applies to dedicated investment properties, and has been subject to density caps limiting the total number issuable in many residential zones</li>
    </ul>

    <h2>Zone-Based Density Caps</h2>
    <p>
      A defining feature of Nashville's approach is capping the number of non-owner-occupied permits allowed within specific zones or council districts. This means a property's eligibility for a non-owner-occupied STR permit depends not just on the property itself, but on how many permits have already been issued in that specific area — some zones may simply be full.
    </p>

    <h2>Downtown vs Residential Neighborhoods</h2>
    <p>
      Commercially zoned areas and higher-density parts of the city, including sections of downtown, have generally faced a more permissive path for non-owner-occupied short-term rentals than single-family residential neighborhoods, where the city has focused most of its restriction and enforcement effort.
    </p>

    <h2>Permit Transferability</h2>
    <p>
      Short-term rental permits are generally tied to the specific property and permit holder, not automatically transferable to a new buyer. This matters significantly for investors: buying a property that currently operates as a licensed non-owner-occupied STR doesn't guarantee you'll be able to obtain your own permit if that zone has since hit its cap.
    </p>

    <h2>What This Means for Buyers</h2>
    <p>
      Before purchasing specifically for a Nashville STR strategy, confirm the property's zoning, whether non-owner-occupied permits are currently available in that zone (or check if an existing, transferable arrangement genuinely applies), and the current cap status for that district directly with Nashville's Metro Codes Department.
    </p>
    <p>
      <strong>Rules change.</strong> Permit caps and zone-specific availability shift as the city issues and revokes permits — verify current status before committing to a purchase around STR income projections.
    </p>
  </BlogPost>
);

export default AirbnbRulesNashville;
