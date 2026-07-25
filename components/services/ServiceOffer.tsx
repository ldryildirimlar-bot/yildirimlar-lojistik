"use client";

import { motion, type Variants } from "framer-motion";
import type { LucideIcon } from "lucide-react";

export interface OfferItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ServiceOfferProps {
  kicker: string;
  heading: string;
  items: OfferItem[];
}

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: EASE_OUT },
  }),
};

// Literal class names so Tailwind's compiler can discover them, keyed by
// item count so this component adapts cleanly to a different-sized offer
// list on a future service page without hand-tuning the grid each time.
const GRID_COLS_LG: Record<number, string> = {
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
  5: "lg:grid-cols-5",
  6: "lg:grid-cols-3",
};

export default function ServiceOffer({ kicker, heading, items }: ServiceOfferProps) {
  const lgCols = GRID_COLS_LG[items.length] ?? "lg:grid-cols-3";

  return (
    <section
      id="service-offer"
      aria-labelledby="service-offer-heading"
      className="relative bg-black py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          custom={0}
          variants={fadeUp}
          className="flex items-center gap-3"
        >
          <span className="h-px w-8 bg-gold" />
          <span className="text-xs font-medium uppercase tracking-[0.35em] text-gold/90">
            {kicker}
          </span>
        </motion.div>

        <motion.h2
          id="service-offer-heading"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          custom={0.1}
          variants={fadeUp}
          className="mt-6 max-w-2xl font-display text-3xl leading-tight text-ivory sm:text-4xl md:text-5xl"
        >
          {heading}
        </motion.h2>

        <div
          className={`mt-16 grid grid-cols-1 gap-x-12 gap-y-14 sm:grid-cols-2 ${lgCols}`}
        >
          {items.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              custom={0.06 * i}
              variants={fadeUp}
            >
              <Icon
                className="h-6 w-6 text-gold/80"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <h3 className="mt-5 font-display text-lg text-ivory sm:text-xl">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ivory/65">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
