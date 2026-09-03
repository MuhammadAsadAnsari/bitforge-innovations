import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader, Section, FinalCta } from "@/components/site/Section";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions, Common Business Scenarios | BitForge Innovations" },
      {
        name: "description",
        content:
          "How our systems would work for distributors, retail chains, building societies, service businesses and manufacturers, with the problem, our approach and the expected result.",
      },
      { property: "og:title", content: "Solutions, BitForge Innovations" },
      {
        property: "og:description",
        content:
          "Five common scenarios showing where custom software pays for itself, written without buzzwords.",
      },
    ],
  }),
  component: Solutions,
});

const scenarios = [
  {
    sector: "Distribution & wholesale",
    title: "Three sales channels, one stock figure",
    situation:
      "A distributor selling through a shop counter, a WhatsApp order line and a small online store usually counts stock once a week in a spreadsheet, so online orders get taken for items already sold at the counter.",
    approach:
      "We would put every channel through one order management system. Stock is reserved the moment an order is confirmed, and the counter, the WhatsApp desk and the website all read the same number.",
    outcome:
      "Cancellations from out of stock orders fall close to zero, and the weekly stock count becomes a verification instead of a discovery.",
  },
  {
    sector: "Retail & food outlets",
    title: "Four branches, one closing report",
    situation:
      "A café group with four locations often sees sales only after each manager sends a photo of the day's register total. Comparing branches or spotting cash shortfalls waits until the end of the month.",
    approach:
      "We would deploy our POS at every counter with offline support, shift open and close, and a single owner dashboard. Cash variance is calculated at close, per shift, per person.",
    outcome:
      "Daily numbers become available the same night without anyone sending a message, and unexplained cash differences are caught immediately.",
  },
  {
    sector: "Property & building societies",
    title: "Maintenance dues that don't start arguments",
    situation:
      "A residential building of around 120 units often tracks maintenance charges in a register. Reminders go out on WhatsApp, receipts are handwritten, and every quarter brings a dispute about who paid.",
    approach:
      "We would set up an apartment management system with a per unit ledger, automated monthly billing, digital receipts and a complaint ticket flow with assignment and closure.",
    outcome:
      "Arrears stay visible per unit at any time, receipts are searchable, and the committee can spend meetings on decisions rather than reconciliation.",
  },
  {
    sector: "Service businesses",
    title: "Leads that stop falling through",
    situation:
      "A commercial interiors firm typically receives enquiries through a website form, Facebook and direct calls. Follow up depends on whoever picks up, and there is no record of what was quoted.",
    approach:
      "We would build a CRM around the actual sales stages, connect the web form and ad platforms to it, and add follow up reminders with quotation history per contact.",
    outcome:
      "Every enquiry gets an owner and a next action date, and the firm can see which marketing channel produces work worth having.",
  },
  {
    sector: "Manufacturing & facilities",
    title: "Sensor data that reaches a person",
    situation:
      "A processing unit may already have temperature and runtime sensors installed, but readings appear only on a panel in the plant. Deviations get noticed on the next walk around, sometimes hours later.",
    approach:
      "We would pull device readings into a time series database, build a simple dashboard with historical charts, and set thresholds that trigger SMS alerts to the shift supervisor.",
    outcome:
      "Deviations get flagged in minutes instead of hours, and the historical record supports maintenance planning rather than guesswork.",
  },
];

function Solutions() {
  return (
    <>
      <PageHeader
        eyebrow="Solutions"
        title="Where custom software actually pays for itself"
        lead="We don't sell transformation. We look at where information gets lost between people, and put a system in that gap. These are five common situations, written as examples rather than client case studies."
      />

      <Section>
        <div className="space-y-14">
          {scenarios.map((s, i) => (
            <article
              key={s.title}
              className="grid gap-8 border-b border-border pb-14 last:border-0 last:pb-0 md:grid-cols-[200px_1fr]"
            >
              <div>
                <p className="font-mono text-xs text-primary">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 text-sm font-medium text-muted-foreground">{s.sector}</p>
              </div>
              <div>
                <h2 className="font-display text-xl font-semibold md:text-2xl">{s.title}</h2>
                <div className="mt-5 grid gap-6 sm:grid-cols-3">
                  {[
                    { k: "The situation", v: s.situation },
                    { k: "How we would build it", v: s.approach },
                    { k: "Expected result", v: s.outcome },
                  ].map((b) => (
                    <div key={b.k}>
                      <h3 className="eyebrow">{b.k}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.v}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-surface">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl font-semibold">
              Not sure which of these is closest to your situation?
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Describe your current process in a few lines, who does what, and where it slows
              down. We'll tell you honestly whether custom software is worth it, or whether an
              existing tool would do the job cheaper.
            </p>
          </div>
          <Button asChild size="lg">
            <a href="https://cal.com/muhammad-asad-6rphhy/15min" target="_blank" rel="noopener noreferrer">
              Talk it through <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </Button>
        </div>
      </Section>

      <FinalCta />
    </>
  );
}
