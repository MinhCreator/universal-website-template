import type { MetadataRoute } from "next";
import { SITE_URL } from "@/config";

const routes = [
  "",
  "/about",
  "/blog",
  "/contact",
  "/login",
  "/register",
  "/forgot-password",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
