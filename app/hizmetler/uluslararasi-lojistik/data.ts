import type { Metadata } from "next";
import {
  ClipboardList,
  Clock,
  FileCheck2,
  FileText,
  Navigation,
  PackageCheck,
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
  title: "Uluslararası Lojistik",
  description:
    "Gümrük süreçleri dahil uçtan uca yönetilen uluslararası lojistik hizmeti. Sınır ötesi sevkiyatlarınızı güvenli ve planlı şekilde taşıyoruz.",
  path: "/hizmetler/uluslararasi-lojistik",
});

export const hero: ServiceHeroProps = {
  kicker: "ULUSLARARASI LOJİSTİK",
  heading: "Sınır Ötesi Sevkiyatlarda Güvenilir Lojistik Ortağınız",
  intro:
    "Gümrük süreçleri dahil olmak üzere uluslararası sevkiyatlarınızı uçtan uca planlı bir şekilde yönetiyoruz.",
};

export const overview: ServiceOverviewProps = {
  kicker: "HİZMET HAKKINDA",
  heading: "Uluslararası Lojistik Hizmeti",
  paragraphs: [
    "Uluslararası lojistik hizmetimiz, sınır ötesi sevkiyatların gümrük süreçleri dahil olmak üzere uçtan uca organize edilmesini kapsar.",
    "Güzergah ve yük bilgilerinize göre planlanan sevkiyatlarınızı, düzenli bilgilendirme ile takip edilebilir şekilde yürütüyoruz.",
  ],
};

export const offer: ServiceOfferProps = {
  kicker: "NELER SUNUYORUZ",
  heading: "Hizmet Kapsamımız",
  items: [
    {
      icon: FileCheck2,
      title: "Gümrük İşlemleri",
      description: "Sevkiyatınıza ilişkin gümrük süreçleri tarafımızca yürütülür.",
    },
    {
      icon: FileText,
      title: "Evrak & Belge Yönetimi",
      description:
        "Taşıma için gerekli belgeler, süreç boyunca düzenli şekilde hazırlanır.",
    },
    {
      icon: Truck,
      title: "Sınır Ötesi Taşıma",
      description: "Yükünüz, planlanan güzergahta güvenli şekilde taşınır.",
    },
    {
      icon: ShieldCheck,
      title: "Sigortalı Taşıma",
      description: "Sevkiyatınız, taşıma süresince sigorta kapsamında yürütülür.",
    },
    {
      icon: Navigation,
      title: "Sevkiyat Takibi",
      description: "Sevkiyat sürecine ilişkin bilgi akışı düzenli olarak sağlanır.",
    },
    {
      icon: Users,
      title: "Profesyonel Ekip",
      description:
        "Uluslararası taşıma süreciniz, deneyimli ekibimiz tarafından yönetilir.",
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
      title: "Talep & Bilgilendirme",
      description:
        "Yük ve güzergah bilgilerinizi ileterek sevkiyat sürecini başlatırsınız.",
    },
    {
      number: "02",
      icon: FileCheck2,
      title: "Gümrük & Evrak Hazırlığı",
      description: "Gerekli gümrük işlemleri ve belgeler süreç öncesinde hazırlanır.",
    },
    {
      number: "03",
      icon: Truck,
      title: "Taşıma",
      description: "Yükünüz, planlanan güzergahta sınır ötesi olarak taşınır.",
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
      icon: FileCheck2,
      title: "Gümrük Sürecinde Deneyim",
      description: "Gümrük işlemleri, süreç bilgisine sahip ekibimiz tarafından yürütülür.",
    },
    {
      icon: ShieldCheck,
      title: "Güvenli Sınır Ötesi Taşıma",
      description: "Sevkiyatınız, taşıma süresi boyunca sigorta kapsamındadır.",
    },
    {
      icon: Clock,
      title: "Zamanında Teslimat",
      description: "Taşıma süreci, planlanan tarihe uygun şekilde tamamlanır.",
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
      question: "Hangi güzergahlara taşımacılık hizmeti sunuyorsunuz?",
      answer:
        "Uluslararası lojistik hizmetimiz güzergaha göre değerlendirilir. Talebinizi ileterek uygunluk bilgisi alabilirsiniz.",
    },
    {
      question: "Gümrük işlemlerini siz mi yürütüyorsunuz?",
      answer: "Evet, gümrük süreçleri hizmetimiz kapsamında tarafımızca yürütülür.",
    },
    {
      question: "Sevkiyatımı takip edebilir miyim?",
      answer: "Evet, sevkiyat sürecine ilişkin bilgi akışı düzenli olarak sağlanır.",
    },
    {
      question: "Sigortalı taşıma uygulanıyor mu?",
      answer: "Evet, sevkiyatlar taşıma süresince sigorta kapsamında yürütülür.",
    },
    {
      question: "Teklif almak için ne yapmalıyım?",
      answer: "Yük ve güzergah bilgilerinizi ileterek teklif talebinde bulunabilirsiniz.",
    },
  ],
};
