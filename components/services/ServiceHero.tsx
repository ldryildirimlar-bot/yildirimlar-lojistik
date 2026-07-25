"use client";

import { motion, type Variants } from "framer-motion";
import { NAVBAR_CLEARANCE } from "@/lib/layout";

export interface ServiceHeroProps {
  kicker: string;
  heading: string;
  intro: string;
}

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: EASE_OUT },
  }),
};

export default function ServiceHero({ kicker, heading, intro }: ServiceHeroProps) {
  return (
    <section
      aria-labelledby="service-hero-heading"
      className={`relative flex min-h-[65vh] items-center overflow-hidden bg-black ${NAVBAR_CLEARANCE}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 flex justify-center"
      >
        <div
          className="h-[420px] w-[720px] opacity-60"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 30%, rgba(212,175,55,0.14) 0%, rgba(212,175,55,0) 70%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-6 py-28 text-center lg:px-12">
        <motion.div
          initial="hidden"
          animate="show"
          custom={0}
          variants={fadeUp}
          className="flex items-center justify-center gap-3"
        >
          <span className="h-px w-8 bg-gold" />
          <span className="text-xs font-medium uppercase tracking-[0.35em] text-gold/90">
            {kicker}
          </span>
        </motion.div>

        <motion.h1
          id="service-hero-heading"
          initial="hidden"
          animate="show"
          custom={0.12}
          variants={fadeUp}
          className="mt-6 max-w-3xl font-display text-4xl leading-tight text-ivory sm:text-5xl md:text-6xl"
        >
          {heading}
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="show"
          custom={0.26}
          variants={fadeUp}
          className="mt-6 max-w-xl text-base leading-relaxed text-ivory/70 sm:text-lg"
        >
          {intro}
        </motion.p>
      </div>
    </section>
  );
}
