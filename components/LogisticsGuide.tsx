"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BLOG_ARTICLES } from "@/lib/blog";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: EASE_OUT },
  }),
};

export default function LogisticsGuide() {
  return (
    <section
      id="blog"
      aria-labelledby="logistics-guide-heading"
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
            Lojistik Rehberi
          </span>
        </motion.div>

        <motion.h2
          id="logistics-guide-heading"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          custom={0.1}
          variants={fadeUp}
          className="mt-6 max-w-2xl font-display text-3xl leading-tight text-charcoal sm:text-4xl md:text-5xl"
        >
          Taşımacılık Hakkında Bilmeniz Gerekenler
        </motion.h2>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {BLOG_ARTICLES.map(({ slug, title, excerpt, image }, i) => (
            <motion.article
              key={slug}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              custom={0.08 * i}
              variants={fadeUp}
            >
              <Link
                href={`/blog/${slug}`}
                className="group block overflow-hidden rounded-xl border border-black/10 bg-white shadow-[0_10px_30px_-18px_rgba(23,20,15,0.3)] transition-all duration-500 hover:border-gold/30"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-base leading-snug text-charcoal">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/60">
                    {excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-ink transition-colors duration-300 group-hover:text-gold-dark">
                    Devamını Oku
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
