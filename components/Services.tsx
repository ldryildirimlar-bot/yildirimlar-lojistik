"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  Globe,
  Home,
  MoveVertical,
  Package,
  Route,
  Warehouse,
  type LucideIcon,
} from "lucide-react";

const MotionLink = motion.create(Link);

const SERVICES: {
  icon: LucideIcon;
  title: string;
  href: string;
  image?: string;
  description: string;
  featured?: boolean;
}[] = [
  {
    icon: Home,
    title: "Evden Eve Nakliyat",
    href: "/hizmetler/evden-eve-nakliyat",
    image: "/images/evden-eve-nakliyat.png",
    description:
      "Ev eşyalarınızı özenli paketleme ve sigortalı taşıma süreciyle yeni adresinize ulaştırıyoruz.",
    featured: true,
  },
  {
    icon: Route,
    title: "Şehirler Arası Nakliyat",
    href: "/hizmetler/sehirler-arasi-nakliyat",
    image: "/images/sehirler-arasi-nakliyat.png",
    description:
      "Türkiye'nin her noktasına, planlı güzergah yönetimiyle hızlı ve güvenli nakliyat sağlıyoruz.",
  },
  {
    icon: Package,
    title: "Parsiyel & Komple Yük",
    href: "/hizmetler/parsiyel-komple-yuk-tasimaciligi",
    image: "/images/parsiyel-komple-yuk.png",
    description:
      "Yük hacminize göre parsiyel veya komple taşıma seçenekleriyle esnek çözümler sunuyoruz.",
  },
  {
    icon: Globe,
    title: "Uluslararası Lojistik",
    href: "/hizmetler/uluslararasi-lojistik",
    image: "/images/uluslararasi-lojistik.png",
    description:
      "Gümrük süreçleri dahil olmak üzere sınır ötesi sevkiyatlarınızı uçtan uca planlı şekilde yönetiyoruz.",
  },
  {
    icon: MoveVertical,
    title: "Asansör Hizmeti",
    href: "/hizmetler/asansor-hizmeti",
    image: "/images/asansor-hizmeti.png",
    description:
      "Yüksek katlı taşımalarda asansör sistemiyle hızlı ve hasarsız taşıma sağlıyoruz.",
  },
  {
    icon: Warehouse,
    title: "Depolama & Ambalajlama",
    href: "/hizmetler/depolama-ambalajlama",
    image: "/images/depolama-ambalajlama.png",
    description:
      "Eşyalarınızı güvenli depolama alanlarında profesyonel ambalajlama ile koruma altına alıyoruz.",
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
          className="mt-6 max-w-2xl font-display text-3xl leading-tight text-charcoal sm:text-4xl md:text-5xl"
        >
          Hizmet Alanlarımız
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          custom={0.2}
          variants={fadeUp}
          className="mt-6 max-w-xl text-base leading-relaxed text-charcoal/70 sm:text-lg"
        >
          Yurt içi taşımacılıktan kurumsal tedarik zincirlerine kadar, farklı
          ölçek ve ihtiyaçlara uygun lojistik hizmetleri sunuyoruz.
        </motion.p>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-12">
          {SERVICES.map(({ icon: Icon, title, href, image, description, featured }, i) => (
            <MotionLink
              key={title}
              href={href}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              custom={0.08 * i}
              variants={fadeUp}
              whileHover={{ y: -6, transition: { duration: 0.3, ease: "easeOut" } }}
              className={`group relative block overflow-hidden rounded-2xl border border-gold/20 bg-black/80 shadow-[0_25px_60px_-24px_rgba(212,175,55,0.12)] backdrop-blur-xl transition-all duration-500 hover:border-gold/40 hover:shadow-[0_30px_70px_-20px_rgba(212,175,55,0.2)] ${
                featured ? "ring-1 ring-gold/40" : ""
              }`}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-charcoal">
                {image ? (
                  <Image
                    src={image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <Icon className="h-12 w-12 text-gold/30" strokeWidth={1} aria-hidden="true" />
                  </div>
                )}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent"
                />
                {featured && (
                  <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-black/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold backdrop-blur-sm">
                    <span className="h-1 w-1 rounded-full bg-gold" />
                    Öne Çıkan Hizmet
                  </span>
                )}
                <Icon
                  className="absolute bottom-4 right-4 h-6 w-6 text-gold drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </div>

              <div className="p-6 lg:p-8">
                <h3 className="font-display text-xl text-ivory">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ivory/70">
                  {description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold transition-colors duration-300 group-hover:text-gold-light">
                  İncele
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </MotionLink>
          ))}
        </div>
      </div>
    </section>
  );
}
