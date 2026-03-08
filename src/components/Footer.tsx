import { Link } from "react-router-dom";
import ngLogo from "@/assets/ng-logo.png";

const footerLinks = {
  learn: [
    { label: "Start Here", href: "/start-here" },
    { label: "Real Estate Investing", href: "/real-estate-investing" },
    { label: "Real Estate Wholesaling", href: "/real-estate-wholesaling" },
    { label: "Real Estate Marketing", href: "/real-estate-marketing" },
    { label: "Get Licensed", href: "/real-estate-license" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Blog", href: "/blog" },
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
      <div className="container-wide section-padding">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <img src={ngLogo} alt="Peasant House logo" className="h-8 w-auto" width={32} height={32} />
              <span className="font-heading text-lg font-bold">Peasant House</span>
            </Link>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Real Estate Simplified. Step-by-step guides, tools, and strategies to build income through real estate.
            </p>
          </div>

          {/* Learn */}
          <div>
            <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-primary-foreground/50">Learn</h3>
            <ul className="space-y-2">
              {footerLinks.learn.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-primary-foreground/50">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-primary-foreground/50">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-8 text-center text-sm text-primary-foreground/50">
          <p>© {new Date().getFullYear()} Peasant House. All rights reserved. Real Estate Simplified.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
