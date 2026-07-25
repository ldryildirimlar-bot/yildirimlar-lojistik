import type { Metadata } from "next";
import {
  BatteryCharging,
  Clock,
  LifeBuoy,
  MapPin,
  Navigation,
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
  title: "Yol Yardım & Çekici",
  description:
    "7/24 yol yardım ve çekici hizmeti. Araç arızalarında hızlı müdahale ve güvenli çekme desteği sunuyoruz.",
  path: "/hizmetler/yol-yardim-cekici",
});

export const hero: ServiceHeroProps = {
  kicker: "YOL YARDIM & ÇEKİCİ",
  heading: "Araç Arızalarında 7/24 Yol Yardım Desteği",
  intro:
    "Yol üzerinde yaşanan arızalarda, 7/24 çekici ve yol yardım hizmetiyle yanınızdayız.",
};

export const overview: ServiceOverviewProps = {
  kicker: "HİZMET HAKKINDA",
  heading: "Yol Yardım & Çekici Hizmeti",
  paragraphs: [
    "Yol yardım hizmetimiz, araç arızası veya kaza durumunda konumunuza yönlendirilen ekibimizle hızlı müdahale sağlanmasını kapsar.",
    "Aracınız, ihtiyaç halinde uygun ekipmanla güvenli şekilde çekilerek talep ettiğiniz adrese ulaştırılır.",
  ],
};

export const offer: ServiceOfferProps = {
  kicker: "NELER SUNUYORUZ",
  heading: "Hizmet Kapsamımız",
  items: [
    {
      icon: Clock,
      title: "7/24 Yol Yardımı",
      description: "Araç arızalarında günün her saati yol yardım desteği sağlanır.",
    },
    {
      icon: Truck,
      title: "Araç Çekme Hizmeti",
      description: "Aracınız, uygun ekipmanla güvenli şekilde çekilir.",
    },
    {
      icon: Wrench,
      title: "Yerinde Müdahale",
      description: "Küçük arızalarda, yol üzerinde ilk müdahale yapılır.",
    },
    {
      icon: BatteryCharging,
      title: "Akü Takviyesi",
      description: "Akü kaynaklı arızalarda takviye hizmeti sunulur.",
    },
    {
      icon: LifeBuoy,
      title: "Kurtarma Hizmeti",
      description: "Yoldan çıkma gibi durumlarda araç kurtarma desteği sağlanır.",
    },
    {
      icon: Users,
      title: "Profesyonel Ekip",
      description: "Yol yardım süreciniz, deneyimli ekibimiz tarafından yönetilir.",
    },
  ],
};

export const process: ServiceProcessProps = {
  kicker: "SÜRECİMİZ",
  heading: "Yol Yardım Süreci",
  steps: [
    {
      number: "01",
      icon: MapPin,
      title: "Bildirim & Konum",
      description: "Telefon veya WhatsApp üzerinden konum ve araç bilgisi iletirsiniz.",
    },
    {
      number: "02",
      icon: Navigation,
      title: "Yönlendirme",
      description: "En yakın ekibimiz, konumunuza yönlendirilir.",
    },
    {
      number: "03",
      icon: Wrench,
      title: "Müdahale",
      description: "Aracınıza yerinde müdahale edilir veya çekim için hazırlık yapılır.",
    },
    {
      number: "04",
      icon: Truck,
      title: "Çekme & Kurtarma",
      description: "Gerekli görülmesi halinde aracınız güvenli şekilde çekilir.",
    },
  ],
};

export const whyChoose: ServiceWhyChooseProps = {
  kicker: "NEDEN BİZ",
  heading: "Neden Bu Hizmeti Tercih Etmelisiniz",
  items: [
    {
      icon: Clock,
      title: "7/24 Hizmet",
      description: "Yol yardım desteğine günün her saati ulaşabilirsiniz.",
    },
    {
      icon: Navigation,
      title: "Hızlı Müdahale",
      description: "Konumunuza en yakın ekip yönlendirilerek süreç hızlandırılır.",
    },
    {
      icon: ShieldCheck,
      title: "Güvenli Çekme",
      description: "Aracınız, uygun ekipmanla hasar vermeden çekilir.",
    },
    {
      icon: Tag,
      title: "Şeffaf Fiyatlandırma",
      description: "Hizmet ücreti, müdahale öncesinde netleştirilir.",
    },
  ],
};

export const faq: ServiceFaqProps = {
  kicker: "SIKÇA SORULAN SORULAR",
  heading: "Merak Edilenler",
  faqs: [
    {
      question: "Yol yardım hizmeti hangi saatlerde veriliyor?",
      answer: "Yol yardım hizmetimiz 7/24 sunulmaktadır.",
    },
    {
      question: "Hangi araç tiplerine hizmet veriyorsunuz?",
      answer: "Farklı araç tiplerine uygun çekici hizmeti sunuyoruz.",
    },
    {
      question: "Akü takviyesi hizmeti var mı?",
      answer: "Evet, akü takviyesi hizmetimiz kapsamında yer alır.",
    },
    {
      question: "Aracım nereye çekilir?",
      answer: "Aracınız, talebinize göre belirlediğiniz servis veya adrese çekilir.",
    },
    {
      question: "Yol yardım talebini nasıl iletebilirim?",
      answer: "Telefon veya WhatsApp üzerinden konum ve araç bilgisi ileterek talepte bulunabilirsiniz.",
    },
  ],
};
