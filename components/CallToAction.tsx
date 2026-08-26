"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { WHATSAPP_HREF } from "@/lib/contact";
import { trackContactConversion } from "@/lib/gtag";
import CinematicAtmosphere from "./CinematicAtmosphere";

const MotionLink = motion.create(Link);

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: EASE_OUT },
  }),
};

export default function CallToAction() {
  return (
    <section
      id="cta"
      aria-labelledby="cta-heading"
      className="relative overflow-hidden bg-black py-24 lg:py-32"
    >
      <CinematicAtmosphere
        level="minimal"
        glowPosition="50% 30%"
        cloudPosition="50% 75%"
        cloudPositionSecondary="15% 15%"
      />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 text-center lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          custom={0}
          variants={fadeUp}
          className="flex items-center justify-center gap-3"
        >
          <span className="h-px w-8 bg-gold" />
          <span className="text-xs font-medium uppercase tracking-[0.35em] text-gold/90">
            Teklif Alın
          </span>
        </motion.div>

        <motion.h2
          id="cta-heading"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          custom={0.1}
          variants={fadeUp}
          className="mt-6 font-display text-4xl leading-tight text-ivory sm:text-5xl md:text-6xl"
        >
          Taşıma Sürecinizi Bugün Başlatın
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          custom={0.2}
          variants={fadeUp}
          className="mt-6 max-w-xl text-base leading-relaxed text-ivory/70 sm:text-lg"
        >
          Evden eve nakliyat, şehirler arası taşımacılık ve parsiyel yük
          ihtiyaçlarınız için güvenilir iş ortağı ağımızla hemen iletişime
          geçin.
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          custom={0.32}
          variants={fadeUp}
          className="mt-12 flex flex-col items-center gap-5 sm:flex-row"
        >
          <MotionLink
            href="/#cta"
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-light via-gold to-gold-dark px-9 py-4 text-base font-semibold uppercase tracking-wide text-black shadow-[0_10px_36px_rgba(212,175,55,0.3)] transition-shadow duration-300 hover:shadow-[0_14px_44px_rgba(212,175,55,0.45)]"
          >
            Ücretsiz Teklif Al
            <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
          </MotionLink>

          <motion.a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackContactConversion}
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full bg-whatsapp-green px-9 py-4 text-base font-semibold uppercase tracking-wide text-white shadow-[0_10px_30px_rgba(37,211,102,0.28)] transition-colors duration-300 hover:bg-whatsapp-green-dark"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={2} />
            WhatsApp&apos;tan Ulaş
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
