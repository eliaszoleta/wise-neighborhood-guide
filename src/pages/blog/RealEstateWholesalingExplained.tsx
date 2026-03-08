import TopicPage from "@/components/TopicPage";

const RealEstateWholesalingExplained = () => (
  <TopicPage
    title="Real Estate Wholesaling Explained: How It Works Step by Step"
    metaDesc="Wholesaling is finding underpriced properties, getting them under contract, and selling that contract to an investor for a fee. Here's a complete explanation of how the process works."
    parentLabel="Blog"
    parentHref="/blog"
    intro="Real estate wholesaling gets pitched as an easy path to cash without needing credit or capital. The reality is more nuanced: it's a legitimate and potentially lucrative business model, but it requires real skill in marketing, negotiation, and deal analysis. Here's how it actually works — without the hype."
    sections={[
      {
        heading: "The Core Concept",
        content: "A wholesaler finds a property that's priced below market value — usually because the seller is motivated by financial distress, a pending foreclosure, an inherited property they don't want to manage, or a condition issue that disqualifies the property from conventional financing. The wholesaler puts the property under contract at the below-market price, then sells (assigns) that contract to an end buyer — typically a fix-and-flip investor or landlord — for a higher price. The difference between the contract price and the assignment price is the wholesaler's fee. The wholesaler never takes ownership of the property. The end buyer closes with the original seller. The wholesaler's role is to create a connection between a motivated seller and an investor buyer, and to capture value in the spread.",
        links: [],
      },
      {
        heading: "Finding Motivated Sellers",
        content: "This is where most of the work in wholesaling happens. A motivated seller is someone who has a compelling reason to sell quickly and at a price below what the open market would offer. Common sources include: direct mail to absentee owners, pre-foreclosures, vacant properties, and inherited properties; cold calling lists of distressed property owners; driving for dollars (physically identifying vacant or distressed properties in target neighborhoods); online ads targeting homeowners who need to sell fast; and referral networks including real estate attorneys, estate planners, and property managers. Most motivated sellers are not going to come to you — you have to build the systems to find them consistently. Marketing is the core engine of a wholesaling business, and it requires consistent investment of both time and money.",
        links: [],
      },
      {
        heading: "Analyzing the Deal and Making Offers",
        content: "Once you have a potentially motivated seller, you need to determine whether the property can be acquired at a price that leaves enough room for your fee and an end buyer's profit. The starting point is the after-repair value (ARV) — what the property will be worth after it's fully renovated. From ARV, subtract estimated renovation costs, then apply your buyer's required margin (typically 70% of ARV), then subtract your assignment fee. That's your maximum offer. Example: ARV $200,000, rehab $40,000, 70% formula gives a max investor cost of $100,000. If you want a $10,000 fee, you can offer no more than $90,000 to the seller. Underestimate ARV or underestimate repairs, and you either can't sell the contract or have to reduce your fee to make it work.",
        links: [],
      },
      {
        heading: "Assigning the Contract and Closing",
        content: "Once you have a signed purchase agreement with the seller, you market the deal to your buyers list — investors who have told you what types of properties they buy and in which areas. You present the deal with your analysis: purchase price, estimated ARV, estimated repairs, and photos. Interested buyers typically do a quick walkthrough before committing. When a buyer agrees, you sign an assignment agreement that transfers your rights in the purchase contract to them for your fee. The buyer then closes with the seller using the original contract terms. Your assignment fee is typically paid at closing — either from the buyer directly or through escrow. Some deals are structured as double closes (where the wholesaler briefly takes title) rather than assignments — this is sometimes necessary when the original purchase contract prohibits assignment.",
        links: [],
      },
    ]}
    faqs={[
      {
        q: "How much can you make wholesaling real estate?",
        a: "Assignment fees on residential deals typically range from $5,000 to $20,000, with some deals yielding more in expensive markets or on larger properties. Full-time wholesalers with consistent marketing systems typically close 2–4 deals per month. At $8,000 average fee and 3 deals/month, that's $24,000/month gross — before marketing costs, software, team, and other business expenses. New wholesalers should plan for 2–4 months before closing their first deal as they build their marketing pipeline and seller relationships.",
      },
      {
        q: "Do I need a license to wholesale?",
        a: "A real estate license is not required for wholesaling in most states, but the legal landscape is evolving. The key legal distinction is that you're assigning your contractual right to purchase (your equitable interest) — not acting as an agent marketing or selling a property you don't own for someone else. Several states have added requirements around how wholesale deals can be marketed and what disclosures must be made to sellers. An attorney familiar with investor transactions in your state is worth consulting before you start.",
      },
      {
        q: "What's the difference between wholesaling and flipping?",
        a: "Flipping requires you to buy the property, renovate it, and sell it — you take on ownership, renovation risk, and market risk for a larger profit. Wholesaling requires you to find the deal and transfer the contract — you take on marketing and negotiation work but not renovation or ownership risk, for a smaller fee. Flipping typically generates higher per-deal profit; wholesaling generates faster, lower-risk income but requires constant deal flow to maintain revenue.",
      },
    ]}
  />
);

export default RealEstateWholesalingExplained;
