import Link from "next/link";

export default function SectionHeading({
  eyebrow,
  title,
  body,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-forest">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="serif text-3xl leading-tight md:text-4xl">{title}</h2>
      {body ? <p className="mt-4 text-base leading-7 text-muted">{body}</p> : null}
    </div>
  );
}

export function TextLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1 text-sm font-medium text-forest underline-offset-4 hover:underline"
    >
      {children}
    </Link>
  );
}
