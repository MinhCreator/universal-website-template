export default function HomePage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-6xl">
          Build something great
        </h1>
        <p className="mt-6 text-lg leading-8 text-secondary-600">
          A universal Next.js template with TypeScript, Tailwind CSS, and best practices built in.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href="/about"
            className="rounded-lg bg-primary-600 px-6 py-3 text-white transition-colors hover:bg-primary-700"
          >
            Learn more
          </a>
          <a
            href="/contact"
            className="rounded-lg border border-secondary-300 px-6 py-3 text-secondary-700 transition-colors hover:bg-secondary-100"
          >
            Contact us
          </a>
        </div>
      </div>
    </section>
  );
}
