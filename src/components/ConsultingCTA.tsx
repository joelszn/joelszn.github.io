import Icon from "@/components/Icon";

export default function ConsultingCTA() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="rounded-lg border border-border bg-surface p-8 md:p-12">
          <p className="text-sm uppercase tracking-widest text-muted">
            Open to Select Opportunities
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            I help teams define, launch, and grow AI products.
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-muted">
            I bring experience across AI product strategy, launch execution, and
            product adoption — shaped by work at Microsoft and now WebMD.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="mailto:duranjoel.a@gmail.com"
              className="inline-flex items-center gap-2 text-accent transition-colors hover:text-accent-hover"
            >
              Get in touch
              <Icon name="arrowRight" />
            </a>
            <a
              href="https://www.linkedin.com/in/joeldabr/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-muted transition-colors hover:text-foreground"
            >
              <Icon name="linkedin" size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
