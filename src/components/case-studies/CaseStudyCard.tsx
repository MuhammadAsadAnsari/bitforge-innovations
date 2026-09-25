import { Link } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import type { CaseStudy } from "@/data/case-studies";

type CaseStudyCardProps = {
  study: Pick<CaseStudy, "slug" | "title" | "description" | "tag">;
};

export function CaseStudyCard({ study }: CaseStudyCardProps) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-border bg-card p-6">
      <Badge variant="secondary" className="w-fit font-normal">
        {study.tag}
      </Badge>
      <h2 className="mt-4 font-display text-lg font-semibold leading-snug">
        <Link
          to="/case-studies/$slug"
          params={{ slug: study.slug }}
          className="text-foreground hover:text-primary"
        >
          {study.title}
        </Link>
      </h2>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
        {study.description}
      </p>
      <Link
        to="/case-studies/$slug"
        params={{ slug: study.slug }}
        className="mt-5 text-sm font-medium text-primary hover:underline"
      >
        Read case study →
      </Link>
    </article>
  );
}
