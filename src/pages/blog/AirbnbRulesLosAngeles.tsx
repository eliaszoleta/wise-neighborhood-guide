import { Link } from "react-router-dom";
import BlogPost from "@/components/BlogPost";

const AirbnbRulesLosAngeles = () => (
  <BlogPost
    title="Airbnb & Short-Term Rental Rules in Los Angeles (2026 Guide)"
    metaDesc="LA's Home-Sharing Ordinance limits most short-term rentals to a host's primary residence. Here's what's allowed, the registration process, and the 90-day unhosted cap."
    slug="investing/airbnb-rules-los-angeles"
    datePublished="2026-10-15"
    category="Investing"
    quickAnswer="Los Angeles's Home-Sharing Ordinance restricts most short-term rentals to a host's primary residence -- you generally can't operate a dedicated short-term rental in a property you don't live in. Hosted stays are unlimited, but unhosted (whole-home, host away) rentals are capped at a limited number of nights per year."
    faqs={[
      { q: "Can I buy an investment property in LA specifically for Airbnb?", a: "Not easily under current city rules -- the Home-Sharing Ordinance ties legal short-term rental to a host's primary residence, which generally rules out a separate, non-owner-occupied investment property used purely for short-term rental in most residential zones." },
      { q: "What's the difference between hosted and unhosted rentals in LA?", a: "Hosted means you're present during the stay; unhosted means the property is rented out while you're away. LA permits unlimited hosted nights but caps unhosted nights at a set number annually, after which you need to stop or face violations." },
      { q: "Do I need a permit to host short-term rentals in LA?", a: "Yes, registration with the city is required before listing, and platforms are expected to verify registration numbers for LA listings." },
      { q: "Are there LA neighborhoods with additional restrictions?", a: "Some areas, including parts of Venice and other coastal zones, have historically faced extra scrutiny and enforcement focus due to housing availability concerns. Check current zoning and any neighborhood-specific rules before assuming citywide rules are the only layer that applies." },
      { q: "What happens if I operate a short-term rental that isn't my primary residence?", a: "You risk fines and having your listing removed from platforms once identified as non-compliant. The city has actively enforced the primary-residence requirement since the ordinance took effect." },
    ]}
    relatedArticles={[
      { label: "Short-Term Rental Investing: What the Numbers Look Like", href: "/blog/investing/short-term-rental-investing" },
      { label: "Rent Control in Los Angeles", href: "/blog/property-management/rent-control-los-angeles" },
      { label: "House Hacking and the BRRRR Strategy", href: "/blog/investing/brrrr-method-real-estate" },
    ]}
  >
    <p>
      Los Angeles's short-term rental rules center on one core requirement: the property generally has to be your primary residence. That single rule reshapes what an Airbnb strategy actually looks like in LA compared to markets with fewer restrictions.
    </p>

    <h2>The Primary Residence Requirement</h2>
    <p>
      Under the city's Home-Sharing Ordinance, only a host's primary residence — generally the place you actually live most of the year — qualifies for legal short-term rental registration. This is the single biggest factor separating LA from cities where dedicated investment-property Airbnbs are common.
    </p>

    <h2>Hosted vs Unhosted Nights</h2>
    <ul>
      <li><strong>Hosted</strong> — you're present during the guest's stay, generally with no annual night limit</li>
      <li><strong>Unhosted</strong> — the whole home is rented while you're away, capped at a limited number of nights per calendar year</li>
    </ul>
    <p>
      This structure favors hosts who live in their property and occasionally rent a room or their whole place while traveling — not investors buying a separate property purely to run as a short-term rental business.
    </p>

    <h2>Registration and Enforcement</h2>
    <p>
      Hosts must register with the city before listing, and the registration number is expected to appear on listings for platform compliance. LA has actively enforced the primary-residence requirement, removing non-compliant listings and issuing fines to hosts operating outside the rules, particularly in areas that have drawn scrutiny over housing availability.
    </p>

    <h2>What This Means for a Pure Investment Strategy</h2>
    <p>
      If your goal is a non-owner-occupied investment property run purely as a short-term rental, LA's current framework makes that difficult to do legally in most residential zones. Investors pursuing that model in Southern California often look at surrounding areas with different local rules, or shift strategy toward a standard long-term rental in LA proper while pursuing STR opportunities elsewhere.
    </p>
    <p>
      <strong>Rules change.</strong> Verify current requirements directly with the LA Department of City Planning or Department of Building and Safety before committing capital to a short-term rental strategy here.
    </p>
  </BlogPost>
);

export default AirbnbRulesLosAngeles;
