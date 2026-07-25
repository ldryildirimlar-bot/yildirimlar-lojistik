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

export default function CompanyStory() {
  return (
    <section
      id="company-story"
      aria-labelledby="company-story-heading"
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
            Hikayemiz
          </span>
        </motion.div>

        <motion.h2
          id="company-story-heading"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          custom={0.1}
          variants={fadeUp}
          className="mt-6 max-w-2xl font-display text-3xl leading-tight text-ivory sm:text-4xl md:text-5xl"
        >
          Yolculuğumuz
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          custom={0.2}
          variants={fadeUp}
          className="mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-ivory/70 sm:text-lg"
        >
          <p>
            Lider Yıldırımlar Lojistik &amp; Nakliyat, yurt içi ve
            uluslararası taşımacılık alanında kurumsal bir hizmet
            anlayışıyla yola çıkmıştır.
          </p>
          <p>
            Zaman içinde hizmet kapsamımızı genişleterek, bireysel
            taşımalardan kurumsal lojistik operasyonlarına kadar farklı
            ihtiyaçlara yanıt verebilecek bir yapı oluşturduk.
          </p>
          <p>
            Bugün, planlı operasyon süreçlerimiz ve alanında deneyimli
            ekibimizle, müşterilerimizin taşıma süreçlerini güvenle
            yönetmeye devam ediyoruz.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
