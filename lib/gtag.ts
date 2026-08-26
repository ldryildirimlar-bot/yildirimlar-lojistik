/**
 * Google Ads "İletişim" conversion tracking.
 *
 * The base gtag.js loader and the single `gtag('config', ...)` call already
 * live in app/layout.tsx — nothing in this file adds another <script> tag
 * or another `gtag('config', ...)` call. This module only reports the
 * conversion event on top of that existing tag, for real contact actions:
 * phone click, WhatsApp click, and the quote form's submission.
 */
const CONTACT_CONVERSION_SEND_TO = "AW-16537034021/TyZtCMnNsbIZEKW6vM09";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Fire-and-forget conversion report for actions that never unload the
 * current page — a target="_blank" WhatsApp link, or a background side
 * effect like the quote form's submit handler. Safe to call even if
 * gtag.js hasn't loaded yet (falls back to pushing onto dataLayer directly,
 * matching what gtag() itself does once loaded).
 */
export function trackContactConversion() {
  if (typeof window === "undefined") return;

  if (typeof window.gtag === "function") {
    window.gtag("event", "conversion", { send_to: CONTACT_CONVERSION_SEND_TO });
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(["event", "conversion", { send_to: CONTACT_CONVERSION_SEND_TO }]);
}

/**
 * Google's official click-to-call pattern (the `gtag_report_conversion`
 * snippet), adapted for React: reports the conversion, then completes the
 * same-tab navigation (a tel: link) from gtag's `event_callback` — with a
 * short safety timeout in case gtag.js is blocked or never calls back — so
 * a fast browser navigation can't cut off the conversion beacon.
 *
 * Use this (with event.preventDefault() in the caller) for links that
 * navigate the current tab, e.g. the phone number. Do not use it for
 * target="_blank" links: deferring window.open() out of the synchronous
 * click handler risks the popup being blocked.
 */
export function trackPhoneConversion(href: string) {
  if (typeof window === "undefined") return;

  let navigated = false;
  const navigate = () => {
    if (navigated) return;
    navigated = true;
    window.location.href = href;
  };

  if (typeof window.gtag !== "function") {
    navigate();
    return;
  }

  window.gtag("event", "conversion", {
    send_to: CONTACT_CONVERSION_SEND_TO,
    event_callback: navigate,
  });
  window.setTimeout(navigate, 1000);
}
