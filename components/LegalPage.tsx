import { NAVBAR_CLEARANCE } from "@/lib/layout";

export interface LegalSection {
  heading: string;
  paragraphs: string[];
}

export interface LegalPageProps {
  kicker: string;
  heading: string;
  sections: LegalSection[];
}

/**
 * Shared shell for legal/policy pages (Privacy Policy, Terms of Service).
 * Plain, no animation — these are reference documents, not marketing
 * sections, and don't need the same entrance motion as the rest of the site.
 */
export default function LegalPage({ kicker, heading, sections }: LegalPageProps) {
  return (
    <section
      aria-labelledby="legal-page-heading"
      className={`relative bg-black py-28 lg:py-32 ${NAVBAR_CLEARANCE}`}
    >
      <div className="mx-auto max-w-3xl px-6 lg:px-12">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-gold" />
          <span className="text-xs font-medium uppercase tracking-[0.35em] text-gold/90">
            {kicker}
          </span>
        </div>

        <h1
          id="legal-page-heading"
          className="mt-6 font-display text-3xl leading-tight text-ivory sm:text-4xl"
        >
          {heading}
        </h1>

        <div
          role="note"
          className="mt-8 rounded-2xl border border-gold/25 bg-gold/[0.04] p-6 text-sm leading-relaxed text-ivory/75"
        >
          <strong className="text-gold">Taslak Belge:</strong> Bu sayfa, nihai
          hukuki metin hazırlanana kadar geçerli olan bir taslak niteliğindedir.
          İçerik, bir hukuk danışmanı tarafından incelenip onaylanmadan resmi
          politika olarak kabul edilmemelidir.
        </div>

        <div className="mt-12 space-y-10">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="font-display text-xl text-ivory sm:text-2xl">
                {section.heading}
              </h2>
              <div className="mt-4 space-y-4 text-sm leading-relaxed text-ivory/70 sm:text-base">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
