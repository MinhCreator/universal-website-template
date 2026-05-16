import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPosts, getPost } from "@/data/posts";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: post.title };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-secondary-900">{post.title}</h1>
      <time className="mt-4 block text-sm text-secondary-400">{post.date}</time>
      <div className="prose prose-secondary mt-12 max-w-none">{post.content}</div>
    </article>
  );
}
