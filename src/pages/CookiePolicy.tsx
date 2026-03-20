import Layout from "@/components/Layout";
import { Helmet } from "react-helmet-async";

const CookiePolicy = () => (
  <Layout>
    <Helmet>
      <title>Cookie Policy | Home Nexio</title>
      <meta name="description" content="Learn how Home Nexio uses cookies and similar technologies to improve your browsing experience." />
    </Helmet>

    <section className="section-padding">
      <div className="container-narrow max-w-3xl">
        <h1 className="font-heading text-4xl font-bold text-foreground">Cookie Policy</h1>
        <div className="mt-8 space-y-4 text-muted-foreground leading-relaxed">
          <p>Last updated: February 13, 2026</p>

          <h2 className="font-heading text-xl font-bold text-foreground">What Are Cookies?</h2>
          <p>Cookies are small text files stored on your device when you visit a website. They help the site remember your preferences and understand how you interact with content.</p>

          <h2 className="font-heading text-xl font-bold text-foreground">How We Use Cookies</h2>
          <p>Home Nexio uses cookies for the following purposes:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong className="text-foreground">Essential cookies:</strong> Required for the website to function properly (e.g., navigation, page loading).</li>
            <li><strong className="text-foreground">Analytics cookies:</strong> Help us understand how visitors use our site so we can improve content and user experience (e.g., Google Analytics).</li>
            <li><strong className="text-foreground">Advertising cookies:</strong> Used by third-party advertising services (e.g., Google AdSense) to display relevant ads based on your browsing behavior.</li>
          </ul>

          <h2 className="font-heading text-xl font-bold text-foreground">Third-Party Cookies</h2>
          <p>We may use third-party services such as Google Analytics and Google AdSense, which set their own cookies. These services have their own privacy policies governing the use of cookies. You can learn more about Google's cookie usage at <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer" className="text-accent underline hover:text-accent/80">Google's Cookie Policy</a>.</p>

          <h2 className="font-heading text-xl font-bold text-foreground">Managing Cookies</h2>
          <p>Most browsers allow you to control cookies through their settings. You can choose to block or delete cookies, but this may affect your experience on our website. You can also opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-accent underline hover:text-accent/80">Google Ads Settings</a> or <a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer" className="text-accent underline hover:text-accent/80">AboutAds.info</a>.</p>

          <h2 className="font-heading text-xl font-bold text-foreground">Changes to This Policy</h2>
          <p>We may update this Cookie Policy from time to time. Any changes will be posted on this page.</p>

          <h2 className="font-heading text-xl font-bold text-foreground">Contact</h2>
          <p>If you have questions about our use of cookies, contact us at <a href="mailto:contact@homenexio.com" className="text-accent underline hover:text-accent/80">contact@homenexio.com</a>.</p>
        </div>
      </div>
    </section>
  </Layout>
);

export default CookiePolicy;
