import TopicPage from "@/components/TopicPage";

const ContractsAssignmentFees = () => (
  <TopicPage
    title="Wholesale Contracts & Assignment Fees: What You Need to Know"
    metaDesc="How real estate wholesale contracts work — purchase agreements, assignment contracts, double closings, structuring your fee, and the legal compliance issues wholesalers can't afford to ignore."
    slug="/real-estate-wholesaling/contracts-assignment-fees"
    datePublished="2026-02-13"
    parentLabel="Real Estate Wholesaling"
    parentHref="/real-estate-wholesaling"
    intro="Contracts are what transform a verbal agreement with a motivated seller into a legally enforceable deal you can assign to a buyer. Getting this part wrong — using improperly drafted agreements, skipping required disclosures, or misrepresenting your role — can kill deals, expose you to liability, or violate state licensing laws. Here's what you actually need to understand before you start putting properties under contract."
    sections={[
      {
        heading: "The Purchase and Sale Agreement",
        content: "The purchase agreement is your contract with the seller. It specifies the purchase price, earnest money deposit, closing date, contingencies, and — critically — whether you can assign the contract to another buyer. To wholesale legally, you need either an explicit assignment clause ('Buyer may assign this contract at any time') or the phrase 'and/or assigns' after your name as the buyer. Without that language, you may not have the legal right to transfer your position in the contract to your end buyer. Use a contract template reviewed by a local real estate attorney, not one you downloaded from a random website. The few hundred dollars that review costs is worth it.",
        links: [
          { label: "LegalZoom — Real Estate Contract Resources", url: "https://www.legalzoom.com/real-estate" },
          { label: "Rocket Lawyer — Legal Document Tools", url: "https://www.rocketlawyer.com/" },
        ],
      },
      {
        heading: "The Assignment Contract",
        content: "The assignment contract is a separate agreement between you and your end buyer. It transfers your contractual rights in the purchase agreement to them, in exchange for your assignment fee. The original purchase contract between you and the seller stays in place — the buyer simply steps into your position and closes directly with the seller. The assignment contract should specify the original contract being assigned, the assignment fee amount, when and how the fee is paid (usually at closing by the title company), and any conditions on the assignment.",
        links: [
          { label: "BiggerPockets: Wholesale Contract Guide", url: "https://www.biggerpockets.com/blog/wholesale-real-estate-contract" },
        ],
      },
      {
        heading: "How to Structure Your Assignment Fee",
        content: "Your assignment fee is the profit you collect for finding and contracting the deal. It's the difference between the price you agreed to pay the seller and the price the end buyer pays to take your position. On residential deals, fees typically run $5,000–$20,000 — though what's achievable depends entirely on the spread between your contract price and what buyers think the deal is worth at that ARV. Be straightforward about your fee with buyers — experienced investors expect it and factor it into their own underwriting. Surprising a buyer with a fee they didn't know about at closing is a fast way to destroy trust and your reputation.",
        links: [],
      },
      {
        heading: "Double Closings as an Alternative",
        content: "Sometimes an assignment isn't the right structure: the original contract may prohibit assignment, or you have reasons to keep your profit margin private, or a lender or title company involved in the buyer's transaction won't accept an assignment. In those cases, a double closing — also called a simultaneous close — involves two separate transactions. First you close with the seller (A-B transaction), then immediately close with your buyer (B-C transaction). This requires transactional funding — short-term bridge money that covers your closing with the seller for the hours until your buyer funds close. Transactional funding typically costs 1–2% of the purchase price and is a legitimate tool, not a workaround.",
        links: [
          { label: "Best Transactional Funding", url: "https://www.besttransactionalfunding.com/" },
          { label: "Fund That Flip — Bridge Lending", url: "https://www.fundthatflip.com/" },
        ],
      },
      {
        heading: "Legal Compliance: What You Must Get Right",
        content: "Three legal issues wholesalers get into trouble with most often: (1) Marketing properties you don't own as if you're the seller rather than a contract holder — this is the core of the licensing debate. Market your equitable interest, not the property. (2) Failing to make required disclosures to sellers about your intent to assign the contract — several states mandate this. (3) Using contracts that don't actually give you assignment rights. Beyond these, never misrepresent your role, inflate ARV to sellers to justify a purchase price that won't actually work for buyers, or pressure sellers into signing contracts they don't understand. Work with a real estate attorney in your market from the start — not after something goes wrong.",
        links: [
          { label: "Find a Real Estate Attorney via Avvo", url: "https://www.avvo.com/real-estate-lawyer" },
          { label: "Nolo — Real Estate Law Resources", url: "https://www.nolo.com/legal-encyclopedia/real-estate" },
        ],
      },
    ]}
    faqs={[
      {
        q: "What is an assignment fee and how is it paid?",
        a: "An assignment fee is the profit you earn for finding the deal and assigning your contract rights to an end buyer. It's calculated as the difference between your contract price with the seller and the price the buyer pays to take over your position. The fee is typically collected at the closing table — the title company pays you from the buyer's funds as part of the settlement statement. You don't need to bring money to closing; the transaction funds the fee.",
      },
      {
        q: "Do I need a real estate attorney to wholesale?",
        a: "You're not legally required to use an attorney in most states, but it's genuinely important — especially when you're starting out. A local real estate attorney can review your purchase agreement and assignment contract templates, advise you on state-specific disclosure requirements, and tell you what's currently legally permissible in your market given how quickly wholesale regulations are evolving. A few hundred dollars upfront to do this correctly is far cheaper than a compliance problem later.",
      },
      {
        q: "What's the difference between an assignment and a double closing?",
        a: "In an assignment, you never actually close on the property — you transfer your contract rights to the buyer, who closes directly with the seller. The transaction shows up on the settlement statement and your fee is visible to both parties. In a double closing, you formally purchase the property in the A-B transaction, then immediately resell it in the B-C transaction. Your profit is not visible to either the original seller or the end buyer since there are two separate closings. Double closings work when assignment isn't available or when you need to protect your fee from scrutiny.",
      },
    ]}
  />
);

export default ContractsAssignmentFees;
