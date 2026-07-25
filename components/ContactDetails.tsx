"use client";

import { motion, type Variants } from "framer-motion";
import { Clock, Globe, Mail, MapPin, MessageCircle, Phone, type LucideIcon } from "lucide-react";
import {
  ADDRESS,
  EMAIL_ADDRESS,
  EMAIL_HREF,
  FACEBOOK_NAME,
  INSTAGRAM_URL,
  MAPS_HREF,
  PHONE_HREF,
  PHONE_NUMBER,
  WEBSITE_URL,
  WHATSAPP_HREF,
  WHATSAPP_NUMBER,
  WORKING_HOURS,
} from "@/lib/contact";
import { FacebookIcon, InstagramIcon } from "@/components/icons/BrandIcons";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: EASE_OUT },
  }),
};

interface ContactItemBase {
  label: string;
}

interface IconItem extends ContactItemBase {
  icon: LucideIcon;
  value: string;
  href?: string;
  external?: boolean;
}

const CONTACT_ITEMS: IconItem[] = [
  { icon: Phone, label: "Telefon", value: PHONE_NUMBER, href: PHONE_HREF },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: WHATSAPP_NUMBER,
    href: WHATSAPP_HREF,
    external: true,
  },
  { icon: Mail, label: "E-mail", value: EMAIL_ADDRESS, href: EMAIL_HREF },
  { icon: MapPin, label: "Adres", value: ADDRESS, href: MAPS_HREF, external: true },
  { icon: Clock, label: "Çalışma Saatleri", value: WORKING_HOURS },
  { icon: Globe, label: "Web Sitesi", value: WEBSITE_URL, href: WEBSITE_URL, external: true },
];

export default function ContactDetails() {
  return (
    <section
      id="contact-details"
      aria-labelledby="contact-details-heading"
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
            İletişim Bilgileri
          </span>
        </motion.div>

        <motion.h2
          id="contact-details-heading"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          custom={0.1}
          variants={fadeUp}
          className="mt-6 max-w-2xl font-display text-3xl leading-tight text-ivory sm:text-4xl md:text-5xl"
        >
          Bize Ulaşın
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          custom={0.2}
          variants={fadeUp}
          className="mt-6 max-w-xl text-base leading-relaxed text-ivory/70 sm:text-lg"
        >
          Taşıma ihtiyaçlarınız için aşağıdaki kanallardan bize ulaşabilirsiniz.
        </motion.p>

        <address className="not-italic">
          <div className="mt-16 grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2">
            {CONTACT_ITEMS.map(({ icon: Icon, label, value, href, external }, i) => (
              <motion.div
                key={label}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                custom={0.06 * i}
                variants={fadeUp}
                className="flex items-start gap-3"
              >
                <Icon
                  className="mt-1 h-5 w-5 shrink-0 text-gold/80"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <div>
                  <span className="block text-xs uppercase tracking-wide text-ivory/60">
                    {label}
                  </span>
                  {href ? (
                    <a
                      href={href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className="text-base text-ivory/85 transition-colors duration-300 hover:text-gold"
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="text-base text-ivory/85">{value}</span>
                  )}
                </div>
              </motion.div>
            ))}

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              custom={0.06 * CONTACT_ITEMS.length}
              variants={fadeUp}
              className="flex items-start gap-3"
            >
              <InstagramIcon className="mt-1 h-5 w-5 shrink-0 text-gold/80" />
              <div>
                <span className="block text-xs uppercase tracking-wide text-ivory/60">
                  Instagram
                </span>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-ivory/85 transition-colors duration-300 hover:text-gold"
                >
                  @yildirimlar_lojistik
                </a>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              custom={0.06 * (CONTACT_ITEMS.length + 1)}
              variants={fadeUp}
              className="flex items-start gap-3"
            >
              <FacebookIcon className="mt-1 h-5 w-5 shrink-0 text-gold/80" />
              <div>
                <span className="block text-xs uppercase tracking-wide text-ivory/60">
                  Facebook
                </span>
                <span className="text-base text-ivory/85">{FACEBOOK_NAME}</span>
              </div>
            </motion.div>
          </div>
        </address>
      </div>
    </section>
  );
}
