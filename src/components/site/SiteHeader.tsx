import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";

const BOOKING_URL = "https://cal.com/muhammad-asad-6rphhy/15min";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/solutions", label: "Solutions" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

const serviceLinks = [
  { hash: "web", label: "Web Development" },
  { hash: "app", label: "App Development" },
  { hash: "backend", label: "Backend Development" },
  { hash: "seo", label: "SEO" },
  { hash: "ppc", label: "PPC Advertising" },
  { hash: "social-media", label: "Social Media Marketing" },
  { hash: "content-marketing", label: "Content Marketing" },
  { hash: "email-marketing", label: "Email Marketing" },
  { hash: "branding", label: "Branding & Identity" },
  { hash: "reputation", label: "Online Reputation Management" },
  { hash: "affiliate", label: "Affiliate Marketing" },
  { hash: "cro", label: "Conversion Rate Optimization" },
  { hash: "technical-support", label: "Technical Support" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) =>
            item.label === "Services" ? (
              <div
                key={item.to}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  to={item.to}
                  activeOptions={{ exact: false }}
                  activeProps={{ className: "text-foreground" }}
                  inactiveProps={{ className: "text-muted-foreground" }}
                  className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-foreground"
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </Link>
                {servicesOpen && (
                  <div className="absolute left-1/2 top-full z-50 w-[540px] -translate-x-1/2 pt-2">
                    <div className="rounded-lg border border-border bg-card p-4 shadow-lift">
                      <div className="grid grid-cols-2 gap-1">
                        {serviceLinks.map((s) => (
                          <Link
                            key={s.hash}
                            to="/services"
                            hash={s.hash}
                            onClick={() => setServicesOpen(false)}
                            className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
                          >
                            {s.label}
                          </Link>
                        ))}
                      </div>
                      <div className="mt-3 border-t border-border pt-3">
                        <Link
                          to="/services"
                          onClick={() => setServicesOpen(false)}
                          className="text-sm font-medium text-primary hover:underline"
                        >
                          View all services →
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-foreground" }}
                inactiveProps={{ className: "text-muted-foreground" }}
                className="text-sm font-medium transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden md:block">
          <Button asChild size="sm">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              Book a call
            </a>
          </Button>
        </div>

        <button
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-2">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="border-b border-border py-3 text-sm font-medium text-foreground last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <details className="border-b border-border py-3">
              <summary className="cursor-pointer text-sm font-medium text-muted-foreground">
                Browse Services
              </summary>
              <div className="mt-2 grid grid-cols-2 gap-1 pb-2">
                {serviceLinks.map((s) => (
                  <Link
                    key={s.hash}
                    to="/services"
                    hash={s.hash}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:text-foreground"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </details>
            <Button asChild className="my-3">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                Book a call
              </a>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
