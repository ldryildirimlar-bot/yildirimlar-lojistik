"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, Globe, Headset, MessageCircle, ShieldCheck } from "lucide-react";
import HeroBackground from "./HeroBackground";

const MotionLink = motion.create(Link);

const TRUST_ITEMS = [
  { icon: ShieldCheck, label: "Güvenilir Hizmet" },
  { icon: Headset, label: "Profesyonel Destek" },
  { icon: Globe, label: "Türkiye Geneli" },
];

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, delay, ease: EASE_OUT },
  }),
};

const blurReveal: Variants = {
  hidden: { opacity: 0, y: 22, filter: "blur(8px)" },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, delay, ease: EASE_OUT },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[96vh] items-center overflow-hidden bg-black"
    >
      <HeroBackground />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-6 py-28 lg:px-12">
        <div className="flex max-w-xl flex-col items-start text-left">
          <motion.div
            initial="hidden"
            animate="show"
            custom={0}
            variants={fadeUp}
            className="mb-6 flex items-center gap-3"
          >
            <span className="h-px w-8 bg-gold" />
            <span className="text-xs font-medium uppercase tracking-[0.35em] text-gold/90">
              Lider Yıldırımlar Lojistik &amp; Nakliyat
            </span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="show"
            custom={0.15}
            variants={blurReveal}
            className="font-display text-4xl leading-tight text-ivory sm:text-5xl md:text-6xl lg:text-[4.25rem] lg:leading-[1.12]"
          >
            Türkiye&apos;nin Güvenilir{" "}
            <span className="text-gold-gradient">Lojistik ve Nakliyat</span>{" "}
            Çözüm Ortağı
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            custom={0.32}
            variants={fadeUp}
            className="mt-6 max-w-md text-balance text-base leading-relaxed text-ivory/70 sm:text-lg"
          >
            Evden eve, şehirler arası ve kurumsal taşımacılık çözümlerinde
            güvenilir hizmet sunuyoruz.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            custom={0.48}
            variants={fadeUp}
            className="mt-10 flex flex-col items-start gap-5 sm:flex-row"
          >
            <MotionLink
              href="/#cta"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-light via-gold to-gold-dark px-9 py-4 text-base font-semibold tracking-wide text-black shadow-[0_10px_36px_rgba(212,175,55,0.3)] transition-shadow duration-300 hover:shadow-[0_14px_44px_rgba(212,175,55,0.45)]"
            >
              Teklif Al
              <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
            </MotionLink>

            <motion.a
              href="https://wa.me/905352955210"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-9 py-4 text-base font-semibold tracking-wide text-ivory transition-colors duration-300 hover:border-gold hover:bg-gold/5 hover:text-gold"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={2} />
              WhatsApp
            </motion.a>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            custom={0.64}
            variants={fadeUp}
            className="mt-14 flex flex-wrap items-start gap-x-10 gap-y-4"
          >
            {TRUST_ITEMS.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2.5">
                <Icon className="h-4 w-4 text-gold" strokeWidth={2} />
                <span className="text-sm font-medium text-ivory/85">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-ivory/25 p-1.5">
          <motion.span
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-gold"
          />
        </div>
      </motion.div>
    </section>
  );
}
