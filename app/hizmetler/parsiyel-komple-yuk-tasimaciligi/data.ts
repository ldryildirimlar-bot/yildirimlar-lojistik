import type { Metadata } from "next";
import {
  Boxes,
  ClipboardList,
  Clock,
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
  title: "Parsiyel & Komple Yük Taşımacılığı",
  description:
    "Yük hacminize uygun parsiyel veya komple taşıma çözümleri. Güvenli, planlı ve sigortalı yük taşımacılığı hizmeti.",
  path: "/hizmetler/parsiyel-komple-yuk-tasimaciligi",
});

export const hero: ServiceHeroProps = {
  kicker: "PARSİYEL & KOMPLE YÜK TAŞIMACILIĞI",
  heading: "Yük Hacminize Uygun Esnek Taşıma Çözümleri",
  intro:
    "Parsiyel veya komple yük taşımacılığında, hacminize uygun planlama ile güvenli sevkiyat sağlıyoruz.",
};

export const overview: ServiceOverviewProps = {
  kicker: "HİZMET HAKKINDA",
  heading: "Parsiyel & Komple Yük Taşımacılığı",
  paragraphs: [
    "Yük taşımacılığı hizmetimiz, aracın tamamını dolduran komple yüklerden, daha küçük hacimli parsiyel sevkiyatlara kadar farklı ihtiyaçları kapsar.",
    "Yükünüzün hacmine ve güzergahına göre planlanan taşıma süreci, düzenli bilgilendirme ile yürütülür.",
  ],
};

export const offer: ServiceOfferProps = {
  kicker: "NELER SUNUYORUZ",
  heading: "Hizmet Kapsamımız",
  items: [
    {
      icon: Boxes,
      title: "Parsiyel Taşıma",
      description:
        "Yükünüzün kapladığı alan kadarının kullanıldığı esnek taşıma seçeneğidir.",
    },
    {
      icon: Truck,
      title: "Komple Taşıma",
      description: "Aracın tamamını dolduran yükler için komple taşıma sağlanır.",
    },
    {
      icon: ClipboardList,
      title: "Yük Planlama",
      description: "Yük hacmine göre araç ve güzergah planlaması yapılır.",
    },
    {
      icon: ShieldCheck,
      title: "Sigortalı Taşıma",
      description: "Sevkiyatınız, taşıma süresince sigorta kapsamında yürütülür.",
    },
    {
      icon: Navigation,
      title: "Güzergah Takibi",
      description: "Sevkiyat sürecine ilişkin bilgi akışı düzenli olarak sağlanır.",
    },
    {
      icon: Users,
      title: "Profesyonel Ekip",
      description: "Taşıma süreciniz, deneyimli ekibimiz tarafından yönetilir.",
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
      title: "Yük Bilgisi & Teklif",
      description: "Yük hacmi ve güzergah bilgilerinize göre teklif sunarız.",
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
      icon: Boxes,
      title: "Esnek Taşıma Seçenekleri",
      description: "Yük hacminize uygun parsiyel veya komple taşıma seçilebilir.",
    },
    {
      icon: ShieldCheck,
      title: "Güvenli Yük Taşıma",
      description: "Yükünüz, uygun ekipman ve yöntemlerle güvenli şekilde taşınır.",
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
      question: "Parsiyel taşıma nedir?",
      answer:
        "Parsiyel taşıma, aracın tamamının değil, yükünüzün kapladığı alan kadarının kullanıldığı taşıma yöntemidir.",
    },
    {
      question: "Komple taşıma ne zaman tercih edilmelidir?",
      answer: "Yük hacmi bir aracı dolduracak düzeydeyse komple taşıma tercih edilebilir.",
    },
    {
      question: "Yükümün sigortası var mı?",
      answer: "Evet, taşıma süresince sevkiyatınız sigorta kapsamındadır.",
    },
    {
      question: "Teslimat süresi ne kadar sürer?",
      answer:
        "Teslimat süresi, güzergah ve yük hacmine göre planlama aşamasında netleştirilir.",
    },
    {
      question: "Fiyatlandırma nasıl yapılıyor?",
      answer: "Fiyatlandırma, yük hacmi ve güzergaha göre teklif aşamasında belirlenir.",
    },
  ],
};
