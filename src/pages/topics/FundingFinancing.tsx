import TopicPage from "@/components/TopicPage";

const FundingFinancing = () => (
  <TopicPage
    title="Real Estate Funding & Financing: How to Fund Your Deals"
    metaDesc="Explore real estate financing options including conventional loans, hard money, private money, DSCR loans, and creative financing strategies for investors."
    parentLabel="Real Estate Investing"
    parentHref="/real-estate-investing"
    intro="Understanding how to finance real estate deals is critical to your success as an investor. From traditional bank loans to creative strategies, knowing your options lets you structure profitable deals regardless of your personal financial situation."
    sections={[
      {
        heading: "Conventional Mortgage Loans",
        content: "Conventional loans are the most common financing option for investment properties. They typically require 15-25% down, strong credit (680+), and proof of income. Rates are competitive but qualification can be strict. You can hold up to 10 financed properties through Fannie Mae's guidelines.",
        links: [
          { label: "Fannie Mae Investment Guidelines", url: "https://selling-guide.fanniemae.com/" },
          { label: "Bankrate – Compare Mortgage Rates", url: "https://www.bankrate.com/mortgages/mortgage-rates/" },
          { label: "Freddie Mac – Loan Lookup", url: "https://www.freddiemac.com/" },
        ],
      },
      {
        heading: "Hard Money Loans",
        content: "Hard money loans are short-term, asset-based loans funded by private companies. They focus on the property's value rather than the borrower's credit. Rates are higher (10-15%), but funding is fast (7-14 days). Ideal for flips and BRRRR deals where speed matters more than long-term rate.",
        links: [
          { label: "Kiavi – Hard Money Lender", url: "https://www.kiavi.com/" },
          { label: "Lima One Capital", url: "https://www.limaone.com/" },
          { label: "RCN Capital", url: "https://www.rcncapital.com/" },
        ],
      },
      {
        heading: "Private Money Lending",
        content: "Private money comes from individuals — friends, family, or private investors — who lend their personal funds for real estate deals. Terms are fully negotiable. This is relationship-based lending that can offer more flexibility than any institutional option. Always formalize agreements with proper legal documentation.",
        links: [
          { label: "BiggerPockets: Private Money Guide", url: "https://www.biggerpockets.com/blog/private-money-lending" },
        ],
      },
      {
        heading: "DSCR Loans (Debt Service Coverage Ratio)",
        content: "DSCR loans qualify you based on the property's rental income rather than your personal income, making them ideal for self-employed investors or those with complex tax returns. A DSCR of 1.0 or higher means the property's income covers the mortgage payment. Many lenders offer these with 20-25% down.",
        links: [
          { label: "Griffin Funding – DSCR Loans", url: "https://www.griffinfunding.com/dscr-loans/" },
          { label: "Visio Lending", url: "https://www.visiolending.com/" },
        ],
      },
      {
        heading: "Creative Financing Strategies",
        content: "Creative financing includes seller financing, subject-to deals, lease options, and partnerships. These strategies let you acquire properties with little to no money down by leveraging existing financing or structuring unique terms. They require more negotiation skill but can unlock deals that traditional financing cannot.",
        links: [
          { label: "Investopedia: Seller Financing", url: "https://www.investopedia.com/terms/s/seller-financing.asp" },
        ],
      },
    ]}
    faqs={[
      { q: "What credit score do I need for an investment property loan?", a: "Most conventional lenders require a minimum credit score of 680-720 for investment properties. Hard money and DSCR lenders may accept scores as low as 620-660." },
      { q: "Can I buy an investment property with no money down?", a: "Yes, through strategies like house hacking with FHA/VA loans, seller financing, subject-to deals, or partnering with other investors who provide the capital." },
      { q: "What is the best type of loan for real estate investing?", a: "It depends on your strategy. Conventional loans offer the best rates for long-term holds. Hard money is best for flips. DSCR loans work well for self-employed investors building rental portfolios." },
    ]}
  />
);

export default FundingFinancing;
