"use client";

import { motion, type Variants } from "framer-motion";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: EASE_OUT },
  }),
};

export default function MissionVision() {
  return (
    <section
      id="mission-vision"
      aria-labelledby="mission-vision-heading"
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
            Yaklaşımımız
          </span>
        </motion.div>

        <motion.h2
          id="mission-vision-heading"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          custom={0.1}
          variants={fadeUp}
          className="mt-6 max-w-2xl font-display text-3xl leading-tight text-ivory sm:text-4xl md:text-5xl"
        >
          Misyon &amp; Vizyon
        </motion.h2>

        <div className="mt-16 grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            custom={0.2}
            variants={fadeUp}
            className="border-l border-gold/20 pl-8"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold/80">
              Misyon
            </span>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-ivory/80 sm:text-xl">
              Müşterilerimizin yük ve taşıma ihtiyaçlarını güvenli, planlı ve
              zamanında karşılamak.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            custom={0.3}
            variants={fadeUp}
            className="border-l border-gold/20 pl-8"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold/80">
              Vizyon
            </span>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-ivory/80 sm:text-xl">
              Taşımacılık süreçlerinde güvenilirliği ve operasyonel disiplini
              önceliklendiren bir çözüm ortağı olmak.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
