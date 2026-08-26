"use client";

import { motion, type Variants } from "framer-motion";
import { Globe, Handshake, MessageCircle, ShieldCheck, type LucideIcon } from "lucide-react";

const REASONS: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Globe,
    title: "Türkiye Genelinde Organizasyon",
    description:
      "Türkiye'nin dört bir yanında taşıma süreçlerinizi organize ediyoruz.",
  },
  {
    icon: Handshake,
    title: "Güvenilir İş Ortağı Ağı",
    description:
      "Deneyimli ve güvenilir iş ortaklarımızla sürecinizi profesyonelce yürütüyoruz.",
  },
  {
    icon: MessageCircle,
    title: "Hızlı İletişim",
    description:
      "Teklif taleplerinize ve sorularınıza hızlı şekilde geri dönüş sağlıyoruz.",
  },
  {
    icon: ShieldCheck,
    title: "Şeffaf Süreç",
    description:
      "Taşıma sürecinin her aşamasını başından itibaren netleştiriyoruz.",
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

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      aria-labelledby="why-choose-us-heading"
      className="relative overflow-hidden bg-paper-alt py-24 lg:py-32"
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
          <span className="h-px w-8 bg-gold-dark" />
          <span className="text-xs font-medium uppercase tracking-[0.35em] text-gold-ink">
            Neden Biz
          </span>
        </motion.div>

        <motion.h2
          id="why-choose-us-heading"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          custom={0.1}
          variants={fadeUp}
          className="mt-6 max-w-2xl font-display text-3xl leading-tight text-charcoal sm:text-4xl md:text-5xl"
        >
          Neden Yıldırımlar?
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          custom={0.2}
          variants={fadeUp}
          className="mt-6 max-w-xl text-base leading-relaxed text-charcoal/70 sm:text-lg"
        >
          Sevkiyatlarınızı, deneyimli operasyon ekibimiz ve kurumsal süreç
          standartlarımızla yönetiyoruz.
        </motion.p>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              custom={0.08 * i}
              variants={fadeUp}
              whileHover={{ y: -4, transition: { duration: 0.3, ease: "easeOut" } }}
              className="flex flex-col items-start rounded-xl border border-black/10 bg-white p-7 shadow-[0_10px_30px_-18px_rgba(23,20,15,0.3)] transition-all duration-500 hover:border-gold/30"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/25 bg-gold/[0.06]">
                <Icon className="h-5 w-5 text-gold-dark" strokeWidth={1.5} aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-lg text-charcoal">{title}</h3>
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
