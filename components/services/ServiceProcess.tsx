"use client";

import { motion, type Variants } from "framer-motion";
import type { LucideIcon } from "lucide-react";

export interface ProcessStep {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ServiceProcessProps {
  kicker: string;
  heading: string;
  steps: ProcessStep[];
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
// step count so this component adapts to a different number of steps on a
// future service page.
const GRID_COLS_LG: Record<number, string> = {
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
  5: "lg:grid-cols-5",
  6: "lg:grid-cols-6",
};

export default function ServiceProcess({ kicker, heading, steps }: ServiceProcessProps) {
  const lgCols = GRID_COLS_LG[steps.length] ?? "lg:grid-cols-4";
  // Center of the first/last column for an even grid: 50% / column count —
  // computed rather than hard-coded so the line still lines up with the
  // outer numbers regardless of how many steps a future page passes in.
  const lineInset = `${50 / steps.length}%`;

  return (
    <section
      id="service-process"
      aria-labelledby="service-process-heading"
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
          id="service-process-heading"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          custom={0.1}
          variants={fadeUp}
          className="mt-6 max-w-2xl font-display text-3xl leading-tight text-ivory sm:text-4xl md:text-5xl"
        >
          {heading}
        </motion.h2>

        <div className="relative mt-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-12 hidden h-px bg-gradient-to-r from-gold/0 via-gold/30 to-gold/0 lg:block"
            style={{ left: lineInset, right: lineInset }}
          />

          <ol className={`grid grid-cols-1 gap-16 ${lgCols} lg:gap-10`}>
            {steps.map(({ number, icon: Icon, title, description }, i) => (
              <motion.li
                key={number}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                custom={0.08 * i}
                variants={fadeUp}
                className="flex flex-col items-start"
              >
                <div className="flex h-24 items-center">
                  <span className="text-gold-gradient font-display text-7xl leading-none lg:text-8xl">
                    {number}
                  </span>
                </div>
                <Icon
                  className="mt-6 h-4 w-4 text-gold/50"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <h3 className="mt-4 font-display text-lg text-ivory sm:text-xl">
                  {title}
                </h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-ivory/65">
                  {description}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
