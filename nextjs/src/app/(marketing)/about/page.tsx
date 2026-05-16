import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-secondary-900">About us</h1>
      <p className="mt-6 max-w-2xl text-lg text-secondary-600">
        We are dedicated to building high-quality web experiences using modern technologies.
      </p>
    </section>
  );
}
