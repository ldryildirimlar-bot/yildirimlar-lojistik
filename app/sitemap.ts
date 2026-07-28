import type { MetadataRoute } from "next";
import { WEBSITE_URL } from "@/lib/contact";

const SERVICE_SLUGS = [
  "evden-eve-nakliyat",
  "uluslararasi-lojistik",
  "parsiyel-komple-yuk-tasimaciligi",
  "depolama-ambalajlama",
  "asansor-hizmeti",
  "yol-yardim-cekici",
];

export default function (): MetadataRoute. {
  const now = new Date();

  const staticRoutes: MetadataRoute. = [
    { url: WEBSITE_URL, lastModified: now, changeFrequency: "monthly", priority: 1 },
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

  const serviceRoutes: MetadataRoute. = SERVICE_SLUGS.map((slug) => ({
    url: `${WEBSITE_URL}/hizmetler/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
