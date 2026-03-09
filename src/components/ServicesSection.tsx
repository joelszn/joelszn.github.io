const services = [
  {
    title: "AI Product Strategy",
    description:
      "Roadmapping, PRDs, and go-to-market for AI-powered products. From opportunity sizing to launch.",
  },
  {
    title: "0→1 AI Development",
    description:
      "Taking AI features from concept to shipped product — user research, MVP scoping, and launch strategy.",
  },
  {
    title: "AI Adoption & Growth",
    description:
      "Increasing engagement, optimizing entry points, and driving cross-functional alignment to make AI features stick.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <p className="text-sm uppercase tracking-widest text-muted">
          How I Can Help
        </p>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-lg border border-border bg-surface p-6"
            >
              <h3 className="text-base font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
