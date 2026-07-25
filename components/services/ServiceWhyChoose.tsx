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
          id="service-why-choose-heading"
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
          className={`mt-16 grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2 ${lgCols} lg:gap-x-12 lg:gap-y-12`}
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
              className="group rounded-2xl border border-gold/15 bg-ivory/[0.04] p-10 backdrop-blur-[20px] transition-colors duration-500 hover:border-gold/35"
            >
              <Icon
                className="h-5 w-5 text-gold/70 transition-colors duration-500 group-hover:text-gold"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <h3 className="mt-6 font-display text-xl text-ivory">{title}</h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-ivory/65">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
