import { Link } from "react-router-dom";
import BlogPost from "@/components/BlogPost";

const ConstructionLoanRealEstate = () => (
  <BlogPost
    title="Construction Loans for Real Estate Investors: Draw Schedules, Rates, and Exit Strategies"
    metaDesc="Construction loans are short-term, interest-only loans that fund new builds or major rehabs through a draw schedule. Here's how they work for investors and what to plan for before you close."
    slug="financing/construction-loan-real-estate"
    datePublished="2026-03-16"
    category="Financing"
    faqs={[
      {
        q: "How do draw inspections work on a construction loan?",
        a: "Before the lender releases each draw, they send an inspector (or a third-party inspection company) to verify that the work claimed in the draw request has actually been completed. The inspector checks progress against the approved budget and scope. If the work is verified, the lender wires funds — typically within 2-5 business days. If the work is incomplete or deficient, the draw is delayed or reduced until the issues are resolved. Most loans have 3-6 draws built into the schedule, so planning your contractor payment schedule around these milestones is essential.",
      },
      {
        q: "What is the difference between a construction loan and a hard money rehab loan?",
        a: "Hard money rehab loans (fix-and-flip loans) are designed for properties that are being renovated but already have a foundation and structure standing — you're improving an existing building. Construction loans fund ground-up builds or demolition-and-rebuild projects where there's no completed structure yet. Construction loans typically have longer terms (12-18 months vs. 6-12 months for hard money), stricter documentation requirements (plans, permits, licensed contractor), and may require a larger down payment. Hard money lenders are generally more flexible on credit and move faster; construction lenders underwrite the project more like a bank.",
      },
      {
        q: "Can I be my own general contractor on a construction loan?",
        a: "Some lenders allow owner-builder arrangements, but most institutional lenders and banks require a licensed general contractor with a verifiable track record. If you're allowed to owner-build, expect tighter scrutiny, a higher interest rate, and potentially a reduced loan-to-cost ratio. Lenders worry that inexperienced owner-builders will run over budget, miss deadlines, and create a partially completed property that's difficult to sell or refinance. If you want to self-manage construction, partnering with a licensed GC of record — even if you're doing much of the coordination yourself — is often the cleaner path to loan approval.",
      },
      {
        q: "What happens if my construction project goes over budget?",
        a: "Cost overruns are your responsibility. Once the loan is set, the lender won't simply hand you more money because materials got more expensive or a subcontractor walked off the job. Most lenders require a contingency reserve of 10-15% of the construction budget built into the loan at closing to cover overruns — draw that down first. If you burn through contingency, you'll need to bring cash to the table or negotiate a loan modification, which requires lender approval and additional fees. This is why detailed, contractor-reviewed budgets and locked-in material pricing before closing are worth the extra pre-closing work.",
      },
      {
        q: "How do construction loan rates compare to permanent mortgage rates?",
        a: "Construction loan rates are higher than long-term permanent mortgages. For investors, expect rates in the 8-12% range on a fixed basis, or prime rate plus 1-2 percentage points on a variable basis. As of early 2026 with prime around 7.5%, a prime-plus-2 construction loan would be around 9.5%. Permanent 30-year investment property mortgages typically run 1-2 percentage points lower than construction loan rates. The rate differential is one reason minimizing your construction timeline matters — every extra month of carry costs at 10% on a $400k draw balance is roughly $3,300 in interest.",
      },
    ]}
    relatedArticles={[
      { label: "Hard Money Lenders Explained", href: "/blog/financing/hard-money-lender" },
      { label: "Bridge Loans Explained", href: "/blog/financing/bridge-loan-real-estate" },
      { label: "Private Money Lenders Explained", href: "/blog/financing/private-money-lender" },
    ]}
  >
    <p>
      You've found a lot, drawn up plans, and lined up a contractor. Now your
      mortgage broker tells you the deal needs a construction loan — and suddenly
      you're learning an entirely different product with inspections, draw
      schedules, and a loan that expires in 18 months. Construction loans are
      powerful tools, but they're actively managed financing: you don't get the
      money upfront, you earn it draw by draw as work gets done.
    </p>

    <h2>What a Construction Loan Actually Is</h2>
    <p>
      A construction loan is a short-term, interest-only line of credit secured
      by the land and the improvements being built on it. The loan has a
      committed amount — say $500,000 — but you don't pay interest on $500,000
      from day one. You pay interest only on funds actually drawn. As your
      contractor completes work, you submit draw requests, the lender inspects,
      and funds are released into a construction escrow account or directly to
      your account. Terms typically run 12-18 months for residential projects
      and up to 24 months for larger commercial builds.
    </p>
    <div className="callout">
      <strong>Interest carry math:</strong> If you draw $300,000 evenly over 12
      months at 10%, your average outstanding balance is roughly $150,000. That
      means total interest during construction is approximately $15,000 — not
      $30,000 on the full amount. Front-loaded draws increase carry costs;
      back-loaded draws reduce them.
    </div>

    <h2>Two-Time Close vs. One-Time Close</h2>
    <p>
      There are two structures, and choosing the right one affects your total
      closing costs and rate exposure significantly.
    </p>
    <ul>
      <li>
        <strong>Construction-to-permanent (one-time close):</strong> You close
        once. The loan automatically converts to a permanent mortgage when
        construction is complete. You pay one set of closing costs, and your
        permanent rate is locked at the time of construction closing. This
        eliminates the rate risk of having to refinance into a rising-rate
        environment after you've built.
      </li>
      <li>
        <strong>Construction-only (two-time close):</strong> You take out a
        standalone construction loan, build the project, and then refinance into
        a separate permanent mortgage or sell the property. You pay closing costs
        twice. The advantage is flexibility — you can shop for the best permanent
        financing once the project is stabilized, or you can sell rather than
        hold. For investors doing{" "}
        <Link to="/blog/investing/house-flipping">house flips</Link> or build-to-sell
        projects, the two-time close is typically the right structure.
      </li>
    </ul>

    <h2>Down Payment and Loan-to-Cost Requirements</h2>
    <p>
      Construction lenders underwrite against loan-to-cost (LTC) and
      loan-to-value (LTV) on the completed project. Expect to bring 20-25% of
      total project cost as equity — that includes the land if you already own
      it (your equity in the land counts). A project with $150,000 in land and
      $350,000 in construction costs has a $500,000 total project cost. At 80%
      LTC, the lender funds $400,000; you bring $100,000. Some lenders also cap
      the loan at 70-75% of the "as-completed appraised value," so if the
      finished home appraises at $480,000, their ceiling is $336,000-$360,000
      regardless of your costs. That math can create a gap you need to fund with
      cash or a second lien.
    </p>
    <div className="callout">
      <strong>Lender checklist:</strong> Approved building plans and permits,
      licensed and insured general contractor, detailed construction budget with
      cost breakdown by trade, builder's risk insurance naming the lender as
      additional insured, and appraisal based on plans and specs (not a
      comparable-only analysis).
    </div>

    <h2>How the Draw Schedule Works in Practice</h2>
    <p>
      Before your loan closes, you and your lender agree on a draw schedule tied
      to construction milestones. A typical residential new build might look
      like: Draw 1 at foundation completion (15% of budget), Draw 2 at framing
      (25%), Draw 3 at mechanical rough-in (20%), Draw 4 at drywall and
      insulation (20%), Draw 5 at finish work and certificate of occupancy (20%).
      When you hit a milestone, you submit a draw request with invoices and lien
      waivers from your contractors. The lender's inspector visits the site —
      typically within 3-5 business days — verifies the work, and approves the
      draw. Funds hit your account within another 2-3 days. The cycle repeats
      for each draw.
    </p>
    <p>
      Lien waivers from subcontractors are critical at each draw. Without them,
      subs who weren't paid by your GC can file mechanics' liens against the
      property — which can encumber your title and halt your construction-to-perm
      conversion. Many lenders require conditional lien waivers before releasing
      draws and unconditional waivers after payment clears.
    </p>

    <h2>Ground-Up Builds vs. Major Renovation Loans</h2>
    <p>
      Construction loans aren't just for vacant lots. A major gut renovation —
      where you're essentially rebuilding a structure from the foundation up —
      can qualify for construction financing rather than a standard rehab loan.
      The distinction matters because{" "}
      <Link to="/blog/financing/hard-money-lender">hard money lenders</Link>{" "}
      who fund fix-and-flip projects typically won't touch a project that
      requires structural work, new mechanical systems, and permits across
      multiple trades. If your renovation budget exceeds 50-60% of the
      property's current value, you're in construction loan territory.
    </p>
    <p>
      The{" "}
      <Link to="/blog/investing/brrrr-method-real-estate">BRRRR strategy</Link>{" "}
      — buy, rehab, rent, refinance, repeat — can work with a construction loan
      on major rehabs, with the exit being a{" "}
      <Link to="/blog/financing/cash-out-refinance">cash-out refinance</Link>{" "}
      once the property is stabilized and leased.
    </p>

    <h2>Exit Strategies When Construction Is Complete</h2>
    <p>
      Your construction loan has a maturity date. When it comes due, you need a
      plan — lenders don't simply extend indefinitely because the market is soft.
    </p>
    <ul>
      <li>
        <strong>Sell on completion:</strong> For build-to-sell investors, this is
        the cleanest exit. List the property immediately after the certificate of
        occupancy is issued and use sale proceeds to pay off the construction
        loan. Make sure your loan term gives you enough runway to sell — in slower
        markets, getting to closing can take 60-90 days after you go under
        contract.
      </li>
      <li>
        <strong>Convert to permanent mortgage:</strong> One-time close loans
        convert automatically. Two-time close loans require you to apply for and
        close a new permanent mortgage. Start the application process 60-90 days
        before your construction loan matures.
      </li>
      <li>
        <strong>Cash-out refinance into a rental portfolio:</strong> If the
        property appraises above your total project cost, a{" "}
        <Link to="/blog/financing/cash-out-refinance">cash-out refinance</Link>{" "}
        can return your equity for reinvestment while leaving the property as a
        rental. Alternatively, a{" "}
        <Link to="/blog/financing/dscr-loan-real-estate">DSCR loan</Link> works
        well for investment properties because it qualifies based on rental income
        rather than your personal tax returns.
      </li>
      <li>
        <strong>Bridge loan:</strong> If you need more time — the market is slow
        or the permanent loan is delayed — a{" "}
        <Link to="/blog/financing/bridge-loan-real-estate">bridge loan</Link> can
        pay off the construction loan and give you another 6-12 months of runway.
        Expect a higher rate, but it's better than a forced sale.
      </li>
    </ul>

    <h2>What Can Go Wrong (And How to Protect Yourself)</h2>
    <p>
      Construction projects run over budget and over schedule with remarkable
      consistency. A 10-15% contingency reserve isn't pessimism — it's standard
      underwriting. Before you close, verify that your contractor has pulled
      every required permit. Unpermitted work won't pass the draw inspection and
      can create title problems that follow the property indefinitely. Make sure
      your builder's risk insurance is in place before the first draw — a fire or
      storm during construction on an uninsured project is a total loss against
      which the lender will still collect.
    </p>
    <blockquote>
      The investors who get hurt by construction loans aren't usually the ones
      who build badly — they're the ones who run out of time. Build your timeline
      with 20% more duration than your contractor promises, then add another 30
      days for permit delays and inspection scheduling. If you finish early,
      great. If you don't, you won't be scrambling for a{" "}
      <Link to="/blog/financing/bridge-loan-real-estate">bridge loan</Link> at
      the worst possible moment.
    </blockquote>
  </BlogPost>
);

export default ConstructionLoanRealEstate;
