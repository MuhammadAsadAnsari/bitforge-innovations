export type CaseStudy = {
  slug: string;
  title: string;
  description: string;
  tag: string;
  overview: string;
  problem: string[];
  rootCause: string;
  solution: string[];
  solutionNote: string;
  result: string[];
  keyTakeaway: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "timezone-validation-fix",
    title: "Timezone Validation Fix",
    description:
      "Fixed incorrect timesheet submissions in a UK-based system by implementing timezone-aware validation.",
    tag: "Backend / System Design",
    overview:
      "A UK-based booking platform allowed workers to submit timesheets before their shift started due to timezone mismatch. The system was using local time instead of UK time.",
    problem: [
      "Early submissions were allowed",
      "Validation was based on local/server time",
      "Business rules were not aligned with UK timezone",
    ],
    rootCause:
      "The backend validation logic compared shift times with local time instead of converting current time into UK timezone.",
    solution: [
      "Convert current system time into UK timezone for validation",
      "Compare against shift start time",
      "Allow submission only if shift has started in UK time",
    ],
    solutionNote:
      "Do not modify stored timestamps. Keep raw user input intact. Timezone logic should exist only in validation layer.",
    result: [
      "Blocked early submissions",
      "Ensured correct business logic enforcement",
      "Maintained data integrity",
      "System works correctly across regions",
    ],
    keyTakeaway:
      "Business logic can be timezone-aware, but stored data should remain timezone-agnostic.",
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function getAllCaseStudies(): CaseStudy[] {
  return caseStudies;
}
