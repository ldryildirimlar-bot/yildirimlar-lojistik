import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ServiceHero from "@/components/services/ServiceHero";
import ContactDetails from "@/components/ContactDetails";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "İletişim",
  description:
    "Lider Yıldırımlar Lojistik & Nakliyat ile telefon, WhatsApp, e-posta veya adres üzerinden iletişime geçin.",
  path: "/iletisim",
});

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <ServiceHero
          kicker="İLETİŞİM"
          heading="Bizimle İletişime Geçin"
          intro="Taşıma ihtiyaçlarınız için ekibimize telefon, WhatsApp veya e-posta yoluyla ulaşabilirsiniz."
          image="/images/uluslararasi-lojistik.png"
        />
        <ContactDetails />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
