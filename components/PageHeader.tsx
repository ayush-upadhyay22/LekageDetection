export default function PageHeader({
  eyebrow,
  title,
  body,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
}) {
  return (
    <header className="border-b border-line bg-[#ece8e0]">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        {eyebrow ? (
          <p className="text-xs uppercase tracking-[0.2em] text-forest">{eyebrow}</p>
        ) : null}
        <h1 className="serif mt-3 max-w-3xl text-4xl md:text-5xl">{title}</h1>
        {body ? <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">{body}</p> : null}
      </div>
    </header>
  );
}
