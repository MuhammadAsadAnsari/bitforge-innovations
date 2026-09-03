import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageHeader, Section, SectionHead, FinalCta } from "@/components/site/Section";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Web, App, SEO, PPC, Marketing & Business Systems | BitForge" },
      {
        name: "description",
        content:
          "Web and app development, backend engineering, SEO, PPC advertising, social media marketing, content marketing, email marketing, branding, reputation management, affiliate marketing, CRO, IoT support, plus CRM, order management, POS and apartment management systems.",
      },
      { property: "og:title", content: "Services — BitForge Innovations" },
      {
        property: "og:description",
        content:
          "Full-service software development and digital marketing. Web, apps, backends, SEO, PPC, social media, content, email, branding, and four business systems.",
      },
    ],
  }),
  component: Services,
});

type Item = {
  id: string;
  name: string;
  what: string;
  problem: string;
  features: string[];
};

const services: Item[] = [
  {
    id: "web",
    name: "Web Development",
    what: "Company websites, customer portals and internal dashboards built with React and a typed backend, hosted on infrastructure you control.",
    problem:
      "Most businesses come to us with a site nobody can update, a page that takes six seconds to load on mobile data, or a portal that was built by a freelancer who has since disappeared. We rebuild it so your own team can edit content and your developers can read the code.",
    features: [
      "Responsive down to 360px, tested on real devices",
      "Content editing without touching code",
      "Page loads under 2s on a mid-range Android",
      "Analytics and form tracking wired in from day one",
    ],
  },
  {
    id: "app",
    name: "App Development",
    what: "Android and iOS apps from a single codebase — field apps, delivery apps, customer-facing apps and companion apps to the systems we build.",
    problem:
      "Field teams end up working off WhatsApp photos and paper slips, and the office finds out what happened a day later. An app that works offline and syncs when signal returns fixes most of that.",
    features: [
      "Offline-first data capture with background sync",
      "Camera, GPS and barcode scanning where needed",
      "Push notifications for approvals and assignments",
      "Store submission and release management handled by us",
    ],
  },
  {
    id: "backend",
    name: "Backend Development",
    what: "APIs, database design, third-party integrations and the scheduled jobs that keep everything in sync behind the scenes.",
    problem:
      "Growth usually breaks the backend first: reports time out, two systems disagree about stock, and nobody is sure which database row is the truth. We model the data properly and put integrations behind a single, documented API.",
    features: [
      "Relational schema design with real constraints",
      "REST APIs with versioning and documentation",
      "Integrations: payments, couriers, accounting, SMS/WhatsApp",
      "Audit logs, backups and role-based access",
    ],
  },
  {
    id: "seo",
    name: "Search Engine Optimization (SEO)",
    what: "Technical SEO, site structure and content planning for businesses that want to be found for what they actually sell.",
    problem:
      "Ranking problems are usually structural: duplicate pages, missing metadata, slow rendering, or a site that never mentions the terms customers search. We fix the foundation before writing a single blog post.",
    features: [
      "Technical audit with a prioritised fix list",
      "Page titles, metadata and schema markup",
      "Keyword mapping to real service pages",
      "Monthly reporting on positions and clicks, not vanity scores",
    ],
  },
  {
    id: "ppc",
    name: "Pay-Per-Click Advertising (PPC)",
    what: "Google Ads, Meta Ads and other paid campaigns managed for measurable ROI — not impressions, but actual leads and sales.",
    problem:
      "Many businesses run paid ads but can't tell which campaigns bring real customers. We set up proper conversion tracking, build dedicated landing pages, and optimise spend based on cost per qualified lead.",
    features: [
      "Google Ads and Meta Ads campaign setup and management",
      "Conversion tracking and attribution setup",
      "Landing page design tailored to each campaign",
      "Monthly spend and cost-per-lead reporting",
    ],
  },
  {
    id: "social-media",
    name: "Social Media Marketing",
    what: "Strategy, content creation and community management across Facebook, Instagram, LinkedIn and other platforms your audience uses.",
    problem:
      "Posting without a strategy is noise. We create a content calendar aligned with your business goals, manage engagement, and report on what's actually driving reach and conversions.",
    features: [
      "Platform strategy and content calendar",
      "Post creation, scheduling and publishing",
      "Community management and engagement",
      "Performance reporting and optimisation",
    ],
  },
  {
    id: "content-marketing",
    name: "Content Marketing",
    what: "Blog posts, articles, guides and content assets that attract your target audience, build authority and support your SEO and lead generation efforts.",
    problem:
      "Companies know they need content but end up with a blog that hasn't been updated in months and doesn't rank for anything useful. We plan content around the searches your customers actually make.",
    features: [
      "Content strategy aligned with business goals",
      "SEO-optimised blog posts and articles",
      "Content calendar with consistent publishing",
      "Performance tracking and content iteration",
    ],
  },
  {
    id: "email-marketing",
    name: "Email Marketing",
    what: "Email campaigns, automated sequences, newsletters and drip campaigns that nurture leads and keep existing customers engaged.",
    problem:
      "Email lists sit unused, or blasts go out with no segmentation and no tracking. We set up proper sequences — welcome flows, re-engagement campaigns, promotional series — with clear metrics on opens, clicks and conversions.",
    features: [
      "Campaign design and copywriting",
      "Automated sequences and drip campaigns",
      "List segmentation and personalisation",
      "A/B testing and performance analytics",
    ],
  },
  {
    id: "branding",
    name: "Branding & Identity",
    what: "Logo design, visual identity systems, brand guidelines and collateral that give your business a consistent, professional presence.",
    problem:
      "Inconsistent visuals across your website, social media and print materials make your business look unestablished. We create a cohesive brand system that works everywhere.",
    features: [
      "Logo design and visual identity",
      "Brand guidelines and style documentation",
      "Business cards, letterheads and collateral",
      "Social media templates and brand assets",
    ],
  },
  {
    id: "reputation",
    name: "Online Reputation Management",
    what: "Monitoring, managing and improving your brand's online presence across review sites, search results and social platforms.",
    problem:
      "A few bad reviews or negative search results can cost you customers before they even visit your site. We help you monitor mentions, respond appropriately, and build a positive online presence.",
    features: [
      "Review monitoring across platforms",
      "Response strategy and management",
      "Positive content promotion",
      "Brand mention tracking and alerts",
    ],
  },
  {
    id: "affiliate",
    name: "Affiliate Marketing",
    what: "Partner programs, referral systems and affiliate networks that let others sell for you — expanding your reach without expanding your payroll.",
    problem:
      "Building a sales team is expensive and slow. An affiliate or referral program turns your existing customers and partners into a sales channel, but only if the tracking, payouts and incentives are set up properly.",
    features: [
      "Affiliate program strategy and setup",
      "Tracking and attribution systems",
      "Partner recruitment and onboarding",
      "Commission management and reporting",
    ],
  },
  {
    id: "cro",
    name: "Conversion Rate Optimization (CRO)",
    what: "Data-driven analysis and testing to increase the percentage of website visitors who take the action you want — whether that's a purchase, a form fill, or a phone call.",
    problem:
      "You're spending money driving traffic but your website isn't converting. We identify where visitors drop off, test improvements, and measure the impact on your bottom line.",
    features: [
      "Funnel analysis and drop-off identification",
      "A/B testing and multivariate experiments",
      "Heatmaps, session recordings and user behaviour analysis",
      "Landing page optimisation",
    ],
  },
  {
    id: "technical-support",
    name: "Technical Support",
    what: "Ongoing troubleshooting, maintenance and technical assistance for your software, infrastructure and digital products.",
    problem:
      "After launch, things break, servers need updates, dependencies change and users run into issues. Without dedicated support, small problems snowball into downtime and lost revenue.",
    features: [
      "Bug fixes, patches and software maintenance",
      "Server monitoring and infrastructure upkeep",
      "Dependency updates and security patches",
      "Dedicated support channel with response SLAs",
    ],
  },
];

