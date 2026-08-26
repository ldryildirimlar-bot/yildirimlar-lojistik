"use client";

import { motion, type Variants } from "framer-motion";
import type { LucideIcon } from "lucide-react";

export interface WhyChooseItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ServiceWhyChooseProps {
  kicker: string;
  heading: string;
  items: WhyChooseItem[];
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
// item count so this component adapts to a different-sized list on a
// future service page.
const GRID_COLS_LG: Record<number, string> = {
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
  5: "lg:grid-cols-5",
  6: "lg:grid-cols-3",
};

export default function ServiceWhyChoose({
  kicker,
  heading,
  items,
}: ServiceWhyChooseProps) {
  const lgCols = GRID_COLS_LG[items.length] ?? "lg:grid-cols-4";

  return (
    <section
      id="service-why-choose"
      aria-labelledby="service-why-choose-heading"
      className="relative bg-paper py-28 lg:py-32"
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
          <span className="h-px w-8 bg-gold-dark" />
          <span className="text-xs font-medium uppercase tracking-[0.35em] text-gold-ink">
            {kicker}
          </span>
        </motion.div>

        <motion.h2
          id="service-why-choose-heading"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          custom={0.1}
          variants={fadeUp}
          className="mt-6 max-w-2xl font-display text-3xl leading-tight text-charcoal sm:text-4xl md:text-5xl"
        >
          {heading}
        </motion.h2>

        <div
          className={`mt-16 grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2 ${lgCols} lg:gap-x-8 lg:gap-y-8`}
        >
          {items.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              custom={0.08 * i}
              variants={fadeUp}
              whileHover={{ y: -4, transition: { duration: 0.3, ease: "easeOut" } }}
              className="group rounded-xl border border-black/10 bg-white p-8 shadow-[0_10px_30px_-18px_rgba(23,20,15,0.3)] transition-all duration-500 hover:border-gold/30"
            >
              <Icon
                className="h-5 w-5 text-gold-dark transition-colors duration-500"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <h3 className="mt-6 font-display text-xl text-charcoal">{title}</h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-charcoal/65">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
