import Icon from "@/components/Icon";

export default function ConsultingCTA() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="rounded-lg border border-border bg-surface p-8 md:p-12">
          <p className="text-sm uppercase tracking-widest text-muted">
            Available for Consulting
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            Building an AI product?
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-muted">
            I help early-stage teams with product strategy, roadmap definition,
            and go-to-market for AI-powered products. If you&apos;re building
            something and need a thought partner, let&apos;s talk.
          </p>
          <a
            href="mailto:duranjoel.a@gmail.com"
            className="mt-6 inline-flex items-center gap-2 text-accent transition-colors hover:text-accent-hover"
          >
            Get in touch
            <Icon name="arrowRight" />
          </a>
        </div>
      </div>
    </section>
  );
}
