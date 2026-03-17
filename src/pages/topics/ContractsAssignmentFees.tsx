import TopicPage from "@/components/TopicPage";

const ContractsAssignmentFees = () => (
  <TopicPage
    title="Wholesale Contracts & Assignment Fees: What Every Wholesaler Must Know"
    metaDesc="How real estate wholesale contracts work — purchase agreements with assignment clauses, assignment contracts, double closings, how to structure your fee, and the legal compliance requirements wholesalers can't afford to ignore."
    slug="/real-estate-wholesaling/contracts-assignment-fees"
    datePublished="2026-02-13"
    dateModified="2026-03-17"
    parentLabel="Real Estate Wholesaling"
    parentHref="/real-estate-wholesaling"
    intro="Contracts are what transform a verbal agreement with a motivated seller into a legally enforceable deal you can assign to a buyer for a profit. Getting this part wrong — using improperly drafted agreements, skipping required disclosures, or misrepresenting your role — can kill deals, expose you to personal liability, or put you in violation of state licensing laws. Here's what every wholesaler needs to understand about purchase contracts, assignment agreements, double closings, and legal compliance before putting a property under contract."
    sections={[
      {
        heading: "The Purchase and Sale Agreement",
        content: "The purchase agreement is your contract with the seller. It specifies the purchase price, earnest money deposit, inspection period, closing date, and — critically — whether the contract can be assigned. To wholesale legally, your contract must include either an explicit assignment clause ('Buyer may assign this contract without seller consent') or the notation 'and/or assigns' after your name as the buyer. Without that language, you may not have the legal right to transfer your position in the contract to your end buyer. The earnest money deposit (typically $100–$1,000 on wholesale deals) demonstrates serious intent and is at risk if you can't close or find a buyer. Use a contract template reviewed by a local real estate attorney — not one downloaded from a random website. The few hundred dollars that review costs prevents far more expensive problems.",
        links: [
          { label: "LegalZoom — Real Estate Contract Resources", url: "https://www.legalzoom.com/real-estate" },
          { label: "Rocket Lawyer — Legal Document Tools", url: "https://www.rocketlawyer.com/" },
        ],
      },
      {
        heading: "The Assignment Contract",
        content: "The assignment contract is a separate agreement between you and your end buyer that transfers your contractual rights in the purchase agreement to them in exchange for your assignment fee. The original purchase contract between you and the seller remains in place — the buyer simply steps into your position and closes directly with the seller. The assignment contract should clearly specify: the original purchase contract being assigned and its key terms, the assignment fee amount and when it's payable (typically at closing from the buyer's funds), any conditions on the assignment, and representations that you actually hold the contract rights being assigned. Both you and the buyer should have the assignment contract reviewed before signing — this is a legally binding financial agreement.",
        links: [
          { label: "BiggerPockets: Wholesale Real Estate Contract Guide", url: "https://www.biggerpockets.com/blog/wholesale-real-estate-contract" },
        ],
      },
      {
        heading: "How to Structure and Disclose Your Assignment Fee",
        content: "Your assignment fee is the profit you earn for finding the deal and transferring your contract position to the end buyer. It equals the difference between your contract price with the seller and the total amount the buyer pays. On residential deals, fees typically run $5,000–$20,000, though what's achievable depends entirely on the ARV spread you negotiated and local buyer competition. Be transparent about your fee with buyers — experienced investors expect it and factor it into their underwriting. Attempting to hide or ambiguously structure your fee creates trust problems. The assignment fee typically appears on the settlement statement and is paid to you by the title company from buyer funds at closing — you don't need to bring money to closing.",
        links: [],
      },
      {
        heading: "Double Closings as an Alternative to Assignment",
        content: "A double closing (also called a simultaneous close or A-B/B-C transaction) involves two separate transactions. First you close on the property with the seller (A-B transaction), then immediately close with your buyer (B-C transaction). This requires transactional funding — short-term bridge money that covers your purchase with the seller for the hours until your buyer's funds close. Transactional funding typically costs 1–2% of the purchase price or a flat fee and is widely available through specialist lenders. Double closings are appropriate when: the original contract prohibits assignment, you need to keep your profit margin private from the seller and/or buyer, the end buyer's lender won't accept an assignment, or the title company won't process assignment closings. Double closings are more expensive (two sets of closing costs) but provide more flexibility.",
        links: [
          { label: "Best Transactional Funding", url: "https://www.besttransactionalfunding.com/" },
          { label: "Fund That Flip — Bridge Lending", url: "https://www.fundthatflip.com/" },
          { label: "Double Closing Full Guide — Blog Post", url: "/blog/wholesaling/double-closing-real-estate" },
        ],
      },
      {
        heading: "Legal Compliance Requirements You Cannot Ignore",
        content: "Three compliance areas where wholesalers most commonly get into trouble: (1) Marketing properties as if you're the seller rather than a contract holder. You're marketing your equitable interest in the contract, not the property. Language matters: 'we have a home under contract' is accurate; 'we're selling this home' is not. (2) Failing to disclose your intent to assign the contract to sellers. Several states mandate specific disclosure language in purchase agreements used by wholesalers. (3) Using contracts that don't actually include assignment rights — which makes every deal you thought you could wholesale legally unenforceable. Additionally: never misrepresent ARV to sellers to justify a price that won't actually work for buyers, and never pressure sellers into contracts they don't understand. Work with a local real estate attorney from the start, not after something goes wrong.",
        links: [
          { label: "Find a Real Estate Attorney via Avvo", url: "https://www.avvo.com/real-estate-lawyer" },
          { label: "Nolo — Real Estate Law Resources", url: "https://www.nolo.com/legal-encyclopedia/real-estate" },
        ],
      },
    ]}
    faqs={[
      {
        q: "What is an assignment fee and how is it paid?",
        a: "An assignment fee is your profit for finding the deal and assigning your contractual rights to the end buyer. It's calculated as the difference between your contract price with the seller and the total amount the buyer pays to step into your position. The fee is typically collected at closing — the title company pays it from the buyer's funds as part of the settlement statement. You don't bring money to closing; the transaction funds your fee.",
      },
      {
        q: "Do I need a real estate attorney to wholesale?",
        a: "You're not legally required to use an attorney in most states, but it's highly advisable — especially early on. A local real estate attorney can review your purchase agreement and assignment contract templates, advise on state-specific disclosure requirements, and tell you what's currently legally permissible given how quickly wholesale regulations evolve. The cost of proper legal setup ($300–$800) is far less than the cost of a compliance problem, a failed deal, or a state licensing board complaint.",
      },
      {
        q: "What's the difference between an assignment and a double closing?",
        a: "In an assignment, you never close on the property — you transfer your contract rights to the buyer, who closes directly with the seller. Your fee is visible on the settlement statement to both parties. In a double closing, you formally purchase the property (A-B transaction) and immediately resell it (B-C transaction), with your profit private from both the original seller and end buyer. Double closings work when assignment isn't available or when profit margin privacy is important. They cost more (two closings) but offer more deal structure flexibility.",
      },
      {
        q: "What should earnest money be on a wholesale deal?",
        a: "Earnest money on wholesale deals typically runs $100–$1,000. The amount signals serious intent to the seller. Keep it as low as the seller will accept — your earnest money is at risk if you can't close or assign the deal before the closing deadline. Some sellers will ask for more; if you agree to higher earnest money, make sure your inspection and assignment contingencies give you a path to exit without forfeiting it if the deal doesn't come together.",
      },
      {
        q: "Can a seller cancel a wholesale contract?",
        a: "A properly executed purchase agreement is a binding contract — the seller can't simply cancel because they changed their mind or found a higher offer. However, sellers can attempt to rescind on various grounds (fraud, misrepresentation, mutual mistake) or simply refuse to close, in which case you'd have to decide whether to pursue specific performance or damages through the courts. In practice, most wholesalers work to renegotiate or release the contract rather than litigate against an unwilling seller. This is another reason why being fully transparent and ethical with sellers from the first conversation builds a more sustainable business.",
      },
    ]}
  />
);

export default ContractsAssignmentFees;
