import Image from "next/image";
import Link from "next/link";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import {
  ADDRESS,
  EMAIL_ADDRESS,
  EMAIL_HREF,
  FACEBOOK_NAME,
  INSTAGRAM_URL,
  MAPS_HREF,
  PHONE_HREF,
  PHONE_NUMBER,
  WHATSAPP_HREF,
  WHATSAPP_NUMBER,
  WORKING_HOURS,
} from "@/lib/contact";
import { FacebookIcon, InstagramIcon } from "@/components/icons/BrandIcons";

const SERVICE_LINKS = [
  { label: "Evden Eve Nakliyat", href: "/hizmetler/evden-eve-nakliyat" },
  { label: "Uluslararası Lojistik", href: "/hizmetler/uluslararasi-lojistik" },
  {
    label: "Parsiyel & Komple Yük Taşımacılığı",
    href: "/hizmetler/parsiyel-komple-yuk-tasimaciligi",
  },
  { label: "Depolama & Ambalajlama", href: "/hizmetler/depolama-ambalajlama" },
  { label: "Asansör Hizmeti", href: "/hizmetler/asansor-hizmeti" },
  { label: "Yol Yardım & Çekici", href: "/hizmetler/yol-yardim-cekici" },
];

const COMPANY_LINKS = [
  { label: "Anasayfa", href: "/" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Hizmetler", href: "/#services" },
  { label: "İletişim", href: "/iletisim" },
];

// TODO: replace with a real portfolio / LinkedIn / GitHub URL when available.
const DEVELOPER_URL = "#";

const columnHeadingClasses =
  "text-xs font-semibold uppercase tracking-[0.25em] text-gold/80";
const linkClasses =
  "text-sm text-ivory/70 transition-colors duration-300 hover:text-gold";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12 lg:py-24">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Column 1 — brand */}
          <div>
            <Image
              src="/images/logo.png"
              alt="Lider Yıldırımlar Lojistik & Nakliyat"
              width={1806}
              height={871}
              className="h-10 w-auto object-contain mix-blend-screen"
            />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-ivory/70">
              Yurt içi ve uluslararası taşımacılıkta kurumsal çözümler sunan
              güvenilir bir lojistik ortağıyız.
            </p>
            <p className="mt-4 max-w-xs text-xs leading-relaxed text-ivory/50">
              Lider Yıldırımlar Lojistik &amp; Nakliyat, güvenli, planlı ve
              profesyonel taşımacılık hizmetleri sunmaktadır.
            </p>
          </div>

          {/* Column 2 — services */}
          <nav aria-label="Hizmetler">
            <h3 className={columnHeadingClasses}>Hizmetler</h3>
            <ul className="mt-6 space-y-3">
              {SERVICE_LINKS.map((service) => (
                <li key={service.label}>
                  <Link href={service.href} className={linkClasses}>
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 3 — company navigation */}
          <nav aria-label="Kurumsal">
            <h3 className={columnHeadingClasses}>Kurumsal</h3>
            <ul className="mt-6 space-y-3">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClasses}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 4 — contact details */}
          <address className="not-italic">
            <h3 className={columnHeadingClasses}>İletişim</h3>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-2.5">
                <Phone
                  className="mt-0.5 h-4 w-4 shrink-0 text-gold/70"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <div>
                  <span className="block text-xs uppercase tracking-wide text-ivory/60">
                    Telefon
                  </span>
                  <a href={PHONE_HREF} className={linkClasses}>
                    {PHONE_NUMBER}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MessageCircle
                  className="mt-0.5 h-4 w-4 shrink-0 text-gold/70"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <div>
                  <span className="block text-xs uppercase tracking-wide text-ivory/60">
                    WhatsApp
                  </span>
                  <a
                    href={WHATSAPP_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClasses}
                  >
                    {WHATSAPP_NUMBER}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail
                  className="mt-0.5 h-4 w-4 shrink-0 text-gold/70"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <div>
                  <span className="block text-xs uppercase tracking-wide text-ivory/60">
                    E-mail
                  </span>
                  <a href={EMAIL_HREF} className={linkClasses}>
                    {EMAIL_ADDRESS}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock
                  className="mt-0.5 h-4 w-4 shrink-0 text-gold/70"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <div>
                  <span className="block text-xs uppercase tracking-wide text-ivory/60">
                    Çalışma Saatleri
                  </span>
                  <span className="text-sm text-ivory/70">{WORKING_HOURS}</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-gold/70"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <div>
                  <span className="block text-xs uppercase tracking-wide text-ivory/60">
                    Adres
                  </span>
                  <a
                    href={MAPS_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClasses}
                  >
                    {ADDRESS}
                  </a>
                </div>
              </li>
            </ul>

            <div className="mt-6 flex items-center gap-4">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-ivory/60 transition-colors duration-300 hover:text-gold"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <span
                role="img"
                aria-label={`Facebook: ${FACEBOOK_NAME}`}
                title={FACEBOOK_NAME}
                className="flex items-center gap-1.5 text-ivory/40"
              >
                <FacebookIcon className="h-5 w-5" />
              </span>
            </div>
          </address>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gold/10 pt-8 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="text-xs text-ivory/50">
              © {year} Lider Yıldırımlar Lojistik &amp; Nakliyat. Tüm hakları
              saklıdır.
            </p>
            <p className="mt-1 text-xs text-ivory/50">
              Web Tasarım &amp; Geliştirme:{" "}
              <a
                href={DEVELOPER_URL}
                className="transition-colors duration-300 hover:text-gold"
              >
                Onur Onurcan
              </a>
            </p>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="/gizlilik-politikasi"
              className="text-xs text-ivory/50 transition-colors duration-300 hover:text-gold"
            >
              Gizlilik Politikası
            </Link>
            <Link
              href="/kullanim-sartlari"
              className="text-xs text-ivory/50 transition-colors duration-300 hover:text-gold"
            >
              Kullanım Şartları
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
