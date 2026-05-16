"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useMounted } from "@/hooks/use-mounted";

export function ThemeToggle() {
  const mounted = useMounted();
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setDark(!dark)}
      className="rounded-lg p-2 text-secondary-600 hover:bg-secondary-100"
      aria-label="Toggle theme"
    >
      {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
}
