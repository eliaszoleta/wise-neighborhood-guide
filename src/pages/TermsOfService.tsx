import Layout from "@/components/Layout";
import { Helmet } from "react-helmet-async";

const TermsOfService = () => (
  <Layout>
    <Helmet>
      <title>Terms of Service | Neighborhood Guidelines</title>
      <meta name="description" content="Review the terms and conditions for using Neighborhood Guidelines, a real estate education website." />
    </Helmet>

    <section className="section-padding">
      <div className="container-narrow max-w-3xl">
        <h1 className="font-heading text-4xl font-bold text-foreground">Terms of Service</h1>
        <div className="mt-8 space-y-4 text-muted-foreground leading-relaxed">
          <p>Last updated: February 13, 2026</p>

          <p>By accessing and using Neighborhood Guidelines, you agree to be bound by these Terms of Service. If you do not agree, please do not use this website.</p>

          <h2 className="font-heading text-xl font-bold text-foreground">Use of Content</h2>
          <p>All content on this website — including text, images, graphics, and other materials — is the property of Neighborhood Guidelines and is protected by copyright law. You may not reproduce, distribute, modify, or create derivative works from any content without prior written permission.</p>

          <h2 className="font-heading text-xl font-bold text-foreground">Educational Purpose</h2>
          <p>All content is published for general educational and informational purposes only. Nothing on this website constitutes professional legal, financial, tax, or real estate advice. You should always consult with qualified, licensed professionals before making any investment or business decisions.</p>

          <h2 className="font-heading text-xl font-bold text-foreground">User Conduct</h2>
          <p>You agree not to misuse this website, including but not limited to: attempting to gain unauthorized access, distributing malware, or using automated tools to scrape content without permission.</p>

          <h2 className="font-heading text-xl font-bold text-foreground">Disclaimer of Warranties</h2>
          <p>This website is provided "as is" without warranties of any kind, express or implied. We do not guarantee the accuracy, completeness, or timeliness of any information. Real estate investing involves risk, and past performance does not guarantee future results.</p>

          <h2 className="font-heading text-xl font-bold text-foreground">Limitation of Liability</h2>
          <p>Neighborhood Guidelines shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of this website or reliance on any information provided herein.</p>

          <h2 className="font-heading text-xl font-bold text-foreground">Changes to Terms</h2>
          <p>We reserve the right to modify these terms at any time. Continued use of the website after changes are posted constitutes acceptance of the updated terms.</p>

          <h2 className="font-heading text-xl font-bold text-foreground">Contact</h2>
          <p>For questions regarding these terms, contact us at <a href="mailto:contact@neighborhoodguidelines.com" className="text-accent underline hover:text-accent/80">contact@neighborhoodguidelines.com</a>.</p>
        </div>
      </div>
    </section>
  </Layout>
);

export default TermsOfService;
