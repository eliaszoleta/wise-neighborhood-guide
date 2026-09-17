import Layout from "@/components/Layout";
import { Helmet } from "react-helmet-async";

const Disclaimer = () => (
  <Layout>
    <Helmet>
      <title>Disclaimer | Home Nexio</title>
      <meta name="description" content="Read the disclaimer for Home Nexio. Understand the limitations of the educational content provided on this site." />
    </Helmet>

    <section className="section-padding">
      <div className="container-narrow max-w-3xl">
        <h1 className="font-heading text-4xl font-bold text-foreground">Disclaimer</h1>
        <div className="mt-8 space-y-4 text-muted-foreground leading-relaxed">
          <p>Last updated: February 13, 2026</p>

          <h2 className="font-heading text-xl font-bold text-foreground">General Information</h2>
          <p>The information provided on Home Nexio is for general educational and informational purposes only. Nothing on this website should be construed as professional legal, financial, tax, or real estate advice.</p>

          <h2 className="font-heading text-xl font-bold text-foreground">No Professional Advice</h2>
          <p>While we strive to provide accurate, well-researched content, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or suitability of the information. Any reliance you place on such information is strictly at your own risk.</p>

          <h2 className="font-heading text-xl font-bold text-foreground">Investment Risk</h2>
          <p>Real estate investing carries inherent risks, including but not limited to loss of capital, market fluctuations, and regulatory changes. Past performance does not guarantee future results. Always conduct your own due diligence and consult with licensed real estate professionals, financial advisors, and attorneys before making any investment decisions.</p>

          <h2 className="font-heading text-xl font-bold text-foreground">External Links</h2>
          <p>This website may contain links to third-party websites or resources. These links are provided for convenience and reference only. We do not endorse, control, or assume responsibility for the content, privacy policies, or practices of any third-party sites.</p>

          <h2 className="font-heading text-xl font-bold text-foreground">Earnings &amp; Results Disclaimer</h2>
          <p>Any income figures, results, or examples mentioned on this website are for illustrative purposes only. Individual results will vary based on numerous factors including market conditions, experience, effort, and timing. We do not guarantee that you will achieve similar results.</p>

          <h2 className="font-heading text-xl font-bold text-foreground">Changes</h2>
          <p>We reserve the right to update or modify this disclaimer at any time without prior notice. Please review this page periodically for any changes.</p>
        </div>
      </div>
    </section>
  </Layout>
);

export default Disclaimer;
