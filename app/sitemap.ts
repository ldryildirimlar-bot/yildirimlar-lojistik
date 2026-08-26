import type { MetadataRoute } from "next";
import { WEBSITE_URL } from "@/lib/contact";
import { BLOG_ARTICLES } from "@/lib/blog";

const SERVICE_SLUGS = [
  "evden-eve-nakliyat",
  "sehirler-arasi-nakliyat",
  "uluslararasi-lojistik",
  "parsiyel-komple-yuk-tasimaciligi",
  "depolama-ambalajlama",
  "asansor-hizmeti",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: WEBSITE_URL,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${WEBSITE_URL}/hakkimizda`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${WEBSITE_URL}/iletisim`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${WEBSITE_URL}/gizlilik-politikasi`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${WEBSITE_URL}/kullanim-sartlari`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = SERVICE_SLUGS.map((slug) => ({
    url: `${WEBSITE_URL}/hizmetler/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const blogRoutes: MetadataRoute.Sitemap = BLOG_ARTICLES.map((article) => ({
    url: `${WEBSITE_URL}/blog/${article.slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}