"use client";

import { motion, type Variants } from "framer-motion";
import { Award, Clock, ShieldCheck, Smile, type LucideIcon } from "lucide-react";

const VALUES: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: ShieldCheck,
    title: "Güvenilirlik",
    description: "Taahhüt ettiğimiz hizmeti eksiksiz ve tutarlı şekilde sunarız.",
  },
  {
    icon: Award,
    title: "Profesyonellik",
    description: "Operasyon süreçlerimizi kurumsal standartlarla yürütürüz.",
  },
  {
    icon: Smile,
    title: "Müşteri Memnuniyeti",
    description:
      "Müşteri geri bildirimlerini süreçlerimize aktif olarak dahil ederiz.",
  },
  {
    icon: Clock,
    title: "Zamanında Hizmet",
    description: "Planlanan teslimat ve hizmet sürelerine bağlı kalırız.",
  },
];

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: EASE_OUT },
  }),
};

export default function CoreValues() {
  return (
    <section
      id="core-values"
      aria-labelledby="core-values-heading"
      className="relative bg-paper-alt py-28 lg:py-32"
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
            Değerlerimiz
          </span>
        </motion.div>

        <motion.h2
          id="core-values-heading"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          custom={0.1}
          variants={fadeUp}
          className="mt-6 max-w-2xl font-display text-3xl leading-tight text-charcoal sm:text-4xl md:text-5xl"
        >
          Temel Değerlerimiz
        </motion.h2>

        <div className="mt-16 grid grid-cols-1 gap-x-12 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              custom={0.08 * i}
              variants={fadeUp}
            >
              <Icon
                className="h-6 w-6 text-gold-dark"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <h3 className="mt-5 font-display text-lg text-charcoal sm:text-xl">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/65">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
