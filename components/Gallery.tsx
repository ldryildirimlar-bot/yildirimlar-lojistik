"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const GALLERY_IMAGES = [
  "/images/galer1.jpeg",
  "/images/galeri2.jpeg",
  "/images/galeri3.jpeg",
  "/images/galeri4.jpeg",
  "/images/galeri5.jpeg",
  "/images/galeri6.jpeg",
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

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrev = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length)),
    []
  );
  const showNext = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i + 1) % GALLERY_IMAGES.length)),
    []
  );

  useEffect(() => {
    if (activeIndex === null) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, close, showPrev, showNext]);

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="relative bg-paper-alt py-24 lg:py-32"
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
          <span className="h-px w-8 bg-gold-dark" />
          <span className="text-xs font-medium uppercase tracking-[0.35em] text-gold-ink">
            Galeri
          </span>
        </motion.div>

        <motion.h2
          id="gallery-heading"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          custom={0.1}
          variants={fadeUp}
          className="mt-6 max-w-2xl font-display text-3xl leading-tight text-charcoal sm:text-4xl md:text-5xl"
        >
          İşlerimizden Kareler
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          custom={0.18}
          variants={fadeUp}
          className="mt-6 max-w-xl text-base leading-relaxed text-charcoal/70 sm:text-lg"
        >
          Taşıma ve lojistik süreçlerimizden kareler.
        </motion.p>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY_IMAGES.map((src, i) => (
            <motion.button
              key={src}
              type="button"
              onClick={() => setActiveIndex(i)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              custom={0.06 * i}
              variants={fadeUp}
              aria-label="Görseli büyüt"
              className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-gold/15 shadow-[0_10px_30px_-18px_rgba(23,20,15,0.3)]"
            >
              <Image
                src={src}
                alt="Lider Yıldırımlar Lojistik & Nakliyat taşıma sürecinden gerçek bir kare"
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={close}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90 px-4 py-10 backdrop-blur-sm"
          >
            <button
              type="button"
              onClick={close}
              aria-label="Kapat"
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 text-ivory transition-colors duration-300 hover:border-gold/60 hover:text-gold"
            >
              <X className="h-5 w-5" strokeWidth={1.75} />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              aria-label="Önceki görsel"
              className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gold/30 text-ivory transition-colors duration-300 hover:border-gold/60 hover:text-gold sm:left-6"
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={1.75} />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              aria-label="Sonraki görsel"
              className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gold/30 text-ivory transition-colors duration-300 hover:border-gold/60 hover:text-gold sm:right-6"
            >
              <ChevronRight className="h-5 w-5" strokeWidth={1.75} />
            </button>

            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: EASE_OUT }}
              onClick={(e) => e.stopPropagation()}
              className="relative h-full max-h-[80vh] w-full max-w-3xl"
            >
              <Image
                src={GALLERY_IMAGES[activeIndex]}
                alt="Lider Yıldırımlar Lojistik & Nakliyat taşıma sürecinden gerçek bir kare"
                fill
                sizes="(min-width: 768px) 768px, 100vw"
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
