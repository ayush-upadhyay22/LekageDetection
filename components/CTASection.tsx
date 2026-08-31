import BookLink from "./BookLink";

export default function CTASection({
  title,
  body,
  primary,
  href = "/contact",
}: {
  title: string;
  body: string;
  primary: string;
  href?: string;
}) {
  return (
    <section className="bg-forest text-paper">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-16 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <h2 className="serif text-3xl md:text-4xl">{title}</h2>
          <p className="mt-4 text-paper/75">{body}</p>
        </div>
        <BookLink
          href={href}
          source="cta_section"
          className="bg-copper px-5 py-3 text-sm font-medium text-white hover:bg-copper-2"
        >
          {primary}
        </BookLink>
      </div>
    </section>
  );
}
