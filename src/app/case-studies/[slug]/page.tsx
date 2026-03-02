import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { caseStudies } from "@/data/case-studies";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((cs) => cs.slug === slug);
  if (!study) return {};
  return {
    title: `${study.title} — Joel Duran`,
    description: study.cardDescription,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies.find((cs) => cs.slug === slug);
  if (!study) notFound();

  const currentIndex = caseStudies.findIndex((cs) => cs.slug === slug);
  const nextStudy = caseStudies[(currentIndex + 1) % caseStudies.length];

  return (
    <main className="pt-24 pb-24 md:pb-32">
      <div className="mx-auto max-w-3xl px-6">
        <Link
          href="/#work"
          className="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-foreground"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M10 3l-5 5 5 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back to home
        </Link>

        <div className="mt-12">
          <div className="flex flex-wrap gap-2">
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-surface px-3 py-1 text-xs text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            {study.title}
          </h1>
          <p className="mt-2 text-lg text-muted">{study.subtitle}</p>
        </div>

        <div className="mt-10 overflow-hidden rounded-lg border border-border">
          <img
            src={study.image}
            alt={`${study.title} product screenshot`}
            className="w-full object-cover"
          />
        </div>

        <div className="mt-8 flex flex-wrap gap-8 rounded-lg border border-border bg-surface p-6">
          {study.metrics.map((metric) => (
            <div key={metric.label}>
              <p className="text-2xl font-bold text-foreground">
                {metric.value}
              </p>
              <p className="text-sm text-muted">{metric.label}</p>
            </div>
          ))}
        </div>

        <article className="mt-16 space-y-12">
          <section>
            <h2 className="text-sm uppercase tracking-widest text-muted">
              The Problem
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              {study.sections.problem}
            </p>
          </section>

          <section>
            <h2 className="text-sm uppercase tracking-widest text-muted">
              The Approach
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              {study.sections.approach}
            </p>
          </section>

          <section>
            <h2 className="text-sm uppercase tracking-widest text-muted">
              The Outcome
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              {study.sections.outcome}
            </p>
          </section>
        </article>

        {nextStudy && nextStudy.slug !== study.slug && (
          <div className="mt-24 border-t border-border pt-12">
            <p className="text-sm text-muted">Next case study</p>
            <Link
              href={`/case-studies/${nextStudy.slug}`}
              className="group mt-2 inline-flex items-center gap-2 text-xl font-semibold text-foreground transition-colors hover:text-accent"
            >
              {nextStudy.title}
              <svg
                width="20"
                height="20"
                viewBox="0 0 16 16"
                fill="none"
                className="transition-transform group-hover:translate-x-1"
              >
                <path
                  d="M3 8h10m0 0l-4-4m4 4l-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
