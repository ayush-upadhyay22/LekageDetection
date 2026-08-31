import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "../../../components/JsonLd";
import { getPost, posts } from "../../../lib/data/blog";
import { articleJsonLd } from "../../../lib/schema";
import { site } from "../../../lib/site";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <main>
      <JsonLd
        data={articleJsonLd(post.title, post.excerpt, `${site.url}/blog/${post.slug}`)}
      />
      <article className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-xs uppercase tracking-[0.16em] text-muted">
          {post.category} · {post.date}
        </p>
        <h1 className="serif mt-4 text-4xl md:text-5xl">{post.title}</h1>
        <p className="mt-6 text-lg text-muted">{post.excerpt}</p>
        <div className="mt-10 space-y-6 text-base leading-8 text-ink">
          {post.body.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
      </article>
    </main>
  );
}
