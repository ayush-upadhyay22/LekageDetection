export default function TechnologyCard({
  name,
  body,
}: {
  name: string;
  body: string;
}) {
  return (
    <article className="border border-line bg-white p-5">
      <div className="mb-4 h-px w-8 bg-scan" />
      <h3 className="font-medium">{name}</h3>
      <p className="mt-3 text-sm leading-6 text-muted">{body}</p>
    </article>
  );
}
