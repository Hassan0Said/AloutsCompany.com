import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Building2 } from "lucide-react";
import { useLocation } from "wouter";
import Homburg from "../images/هومبورج.jpeg";
import Formex from "../images/فورمكس.jpeg";
import ArTest from "../images/ارتست .jpeg";

export default function Agencies() {
  const { language, t } = useLanguage();
  const isRTL = language === "ar";
  const [, navigate] = useLocation();
  const agencies = [
  {
    nameAr: "شركة هومبورج هولاند – للمعدات الصناعية والزراعية",
    nameEn: "Homburg Holland – Industrial & Agricultural Machinery",
    image: Homburg,
    link: "https://www.homburg-holland.com/en/",
    descAr:
      "شركة هومبورج هولاند هي شركة هولندية متخصصة في تصنيع وتطوير المعدات الصناعية وتقنيات الزراعة الذكية. تأسست عام 1961 ويقع مقرها في هولندا، وتقدم حلولاً متقدمة تشمل تجهيز التربة، رعاية المحاصيل، إدارة المياه، وتقنيات الرش. كما تتميز الشركة بأنظمة الزراعة الدقيقة (Smart Farming) ومعدات الصرف عالية الجودة التي تساعد على تحسين الكفاءة والإنتاجية والاستدامة في القطاع الزراعي.",
    descEn:
      "Homburg Holland is a Dutch company specializing in advanced industrial and precision agricultural machinery. Founded in 1961 and headquartered in the Netherlands, the company provides innovative solutions for soil cultivation, crop care, water management, and spraying technologies. Homburg is also known for its Smart Farming systems and high-quality drainage equipment, helping improve efficiency, sustainability, and productivity in modern agriculture.",
  },
  {
    nameAr: "شركة فورمكس – للمعدات الصناعية ومعالجة المياه",
    nameEn: "Formex – Industrial & Water Treatment Equipment",
    link: "https://www.formex.es/",
    image: Formex,
    descAr: "شركة فورمكس هي شركة إسبانية متخصصة في المعدات الصناعية وحلول معالجة المياه. تقدم الشركة أنظمة متطورة للترشيح وتنقية المياه وإدارتها، وتُستخدم في العديد من التطبيقات الصناعية والتجارية. تتميز فورمكس بالاعتمادية والابتكار، مع التركيز على تقديم حلول فعّالة ومستدامة بأعلى معايير الجودة العالمية.",
    descEn: "Formex is a Spanish company specializing in industrial equipment and water treatment solutions. The company provides advanced systems for filtration, purification, and water management used in various industrial and commercial applications. Known for its reliability and innovative engineering, Formex focuses on delivering efficient, sustainable, and high-performance solutions that meet international quality standards.",
  },
  {
    nameAr: "شركة آرت تيست – لأجهزة اختبار المواد وأنظمة مراقبة الجودة الصناعية",
    nameEn: "ArtTest B.V. – Industrial Material Testing & Quality Control Systems",
    link: "https://www.artec-testapparatuur.nl",
    image: ArTest,
    descAr: "شركة آرت تيست هي شركة أوروبية متخصصة في تصنيع وتطوير أجهزة اختبار المواد وأنظمة مراقبة الجودة الصناعية والمعملية. توفر الشركة حلولاً عالية الدقة تستخدم في خطوط الإنتاج والمعامل لضمان جودة المنتجات وموثوقيتها وفق المعايير الدولية. وتُستخدم أنظمتها في مجالات الهندسة والصناعة والبحث العلمي.",
    descEn: "ArtTest B.V. is a European company specialized in advanced material testing equipment and quality control systems for industrial and laboratory applications. The company provides high-precision testing solutions used in production lines and research laboratories to ensure product quality, reliability, and compliance with international standards. Its systems are widely used in engineering, manufacturing, and industrial research sectors.",
  },
];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">

        {/* Hero */}
        <section className="py-16 px-4 bg-gradient-to-br from-emerald-50/50 via-blue-50/30 to-transparent dark:from-emerald-950/20 dark:via-blue-950/10">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              {t("agencies.title")}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("agencies.description")}
            </p>
          </div>
        </section>

        {/* Grid */}
        <section className="py-20 px-4">
          <div className="container">

            <div className="grid md:grid-cols-2 gap-8">

              {agencies.map((agency, idx) => (
                <div
                  key={idx}
                  className="group bg-card rounded-2xl overflow-hidden border border-emerald-100 dark:border-emerald-900 hover:border-emerald-400 dark:hover:border-emerald-600 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >

                  {/* Image */}
                  <div className="h-64 relative overflow-hidden">

                    <img
                      src={agency.image}
                      alt={language === "ar" ? agency.nameAr : agency.nameEn}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all"></div>

              </div>

                  {/* Content */}
                  <div className="p-6">

                    <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                      {language === "ar" ? agency.nameAr : agency.nameEn}
                    </h3>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {language === "ar" ? agency.descAr : agency.descEn}
                    </p>

                    <Button
                      className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 text-white hover:from-emerald-700 hover:to-blue-700 transition-all shadow-md hover:shadow-lg"
                      onClick={() => window.open(agency.link, "_blank")}
                    >
                      {isRTL ? "تعرف على المزيد" : "Learn More"}
                    </Button>

                  </div>

                </div>
              ))}

            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-gradient-to-r from-emerald-600 via-blue-600 to-emerald-600 text-white">

          <div className="container text-center">

            <h2 className="text-3xl font-bold mb-4">
              {isRTL ? "هل تريد أن تصبح شريكاً معنا؟" : "Want to Become Our Partner?"}
            </h2>

            <p className="text-lg mb-8 opacity-90">
              {isRTL
                ? "تواصل معنا لمناقشة فرص الشراكة"
                : "Contact us to discuss partnership opportunities"}
            </p>

            <Button
              size="lg"
              className="bg-white text-emerald-600 hover:bg-gray-100 font-semibold"
              onClick={() => navigate("/contact")}
            >
              {t("common.contactUs")}
            </Button>

          </div>

        </section>

      </main>

      <Footer />
    </div>
  );
}