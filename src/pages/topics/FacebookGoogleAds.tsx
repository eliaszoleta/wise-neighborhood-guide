import TopicPage from "@/components/TopicPage";

const FacebookGoogleAds = () => (
  <TopicPage
    title="Facebook & Google Ads for Real Estate: Complete Guide"
    metaDesc="Learn how to run profitable Facebook and Google ad campaigns for real estate. Targeting strategies, ad copy, budgets, and optimization tips for agents and investors."
    parentLabel="Real Estate Marketing"
    parentHref="/real-estate-marketing"
    intro="Paid digital advertising is one of the fastest ways to generate real estate leads at scale. Facebook and Google Ads each offer unique advantages — Google captures active searchers while Facebook lets you target specific demographics. Here's how to use both effectively."
    sections={[
      {
        heading: "Google Ads for Real Estate",
        content: "Google Ads places your listing at the top of search results for high-intent keywords like 'sell my house fast,' 'homes for sale in [city],' or 'real estate agent near me.' Use search campaigns for immediate lead capture and display campaigns for brand awareness. Focus on specific, local keywords to keep costs manageable.",
        links: [
          { label: "Google Ads – Get Started", url: "https://ads.google.com/" },
          { label: "Google Keyword Planner", url: "https://ads.google.com/home/tools/keyword-planner/" },
        ],
      },
      {
        heading: "Facebook & Instagram Ads",
        content: "Facebook's powerful targeting lets you reach homeowners by age, income, location, life events (recently married, new job), and interests. Use lead form ads to capture contact info directly on Facebook, or traffic ads to drive visitors to your website. Instagram Reels and Stories ads perform especially well for property showcases.",
        links: [
          { label: "Facebook Ads Manager", url: "https://www.facebook.com/business/ads" },
          { label: "Facebook Ad Library", url: "https://www.facebook.com/ads/library/" },
          { label: "Meta Business Suite", url: "https://business.facebook.com/" },
        ],
      },
      {
        heading: "Creating High-Converting Ad Copy",
        content: "Effective real estate ads focus on solving problems: 'Need to sell fast?', 'Tired of being a landlord?', 'Find your dream home in [city].' Use clear calls to action, social proof (reviews, closed deals), and urgency. Test multiple headlines and descriptions to find what resonates with your market.",
        links: [],
      },
      {
        heading: "Budgeting and Cost Per Lead",
        content: "Start with $500-$1,500/month per platform. Average cost per lead ranges from $10-$50 on Facebook and $20-$100 on Google, depending on your market and competition. Track your cost per acquisition (not just cost per lead) to understand true ROI. Scale spend on campaigns that convert to actual deals.",
        links: [
          { label: "Google Ads Budget Calculator", url: "https://ads.google.com/home/tools/keyword-planner/" },
        ],
      },
      {
        heading: "Tracking and Optimization",
        content: "Install the Facebook Pixel and Google conversion tracking on your website to measure which ads generate actual leads and deals. Review performance weekly, pause underperforming ads, and allocate budget toward your best-performing audiences and keywords. A/B test continuously for ongoing improvement.",
        links: [
          { label: "Facebook Pixel Setup", url: "https://www.facebook.com/business/help/952192354843755" },
          { label: "Google Analytics", url: "https://analytics.google.com/" },
        ],
      },
    ]}
    faqs={[
      { q: "Which is better for real estate: Google Ads or Facebook Ads?", a: "Both work well but for different purposes. Google captures people actively searching to buy or sell. Facebook targets people based on demographics and behavior before they're actively searching. Most successful businesses use both." },
      { q: "How much should I budget for real estate ads?", a: "Start with $500-$1,500/month per platform. This gives you enough data to optimize. Scale up once you've identified winning campaigns with a positive ROI." },
      { q: "What is a good cost per lead for real estate?", a: "For motivated seller leads: $20-$60 on Facebook, $30-$100 on Google. For buyer leads: $5-$20 on Facebook, $10-$40 on Google. These vary significantly by market." },
    ]}
  />
);

export default FacebookGoogleAds;
