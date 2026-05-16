import type { NavItem } from "../types";

export const navItems: NavItem[] = [
  { label: "Home", path: "/", variant: "home" },
  { label: "MUI", path: "/mui", variant: "mui" },
  { label: "Chakra UI", path: "/chakra", variant: "chakra" },
  { label: "daisyUI", path: "/daisy", variant: "daisy" },
  { label: "TanStack Query", path: "/query", variant: "query" },
];

export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}
