import { Link } from "react-router-dom";
import BlogPost from "@/components/BlogPost";

const TenThirtyOneExchange = () => (
  <BlogPost
    title="1031 Exchange in Real Estate: Rules, Timelines, and How to Defer Capital Gains"
    metaDesc="A 1031 exchange lets you defer capital gains taxes when selling investment property by rolling proceeds into a like-kind replacement. Here's exactly how it works."
    slug="financing/1031-exchange-real-estate"
    datePublished="2026-03-16"
    category="Financing"
    faqs={[
      { q: "What is a 1031 exchange in real estate?", a: "A 1031 exchange (named after IRS Section 1031) lets you sell an investment property and defer all capital gains taxes by reinvesting the proceeds into a like-kind replacement property. You don't avoid the tax permanently — you defer it until you eventually sell without exchanging. The basis of the old property carries over to the new one." },
      { q: "What are the 45-day and 180-day rules in a 1031 exchange?", a: "After you close the sale of your relinquished property, you have exactly 45 days to identify potential replacement properties in writing. You then have 180 days total from the sale date to close on the replacement. These deadlines are absolute — there are no extensions for personal hardship or market conditions." },
      { q: "What counts as like-kind property in a 1031 exchange?", a: "Like-kind is much broader than most people expect. Any U.S. investment real estate qualifies as like-kind to any other U.S. investment real estate. You can exchange a single-family rental for a commercial building, a raw land parcel for a multifamily complex, or a warehouse for a retail strip center. The only hard requirement is that both properties are held for investment or business use — not personal use." },
      { q: "What is boot in a 1031 exchange?", a: "Boot is anything you receive from the exchange that isn't like-kind property — typically cash (when the replacement property is worth less than the relinquished property) or net debt relief (when you take on less debt on the new property than you had on the old one). Boot is taxable in the year of the exchange. You can have a partial 1031 exchange where you defer taxes on the reinvested portion and pay taxes only on the boot received." },
      { q: "Does a 1031 exchange avoid depreciation recapture?", a: "No. A 1031 exchange defers capital gains tax but does not eliminate depreciation recapture. The depreciation you claimed on the relinquished property carries over and eventually gets recaptured when you sell the replacement property without exchanging. The recapture rate is 25% federally. The swap-till-you-drop strategy works around this: if you hold exchanged properties until death, your heirs receive a stepped-up basis and the recapture disappears entirely." },
    ]}
  >
    <p>
      You bought a rental property in 2018 for $240,000. It's worth $400,000
      today. Sell it outright and you're looking at federal capital gains tax on
      $160,000 of appreciation — plus depreciation recapture on whatever you've
      written off over the years. That's a tax bill potentially north of $40,000
      before your state takes its cut. Or you could roll every dollar into a
      better property and defer that tax entirely.
    </p>
    <p>
      That's what a 1031 exchange does. It's one of the most powerful tools in
      real estate investing, and it's been part of the tax code since 1921.
      But the rules are strict, the timelines are unforgiving, and getting it
      wrong means you owe the taxes anyway — plus penalties.
    </p>

    <h2>The Basic Mechanics</h2>
    <p>
      Section 1031 of the Internal Revenue Code allows you to defer capital
      gains taxes on the sale of investment property if you reinvest the
      proceeds into another like-kind property within specified timeframes.
      The property you sell is called the <em>relinquished property</em>. The
      property you buy is the <em>replacement property</em>.
    </p>
    <p>
      To defer 100% of your capital gains, you must:
    </p>
    <ol>
      <li>Reinvest all of the net proceeds from the sale (no cash-out)</li>
      <li>Buy a replacement property of equal or greater value</li>
      <li>Take on equal or greater debt on the replacement</li>
      <li>Meet the 45-day identification and 180-day closing deadlines</li>
      <li>Use a qualified intermediary to hold the funds</li>
    </ol>
    <p>
      Miss any of these, and either the entire exchange fails (fully taxable)
      or you receive "boot" — the taxable portion of the exchange.
    </p>

    <h2>The 45-Day Identification Rule</h2>
    <p>
      You have exactly 45 calendar days from the closing of your relinquished
      property to identify potential replacement properties. You must submit
      this identification in writing to your qualified intermediary. The clock
      starts ticking the moment you close — weekends and holidays count.
    </p>
    <p>
      There are three identification rules. You only need to follow one:
    </p>
    <ul>
      <li>
        <strong>3-Property Rule:</strong> Identify up to 3 properties of any
        value. This is what most investors use.
      </li>
      <li>
        <strong>200% Rule:</strong> Identify any number of properties, as long
        as the total fair market value doesn't exceed 200% of the relinquished
        property's sale price.
      </li>
      <li>
        <strong>95% Rule:</strong> Identify any number of properties, but you
        must close on 95% of the total identified value. This one is almost
        impossible to hit in practice and rarely used.
      </li>
    </ul>
    <div className="callout">
      <strong>Critical mistake to avoid:</strong> Identifying properties you
      can't actually close on. If you identify three properties and all three
      fall through after day 45, the exchange fails and you owe taxes. Identify
      properties where you have a realistic path to closing.
    </div>
    <p>
      The 45-day window is tight. If you close your relinquished property and
      then start your property search, you're already behind. Start identifying
      replacement candidates before you close the sale — ideally before you even
      list the relinquished property.
    </p>

    <h2>The 180-Day Closing Rule</h2>
    <p>
      You have 180 calendar days from the sale of your relinquished property —
      or the due date of your tax return for the year of the sale, whichever
      comes first — to close on your replacement property. There are no
      extensions. The IRS has not granted extensions for COVID, hurricanes, or
      market volatility. A few disaster-area exceptions exist, but they're rare.
    </p>
    <p>
      That "whichever comes first" clause is a trap that catches investors.
      If you sell your relinquished property in October and your tax return is
      due in April (without extension), your closing deadline might be April —
      not the full 180 days. Filing a tax extension extends your return deadline
      and therefore gives you the full 180 days. Talk to your CPA about this
      before the exchange, not after.
    </p>

    <h2>Like-Kind Property: Broader Than You Think</h2>
    <p>
      The "like-kind" requirement is one of the most misunderstood parts of the
      1031 exchange. It does not mean you have to exchange a house for a house.
      Any U.S. investment real estate is like-kind to any other U.S. investment
      real estate. This includes:
    </p>
    <ul>
      <li>Single-family rentals into multifamily apartment buildings</li>
      <li>Commercial office space into industrial warehouse</li>
      <li>Raw land into a fully operational retail strip</li>
      <li>A vacation rental into a net-lease commercial property</li>
      <li>Your portion of a TIC (tenancy in common) interest into a DST (Delaware Statutory Trust)</li>
    </ul>
    <p>
      The only hard lines: the property must be held for investment or productive
      use in a trade or business — not personal use. Your primary residence
      doesn't qualify. A vacation home you use personally for more than 14 days
      per year likely doesn't qualify. And a fix-and-flip property held
      primarily for resale won't qualify either, because it's treated as
      inventory rather than a capital asset.
    </p>
    <blockquote>
      <Link to="/blog/investing/house-flipping">House flipping</Link> does not
      qualify for 1031 exchange treatment. The IRS views properties held
      primarily for resale as dealer property, not capital assets. If you flip
      and resell within 12 months, you're paying ordinary income tax rates —
      not capital gains rates — and no 1031 exchange will help you.
    </blockquote>

    <h2>Your Basis Carries Over</h2>
    <p>
      When you complete a 1031 exchange, you don't start fresh with a new
      basis on the replacement property. Your adjusted basis from the
      relinquished property carries over to the replacement.
    </p>
    <p>
      Here's what that means in practice. Say you bought the relinquished
      property for $240,000, took $30,000 in depreciation over the years, and
      sold it for $400,000. Your adjusted basis is $210,000. You exchange into
      a $550,000 replacement property. Your basis in the new property starts at
      roughly $210,000 (adjusted for the additional equity you brought in and
      the difference in debt), not $550,000.
    </p>
    <p>
      This matters because depreciation on the replacement property is calculated
      from that lower basis. You also inherit the depreciation recapture liability
      from the relinquished property. The tax isn't erased — it's deferred.
    </p>

    <h2>A Real Example: Sell $400K, Buy $550K</h2>
    <p>
      Let's walk through a complete exchange scenario:
    </p>
    <ul>
      <li>Relinquished property sale price: $400,000</li>
      <li>Original purchase price: $240,000</li>
      <li>Accumulated depreciation: $30,000</li>
      <li>Adjusted basis: $210,000</li>
      <li>Gross gain: $190,000 (sale price minus adjusted basis)</li>
      <li>Existing mortgage paid off at closing: $180,000</li>
      <li>Net equity (exchange funds): $220,000</li>
      <li>Replacement property purchase price: $550,000</li>
      <li>New mortgage: $330,000</li>
      <li>Capital gains tax deferred: all of it — $0 owed at exchange</li>
    </ul>
    <p>
      In this scenario, you rolled $220,000 in equity into a $550,000 property,
      took on more debt than you had before (satisfying the equal-or-greater-debt
      rule), and deferred the entire $190,000 gain. The $30,000 in depreciation
      recapture still exists as a future liability — but it's a future problem,
      not a current one.
    </p>

    <h2>Boot and Partial Exchanges</h2>
    <p>
      Not every exchange has to be all-or-nothing. If you don't buy a property
      of equal or greater value, or if you take some cash out, you'll have a
      partial exchange. The portion that doesn't get reinvested — the boot —
      is taxable in the year of the exchange.
    </p>
    <p>
      Boot comes in two forms:
    </p>
    <ul>
      <li>
        <strong>Cash boot:</strong> Cash you receive because the replacement
        property is cheaper than the relinquished property
      </li>
      <li>
        <strong>Mortgage boot:</strong> Net debt relief when the mortgage on
        the replacement is less than the mortgage on the relinquished property
      </li>
    </ul>
    <p>
      You can offset mortgage boot with cash — meaning you can put extra cash
      into the replacement to make up for taking on less debt. What you can't
      do is offset cash boot with mortgage.
    </p>

    <h2>The Qualified Intermediary Requirement</h2>
    <p>
      You cannot touch the exchange funds at any point. That's the rule. If
      the proceeds from the sale of your relinquished property flow through your
      bank account — even for a day — the exchange is disqualified.
    </p>
    <p>
      A qualified intermediary (QI) is a third-party company that holds your
      exchange funds between the sale and the purchase. They must be someone
      who isn't your agent — not your attorney, your CPA, your real estate agent,
      or anyone else who has had a principal relationship with you in the past
      two years. You hire a dedicated QI company.
    </p>
    <p>
      QI fees run $800 to $1,500 for a standard exchange. That's not the place
      to cut corners. There have been cases of QI fraud where the intermediary
      absconded with exchange funds, so use a reputable company with bonding,
      E&O insurance, and a solid track record. Your title company or real estate
      attorney can usually refer you to someone they trust.
    </p>
    <div className="callout">
      <strong>The QI must be in place before you close:</strong> You can't hire
      the QI after the sale and retroactively set up the exchange. The exchange
      agreement must be signed before the relinquished property closes.
    </div>

    <h2>Depreciation Recapture Still Applies</h2>
    <p>
      This catches people off guard. A 1031 exchange defers capital gains tax.
      It does not eliminate depreciation recapture. Every year you've taken
      depreciation on the relinquished property, you've reduced your basis and
      created a recapture liability taxed at 25% federally when you eventually
      sell.
    </p>
    <p>
      When you exchange, that recapture liability transfers to the replacement
      property. When you eventually sell the replacement without exchanging,
      you'll owe recapture on all the depreciation taken on both properties.
      This is the deferred tax that never quite goes away — unless you use the
      swap-till-you-drop strategy.
    </p>

    <h2>Swap Till You Drop</h2>
    <p>
      "Swap till you drop" is the colloquial name for the strategy of
      continuously exchanging into larger properties throughout your lifetime,
      deferring all capital gains and depreciation recapture indefinitely.
      When you die, your heirs receive the property with a stepped-up basis to
      fair market value at the date of death. The deferred gains and recapture
      liability disappear entirely.
    </p>
    <p>
      This is a legitimate, legal strategy that real estate investors have used
      for decades. There are ongoing discussions in Congress about eliminating
      or limiting 1031 exchanges and stepped-up basis rules, so it's worth
      staying current on tax law changes — but as of today, both provisions
      remain in place.
    </p>
  </BlogPost>
);

export default TenThirtyOneExchange;
