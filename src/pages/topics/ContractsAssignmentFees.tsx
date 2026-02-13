import TopicPage from "@/components/TopicPage";

const ContractsAssignmentFees = () => (
  <TopicPage
    title="Wholesale Contracts & Assignment Fees Explained"
    metaDesc="Understand real estate wholesale contracts, assignment agreements, and how to structure assignment fees. Legal templates and best practices for wholesalers."
    parentLabel="Real Estate Wholesaling"
    parentHref="/real-estate-wholesaling"
    intro="Contracts are the legal backbone of every wholesale deal. Understanding purchase agreements, assignment contracts, and how to structure your fees protects you legally and ensures profitable transactions. Here's everything you need to know."
    sections={[
      {
        heading: "The Purchase and Sale Agreement",
        content: "The purchase agreement is the contract between you (the wholesaler) and the seller. It outlines the purchase price, earnest money, closing timeline, and contingencies. Always include an assignment clause or an 'and/or assigns' designation after your name so you can legally transfer the contract to your end buyer.",
        links: [
          { label: "LegalZoom – RE Contract Templates", url: "https://www.legalzoom.com/real-estate" },
          { label: "Rocket Lawyer – Legal Documents", url: "https://www.rocketlawyer.com/" },
        ],
      },
      {
        heading: "The Assignment Contract",
        content: "The assignment contract is a separate agreement between you and your end buyer. It transfers your rights in the purchase agreement to the buyer for an assignment fee. The original contract terms remain the same — the buyer simply steps into your position and closes directly with the seller.",
        links: [
          { label: "Assignment Contract Template", url: "https://www.biggerpockets.com/blog/wholesale-real-estate-contract" },
        ],
      },
      {
        heading: "How to Structure Assignment Fees",
        content: "Your assignment fee is the difference between your contract price and what the end buyer pays. Most wholesale fees range from $5,000 to $15,000, though higher spreads are possible on larger deals. Be transparent about your fee — experienced buyers expect it and price it into their calculations.",
        links: [],
      },
      {
        heading: "Double Closings as an Alternative",
        content: "If you don't want to disclose your assignment fee, or the contract doesn't allow assignment, you can use a double closing (also called a simultaneous close). You close with the seller first (A-B), then immediately close with your buyer (B-C). This requires transactional funding, which is short-term lending specifically for this purpose.",
        links: [
          { label: "Best Transactional Funding", url: "https://www.besttransactionalfunding.com/" },
          { label: "Fund That Flip", url: "https://www.fundthatflip.com/" },
        ],
      },
      {
        heading: "Legal Considerations and Compliance",
        content: "Always work with a real estate attorney familiar with wholesaling in your state. Some states have specific disclosure requirements. Never misrepresent yourself as the owner of a property you have under contract. Use proper contracts and maintain compliance with all local, state, and federal regulations.",
        links: [
          { label: "Find a Real Estate Attorney", url: "https://www.avvo.com/real-estate-lawyer" },
          { label: "NOLO – Real Estate Law", url: "https://www.nolo.com/legal-encyclopedia/real-estate" },
        ],
      },
    ]}
    faqs={[
      { q: "What is an assignment fee in wholesaling?", a: "An assignment fee is the profit you earn for finding and contracting a deal, then assigning your contract rights to an end buyer. It's the difference between your contract price and the price the buyer pays." },
      { q: "Do I need an attorney to wholesale real estate?", a: "While not always legally required, it's strongly recommended to work with a real estate attorney, especially when starting out. They can review your contracts and ensure compliance with state laws." },
      { q: "What is a double closing?", a: "A double closing involves two separate transactions: you buy from the seller (A-B transaction) and immediately sell to your buyer (B-C transaction). This keeps your profit private and works when contracts don't allow assignment." },
    ]}
  />
);

export default ContractsAssignmentFees;
