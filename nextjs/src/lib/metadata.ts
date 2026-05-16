import type { Metadata } from "next";
import { SITE_URL } from "@/config";
import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/constants";

interface SEOOptions {
  title: string;
  description?: string;
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export function createMetadata({
  title,
  description = SITE_DESCRIPTION,
  path = "",
  ogImage = "/images/og-default.png",
  noIndex = false,
}: SEOOptions): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      images: [{ url: ogImage, width: 1200, height: 630 }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [ogImage],
    },
    robots: noIndex ? { index: false, follow: false } : undefined,
  };
}
