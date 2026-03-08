import TopicPage from "@/components/TopicPage";

const FacebookGoogleAds = () => (
  <TopicPage
    title="Facebook & Google Ads for Real Estate: A Practical Guide"
    metaDesc="How to run Facebook and Google ad campaigns that generate real estate leads — targeting, budgets, ad copy, cost benchmarks, and how to tell if your campaigns are actually working."
    parentLabel="Real Estate Marketing"
    parentHref="/real-estate-marketing"
    intro="Paid digital advertising is the fastest way to generate real estate leads — you can have campaigns running and leads coming in within 24 hours. It's also the fastest way to burn through a budget without results if you don't understand what you're doing. Facebook and Google Ads serve very different purposes and attract different types of leads. Understanding the difference — and how to optimize each — is what separates profitable campaigns from expensive experiments."
    sections={[
      {
        heading: "Google Ads: High Intent, Higher Cost",
        content: "Google Ads shows your ads to people who are actively searching for something — 'sell my house fast Houston', 'real estate agent near me', 'we buy houses [city]'. That search intent is valuable because the person already knows they have a need. Conversion rates from Google Ads tend to be higher than Facebook for this reason. The tradeoff: competitive real estate keywords are expensive. Expect $20–$80+ per click on motivated seller keywords in competitive markets, and $50–$300+ per lead. To make Google Ads work, you need a landing page specifically designed for the keyword you're buying — not a generic homepage. A visitor who clicks 'sell my house fast' and lands on a page that says exactly that will convert at 2–5x the rate of someone landing on a generic site.",
        links: [
          { label: "Google Ads — Campaign Manager", url: "https://ads.google.com/" },
          { label: "Google Keyword Planner — Research Tool", url: "https://ads.google.com/home/tools/keyword-planner/" },
        ],
      },
      {
        heading: "Facebook and Instagram Ads: Lower Intent, More Reach",
        content: "Facebook Ads (which run across Facebook and Instagram) reach people who are not actively searching but match the demographic and behavioral profile you target. Real estate investors use Facebook to reach absentee homeowners, people with financial stress indicators, and homeowners in specific zip codes. Agents use it to build brand awareness and retarget website visitors. Because Facebook leads aren't actively searching when they see your ad, they require more follow-up and have lower initial conversion rates than Google leads — but the cost per lead is typically lower. A well-run Facebook campaign can generate motivated seller leads for $20–$80 each in many markets, compared to $100–$300+ on Google.",
        links: [
          { label: "Meta Ads Manager", url: "https://www.facebook.com/business/ads" },
          { label: "Meta Business Suite", url: "https://business.facebook.com/" },
        ],
      },
      {
        heading: "Setting Up a Campaign That Has a Chance",
        content: "The biggest mistake beginners make with real estate ads: sending traffic to a homepage instead of a dedicated landing page, using ad copy that's too vague, and setting budgets too low to generate enough data. For Google: start with exact match and phrase match keywords rather than broad match — you'll waste less money on irrelevant searches. For Facebook: start with a 30–50 mile radius around your market, a custom audience based on homeowner demographic data, and simple direct ad copy that addresses a specific pain point ('Need to sell your house fast in [City]? Get a fair cash offer in 24 hours.'). Set a minimum $30–$50/day budget for at least 30 days before drawing conclusions about what's working.",
        links: [
          { label: "Carrot — Real Estate Landing Pages", url: "https://www.carrot.com/" },
        ],
      },
      {
        heading: "Retargeting: The Ad Strategy Most People Skip",
        content: "Retargeting shows ads to people who already visited your website but didn't fill out a form. These are some of the cheapest, highest-converting ad impressions available — the person already showed interest by visiting your site. A motivated seller who visited your 'cash offer' page and left without submitting is a warm lead. Showing them a retargeting ad on Facebook ('Still thinking about selling? We're ready when you are.') re-engages them at a fraction of the cost of finding a new visitor. Set up a Facebook Pixel on your website from day one so you're building a retargeting audience even before you launch retargeting campaigns.",
        links: [
          { label: "Facebook Pixel Setup Guide", url: "https://www.facebook.com/business/help/952192354843755" },
        ],
      },
      {
        heading: "Measuring What Actually Matters",
        content: "Vanity metrics — impressions, clicks, click-through rate — don't tell you whether your ad campaign is profitable. What matters: cost per lead (total spend ÷ number of leads), lead-to-appointment rate, appointment-to-contract rate, and ultimately cost per closed deal. Track these numbers for every campaign separately. Most agents and investors run Google and Facebook simultaneously but measure them as a combined budget — which means they can't tell which one is actually working. Separate campaigns, separate tracking, separate landing pages.",
        links: [
          { label: "Google Analytics 4 — Track Conversions", url: "https://analytics.google.com/" },
        ],
      },
    ]}
    faqs={[
      {
        q: "How much should I spend on Google or Facebook Ads for real estate?",
        a: "For Google Ads targeting motivated sellers in a competitive market, $1,500–$3,000/month is the floor below which you may not generate enough lead volume to close a deal. Facebook Ads can work at lower budgets — $500–$1,000/month — but expect a learning period of 4–6 weeks before the algorithm optimizes and results stabilize. Spending less than those amounts isn't necessarily wrong, but set realistic expectations about how many leads you'll generate.",
      },
      {
        q: "Should I run Google Ads or Facebook Ads first?",
        a: "If your primary goal is motivated seller leads, start with Google — the intent is higher and conversion is more predictable, even if costs are higher. If your goal is agent brand building or reaching homeowners who aren't actively searching, Facebook is better suited. Many successful operations run both simultaneously but with separate budgets and objectives. If you're starting with a limited budget, pick one, master it, measure it, then add the second.",
      },
      {
        q: "Why are my real estate ads getting clicks but no leads?",
        a: "The most common cause is a landing page that doesn't match what the ad promised. If someone clicks an ad about cash offers and lands on a generic homepage, they leave. The second most common cause is a form that asks for too much information — every additional field reduces submission rates. A name, phone number, and property address are enough for a first conversion. Make it easy. Test your own landing page on mobile, since most real estate ad traffic now comes from phones.",
      },
    ]}
  />
);

export default FacebookGoogleAds;
