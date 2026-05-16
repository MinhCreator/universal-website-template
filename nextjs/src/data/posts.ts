import type { Post } from "@/types";

const posts: Post[] = [
  {
    slug: "getting-started",
    title: "Getting Started with Next.js",
    excerpt: "Learn how to build modern web applications with Next.js.",
    content: "Next.js is a React framework that gives you building blocks to create web applications.",
    date: "2026-01-15",
    author: "Admin",
    tags: ["nextjs", "react"],
    published: true,
  },
  {
    slug: "tailwind-css-guide",
    title: "A Guide to Tailwind CSS v4",
    excerpt: "Discover the new features in Tailwind CSS v4.",
    content: "Tailwind CSS v4 introduces a new engine and improved developer experience.",
    date: "2026-02-20",
    author: "Admin",
    tags: ["css", "tailwind"],
    published: true,
  },
];

export function getPosts(): Post[] {
  return posts;
}

export function getPost(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
