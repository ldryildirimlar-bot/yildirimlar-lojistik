/**
 * lucide-react no longer ships brand/company logos, so these are small
 * hand-drawn stand-ins shared by the Footer and Contact page rather than
 * pulling in a whole extra icon package for two glyphs.
 */

export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M14 13.5h2.5l.5-4H14V7.5c0-1.03.29-1.5 1.5-1.5H17V2.1C16.34 2.03 15.1 2 13.5 2 10 2 8 4.02 8 7.4V9.5H5.5v4H8V22h6v-8.5Z" />
    </svg>
  );
}
