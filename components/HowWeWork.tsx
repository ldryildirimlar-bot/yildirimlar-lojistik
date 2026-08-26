"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ClipboardList, Headset, MapPin, Truck, type LucideIcon } from "lucide-react";

const STEPS: {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    number: "01",
    icon: Headset,
    title: "Talebinizi Alıyoruz",
    description:
      "Nereden nereye, ne zaman ve ne taşınacağını öğrenerek süreci başlatıyoruz.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "İhtiyacınızı Belirliyoruz",
    description:
      "Taşımanızın kapsamını ve gerekli hizmetleri birlikte değerlendiriyoruz.",
  },
  {
    number: "03",
    icon: MapPin,
    title: "Çözümü Planlıyoruz",
    description:
      "İhtiyacınıza uygun taşıma çözümünü ve güzergahı planlıyoruz.",
  },
  {
    number: "04",
    icon: Truck,
    title: "Süreci Koordine Ediyoruz",
    description:
      "Taşımanın planlandığı şekilde gerçekleşmesini baştan sona takip ediyoruz.",
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
      className="relative overflow-hidden bg-paper-alt py-24 lg:py-32"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
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
              className="mt-6 max-w-xl font-display text-4xl leading-tight text-charcoal sm:text-5xl"
            >
              Nasıl Çalışıyoruz
            </motion.h2>

            <motion.p
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              custom={0.2}
              variants={fadeUp}
              className="mt-6 max-w-lg text-base leading-relaxed text-charcoal/70 sm:text-lg"
            >
              Talebinizin alınmasından teslimata kadar sevkiyat sürecini dört
              adımda yönetiyoruz.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: EASE_OUT }}
            className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-gold/15"
          >
            <Image
              src="/images/hero-truck.png"
              alt=""
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover object-right"
            />
          </motion.div>
        </div>

        <div className="relative mt-20">
          {/* Thin gold connecting line — aligned to the numbers' vertical center, desktop only */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-[12.5%] top-12 hidden h-px bg-gradient-to-r from-gold-dark/0 via-gold-dark/40 to-gold-dark/0 lg:block"
          />

          <ol className="grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
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
                  className="mt-6 h-4 w-4 text-gold-dark/70"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <h3 className="mt-4 font-display text-xl text-charcoal sm:text-2xl">
                  {title}
                </h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-charcoal/65">
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
