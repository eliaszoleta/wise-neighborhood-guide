import BlogPost from "@/components/BlogPost";

const HowToPriceHomeInspections = () => (
  <BlogPost
    title="How to Price Home Inspections"
    metaDesc="How home inspectors actually price jobs -- by square footage and age, common add-on services, and how to avoid underpricing your first inspections."
    slug="home-inspection/how-to-price-home-inspections"
    datePublished="2026-10-17"
    category="Home Inspection"
    faqs={[
      { q: "How much does a standard home inspection cost?", a: "Pricing is typically based on square footage and the home's age, with larger and older homes costing more due to longer inspection time and generally more systems/issues to document. Exact pricing varies significantly by local market." },
      { q: "What add-on services do inspectors commonly offer?", a: "Radon testing, termite/wood-destroying organism inspections, sewer scope inspections, and mold/moisture testing are the most common add-ons, each typically priced separately from the base inspection fee." },
      { q: "Should new inspectors charge less to build a client base?", a: "Be cautious about underpricing -- agents and buyers often associate inspection price with thoroughness, and an unusually cheap inspection can actually raise doubts about quality. Price competitively within your local market rather than undercutting it significantly." },
    ]}
    relatedArticles={[
      { label: "How to Start a Home Inspection Business", href: "/home-inspection/how-to-start-a-home-inspection-business" },
      { label: "How to Get Home Inspection Clients", href: "/home-inspection/how-to-get-home-inspection-clients" },
      { label: "Home Inspection Equipment Checklist", href: "/home-inspection/home-inspection-equipment-checklist" },
    ]}
  >
    <p>
      Inspection pricing is more standardized than a lot of home services
      pricing, since the core job — a visual, non-invasive inspection of a
      single-family home — is fairly consistent from job to job. Variation
      mostly comes down to square footage, age, and add-on services.
    </p>

    <h2>The Base Pricing Model</h2>
    <p>
      Most inspectors price primarily on square footage, often in tiers (for
      example, a flat rate up to 1,500 sq ft, with a per-square-foot or
      per-tier add-on beyond that), with an additional adjustment for homes
      older than a certain age given the extra time needed to assess aging
      systems and components.
    </p>

    <h2>Common Add-On Services</h2>
    <table>
      <thead><tr><th>Add-On</th><th>What It Covers</th></tr></thead>
      <tbody>
        <tr><td>Radon testing</td><td>A separate test (often a 48-hour continuous monitor) measuring radon gas levels</td></tr>
        <tr><td>Wood-destroying organism (termite) inspection</td><td>Often required by lenders, especially for certain loan types, and frequently performed by a licensed pest professional rather than the home inspector directly depending on your state</td></tr>
        <tr><td>Sewer scope inspection</td><td>A camera inspection of the sewer lateral line, increasingly requested on older homes</td></tr>
        <tr><td>Mold/air quality testing</td><td>Sampling for visible or suspected mold issues</td></tr>
        <tr><td>Pool/spa inspection</td><td>A specialized add-on for homes with a pool</td></tr>
      </tbody>
    </table>

    <h2>Building Your Price List as a New Inspector</h2>
    <p>
      Research what established inspectors in your specific market charge —
      pricing varies meaningfully by region and local cost of living, more
      than it does by inspector experience level for a standard
      single-family inspection. Price near the local market rate from day
      one rather than significantly underpricing to compete; your real
      differentiator as a new inspector is responsiveness, report quality,
      and building trust with referring agents, not being the cheapest
      option.
    </p>

    <h2>Quoting Same-Day or Fast-Turnaround Jobs</h2>
    <p>
      Real estate transactions often operate on tight inspection-period
      deadlines, so being able to schedule quickly and deliver a report
      within 24 hours is a real competitive advantage — some inspectors
      charge a modest rush fee for especially tight turnarounds, though many
      simply build fast delivery into their standard service as a
      differentiator.
    </p>
  </BlogPost>
);

export default HowToPriceHomeInspections;
