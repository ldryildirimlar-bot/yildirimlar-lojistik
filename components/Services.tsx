"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  Globe,
  Home,
  MoveVertical,
  Package,
  Truck,
  Warehouse,
  type LucideIcon,
} from "lucide-react";

const MotionLink = motion.create(Link);

const SERVICES: {
  icon: LucideIcon;
  title: string;
  href: string;
  description: string;
  featured?: boolean;
}[] = [
  {
    icon: Home,
    title: "Evden Eve Nakliyat",
    href: "/hizmetler/evden-eve-nakliyat",
    description:
      "Ev eşyalarınızı özenli paketleme ve sigortalı taşıma süreciyle yeni adresinize ulaştırıyoruz.",
    featured: true,
  },
  {
    icon: Globe,
    title: "Uluslararası Lojistik",
    href: "/hizmetler/uluslararasi-lojistik",
    description:
      "Sınır ötesi sevkiyatları gümrük süreçleri dahil uçtan uca organize ediyoruz.",
  },
  {
    icon: Package,
    title: "Parsiyel & Komple Yük Taşımacılığı",
    href: "/hizmetler/parsiyel-komple-yuk-tasimaciligi",
    description:
      "Yük hacminize göre parsiyel veya komple taşıma seçenekleriyle esnek çözümler sunuyoruz.",
  },
  {
    icon: Warehouse,
    title: "Depolama & Ambalajlama",
    href: "/hizmetler/depolama-ambalajlama",
    description:
      "Eşyalarınızı güvenli depolama alanlarında profesyonel ambalajlama ile koruma altına alıyoruz.",
  },
  {
    icon: MoveVertical,
    title: "Asansör Hizmeti",
    href: "/hizmetler/asansor-hizmeti",
    description:
      "Yüksek katlı taşımalarda asansör sistemiyle hızlı ve hasarsız taşıma sağlıyoruz.",
  },
  {
    icon: Truck,
    title: "Yol Yardım & Çekici",
    href: "/hizmetler/yol-yardim-cekici",
    description:
      "Yol üzerinde yaşanan arızalarda 7/24 çekici ve yol yardım desteği sunuyoruz.",
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

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative overflow-hidden bg-black py-28 lg:py-32"
    >
      {/* Subtle static warm glow — ties into the Hero's atmosphere, no animation */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px]"
        style={{
          background:
            "radial-gradient(60% 100% at 50% 0%, rgba(212,175,55,0.08) 0%, rgba(212,175,55,0) 70%)",
        }}
      />

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
            Hizmetlerimiz
          </span>
        </motion.div>

        <motion.h2
          id="services-heading"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          custom={0.1}
          variants={fadeUp}
          className="mt-6 max-w-2xl font-display text-3xl leading-tight text-ivory sm:text-4xl md:text-5xl"
        >
          Hizmet Alanlarımız
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          custom={0.2}
          variants={fadeUp}
          className="mt-6 max-w-xl text-base leading-relaxed text-ivory/70 sm:text-lg"
        >
          Yurt içi taşımacılıktan kurumsal tedarik zincirlerine kadar, farklı
          ölçek ve ihtiyaçlara uygun lojistik hizmetleri sunuyoruz.
        </motion.p>

        <div className="mt-20 grid grid-cols-1 gap-x-12 gap-y-14 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-16 lg:gap-y-16">
          {SERVICES.map(({ icon: Icon, title, href, description, featured }, i) => (
            <MotionLink
              key={title}
              href={href}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              custom={0.08 * i}
              variants={fadeUp}
              whileHover={{
                y: featured ? -6 : -4,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className={`group relative block border-t pt-8 transition-colors duration-500 ${
                featured
                  ? "border-gold/40 hover:border-gold/70"
                  : "border-gold/20 hover:border-gold/50"
              }`}
            >
              {featured && (
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-x-4 -inset-y-3 rounded-2xl bg-[radial-gradient(60%_80%_at_20%_0%,rgba(212,175,55,0.10)_0%,transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
              )}

              <div className="relative">
                {featured && (
                  <span className="mb-5 inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
                    <span className="h-1 w-1 rounded-full bg-gold" />
                    Öne Çıkan Hizmet
                  </span>
                )}

                <div className="flex items-center justify-between">
                  <Icon
                    className={`h-7 w-7 transition-colors duration-500 ${
                      featured
                        ? "text-gold group-hover:text-gold-light"
                        : "text-gold/90 group-hover:text-gold-light"
                    }`}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <span
                    className={`font-display text-sm ${
                      featured ? "text-gold/60" : "text-gold/40"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-10 font-display text-xl text-ivory sm:text-2xl">
                  {title}
                </h3>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-ivory/70 sm:text-base">
                  {description}
                </p>
              </div>
            </MotionLink>
          ))}
        </div>
      </div>
    </section>
  );
}
