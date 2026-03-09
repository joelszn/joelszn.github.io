const services = [
  {
    title: "AI Product Definition",
    description:
      "I help teams shape the right AI product before they overbuild — from problem framing and roadmap decisions to launch planning.",
  },
  {
    title: "0 to 1 AI Launches",
    description:
      "I take AI features from concept to shipped experience through research, scoping, UX collaboration, and launch execution.",
  },
  {
    title: "Adoption & Product Growth",
    description:
      "I improve how AI products are discovered, understood, and used — so they drive real engagement after launch.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <p className="text-sm uppercase tracking-widest text-muted">
          Where I Add the Most Value
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
