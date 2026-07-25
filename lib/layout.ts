/**
 * Top clearance for the first section of an internal (non-homepage) page,
 * so its content never sits underneath the fixed Navbar.
 *
 * The homepage Hero is deliberately full-bleed under the transparent-at-top
 * Navbar — do not apply this there. Every other page's Hero-like section
 * should spread this onto its outermost element.
 *
 * Values mirror Navbar's own height exactly (see components/Navbar.tsx):
 * an 80px mobile bar switching to a 112px desktop bar at the `md` breakpoint.
 * If Navbar's height ever changes, update it here too.
 */
export const NAVBAR_CLEARANCE = "pt-20 md:pt-28";