const systems: Item[] = [
  {
    id: "crm",
    name: "CRM Systems",
    what: "A sales and customer database shaped around your pipeline — stages, owners, follow-up dates and the reporting your sales lead reviews on Monday.",
    problem:
      "Leads arrive from a form, a WhatsApp number and three salespeople's phones. Nobody knows which ones were followed up, and when someone leaves, their contacts leave with them.",
    features: [
      "Lead capture from web forms, WhatsApp and calls",
      "Custom pipeline stages and required fields",
      "Follow-up reminders and activity history per contact",
      "Quotations, and reports by owner, source and stage",
    ],
  },
  {
    id: "orders",
    name: "Order Management Systems",
    what: "One place where every order lives from intake to delivery, with inventory that reflects reality across your shop, warehouse and online store.",
    problem:
      "Selling on more than one channel means overselling stock you don't have and chasing courier statuses by phone. Order status becomes a question only one person can answer.",
    features: [
      "Unified order intake across channels",
      "Live stock levels with reserve-on-order",
      "Courier booking and delivery status sync",
      "Returns, exchanges and partial fulfilment",
    ],
  },
  {
    id: "pos",
    name: "POS Systems",
    what: "Counter billing for retail outlets, restaurants and pharmacies — fast keyboard-first entry, receipt printing and shift-wise cash reconciliation.",
    problem:
      "Off-the-shelf POS software either costs a monthly fee per till or stops working the moment the internet drops. Owners with several branches usually can't see today's sales until the day is closed.",
    features: [
      "Works offline and syncs when connectivity returns",
      "Barcode scanning, discounts and split payments",
      "Shift open/close with cash variance reporting",
      "Multi-branch sales visible from one dashboard",
    ],
  },
  {
    id: "apartments",
    name: "Apartment Management Systems",
    what: "Software for building societies and property managers: units, owners, tenants, monthly maintenance billing, complaints and visitor records.",
    problem:
      "Maintenance dues are tracked in a register, reminders go out on WhatsApp, and disputes over who paid what take hours to resolve. Complaints get lost between the guard, the manager and the committee.",
    features: [
      "Unit and tenant registry with lease dates",
      "Automated monthly billing and payment receipts",
      "Dues ledger per unit with arrears reporting",
      "Complaint tickets with assignment and closure trail",
    ],
  },
];

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 space-y-2.5">
      {items.map((f) => (
        <li key={f} className="flex gap-2.5 text-sm leading-relaxed">
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={2} />
          <span>{f}</span>
        </li>
      ))}
    </ul>
  );
}

