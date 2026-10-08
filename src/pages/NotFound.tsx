import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";

const POPULAR_LINKS = [
  { label: "Real Estate Blog", href: "/blog" },
  { label: "Real Estate Investing", href: "/real-estate-investing" },
  { label: "Real Estate Wholesaling", href: "/real-estate-wholesaling" },
  { label: "Get Licensed by State", href: "/real-estate-license" },
  { label: "Start Here", href: "/start-here" },
];

const NotFound = () => {
  return (
    <Layout>
      <Helmet>
        <title>Page Not Found | Home Nexio</title>
        <meta name="description" content="The page you're looking for doesn't exist. Browse our real estate investing, wholesaling, and licensing guides instead." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="flex min-h-[60vh] items-center justify-center px-4 py-20">
        <div className="text-center">
          <h1 className="mb-4 text-5xl font-bold text-foreground">404</h1>
          <p className="mb-8 text-xl text-muted-foreground">We couldn't find that page.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {POPULAR_LINKS.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                {l.label}
              </Link>
            ))}
          </div>
          <Link to="/" className="mt-8 inline-block text-sm text-accent underline hover:text-accent/80">
            Or return to the homepage
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
