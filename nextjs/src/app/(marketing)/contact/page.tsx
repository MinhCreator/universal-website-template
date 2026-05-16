import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-secondary-900">Contact us</h1>
      <p className="mt-6 max-w-2xl text-lg text-secondary-600">
        Get in touch with our team.
      </p>
    </section>
  );
}
