import Layout from "@/components/Layout";

const TermsOfService = () => (
  <Layout>
    <section className="section-padding">
      <div className="container-narrow max-w-3xl">
        <h1 className="font-heading text-4xl font-bold text-foreground">Terms of Service</h1>
        <div className="mt-8 space-y-4 text-muted-foreground leading-relaxed">
          <p>Last updated: February 13, 2026</p>
          <p>By using Neighborhood Guidelines, you agree to these Terms of Service. Our content is for educational purposes only and does not constitute legal, financial, or professional advice.</p>
          <h2 className="font-heading text-xl font-bold text-foreground">Use of Content</h2>
          <p>All content is protected by copyright. You may not reproduce, distribute, or create derivative works without written permission.</p>
          <h2 className="font-heading text-xl font-bold text-foreground">Disclaimer</h2>
          <p>Real estate involves risk. We do not guarantee specific outcomes. Always consult with licensed professionals before making investment decisions.</p>
        </div>
      </div>
    </section>
  </Layout>
);

export default TermsOfService;
