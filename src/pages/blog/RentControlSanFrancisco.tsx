import { Link } from "react-router-dom";
import BlogPost from "@/components/BlogPost";

const RentControlSanFrancisco = () => (
  <BlogPost
    title="Rent Control in San Francisco: The Rent Ordinance Explained"
    metaDesc="San Francisco's Rent Ordinance covers most buildings built before 1979 and includes some of the strongest tenant eviction protections in the country. Here's what owners need to know."
    slug="property-management/rent-control-san-francisco"
    datePublished="2026-10-15"
    category="Property Management"
    quickAnswer="San Francisco's Rent Ordinance generally covers residential buildings constructed before June 1979, capping annual rent increases at a rate set each year and requiring just cause for eviction. Single-family homes and condos sold separately often qualify for a limited exemption, but California's statewide rent cap law can still apply."
    faqs={[
      { q: "Which San Francisco properties are rent-controlled?", a: "Generally, buildings constructed before June 1979. Certain single-family homes and condos may qualify for exemption from the local ordinance under specific conditions, but California's statewide rent cap (AB 1482) can still apply to properties exempt from the local rule." },
      { q: "How much can I raise rent on a controlled unit each year?", a: "The San Francisco Rent Board publishes an allowable annual increase percentage each year, tied to inflation. This figure changes annually -- check the current published rate rather than relying on a figure from a prior year." },
      { q: "What counts as just cause for eviction in San Francisco?", a: "San Francisco recognizes a specific list of just-cause reasons, including nonpayment, lease violations, owner move-in (with its own notice and, in many cases, relocation payment requirements), and a small number of other defined categories -- simply wanting to end a tenancy isn't sufficient on its own for a covered unit." },
      { q: "Are relocation payments required for no-fault evictions?", a: "In many no-fault eviction categories (such as owner move-in or Ellis Act withdrawal), San Francisco requires relocation payments to displaced tenants, with amounts that can be substantial -- this is a real cost factor to budget for before pursuing a no-fault eviction." },
      { q: "What is the Ellis Act and how does it relate to rent control?", a: "The Ellis Act is a California state law allowing landlords to exit the rental business entirely and remove units from the rental market, used in some cases as a path around local rent control's eviction restrictions -- it carries its own strict procedural requirements, waiting periods, and tenant notification/compensation rules, and is not a simple workaround." },
    ]}
    relatedArticles={[
      { label: "How to Raise Rent Legally", href: "/blog/property-management/how-to-raise-rent-legally" },
      { label: "The Eviction Process for Landlords", href: "/blog/property-management/eviction-process-landlord" },
      { label: "Airbnb Rules in San Francisco", href: "/blog/investing/airbnb-rules-san-francisco" },
    ]}
  >
    <p>
      San Francisco's Rent Ordinance pairs rent increase limits with some of the strongest tenant eviction protections in the country, making this one of the more complex regulatory environments for residential landlords anywhere in the U.S.
    </p>

    <h2>Coverage</h2>
    <p>
      The ordinance generally applies to buildings constructed before June 1979. Some single-family homes and separately-sold condos can qualify for a limited exemption from the local ordinance under specific conditions, though California's statewide rent cap law frequently still applies to properties that fall outside San Francisco's local rule.
    </p>

    <h2>Annual Rent Increase Limits</h2>
    <p>
      The San Francisco Rent Board sets an allowable annual increase percentage each year, tied to local inflation measures. This figure is published annually and changes from year to year — always check the current rate rather than assuming consistency with a prior year.
    </p>

    <h2>Just-Cause Eviction Protections</h2>
    <p>
      San Francisco recognizes a specific, defined list of just-cause reasons for eviction, split broadly into "at-fault" (nonpayment, lease violation) and "no-fault" (owner move-in, Ellis Act withdrawal, and a few others) categories. No-fault evictions frequently trigger relocation payment obligations to displaced tenants, which can represent a meaningful cost that needs to be budgeted before pursuing this path.
    </p>

    <h2>The Ellis Act</h2>
    <p>
      The Ellis Act is a state law that lets landlords exit the rental business and remove units from the market entirely — sometimes discussed as a way around local eviction restrictions, but it comes with its own strict procedural rules, required waiting periods, tenant notification requirements, and compensation obligations. It's not a simple or cost-free alternative to standard eviction, and using it specifically to circumvent rent control protections can draw additional legal scrutiny.
    </p>

    <h2>Practical Takeaway</h2>
    <p>
      Given the complexity and real financial stakes of San Francisco's rent and eviction rules, owners of pre-1979 buildings should confirm a unit's exact coverage status with the SF Rent Board and consult a qualified attorney before any non-renewal, rent increase above the annual cap, or eviction — the cost of a consultation is minor compared to the liability of getting this wrong.
    </p>
  </BlogPost>
);

export default RentControlSanFrancisco;
