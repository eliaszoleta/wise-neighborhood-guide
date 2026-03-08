import TopicPage from "@/components/TopicPage";

const MipVsPmi = () => (
  <TopicPage
    title="MIP vs. PMI: Mortgage Insurance Explained for Homebuyers"
    metaDesc="MIP and PMI are both mortgage insurance — but they work differently and cost differently. Here's what each one is, when you pay it, and how to get rid of it."
    parentLabel="Blog"
    parentHref="/blog"
    intro="Mortgage insurance exists to protect lenders — not borrowers — when a buyer puts down less than 20%. If you default, the insurance pays the lender. You pay the premium. It's a cost that can add $100–$500 or more per month to your payment, so understanding when you're required to pay it, how much it costs, and when you can eliminate it is worth the time to figure out before you close."
    sections={[
      {
        heading: "What Is PMI (Private Mortgage Insurance)?",
        content: "PMI applies to conventional loans when your down payment is less than 20% of the purchase price. It's provided by private insurance companies (Genworth, MGIC, Radian, Essent, and others). Cost: typically 0.5–1.5% of the loan balance annually, divided into monthly payments. On a $300,000 loan, that's $125–$375/month. The exact rate depends on your credit score, down payment, loan term, and the insurer. The critical advantage of PMI over FHA MIP: it's cancelable. Once you reach 20% equity (either through payments or appreciation), you can request PMI removal. At 22% equity based on the original amortization schedule, lenders are legally required to cancel it automatically under the Homeowners Protection Act.",
        links: [],
      },
      {
        heading: "What Is MIP (Mortgage Insurance Premium)?",
        content: "MIP applies specifically to FHA loans. It's charged by the federal government (FHA). Unlike PMI, MIP has two components: an upfront MIP of 1.75% of the loan amount charged at closing (can be rolled into the loan), and an annual MIP of 0.55–1.05% depending on your loan-to-value and loan term, paid monthly. The most significant difference from PMI: if your FHA loan has a down payment under 10%, annual MIP stays for the life of the loan. If you put down 10% or more, MIP drops off after 11 years. The traditional strategy for FHA borrowers who want to eliminate MIP: once you have 20% equity, refinance into a conventional loan — the refinance pays off the FHA loan and you're no longer subject to FHA's MIP requirements.",
        links: [],
      },
      {
        heading: "PMI vs. MIP: Side-by-Side Comparison",
        content: "PMI: conventional loans only; no upfront premium in most cases; 0.5–1.5% annually; cancelable once you reach 20% equity; automatically removed at 22% per HPA. MIP: FHA loans only; 1.75% upfront premium; 0.55–1.05% annually; cannot be cancelled if down payment under 10% (stays for life of loan); must refinance out of FHA to eliminate it. For a buyer with good credit putting down 5%, conventional + PMI is often cheaper long-term than FHA + MIP because the PMI cancels. For a buyer with lower credit (580–620 range) where conventional PMI rates are punishing, FHA MIP may be the more affordable route despite the lifetime requirement. Run the numbers for your specific credit score, down payment, and expected hold period.",
        links: [],
      },
      {
        heading: "How to Avoid or Eliminate Mortgage Insurance",
        content: "The cleanest ways: put 20% down on a conventional loan (no PMI required). Use a piggyback loan (80/10/10 — first mortgage at 80% LTV, second mortgage at 10%, 10% cash down) to avoid PMI while keeping cash invested. If you already have MIP on an FHA loan, refinance to conventional once you have 20% equity — this requires a new appraisal and refinance costs but eliminates MIP permanently. For existing conventional loans with PMI, request cancellation once your loan-to-value reaches 80% based on your original purchase price. You can also request a new appraisal if appreciation has pushed your equity above 20% — many lenders allow cancellation based on current value rather than original value.",
        links: [],
      },
    ]}
    faqs={[
      {
        q: "How much does mortgage insurance add to my monthly payment?",
        a: "PMI on a conventional loan typically adds $83–$250/month per $100,000 borrowed (0.5–1.5% annually ÷ 12). FHA MIP adds roughly $46–$88/month per $100,000 borrowed in annual MIP (0.55–1.05%) plus the upfront 1.75% rolled into the loan. These are real costs that need to be in your homebuying budget. On a $300,000 loan, mortgage insurance could add $150–$500/month depending on the loan type and your profile.",
      },
      {
        q: "Can I negotiate my PMI rate?",
        a: "Not directly — PMI rates are set by the mortgage insurance company based on your credit score, LTV, and other underwriting factors. However, you can shop your overall loan package among lenders, who may be able to access different PMI providers with different rate schedules. Improving your credit score before applying has the most direct impact on reducing PMI cost. Some lenders offer lender-paid PMI (LPMI), where they cover the PMI cost in exchange for a slightly higher interest rate.",
      },
      {
        q: "Is it ever better to pay PMI than put 20% down?",
        a: "Sometimes. If you have $60,000 available and the home costs $300,000, you could put 20% down and eliminate PMI — or put 5–10% down, pay PMI, and invest the remaining $30,000–$45,000 in other assets. If your investment returns exceed your PMI cost, keeping more cash invested might be the better financial decision. This depends heavily on what alternative investment opportunities you have available and how long you expect to pay PMI before reaching 20% equity through payments or appreciation.",
      },
    ]}
  />
);

export default MipVsPmi;
