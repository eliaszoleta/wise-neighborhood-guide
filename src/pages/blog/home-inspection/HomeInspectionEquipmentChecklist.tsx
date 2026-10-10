import BlogPost from "@/components/BlogPost";

const HomeInspectionEquipmentChecklist = () => (
  <BlogPost
    title="Home Inspection Equipment & Tools Checklist"
    metaDesc="Everything a new home inspector needs to buy -- from basic hand tools to thermal cameras and moisture meters -- with realistic cost guidance."
    slug="home-inspection/home-inspection-equipment-checklist"
    datePublished="2026-10-17"
    category="Home Inspection"
    faqs={[
      { q: "Do I need a thermal imaging camera to start?", a: "Not strictly, but many buyers and agents now expect it, and it genuinely helps detect moisture intrusion and insulation gaps that are hard to spot otherwise. Many new inspectors start without one and add it once the business has revenue to support the purchase." },
      { q: "What's the most important safety equipment for a home inspector?", a: "A properly rated ladder and basic fall-safety awareness for roof and attic access, along with a good flashlight/headlamp for crawlspaces and attics -- these unglamorous basics matter more day-to-day than any single specialized gadget." },
      { q: "Can I use a smartphone instead of a dedicated inspection camera?", a: "Most inspectors do use a smartphone for standard photo documentation in reports -- specialized cameras are really only necessary for thermal imaging, which a phone can't replicate without an add-on attachment." },
    ]}
    relatedArticles={[
      { label: "How to Start a Home Inspection Business", href: "/home-inspection/how-to-start-a-home-inspection-business" },
      { label: "Home Inspection Business Startup Costs", href: "/home-inspection/home-inspection-business-startup-costs" },
      { label: "How to Price Home Inspections", href: "/home-inspection/how-to-price-home-inspections" },
    ]}
  >
    <p>
      Home inspection doesn't require the heavy equipment investment of a
      construction trade, but a real inspection touches electrical,
      plumbing, structural, and safety systems — so the tool list is broader
      than it might first appear.
    </p>

    <h2>Core Tools</h2>
    <ul>
      <li>Multi-section or telescoping ladder rated for roof and attic access</li>
      <li>Flashlight and headlamp for attics, crawlspaces, and electrical panels</li>
      <li>Outlet tester / circuit analyzer</li>
      <li>Non-contact voltage tester</li>
      <li>Moisture meter (pin and pinless types both have uses)</li>
      <li>Combustible gas detector/sniffer</li>
      <li>Screwdriver set, including panel-cover screws</li>
      <li>Binoculars (for roof assessment without climbing in every case)</li>
    </ul>

    <h2>Protective Gear</h2>
    <ul>
      <li>Coveralls or knee pads for crawlspace access</li>
      <li>Respirator mask for attics, crawlspaces, and dusty mechanical rooms</li>
      <li>Work gloves</li>
    </ul>

    <h2>Specialized / Upgrade Equipment</h2>
    <ul>
      <li>Thermal imaging camera — increasingly expected by buyers, genuinely useful for moisture and insulation issues</li>
      <li>Sewer scope camera — if you plan to offer sewer line inspections as an add-on service</li>
      <li>Moisture/mold testing kits — if offering that as a separate add-on</li>
    </ul>

    <h2>Software</h2>
    <p>
      Inspection report software is effectively mandatory at this point — it
      structures your findings, embeds photos directly into a professional
      report, and lets you deliver that report to the buyer and their agent
      within hours of the inspection rather than days. Fast, clear report
      delivery is itself a competitive advantage in a business built on
      referrals.
    </p>

    <h2>What to Buy First vs. What Can Wait</h2>
    <p>
      Start with the core tools and protective gear — these are
      non-negotiable for a basic, code-compliant inspection. A thermal
      camera and sewer scope are genuinely valuable upgrades but can
      reasonably wait until the business has enough volume to justify the
      cost, especially since you can subcontract a specialized sewer scope
      inspection to a plumber in the meantime if a client requests one.
    </p>
  </BlogPost>
);

export default HomeInspectionEquipmentChecklist;
