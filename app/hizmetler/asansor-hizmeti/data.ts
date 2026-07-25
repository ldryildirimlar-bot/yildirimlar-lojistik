import type { Metadata } from "next";
import {
  Building2,
  ClipboardList,
  Clock,
  Lock,
  MoveVertical,
  PackageCheck,
  ShieldCheck,
  Tag,
  Users,
  Wrench,
} from "lucide-react";
import type { ServiceHeroProps } from "@/components/services/ServiceHero";
import type { ServiceOverviewProps } from "@/components/services/ServiceOverview";
import type { ServiceOfferProps } from "@/components/services/ServiceOffer";
import type { ServiceProcessProps } from "@/components/services/ServiceProcess";
import type { ServiceWhyChooseProps } from "@/components/services/ServiceWhyChoose";
import type { ServiceFaqProps } from "@/components/services/ServiceFaq";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Asansör Hizmeti",
  description:
    "Yüksek katlı taşımalarda asansörlü nakliyat hizmeti. Hızlı, güvenli ve hasarsız taşıma için cephe asansörü sistemi.",
  path: "/hizmetler/asansor-hizmeti",
});

export const hero: ServiceHeroProps = {
  kicker: "ASANSÖR HİZMETİ",
  heading: "Yüksek Katlı Taşımalarda Hızlı ve Hasarsız Çözüm",
  intro:
    "Cephe asansörü sistemiyle, yüksek katlı taşımalarınızı hızlı ve hasarsız şekilde gerçekleştiriyoruz.",
};

export const overview: ServiceOverviewProps = {
  kicker: "HİZMET HAKKINDA",
  heading: "Asansör Hizmeti",
  paragraphs: [
    "Asansör hizmetimiz, merdivenden taşımanın zor veya riskli olduğu yüksek katlı binalarda, eşyalarınızın cephe asansörü ile taşınmasını kapsar.",
    "Bina özelliklerine göre planlanan kurulum, taşıma sürecini hızlandırırken eşyalarınızın hasar görme riskini azaltır.",
  ],
};

export const offer: ServiceOfferProps = {
  kicker: "NELER SUNUYORUZ",
  heading: "Hizmet Kapsamımız",
  items: [
    {
      icon: MoveVertical,
      title: "Cephe Asansörü ile Taşıma",
      description: "Eşyalarınız, bina dışına kurulan asansör sistemiyle taşınır.",
    },
    {
      icon: Building2,
      title: "Yüksek Kat Taşıma",
      description: "Yüksek katlı binalarda merdiven kullanılmadan taşıma sağlanır.",
    },
    {
      icon: Lock,
      title: "Güvenli Sabitleme",
      description: "Eşyalarınız, taşıma sırasında uygun ekipmanla sabitlenir.",
    },
    {
      icon: ShieldCheck,
      title: "Hasarsız Taşıma",
      description: "Asansörlü sistem, eşyalarınızın hasar görme riskini azaltır.",
    },
    {
      icon: Clock,
      title: "Zaman Tasarrufu",
      description: "Merdivenden taşımaya kıyasla süreç daha kısa sürede tamamlanır.",
    },
    {
      icon: Users,
      title: "Profesyonel Ekip",
      description: "Asansör kurulumu ve taşıma, deneyimli ekibimiz tarafından yapılır.",
    },
  ],
};

export const process: ServiceProcessProps = {
  kicker: "SÜRECİMİZ",
  heading: "Taşıma Süreci",
  steps: [
    {
      number: "01",
      icon: ClipboardList,
      title: "Keşif & Değerlendirme",
      description: "Bina ve kat durumuna göre asansör uygunluğu değerlendirilir.",
    },
    {
      number: "02",
      icon: Wrench,
      title: "Ekipman Kurulumu",
      description: "Cephe asansörü, taşıma günü bina dışına kurulur.",
    },
    {
      number: "03",
      icon: MoveVertical,
      title: "Asansörlü Taşıma",
      description: "Eşyalarınız, asansör sistemiyle güvenli şekilde indirilir veya çıkarılır.",
    },
    {
      number: "04",
      icon: PackageCheck,
      title: "Teslimat & Yerleştirme",
      description: "Eşyalarınız, talebinize göre adresinizde yerleştirilir.",
    },
  ],
};

export const whyChoose: ServiceWhyChooseProps = {
  kicker: "NEDEN BİZ",
  heading: "Neden Bu Hizmeti Tercih Etmelisiniz",
  items: [
    {
      icon: Clock,
      title: "Hızlı Taşıma",
      description: "Asansörlü sistem, taşıma süresini kısaltır.",
    },
    {
      icon: ShieldCheck,
      title: "Hasarsız Süreç",
      description: "Eşyalarınız, merdiven riskine maruz kalmadan taşınır.",
    },
    {
      icon: Users,
      title: "Deneyimli Ekip",
      description: "Kurulum ve taşıma, ekipman konusunda deneyimli ekibimizce yapılır.",
    },
    {
      icon: Tag,
      title: "Şeffaf Fiyatlandırma",
      description:
        "Asansör kullanımı, teklif aşamasında hizmet kapsamına dahil edilerek fiyatlandırılır.",
    },
  ],
};

export const faq: ServiceFaqProps = {
  kicker: "SIKÇA SORULAN SORULAR",
  heading: "Merak Edilenler",
  faqs: [
    {
      question: "Asansörlü taşıma hangi binalarda uygulanır?",
      answer:
        "Yüksek katlı ve merdivenden taşımanın zor olduğu binalarda asansörlü taşıma uygulanır.",
    },
    {
      question: "Asansör ekipmanını siz mi getiriyorsunuz?",
      answer: "Evet, asansör ekipmanı taşıma günü tarafımızca kurulur.",
    },
    {
      question: "Hangi eşyalar asansörle taşınabilir?",
      answer: "Mobilya ve beyaz eşya başta olmak üzere birçok ev eşyası asansörle taşınabilir.",
    },
    {
      question: "Bina yönetiminden izin almam gerekir mi?",
      answer:
        "Asansör kurulumu için bina yönetimi veya apartman sorumlusuna önceden bilgi verilmesi önerilir.",
    },
    {
      question: "Asansörlü taşıma ek ücret gerektirir mi?",
      answer: "Asansör kullanımı, teklif aşamasında hizmet kapsamına dahil edilerek fiyatlandırılır.",
    },
  ],
};
