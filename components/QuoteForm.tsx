"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Clock, MessageCircle, Send, ShieldCheck, Zap } from "lucide-react";
import { WHATSAPP_HREF } from "@/lib/contact";
import { trackContactConversion } from "@/lib/gtag";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: EASE_OUT },
  }),
};

const MINI_TRUST = [
  { icon: Zap, label: "Hızlı Teklif" },
  { icon: ShieldCheck, label: "Güvenli Taşıma" },
  { icon: Clock, label: "7/24 Destek" },
];

const FIELDS: {
  id: string;
  label: string;
  placeholder: string;
  type: string;
}[] = [
  { id: "from", label: "Nereden?", placeholder: "Örn. Van Merkez", type: "text" },
  { id: "to", label: "Nereye?", placeholder: "Örn. İstanbul", type: "text" },
  {
    id: "cargo",
    label: "Eşya / Yük Bilgisi",
    placeholder: "Örn. 3+1 ev eşyası",
    type: "text",
  },
  { id: "date", label: "Taşıma Tarihi", placeholder: "", type: "date" },
  {
    id: "name",
    label: "Adınız Soyadınız",
    placeholder: "Ad Soyad",
    type: "text",
  },
  {
    id: "phone",
    label: "Telefon Numaranız",
    placeholder: "05XX XXX XX XX",
    type: "tel",
  },
];

const inputClasses =
  "w-full rounded-lg border border-gold/20 bg-white/5 px-4 py-3 text-sm text-ivory placeholder:text-ivory/35 outline-none transition-colors duration-300 focus:border-gold/50";

export default function QuoteForm() {
  const [values, setValues] = useState<Record<string, string>>({
    from: "",
    to: "",
    cargo: "",
    date: "",
    name: "",
    phone: "",
  });

  function handleChange(id: string, value: string) {
    setValues((prev) => ({ ...prev, [id]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = [
      "Merhaba, bir taşıma teklifi almak istiyorum.",
      values.from && `Nereden: ${values.from}`,
      values.to && `Nereye: ${values.to}`,
      values.cargo && `Eşya / Yük Bilgisi: ${values.cargo}`,
      values.date && `Taşıma Tarihi: ${values.date}`,
      values.name && `Ad Soyad: ${values.name}`,
      values.phone && `Telefon: ${values.phone}`,
    ]
      .filter(Boolean)
      .join("\n");

    trackContactConversion();
    window.open(`${WHATSAPP_HREF}?text=${encodeURIComponent(message)}`, "_blank");
  }

  return (
    <section
      id="cta"
      aria-labelledby="quote-heading"
      className="relative overflow-hidden bg-black"
    >
      <div className="grid lg:grid-cols-2">
        {/* Left — cinematic photo panel with headline */}
        <div className="relative flex min-h-[420px] flex-col justify-center overflow-hidden px-8 py-16 sm:px-12 lg:px-16 lg:py-20">
          <Image
            src="/images/hero-truck.png"
            alt=""
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(5,5,5,0.6) 0%, rgba(5,5,5,0.88) 100%)",
            }}
          />
          {/* Blends the photo panel into the form panel — no hard rectangular seam */}
          <div
            aria-hidden="true"
            className="absolute inset-y-0 right-0 hidden w-24 lg:block"
            style={{
              background:
                "linear-gradient(90deg, rgba(5,5,5,0) 0%, rgba(22,22,22,0.7) 100%)",
            }}
          />

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            custom={0}
            variants={fadeUp}
            className="relative z-10 max-w-lg"
          >
            <h2
              id="quote-heading"
              className="font-display text-3xl leading-tight text-ivory sm:text-4xl md:text-5xl"
            >
              Taşımanız İçin Doğru Çözümü{" "}
              <span className="text-gold-gradient">Birlikte Planlayalım</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ivory/75 sm:text-lg">
              Formu doldurun, size en uygun çözümü birlikte oluşturalım.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              {MINI_TRUST.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2.5">
                  <Icon className="h-4 w-4 text-gold" strokeWidth={2} aria-hidden="true" />
                  <span className="text-sm font-medium text-ivory/85">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right — quote form */}
        <div className="relative flex flex-col justify-center bg-charcoal/60 px-8 py-16 sm:px-12 lg:px-16 lg:py-20">
          <motion.form
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            custom={0.1}
            variants={fadeUp}
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2"
          >
            {FIELDS.map((field) => (
              <div key={field.id} className="flex flex-col gap-2">
                <label
                  htmlFor={field.id}
                  className="text-xs font-medium uppercase tracking-wide text-ivory/60"
                >
                  {field.label}
                </label>
                <input
                  id={field.id}
                  name={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  value={values[field.id]}
                  onChange={(e) => handleChange(field.id, e.target.value)}
                  className={inputClasses}
                />
              </div>
            ))}

            <div className="mt-2 flex flex-col gap-4 sm:col-span-2 sm:flex-row">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-light via-gold to-gold-dark px-8 py-4 text-sm font-semibold uppercase tracking-wide text-black shadow-[0_10px_36px_rgba(212,175,55,0.3)] transition-shadow duration-300 hover:shadow-[0_14px_44px_rgba(212,175,55,0.45)]"
              >
                Ücretsiz Teklif Al
                <Send className="h-4 w-4" strokeWidth={2} />
              </button>

              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackContactConversion}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp-green px-8 py-4 text-sm font-semibold uppercase tracking-wide text-white shadow-[0_10px_30px_rgba(37,211,102,0.28)] transition-colors duration-300 hover:bg-whatsapp-green-dark"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={2} />
                WhatsApp&apos;tan Ulaş
              </a>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
