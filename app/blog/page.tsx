import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../../components/PageHeader";
import { blogCategories, posts } from "../../lib/data/blog";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Guides on water leakage, dampness, thermal inspection, and buying a property without ignoring wet-area risk.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Journal"
        title="Field notes, not scare copy."
        body="Short explanations of how moisture actually behaves in buildings — and how to brief an inspection."
      />
      <div className="mx-auto max-w-6xl px-5 py-16">
        <p className="text-xs uppercase tracking-[0.16em] text-muted">Categories we write in</p>
        <ul className="mt-3 flex flex-wrap gap-2 text-sm">
          {blogCategories.map((category) => (
            <li key={category} className="border border-line px-3 py-1">
              {category}
            </li>
          ))}
        </ul>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <article key={post.slug} className="border border-line bg-white p-6">
              <p className="text-xs uppercase tracking-[0.16em] text-muted">
                {post.category} · {post.date}
              </p>
              <h2 className="serif mt-3 text-2xl">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="mt-3 text-sm leading-6 text-muted">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
