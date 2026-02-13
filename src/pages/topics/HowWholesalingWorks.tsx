import TopicPage from "@/components/TopicPage";

const HowWholesalingWorks = () => (
  <TopicPage
    title="How Real Estate Wholesaling Works: A Complete Guide"
    metaDesc="Learn how real estate wholesaling works step by step. Understand the process of finding deals, getting contracts, and assigning them for profit without buying property."
    parentLabel="Real Estate Wholesaling"
    parentHref="/real-estate-wholesaling"
    intro="Real estate wholesaling is a strategy where you find deeply discounted properties, put them under contract, and then assign that contract to an end buyer for a fee — all without ever purchasing the property yourself. It's one of the lowest-barrier entry points into real estate investing."
    sections={[
      {
        heading: "The Wholesaling Process Step by Step",
        content: "Step 1: Find a motivated seller with a distressed property. Step 2: Negotiate a purchase price well below market value. Step 3: Put the property under contract. Step 4: Find a cash buyer willing to pay more than your contract price. Step 5: Assign the contract to the buyer and collect your assignment fee at closing. The entire process can take as little as 2-4 weeks.",
        links: [
          { label: "BiggerPockets: Wholesaling 101", url: "https://www.biggerpockets.com/guides/wholesaling" },
        ],
      },
      {
        heading: "Is Wholesaling Legal?",
        content: "Wholesaling is legal in all 50 states, but regulations vary. Some states require you to disclose that you're assigning the contract. A few states have added requirements around marketing properties you don't own. Always consult a local real estate attorney and understand your state's laws before starting.",
        links: [
          { label: "State Wholesaling Laws Overview", url: "https://www.biggerpockets.com/blog/is-wholesaling-real-estate-legal" },
          { label: "Find a Real Estate Attorney", url: "https://www.avvo.com/real-estate-lawyer" },
        ],
      },
      {
        heading: "How Much Can You Make Wholesaling?",
        content: "Wholesale assignment fees typically range from $5,000 to $20,000 per deal, though some deals can yield $30,000+. Your profit depends on how far below market value you negotiate the purchase price and the demand from your buyers list. Consistency and deal flow are key — most full-time wholesalers aim to close 2-4 deals per month.",
        links: [],
      },
      {
        heading: "Tools You Need to Get Started",
        content: "Successful wholesalers use CRM software to manage leads, skip tracing tools to find seller contact information, and contract templates for purchase agreements and assignment contracts. You'll also need marketing tools for lead generation — direct mail, driving for dollars apps, and digital ads.",
        links: [
          { label: "REISift – Wholesaling CRM", url: "https://www.reisift.io/" },
          { label: "BatchLeads – Skip Tracing", url: "https://batchleads.io/" },
          { label: "DealMachine – Driving for Dollars", url: "https://www.dealmachine.com/" },
        ],
      },
    ]}
    faqs={[
      { q: "Do I need money to start wholesaling?", a: "Very little. Your main costs are marketing to find deals and earnest money deposits (typically $100-$1,000). You don't need to buy the property or get a loan." },
      { q: "Do I need a real estate license to wholesale?", a: "In most states, no. However, some states require a license if you're marketing properties you don't own. Check your state's specific regulations." },
      { q: "How long does a wholesale deal take?", a: "From finding a deal to closing, a typical wholesale transaction takes 2-6 weeks depending on the buyer and title company timeline." },
    ]}
  />
);

export default HowWholesalingWorks;
