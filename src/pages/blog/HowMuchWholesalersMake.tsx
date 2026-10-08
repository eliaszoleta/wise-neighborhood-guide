import { Link } from "react-router-dom";
import BlogPost from "@/components/BlogPost";

const HowMuchWholesalersMake = () => (
  <BlogPost
    title="How Much Do Real Estate Wholesalers Actually Make?"
    metaDesc="Assignment fees typically run $5,000-$20,000 per deal, but income varies enormously based on deal volume, market, and experience. Here's a realistic breakdown of wholesaler earnings."
    slug="wholesaling/how-much-wholesalers-make"
    datePublished="2026-10-08"
    category="Wholesaling"
    quickAnswer="Most assignment fees fall between $5,000 and $20,000 per deal, with a common average cited around $10,000. Full-time wholesalers closing 2-4 deals a month can realistically earn $100,000-$300,000+ annually, but a large share of people who try wholesaling close zero deals in their first year."
    faqs={[
      { q: "What's a typical assignment fee per deal?", a: "Most fall in the $5,000-$20,000 range, with a commonly cited average around $10,000, though this varies heavily by market, property value, and how much of a discount the wholesaler negotiated from the seller." },
      { q: "How many deals does a full-time wholesaler close per month?", a: "Experienced, full-time wholesalers with solid marketing systems often close 2-5 deals per month. Many beginners close zero to one deal in their first several months while building lead generation systems and a cash buyers list." },
      { q: "Why do so many people fail at wholesaling?", a: "It requires consistent lead generation (marketing costs money and time), negotiation skill, a real cash buyers list, and the ability to accurately estimate repair costs and after-repair value. Many beginners underestimate the marketing investment and persistence required before the first deal closes." },
      { q: "Do wholesalers need startup capital?", a: "Less than most real estate strategies, but not zero -- marketing (direct mail, driving for dollars, online ads) and earnest money deposits require some capital. Budget at least a few hundred to a few thousand dollars to get a consistent lead pipeline started." },
      { q: "Is wholesaling income consistent or does it fluctuate a lot?", a: "It fluctuates significantly, especially for solo wholesalers -- a slow month with zero closings followed by a month with three deals is common. Experienced wholesalers manage this by keeping a consistent marketing pipeline running regardless of how many deals are currently in progress." },
    ]}
    relatedArticles={[
      { label: "Real Estate Wholesaling Explained", href: "/blog/wholesaling/real-estate-wholesaling-explained" },
      { label: "How to Find Motivated Sellers", href: "/blog/wholesaling/how-to-find-motivated-sellers" },
      { label: "How to Build a Cash Buyers List", href: "/blog/wholesaling/cash-buyers-list-real-estate" },
    ]}
  >
    <p>
      Wholesaling gets marketed aggressively as a fast, low-capital way into real estate — and the income potential is real, but so is the gap between what's possible and what the typical beginner actually earns. Here's a grounded look at the numbers.
    </p>

    <h2>Typical Assignment Fees</h2>
    <table>
      <thead>
        <tr><th>Deal Type</th><th>Typical Assignment Fee</th></tr>
      </thead>
      <tbody>
        <tr><td>Smaller/lower-value property, competitive market</td><td>$3,000-$7,000</td></tr>
        <tr><td>Average single-family deal</td><td>$8,000-$15,000</td></tr>
        <tr><td>Larger or highly distressed property with big spread</td><td>$15,000-$30,000+</td></tr>
        <tr><td>Multi-family or commercial wholesale</td><td>$20,000-$100,000+ (less common, higher variance)</td></tr>
      </tbody>
    </table>
    <p>
      The fee depends on the spread between what you negotiated with the seller and what an investor buyer will pay — which itself depends on how distressed the property is, how motivated the seller was, and how competitive your local investor-buyer market is.
    </p>

    <h2>Annual Income by Activity Level</h2>
    <div className="callout">
      <ul>
        <li><strong>Part-time, 1 deal every 2-3 months:</strong> $20,000-$50,000/year</li>
        <li><strong>Full-time, 2-3 deals/month:</strong> $120,000-$250,000/year</li>
        <li><strong>Established operation with a small team, 5+ deals/month:</strong> $400,000+/year (though overhead — marketing spend, VAs, acquisitions staff — eats into the margin significantly)</li>
      </ul>
    </div>

    <h2>Why the Range Is So Wide</h2>
    <ul>
      <li><strong>Market matters.</strong> Markets with more distressed inventory and less wholesaler competition tend to produce larger spreads per deal.</li>
      <li><strong>Marketing investment drives deal flow.</strong> Wholesalers who invest consistently in direct mail, cold calling, or paid ads generate far more leads — and therefore far more closed deals — than those relying on occasional word-of-mouth.</li>
      <li><strong>Negotiation skill compounds.</strong> A wholesaler who negotiates a bigger discount from the seller has more room to charge a larger assignment fee while still offering the end buyer a good deal.</li>
      <li><strong>Experience reduces dead deals.</strong> Beginners lose more time (and sometimes earnest money) on contracts that never find a buyer — experienced wholesalers get better at only contracting deals they're confident they can move.</li>
    </ul>

    <h2>The Part Most Content Leaves Out</h2>
    <p>
      A significant share of people who attempt wholesaling close zero deals in their first six months to a year — not because the model doesn't work, but because consistent lead generation and negotiation skill take real time to build. Wholesaling is a sales and marketing business wrapped around real estate, and it rewards persistence and systems far more than it rewards finding one lucky deal.
    </p>
  </BlogPost>
);

export default HowMuchWholesalersMake;
