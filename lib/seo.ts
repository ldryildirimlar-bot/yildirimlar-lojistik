import type { Metadata } from "next";
import { COMPANY_NAME } from "./contact";

interface BuildMetadataArgs {
  /** Page-specific title, without the company suffix — that's added automatically. */
  title: string;
  description: string;
  /** Route path, e.g. "/" or "/hakkimizda". Used for the canonical URL and OG url. */
  path: string;
  image?: string;
}

/**
 * Single place that builds a page's full metadata (title, canonical, Open
 * Graph, Twitter card) so every route gets the same consistent shape instead
 * of hand-rolling OG/Twitter blocks per page.
 */
export function buildMetadata({
  title,
  description,
  path,
  image = "/images/logo.png",
}: BuildMetadataArgs): Metadata {
  const fullTitle = path === "/" ? title : `${title} | ${COMPANY_NAME}`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: COMPANY_NAME,
      locale: "tr_TR",
      type: "website",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}
