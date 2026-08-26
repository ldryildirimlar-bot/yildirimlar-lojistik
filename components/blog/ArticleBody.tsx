"use client";

import { motion, type Variants } from "framer-motion";
import type { BlogSection } from "@/lib/blog";

export interface ArticleBodyProps {
  sections: BlogSection[];
  conclusion: string;
}

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: EASE_OUT },
  }),
};

export default function ArticleBody({ sections, conclusion }: ArticleBodyProps) {
  return (
    <section
      aria-label="Makale içeriği"
      className="relative bg-paper-alt py-20 lg:py-28"
    >
      <div className="mx-auto max-w-3xl px-6 lg:px-12">
        {sections.map((section, i) => (
          <motion.div
            key={section.heading}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            custom={0.05 * i}
            variants={fadeUp}
            className={i === 0 ? "" : "mt-12"}
          >
            <h2 className="font-display text-2xl text-charcoal sm:text-3xl">
              {section.heading}
            </h2>
            {section.paragraphs && (
              <div className="mt-4 space-y-4 text-base leading-relaxed text-charcoal/75">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            )}
            {section.items && (
              <ol className="mt-4 space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li key={item} className="flex gap-4 text-base leading-relaxed text-charcoal/75">
                    <span className="mt-0.5 font-display text-lg text-gold-dark">
                      {String(itemIndex + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1">{item}</span>
                  </li>
                ))}
              </ol>
            )}
          </motion.div>
        ))}

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          custom={0.1}
          variants={fadeUp}
          className="mt-12 rounded-xl border border-gold/20 bg-white p-7 shadow-[0_10px_30px_-18px_rgba(23,20,15,0.3)]"
        >
          <p className="text-base leading-relaxed text-charcoal/80">{conclusion}</p>
        </motion.div>
      </div>
    </section>
  );
}
