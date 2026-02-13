import TopicPage from "@/components/TopicPage";

const LeadGeneration = () => (
  <TopicPage
    title="Real Estate Lead Generation: Proven Strategies That Work"
    metaDesc="Discover the best real estate lead generation strategies including online marketing, direct mail, cold calling, SEO, and social media for agents and investors."
    parentLabel="Real Estate Marketing"
    parentHref="/real-estate-marketing"
    intro="Lead generation is the lifeblood of any real estate business. Whether you're an agent looking for buyers and sellers or an investor seeking motivated sellers, having a consistent flow of qualified leads determines your success. Here are the most effective strategies."
    sections={[
      {
        heading: "SEO and Content Marketing",
        content: "Create a website optimized for local search terms like 'sell my house fast [city]' or '[city] real estate agent.' Publish blog content answering common questions your target audience searches for. Over time, SEO generates free, high-intent organic leads that convert better than paid traffic.",
        links: [
          { label: "Carrot – Investor Websites", url: "https://www.carrot.com/" },
          { label: "Google Search Console", url: "https://search.google.com/search-console" },
          { label: "Ahrefs – Keyword Research", url: "https://ahrefs.com/" },
        ],
      },
      {
        heading: "Pay-Per-Click (PPC) Advertising",
        content: "Google Ads and Facebook Ads let you get in front of motivated prospects immediately. Google Ads captures high-intent searchers, while Facebook Ads allows precise demographic and behavioral targeting. Start with a small budget, test different ad copy and audiences, and scale what works.",
        links: [
          { label: "Google Ads", url: "https://ads.google.com/" },
          { label: "Facebook Ads Manager", url: "https://www.facebook.com/business/ads" },
        ],
      },
      {
        heading: "Direct Mail Marketing",
        content: "Targeted direct mail to specific property owner lists remains highly effective for investors and agents. Consistency is crucial — most sellers respond after the 3rd to 7th mailing. Use handwritten-style letters, postcards, or yellow letters for the best response rates.",
        links: [
          { label: "Yellow Letters Complete", url: "https://www.yellowletterscomplete.com/" },
          { label: "ListSource – Property Lists", url: "https://www.listsource.com/" },
        ],
      },
      {
        heading: "Social Media Marketing",
        content: "Build your brand and generate leads through Instagram, Facebook, YouTube, and TikTok. Share market updates, success stories, educational content, and behind-the-scenes looks at your business. Social media builds trust and keeps you top of mind when your audience is ready to act.",
        links: [
          { label: "Canva – Social Media Graphics", url: "https://www.canva.com/" },
          { label: "Later – Social Scheduling", url: "https://later.com/" },
        ],
      },
      {
        heading: "Referral and Networking Strategies",
        content: "Word-of-mouth referrals are the highest-converting lead source in real estate. Build a referral network with past clients, other agents, lenders, contractors, and attorneys. Attend local events, join REIA groups, and always provide exceptional service that generates organic referrals.",
        links: [
          { label: "National REIA", url: "https://www.nationalreia.org/" },
        ],
      },
    ]}
    faqs={[
      { q: "What is the best lead generation strategy for new real estate agents?", a: "Start with your personal network (sphere of influence), open houses, and social media. As your budget grows, add Google Ads and a content-optimized website for long-term organic lead generation." },
      { q: "How much should I spend on real estate lead generation?", a: "Most successful agents and investors spend 10-20% of their gross commission income on lead generation. Start with $500-$1,000/month and reinvest as your business grows." },
      { q: "How do I convert more leads into deals?", a: "Speed to lead is critical — respond within 5 minutes. Use a CRM to track follow-ups, nurture leads with drip campaigns, and focus on building relationships rather than hard-selling." },
    ]}
  />
);

export default LeadGeneration;
