import Layout from "@/components/Layout";

const About = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-narrow max-w-3xl">
          <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl">About Neighborhood Guidelines</h1>
          <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Neighborhood Guidelines was founded with one mission: to make real estate education accessible, practical, and actionable for everyone — regardless of experience level or financial background.
            </p>
            <h2 className="font-heading text-2xl font-bold text-foreground">Our Mission</h2>
            <p>
              We believe that real estate is one of the most powerful wealth-building tools available. But the industry can be overwhelming, filled with jargon, gatekeeping, and outdated advice. We're here to change that.
            </p>
            <h2 className="font-heading text-2xl font-bold text-foreground">What We Cover</h2>
            <p>
              From real estate investing and wholesaling to marketing strategies and state-by-state licensing guides, we provide comprehensive, beginner-friendly content backed by real-world experience.
            </p>
            <h2 className="font-heading text-2xl font-bold text-foreground">Why Trust Us</h2>
            <p>
              With over 10 years in real estate education, our team has helped thousands of aspiring investors, wholesalers, and agents take their first steps. Every guide is written by experienced professionals who practice what they teach.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
