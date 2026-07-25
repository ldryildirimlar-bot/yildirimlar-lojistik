import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { NAVBAR_CLEARANCE } from "@/lib/layout";

export const metadata: Metadata = {
  title: "Sayfa Bulunamadı | Lider Yıldırımlar Lojistik & Nakliyat",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <section
          className={`relative flex min-h-[65vh] items-center overflow-hidden bg-black ${NAVBAR_CLEARANCE}`}
        >
          <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-6 py-28 text-center lg:px-12">
            <span className="text-xs font-medium uppercase tracking-[0.35em] text-gold/90">
              404
            </span>
            <h1 className="mt-6 max-w-2xl font-display text-4xl leading-tight text-ivory sm:text-5xl md:text-6xl">
              Sayfa Bulunamadı
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/70 sm:text-lg">
              Aradığınız sayfa taşınmış veya kaldırılmış olabilir. Anasayfaya
              dönerek aramaya devam edebilirsiniz.
            </p>
            <Link
              href="/"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-light via-gold to-gold-dark px-9 py-4 text-base font-semibold tracking-wide text-black shadow-[0_10px_36px_rgba(212,175,55,0.3)] transition-shadow duration-300 hover:shadow-[0_14px_44px_rgba(212,175,55,0.45)]"
            >
              <ArrowLeft className="h-4 w-4" strokeWidth={2} />
              Anasayfaya Dön
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
