export default function SourceDiagram() {
  const nodes = [
    { title: "Visible stain", body: "Paint failure or a wet patch — usually not the origin." },
    { title: "Travel path", body: "Water often moves along a slab, chase, or joint." },
    { title: "Concealed line", body: "A bathroom, terrace, or wall pipe may sit one room away." },
    { title: "Likely source", body: "Documented zone for targeted opening or repair." },
  ];

  return (
    <div>
      <svg
        viewBox="0 0 920 72"
        className="mb-6 hidden h-16 w-full text-scan md:block"
        aria-hidden
      >
        <line x1="40" y1="36" x2="880" y2="36" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="40" cy="36" r="6" fill="currentColor" />
        <circle cx="333" cy="36" r="6" fill="currentColor" />
        <circle cx="626" cy="36" r="6" fill="currentColor" />
        <circle cx="880" cy="36" r="6" className="source-pulse" fill="#b85a2a" />
      </svg>
      <ol className="grid gap-4 md:grid-cols-4">
        {nodes.map((node, index) => (
          <li key={node.title} className="relative border border-line bg-white p-5">
            <p className="font-mono text-xs text-copper">0{index + 1}</p>
            <p className="mt-3 font-medium">{node.title}</p>
            <p className="mt-2 text-sm leading-6 text-muted">{node.body}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
