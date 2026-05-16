export const SITE_NAME = "Universal Website";
export const SITE_DESCRIPTION = "A universal Next.js website template";
export const SITE_KEYWORDS = ["nextjs", "react", "typescript", "tailwindcss"];

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

export const DASHBOARD_LINKS = [
  { href: "/dashboard", label: "Overview", icon: "LayoutDashboard" },
  { href: "/dashboard/profile", label: "Profile", icon: "User" },
  { href: "/dashboard/settings", label: "Settings", icon: "Settings" },
] as const;

export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 10,
  MAX_PAGE_SIZE: 100,
} as const;
