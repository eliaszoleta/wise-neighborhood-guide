import BlogPost from "@/components/BlogPost";

const PropertyManagementCompanies = () => (
  <BlogPost
    title="Property Management Companies: What They Do and Whether You Need One"
    metaDesc="Property management companies handle tenants, maintenance, rent collection, and compliance. Here's what they actually cost, what you give up doing it yourself, and how to tell if the fee is worth it."
  >
    <p>A lot of landlords model their cash flow with the mortgage payment as the main expense and rent as the income. Then they're surprised when the property management fee shows up in the actual numbers. The fee isn't optional if you want professional management — and it's bigger than people expect once you account for how it actually works.</p>

    <p>Here's what a property management company does, what it really costs over a two-year tenancy, and an honest take on when it's worth the money and when it isn't.</p>

    <h2>What They Actually Handle</h2>

    <p>Full-service property management is more than collecting rent. A competent company handles:</p>

    <ul>
      <li>Listing vacant units on Zillow, Apartments.com, and rental platforms</li>
      <li>Showing the property and answering prospective tenant questions</li>
      <li>Running credit, background, and income verification on applicants</li>
      <li>Drafting and executing lease agreements that comply with local landlord-tenant law</li>
      <li>Collecting rent, enforcing late fees, and managing non-payment</li>
      <li>Coordinating routine maintenance and emergency repairs through their contractor network</li>
      <li>Conducting move-in and move-out inspections and documenting condition</li>
      <li>Managing security deposit accounting separately from operating accounts</li>
      <li>Processing lease renewals and rent increases</li>
      <li>Handling lease violations and, when necessary, the eviction process</li>
    </ul>

    <p>Some managers also provide monthly financial statements, annual tax summaries for your CPA, and 24/7 maintenance hotlines. The scope varies — what's "included" vs. "billed separately" is something you need to read in the actual management agreement before you sign.</p>

    <h2>What It Actually Costs</h2>

    <p>The advertised number — 8–12% of gross rent — is not the full number. Here's what a two-year tenancy on a $1,500/month rental actually looks like with a 10% management fee and a standard leasing fee:</p>

    <ul>
      <li>Monthly management fee: $150/month × 24 months = $3,600</li>
      <li>Leasing fee at tenant placement: $1,500 (one month's rent is typical)</li>
      <li>Total over two years: $5,100</li>
    </ul>

    <p>That leasing fee gets forgotten in pro formas constantly. If you turn the unit every 18–24 months, you're paying it regularly. Some managers also charge a lease renewal fee (25–50% of a month's rent), a maintenance markup on top of contractor invoices (10–15%), and an early termination fee if you want to cancel the management agreement. Read the contract carefully. The monthly percentage is the headline; the ancillary fees are where the surprises are.</p>

    <h2>The Self-Manage vs. Hire Decision</h2>

    <p>Self-managing saves the 8–12% monthly fee and leasing fees — on a $1,500 rental, that's $1,800+ per year in management fees alone, plus avoiding leasing fees at turnover. That's real money. But it costs you something too.</p>

    <p>Self-management means: taking maintenance calls at whatever hour they come in, handling tenant disputes directly, staying current on landlord-tenant law in your jurisdiction (which varies significantly by state and city), knowing the legally correct process for issuing notices and beginning eviction if it comes to that, and processing rent and late fees yourself.</p>

    <p>For one property close to where you live? Self-managing is reasonable if you're willing to learn the requirements. For multiple properties, anything out of state, or if you have a full-time job you're not willing to compromise, the management fee becomes worthwhile fast. One poorly-handled eviction — wrong notice period, improper procedure, self-help violation — can cost $3,000 in legal fees and two months of vacancy. The "savings" from self-managing disappear quickly when something goes wrong and you don't know exactly what you're doing.</p>

    <h2>How to Find a Good One</h2>

    <p>The best property managers get most of their new clients through referrals from other investors. Ask at local investor meetups, real estate associations, or in investor Facebook groups for your market. Interview at least two or three before signing anything.</p>

    <p>Questions worth asking in the interview:</p>
    <ul>
      <li>How many units do you currently manage?</li>
      <li>What's your average vacancy rate across your portfolio?</li>
      <li>How do you handle maintenance requests — do you have in-house maintenance or use outside contractors?</li>
      <li>What's your eviction rate and what does your eviction process look like?</li>
      <li>How quickly do you typically fill a vacancy?</li>
      <li>Can you show me a sample monthly statement?</li>
      <li>Can you give me references from two or three current clients?</li>
    </ul>

    <p>Red flags: vague or evasive answers on fees, unwillingness to show you sample reporting, high staff turnover, an office that feels disorganized, or a manager who won't give you current client references. Review the management agreement with an attorney before signing — pay particular attention to the cancellation clause and what happens if they list your property for sale.</p>

    <div className="callout">
      <p>Property management is worth paying for when your time, distance, or expertise make self-managing genuinely risky. It's not worth paying for as a convenience when you could handle it yourself and the fee is meaningfully hurting your cash flow. Run your actual numbers — management fee, leasing fees, renewal fees — before the property closes, not after.</p>
    </div>
  </BlogPost>
);

export default PropertyManagementCompanies;
