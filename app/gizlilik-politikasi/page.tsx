import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LegalPage from "@/components/LegalPage";
import { buildMetadata } from "@/lib/seo";
import { COMPANY_NAME, EMAIL_ADDRESS } from "@/lib/contact";

export const metadata: Metadata = buildMetadata({
  title: "Gizlilik Politikası",
  description: `${COMPANY_NAME} gizlilik politikası (taslak).`,
  path: "/gizlilik-politikasi",
});

export default function GizlilikPolitikasiPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <LegalPage
          kicker="YASAL"
          heading="Gizlilik Politikası"
          sections={[
            {
              heading: "Giriş",
              paragraphs: [
                `${COMPANY_NAME} olarak, web sitemizi ziyaret eden ve hizmetlerimizden faydalanan kullanıcılarımızın gizliliğine önem veriyoruz. Bu sayfa, hangi bilgilerin nasıl işlendiğine dair genel çerçeveyi açıklar.`,
              ],
            },
            {
              heading: "Toplanan Bilgiler",
              paragraphs: [
                "Web sitemiz üzerinden bizimle iletişime geçtiğinizde (telefon, WhatsApp veya e-posta yoluyla), talebinizi yanıtlamak amacıyla paylaştığınız iletişim bilgileri tarafımızca kaydedilebilir.",
              ],
            },
            {
              heading: "Bilgilerin Kullanım Amacı",
              paragraphs: [
                "Paylaşılan bilgiler yalnızca talep edilen hizmetin sunulması, teklif hazırlanması ve iletişimin sürdürülmesi amacıyla kullanılır.",
              ],
            },
            {
              heading: "Çerezler",
              paragraphs: [
                "Web sitemiz, temel işlevselliği desteklemek amacıyla sınırlı düzeyde çerez kullanabilir. Tarayıcı ayarlarınız üzerinden çerez tercihlerinizi yönetebilirsiniz.",
              ],
            },
            {
              heading: "Bilgilerin Paylaşımı",
              paragraphs: [
                "Kişisel bilgileriniz, yasal zorunluluklar dışında üçüncü taraflarla paylaşılmaz.",
              ],
            },
            {
              heading: "Veri Güvenliği",
              paragraphs: [
                "Bilgilerinizin güvenliğini sağlamak için makul teknik ve idari önlemler alınmaktadır.",
              ],
            },
            {
              heading: "İletişim",
              paragraphs: [
                `Gizlilik politikamızla ilgili sorularınız için ${EMAIL_ADDRESS} adresinden bizimle iletişime geçebilirsiniz.`,
              ],
            },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
