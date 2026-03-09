import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "@/assets/logo.svg";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Start Here", href: "/start-here" },
  { label: "Investing", href: "/real-estate-investing" },
  { label: "Wholesaling", href: "/real-estate-wholesaling" },
  { label: "Marketing", href: "/real-estate-marketing" },
  {
    label: "Get Licensed",
    href: "/real-estate-license",
    dropdown: true,
  },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <nav className="container-wide flex h-16 items-center justify-between px-4 md:px-8" aria-label="Main navigation">
        <Link to="/" className="flex items-center gap-2" aria-label="Peasant House Home">
          <img src={logo} alt="Peasant House logo" className="h-9 w-auto" width={36} height={36} />
          <span className="hidden font-heading text-lg font-bold text-foreground sm:inline">
            Peasant House
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.href} className="relative">
              <Link
                to={item.href}
                className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
                {item.dropdown && <ChevronDown className="h-3 w-3" />}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button variant="hero" size="default" asChild>
            <Link to="/start-here">Start Learning</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="border-t border-border bg-background lg:hidden">
          <ul className="flex flex-col px-4 py-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className="block rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="mt-2">
              <Button variant="hero" size="default" className="w-full" asChild>
                <Link to="/start-here" onClick={() => setMobileOpen(false)}>Start Learning</Link>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
