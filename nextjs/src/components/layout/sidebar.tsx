"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { DASHBOARD_LINKS, SITE_NAME } from "@/lib/constants";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Sidebar() {
  const pathname = usePathname();
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [open, setOpen] = useState(false);

  if (!isDesktop) {
    return (
      <>
        <button
          onClick={() => setOpen(!open)}
          className="fixed left-4 top-4 z-50 rounded-lg border border-secondary-200 bg-white p-2 shadow-sm"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
        {open && (
          <div className="fixed inset-0 z-40 bg-black/50" onClick={() => setOpen(false)}>
            <aside
              className="h-full w-64 bg-white p-6 shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <SidebarContent pathname={pathname} />
            </aside>
          </div>
        )}
      </>
    );
  }

  return (
    <aside className="w-64 border-r border-secondary-200 bg-white p-6">
      <SidebarContent pathname={pathname} />
    </aside>
  );
}

function SidebarContent({ pathname }: { pathname: string }) {
  return (
    <>
      <Link href="/dashboard" className="text-xl font-bold text-secondary-900">
        {SITE_NAME}
      </Link>
      <nav className="mt-8 flex flex-col gap-2">
        {DASHBOARD_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
              pathname === link.href
                ? "bg-primary-50 text-primary-700"
                : "text-secondary-600 hover:bg-secondary-100",
            )}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </>
  );
}
