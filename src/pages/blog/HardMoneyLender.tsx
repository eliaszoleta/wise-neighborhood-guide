import { Link } from "react-router-dom";
import BlogPost from "@/components/BlogPost";

const HardMoneyLender = () => (
  <BlogPost
    title="What Is a Hard Money Lender in Real Estate Investing?"
    metaDesc="Hard money lenders provide short-term, asset-based loans for real estate investors buying distressed properties. Here's how they work, what they really cost, and when to use one."
    slug="financing/hard-money-lender"
    datePublished="2026-02-13"
    category="Financing"
    faqs={[
      { q: "What is a hard money loan in real estate?", a: "A hard money loan is a short-term, asset-based loan from a private lender used to buy distressed properties that conventional banks won't finance. The lender cares primarily about the property's after-repair value (ARV) — not your income, W-2s, or credit score in the way a bank does — and typically lends 65–75% of ARV." },
      { q: "What are typical hard money loan rates and terms?", a: "Hard money loans typically run 10–15% annual interest plus 2–4 points paid upfront at closing, with terms of 6–18 months. On a $175,000 loan at 12% with 3 points held for 8 months, your total financing cost is roughly $19,250 — a number that must be built into your deal analysis before you commit." },
      { q: "How fast can you close with a hard money lender?", a: "Most hard money lenders can close in 7–10 business days, compared to 30–45 days for a conventional bank loan. This speed is the primary reason flippers and investors use hard money — it allows them to compete for distressed properties where sellers want a fast close." },
      { q: "What is the difference between hard money and private money?", a: "Hard money comes from professional lending companies with standardized programs and non-negotiable rates (typically 12–15% plus points). Private money comes from individuals — retirees, professionals, former investors — with flexible, negotiable terms that typically run 6–10% because it's relationship-based. Private money is cheaper but takes longer to build; hard money is faster to access early on." },
      { q: "How do renovation draws work with a hard money loan?", a: "Renovation funds are typically held in reserve and released in phases — you complete a stage of work, the lender inspects (or reviews photos), and then releases the next draw. You pay interest on the full loan amount from day one even while waiting for draws, so investors who count on early draw funds to start the next phase of work can end up in a cash crunch if they don't have reserves." },
    ]}
    relatedArticles={[
      { label: "Private Money Lenders Explained", href: "/blog/financing/private-money-lender" },
      { label: "DSCR Loans for Investors", href: "/blog/financing/dscr-loan-real-estate" },
      { label: "Bridge Loans Explained", href: "/blog/financing/bridge-loan-real-estate" },
    ]}
  >
    <p>
      Let's say you find a beat-up house for $120,000. After renovations, it's
      worth $210,000. You have decent credit, some savings, but your bank wants
      tax returns, W-2s, a six-week underwriting process, and won't touch the
      property because it has a condemned kitchen. What do you do?
    </p>
    <p>
      That's exactly what hard money lenders exist for. And if you're going to
      flip houses or buy distressed properties, you're going to run into them
      eventually. Better to understand how they work before you're sitting across
      from one negotiating terms.
    </p>

    <h2>The Core Idea: The Asset Is the Loan</h2>
    <p>
      Hard money is asset-based lending. The lender doesn't care much about your
      income, your job history, or even your credit score — at least not in the
      way a bank does. What they care about is the property and what it'll be
      worth when you're done with it.
    </p>
    <p>
      This is why hard money exists for distressed properties. A conventional
      bank won't lend on a house with no functioning kitchen because they can't
      sell it if you default. A hard money lender will — because they've already
      run their own numbers on what that property is worth fixed up, and they've
      structured the loan to protect themselves regardless.
    </p>
    <div className="callout">
      <strong>The key term: ARV.</strong> After Repair Value is the estimated
      value of the property once renovations are complete. Hard money lenders
      lend based on ARV, not the current purchase price. Most lend 65–75% of ARV.
    </div>

    <h2>How the Loan Is Actually Structured</h2>
    <p>
      A typical hard money deal has two components: the purchase loan and the
      renovation draws. You get the purchase funds upfront to close. The rehab
      money usually gets released in draws — you complete a phase of work, the
      lender sends out an inspector (or asks for photos, depending on how they
      operate), and then they release the next chunk of funds.
    </p>
    <p>
      I've seen investors get burned by not understanding the draw schedule.
      You're paying interest on the full loan amount from day one in most cases,
      but you can't access the renovation funds until you've hit milestones. If
      you're short on cash reserves and counting on that first draw to fund the
      next phase of work, you can end up in a serious pinch.
    </p>

    <h3>Example Loan Structure</h3>
    <ul>
      <li>Purchase price: $120,000</li>
      <li>Renovation budget: $55,000</li>
      <li>ARV (estimated): $210,000</li>
      <li>Loan at 70% of ARV: $147,000</li>
      <li>Purchase funded by lender: $120,000</li>
      <li>Renovation held in reserve: $27,000 (released in draws)</li>
      <li>Your cash out of pocket: ~$48,000 (plus closing costs)</li>
    </ul>
    <p>
      The lender doesn't necessarily fund 100% of your renovation. In this
      example, you'd need to cover the $28,000 gap in reno funds from your own
      pocket or bring in a partner. Every deal is different.
    </p>

    <h2>What Hard Money Actually Costs</h2>
    <p>
      This is where people get surprised. Hard money is expensive. Intentionally
      so — these lenders take on risk that banks won't, and they price accordingly.
    </p>
    <p>
      Expect to pay somewhere between 10–15% annual interest plus 2–4 points
      upfront. Points are a percentage of the loan amount paid at closing — so 2
      points on a $147,000 loan is $2,940 right out of the gate.
    </p>

    <h3>Real Math on a $175,000 Loan for 8 Months</h3>
    <p>
      Walk through this with me. You borrow $175,000 at 12% interest with 3
      points:
    </p>
    <ul>
      <li>
        <strong>Origination (3 points):</strong> $5,250 paid at closing
      </li>
      <li>
        <strong>Monthly interest (12% ÷ 12 = 1%):</strong> $1,750/month
      </li>
      <li>
        <strong>8 months of interest:</strong> $14,000
      </li>
      <li>
        <strong>Total financing cost:</strong> ~$19,250
      </li>
    </ul>
    <p>
      That's nearly $20,000 in financing costs alone on an 8-month flip. If
      your projected profit is $35,000, you're working with a lot less margin
      than you thought. Add in holding costs, realtor commissions, closing
      costs on the sale, and that deal can go sideways fast if something goes
      wrong with the rehab.
    </p>
    <blockquote>
      <Link to="/blog/financing/private-money-lender">Private money lenders</Link> often offer cheaper rates than hard money — typically 6–10% versus 12–15% — but require an established relationship first. Hard money is a tool, not a shortcut. The cost of that money has to be
      built into your deal analysis from the start, not added in as an
      afterthought.
    </blockquote>

    <h2>Hard Money vs. a Bank Loan: The Real Tradeoff</h2>
    <p>
      Banks will charge you 7–8% on an investment property loan right now, maybe
      less if rates come down. That's substantially cheaper than 12–14% hard
      money. So why would anyone use hard money? Speed and flexibility.
    </p>
    <p>
      A bank takes 30–45 days minimum to close and won't touch a property that
      needs significant work. Hard money lenders can close in 7–10 business days
      and don't care if the roof is missing half its shingles, as long as their
      numbers work. When you're competing for a distressed property and the seller
      wants to close in two weeks, your only real option is hard money or cash.
    </p>
    <p>
      The other difference is documentation. Banks want two years of tax returns,
      paystubs, bank statements, letters explaining every deposit over $1,000.
      Hard money lenders typically want the purchase contract, a scope of work,
      contractor bids, and your experience track record (or lack thereof — first
      deals happen too).
    </p>

    <h2>When Hard Money Makes Sense</h2>
    <ul>
      <li>You're buying a distressed property that a bank won't touch</li>
      <li>You need to close quickly — under two weeks — to win the deal</li>
      <li>Your profit margin is strong enough to absorb the cost</li>
      <li>You have a clear exit strategy: flip and sell, or refinance into a
      long-term loan once the property is stabilized</li>
    </ul>

    <h2>When Hard Money Doesn't Make Sense</h2>
    <p>
      If a conventional loan is available to you, use it. There's no award for
      paying more in interest than you have to. Hard money on a rental property
      you plan to hold long-term is a bad idea unless you're bridging to a
      refinance quickly. Paying 12% on a rental that cash flows at maybe 8% cap
      rate means you're losing money every month you hold it. Investors executing the <Link to="/blog/investing/brrrr-method-real-estate">BRRRR strategy</Link> use hard money as a bridge, then refinance into a long-term loan once the property stabilizes.
    </p>
    <p>
      I've also seen investors use hard money on deals where the margin was too
      thin. They bought on optimism, hit unexpected costs mid-renovation, and by
      the time they sold, they'd made almost nothing — or actually lost money
      after accounting for the financing. Run the numbers with the actual cost of
      hard money in there before you commit.
    </p>

    <h2>How to Find a Good Hard Money Lender</h2>
    <p>
      The <a href="https://www.investopedia.com/terms/h/hard_money_loan.asp" target="_blank" rel="noopener noreferrer">Investopedia overview of hard money loans</a> covers the basics of asset-based lending. The best referrals come from other investors. Explore <Link to="/real-estate-investing/funding-financing">our funding and financing page</Link> for more borrowing options. Go to your local REIA (Real
      Estate Investors Association) meeting and ask around. Experienced flippers
      in your market have already vetted lenders and can tell you who's reliable
      and who's a nightmare to work with.
    </p>
    <p>
      A few questions worth asking before you sign anything:
    </p>
    <ul>
      <li>What's your typical loan-to-ARV ratio?</li>
      <li>How do draws work and how long does the draw process take?</li>
      <li>What's your extension policy if the project runs long?</li>
      <li>
        Do you lend in my specific market and property type (single family,
        multifamily, etc.)?
      </li>
      <li>
        Are you the actual lender or a broker placing loans with someone else?
      </li>
    </ul>
    <p>
      That last one matters. Brokers add a layer of cost and sometimes create
      confusion when things go sideways. Working directly with the lender is
      usually better, especially on your first few deals.
    </p>
    <div className="callout">
      <strong>Red flag:</strong> Any lender who won't give you a clear term sheet
      before you commit, or who pressures you to sign quickly without reviewing
      the loan documents. Legitimate hard money lenders are used to investors
      asking questions. The sketchy ones get impatient.
    </div>
  </BlogPost>
);

export default HardMoneyLender;
