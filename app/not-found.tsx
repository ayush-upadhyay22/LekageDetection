import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-xl px-5 py-24 text-center">
      <p className="text-xs uppercase tracking-[0.2em] text-muted">404</p>
      <h1 className="serif mt-3 text-4xl">This page is not in the file.</h1>
      <p className="mt-4 text-muted">The route may have moved, or the city is not listed yet.</p>
      <Link href="/" className="mt-8 inline-flex bg-forest px-5 py-3 text-sm text-paper">
        Back to Aperture
      </Link>
    </main>
  );
}
