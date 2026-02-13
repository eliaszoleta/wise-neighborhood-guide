import Layout from "@/components/Layout";

const PrivacyPolicy = () => (
  <Layout>
    <section className="section-padding">
      <div className="container-narrow max-w-3xl">
        <h1 className="font-heading text-4xl font-bold text-foreground">Privacy Policy</h1>
        <div className="mt-8 space-y-4 text-muted-foreground leading-relaxed">
          <p>Last updated: February 13, 2026</p>
          <p>Neighborhood Guidelines ("we", "us", or "our") operates the website. This page informs you of our policies regarding the collection, use, and disclosure of personal information.</p>
          <h2 className="font-heading text-xl font-bold text-foreground">Information We Collect</h2>
          <p>We may collect your email address when you subscribe to our newsletter, your name and email when you use our contact form, and usage data through cookies and analytics tools.</p>
          <h2 className="font-heading text-xl font-bold text-foreground">How We Use Your Information</h2>
          <p>We use collected information to send educational content, improve our website, and respond to inquiries. We never sell your personal data.</p>
          <h2 className="font-heading text-xl font-bold text-foreground">Contact</h2>
          <p>If you have questions about this policy, please contact us at contact@neighborhoodguidelines.com.</p>
        </div>
      </div>
    </section>
  </Layout>
);

export default PrivacyPolicy;
