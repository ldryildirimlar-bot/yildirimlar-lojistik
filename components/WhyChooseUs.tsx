"use client";

import { motion, type Variants } from "framer-motion";
import {
  Clock,
  Headset,
  MapPin,
  ShieldCheck,
  Umbrella,
  Users,
  type LucideIcon,
} from "lucide-react";

const REASONS: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: ShieldCheck,
    title: "Güvenli Taşımacılık",
    description:
      "Yükleriniz, taşıma süresi boyunca uygun ekipman ve sabitleme yöntemleriyle korunur.",
  },
  {
    icon: Clock,
    title: "Zamanında Teslimat",
    description:
      "Sevkiyatlarınızı planlanan teslimat tarihine uygun şekilde tamamlarız.",
  },
  {
    icon: MapPin,
    title: "Türkiye Genelinde Hizmet",
    description:
      "81 ile ulaşan operasyon ağımızla yurt genelinde taşımacılık sağlarız.",
  },
  {
    icon: Umbrella,
    title: "Sigortalı Taşıma",
    description:
      "Her sevkiyat, taşıma süresince sigorta kapsamı altında yürütülür.",
  },
  {
    icon: Headset,
    title: "7/24 Destek",
    description:
      "Sevkiyat sürecinizle ilgili sorularınıza operasyon ekibimiz her zaman yanıt verir.",
  },
  {
    icon: Users,
    title: "Profesyonel Ekip",
    description:
      "Deneyimli sürücü ve saha ekibimizle taşıma sürecini titizlikle yönetiriz.",
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
          className="mt-6 max-w-2xl font-display text-3xl leading-tight text-ivory sm:text-4xl md:text-5xl"
        >
          Neden Biz
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          custom={0.2}
          variants={fadeUp}
          className="mt-6 max-w-xl text-base leading-relaxed text-ivory/70 sm:text-lg"
        >
          Sevkiyatlarınızı, deneyimli operasyon ekibimiz ve kurumsal süreç
          standartlarımızla yönetiyoruz.
        </motion.p>

        <div className="mt-20 grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-12">
          {REASONS.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              custom={0.08 * i}
              variants={fadeUp}
              whileHover={{ y: -4, transition: { duration: 0.3, ease: "easeOut" } }}
              className="group rounded-2xl border border-gold/15 bg-ivory/[0.04] p-10 backdrop-blur-[20px] transition-colors duration-500 hover:border-gold/35 lg:p-12"
            >
              <Icon
                className="h-5 w-5 text-gold/70 transition-colors duration-500 group-hover:text-gold"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <h3 className="mt-6 font-display text-xl text-ivory sm:text-2xl">
                {title}
              </h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-ivory/65">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
