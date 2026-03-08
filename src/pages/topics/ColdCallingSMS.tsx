import TopicPage from "@/components/TopicPage";

const ColdCallingSMS = () => (
  <TopicPage
    title="Cold Calling & SMS Marketing for Real Estate: What Works in Practice"
    metaDesc="How to run effective real estate cold calling and SMS campaigns — list building, scripts, compliance with TCPA, dialers, and realistic performance benchmarks."
    parentLabel="Real Estate Marketing"
    parentHref="/real-estate-marketing"
    intro="Cold calling and SMS are direct outbound channels — you're reaching property owners who didn't raise their hand, which means you need high volume, thick skin, and consistent daily effort to make them work. They're not glamorous, and the rejection rate is high. But for investors and wholesalers willing to put in the work, these channels can generate motivated seller leads at a lower cost per deal than most digital advertising, particularly in markets where online competition is fierce."
    sections={[
      {
        heading: "Cold Calling: What It Actually Takes",
        content: "Cold calling for real estate means calling property owners from targeted lists — pre-foreclosures, tax delinquent properties, absentee owners, probate properties — to find those who are open to selling. Realistic performance benchmarks: most callers make 80–150 dials per day using a power dialer and reach 20–40 property owners who pick up. Of those, 2–5 will be worth a deeper conversation. Of those, maybe 1 every 2–3 days is genuinely motivated. That math means cold calling is a consistency play — the people who build sustainable deal flow from it call every working day, not when they feel like it. Hiring a VA to call on your behalf is a common scaling strategy once the system is working.",
        links: [
          { label: "Mojo Dialer — Power Dialing Platform", url: "https://www.mojosells.com/" },
          { label: "PhoneBurner — Outbound Calling Tool", url: "https://www.phoneburner.com/" },
          { label: "BatchDialer — Real Estate Dialer", url: "https://batchdialer.com/" },
        ],
      },
      {
        heading: "Scripting That Doesn't Sound Like a Script",
        content: "The goal of a cold call is not to pitch — it's to identify motivation and start a real conversation. Open by confirming you reached the right person and that you're calling about their property at [address]. Ask a simple, direct question about whether they'd consider selling. Then listen. The sellers who are actually motivated will often tell you exactly why they might want to sell if you give them the space to do it. The calls that fail are usually the ones where the caller is so focused on delivering their script that they stop listening. A conversational approach — asking questions, acknowledging what the seller says, asking follow-up questions — converts significantly better than a memorized pitch.",
        links: [
          { label: "BiggerPockets Cold Calling Guide", url: "https://www.biggerpockets.com/blog/cold-calling-real-estate" },
        ],
      },
      {
        heading: "SMS Marketing for Real Estate",
        content: "Texting property owners about potentially buying their home generates response rates that routinely outperform cold calling — 15–25% of texts receive some kind of response, versus 3–5% for calls that turn into actual conversations. The responses aren't always positive (expect some angry replies), but the volume of genuine conversations you can initiate per hour of effort is meaningfully higher than calling. The critical infrastructure requirement: any SMS campaign to people who haven't opted in to hear from you requires a compliant platform with opt-out functionality, A2P 10DLC registration, and adherence to TCPA regulations. This is not optional — non-compliance exposes you to fines of $500–$1,500 per violation.",
        links: [
          { label: "Launch Control — Real Estate SMS Platform", url: "https://www.launchcontrol.us/" },
          { label: "REI Reply — Text Marketing for Investors", url: "https://www.reireply.com/" },
        ],
      },
      {
        heading: "TCPA Compliance: The Part People Skip",
        content: "The Telephone Consumer Protection Act (TCPA) governs both cold calling and SMS marketing, and the real estate industry has seen significant enforcement actions in recent years. Key requirements: maintain and scrub against a Do Not Call list, immediately honor all opt-out requests, limit calling hours to 8am–9pm in the recipient's local time zone, and for SMS campaigns — register your business and campaign through A2P 10DLC with The Campaign Registry before sending at scale. Ignorance of these rules is not a defense. If you're using a compliant platform designed for real estate (Launch Control, REI Reply, BatchSMS), they'll handle most of the infrastructure — but you're still responsible for your lists and practices.",
        links: [
          { label: "FTC Do Not Call Registry", url: "https://www.donotcall.gov/" },
          { label: "FCC TCPA Compliance Guide", url: "https://www.fcc.gov/consumers/guides/stop-unwanted-robocalls-and-texts" },
          { label: "The Campaign Registry — A2P 10DLC", url: "https://www.campaignregistry.com/" },
        ],
      },
      {
        heading: "Building Effective Calling Lists",
        content: "Your list quality determines your results more than your script or your dialer. The highest-motivation categories for investor calling: pre-foreclosure and notice of default, tax delinquency (particularly properties 2+ years behind), probate and inherited properties, absentee owners with 40%+ equity, and properties with recent code violations. Pull lists from platforms like PropStream or BatchLeads, then skip trace to get current phone numbers before calling. Scrub your lists against the National DNC Registry before every campaign. A small, well-targeted list of 500 genuinely motivated prospects will outperform a generic list of 5,000 random homeowners every time.",
        links: [
          { label: "PropStream — Pull Property Lists", url: "https://www.propstream.com/" },
          { label: "BatchLeads — Skip Tracing and Lists", url: "https://batchleads.io/" },
        ],
      },
    ]}
    faqs={[
      {
        q: "Is cold calling still effective for real estate in 2025?",
        a: "Yes — the investors who do it consistently still generate deals from it. It's gotten harder as more people screen calls, but it's also gotten less competitive as digital advertising costs have pushed some operators away from outbound. The key word is 'consistently' — sporadic cold calling sessions don't produce results. Daily, systematic dialing to quality lists is what makes it work.",
      },
      {
        q: "Is it legal to text property owners about buying their home?",
        a: "You can legally text property owners, but it requires compliance with TCPA regulations. You must use a compliant A2P SMS platform, register your campaign through The Campaign Registry, honor opt-out requests immediately, and never send to numbers on the National DNC Registry. Platforms designed for real estate investors (Launch Control, REI Reply) are built with this compliance framework — starting there is significantly easier than trying to build TCPA compliance on top of a generic messaging tool.",
      },
      {
        q: "How many calls do I need to make to find a deal?",
        a: "Rough benchmarks for residential investor cold calling: 500–1,000 dials to find 1–2 genuinely motivated sellers worth pursuing. Of those, maybe 1 in 5–10 leads to a signed contract. Those numbers improve with better lists, better follow-up systems, and more experience identifying true motivation quickly. Track your own metrics from day one — your actual numbers may be better or worse depending on your market and approach, and you can only improve what you measure.",
      },
    ]}
  />
);

export default ColdCallingSMS;
