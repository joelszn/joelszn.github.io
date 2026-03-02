export default function SectionHeading({
  label,
  heading,
}: {
  label: string;
  heading: string;
}) {
  return (
    <div className="mb-12">
      <p className="text-sm uppercase tracking-widest text-muted">{label}</p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
        {heading}
      </h2>
    </div>
  );
}
