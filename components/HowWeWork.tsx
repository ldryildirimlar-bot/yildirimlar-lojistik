"use client";

import { motion, type Variants } from "framer-motion";
import { ClipboardList, Lock, PackageCheck, Route, type LucideIcon } from "lucide-react";

const STEPS: {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Teklif Talebi",
    description:
      "Yük bilgilerinizi ve güzergahınızı ileterek taşıma sürecini başlatırsınız.",
  },
  {
    number: "02",
    icon: Route,
    title: "Planlama",
    description:
      "Uygun araç, güzergah ve zaman planlamasını operasyon ekibimiz oluşturur.",
  },
  {
    number: "03",
    icon: Lock,
    title: "Güvenli Taşıma",
    description:
      "Yükünüz, planlanan güzergahta güvenli ve kontrollü şekilde taşınır.",
  },
  {
    number: "04",
    icon: PackageCheck,
    title: "Teslimat",
    description:
      "Sevkiyatınız, belirlenen adrese zamanında ve eksiksiz teslim edilir.",
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

export default function HowWeWork() {
  return (
    <section
      id="how-we-work"
      aria-labelledby="how-we-work-heading"
      className="relative overflow-hidden bg-black py-28 lg:py-32"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
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
            Sürecimiz
          </span>
        </motion.div>

        <motion.h2
          id="how-we-work-heading"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          custom={0.1}
          variants={fadeUp}
          className="mt-6 max-w-2xl font-display text-3xl leading-tight text-ivory sm:text-4xl md:text-5xl"
        >
          Nasıl Çalışıyoruz
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          custom={0.2}
          variants={fadeUp}
          className="mt-6 max-w-xl text-base leading-relaxed text-ivory/70 sm:text-lg"
        >
          Talebinizin alınmasından teslimata kadar sevkiyat sürecini dört
          adımda yönetiyoruz.
        </motion.p>

        <div className="relative mt-24">
          {/* Thin gold connecting line — aligned to the numbers' vertical center, desktop only */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-[12.5%] top-12 hidden h-px bg-gradient-to-r from-gold/0 via-gold/30 to-gold/0 lg:block"
          />

          <ol className="grid grid-cols-1 gap-16 lg:grid-cols-4 lg:gap-10">
            {STEPS.map(({ number, icon: Icon, title, description }, i) => (
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
