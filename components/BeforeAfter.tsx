export default function BeforeAfter() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {[
        {
          label: "Before inspection",
          title: "Recurring dampness",
          body: "The same wall is painted again. The stain returns after the next monsoon or shower cycle.",
        },
        {
          label: "During inspection",
          title: "Mapped, not guessed",
          body: "Moisture readings, surface thermal patterns, and adjacent wet rooms are compared.",
        },
        {
          label: "After diagnosis",
          title: "Suspected source identified",
          body: "Repair can be aimed at a documented zone. Outcomes still depend on access and actual opening-up.",
        },
      ].map((item) => (
        <article key={item.label} className="border border-line bg-white p-6">
          <p className="text-xs uppercase tracking-[0.16em] text-muted">{item.label}</p>
          <h3 className="serif mt-3 text-2xl">{item.title}</h3>
          <p className="mt-3 text-sm leading-6 text-muted">{item.body}</p>
        </article>
      ))}
    </div>
  );
}
