import type { Metadata } from "next";
import {
  ClipboardList,
  Clock,
  Home,
  Navigation,
  PackageCheck,
  Route,
  ShieldCheck,
  Tag,
  Truck,
  Users,
} from "lucide-react";
import type { ServiceHeroProps } from "@/components/services/ServiceHero";
import type { ServiceOverviewProps } from "@/components/services/ServiceOverview";
import type { ServiceOfferProps } from "@/components/services/ServiceOffer";
import type { ServiceProcessProps } from "@/components/services/ServiceProcess";
import type { ServiceWhyChooseProps } from "@/components/services/ServiceWhyChoose";
import type { ServiceFaqProps } from "@/components/services/ServiceFaq";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Şehirler Arası Nakliyat",
  description:
    "Türkiye genelinde planlı güzergah yönetimiyle şehirler arası nakliyat hizmeti. Güvenli, sigortalı ve zamanında teslimat.",
  path: "/hizmetler/sehirler-arasi-nakliyat",
});

export const hero: ServiceHeroProps = {
  kicker: "ŞEHİRLER ARASI NAKLİYAT",
  heading: "Türkiye'nin Her Noktasına Güvenilir Şehirler Arası Nakliyat",
  intro:
    "Planlı güzergah yönetimi ve güvenilir iş ortağı ağımızla, şehirler arası sevkiyatlarınızı hızlı ve sorunsuz şekilde gerçekleştiriyoruz.",
  image: "/images/sehirler-arasi-nakliyat.png",
};

export const overview: ServiceOverviewProps = {
  kicker: "HİZMET HAKKINDA",
  heading: "Şehirler Arası Nakliyat Hizmeti",
  paragraphs: [
    "Şehirler arası nakliyat hizmetimiz, yükünüzün Türkiye'nin herhangi bir noktasına planlı ve güvenli şekilde ulaştırılmasını kapsar.",
    "Güzergah ve teslimat sürenize uygun şekilde organize edilen sevkiyatlar, düzenli bilgilendirme ile takip edilebilir şekilde yürütülür.",
  ],
};

export const offer: ServiceOfferProps = {
  kicker: "NELER SUNUYORUZ",
  heading: "Hizmet Kapsamımız",
  items: [
    {
      icon: Route,
      title: "Güzergah Planlama",
      description: "Sevkiyatınız için en uygun güzergah önceden planlanır.",
    },
    {
      icon: ShieldCheck,
      title: "Sigortalı Taşıma",
      description: "Yükünüz, taşıma süresince sigorta kapsamında yürütülür.",
    },
    {
      icon: Clock,
      title: "Zamanında Teslimat",
      description: "Planlanan teslimat tarihine uygun şekilde sevkiyat tamamlanır.",
    },
    {
      icon: Navigation,
      title: "Sevkiyat Takibi",
      description: "Sevkiyat sürecine ilişkin bilgi akışı düzenli olarak sağlanır.",
    },
    {
      icon: Users,
      title: "Profesyonel Ekip",
      description: "Taşıma süreciniz, deneyimli ekibimiz tarafından yönetilir.",
    },
    {
      icon: Tag,
      title: "Şeffaf Fiyatlandırma",
      description: "Teklif aşamasında netleşen fiyat, süreç boyunca değişmeden uygulanır.",
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
      title: "Talep & Teklif",
      description: "Yük ve güzergah bilgilerinizi ileterek süreci başlatırsınız.",
    },
    {
      number: "02",
      icon: Route,
      title: "Planlama",
      description: "Uygun araç ve güzergah planlaması operasyon ekibimiz tarafından yapılır.",
    },
    {
      number: "03",
      icon: Truck,
      title: "Taşıma",
      description: "Yükünüz, planlanan güzergahta güvenli şekilde taşınır.",
    },
    {
      number: "04",
      icon: PackageCheck,
      title: "Teslimat",
      description: "Sevkiyatınız, belirlenen adrese eksiksiz teslim edilir.",
    },
  ],
};

export const whyChoose: ServiceWhyChooseProps = {
  kicker: "NEDEN BİZ",
  heading: "Neden Bu Hizmeti Tercih Etmelisiniz",
  items: [
    {
      icon: Clock,
      title: "Zamanında Teslimat",
      description: "Taşıma süreci, planlanan tarihe uygun şekilde tamamlanır.",
    },
    {
      icon: ShieldCheck,
      title: "Güvenli Taşıma",
      description: "Yükünüz, taşıma süresi boyunca sigorta kapsamındadır.",
    },
    {
      icon: Home,
      title: "Geniş Güzergah Ağı",
      description: "Türkiye genelinde farklı güzergahlara sevkiyat organize edilir.",
    },
    {
      icon: Tag,
      title: "Şeffaf Fiyatlandırma",
      description: "Teklif aşamasında netleşen fiyat, süreç boyunca değişmeden uygulanır.",
    },
  ],
};

export const faq: ServiceFaqProps = {
  kicker: "SIKÇA SORULAN SORULAR",
  heading: "Merak Edilenler",
  faqs: [
    {
      question: "Hangi şehirlere nakliyat hizmeti sunuyorsunuz?",
      answer: "Türkiye genelinde talep edilen güzergaha göre hizmet sunuyoruz.",
    },
    {
      question: "Yükümün sigortası var mı?",
      answer: "Evet, taşıma süresince sevkiyatınız sigorta kapsamındadır.",
    },
    {
      question: "Teslimat süresi ne kadar sürer?",
      answer: "Teslimat süresi, güzergaha göre teklif aşamasında netleştirilir.",
    },
    {
      question: "Sevkiyatımı takip edebilir miyim?",
      answer: "Evet, sevkiyat sürecine ilişkin bilgi akışı düzenli olarak sağlanır.",
    },
    {
      question: "Teklif almak için ne yapmalıyım?",
      answer: "Yük ve güzergah bilgilerinizi ileterek teklif talebinde bulunabilirsiniz.",
    },
  ],
};
