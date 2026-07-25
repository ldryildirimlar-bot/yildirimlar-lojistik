"use client";

import { motion, type Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ServiceFaqProps {
  kicker: string;
  heading: string;
  faqs: FaqItem[];
}

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: EASE_OUT },
  }),
};

export default function ServiceFaq({ kicker, heading, faqs }: ServiceFaqProps) {
  return (
    <section
      id="service-faq"
      aria-labelledby="service-faq-heading"
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
            {kicker}
          </span>
        </motion.div>

        <motion.h2
          id="service-faq-heading"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          custom={0.1}
          variants={fadeUp}
          className="mt-6 max-w-2xl font-display text-3xl leading-tight text-ivory sm:text-4xl md:text-5xl"
        >
          {heading}
        </motion.h2>

        <div className="mt-16 max-w-3xl divide-y divide-gold/10">
          {faqs.map(({ question, answer }, i) => (
            <motion.details
              key={question}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              custom={0.06 * i}
              variants={fadeUp}
              className="group py-6 first:pt-0 last:pb-0"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-lg text-ivory marker:content-none [&::-webkit-details-marker]:hidden sm:text-xl">
                {question}
                <ChevronDown
                  className="h-5 w-5 shrink-0 text-gold transition-transform duration-300 group-open:rotate-180"
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </summary>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ivory/65 sm:text-base">
                {answer}
              </p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}
