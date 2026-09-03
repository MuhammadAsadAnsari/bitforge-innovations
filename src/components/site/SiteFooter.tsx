import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

const BOOKING_URL = "https://cal.com/muhammad-asad-6rphhy/15min";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A software and digital marketing team in Karachi helping businesses grow with
              custom systems and smart marketing.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Company</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-foreground">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-foreground">About us</Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-foreground">Solutions</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-foreground">Contact</Link>
              </li>
              <li>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
                  Book a call
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Services</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li>
                <Link to="/services" hash="web" className="hover:text-foreground">Web Development</Link>
              </li>
              <li>
                <Link to="/services" hash="app" className="hover:text-foreground">App Development</Link>
              </li>
              <li>
                <Link to="/services" hash="seo" className="hover:text-foreground">SEO</Link>
              </li>
              <li>
                <Link to="/services" hash="ppc" className="hover:text-foreground">PPC Advertising</Link>
              </li>
              <li>
                <Link to="/services" hash="social-media" className="hover:text-foreground">Social Media Marketing</Link>
              </li>
              <li>
                <Link to="/services" hash="content-marketing" className="hover:text-foreground">Content Marketing</Link>
              </li>
              <li>
                <Link to="/services" className="text-primary hover:underline">View all →</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Contact</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li>Karachi, Pakistan</li>
              <li>
                <a href="mailto:hello@bitforge.dev" className="hover:text-foreground">
                  hello@bitforge.dev
                </a>
              </li>
              <li>Monday to Friday, 10:00 to 19:00 PKT</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} BitForge Innovations. All rights reserved.</p>
          <p>Karachi, Pakistan · Working with teams across PK, UAE and UK</p>
        </div>
      </div>
    </footer>
  );
}
