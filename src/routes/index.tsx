import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  Building2,
  Code2,
  Cpu,
  FileText,
  Globe,
  LineChart,
  Mail,
  Megaphone,
  MonitorSmartphone,
  Palette,
  Search,
  ServerCog,
  Share2,
  Shield,
  Store,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHead, FinalCta } from "@/components/site/Section";

const BOOKING_URL = "https://cal.com/muhammad-asad-6rphhy/15min";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BitForge Innovations — Custom Software & Digital Marketing" },
      {
        name: "description",
        content:
          "BitForge Innovations is a Karachi-based team offering custom software development, digital marketing, SEO, PPC, social media, and business systems including CRM, POS & order management.",
      },
      { property: "og:title", content: "BitForge Innovations — Custom Software & Digital Marketing" },
      {
        property: "og:description",
        content:
          "Custom software, digital marketing, and smart business systems for growing companies.",
      },
    ],
  }),
  component: Home,
});

const systems = [
  {
    icon: Users,
    name: "CRM",
    line: "Leads, follow-ups and deal stages in one place, with the reporting your sales lead actually asks for.",
  },
  {
    icon: Boxes,
    name: "Order Management",
    line: "From order intake to dispatch and returns, with stock counts that stay honest across channels.",
  },
  {
    icon: Store,
    name: "POS",
    line: "Fast counter billing for retail and food, offline-tolerant, with day-close and shift reports.",
  },
  {
    icon: Building2,
    name: "Apartment Management",
    line: "Units, tenants, maintenance dues and complaints tracked without a WhatsApp group and a ledger book.",
  },
];

const services = [
  { icon: Code2, name: "Web Development", line: "Marketing sites, portals and internal dashboards." },
  { icon: MonitorSmartphone, name: "App Development", line: "Android and iOS apps built from one codebase." },
  { icon: ServerCog, name: "Backend Development", line: "APIs, integrations and database design." },
  { icon: Search, name: "SEO", line: "Technical fixes and content structure that ranks." },
  { icon: Target, name: "PPC Advertising", line: "Google and Meta ads tied to real conversions and ROI." },
  { icon: Share2, name: "Social Media Marketing", line: "Strategy, content and community management across platforms." },
  { icon: FileText, name: "Content Marketing", line: "Blog posts, articles and content that attracts and converts." },
  { icon: Mail, name: "Email Marketing", line: "Campaigns, sequences and newsletters that drive engagement." },
  { icon: Palette, name: "Branding & Identity", line: "Logo, visual identity and brand guidelines that stand out." },
  { icon: Shield, name: "Online Reputation Management", line: "Monitor and protect your brand's online presence." },
  { icon: TrendingUp, name: "Affiliate Marketing", line: "Partner programs and referral systems that scale revenue." },
  { icon: Globe, name: "Conversion Rate Optimization", line: "Data-driven improvements to turn visitors into customers." },
  { icon: Cpu, name: "Technical Support", line: "Troubleshooting, maintenance and ongoing technical assistance." },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-40 [mask-image:radial-gradient(80%_60%_at_50%_0%,black,transparent)]" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-12 md:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="fade-up">
            <h1 className="mt-4 font-display text-3xl font-semibold leading-[1.1] md:text-5xl">
              Custom software &amp; digital marketing for growing businesses
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              We build the systems companies run on, including CRM, orders, point of sale and
              property management, and drive growth through SEO, PPC, social media, content and
              email marketing. Small team, direct communication, results you can measure.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  Book a call <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/services">Our services</Link>
              </Button>
            </div>
            <dl className="mt-6 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-5">
              {[
                { k: "Focus", v: "Software & marketing" },
                { k: "Engagement", v: "Written scope" },
                { k: "Handover", v: "Code you own" },
              ].map((s) => (
                <div key={s.k}>
                  <dt className="text-xs text-muted-foreground">{s.k}</dt>
                  <dd className="mt-1 font-display text-lg font-semibold">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative hidden lg:block">
            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <h3 className="font-display text-lg font-semibold">What we can help with</h3>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {[
                  "Custom Software",
                  "Digital Marketing",
                  "SEO & PPC",
                  "Business Systems",
                  "Web & App Dev",
                  "Brand Strategy",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-md border border-border px-3 py-2.5 text-sm"
                  >
                    <BadgeCheck className="h-4 w-4 text-primary" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Systems */}
      <Section>
        <SectionHead
          eyebrow="Core systems"
          title="Four systems we build for businesses"
          lead="Each one starts from a working base our team maintains, then gets shaped around how your business actually operates."
        />
        <div className="mt-8 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
          {systems.map((s) => (
            <div
              key={s.name}
              className="bg-card p-5 transition-colors hover:bg-surface md:p-6"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-surface">
                <s.icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold">{s.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.line}</p>
              <Link
                to="/services"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary"
              >
                Details <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </Section>

      {/* Services */}
      <Section className="bg-surface">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHead
            eyebrow="Services"
            title="What we do day to day"
            lead="From software development to full-scale digital marketing — most clients start with one piece and add the rest as they grow."
          />
          <Button asChild variant="outline">
            <Link to="/services">All services</Link>
          </Button>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.name}
              className="rounded-lg border border-border bg-card p-5 transition-shadow hover:shadow-card"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-surface">
                <s.icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
              </span>
              <h3 className="mt-4 text-base font-semibold">{s.name}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.line}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Trust / how we work */}
      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHead
            eyebrow="How we work"
            title="Predictable delivery, no surprises at invoice time"
            lead="We scope in writing before we start, ship in two-week blocks, and hand over the repository, the database and the documentation at the end."
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                icon: BadgeCheck,
                t: "Fixed scope, fixed price",
                d: "You approve a written scope with a number attached. Changes are quoted separately, never absorbed silently.",
              },
              {
                icon: Users,
                t: "You talk to the builders",
                d: "No account manager relay. The developers on your project join the calls.",
              },
              {
                icon: LineChart,
                t: "Demo every two weeks",
                d: "A working build on a staging link, not a slide deck of progress percentages.",
              },
              {
                icon: Megaphone,
                t: "Transparent reporting",
                d: "Clear monthly reports on what was done, what's next, and how spend maps to results.",
              },
            ].map((i) => (
              <div key={i.t}>
                <i.icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
                <h3 className="mt-3 text-base font-semibold">{i.t}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{i.d}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <FinalCta />
    </>
  );
}
