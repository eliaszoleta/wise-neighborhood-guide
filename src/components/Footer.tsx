import { Link } from "react-router-dom";
import logo from "@/assets/logo.svg";

const footerLinks = {
  investing: [
    { label: "Real Estate Investing Hub", href: "/real-estate-investing" },
    { label: "Rental Property Investing", href: "/real-estate-investing/rental-property-investing" },
    { label: "The BRRRR Strategy", href: "/real-estate-investing/brrrr-strategy" },
    { label: "Funding & Financing Deals", href: "/real-estate-investing/funding-financing" },
    { label: "Cash Flow & ROI Analysis", href: "/real-estate-investing/cash-flow-roi" },
  ],
  wholesaling: [
    { label: "Real Estate Wholesaling Hub", href: "/real-estate-wholesaling" },
    { label: "How Wholesaling Works", href: "/real-estate-wholesaling/how-wholesaling-works" },
    { label: "Finding Motivated Sellers", href: "/real-estate-wholesaling/finding-motivated-sellers" },
    { label: "Contracts & Assignment Fees", href: "/real-estate-wholesaling/contracts-assignment-fees" },
    { label: "Dispositions & Acquisitions", href: "/real-estate-wholesaling/dispositions-acquisitions" },
  ],
  marketing: [
    { label: "Real Estate Marketing Hub", href: "/real-estate-marketing" },
    { label: "Lead Generation Strategies", href: "/real-estate-marketing/lead-generation" },
    { label: "Facebook & Google Ads", href: "/real-estate-marketing/facebook-google-ads" },
    { label: "Cold Calling & SMS Marketing", href: "/real-estate-marketing/cold-calling-sms" },
    { label: "CRM & Automation", href: "/real-estate-marketing/crm-automation" },
  ],
  financing: [
    { label: "Hard Money Loans", href: "/blog/financing/hard-money-lender" },
    { label: "DSCR Loans for Investors", href: "/blog/financing/dscr-loan-real-estate" },
    { label: "Seller Financing", href: "/blog/financing/seller-financing-real-estate" },
    { label: "Subject-To Real Estate", href: "/blog/financing/subject-to-real-estate" },
    { label: "Cash-Out Refinance", href: "/blog/financing/cash-out-refinance" },
    { label: "All Financing Guides", href: "/blog/financing" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Blog", href: "/blog" },
    { label: "Start Here", href: "/start-here" },
    { label: "Get Licensed", href: "/real-estate-license" },
    { label: "Author", href: "/author" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Disclaimer", href: "/disclaimer" },
    { label: "Cookie Policy", href: "/cookie-policy" },
  ],
};

const Footer = () => {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      {/* Main footer grid */}
      <div className="container-wide section-padding pb-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">

          {/* Brand */}
          <div className="xl:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="Peasant House logo" className="h-8 w-auto" width={32} height={32} />
              <span className="font-heading text-lg font-bold">Peasant House</span>
            </Link>
            <p className="text-sm text-primary-foreground/70 leading-relaxed max-w-xs">
              Free real estate education on investing, wholesaling, marketing, financing, and getting your license in all 50 states. No courses. No upsells. Just clear information.
            </p>
            <div className="space-y-1 text-xs text-primary-foreground/50">
              <p>© {new Date().getFullYear()} Peasant House. All rights reserved.</p>
              <p>
                <span className="italic">Disclaimer:</span> Content is for educational purposes only and does not constitute financial, legal, or investment advice.{" "}
                <Link to="/disclaimer" className="underline hover:text-primary-foreground/80 transition-colors">
                  Full disclaimer →
                </Link>
              </p>
            </div>
          </div>

          {/* Investing */}
          <div>
            <h3 className="mb-4 font-heading text-xs font-semibold uppercase tracking-wider text-primary-foreground/50">
              Investing
            </h3>
            <ul className="space-y-2">
              {footerLinks.investing.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Wholesaling */}
          <div>
            <h3 className="mb-4 font-heading text-xs font-semibold uppercase tracking-wider text-primary-foreground/50">
              Wholesaling
            </h3>
            <ul className="space-y-2">
              {footerLinks.wholesaling.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Marketing + Financing combined */}
          <div>
            <h3 className="mb-4 font-heading text-xs font-semibold uppercase tracking-wider text-primary-foreground/50">
              Marketing
            </h3>
            <ul className="space-y-2 mb-6">
              {footerLinks.marketing.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="mb-4 font-heading text-xs font-semibold uppercase tracking-wider text-primary-foreground/50">
              Financing
            </h3>
            <ul className="space-y-2">
              {footerLinks.financing.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company + Legal */}
          <div>
            <h3 className="mb-4 font-heading text-xs font-semibold uppercase tracking-wider text-primary-foreground/50">
              Company
            </h3>
            <ul className="space-y-2 mb-6">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="mb-4 font-heading text-xs font-semibold uppercase tracking-wider text-primary-foreground/50">
              Legal
            </h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Popular state licensing strip */}
      <div className="border-t border-primary-foreground/10 py-6">
        <div className="container-wide">
          <p className="text-xs text-primary-foreground/40 mb-3 font-semibold uppercase tracking-wider">
            Real Estate License Guides
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            {[
              ["California", "california"],
              ["Texas", "texas"],
              ["Florida", "florida"],
              ["New York", "new-york"],
              ["Georgia", "georgia"],
              ["Arizona", "arizona"],
              ["Colorado", "colorado"],
              ["Washington", "washington"],
              ["North Carolina", "north-carolina"],
              ["Illinois", "illinois"],
              ["Nevada", "nevada"],
              ["Tennessee", "tennessee"],
            ].map(([label, slug]) => (
              <Link
                key={slug}
                to={`/real-estate-license/${slug}`}
                className="text-xs text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors hover:underline"
              >
                {label}
              </Link>
            ))}
            <Link
              to="/real-estate-license"
              className="text-xs text-accent/70 hover:text-accent transition-colors hover:underline font-medium"
            >
              All 50 States →
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10 py-4">
        <div className="container-wide flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-primary-foreground/40">
          <p>
            Peasant House is an independent real estate education site. We may earn a commission on some outbound links.
          </p>
          <p>
            <Link to="/privacy-policy" className="hover:text-primary-foreground/60 underline">Privacy</Link>
            {" · "}
            <Link to="/terms-of-service" className="hover:text-primary-foreground/60 underline">Terms</Link>
            {" · "}
            <Link to="/disclaimer" className="hover:text-primary-foreground/60 underline">Disclaimer</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