function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Everything we build and market"
        lead="Software development, digital marketing, and business systems. Every engagement starts with a written scope, so you know what you're getting before anyone writes code or runs a campaign."
      />

      <Section>
        <SectionHead
          eyebrow="Development & marketing"
          title="Services"
        />
        <div className="mt-10 grid gap-x-14 gap-y-14 md:grid-cols-2">
          {services.map((s) => (
            <article key={s.id} id={s.id} className="scroll-mt-24">
              <h2 className="rule-accent font-display text-xl font-semibold">{s.name}</h2>
              <p className="mt-3 leading-relaxed">{s.what}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.problem}</p>
              <Bullets items={s.features} />
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHead
          eyebrow="Business systems"
          title="Systems we deploy"
          lead="Each system starts from a working base we adapt to your process. We build these regularly and they keep getting better with each deployment."
        />

        <div className="mt-12 space-y-16">
          {systems.map((s, i) => (
            <article
              key={s.id}
              id={s.id}
              className="grid scroll-mt-24 gap-10 border-t border-border pt-12 lg:grid-cols-2 lg:items-start"
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <h3 className="font-display text-xl font-semibold">{s.name}</h3>
                <p className="mt-3 leading-relaxed">{s.what}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.problem}</p>
                <Bullets items={s.features} />
              </div>
              <div className={`rounded-lg border border-border bg-card p-8 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-surface">
                    <span className="text-2xl font-bold text-primary">
                      {s.name.charAt(0)}
                    </span>
                  </div>
                  <h4 className="mt-4 font-display text-lg font-semibold">{s.name}</h4>
                  <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                    Custom-built to match your workflow
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <FinalCta />
    </>
  );
}
