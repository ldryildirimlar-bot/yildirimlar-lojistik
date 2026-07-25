"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, RotateCw } from "lucide-react";

// Kept intentionally standalone (no Navbar/Footer) — an error boundary
// should depend on as little as possible, since those components are
// exactly what may have failed.
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Errors here are only ever logged to the browser console in this
    // project — there is no external error-reporting service configured.
    console.error(error);
  }, [error]);

  return (
    <section className="flex min-h-screen items-center justify-center bg-black px-6 py-28 text-center">
      <div className="mx-auto flex max-w-xl flex-col items-center">
        <span className="text-xs font-medium uppercase tracking-[0.35em] text-gold/90">
          Bir Sorun Oluştu
        </span>
        <h1 className="mt-6 font-display text-3xl leading-tight text-ivory sm:text-4xl">
          Beklenmeyen Bir Hata Oluştu
        </h1>
        <p className="mt-6 max-w-md text-base leading-relaxed text-ivory/70">
          Sayfa yüklenirken bir sorun oluştu. Tekrar deneyebilir veya
          anasayfaya dönebilirsiniz.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-light via-gold to-gold-dark px-9 py-4 text-base font-semibold tracking-wide text-black shadow-[0_10px_36px_rgba(212,175,55,0.3)] transition-shadow duration-300 hover:shadow-[0_14px_44px_rgba(212,175,55,0.45)]"
          >
            <RotateCw className="h-4 w-4" strokeWidth={2} />
            Tekrar Dene
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-9 py-4 text-base font-semibold tracking-wide text-ivory transition-colors duration-300 hover:border-gold hover:bg-gold/5 hover:text-gold"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={2} />
            Anasayfaya Dön
          </Link>
        </div>
      </div>
    </section>
  );
}
