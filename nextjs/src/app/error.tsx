"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h2 className="text-2xl font-bold text-secondary-900">Something went wrong</h2>
      <p className="mt-2 text-secondary-600">{error.message}</p>
      <button
        onClick={reset}
        className="mt-6 rounded-lg bg-primary-600 px-6 py-3 text-white transition-colors hover:bg-primary-700"
      >
        Try again
      </button>
    </div>
  );
}
