import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/site/Section";
import { CaseStudyCard } from "@/components/case-studies/CaseStudyCard";
import { getAllCaseStudies } from "@/data/case-studies";

export const Route = createFileRoute("/case-studies/")({
  head: () => ({
    meta: [
      { title: "Case Studies — BitForge Innovations" },
      {
        name: "description",
        content:
          "Selected engineering case studies from BitForge Innovations, covering backend, system design, and production fixes.",
      },
      { property: "og:title", content: "Case Studies — BitForge Innovations" },
      {
        property: "og:description",
        content:
          "Practical write-ups of production problems we solved for clients — clear problem, root cause, solution, and result.",
      },
    ],
  }),
  component: CaseStudiesIndex,
});

function CaseStudiesIndex() {
  const studies = getAllCaseStudies();

  return (
    <>
      <PageHeader
        eyebrow="Case studies"
        title="Selected engineering work"
        lead="Short, structured write-ups of production problems we solved — focused on the problem, root cause, and the fix."
      />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {studies.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
      </Section>
    </>
  );
}
