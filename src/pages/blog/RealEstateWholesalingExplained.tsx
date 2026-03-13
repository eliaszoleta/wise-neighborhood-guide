import BlogPost from "@/components/BlogPost";

const RealEstateWholesalingExplained = () => (
  <BlogPost
    title="What Is Real Estate Wholesaling and How Does It Work?"
    metaDesc="Wholesaling means finding below-market properties, putting them under contract, and selling that contract to an investor for a fee — without ever owning the property. Here's the full process."
    slug="real-estate-wholesaling-explained"
    datePublished="2026-02-13"
    category="Wholesaling"
  >
    <p>
      Most people who get into real estate wholesaling have heard the same pitch: find a deal, flip the contract, collect a check — no money down, no risk, no repairs. The pitch isn't entirely wrong, but it leaves out the part where you spend several months doing a lot of work before any of that happens.
    </p>
    <p>
      Let's break down how wholesaling actually works, what the math looks like, and where people run into trouble.
    </p>

    <h2>The Core Concept</h2>
    <p>
      Wholesaling is the process of finding a property that can be purchased below market value, getting it under contract with the seller, and then assigning that contract to an end buyer — typically a fix-and-flip investor or landlord — for a fee. You never take title to the property. What you're selling is the right to purchase it.
    </p>
    <p>
      Your profit comes from the spread between your contracted purchase price and what the end buyer pays for the contract. If you have a property under contract at $95,000 and a buyer will pay $105,000 to take over that contract, you make $10,000. That's your assignment fee.
    </p>
    <div className="callout">
      The key distinction: you're assigning your equitable interest in the contract — not the property itself. You never own it, you never list it, and the transaction closes between the seller and your end buyer.
    </div>

    <h2>What "Motivated Seller" Actually Means</h2>
    <p>
      Every wholesaling course talks about finding "motivated sellers." But motivation isn't a personality trait — it's a circumstance. The sellers who will accept a significant discount on their property almost always have one of a few specific situations going on:
    </p>
    <ul>
      <li><strong>Probate or inherited properties.</strong> Someone inherited a house they didn't ask for, often out of state, often needing repairs. They want it gone more than they want full price.</li>
      <li><strong>Pre-foreclosure.</strong> The owner is behind on payments and would rather sell at a discount than let the bank take it.</li>
      <li><strong>Major deferred maintenance.</strong> Properties that need $40,000–$80,000 in work can't qualify for traditional financing. That limits the buyer pool dramatically and creates pricing pressure.</li>
      <li><strong>Divorce or estate situations.</strong> When life circumstances demand a quick, clean transaction, speed can matter more than maximizing the sale price.</li>
      <li><strong>Absentee landlords.</strong> An out-of-state owner with a problem tenant and a property they've neglected may just want out.</li>
    </ul>
    <p>
      You find these sellers through direct mail campaigns, cold calling, "driving for dollars" (mapping distressed-looking properties in target neighborhoods), and purchasing probate lead lists. All of these take consistent effort and, realistically, some upfront marketing spend.
    </p>

    <h2>Running the Numbers</h2>
    <p>
      The standard formula wholesalers use starts with the After Repair Value (ARV) — what the property will sell for after it's been fixed up. From there, you apply the 70% rule: the maximum an investor will typically pay is 70% of ARV minus the cost of repairs. That number is your ceiling. Your offer needs to come in under it to leave room for your fee.
    </p>
    <p>Here's a concrete example:</p>
    <ul>
      <li>ARV: $200,000</li>
      <li>Estimated rehab cost: $35,000</li>
      <li>70% of ARV: $140,000</li>
      <li>Subtract rehab: $140,000 − $35,000 = $105,000 (max investor would pay)</li>
      <li>Your target assignment fee: $10,000</li>
      <li>Maximum allowable offer (MAO): $95,000</li>
    </ul>
    <p>
      If you can't get the seller to $95,000 or below, the deal doesn't work as a wholesale. That's not a failure — that's just deal selection. Most leads won't become deals. The ratio that experienced wholesalers talk about is roughly 1 closed deal for every 20–30 motivated seller conversations.
    </p>

    <h2>The Assignment Process</h2>
    <p>
      Once you have the property under contract, you use an assignment agreement to transfer your contractual rights to the end buyer. The end buyer pays you the assignment fee, typically at closing, and they close directly with the seller.
    </p>
    <p>
      Some purchase contracts include language that prohibits assignment. When that happens, wholesalers use a "double close" — two back-to-back transactions where you actually purchase the property briefly before selling it to the end buyer. This requires transactional funding (short-term bridge money for the first leg), which costs around 1–2% of the purchase price. It adds friction, but it's a legitimate option.
    </p>
    <p>
      Building a buyers list — a group of active investors who will look at your deals — is just as important as finding sellers. A great deal with no buyer on the other end is a problem. Most wholesale businesses spend real effort maintaining relationships with 10–30 active buyers who are consistently purchasing in their target markets.
    </p>

    <h2>The Legal Landscape</h2>
    <p>
      Wholesaling is legal in most states, but the line between assigning a contract and acting as an unlicensed real estate agent can get blurry — and regulators in some states have started paying closer attention. The key legal principle is that you're selling your equitable interest in a contract, not brokering a real estate transaction.
    </p>
    <p>
      That said, the rules vary by state. Illinois, for example, has passed legislation requiring wholesalers to disclose their equitable interest in writing. Other states have their own nuances. This is not an area where you want to rely on a course or a YouTube video for your legal framework. Consult a real estate attorney in your specific state before you close your first deal.
    </p>

    <h2>How Long Does This Actually Take?</h2>
    <p>
      Here's what most wholesaling content doesn't say clearly: for most people starting from scratch, it takes 2–4 months of consistent marketing activity before closing a first deal. You'll spend money on direct mail, list purchases, or dialers before you make any. Your first $10,000 assignment fee might represent $3,000–$5,000 in marketing costs and dozens of hours of time.
    </p>
    <p>
      That doesn't make it a bad business model. It makes it a real one with real startup costs. The investors who build sustainable wholesaling operations treat it like a marketing business — because that's what it is.
    </p>
  </BlogPost>
);

export default RealEstateWholesalingExplained;
