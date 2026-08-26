"use client";

import { motion, type Variants } from "framer-motion";
import { Check } from "lucide-react";

const DIFFERENTIATORS = [
  {
    title: "Planlı operasyon",
    description:
      "Her sevkiyat, önceden tanımlanmış bir operasyon planına göre yürütülür.",
  },
  {
    title: "Deneyimli ekip",
    description:
      "Sürücü ve saha ekibimiz, taşıma süreçlerinde edindiği deneyimle çalışır.",
  },
  {
    title: "Güvenli taşıma",
    description: "Yükler, uygun ekipman ve yöntemlerle güvenli şekilde taşınır.",
  },
  {
    title: "Şeffaf iletişim",
    description: "Sevkiyat süreciyle ilgili bilgi akışı düzenli ve nettir.",
  },
  {
    title: "Çözüm odaklı yaklaşım",
    description:
      "Taşıma sürecinde karşılaşılan özel durumlara pratik çözümler üretiriz.",
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

export default function WhyLiderYildirimlar() {
  return (
    <section
      id="why-lider-yildirimlar"
      aria-labelledby="why-lider-yildirimlar-heading"
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
            Neden Lider Yıldırımlar
          </span>
        </motion.div>

        <motion.h2
          id="why-lider-yildirimlar-heading"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          custom={0.1}
          variants={fadeUp}
          className="mt-6 max-w-2xl font-display text-3xl leading-tight text-charcoal sm:text-4xl md:text-5xl"
        >
          Somut Farklar
        </motion.h2>

        <ul className="mt-16 max-w-2xl divide-y divide-black/10">
          {DIFFERENTIATORS.map(({ title, description }, i) => (
            <motion.li
              key={title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              custom={0.06 * i}
              variants={fadeUp}
              className="flex items-start gap-4 py-6 first:pt-0 last:pb-0"
            >
              <Check
                className="mt-1 h-5 w-5 shrink-0 text-gold-dark"
                strokeWidth={2}
                aria-hidden="true"
              />
              <div>
                <h3 className="font-display text-lg text-charcoal sm:text-xl">
                  {title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-charcoal/65 sm:text-base">
                  {description}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
