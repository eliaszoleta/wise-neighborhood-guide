import TopicPage from "@/components/TopicPage";

const TypesOfRealEstateProperty = () => (
  <TopicPage
    title="3 Main Types of Real Estate Property: What Buyers, Sellers & Investors Need to Know"
    metaDesc="Residential, commercial, and land — the three main property types work differently, appreciate differently, and come with different rules. Here's a clear breakdown."
    parentLabel="Blog"
    parentHref="/blog"
    intro="Real estate is not one thing. A single-family rental in Ohio, a strip mall in Phoenix, and a raw acreage parcel in rural Montana are all 'real estate' — but they finance differently, generate income differently, and come with entirely different risk profiles. Understanding the three main property types is foundational whether you're buying your first home, building a rental portfolio, or trying to figure out where to put capital."
    sections={[
      {
        heading: "Residential Real Estate",
        content: "Residential property is any property designed for people to live in. That includes single-family homes, duplexes, triplexes, fourplexes, condos, townhomes, and manufactured homes. For investors, the key threshold is 1–4 units — properties in that range qualify for residential financing, which means conventional 30-year mortgages, FHA loans, VA loans, and lower down payments compared to commercial financing. Once you go to 5+ units, you're in commercial territory regardless of whether the building is technically apartments. For buyers purchasing a primary residence, residential real estate is straightforward. For investors, residential property is the most common entry point because of accessible financing, high demand, and a large pool of comparable sales data to evaluate deals against.",
        links: [],
      },
      {
        heading: "Commercial Real Estate",
        content: "Commercial property is everything not primarily designed for residential living: office buildings, retail storefronts, shopping centers, warehouses, industrial facilities, self-storage, and mixed-use properties. Apartment complexes with 5 or more units also fall under commercial lending. Commercial real estate is valued differently than residential — most commercial property is valued based on income (using a cap rate formula) rather than comparable sales. This means a commercial building's value is directly tied to how much income it produces. Commercial loans typically require larger down payments (25–35%), shorter amortization periods, and stronger business financials. The upside: longer lease terms, professional tenants, and in many cases triple-net leases where tenants pay property taxes, insurance, and maintenance directly.",
        links: [],
      },
      {
        heading: "Land",
        content: "Raw land is the most speculative of the three types. It produces no income on its own, doesn't depreciate for tax purposes (unlike improved property), and is the hardest to finance — most land loans require 20–50% down and carry higher rates. But land can be a powerful play in the right context: subdividing parcels, assembling lots for development, rezoning undervalued agricultural land to residential or commercial, or simply holding in a growth path corridor. Land wholesaling has also grown as a strategy — finding undervalued parcels from owners who inherited land or stopped paying taxes, getting them under contract, and selling to developers or land investors at a markup. The barrier to entry is lower than residential wholesaling because competition is thinner, but the learning curve around zoning, utilities access, and what developers actually want is steeper.",
        links: [],
      },
      {
        heading: "Which Type Is Right for You?",
        content: "The right property type depends on your goal, capital, and tolerance for complexity. Most new investors start with residential 1–4 unit properties because financing is accessible, tenant demand is predictable, and there's a deep market of buyers if you need to sell. Commercial real estate typically requires more capital and more sophisticated underwriting, but generates higher cash yields and often carries lower management intensity when tenants are professional businesses. Land requires the least capital of all and almost no management, but patience is mandatory — raw land can sit unproductive for years. Many experienced investors hold all three across different phases of a portfolio, using residential for stable monthly income, commercial for higher yield, and land as long-term appreciation plays in growth markets.",
        links: [],
      },
    ]}
    faqs={[
      {
        q: "What is the difference between residential and commercial real estate?",
        a: "The main practical differences are financing and how property value is calculated. Residential (1–4 units) qualifies for conventional mortgages with lower down payments. Commercial (5+ units, offices, retail, industrial) requires commercial financing with larger down payments and shorter terms. Residential values are based on comparable sales; commercial values are based on income (cap rate). For investors, the 1–4 unit versus 5+ unit line is especially important because it determines which loan products you can use.",
      },
      {
        q: "Is land a good investment?",
        a: "Land can be an excellent investment in the right circumstances — especially near growing metros, in paths of development, or when you can add value through rezoning or subdivision. It's a poor investment if you're expecting short-term income or liquidity, since land produces nothing on its own and can be illiquid. The best land deals tend to go to investors who understand local zoning, utility access, and development trends in a specific market — it's not a passive play.",
      },
      {
        q: "Can beginners invest in commercial real estate?",
        a: "Yes, but it requires more capital and homework than residential. The most beginner-friendly commercial play is a small multifamily property of 5–10 units, which requires commercial financing but operates similarly to residential landlording. Retail and office carry more risk for new investors because vacancy is harder to absorb and tenant demand is less predictable than apartment demand. REITs (real estate investment trusts) also give beginners exposure to commercial real estate without direct ownership.",
      },
    ]}
  />
);

export default TypesOfRealEstateProperty;
