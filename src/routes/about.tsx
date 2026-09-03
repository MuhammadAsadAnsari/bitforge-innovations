import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section, FinalCta } from "@/components/site/Section";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About BitForge Innovations — Software & Digital Marketing Team in Karachi" },
      {
        name: "description",
        content:
          "BitForge Innovations is a software and digital marketing team in Karachi building custom systems and running growth campaigns for businesses.",
      },
      { property: "og:title", content: "About BitForge Innovations" },
      {
        property: "og:description",
        content:
          "A small, direct team building business software and running digital marketing. Written scopes, two-week demos, full handover.",
      },
    ],
  }),
  component: About,
});

const steps = [
  {
    k: "01",
    t: "We start with your process, not a feature list",
    d: "The first call is about how work moves through your business today — who enters what, where it waits, what gets re-typed. Most of the useful requirements come out of that conversation, not a specification document.",
  },
  {
    k: "02",
    t: "Scope in writing, with a number",
    d: "You get a document listing what will be built, what won't, how long it takes and what it costs. If something is added later, it's quoted separately. Nobody discovers a surprise at invoice time.",
  },
  {
    k: "03",
    t: "Two-week blocks, working builds",
    d: "Every two weeks there's something on a staging link you can click through. Feedback goes into the next block. This is also how we catch requirements that were wrong on paper.",
  },
  {
    k: "04",
    t: "Launch, then stay reachable",
    d: "We handle deployment, data migration and training your team. After launch you can keep a small monthly support arrangement, and the code, database and hosting accounts are yours from day one.",
  },
];

function About() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="A small team that builds software and grows businesses"
        lead="BitForge Innovations is a software and digital marketing team based in Karachi. We're builders first — no sales layer between you and the people doing the work."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="rule-accent font-display text-xl font-semibold">What we do</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We build the software a company runs on internally: CRMs, order and inventory
              systems, point of sale, property management. Around those we do web development,
              mobile apps, backend and integration work.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              On the growth side, we handle SEO, PPC advertising, social media marketing,
              content marketing, email campaigns, branding, and conversion rate optimisation.
              Everything is tied to measurable outcomes, not vanity metrics.
            </p>
          </div>
          <div>
            <h2 className="rule-accent font-display text-xl font-semibold">Who we help</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Businesses between roughly 10 and 200 people that have outgrown spreadsheets and
              WhatsApp groups, but are too specific for off-the-shelf software. Distributors,
              retail and food chains, building societies, service firms and small manufacturers.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Typically the owner or an operations lead is the one who notices the problem first:
              reports take a day to compile, two people disagree about the same number, or growth
              means hiring another admin instead of fixing the process. That's the point where we
              tend to be useful.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-surface">
        <h2 className="font-display text-2xl font-semibold md:text-3xl">How we work</h2>
        <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2">
          {steps.map((s) => (
            <div key={s.k} className="bg-card p-6 md:p-8">
              <p className="font-mono text-xs text-primary">{s.k}</p>
              <h3 className="mt-3 font-display text-lg font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 md:grid-cols-3">
          {[
            {
              t: "Our stack",
              d: "React and TypeScript on the front end, Node and PostgreSQL behind it, React Native for mobile. Well-documented choices that any developer can pick up after us.",
            },
            {
              t: "What we won't do",
              d: "We don't take projects we can't staff properly, we don't quote before we understand the process, and we don't hold hosting or source code hostage.",
            },
            {
              t: "Where we work",
              d: "Our office is in Karachi and we meet clients locally when it helps. We also work remotely with clients in other cities and countries.",
            },
          ].map((c) => (
            <div key={c.t}>
              <h3 className="text-base font-semibold">{c.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <FinalCta
        title="Want to see whether we're a fit?"
        lead="A 15-minute call is usually enough to tell. If we're not the right team, we'll say so."
      />
    </>
  );
}
