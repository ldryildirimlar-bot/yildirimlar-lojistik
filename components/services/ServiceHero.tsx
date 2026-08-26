"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, MessageCircle, type LucideIcon } from "lucide-react";
import { WHATSAPP_HREF } from "@/lib/contact";
import { NAVBAR_CLEARANCE } from "@/lib/layout";

const MotionLink = motion.create(Link);

export interface ServiceHeroProps {
  kicker: string;
  heading: string;
  intro: string;
  /** Real photo for this service, when one exists in public/images/. */
  image?: string;
  /** CSS object-position for `image`, for source photos whose subject isn't centered. */
  imagePosition?: string;
  /** Fallback shown instead of a photo when none exists yet — never invent a path. */
  icon?: LucideIcon;
}

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: EASE_OUT },
  }),
};

export default function ServiceHero({
  kicker,
  heading,
  intro,
  image,
  imagePosition,
  icon: Icon,
}: ServiceHeroProps) {
  return (
    <section
      aria-labelledby="service-hero-heading"
      className={`relative overflow-hidden bg-paper ${NAVBAR_CLEARANCE}`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:gap-14 lg:px-12 lg:py-20">
        <div>
          <motion.div
            initial="hidden"
            animate="show"
            custom={0}
            variants={fadeUp}
            className="flex items-center gap-3"
          >
            <span className="h-px w-8 bg-gold-dark" />
            <span className="text-xs font-medium uppercase tracking-[0.35em] text-gold-ink">
              {kicker}
            </span>
          </motion.div>

          <motion.h1
            id="service-hero-heading"
            initial="hidden"
            animate="show"
            custom={0.12}
            variants={fadeUp}
            className="mt-6 font-display text-4xl leading-tight text-charcoal sm:text-5xl lg:text-[3.1rem] lg:leading-[1.15]"
          >
            {heading}
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            custom={0.24}
            variants={fadeUp}
            className="mt-6 max-w-lg text-base leading-relaxed text-charcoal/70 sm:text-lg"
          >
            {intro}
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            custom={0.36}
            variants={fadeUp}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <MotionLink
              href="/#cta"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-light via-gold to-gold-dark px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-black shadow-[0_10px_28px_rgba(212,175,55,0.28)] transition-shadow duration-300 hover:shadow-[0_14px_34px_rgba(212,175,55,0.4)]"
            >
              Ücretsiz Teklif Al
              <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
            </MotionLink>

            <motion.a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp-green px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-white shadow-[0_10px_26px_rgba(37,211,102,0.25)] transition-colors duration-300 hover:bg-whatsapp-green-dark"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={2} />
              WhatsApp&apos;tan Ulaş
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE_OUT }}
          className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-gold/15 lg:aspect-[5/4]"
        >
          {image ? (
            <Image
              src={image}
              alt=""
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
              style={imagePosition ? { objectPosition: imagePosition } : undefined}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-paper-alt">
              {Icon && (
                <span className="flex h-24 w-24 items-center justify-center rounded-full border border-gold/25 bg-white/50">
                  <Icon className="h-10 w-10 text-gold-dark" strokeWidth={1.25} aria-hidden="true" />
                </span>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
