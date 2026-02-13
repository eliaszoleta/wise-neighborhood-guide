import TopicPage from "@/components/TopicPage";

const ColdCallingSMS = () => (
  <TopicPage
    title="Cold Calling & SMS Marketing for Real Estate"
    metaDesc="Master real estate cold calling and SMS marketing. Scripts, compliance tips, tools, and strategies to generate motivated seller leads through outbound marketing."
    parentLabel="Real Estate Marketing"
    parentHref="/real-estate-marketing"
    intro="Cold calling and SMS marketing are direct outbound strategies that put you in front of property owners who may be ready to sell. While they require more effort than passive marketing, they can generate leads quickly and at a lower cost per deal than paid advertising."
    sections={[
      {
        heading: "Cold Calling Fundamentals",
        content: "Cold calling involves contacting property owners directly by phone to determine if they're interested in selling. Success requires a quality list (distressed properties, absentee owners, pre-foreclosures), a proven script, and consistent daily effort. Most cold callers reach 2-5 motivated leads per 100 calls.",
        links: [
          { label: "Mojo Dialer – Power Dialer", url: "https://www.mojosells.com/" },
          { label: "PhoneBurner", url: "https://www.phoneburner.com/" },
          { label: "BatchDialer", url: "https://batchdialer.com/" },
        ],
      },
      {
        heading: "Effective Cold Calling Scripts",
        content: "The best cold calling scripts are conversational, not salesy. Start by confirming you've reached the property owner, ask if they've considered selling, and listen to their situation. Focus on building rapport and understanding their motivation. Always end with a clear next step — schedule a viewing, send an offer, or set a follow-up call.",
        links: [
          { label: "BiggerPockets Cold Calling Guide", url: "https://www.biggerpockets.com/blog/cold-calling-real-estate" },
        ],
      },
      {
        heading: "SMS & Text Marketing Campaigns",
        content: "SMS marketing lets you reach large numbers of property owners with short, targeted messages. Response rates for SMS (15-25%) are significantly higher than direct mail (1-3%) or cold calling (3-5%). Use compliant messaging platforms that support opt-out functionality and A2P 10DLC registration.",
        links: [
          { label: "Launch Control – RE SMS Platform", url: "https://www.launchcontrol.us/" },
          { label: "REI Reply – Text Marketing", url: "https://www.reireply.com/" },
        ],
      },
      {
        heading: "TCPA Compliance and Legal Requirements",
        content: "All cold calling and SMS marketing must comply with the Telephone Consumer Protection Act (TCPA) and state regulations. Key requirements: maintain a Do Not Call list, respect opt-out requests immediately, limit calling hours, and register for A2P 10DLC for SMS campaigns. Non-compliance can result in fines of $500-$1,500 per violation.",
        links: [
          { label: "FTC Do Not Call Registry", url: "https://www.donotcall.gov/" },
          { label: "TCPA Compliance Guide", url: "https://www.fcc.gov/consumers/guides/stop-unwanted-robocalls-and-texts" },
          { label: "A2P 10DLC Registration", url: "https://www.campaignregistry.com/" },
        ],
      },
      {
        heading: "Building Your Calling Lists",
        content: "Target lists are everything in outbound marketing. Focus on high-motivation categories: pre-foreclosures, tax delinquent properties, probate/inherited homes, absentee owners with equity, and code violations. Skip trace these lists to get accurate phone numbers before calling.",
        links: [
          { label: "PropStream – Pull Lists", url: "https://www.propstream.com/" },
          { label: "BatchLeads – Skip Tracing", url: "https://batchleads.io/" },
        ],
      },
    ]}
    faqs={[
      { q: "Is cold calling still effective for real estate?", a: "Yes. Cold calling remains one of the most cost-effective lead generation strategies, especially for investors and wholesalers. The key is using quality lists, consistent daily effort, and a conversational approach." },
      { q: "Is it legal to send text messages to property owners?", a: "Yes, but you must comply with TCPA regulations. Use a compliant SMS platform, register for A2P 10DLC, include opt-out options, and never send messages to numbers on the Do Not Call list." },
      { q: "How many calls should I make per day?", a: "Most full-time cold callers make 100-200 dials per day using a power dialer. Part-time callers should aim for at least 50 dials per session to see consistent results." },
    ]}
  />
);

export default ColdCallingSMS;
