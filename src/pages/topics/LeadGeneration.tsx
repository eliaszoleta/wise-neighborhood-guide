import TopicPage from "@/components/TopicPage";

const LeadGeneration = () => (
  <TopicPage
    title="Real Estate Lead Generation: What Actually Works and What Doesn't"
    metaDesc="Honest breakdown of real estate lead generation strategies for agents and investors — SEO, PPC, direct mail, referrals, and social media with realistic expectations for each."
    parentLabel="Real Estate Marketing"
    parentHref="/real-estate-marketing"
    intro="Every real estate business lives or dies on its ability to generate leads — qualified buyers, sellers, or motivated property owners depending on your business model. The challenge is that there are dozens of lead generation methods, each with different costs, timelines, and conversion rates. Most agents and investors spread themselves too thin, half-heartedly trying five channels at once instead of mastering one or two. Here's a realistic breakdown of what works, what it costs, and what to expect."
    sections={[
      {
        heading: "SEO and Content Marketing: Slow, But the Best Long-Term Investment",
        content: "Building a website that ranks in Google for local real estate searches — 'sell my house fast [city]', 'homes for sale in [neighborhood]', '[city] real estate agent' — produces leads that are actively searching for exactly what you offer. Those leads convert at significantly higher rates than cold outreach because they found you, not the other way around. The catch: SEO takes 6–18 months to produce meaningful traffic. You won't generate leads from SEO next month. But a well-ranked website generates leads for years without ongoing ad spend. For investors, Carrot is a popular platform designed specifically for motivated seller SEO. For agents, a properly optimized IDX website with neighborhood-specific content is the foundation.",
        links: [
          { label: "Carrot — Investor Website Platform", url: "https://www.carrot.com/" },
          { label: "Google Search Console — Track Rankings", url: "https://search.google.com/search-console" },
          { label: "Ahrefs — Keyword Research Tool", url: "https://ahrefs.com/" },
        ],
      },
      {
        heading: "Pay-Per-Click Advertising: Leads Now, Cost Always",
        content: "Google Ads and Facebook Ads produce leads immediately, which is why most agents and investors start there. Google Ads capture people actively searching — high intent, more expensive. Facebook and Instagram Ads reach people who aren't necessarily searching but match a demographic profile — lower intent, cheaper CPL, requires more follow-up to convert. Real estate PPC is competitive and getting more expensive every year. Expect to spend $50–$200+ per lead depending on your market and how competitive your keywords are. The investors who make PPC profitable track every dollar: cost per lead by campaign, lead-to-appointment rate, appointment-to-contract rate, contract-to-close rate. Without that data, you're just spending money.",
        links: [
          { label: "Google Ads", url: "https://ads.google.com/" },
          { label: "Facebook Ads Manager", url: "https://www.facebook.com/business/ads" },
        ],
      },
      {
        heading: "Direct Mail: Consistent, Unglamorous, and It Still Works",
        content: "Direct mail to targeted property owner lists remains one of the most reliable lead generation channels for investors and — in the right markets — for agents targeting specific neighborhoods. The reasons it still works: most of your competition has moved to digital, so your physical mail faces less noise. Response rates of 0.5–2% mean high volume is required, but the leads that do respond are often genuinely motivated. The keys: list quality (distressed property categories outperform generic homeowner lists), consistency (most sellers respond after the 3rd–7th mailing, not the first), and tracking response by list segment so you can improve over time.",
        links: [
          { label: "Yellow Letters Complete — Direct Mail Service", url: "https://www.yellowletterscomplete.com/" },
          { label: "ListSource — Property Data Lists", url: "https://www.listsource.com/" },
        ],
      },
      {
        heading: "Social Media: Good for Brand; Mediocre for Direct Lead Generation",
        content: "Social media — Instagram, Facebook, YouTube, TikTok — builds brand awareness and keeps you top of mind with your audience over time. Occasional deals come directly from social media posts. But expecting consistent, high-volume lead generation from organic social content is usually a mistake, especially early on. Where social media genuinely helps: staying in contact with past clients and sphere of influence who might refer you, establishing credibility for people who found you through another channel and are now checking you out, and building an audience you can eventually retarget with paid ads.",
        links: [
          { label: "Canva — Social Media Graphics", url: "https://www.canva.com/" },
          { label: "Later — Social Scheduling Tool", url: "https://later.com/" },
        ],
      },
      {
        heading: "Referrals and Sphere of Influence: The Highest-Converting Channel",
        content: "Referrals from past clients, colleagues, and professional contacts convert at dramatically higher rates than any cold lead channel — often 3–5x higher. Someone referred to you already has a degree of trust that a cold Google Ad lead doesn't. Building a referral-generating business requires genuinely excellent service (so clients want to send people your way), staying in consistent contact with past clients (so they think of you when someone they know needs an agent or investor), and building professional relationships with attorneys, lenders, accountants, and other professionals who encounter real estate needs regularly.",
        links: [
          { label: "National REIA — Local Investor Groups", url: "https://www.nationalreia.org/" },
        ],
      },
    ]}
    faqs={[
      {
        q: "What is the best lead generation strategy for a new real estate agent?",
        a: "Start with your sphere of influence — people you already know. Tell every person you're connected to that you're now a real estate agent and ask for referrals. Open houses are another strong early channel because they put you in front of buyers who already raised their hand. Add social media to build visibility with your existing network. Once you have some income, invest in a content-optimized website for organic lead generation over time. New agents who try to start with expensive PPC campaigns before they have a conversion process in place usually waste money.",
      },
      {
        q: "How much should I spend on real estate lead generation?",
        a: "A commonly used benchmark is 10–20% of your gross commission income reinvested into lead generation. New agents and investors without commission income yet should set a fixed monthly budget they can sustain for at least 6 months — $500–$1,500/month depending on their market — and commit to one or two channels long enough to actually measure results. Switching channels every 4–6 weeks because you haven't gotten a deal yet is how most people fail at real estate marketing.",
      },
      {
        q: "How do I convert more leads into actual deals?",
        a: "Speed to lead is the single biggest conversion factor in digital lead generation — responding within 5 minutes increases conversion rates dramatically compared to waiting even an hour. Beyond speed, consistent follow-up over time (most leads convert on the 5th–12th contact, not the first), a CRM to manage that follow-up automatically, and a genuine focus on understanding the lead's situation before trying to sell them anything. The agents and investors who convert best ask more questions than they answer in early conversations.",
      },
    ]}
  />
);

export default LeadGeneration;
