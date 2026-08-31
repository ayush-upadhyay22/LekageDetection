import { processSteps } from "../lib/data/process";

export default function ProcessSteps() {
  return (
    <ol className="grid gap-0 md:grid-cols-4">
      {processSteps.map((step, index) => (
        <li key={step.n} className="relative border-t border-ink px-0 py-6 md:px-6 md:first:pl-0">
          {index < processSteps.length - 1 ? (
            <span className="absolute right-0 top-8 hidden h-px w-6 bg-line md:block" />
          ) : null}
          <p className="font-mono text-sm text-copper">{step.n}</p>
          <h3 className="serif mt-2 text-2xl">{step.title}</h3>
          <p className="mt-3 text-sm leading-6 text-muted">{step.body}</p>
        </li>
      ))}
    </ol>
  );
}
