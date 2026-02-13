import Layout from "@/components/Layout";

const Disclaimer = () => (
  <Layout>
    <section className="section-padding">
      <div className="container-narrow max-w-3xl">
        <h1 className="font-heading text-4xl font-bold text-foreground">Disclaimer</h1>
        <div className="mt-8 space-y-4 text-muted-foreground leading-relaxed">
          <p>Last updated: February 13, 2026</p>
          <p>The information on Neighborhood Guidelines is for general educational purposes only. Nothing on this site constitutes professional legal, financial, or real estate advice.</p>
          <p>We make no guarantees about the accuracy or completeness of any information. Real estate investing carries inherent risks. Always do your own due diligence and consult qualified professionals.</p>
        </div>
      </div>
    </section>
  </Layout>
);

export default Disclaimer;
