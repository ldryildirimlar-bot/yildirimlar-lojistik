"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

const MotionLink = motion.create(Link);

const NAV_LINKS = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hizmetler", href: "/#services" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "İletişim", href: "/iletisim" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      {/* Desktop layout */}
      <div className="mx-auto hidden h-28 max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-10 px-8 md:grid lg:px-16">
        <Link href="/" className="group flex items-center py-4 justify-self-start">
          <Image
            src="/images/logo.png"
            alt="Lider Yıldırımlar Lojistik & Nakliyat"
            width={1806}
            height={871}
            priority
            className="h-[60px] w-auto object-contain mix-blend-screen transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </Link>

        <nav className="flex items-center justify-center gap-[18px]">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative py-2 text-sm font-medium tracking-wide text-ivory/80 transition-colors duration-300 ease-out hover:text-ivory"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-1/2 h-px w-full origin-center -translate-x-1/2 scale-x-0 bg-gradient-to-r from-gold-light to-gold transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <MotionLink
          href="/#cta"
          whileHover={{ y: -2 }}
          whileTap={{ y: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="inline-flex items-center gap-1.5 justify-self-end rounded-full bg-gradient-to-r from-gold-light via-gold to-gold-dark px-7 py-3 text-sm font-semibold text-black shadow-[0_6px_22px_rgba(212,175,55,0.22)] transition-shadow duration-300 ease-out hover:shadow-[0_10px_30px_rgba(212,175,55,0.38)]"
        >
          Teklif Al
          <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
        </MotionLink>
      </div>

      {/* Mobile layout */}
      <div className="flex h-20 items-center justify-between px-6 md:hidden">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Lider Yıldırımlar Lojistik & Nakliyat"
            width={1806}
            height={871}
            priority
            className="h-14 w-auto object-contain mix-blend-screen"
          />
        </Link>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={mobileOpen}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-ivory transition-colors duration-300 hover:border-gold/60 hover:text-gold"
        >
          {mobileOpen ? (
            <X className="h-5 w-5" strokeWidth={1.75} />
          ) : (
            <Menu className="h-5 w-5" strokeWidth={1.75} />
          )}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden glass md:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 pb-8 pt-2">
              {NAV_LINKS.map((link, i) => (
                <MotionLink
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * i, duration: 0.35, ease: "easeOut" }}
                  className="border-b border-white/5 py-4 text-base font-medium text-ivory/85 transition-colors hover:text-gold"
                >
                  {link.label}
                </MotionLink>
              ))}
              <MotionLink
                href="/#cta"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * NAV_LINKS.length, duration: 0.35 }}
                className="mt-5 inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-gold-light via-gold to-gold-dark px-6 py-3 text-sm font-semibold text-black shadow-[0_6px_22px_rgba(212,175,55,0.22)]"
              >
                Teklif Al
                <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
              </MotionLink>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
