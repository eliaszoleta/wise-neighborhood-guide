import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

interface BlogPostProps {
  title: string;
  metaDesc: string;
  children: ReactNode;
}

const BlogPost = ({ title, metaDesc, children }: BlogPostProps) => (
  <Layout>
    <Helmet>
      <title>{title} | Peasant House</title>
      <meta name="description" content={metaDesc} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:type" content="article" />
      <meta name="twitter:card" content="summary" />
    </Helmet>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: title,
          description: metaDesc,
          publisher: {
            "@type": "Organization",
            name: "Peasant House",
          },
        }),
      }}
    />

    <section className="section-padding">
      <div className="container-narrow max-w-3xl">
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/blog">Blog</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <article className="prose-article">
          <h1 className="font-heading text-3xl font-bold text-foreground md:text-4xl lg:text-5xl leading-tight">
            {title}
          </h1>
          <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
            {children}
          </div>
        </article>

        <div className="mt-12 border-t border-border pt-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-accent font-semibold hover:underline">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default BlogPost;
