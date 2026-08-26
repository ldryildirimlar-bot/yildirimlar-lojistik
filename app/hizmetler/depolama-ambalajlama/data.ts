import type { Metadata } from "next";
import {
  Box,
  ClipboardList,
  Clock,
  Lock,
  PackageCheck,
  ShieldCheck,
  Tag,
  Users,
  Warehouse,
} from "lucide-react";
import type { ServiceHeroProps } from "@/components/services/ServiceHero";
import type { ServiceOverviewProps } from "@/components/services/ServiceOverview";
import type { ServiceOfferProps } from "@/components/services/ServiceOffer";
import type { ServiceProcessProps } from "@/components/services/ServiceProcess";
import type { ServiceWhyChooseProps } from "@/components/services/ServiceWhyChoose";
import type { ServiceFaqProps } from "@/components/services/ServiceFaq";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Depolama & Ambalajlama",
  description:
    "Güvenli depolama alanları ve profesyonel ambalajlama hizmeti. Eşyalarınız, taşıma öncesi ve sonrasında koruma altındadır.",
  path: "/hizmetler/depolama-ambalajlama",
});

export const hero: ServiceHeroProps = {
  kicker: "DEPOLAMA & AMBALAJLAMA",
  heading: "Eşyalarınız İçin Güvenli Depolama ve Özenli Ambalajlama",
  intro:
    "Eşyalarınızı, güvenli depolama alanlarında profesyonel ambalajlama ile koruma altına alıyoruz.",
  image: "/images/depolama-ambalajlama.png",
};

export const overview: ServiceOverviewProps = {
  kicker: "HİZMET HAKKINDA",
  heading: "Depolama & Ambalajlama Hizmeti",
  paragraphs: [
    "Depolama ve ambalajlama hizmetimiz, eşyalarınızın taşıma öncesinde uygun malzemelerle paketlenmesini ve ihtiyaç halinde güvenli alanlarda saklanmasını kapsar.",
    "Kısa veya uzun süreli depolama ihtiyaçlarınıza göre planlanan süreç, eşyalarınızın korunmasını önceliklendirir.",
  ],
};

export const offer: ServiceOfferProps = {
  kicker: "NELER SUNUYORUZ",
  heading: "Hizmet Kapsamımız",
  items: [
    {
      icon: Warehouse,
      title: "Kısa & Uzun Süreli Depolama",
      description: "İhtiyacınıza göre kısa veya uzun vadeli depolama sağlanır.",
    },
    {
      icon: Box,
      title: "Profesyonel Ambalajlama",
      description: "Eşyalarınız, uygun malzemelerle özenle paketlenir.",
    },
    {
      icon: ClipboardList,
      title: "Envanter Kaydı",
      description: "Depolanan eşyalarınız, teslim alma sürecinde kayıt altına alınır.",
    },
    {
      icon: ShieldCheck,
      title: "Sigortalı Depolama",
      description: "Depolanan eşyalarınız, süreç boyunca sigorta kapsamındadır.",
    },
    {
      icon: Lock,
      title: "Güvenlikli Depo Alanları",
      description: "Depolama, erişim kontrollü ve güvenlikli alanlarda yapılır.",
    },
    {
      icon: Users,
      title: "Profesyonel Ekip",
      description: "Depolama ve ambalajlama süreciniz, deneyimli ekibimiz tarafından yönetilir.",
    },
  ],
};

export const process: ServiceProcessProps = {
  kicker: "SÜRECİMİZ",
  heading: "Depolama Süreci",
  steps: [
    {
      number: "01",
      icon: ClipboardList,
      title: "Talep & Değerlendirme",
      description: "Eşya miktarı ve süre ihtiyacınıza göre değerlendirme yapılır.",
    },
    {
      number: "02",
      icon: Box,
      title: "Ambalajlama",
      description: "Eşyalarınız, taşımaya ve depolamaya uygun şekilde paketlenir.",
    },
    {
      number: "03",
      icon: Warehouse,
      title: "Depolama",
      description: "Paketlenen eşyalarınız, güvenlikli depo alanında saklanır.",
    },
    {
      number: "04",
      icon: PackageCheck,
      title: "Teslimat",
      description: "Talebiniz doğrultusunda eşyalarınız adresinize teslim edilir.",
    },
  ],
};

export const whyChoose: ServiceWhyChooseProps = {
  kicker: "NEDEN BİZ",
  heading: "Neden Bu Hizmeti Tercih Etmelisiniz",
  items: [
    {
      icon: Lock,
      title: "Güvenli Depolama",
      description: "Eşyalarınız, erişim kontrollü depo alanlarında saklanır.",
    },
    {
      icon: Box,
      title: "Profesyonel Ambalajlama",
      description: "Paketleme süreci, uygun malzeme ve yöntemlerle yürütülür.",
    },
    {
      icon: Clock,
      title: "Esnek Süre Seçenekleri",
      description: "Depolama süresi, ihtiyacınıza göre kısa veya uzun vadeli planlanır.",
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
      question: "Depolama süresi ne kadar esnek?",
      answer: "Depolama süresi, ihtiyacınıza göre kısa veya uzun vadeli olarak planlanabilir.",
    },
    {
      question: "Eşyalarım depoda sigortalı mı?",
      answer: "Evet, depolanan eşyalarınız sigorta kapsamındadır.",
    },
    {
      question: "Ambalajlama malzemeleri sizde mi?",
      answer: "Evet, ambalajlama işlemi uygun malzemelerle tarafımızca yapılır.",
    },
    {
      question: "Depoya erişim sağlayabilir miyim?",
      answer: "Depo erişimi, talebinize göre önceden planlanarak sağlanır.",
    },
    {
      question: "Hangi tür eşyalar depolanabilir?",
      answer: "Ev ve ofis eşyaları başta olmak üzere farklı türde yükler depolanabilir.",
    },
  ],
};
