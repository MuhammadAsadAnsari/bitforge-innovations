import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { CaseStudyContent } from "@/components/case-studies/CaseStudyContent";
import { Section } from "@/components/site/Section";
import { getCaseStudyBySlug } from "@/data/case-studies";

export const Route = createFileRoute("/case-studies/$slug")({
  loader: ({ params }) => {
    const study = getCaseStudyBySlug(params.slug);
    if (!study) {
      throw notFound();
    }
    return { study };
  },
  head: ({ loaderData }) => {
    const study = loaderData?.study;
    if (!study) {
      return { meta: [{ title: "Case Study — BitForge Innovations" }] };
    }
    return {
      meta: [
        { title: `${study.title} — Case Study | BitForge Innovations` },
        { name: "description", content: study.description },
        { property: "og:title", content: `${study.title} — Case Study` },
        { property: "og:description", content: study.description },
      ],
    };
  },
  component: CaseStudyDetail,
});

function CaseStudyDetail() {
  const { study } = Route.useLoaderData();

  return (
    <Section>
      <nav className="mb-8 text-sm text-muted-foreground" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link to="/case-studies" className="hover:text-foreground">
              Case studies
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-foreground">{study.title}</li>
        </ol>
      </nav>

      <CaseStudyContent study={study} />
    </Section>
  );
}
