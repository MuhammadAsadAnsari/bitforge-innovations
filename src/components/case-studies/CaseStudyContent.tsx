import type { CaseStudy } from "@/data/case-studies";

type CaseStudyContentProps = {
  study: CaseStudy;
};

function ContentSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-border pt-8">
      <h2 className="font-display text-xl font-semibold">{title}</h2>
      <div className="mt-4 space-y-3 text-base leading-relaxed text-muted-foreground">
        {children}
      </div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function CaseStudyContent({ study }: CaseStudyContentProps) {
  return (
    <article className="mx-auto max-w-3xl space-y-10">
      <header>
        <p className="eyebrow">{study.tag}</p>
        <h1 className="mt-3 font-display text-3xl font-semibold leading-tight md:text-4xl">
          {study.title}
        </h1>
      </header>

      <ContentSection title="Overview">
        <p>{study.overview}</p>
      </ContentSection>

      <ContentSection title="Problem">
        <BulletList items={study.problem} />
      </ContentSection>

      <ContentSection title="Root Cause">
        <p>{study.rootCause}</p>
      </ContentSection>

      <ContentSection title="Solution">
        <BulletList items={study.solution} />
        <p className="rounded-md border border-border bg-surface px-4 py-3 text-sm text-foreground">
          {study.solutionNote}
        </p>
      </ContentSection>

      <ContentSection title="Result">
        <BulletList items={study.result} />
      </ContentSection>

      <ContentSection title="Key Takeaway">
        <p className="font-medium text-foreground">{study.keyTakeaway}</p>
      </ContentSection>

      <aside
        className="border border-dashed border-border bg-surface px-6 py-10 text-center"
        aria-label="Diagram placeholder"
      >
        <p className="text-sm font-medium text-muted-foreground">Diagram here</p>
        <p className="mt-1 text-xs text-muted-foreground">
          Replace this block with a diagram or illustration when ready.
        </p>
      </aside>
    </article>
  );
}
