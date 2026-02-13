import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

const blogPosts = [
  { title: "10 Best Real Estate Investing Books for Beginners", category: "Investing", slug: "#", date: "Feb 10, 2026" },
  { title: "How to Find Your First Wholesale Deal", category: "Wholesaling", slug: "#", date: "Feb 8, 2026" },
  { title: "Facebook Ads for Real Estate: Complete Guide", category: "Marketing", slug: "#", date: "Feb 5, 2026" },
  { title: "Real Estate License vs. No License: Pros & Cons", category: "Licensing", slug: "#", date: "Feb 3, 2026" },
  { title: "How to Analyze a Rental Property in 5 Minutes", category: "Investing", slug: "#", date: "Jan 30, 2026" },
  { title: "Cold Calling Scripts That Actually Work", category: "Marketing", slug: "#", date: "Jan 28, 2026" },
];

const Blog = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-wide">
          <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl">Blog</h1>
          <p className="mt-4 text-lg text-muted-foreground">Latest guides, strategies, and insights on real estate investing, wholesaling, and marketing.</p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.title} className="card-hover rounded-lg border border-border bg-card p-6 block">
                <span className="inline-block rounded-sm bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent">{post.category}</span>
                <h2 className="mt-3 font-heading text-lg font-bold text-card-foreground">{post.title}</h2>
                <time className="mt-2 block text-xs text-muted-foreground">{post.date}</time>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
