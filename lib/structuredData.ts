import { COMPANY_NAME, EMAIL_ADDRESS, INSTAGRAM_URL, PHONE_E164, WEBSITE_URL } from "./contact";

/**
 * Sitewide JSON-LD (schema.org MovingCompany). Only real business details —
 * no ratings, reviews, or statistics, since none of those exist yet.
 */
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  name: COMPANY_NAME,
  url: WEBSITE_URL,
  image: `${WEBSITE_URL}/images/logo.png`,
  telephone: PHONE_E164,
  email: EMAIL_ADDRESS,
  address: {
    "@type": "PostalAddress",
    addressLocality: "İpekyolu",
    addressRegion: "Van",
    addressCountry: "TR",
  },
  areaServed: "TR",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  sameAs: [INSTAGRAM_URL],
} as const;
