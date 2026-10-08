import { Link } from "react-router-dom";
import BlogPost from "@/components/BlogPost";

const RentControlLosAngeles = () => (
  <BlogPost
    title="Rent Control in Los Angeles: The Rent Stabilization Ordinance Explained"
    metaDesc="LA's Rent Stabilization Ordinance covers a large share of older multi-unit buildings and caps annual increases. Here's what's covered, what's exempt, and the just-cause eviction rules that come with it."
    slug="property-management/rent-control-los-angeles"
    datePublished="2026-10-15"
    category="Property Management"
    quickAnswer="LA's Rent Stabilization Ordinance (RSO) generally covers residential buildings with a certificate of occupancy issued before October 1978, capping annual rent increases at a percentage tied to the Consumer Price Index and set annually, and requiring just-cause for eviction. Newer buildings and single-family homes are generally exempt, though California's statewide rent cap law can still apply to otherwise-exempt properties."
    faqs={[
      { q: "Which LA properties are covered by the RSO?", a: "Generally, multi-unit residential buildings with a certificate of occupancy issued before October 1, 1978. Single-family homes and condos are typically exempt from RSO specifically, though statewide rent cap law (AB 1482) can still apply to many otherwise-exempt properties with limited exceptions." },
      { q: "How much can I raise rent on an RSO unit each year?", a: "The allowable annual increase is tied to a Consumer Price Index-based formula and is set annually -- check the current year's published rate rather than assuming a fixed percentage, since it adjusts yearly." },
      { q: "What is 'just cause' eviction and how does it affect RSO units?", a: "Just-cause rules require landlords to have a legally recognized reason to evict a tenant -- not paying rent, lease violations, or specific no-fault reasons like owner move-in (which carry their own notice and, in some cases, relocation payment requirements) -- rather than simply not renewing a lease." },
      { q: "Does California's statewide rent cap apply on top of LA's local RSO?", a: "Yes, in relevant cases -- California's statewide law (AB 1482) sets its own cap and just-cause framework for many properties not otherwise covered by local rent control. Where both could apply, the more tenant-protective standard generally controls. Properties exempt from LA's RSO specifically may still be covered by the statewide law." },
      { q: "What are the penalties for violating RSO rules?", a: "Overcharging rent or conducting an improper eviction under RSO can expose a landlord to tenant lawsuits, potential damages, and registration or licensing consequences with the city's Housing Department. This is an area where legal guidance is strongly recommended before taking action." },
    ]}
    relatedArticles={[
      { label: "How to Raise Rent Legally", href: "/blog/property-management/how-to-raise-rent-legally" },
      { label: "The Eviction Process for Landlords", href: "/blog/property-management/eviction-process-landlord" },
      { label: "Airbnb Rules in Los Angeles", href: "/blog/investing/airbnb-rules-los-angeles" },
    ]}
  >
    <p>
      Los Angeles's Rent Stabilization Ordinance is one of the most significant regulatory factors for owners of older multi-unit buildings in the city, affecting both how much you can raise rent and how you can end a tenancy.
    </p>

    <h2>What's Covered</h2>
    <p>
      The RSO generally applies to residential buildings that received their certificate of occupancy before October 1, 1978. Single-family homes and condominiums are typically exempt from RSO specifically, though owners shouldn't assume full exemption from all rent regulation — California's statewide rent cap law can apply to many properties not covered by local ordinances.
    </p>

    <h2>Annual Increase Limits</h2>
    <p>
      RSO ties allowable annual rent increases to a Consumer Price Index-based formula, published and adjusted each year. There's no fixed percentage that stays constant — check the current year's published allowable increase before setting a new rent for a covered unit.
    </p>

    <h2>Just-Cause Eviction Requirements</h2>
    <p>
      For RSO-covered units, landlords generally need a legally recognized reason to evict — common "at-fault" reasons include nonpayment of rent or lease violations, while "no-fault" reasons like owner move-in carry their own notice requirements and, in many cases, relocation assistance obligations. Simply declining to renew a lease isn't sufficient grounds for ending a covered tenancy the way it might be for an unregulated unit.
    </p>

    <h2>The Statewide Layer: AB 1482</h2>
    <p>
      California's statewide rent cap and just-cause law can apply to many properties that are exempt from LA's local RSO, with its own set of exemptions (including certain newer construction and some single-family homes under specific conditions). Where state and local rules overlap, the more tenant-protective standard typically governs — meaning owners need to check both layers, not just the one that seems most directly applicable.
    </p>

    <h2>Practical Takeaway</h2>
    <p>
      Before purchasing an older multi-unit LA property or setting a new rent on an existing one, confirm the building's RSO status with the LA Housing Department, check the current year's allowable increase percentage, and understand which just-cause category would apply before pursuing any non-renewal or eviction.
    </p>
  </BlogPost>
);

export default RentControlLosAngeles;
