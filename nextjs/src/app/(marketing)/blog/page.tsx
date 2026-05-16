import type { Metadata } from "next";
import Link from "next/link";
import { getPosts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogPage() {
  const posts = getPosts();

  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-secondary-900">Blog</h1>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="rounded-xl border border-secondary-200 bg-white p-6 transition-shadow hover:shadow-lg"
          >
            <h2 className="text-xl font-semibold text-secondary-900">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="mt-2 text-secondary-600">{post.excerpt}</p>
            <time className="mt-4 block text-sm text-secondary-400">{post.date}</time>
          </article>
        ))}
      </div>
    </section>
  );
}
