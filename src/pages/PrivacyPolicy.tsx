import Layout from "@/components/Layout";
import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => (
  <Layout>
    <Helmet>
      <title>Privacy Policy | Peasant House</title>
      <meta name="description" content="Read the privacy policy for Peasant House. Learn how we collect, use, and protect your personal information." />
    </Helmet>

    <section className="section-padding">
      <div className="container-narrow max-w-3xl">
        <h1 className="font-heading text-4xl font-bold text-foreground">Privacy Policy</h1>
        <div className="mt-8 space-y-4 text-muted-foreground leading-relaxed">
          <p>Last updated: February 13, 2026</p>

          <p>Peasant House ("we", "us", or "our") operates the website. This page informs you of our policies regarding the collection, use, and disclosure of personal information when you use our site.</p>

          <h2 className="font-heading text-xl font-bold text-foreground">Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Your email address when you subscribe to our newsletter or use our contact form.</li>
            <li>Your name when you submit inquiries through our contact page.</li>
            <li>Usage data such as pages visited, time spent on pages, and referring URLs, which may be collected through cookies and analytics tools in the future.</li>
          </ul>

          <h2 className="font-heading text-xl font-bold text-foreground">How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Send you educational content and newsletter updates (only if you opt in).</li>
            <li>Improve our website, content, and user experience.</li>
            <li>Respond to your inquiries and support requests.</li>
          </ul>
          <p>We never sell, rent, or trade your personal data to third parties.</p>

          <h2 className="font-heading text-xl font-bold text-foreground">Cookies &amp; Advertising</h2>
          <p>We may use cookies to analyze site traffic and improve your experience. In the future, we may partner with third-party advertising services, including Google AdSense, which may use cookies to serve relevant ads. If and when advertising is enabled, you will be able to opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-accent underline hover:text-accent/80">Google Ads Settings</a>. Currently, we do not serve third-party advertisements on this site.</p>

          <h2 className="font-heading text-xl font-bold text-foreground">Third-Party Links</h2>
          <p>Our site may contain links to external websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review their privacy policies before providing personal information.</p>

          <h2 className="font-heading text-xl font-bold text-foreground">Children's Privacy</h2>
          <p>Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children.</p>

          <h2 className="font-heading text-xl font-bold text-foreground">Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.</p>

          <h2 className="font-heading text-xl font-bold text-foreground">Contact</h2>
          <p>If you have questions about this policy, please contact us at <a href="mailto:contact@peasanthouse.com" className="text-accent underline hover:text-accent/80">contact@peasanthouse.com</a>.</p>
        </div>
      </div>
    </section>
  </Layout>
);

export default PrivacyPolicy;
