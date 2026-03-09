import Icon from "@/components/Icon";

export default function Hero() {
  return (
    <section className="flex min-h-dvh items-center px-6">
      <div className="mx-auto flex w-full max-w-4xl flex-col-reverse items-center gap-8 md:flex-row md:gap-12 md:items-center md:justify-between">
        {/* Text */}
        <div className="flex-1">
          <h1 className="text-5xl font-bold tracking-tight text-foreground md:text-7xl">
            Joel Duran
          </h1>
          <p className="mt-4 text-xl font-light text-muted md:text-2xl">
            I build AI products people actually use.
          </p>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
            From Microsoft to WebMD — I turn ambitious ideas into usable, trusted products.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
            >
              View case studies
              <Icon name="arrowDown" className="animate-bounce" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-accent-hover"
            >
              Get in touch
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

        {/* Photo */}
        <div className="w-40 shrink-0 md:w-64">
          <div className="overflow-hidden rounded-2xl border border-border">
            <img
              src="/images/headshot.jpg"
              alt="Joel Duran"
              width={256}
              height={256}
              fetchPriority="high"
              className="h-full w-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
