import { SITE_NAME } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-secondary-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-secondary-500">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <nav className="flex gap-6">
            <a href="/privacy" className="text-sm text-secondary-500 hover:text-secondary-700">
              Privacy
            </a>
            <a href="/terms" className="text-sm text-secondary-500 hover:text-secondary-700">
              Terms
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
