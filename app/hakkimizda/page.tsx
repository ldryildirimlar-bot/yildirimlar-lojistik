import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ServiceHero from "@/components/services/ServiceHero";
import CompanyStory from "@/components/CompanyStory";
import MissionVision from "@/components/MissionVision";
import CoreValues from "@/components/CoreValues";
import WhyLiderYildirimlar from "@/components/WhyLiderYildirimlar";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Hakkımızda",
  description:
    "Lider Yıldırımlar Lojistik & Nakliyat'ın hikayesi, misyonu, vizyonu ve temel değerleri hakkında bilgi edinin.",
  path: "/hakkimizda",
});

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <ServiceHero
          kicker="HAKKIMIZDA"
          heading="Kurumsal Bir Anlayışla Yürütülen Taşımacılık"
          intro="Lider Yıldırımlar Lojistik & Nakliyat olarak kim olduğumuzu, nasıl çalıştığımızı ve müşterilerimize nasıl değer kattığımızı bu sayfada bulabilirsiniz."
          image="/images/hero-truck.png"
          imagePosition="right"
        />
        <CompanyStory />
        <MissionVision />
        <CoreValues />
        <WhyLiderYildirimlar />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
