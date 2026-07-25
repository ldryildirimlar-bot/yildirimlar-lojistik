import type { MetadataRoute } from "next";
import { COMPANY_NAME } from "@/lib/contact";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: COMPANY_NAME,
    short_name: "Lider Yıldırımlar",
    description:
      "Türkiye'nin güvenilir lojistik ve nakliyat çözüm ortağı.",
    start_url: "/",
    display: "standalone",
    background_color: "#050505",
    theme_color: "#050505",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
