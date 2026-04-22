import { useLanguage } from "@/contexts/LanguageContext";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Zap, Award, Users, Leaf, Droplet } from "lucide-react";
import heroImage from "../images/hero.jpg";
import productsImage from "../images/productImage.jpg";
import potatoImg from "../images/potato.avif";
import fruitsImg from "../images/fruits.jpg";
import otherImg from "../images/another.avif";
import companyImage from "../images/الشركة.jpeg";

export default function Home() {
  const { language, t } = useLanguage();
  const [, navigate] = useLocation();
  const isRTL = language === "ar";

  const features = [
    {
      icon: Award,
      titleAr: "جودة عالية",
      titleEn: "High Quality",
      descAr: "معدات بمواصفات عالمية وجودة مضمونة",
      descEn: "Equipment with international specifications and guaranteed quality",
    },
    {
      icon: Zap,
      titleAr: "أداء فعال",
      titleEn: "Efficient Performance",
      descAr: "معدات عالية الكفاءة وموفرة للطاقة",
      descEn: "Highly efficient and energy-saving equipment",
    },
    {
      icon: Users,
      titleAr: "خدمة احترافية",
      titleEn: "Professional Service",
      descAr: "فريق متخصص وخدمة عملاء ممتازة",
      descEn: "Specialized team and excellent customer service",
    },
    {
      icon: Leaf,
      titleAr: "صديقة للبيئة",
      titleEn: "Eco-Friendly",
      descAr: "معدات آمنة وصديقة للبيئة",
      descEn: "Safe and environmentally friendly equipment",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-blue-50/30 to-transparent dark:from-emerald-950/20 dark:via-blue-950/10 dark:to-transparent" />
          <div className="container relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <div className="mb-4 inline-block">
                  <span className="px-4 py-2 bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-semibold">
                    {isRTL ? "🌟 معدات موثوقة  🌟": " 🌟 Trusted Equipment 🌟"}
                  </span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent">
                    {isRTL ? "أهلاً بك في" : "Welcome to"}
                  </span>
                  <br />
                  <span className="text-foreground">{t("header.title")}</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  {t("home.hero.description")}
                </p>
                <div className="flex gap-4 flex-wrap">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white border-0 gap-2 shadow-lg hover:shadow-xl transition-all"
                    onClick={() => navigate("/products")}
                  >
                    {t("home.hero.cta")}
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-emerald-200 hover:bg-emerald-50 dark:border-emerald-800 dark:hover:bg-emerald-950/30"
                    onClick={() => navigate("/contact")}
                  >
                    {t("common.contactUs")}
                  </Button>
                </div>
              </div>

                {/* Right Image */}
                <div className="flex items-center justify-center">
                  <div className="relative w-full h-96">

                    {/* Glow Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-300 to-blue-300 dark:from-emerald-800 dark:to-blue-800 rounded-3xl opacity-30 blur-2xl animate-pulse"></div>

                    {/* Image Card */}
                    <div className="relative w-full h-full rounded-3xl overflow-hidden border border-emerald-200 dark:border-emerald-800 shadow-2xl">
                      
                      <img 
                        src={heroImage} 
                        alt="معدات اللوتس"
                        className="w-full h-full object-cover transition duration-500 hover:scale-105"
                      />

                      {/* Overlay خفيف */}
                      <div className="absolute inset-0 bg-black/10"></div>

                    </div>

                  </div>
                </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-emerald-50/50 to-blue-50/30 dark:from-emerald-950/10 dark:to-blue-950/5">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                {isRTL ? "لماذا تختار اللوتس؟" : "Why Choose Al-Lotus?"}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {isRTL
                  ? "نقدم أفضل المعدات والخدمات في السوق"
                  : "We offer the best equipment and services in the market"}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={idx}
                    className="group bg-card p-6 rounded-2xl border border-emerald-200/50 dark:border-emerald-800/50 hover:border-emerald-400 dark:hover:border-emerald-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-blue-100 dark:from-emerald-900 dark:to-blue-900 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-foreground">
                      {language === "ar" ? feature.titleAr : feature.titleEn}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {language === "ar" ? feature.descAr : feature.descEn}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 px-4">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="flex items-center justify-center order-2 md:order-1">
              <div className="relative w-full h-96">

                {/* Glow خلفية */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-emerald-300 dark:from-blue-800 dark:to-emerald-800 rounded-3xl opacity-30 blur-2xl animate-pulse"></div>

                {/* الكارت */}
                <div className="relative w-full h-full rounded-3xl overflow-hidden border border-blue-200 dark:border-blue-800 shadow-2xl">
                  
                  <img 
                    src={productsImage} 
                    alt="منتجات اللوتس"
                    className="w-full h-full object-cover transition duration-500 hover:scale-105"
                  />

                  {/* Overlay خفيف */}
                  <div className="absolute inset-0 bg-black/10"></div>

                </div>

              </div>
            </div>

              {/* Content */}
              <div className="order-1 md:order-2">
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                  {t("home.about.title")}
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {t("home.about.description")}
                </p>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white border-0 shadow-lg hover:shadow-xl transition-all"
                  onClick={() => navigate("/about")}
                >
                  {isRTL ? "تعرف على المزيد" : "Learn More"}
                </Button>
              </div>
            </div>
          </div>
        </section>

       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
  {[
    { image: potatoImg, titleAr: "معدات البطاطس", titleEn: "Potato Equipment" },
    { image: fruitsImg, titleAr: "الفواكه والخضروات", titleEn: "Fruits & Vegetables" },
    { image: otherImg, titleAr: "معدات أخرى", titleEn: "Other Equipment" },
  ].map((item, idx) => (
    <div
      key={idx}
      className="group bg-card rounded-2xl overflow-hidden border border-emerald-200/50 dark:border-emerald-800/50 hover:border-emerald-400 dark:hover:border-emerald-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.03]"
    >
      
      <div className="p-4">
        <div className="w-full h-full overflow-hidden rounded-xl">
          <img 
            src={item.image}
            alt={item.titleEn}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      </div>

      <div className="p-8">
        <h3 className="font-bold mb-3 text-xl">
          {language === "ar" ? item.titleAr : item.titleEn}
        </h3>

        <p className="text-base text-muted-foreground mb-5">
          {isRTL
            ? "استكشف مجموعتنا الشاملة"
            : "Explore our comprehensive collection"}
        </p>

        <Button
          variant="outline"
          size="default"
          className="w-full border-emerald-200 hover:bg-emerald-50 dark:border-emerald-800 dark:hover:bg-emerald-950/30"
          onClick={() => navigate("/products")}
        >
          {t("common.learnMore")}
        </Button>
      </div>
    </div>
  ))}
</div>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-emerald-600 via-blue-600 to-emerald-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>
          <div className="container relative z-10 text-center">
            <h2 className="text-4xl font-bold mb-4">
              {t("home.cta.title")}
            </h2>
            <p className="text-lg mb-8 opacity-95 max-w-2xl mx-auto">
              {t("home.cta.description")}
            </p>
            <Button
              size="lg"
              className="bg-white text-emerald-600 hover:bg-gray-100 font-semibold shadow-lg hover:shadow-xl transition-all"
              onClick={() => navigate("/contact")}
            >
              {t("home.cta.button")}
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
