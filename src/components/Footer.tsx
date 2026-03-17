import { Link } from "react-router-dom";
import logo from "@/assets/logo.svg";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">

      {/* Main grid */}
      <div className="container-wide section-padding pb-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">

          {/* Brand column */}
          <div className="xl:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="Peasant House logo" className="h-8 w-auto" width={32} height={32} />
              <span className="font-heading text-lg font-bold">Peasant House</span>
            </Link>
            <p className="text-sm text-primary-foreground/70 leading-relaxed max-w-xs">
              Free real estate education for investors, wholesalers, agents, and landlords — covering every strategy from BRRRR to cold calling, with step-by-step licensing guides for all 50 states. No courses. No upsells.
            </p>
            <div className="space-y-1 text-xs text-primary-foreground/50">
              <p>© {new Date().getFullYear()} Peasant House. All rights reserved.</p>
              <p>
                <span className="italic">Disclaimer:</span> Educational content only — not financial, legal, or investment advice.{" "}
                <Link to="/disclaimer" className="underline hover:text-primary-foreground/80 transition-colors">
                  Full disclaimer →
                </Link>
              </p>
            </div>
          </div>

          {/* Investing column */}
          <div>
            <h3 className="mb-4 font-heading text-xs font-semibold uppercase tracking-wider text-primary-foreground/50">
              Investing
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: "Investing Hub", href: "/real-estate-investing" },
                { label: "Rental Property Investing", href: "/real-estate-investing/rental-property-investing" },
                { label: "The BRRRR Strategy", href: "/real-estate-investing/brrrr-strategy" },
                { label: "Funding & Financing", href: "/real-estate-investing/funding-financing" },
                { label: "Cash Flow & ROI Analysis", href: "/real-estate-investing/cash-flow-roi" },
                { label: "House Flipping Guide", href: "/blog/investing/house-flipping" },
                { label: "Short-Term Rentals", href: "/blog/investing/short-term-rental-investing" },
              ].map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Wholesaling column */}
          <div>
            <h3 className="mb-4 font-heading text-xs font-semibold uppercase tracking-wider text-primary-foreground/50">
              Wholesaling
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: "Wholesaling Hub", href: "/real-estate-wholesaling" },
                { label: "How Wholesaling Works", href: "/real-estate-wholesaling/how-wholesaling-works" },
                { label: "Finding Motivated Sellers", href: "/real-estate-wholesaling/finding-motivated-sellers" },
                { label: "Contracts & Assignment Fees", href: "/real-estate-wholesaling/contracts-assignment-fees" },
                { label: "Dispositions & Acquisitions", href: "/real-estate-wholesaling/dispositions-acquisitions" },
                { label: "Building a Cash Buyers List", href: "/blog/wholesaling/cash-buyers-list-real-estate" },
                { label: "Double Closing Explained", href: "/blog/wholesaling/double-closing-real-estate" },
              ].map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Marketing + Financing + Company + Legal — stacked in last column */}
          <div className="space-y-8">

            {/* Marketing */}
            <div>
              <h3 className="mb-3 font-heading text-xs font-semibold uppercase tracking-wider text-primary-foreground/50">
                Marketing
              </h3>
              <ul className="space-y-2">
                {[
                  { label: "Marketing Hub", href: "/real-estate-marketing" },
                  { label: "Lead Generation Strategies", href: "/real-estate-marketing/lead-generation" },
                  { label: "Facebook & Google Ads", href: "/real-estate-marketing/facebook-google-ads" },
                  { label: "Cold Calling & SMS", href: "/real-estate-marketing/cold-calling-sms" },
                  { label: "CRM & Automation", href: "/real-estate-marketing/crm-automation" },
                ].map((l) => (
                  <li key={l.href}>
                    <Link to={l.href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Financing */}
            <div>
              <h3 className="mb-3 font-heading text-xs font-semibold uppercase tracking-wider text-primary-foreground/50">
                Financing
              </h3>
              <ul className="space-y-2">
                {[
                  { label: "Hard Money Loans", href: "/blog/financing/hard-money-lender" },
                  { label: "DSCR Loans", href: "/blog/financing/dscr-loan-real-estate" },
                  { label: "Seller Financing", href: "/blog/financing/seller-financing-real-estate" },
                  { label: "Subject-To Real Estate", href: "/blog/financing/subject-to-real-estate" },
                  { label: "Cash-Out Refinance", href: "/blog/financing/cash-out-refinance" },
                  { label: "All Financing Guides →", href: "/blog/financing" },
                ].map((l) => (
                  <li key={l.href}>
                    <Link to={l.href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Secondary row: Get Licensed + Blog + Company */}
      <div className="border-t border-primary-foreground/10 py-8">
        <div className="container-wide grid gap-8 md:grid-cols-3">

          {/* Get Licensed */}
          <div>
            <h3 className="mb-3 font-heading text-xs font-semibold uppercase tracking-wider text-primary-foreground/50">
              Get Licensed
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Licensing Hub — All 50 States", href: "/real-estate-license" },
                { label: "California Real Estate License", href: "/real-estate-license/california" },
                { label: "Texas Real Estate License", href: "/real-estate-license/texas" },
                { label: "Florida Real Estate License", href: "/real-estate-license/florida" },
                { label: "New York Real Estate License", href: "/real-estate-license/new-york" },
                { label: "Georgia Real Estate License", href: "/real-estate-license/georgia" },
              ].map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Blog categories */}
          <div>
            <h3 className="mb-3 font-heading text-xs font-semibold uppercase tracking-wider text-primary-foreground/50">
              Blog
            </h3>
            <ul className="space-y-2">
              {[
                { label: "All Articles", href: "/blog" },
                { label: "Investing Articles", href: "/blog/investing" },
                { label: "Wholesaling Articles", href: "/blog/wholesaling" },
                { label: "Financing Articles", href: "/blog/financing" },
                { label: "Property Management", href: "/blog/property-management" },
                { label: "Real Estate Careers", href: "/blog/real-estate-careers" },
                { label: "Real Estate Business", href: "/blog/real-estate-business" },
              ].map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company + Legal */}
          <div className="space-y-6">
            <div>
              <h3 className="mb-3 font-heading text-xs font-semibold uppercase tracking-wider text-primary-foreground/50">
                Company
              </h3>
              <ul className="space-y-2">
                {[
                  { label: "About Us", href: "/about" },
                  { label: "Contact", href: "/contact" },
                  { label: "Start Here", href: "/start-here" },
                  { label: "Author", href: "/author" },
                ].map((l) => (
                  <li key={l.href}>
                    <Link to={l.href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-3 font-heading text-xs font-semibold uppercase tracking-wider text-primary-foreground/50">
                Legal
              </h3>
              <ul className="space-y-2">
                {[
                  { label: "Privacy Policy", href: "/privacy-policy" },
                  { label: "Terms of Service", href: "/terms-of-service" },
                  { label: "Disclaimer", href: "/disclaimer" },
                  { label: "Cookie Policy", href: "/cookie-policy" },
                ].map((l) => (
                  <li key={l.href}>
                    <Link to={l.href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* State licensing quick strip */}
      <div className="border-t border-primary-foreground/10 py-5">
        <div className="container-wide">
          <p className="text-xs text-primary-foreground/40 mb-2.5 font-semibold uppercase tracking-wider">
            Real Estate License by State
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-1.5">
            {[
              ["Arizona", "arizona"], ["Colorado", "colorado"], ["Florida", "florida"],
              ["Georgia", "georgia"], ["Illinois", "illinois"], ["Nevada", "nevada"],
              ["New York", "new-york"], ["North Carolina", "north-carolina"],
              ["Tennessee", "tennessee"], ["Texas", "texas"], ["Washington", "washington"],
              ["California", "california"],
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
              className="text-xs text-accent/80 hover:text-accent transition-colors hover:underline font-medium"
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
};

export default Footer;
