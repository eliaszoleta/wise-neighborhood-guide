import { Link } from "react-router-dom";
import BlogPost from "@/components/BlogPost";

const PrivateMoneyLender = () => (
  <BlogPost
    title="Private Money Lenders in Real Estate: How to Find Them and Work With Them"
    metaDesc="Private money lenders are individuals who fund deals from their own capital. Here's how private money differs from hard money, how deals are structured, and how to build your lender network."
    slug="financing/private-money-lender"
    datePublished="2026-02-13"
    category="Financing"
    faqs={[
      { q: "What is a private money lender in real estate?", a: "A private money lender is an individual — often a retiree, professional, or former investor — who funds real estate deals from their own capital in exchange for interest payments secured by the property. Unlike hard money companies with standardized programs, private lenders set their own terms, making rates and structure fully negotiable based on the relationship and deal quality." },
      { q: "What interest rate do private money lenders charge?", a: "Private money rates typically range from 6–10%, depending on the lender's risk appetite, how well they know the investor, and the deal structure. This is meaningfully cheaper than hard money (12–15% plus points) because private lending is relationship-based — the lender's familiarity with the borrower reduces their perceived risk." },
      { q: "How do you find private money lenders for real estate?", a: "Private lenders are found through relationships, not advertising. Start with people who already know you — professional contacts, REIA members, family, and friends — and educate them on how the arrangement works: first lien position, specific property as collateral, fixed rate, defined term. Most people don't know this is possible, and your job is to explain it clearly, not to hard-sell." },
      { q: "Can you use a self-directed IRA to lend private money?", a: "Yes — many private lenders use self-directed IRAs or Roth IRAs to fund real estate deals, earning interest tax-deferred or tax-free depending on account type. The arrangement requires a custodian who specializes in alternative assets (such as Equity Trust or Midland IRA), and the loan documents are in the name of the IRA, not the individual. The IRS prohibits self-dealing, meaning lenders can't fund deals on property they or close family members will benefit from personally." },
      { q: "What documents are needed for a private money loan?", a: "Every private money deal needs a promissory note spelling out the loan amount, interest rate, payment schedule, maturity date, and default terms, plus a deed of trust (or mortgage in some states) recorded with the county that gives the lender a security interest in the property. Never rely on a handshake or informal note — have a real estate attorney draft or review the documents, and record the deed of trust to protect both parties." },
    ]}
  >
    <p>
      A few years back, I was talking to a dentist at a local real estate meetup.
      He wasn't there to invest in properties himself — too much work, he said.
      But he had a rollover IRA sitting in index funds earning maybe 7% a year,
      and a colleague had told him that some investors were paying 8–9% on
      short-term loans secured by real estate. He wanted to understand it better.
    </p>
    <p>
      That dentist is now a private money lender. He's funded four deals in the
      past two years through his self-directed IRA, earns more than he was making
      in the market, and sleeps fine because every loan has a first deed of trust
      on a property worth more than the loan balance. That's the private money
      relationship — and it works well for both sides when it's done right.
    </p>

    <h2>Private Money vs. Hard Money: They Are Not the Same Thing</h2>
    <p>
      People mix these up constantly. Hard money comes from professional lending
      companies — they have staff, standardized underwriting, defined loan
      programs, and rates that don't move much because they're running a business.
      Hard money typically runs 12–15% with 2–4 points, and those terms aren't
      really negotiable.
    </p>
    <p>
      Private money is different. It comes from individuals: retirees, professionals,
      former investors, people sitting on capital who want better returns than
      their savings account. Because it's a personal relationship and the lender
      sets their own terms, everything is negotiable. I've seen private money deals
      done at 6%, and I've seen them at 10%. It depends on the lender's risk
      appetite, how well they know you, and what the deal looks like.
    </p>
    <div className="callout">
      <strong>The practical difference:</strong> Hard money is faster to access
      early on because it doesn't require a personal relationship. Private money
      is cheaper and more flexible, but takes time to build. Most experienced
      investors use both.
    </div>

    <h2>Who Are Private Money Lenders, Actually?</h2>
    <p>
      They're ordinary people with capital they want working harder. A few common
      profiles:
    </p>
    <ul>
      <li>
        <strong>Retirees with rollover IRAs</strong> — They've left their employer,
        rolled a 401(k) into an IRA, and discovered that a self-directed IRA can
        hold real estate loans. If they're earning 5% in bonds and you offer 8%
        secured by property, the math is attractive.
      </li>
      <li>
        <strong>Professionals with savings</strong> — Doctors, lawyers, engineers
        who've accumulated cash but don't want to be landlords. They want a
        passive, predictable return.
      </li>
      <li>
        <strong>Former real estate investors</strong> — People who used to flip or
        rent properties but don't want the operational headaches anymore. They
        understand the business and are comfortable with the collateral.
      </li>
      <li>
        <strong>Business owners with seasonal cash flow</strong> — Money sitting
        between business cycles. Short-term loans to investors can be a good fit.
      </li>
    </ul>
    <p>
      None of these people are hanging out a shingle that says "private money
      lender." You find them through relationships, which is why building your
      network matters even before you need the capital.
    </p>

    <h2>How Private Money Deals Are Structured</h2>
    <p>
      The standard legal framework is a promissory note plus a deed of trust (or
      mortgage, depending on the state). The promissory note lays out the loan
      terms: amount, interest rate, repayment schedule, maturity date. The deed
      of trust gives the lender a security interest in the property — if you
      default, they can foreclose.
    </p>
    <p>
      This isn't informal. You need a real estate attorney to draft or at least
      review the documents, and the deed of trust needs to be recorded with the
      county. Some investors try to keep things casual with a handshake or a
      simple note, and that's a mistake. The paperwork protects both of you.
    </p>

    <h3>Self-Directed IRA Mechanics</h3>
    <p>
      A lot of private lenders use self-directed IRAs to fund deals. The tax
      treatment is attractive — interest earned inside a traditional IRA grows
      tax-deferred, and inside a Roth IRA it can grow tax-free. But the mechanics
      require a custodian who specializes in alternative assets (companies like
      Equity Trust or Midland IRA). The custodian holds the assets, manages
      paperwork, and makes sure the transaction stays IRS-compliant.
    </p>
    <p>
      If your lender is using an IRA, the loan documents will be in the name of
      the IRA, not the individual. The wire comes from the custodian. Payments go
      back to the custodian, not to the person directly. This matters for how you
      structure the paperwork.
    </p>
    <blockquote>
      The rule the IRS cares about most: no self-dealing. The lender cannot
      personally benefit from the transaction beyond the interest payments, and
      neither can their close family members. A private lender using their IRA
      cannot, for example, fund a loan on a property they're going to live in.
    </blockquote>

    <h2>Building Your Private Lender Network</h2>
    <p>
      Here's the honest truth: nobody hands money to a stranger. Private lending
      is a relationship business. You have to build credibility before you need
      the capital, not after.
    </p>
    <p>Start with the people who already know you:</p>
    <ul>
      <li>
        Family and close friends — not to pressure them, but because they already
        trust you as a person. If your numbers are solid, some will be interested.
      </li>
      <li>
        Professional contacts — your accountant, your attorney, your doctor. These
        people have money and often know others who do.
      </li>
      <li>
        REIA members — experienced investors sometimes fund newer investors'
        deals. They understand the business and can evaluate risk properly.
      </li>
    </ul>
    <p>
      The pitch isn't really a pitch. It's educating people on how the
      arrangement works: first lien position, specific property as collateral,
      fixed interest rate, defined term. Most people don't know this is possible.
      Your job is to explain it clearly, not to hard-sell anyone.
    </p>

    <h3>The Track Record Problem — and How to Solve It</h3>
    <p>
      Every first-time investor faces this: you need private money to do deals,
      but lenders want to see your track record before they fund you. It's a real
      chicken-and-egg problem.
    </p>
    <p>
      A few ways around it:
    </p>
    <ol>
      <li>
        Do your first deal with <Link to="/blog/financing/hard-money-lender">hard money</Link> or your own cash. Document everything —
        timeline, budget vs. actual, final numbers. That deal becomes your track
        record.
      </li>
      <li>
        Partner with an experienced investor on your first deal. Their credibility
        carries the relationship initially, and you learn the process.
      </li>
      <li>
        Bring in a lender who knows you personally — someone for whom your
        character and judgment matter more than your deal history.
      </li>
    </ol>
    <div className="callout">
      <strong>Important:</strong> When you approach private lenders, be
      transparent about where you are in your investing journey. Experienced
      people can spot someone who's overselling their experience, and getting
      caught being dishonest destroys the relationship permanently. Honest
      inexperience is fine. Most private lenders who fund first deals do so
      because they believe in the investor, not just the deal.
    </div>

    <h2>Terms Worth Negotiating</h2>
    <p>
      Because private money terms are flexible, it's worth knowing what's on the
      table:
    </p>
    <ul>
      <li>
        <strong>Interest rate:</strong> Typically 6–10%, though some deals go
        lower for strong relationships or larger amounts.
      </li>
      <li>
        <strong>Interest-only vs. amortizing:</strong> Most private loans are
        interest-only during the term, with a balloon payment at the end. This
        keeps your monthly carrying costs low.
      </li>
      <li>
        <strong>Loan term:</strong> 6 to 24 months is common for short-term
        projects. Rental property loans might go longer.
      </li>
      <li>
        <strong>Points:</strong> Some private lenders charge points, some don't.
        Negotiable.
      </li>
      <li>
        <strong>Extension options:</strong> Build in the right to extend if the
        project runs long. Even 60–90 additional days can matter on a renovation.
      </li>
    </ul>
    <p>
      The <a href="https://www.irs.gov/retirement-plans/self-directed-ira-using-a-self-directed-ira-to-invest-in-real-estate" target="_blank" rel="noopener noreferrer">IRS guidance on self-directed IRAs</a> explains the prohibited transaction rules that affect private lenders using retirement accounts. Explore all borrowing options on our <Link to="/real-estate-investing/funding-financing">funding and financing page</Link>. Have your attorney formalize whatever you agree on. Handshakes are for
      introductions, not for loan terms secured by real property.
    </p>
  </BlogPost>
);

export default PrivateMoneyLender;
