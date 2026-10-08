import { Link } from "react-router-dom";
import BlogPost from "@/components/BlogPost";

const HowMuchAgentsEarn = () => (
  <BlogPost
    title="How Much Do Real Estate Agents Make? Commission, Splits, and Real Numbers"
    metaDesc="Agent income is almost entirely commission-based, and the headline percentage isn't what agents actually take home. Here's how commission splits really work and what agents typically earn."
    slug="real-estate-careers/how-much-agents-make"
    datePublished="2026-10-08"
    category="Careers"
    quickAnswer="Real estate commissions typically run 5-6% of the sale price, split between the listing and buyer's agent, then split again between each agent and their brokerage. After the brokerage split and business expenses, a $400,000 sale might net an agent $4,000-$6,000 -- not the $12,000-$24,000 headline commission figure implies."
    faqs={[
      { q: "Is the full 6% commission going to one agent?", a: "No. That total typically splits between the listing agent's side and the buyer's agent's side -- commonly around 2.5-3% each. Each of those agents then splits their half again with their brokerage, often 70/30 or 80/20 in the agent's favor for experienced producers." },
      { q: "What is a brokerage split and how does it work?", a: "It's the percentage of each commission an agent keeps versus what goes to their brokerage, in exchange for the brokerage's brand, leads, training, and support. New agents often start at 50/50 splits and negotiate better splits (60/40, 70/30, or a flat desk fee model) as they close more volume." },
      { q: "What expenses come out of an agent's commission?", a: "MLS and association dues, marketing and lead generation costs, errors & omissions insurance, continuing education, transaction coordination fees, and often a per-transaction brokerage fee on top of the split -- these can easily consume 20-40% of an agent's gross commission income." },
      { q: "Do new agents make money right away?", a: "Rarely. Most new agents go 2-6 months without a closing while building their client base and pipeline, which is why many agents work part-time or keep savings reserves when starting out. First-year median income for new agents is typically well below the overall agent average." },
      { q: "How much do top-producing agents make?", a: "Top producers in strong markets can earn well into six or seven figures annually, but they represent a small percentage of all licensed agents. The median practicing agent earns considerably less -- commission real estate has a steep, long tail where a relatively small group of high-volume agents earns a disproportionate share of total commissions." },
    ]}
    relatedArticles={[
      { label: "Real Estate Agent vs Realtor vs Broker", href: "/blog/real-estate-careers/real-estate-agent-realtor-broker" },
      { label: "How to Become a Real Estate Agent or Broker", href: "/blog/real-estate-careers/become-realtor-broker" },
      { label: "Real Estate License Reciprocity", href: "/blog/real-estate-careers/license-reciprocity" },
    ]}
  >
    <p>
      "How much do real estate agents make" gets a misleading answer most of the time, because the headline commission percentage people hear isn't close to what actually lands in an agent's pocket. Two separate splits happen before an agent sees a dollar.
    </p>

    <h2>Split One: Listing Side vs Buyer Side</h2>
    <p>
      Total commission on a home sale — commonly in the 5-6% range, though this is negotiable and has become more so in recent years — typically divides between the agent representing the seller and the agent representing the buyer. A common structure splits this roughly evenly, though the exact split is negotiated per listing, not fixed by law or industry rule.
    </p>

    <h2>Split Two: Agent vs Brokerage</h2>
    <p>
      Every agent works under a brokerage, and that brokerage takes a cut in exchange for the brand, compliance oversight, office resources, and often leads or training. Common structures:
    </p>
    <ul>
      <li><strong>50/50 split</strong> — typical for newer agents at traditional brokerages</li>
      <li><strong>70/30 or 80/20</strong> — common for agents with a consistent track record who've negotiated a better split</li>
      <li><strong>Flat fee / 100% commission models</strong> — the agent keeps nearly all commission but pays a flat monthly desk fee or per-transaction fee instead of a percentage split</li>
    </ul>

    <div className="callout">
      <strong>Worked example: $400,000 home sale</strong>
      <ul>
        <li>Total commission at 5.5%: $22,000</li>
        <li>Listing agent's side (2.75%): $11,000</li>
        <li>After a 60/40 brokerage split: Agent keeps $6,600</li>
        <li>After marketing, MLS fees, and other business expenses: roughly $5,000-$5,500 net</li>
      </ul>
    </div>

    <h2>What Comes Out Before Take-Home Pay</h2>
    <ul>
      <li>MLS and local association dues</li>
      <li>Errors & omissions (E&O) insurance</li>
      <li>Marketing costs — signage, photography, online ads, direct mail</li>
      <li>Transaction coordination fees</li>
      <li>Continuing education required for license renewal</li>
      <li>Self-employment taxes, since most agents are independent contractors, not employees</li>
    </ul>

    <h2>Why the Income Distribution Is So Uneven</h2>
    <p>
      Real estate commission income follows a steep curve: a relatively small percentage of agents — typically those with years of experience, strong referral networks, and consistent lead generation systems — close a large share of total transactions and earn well above the median. New agents and part-time agents make up a much larger share of license holders but close far fewer deals, which is why "average agent income" statistics can be misleading without breaking down experience level and transaction volume.
    </p>
  </BlogPost>
);

export default HowMuchAgentsEarn;
