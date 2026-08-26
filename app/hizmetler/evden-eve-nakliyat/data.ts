import type { Metadata } from "next";
import {
  Box,
  ClipboardList,
  Clock,
  Heart,
  Home,
  MoveVertical,
  ShieldCheck,
  Tag,
  Truck,
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
  title: "Evden Eve Nakliyat",
  description:
    "Güvenli, planlı ve profesyonel evden eve nakliyat hizmeti. Özenli paketleme, sigortalı taşıma ve asansörlü taşıma seçenekleriyle eşyalarınız güvende.",
  path: "/hizmetler/evden-eve-nakliyat",
});

export const hero: ServiceHeroProps = {
  kicker: "EVDEN EVE NAKLİYAT",
  heading: "Güvenli, Planlı ve Profesyonel Evden Eve Nakliyat",
  intro:
    "Ev eşyalarınızı özenle paketleyip, planlı bir süreçle yeni adresinize güvenle ulaştırıyoruz.",
  image: "/images/evden-eve-nakliyat.png",
};

export const overview: ServiceOverviewProps = {
  kicker: "HİZMET HAKKINDA",
  heading: "Evden Eve Nakliyat Hizmeti",
  paragraphs: [
    "Evden eve nakliyat hizmetimiz, ev eşyalarınızın paketlenmesinden yeni adresinize yerleştirilmesine kadar olan süreci kapsar.",
    "Şehir içi ve şehirler arası taşımalarda, eşyalarınızın güvenli ve düzenli bir şekilde taşınmasını sağlıyoruz.",
  ],
};

export const offer: ServiceOfferProps = {
  kicker: "NELER SUNUYORUZ",
  heading: "Hizmet Kapsamımız",
  items: [
    {
      icon: Box,
      title: "Özenli Paketleme",
      description:
        "Eşyalarınız, taşımaya uygun malzemeler kullanılarak dikkatle paketlenir.",
    },
    {
      icon: Wrench,
      title: "Mobilya Sökme & Kurulumu",
      description:
        "Büyük mobilyalarınız taşıma öncesinde sökülür, yeni adresinizde tekrar kurulur.",
    },
    {
      icon: MoveVertical,
      title: "Asansörlü Taşıma",
      description:
        "Yüksek katlı taşımalarda asansör sistemiyle hızlı ve hasarsız taşıma sağlanır.",
    },
    {
      icon: ShieldCheck,
      title: "Sigortalı Taşıma",
      description: "Sevkiyatınız, taşıma süresince sigorta kapsamında yürütülür.",
    },
    {
      icon: Users,
      title: "Profesyonel Ekip",
      description:
        "Taşıma süreciniz, deneyimli ve eğitimli ekibimiz tarafından yönetilir.",
    },
    {
      icon: Truck,
      title: "Yükleme & Yerleştirme",
      description:
        "Eşyalarınız araca yüklenir ve yeni adresinizde talebinize göre yerleştirilir.",
    },
  ],
};

export const process: ServiceProcessProps = {
  kicker: "SÜRECİMİZ",
  heading: "Taşınma Süreci",
  steps: [
    {
      number: "01",
      icon: ClipboardList,
      title: "Keşif & Teklif",
      description:
        "Eşya miktarınıza göre yerinde veya uzaktan keşif yaparak size özel teklif sunarız.",
    },
    {
      number: "02",
      icon: Box,
      title: "Paketleme",
      description: "Eşyalarınız, taşımaya uygun malzemelerle paketlenir.",
    },
    {
      number: "03",
      icon: Truck,
      title: "Taşıma",
      description:
        "Paketlenen eşyalarınız güvenli şekilde yeni adresinize taşınır.",
    },
    {
      number: "04",
      icon: Home,
      title: "Yerleştirme",
      description:
        "Eşyalarınız yeni adresinizde boşaltılır ve talebinize göre yerleştirilir.",
    },
  ],
};

export const whyChoose: ServiceWhyChooseProps = {
  kicker: "NEDEN BİZ",
  heading: "Neden Bu Hizmeti Tercih Etmelisiniz",
  items: [
    {
      icon: Heart,
      title: "Özenli Eşya Taşıma",
      description:
        "Ev eşyalarınız, hasar riskini azaltacak yöntemlerle özenle taşınır.",
    },
    {
      icon: ShieldCheck,
      title: "Sigortalı Hizmet",
      description: "Sevkiyatınız, taşıma süresi boyunca sigorta kapsamındadır.",
    },
    {
      icon: Clock,
      title: "Zamanında Teslimat",
      description:
        "Taşıma süreci, planlanan tarih ve saate uygun şekilde tamamlanır.",
    },
    {
      icon: Tag,
      title: "Şeffaf Fiyatlandırma",
      description:
        "Teklif aşamasında netleşen fiyat, süreç boyunca değişmeden uygulanır.",
    },
  ],
};

export const faq: ServiceFaqProps = {
  kicker: "SIKÇA SORULAN SORULAR",
  heading: "Merak Edilenler",
  faqs: [
    {
      question: "Ekspertiz hizmeti sunuyor musunuz?",
      answer:
        "Evet, taşıma öncesinde eşya miktarınıza göre yerinde veya uzaktan ekspertiz hizmeti sunuyoruz.",
    },
    {
      question: "Paketleme hizmeti dahil mi?",
      answer: "Evet, evden eve nakliyat hizmetimiz paketleme sürecini de kapsar.",
    },
    {
      question: "Asansörlü taşıma hangi durumlarda kullanılır?",
      answer:
        "Yüksek katlı binalarda, eşyaların merdivenden taşınmasının uygun olmadığı durumlarda asansörlü taşıma sistemi kullanılır.",
    },
    {
      question: "Sigortalı taşıma nasıl uygulanır?",
      answer: "Sevkiyatınız, taşıma süresi boyunca sigorta kapsamında yürütülür.",
    },
    {
      question: "Şehirler arası ev taşıma hizmeti veriyor musunuz?",
      answer: "Evet, şehir içi ve şehirler arası evden eve nakliyat hizmeti sunuyoruz.",
    },
  ],
};
