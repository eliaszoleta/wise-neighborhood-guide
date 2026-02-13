import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, TrendingUp, DollarSign, MapPin } from "lucide-react";

const StartHere = () => {
  const guides = [
    { icon: TrendingUp, title: "Real Estate Investing 101", desc: "Learn the fundamentals of building wealth through property — from rental income to appreciation strategies.", link: "/real-estate-investing" },
    { icon: DollarSign, title: "Wholesaling for Beginners", desc: "Discover how to profit from real estate deals without buying property or needing large capital.", link: "/real-estate-wholesaling" },
    { icon: BookOpen, title: "Real Estate Marketing", desc: "Master lead generation, digital ads, cold calling, and automation to grow your real estate business.", link: "/real-estate-marketing" },
    { icon: MapPin, title: "Get Your License", desc: "Step-by-step state guides covering requirements, exams, costs, and the application process.", link: "/real-estate-license" },
  ];

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-narrow">
          <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl">Start Here</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Welcome to Neighborhood Guidelines! Whether you want to invest, wholesale, market properties, or get licensed — we've got you covered. Pick a path below to begin.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {guides.map((g) => (
              <Link to={g.link} key={g.title} className="group card-hover rounded-xl border border-border bg-card p-8 block">
                <g.icon className="mb-4 h-8 w-8 text-accent" />
                <h2 className="mb-2 font-heading text-xl font-bold text-card-foreground group-hover:text-accent transition-colors">{g.title}</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">{g.desc}</p>
                <span className="mt-4 inline-flex items-center text-sm font-semibold text-accent">
                  Start learning <ArrowRight className="ml-1 h-3 w-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default StartHere;
