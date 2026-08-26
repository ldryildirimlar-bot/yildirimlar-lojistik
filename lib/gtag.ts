/**
 * Fires the Google Ads "İletişim" conversion event for real contact actions
 * (phone click, WhatsApp click, quote-form submission). The base gtag.js
 * loader and config call already live in app/layout.tsx — this only sends
 * the conversion event on top of that existing, single tag. Do not add
 * another gtag('config', ...) call anywhere; this file never does that.
 */
const CONTACT_CONVERSION_SEND_TO = "AW-16537034021/TyZtCMnNsbIZEKW6wM09";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackContactConversion() {
  if (typeof window === "undefined") return;

  if (typeof window.gtag === "function") {
    window.gtag("event", "conversion", {
      send_to: CONTACT_CONVERSION_SEND_TO,
    });
    return;
  }

  // gtag.js hasn't finished loading yet (afterInteractive can lag on a very
  // fast click) — push the same event shape directly so it isn't dropped.
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(["event", "conversion", { send_to: CONTACT_CONVERSION_SEND_TO }]);
}
