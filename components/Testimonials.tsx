"use client";

import { motion, type Variants } from "framer-motion";
import { Quote } from "lucide-react";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: EASE_OUT },
  }),
};

// Temporary SAMPLE feedback for the current design — not real, verified
// customer reviews. No invented names, companies, ratings, or platforms.
// Will be replaced with real customer feedback later.
const SAMPLE_FEEDBACK: { topic: string; quote: string }[] = [
  {
    topic: "Evden Eve Nakliyat",
    quote:
      "Taşınma sürecinin başından sonuna kadar iletişim konusunda gerçekten yardımcı oldular. Ne zaman arasak hızlı dönüş aldık.",
  },
  {
    topic: "Şehirler Arası Taşıma",
    quote:
      "Şehirler arası taşıma için teklif aldık, süreç gayet düzenli ilerledi. Özellikle bilgilendirme konusunda memnun kaldık.",
  },
  {
    topic: "Teklif Süreci",
    quote:
      "Fiyat konusunda baştan net bilgi verdiler. Taşıma günü de planlandığı şekilde ilerledi.",
  },
  {
    topic: "Parsiyel Yük",
    quote:
      "Parsiyel yükümüz için uygun bir çözüm sundular. Süreç boyunca iletişimde kalmaları bizim için önemliydi.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative bg-paper-alt py-24 lg:py-32"
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
            Örnek Müşteri Yorumu
          </span>
        </motion.div>

        <motion.h2
          id="testimonials-heading"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          custom={0.1}
          variants={fadeUp}
          className="mt-6 max-w-2xl font-display text-3xl leading-tight text-charcoal sm:text-4xl md:text-5xl"
        >
          Müşterilerimiz Ne Diyor?
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          custom={0.18}
          variants={fadeUp}
          className="mt-6 max-w-2xl text-sm leading-relaxed text-charcoal/55"
        >
          Aşağıdaki geri bildirimler, tasarım için hazırlanmış örnek
          metinlerdir. Gerçek müşteri geri bildirimleriyle güncellenecektir.
        </motion.p>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SAMPLE_FEEDBACK.map(({ topic, quote }, i) => (
            <motion.div
              key={topic}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              custom={0.05 * i}
              variants={fadeUp}
              className="flex flex-col rounded-xl border border-black/10 bg-white p-7 shadow-[0_10px_30px_-18px_rgba(23,20,15,0.3)]"
            >
              <div className="flex items-start justify-between">
                <Quote className="h-6 w-6 text-gold-dark/60" strokeWidth={1.5} aria-hidden="true" />
                <span className="rounded-full border border-gold/25 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-gold-ink">
                  Örnek
                </span>
              </div>
              <p className="mt-5 flex-1 text-sm leading-relaxed text-charcoal/75">
                &ldquo;{quote}&rdquo;
              </p>
              <p className="mt-6 border-t border-black/10 pt-4 text-xs font-semibold uppercase tracking-wide text-gold-ink">
                {topic}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
