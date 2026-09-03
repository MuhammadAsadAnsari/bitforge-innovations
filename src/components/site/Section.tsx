import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

const BOOKING_URL = "https://cal.com/muhammad-asad-6rphhy/15min";

export function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`border-b border-border ${className}`}>
      <div className="mx-auto max-w-6xl px-5 py-12 md:py-16">{children}</div>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  lead,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="mt-3 font-display text-2xl font-semibold md:text-3xl">{title}</h2>
      {lead ? <p className="mt-4 leading-relaxed text-muted-foreground">{lead}</p> : null}
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead: string;
}) {
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-10 md:py-14">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl font-display text-3xl font-semibold leading-tight md:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {lead}
        </p>
      </div>
    </section>
  );
}

export function FinalCta({
  title = "Ready to grow your business? Let's talk.",
  lead = "Tell us about your goals and challenges. We'll come back with a clear plan, a timeline and honest pricing — no obligation.",
}: {
  title?: string;
  lead?: string;
}) {
  return (
    <section className="bg-ink">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 md:flex-row md:items-center md:justify-between md:py-16">
        <div className="max-w-xl">
          <h2 className="font-display text-2xl font-semibold text-ink-foreground md:text-3xl">
            {title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-foreground/70 md:text-base">{lead}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              Book a call
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-ink-foreground/25 bg-transparent text-ink-foreground hover:bg-ink-foreground/10 hover:text-ink-foreground"
          >
            <Link to="/services">See what we build</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
