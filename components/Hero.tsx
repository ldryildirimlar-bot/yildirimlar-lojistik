"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { PHONE_HREF, WHATSAPP_HREF } from "@/lib/contact";
import { trackContactConversion } from "@/lib/gtag";
import TrustBar from "./TrustBar";

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

function Kicker() {
  return (
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
  );
}

function Headline({ className = "" }: { className?: string }) {
  return (
    <motion.h1
      initial="hidden"
      animate="show"
      custom={0.15}
      variants={blurReveal}
      className={`font-display leading-tight text-ivory ${className}`}
    >
      Van&apos;dan
      <br />
      Türkiye&apos;nin Her Noktasına
      <br />
      <span className="text-gold-gradient">Güvenilir Lojistik Çözümler</span>
    </motion.h1>
  );
}

function Subtext({ className = "" }: { className?: string }) {
  return (
    <motion.p
      initial="hidden"
      animate="show"
      custom={0.32}
      variants={fadeUp}
      className={`text-balance leading-relaxed text-ivory/70 ${className}`}
    >
      Evden eve, şehirler arası ve kurumsal taşımacılık ihtiyaçlarınız için
      uçtan uca lojistik çözümler sunuyoruz. Yükünüzü güvenle, zamanında ve
      sorunsuz ulaştırıyoruz.
    </motion.p>
  );
}

function CtaButtons({ className = "" }: { className?: string }) {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      custom={0.48}
      variants={fadeUp}
      className={`flex flex-col items-stretch gap-4 sm:flex-row sm:items-start ${className}`}
    >
      <motion.a
        href={PHONE_HREF}
        onClick={trackContactConversion}
        whileHover={{ y: -2 }}
        whileTap={{ y: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-light via-gold to-gold-dark px-8 py-4 text-sm font-semibold uppercase tracking-wide text-black shadow-[0_10px_36px_rgba(212,175,55,0.3)] transition-shadow duration-300 hover:shadow-[0_14px_44px_rgba(212,175,55,0.45)]"
      >
        <Phone className="h-4 w-4" strokeWidth={2} />
        Ara
      </motion.a>

      <motion.a
        href={WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        onClick={trackContactConversion}
        whileHover={{ y: -2 }}
        whileTap={{ y: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp-green px-8 py-4 text-sm font-semibold uppercase tracking-wide text-white shadow-[0_10px_30px_rgba(37,211,102,0.28)] transition-colors duration-300 hover:bg-whatsapp-green-dark"
      >
        <MessageCircle className="h-4 w-4" strokeWidth={2} />
        WhatsApp&apos;tan Ulaş
      </motion.a>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-black"
    >
      {/* Desktop / large tablet — full-bleed image with a wide cinematic
          blend, text overlaid on top instead of sitting in a hard-edged
          column. Removes the razor-line look of a literal 50/50 split. */}
      <div className="relative hidden lg:block lg:min-h-[88vh]">
        <Image
          src="/images/hero-truck.png"
          alt="Lider Yıldırımlar ağır ticari kamyonu, gün batımında Türkiye karayolunda"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right"
        />

        {/* Wide multi-stop blend: fully opaque over the text zone, gradually
            dissolving into the photo — no hard vertical boundary. */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(5,5,5,0.98) 0%, rgba(5,5,5,0.96) 20%, rgba(5,5,5,0.86) 34%, rgba(5,5,5,0.6) 48%, rgba(5,5,5,0.28) 60%, rgba(5,5,5,0.06) 70%, rgba(5,5,5,0) 80%)",
          }}
        />
        {/* Subtle warm golden-hour atmosphere over the blended seam */}
        <div
          aria-hidden="true"
          className="absolute inset-0 mix-blend-overlay"
          style={{
            background:
              "radial-gradient(60% 55% at 65% 45%, rgba(212,175,55,0.16) 0%, rgba(212,175,55,0) 70%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-1/3"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, rgba(5,5,5,0.55) 100%)",
          }}
        />

        <div className="relative z-10 flex min-h-[88vh] flex-col justify-center px-12 py-28 xl:px-16">
          <div className="max-w-xl">
            <Kicker />
            <Headline className="text-5xl xl:text-[3.75rem] xl:leading-[1.12]" />
            <Subtext className="mt-6 max-w-md text-lg" />
            <CtaButtons className="mt-10" />
          </div>
        </div>
      </div>

      {/* Mobile / tablet — its own composition: image banner, then text below */}
      <div className="lg:hidden">
        <div className="relative h-[48vh] min-h-[320px] w-full sm:h-[56vh] md:h-[60vh]">
          <Image
            src="/images/hero-truck-mobile.png"
            alt="Lider Yıldırımlar ağır ticari kamyonu, gün batımında Türkiye karayolunda"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[75%_78%]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(5,5,5,0.1) 0%, rgba(5,5,5,0.55) 65%, rgba(5,5,5,1) 100%)",
            }}
          />
        </div>

        <div className="relative z-10 px-6 pb-16 pt-10 sm:px-10 md:px-12">
          <Kicker />
          <Headline className="text-4xl sm:text-5xl md:text-6xl" />
          <Subtext className="mt-6 max-w-lg text-base sm:text-lg" />
          <CtaButtons className="mt-8" />
        </div>
      </div>

      <div className="relative z-10 pb-16 pt-10 lg:pb-20 lg:pt-0">
        <TrustBar />
      </div>
    </section>
  );
}
