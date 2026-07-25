import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LegalPage from "@/components/LegalPage";
import { buildMetadata } from "@/lib/seo";
import { COMPANY_NAME, EMAIL_ADDRESS } from "@/lib/contact";

export const metadata: Metadata = buildMetadata({
  title: "Kullanım Şartları",
  description: `${COMPANY_NAME} kullanım şartları (taslak).`,
  path: "/kullanim-sartlari",
});

export default function KullanimSartlariPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <LegalPage
          kicker="YASAL"
          heading="Kullanım Şartları"
          sections={[
            {
              heading: "Giriş",
              paragraphs: [
                `Bu web sitesini kullanarak, aşağıda yer alan kullanım şartlarını kabul etmiş sayılırsınız. ${COMPANY_NAME}, bu şartları önceden bildirimde bulunmaksızın güncelleyebilir.`,
              ],
            },
            {
              heading: "Hizmetlerin Kullanımı",
              paragraphs: [
                "Web sitesi üzerinden paylaşılan hizmet bilgileri tanıtım amaçlıdır. Kesin fiyat ve şartlar, teklif aşamasında ayrıca netleştirilir.",
              ],
            },
            {
              heading: "Kullanıcı Yükümlülükleri",
              paragraphs: [
                "Web sitesi üzerinden iletişime geçerken paylaşılan bilgilerin doğru ve güncel olması kullanıcının sorumluluğundadır.",
              ],
            },
            {
              heading: "Fikri Mülkiyet Hakları",
              paragraphs: [
                `Web sitesinde yer alan logo, metin ve görsel içerikler ${COMPANY_NAME}'a aittir ve izinsiz kullanılamaz.`,
              ],
            },
            {
              heading: "Sorumluluğun Sınırlandırılması",
              paragraphs: [
                "Web sitesindeki bilgiler dikkatle hazırlanmış olsa da, olası hata veya eksikliklerden dolayı sorumluluk kabul edilmez.",
              ],
            },
            {
              heading: "Şartlarda Değişiklik",
              paragraphs: [
                "Kullanım şartları, gerekli görüldüğünde güncellenebilir. Güncel sürüm her zaman bu sayfada yayımlanır.",
              ],
            },
            {
              heading: "İletişim",
              paragraphs: [
                `Kullanım şartlarıyla ilgili sorularınız için ${EMAIL_ADDRESS} adresinden bizimle iletişime geçebilirsiniz.`,
              ],
            },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
