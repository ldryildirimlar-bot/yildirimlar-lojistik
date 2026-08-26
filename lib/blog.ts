/**
 * Single source of truth for the four "Lojistik Rehberi" blog articles.
 * Read by the homepage LogisticsGuide cards and by app/blog/[slug]/page.tsx.
 * General logistics guidance only — no invented company facts, statistics,
 * or claims of owning trucks/warehouses/branches.
 */

export interface BlogSection {
  heading: string;
  paragraphs?: string[];
  items?: string[];
}

export interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  sections: BlogSection[];
  conclusion: string;
}

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    slug: "evden-eve-nakliyat-fiyatlari-nasil-belirlenir",
    title: "Evden Eve Nakliyat Fiyatları Nasıl Belirlenir?",
    excerpt:
      "Evden eve nakliyat teklifini oluşturan temel etkenleri ve süreç boyunca nelere dikkat etmeniz gerektiğini anlatıyoruz.",
    image: "/images/evden-eve-nakliyat.png",
    sections: [
      {
        heading: "Fiyatı Etkileyen Temel Faktörler",
        paragraphs: [
          "Evden eve nakliyat fiyatı tek bir kalemden değil, birden fazla değişkenin birleşiminden oluşur. Eşya hacmi ve ağırlığı, taşınacak mesafe, bulunduğunuz katın durumu ve asansör ihtiyacı bu değişkenlerin başında gelir.",
          "Taşıma tarihi de fiyatı etkileyebilir; yoğun dönemlerde planlama biraz daha önceden yapıldığında süreç daha rahat ilerler.",
        ],
      },
      {
        heading: "Teklif Süreci Nasıl İşler?",
        paragraphs: [
          "Sağlıklı bir fiyat için öncelikle taşınacak eşyaların hacmi ve özel bakım gerektiren parçalar (beyaz eşya, cam yüzeyli mobilya, hassas eşyalar vb.) değerlendirilir.",
          "Bu bilgiler netleştikten sonra size özel bir teklif sunulur ve fiyat, süreç boyunca değişmeden uygulanır.",
        ],
      },
      {
        heading: "Ek Hizmetler Fiyatı Nasıl Etkiler?",
        paragraphs: [
          "Paketleme, mobilya sökme-kurma, asansörlü taşıma ve sigortalı taşıma gibi ek hizmetler, ihtiyacınıza göre teklife dahil edilebilir.",
          "Bu hizmetlerden hangilerine ihtiyaç duyduğunuzu baştan belirtmeniz, teklifin daha isabetli hazırlanmasını sağlar.",
        ],
      },
    ],
    conclusion:
      "Net ve şeffaf bir fiyat almak için taşınacak eşyalarınız ve adres bilgileriniz hakkında bize detaylı bilgi vermeniz yeterli. Size özel teklifinizi almak için hemen iletişime geçebilirsiniz.",
  },
  {
    slug: "sehirler-arasi-nakliyatta-nelere-dikkat-edilmeli",
    title: "Şehirler Arası Nakliyatta Nelere Dikkat Edilmeli?",
    excerpt:
      "Uzun mesafeli taşımalarda süreci sorunsuz ilerletmek için planlama, paketleme ve güvenlik açısından dikkat edilmesi gerekenler.",
    image: "/images/sehirler-arasi-nakliyat.png",
    sections: [
      {
        heading: "Doğru Planlama Neden Önemli?",
        paragraphs: [
          "Şehirler arası taşımalarda mesafe uzadıkça planlamanın önemi artar. Taşıma tarihinin, güzergahın ve teslimat noktasının netleşmiş olması, sürecin sorunsuz ilerlemesini sağlar.",
        ],
      },
      {
        heading: "Yükün Paketlenmesi ve Korunması",
        paragraphs: [
          "Uzun mesafeli taşımalarda eşyaların uygun malzemelerle paketlenmesi büyük önem taşır. Özellikle kırılabilir ve hassas eşyalar için ek koruma önlemleri alınması önerilir.",
        ],
      },
      {
        heading: "Güzergah ve Zamanlama",
        paragraphs: [
          "Planlanan güzergah ve tahmini teslimat süresi, taşıma öncesinde netleştirilmelidir. Bu sayede yeni adresinizdeki hazırlıkları buna göre planlayabilirsiniz.",
        ],
      },
      {
        heading: "Sigorta ve Güvenlik",
        paragraphs: [
          "Şehirler arası sevkiyatlarda sigortalı taşıma seçeneği, olası riskler için ek bir güvence sağlar. Taşıma öncesinde bu konuyu netleştirmeniz önerilir.",
        ],
      },
    ],
    conclusion:
      "Planlı bir güzergah yönetimi ve düzenli bilgilendirme ile şehirler arası sevkiyatlarınız güvenle ilerler. Taşıma ihtiyaçlarınızı bize iletin, size uygun planı birlikte oluşturalım.",
  },
  {
    slug: "parsiyel-yuk-tasimaciligi-nedir",
    title: "Parsiyel Yük Taşımacılığı Nedir?",
    excerpt:
      "Parsiyel ve komple yük taşımacılığı arasındaki farkları ve hangi durumlarda parsiyel taşımanın daha uygun olduğunu ele alıyoruz.",
    image: "/images/parsiyel-komple-yuk.png",
    sections: [
      {
        heading: "Parsiyel Taşımacılık Nedir?",
        paragraphs: [
          "Parsiyel taşımacılık, bir aracın tamamını doldurmayan, daha küçük hacimli yüklerin taşınması için kullanılan bir yöntemdir. Yükünüz, araç kapasitesinin tamamına ihtiyaç duymadığınız durumlarda daha ekonomik bir çözüm sunar.",
        ],
      },
      {
        heading: "Parsiyel mi Komple mi? Hangisi Size Uygun?",
        paragraphs: [
          "Yük hacminiz bir aracı dolduracak kadar büyükse komple taşıma, daha küçük hacimli bir yükünüz varsa parsiyel taşıma daha uygun bir seçenek olabilir.",
          "Doğru seçim, yük hacmi, zamanlama ve bütçe gibi faktörlere göre değerlendirilir.",
        ],
      },
      {
        heading: "Parsiyel Taşımada Süreç Nasıl İşler?",
        paragraphs: [
          "Yük ve güzergah bilgileriniz alındıktan sonra, ihtiyacınıza uygun taşıma planı oluşturulur ve sevkiyatınız planlandığı şekilde gerçekleştirilir.",
        ],
      },
    ],
    conclusion:
      "Yük hacminize uygun en pratik çözümü belirlemek için ihtiyacınızı bizimle paylaşmanız yeterli. Parsiyel ya da komple, size en uygun seçeneği birlikte planlayalım.",
  },
  {
    slug: "esyalarinizi-tasimaya-hazirlarken-10-oneri",
    title: "Eşyalarınızı Taşımaya Hazırlarken 10 Öneri",
    excerpt:
      "Taşınma sürecini kolaylaştırmak için eşyalarınızı hazırlarken izleyebileceğiniz pratik öneriler.",
    image: "/images/depolama-ambalajlama.png",
    sections: [
      {
        heading: "Taşınma Öncesi Hazırlık Listesi",
        items: [
          "Taşınmadan birkaç hafta önce kullanmadığınız eşyaları ayırıp elden çıkarmaya başlayın.",
          "Kırılabilir eşyaları oda oda değil, malzeme türüne göre gruplandırarak paketleyin.",
          "Her kutunun içeriğini ve hangi odaya ait olduğunu dışına yazın.",
          "Değerli ve önemli evraklarınızı ayrı ve yanınızda taşıyacağınız bir çanta içinde tutun.",
          "Elektronik eşyaların kablolarını etiketleyerek yeniden kurulumu kolaylaştırın.",
          "Beyaz eşyaları taşımadan önce temizleyip kurulanmasını sağlayın.",
          "Mobilyaların sökülmesi gerekiyorsa vidaları etiketli poşetlerde saklayın.",
          "Yeni adresinizdeki asansör ve giriş ölçülerini önceden kontrol edin.",
          "Taşınma günü için gerekli olabilecek temel eşyaları ayrı bir çantada bulundurun.",
          "Taşıma tarihini ve adres bilgilerinizi netleştirerek süreci önceden planlayın.",
        ],
      },
    ],
    conclusion:
      "Doğru hazırlık, taşınma gününü çok daha rahat hale getirir. Paketleme ve taşıma sürecinin tamamında yanınızda olmamızı isterseniz bizimle iletişime geçebilirsiniz.",
  },
];

export function getBlogArticle(slug: string): BlogArticle | undefined {
  return BLOG_ARTICLES.find((article) => article.slug === slug);
}
