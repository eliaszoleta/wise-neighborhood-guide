import { Link } from "react-router-dom";
import logo from "@/assets/logo.svg";

const FooterCol = ({ heading, links }: { heading: string; links: { label: string; href: string }[] }) => (
  <div>
    <h3 className="mb-4 font-heading text-xs font-semibold uppercase tracking-wider text-primary-foreground/50">
      {heading}
    </h3>
    <ul className="space-y-2.5">
      {links.map((l) => (
        <li key={l.href}>
          <Link to={l.href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
            {l.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => (
  <footer className="border-t border-border bg-primary text-primary-foreground">

    {/* Main link grid */}
    <div className="container-wide px-4 py-14 md:px-8">
      <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4">

        {/* Brand — spans 2 cols */}
        <div className="col-span-2 space-y-4">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Peasant House" className="h-8 w-auto" width={32} height={32} />
            <span className="font-heading text-lg font-bold">Peasant House</span>
          </Link>
          <p className="text-sm text-primary-foreground/65 leading-relaxed max-w-[280px]">
            Free real estate education covering investing, wholesaling, marketing, financing, and licensing in all 50 states. No courses. No upsells.
          </p>
          <div className="text-xs text-primary-foreground/45 space-y-1">
            <p>© {new Date().getFullYear()} Peasant House. All rights reserved.</p>
            <p>
              Educational content only — not financial or legal advice.{" "}
              <Link to="/disclaimer" className="underline hover:text-primary-foreground/70">Full disclaimer →</Link>
            </p>
          </div>
        </div>

        {/* Investing */}
        <FooterCol heading="Investing" links={[
          { label: "Investing Hub", href: "/real-estate-investing" },
          { label: "Rental Property Investing", href: "/real-estate-investing/rental-property-investing" },
          { label: "The BRRRR Strategy", href: "/real-estate-investing/brrrr-strategy" },
          { label: "Funding & Financing", href: "/real-estate-investing/funding-financing" },
          { label: "Cash Flow & ROI", href: "/real-estate-investing/cash-flow-roi" },
          { label: "House Flipping", href: "/blog/investing/house-flipping" },
          { label: "Short-Term Rentals", href: "/blog/investing/short-term-rental-investing" },
        ]} />

        {/* Blog */}
        <FooterCol heading="Blog" links={[
            { label: "All Articles", href: "/blog" },
            { label: "Investing", href: "/blog/investing" },
            { label: "Wholesaling", href: "/blog/wholesaling" },
            { label: "Financing", href: "/blog/financing" },
            { label: "Property Management", href: "/blog/property-management" },
            { label: "Real Estate Careers", href: "/blog/real-estate-careers" },
        ]} />

        {/* Company */}
        <FooterCol heading="Company" links={[
            { label: "About Us", href: "/about" },
            { label: "Contact", href: "/contact" },
            { label: "Start Here", href: "/start-here" },
            { label: "Author", href: "/author" },
            { label: "Privacy Policy", href: "/privacy-policy" },
            { label: "Terms of Service", href: "/terms-of-service" },
            { label: "Disclaimer", href: "/disclaimer" },
        ]} />

      </div>
    </div>

    {/* State licensing strip */}
    <div className="border-t border-primary-foreground/10 py-4">
      <div className="container-wide px-4 md:px-8">
        <p className="text-xs text-primary-foreground/40 mb-2 font-semibold uppercase tracking-wider">License Guides by State</p>
        <div className="flex flex-wrap gap-x-4 gap-y-1">
          {[["Arizona","arizona"],["Colorado","colorado"],["Florida","florida"],["Georgia","georgia"],
            ["Illinois","illinois"],["Nevada","nevada"],["New York","new-york"],["North Carolina","north-carolina"],
            ["Tennessee","tennessee"],["Texas","texas"],["Washington","washington"],["California","california"],
          ].map(([label, slug]) => (
            <Link key={slug} to={`/real-estate-license/${slug}`}
              className="text-xs text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors hover:underline">
              {label}
            </Link>
          ))}
          <Link to="/real-estate-license" className="text-xs text-accent/80 hover:text-accent font-medium hover:underline transition-colors">
            All 50 States →
          </Link>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-primary-foreground/10 py-4">
      <div className="container-wide px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-primary-foreground/40">
        <p>Peasant House is an independent real estate education site. We may earn a commission on some outbound links.</p>
        <p className="flex items-center gap-2">
          <Link to="/privacy-policy" className="hover:text-primary-foreground/60 underline">Privacy</Link>
          <span>·</span>
          <Link to="/terms-of-service" className="hover:text-primary-foreground/60 underline">Terms</Link>
          <span>·</span>
          <Link to="/disclaimer" className="hover:text-primary-foreground/60 underline">Disclaimer</Link>
          <span>·</span>
          <Link to="/cookie-policy" className="hover:text-primary-foreground/60 underline">Cookies</Link>
        </p>
      </div>
    </div>

  </footer>
);

export default Footer;
