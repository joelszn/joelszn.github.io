import Link from "next/link";
import type { CaseStudy } from "@/data/case-studies";
import Icon from "@/components/Icon";

export default function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Link
      href={`/case-studies/${study.slug}`}
      className="group flex flex-col overflow-hidden rounded-lg border border-border bg-surface transition-all hover:border-accent/50"
    >
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={study.image}
          alt={`${study.title} product screenshot`}
          width={640}
          height={360}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-8">
        <div className="mb-4 flex flex-wrap gap-2">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-background px-3 py-1 text-xs text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-semibold text-foreground">{study.title}</h3>
        <p className="mt-1 text-sm text-muted">{study.subtitle}</p>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          {study.cardDescription}
        </p>
        <div className="mt-6 flex flex-wrap gap-6">
          {study.metrics.map((metric) => (
            <div key={metric.label}>
              <p className="text-lg font-semibold text-foreground">
                {metric.value}
              </p>
              <p className="text-xs text-muted">{metric.label}</p>
            </div>
          ))}
        </div>
        {/* mt-auto pushes this to the bottom of both cards regardless of content height */}
        <p className="mt-auto pt-6 inline-flex items-center gap-1 text-sm text-accent transition-colors group-hover:text-accent-hover">
          View case study
          <Icon
            name="chevronRight"
            className="transition-transform group-hover:translate-x-1"
          />
        </p>
      </div>
    </Link>
  );
}
