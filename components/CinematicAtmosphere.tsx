/**
 * Shared, extremely subtle background atmosphere for the homepage sections
 * below the Hero — continues the Hero's golden-hour visual language (warm
 * light, soft cloud/fog depth, faint amber reflection) using only layered
 * CSS gradients, never the Hero photo or the truck.
 *
 * `level` implements the requested lighting rhythm: each section one step
 * dimmer than the last, so the page reads as one continuous environment
 * gradually settling toward black rather than repeated identical glows.
 */

type AtmosphereLevel = "soft" | "balanced" | "dim" | "minimal";

const LEVELS: Record<AtmosphereLevel, { glow: number; cloud: number; amber: number }> = {
  soft: { glow: 0.12, cloud: 0.5, amber: 0.06 },
  balanced: { glow: 0.1, cloud: 0.46, amber: 0.05 },
  dim: { glow: 0.07, cloud: 0.42, amber: 0.035 },
  minimal: { glow: 0.045, cloud: 0.32, amber: 0.02 },
};

export interface CinematicAtmosphereProps {
  level: AtmosphereLevel;
  /** CSS radial-gradient position, e.g. "50% 0%" */
  glowPosition?: string;
  cloudPosition?: string;
  cloudPositionSecondary?: string;
}

export default function CinematicAtmosphere({
  level,
  glowPosition = "50% 0%",
  cloudPosition = "20% 60%",
  cloudPositionSecondary = "80% 85%",
}: CinematicAtmosphereProps) {
  const { glow, cloud, amber } = LEVELS[level];
  const cloudSecondary = cloud * 0.6;

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Warm golden-hour light, continuing the Hero's mood */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(65% 55% at ${glowPosition}, rgba(212,175,55,${glow}) 0%, rgba(212,175,55,0) 70%)`,
        }}
      />
      {/* Soft cloud / atmospheric fog depth */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(55% 45% at ${cloudPosition}, rgba(22,22,22,${cloud}) 0%, rgba(22,22,22,0) 70%)`,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(50% 40% at ${cloudPositionSecondary}, rgba(13,13,13,${cloudSecondary}) 0%, rgba(13,13,13,0) 70%)`,
        }}
      />
      {/* Faint amber reflection streak */}
      <div
        className="absolute left-1/4 top-0 h-full w-1/3 -rotate-12 blur-3xl"
        style={{
          background: `linear-gradient(180deg, transparent 0%, rgba(241,217,122,${amber}) 50%, transparent 100%)`,
        }}
      />
    </div>
  );
}
