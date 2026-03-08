import Layout from "@/components/Layout";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <Layout>
      <Helmet>
        <title>About Peasant House | Real Estate Education by Elias Zoleta</title>
        <meta name="description" content="Learn about Elias Zoleta, the founder of Peasant House — a real estate educator with years of experience in content creation, CRM automation, and property investing strategies." />
        <link rel="canonical" href="https://peasanthouse.com/about" />
      </Helmet>

      <section className="section-padding">
        <div className="container-narrow max-w-3xl">
          <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl">About Peasant House</h1>

          <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Peasant House was founded by <strong className="text-foreground">Elias Zoleta</strong> — a real estate content specialist and automation expert with over 4 years of experience helping real estate professionals, investors, and agencies scale their businesses through strategic content, CRM systems, and digital marketing.
            </p>

            <h2 className="font-heading text-2xl font-bold text-foreground">Who Is Elias Zoleta?</h2>
            <p>
              Elias has spent years immersed in the real estate industry — writing in-depth guides, managing lead generation campaigns, and building automation workflows for real estate teams across the United States. As a Go High Level specialist and seasoned virtual assistant, he has worked behind the scenes with brokers, wholesalers, and investors to create content strategies that drive organic traffic and convert leads.
            </p>
            <p>
              His hands-on experience spans real estate blogging, SEO-optimized content creation, CRM pipeline management, and marketing automation — giving him a unique perspective on what it takes to succeed in today's competitive real estate landscape.
            </p>

            <h2 className="font-heading text-2xl font-bold text-foreground">Our Mission</h2>
            <p>
              We believe that real estate is one of the most powerful wealth-building tools available. But the industry can be overwhelming — filled with jargon, gatekeeping, and outdated advice. Peasant House exists to make real estate education <strong className="text-foreground">accessible, practical, and actionable</strong> for everyone, regardless of experience level or financial background.
            </p>

            <h2 className="font-heading text-2xl font-bold text-foreground">What We Cover</h2>
            <p>
              From real estate investing and wholesaling to lead generation, marketing strategies, and state-by-state licensing guides — we provide comprehensive, beginner-friendly content backed by real-world industry experience. Every article is researched, written, and reviewed with accuracy and value in mind.
            </p>

            <h2 className="font-heading text-2xl font-bold text-foreground">Why Trust Us?</h2>
            <p>
              With years of experience creating content for real estate professionals and managing end-to-end marketing systems, Elias brings a practitioner's perspective to every guide published on this site. Our content references authoritative industry sources, licensed professionals, and publicly available data to ensure reliability.
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
