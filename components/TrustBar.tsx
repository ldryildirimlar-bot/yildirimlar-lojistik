"use client";

import { motion, type Variants } from "framer-motion";
import { Globe, Handshake, Headset, MessageCircle, type LucideIcon } from "lucide-react";

const ITEMS: { icon: LucideIcon; label: string }[] = [
  { icon: Globe, label: "Türkiye Geneli Hizmet" },
  { icon: MessageCircle, label: "Hızlı Teklif & İletişim" },
  { icon: Handshake, label: "Güvenilir İş Ortağı Ağı" },
  { icon: Headset, label: "7/24 Destek" },
];

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: EASE_OUT },
  }),
};

/**
 * Slim glass trust strip — designed to sit at the bottom edge of the Hero
 * (not a full independent section with its own padding), so it reads as
 * part of the same cinematic scene rather than a new page block.
 */
export default function TrustBar() {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      custom={0.85}
      variants={fadeUp}
      className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-12"
    >
      <div className="glass grid grid-cols-2 gap-x-6 gap-y-5 rounded-2xl px-6 py-6 sm:grid-cols-4 sm:gap-4 lg:px-10">
        {ITEMS.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3">
            <Icon
              className="h-5 w-5 shrink-0 text-gold"
              strokeWidth={1.75}
              aria-hidden="true"
            />
            <span className="text-sm font-medium leading-snug text-ivory/90">
              {label}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
