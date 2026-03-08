import Layout from "@/components/Layout";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <Layout>
      <Helmet>
        <title>About Peasant House | Free Real Estate Education</title>
        <meta name="description" content="Learn about Peasant House — a free real estate education resource covering investing, wholesaling, marketing, and state licensing guides for beginners and seasoned investors alike." />
        <link rel="canonical" href="https://peasanthouse.com/about" />
      </Helmet>

      <section className="section-padding">
        <div className="container-narrow max-w-3xl">
          <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl">About Peasant House</h1>

          <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Peasant House is a free real estate education platform built for everyday people who want to understand, invest in, and profit from real estate — without the fluff, gatekeeping, or expensive courses.
            </p>

            <h2 className="font-heading text-2xl font-bold text-foreground">Our Mission</h2>
            <p>
              Real estate is one of the most powerful wealth-building tools available, but the industry can feel overwhelming — packed with jargon, outdated advice, and information designed to confuse rather than help. Peasant House exists to change that. We make real estate education <strong className="text-foreground">accessible, practical, and actionable</strong> for everyone, regardless of experience level or financial background.
            </p>

            <h2 className="font-heading text-2xl font-bold text-foreground">What We Cover</h2>
            <p>
              From real estate investing strategies and wholesaling fundamentals to lead generation, digital marketing, and state-by-state licensing guides — we cover the full picture. Whether you're a complete beginner or looking to scale an existing portfolio, you'll find step-by-step guides and resources built around real-world application.
            </p>

            <h2 className="font-heading text-2xl font-bold text-foreground">Why Trust Us?</h2>
            <p>
              Every guide on Peasant House is researched and written with accuracy in mind. We reference authoritative industry sources, licensed professionals, and publicly available data to make sure the information you get here is reliable and up to date. Our focus is always on practical, honest content — not hype.
            </p>

            <div className="mt-8 rounded-lg border border-border bg-muted/50 p-6">
              <h3 className="font-heading text-lg font-semibold text-foreground">Editorial Disclaimer</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                The information on Peasant House is for general educational purposes only and does not constitute professional legal, financial, or real estate advice. We encourage readers to do their own due diligence and consult with licensed professionals before making any investment or business decisions. While we strive for accuracy, real estate markets and regulations change frequently, and we cannot guarantee that all information is current at the time of reading.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
