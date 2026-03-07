import Icon from "@/components/Icon";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center px-6">
      <div className="mx-auto flex w-full max-w-4xl flex-col-reverse items-center gap-12 md:flex-row md:items-center md:justify-between">
        {/* Text */}
        <div className="flex-1">
          <h1 className="text-5xl font-bold tracking-tight text-foreground md:text-7xl">
            Joel Duran
          </h1>
          <p className="mt-4 text-xl font-light text-muted md:text-2xl">
            AI Product Manager
          </p>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
            Building intelligent products at the intersection of AI and user
            experience. Previously shipping{" "}
            <span className="text-foreground">Copilot</span> &{" "}
            <span className="text-foreground">Recall</span> at Microsoft to
            hundreds of millions of users.
          </p>
          <a
            href="#work"
            className="mt-10 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
          >
            View my work
            <Icon name="arrowDown" className="animate-bounce" />
          </a>
        </div>

        {/* Photo */}
        <div className="w-48 shrink-0 md:w-64">
          <div className="overflow-hidden rounded-2xl border border-border">
            <img
              src="/images/headshot.jpg"
              alt="Joel Duran"
              width={256}
              height={256}
              className="h-full w-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
