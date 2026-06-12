import { useLanguage } from "@/contexts/LanguageContext";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Zap, Award, Users, Leaf, Sparkles, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import heroImage from "../images/hero.jpg";
import productsImage from "../images/productImage.jpg";
import potatoImg from "../images/potato.avif";
import fruitsImg from "../images/fruits.jpg";
import otherImg from "../images/another.avif";

// Animated Counter Component
function AnimatedCounter({ 
  end, 
  duration = 2500, 
  prefix = "", 
  suffix = "" 
}: { 
  end: number; 
  duration?: number; 
  prefix?: string; 
  suffix?: string 
}) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById(`counter-${end}`);
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [end, isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <motion.div 
      id={`counter-${end}`} 
      className="text-center"
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-6xl md:text-7xl font-black bg-gradient-to-r from-emerald-600 via-teal-500 to-blue-600 bg-clip-text text-transparent mb-4 drop-shadow-lg">
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </div>
    </motion.div>
  );
}

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

  const products = [
    { image: potatoImg, titleAr: "معدات البطاطس", titleEn: "Potato Equipment" },
    { image: fruitsImg, titleAr: "الفواكه والخضروات", titleEn: "Fruits & Vegetables" },
    { image: otherImg, titleAr: "معدات أخرى", titleEn: "Other Equipment" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-emerald-100 selection:text-emerald-900">
      <Header />

      <main className="flex-1">
        {/* Hero Section - Premium Design */}
        <section className="relative py-20 md:py-32 px-4 overflow-hidden">
          <style>{`
            @keyframes blob {
              0%, 100% { transform: translate(0, 0) scale(1); }
              33% { transform: translate(30px, -50px) scale(1.1); }
              66% { transform: translate(-20px, 20px) scale(0.9); }
            }
            @keyframes shimmer-text {
              0%, 100% { background-position: 0% center; }
              50% { background-position: 100% center; }
            }
            .animate-blob {
              animation: blob 7s infinite;
            }
            .shimmer-text {
              background-size: 200% auto;
              animation: shimmer-text 3s linear infinite;
            }
          `}</style>

          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-300/20 rounded-full blur-3xl animate-blob" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: "2s" }} />
            <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-teal-300/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: "4s" }} />
          </div>

          <div className="container relative z-10">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                  className="inline-block px-5 py-2.5 mb-6 text-sm font-bold tracking-wider uppercase bg-emerald-100/50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full border border-emerald-500/20"
                >
                  ✨ {isRTL ? "معدات موثوقة" : "Trusted Equipment"}
                </motion.span>

                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tight"
                >
                  <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-blue-600 bg-clip-text text-transparent">
                    {isRTL ? "أهلاً بك في" : "Welcome to"}
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-emerald-700 to-blue-700 bg-clip-text text-transparent">
                    {t("header.title")}
                  </span>
                </motion.h1>

                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-lg"
                >
                  {t("home.hero.description")}
                </motion.p>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="flex gap-4 flex-wrap"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white border-0 gap-2 shadow-xl shadow-emerald-600/30 hover:shadow-emerald-600/50 px-8 py-7 h-auto text-lg font-bold rounded-2xl"
                      onClick={() => navigate("/products")}
                    >
                      {t("home.hero.cta")}
                      <ArrowRight className="w-6 h-6" />
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      className="border-2 border-emerald-500/30 hover:border-emerald-500/60 hover:bg-emerald-500/10 text-foreground font-bold px-8 py-7 h-auto text-lg rounded-2xl transition-all"
                      onClick={() => navigate("/contact")}
                    >
                      {t("common.contactUs")}
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Right Image */}
              <motion.div
                initial={{ opacity: 0, x: 50, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex items-center justify-center"
              >
                <div className="relative w-full max-w-md">
                  {/* Animated Glow */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-blue-400 rounded-[40px] opacity-20 blur-3xl"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />

                  {/* Image Card */}
                  <motion.div 
                    className="relative rounded-[40px] overflow-hidden border-2 border-emerald-200 dark:border-emerald-800 shadow-2xl hover:shadow-3xl"
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src={heroImage} 
                      alt="معدات اللوتس"
                      className="w-full h-auto object-cover aspect-square"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section - Explosive Design */}
        <section className="relative py-20 md:py-28 px-4 bg-gradient-to-b from-emerald-50/50 via-blue-50/30 to-transparent dark:from-emerald-950/20 dark:via-blue-950/10 dark:to-transparent overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
          </div>

          <div className="container relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16 md:mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                {isRTL ? "إنجازاتنا المذهلة" : "Our Amazing Achievements"}
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {isRTL
                  ? "نحن فخورون بخدمتنا لآلاف العملاء حول العالم"
                  : "We are proud to serve thousands of customers worldwide"}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {[
                { end: 11, text: isRTL ? "أكثر من عقد من العطاء (منذ 2005)" : "More than a Decade of Excellence (Since 2005)" },
                { end: 500, text: isRTL ? "معدات ومنتجات متميزة" : "Premium Equipment & Products" },
                { end: 1000, text: isRTL ? "منشأة صناعية تثق بنا" : "Industrial Facilities Trust Us" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2, duration: 0.8 }}
                  className="group relative bg-gradient-to-br from-white/80 to-white/50 dark:from-slate-900/80 dark:to-slate-900/50 backdrop-blur-xl p-10 md:p-12 rounded-[32px] border border-emerald-500/20 hover:border-emerald-500/50 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-emerald-600/0 to-blue-600/0 group-hover:from-emerald-600/5 group-hover:to-blue-600/5 transition-all duration-500" />
                  <div className="relative z-10 text-center">
                    <AnimatedCounter end={stat.end} prefix="+" />
                    <p className="text-lg md:text-xl text-muted-foreground font-semibold mt-6">
                      {stat.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section - Premium Cards */}
        <section className="py-20 md:py-28 px-4">
          <div className="container">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16 md:mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                {isRTL ? "لماذا تختار اللوتس؟" : "Why Choose Al-Lotus?"}
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {isRTL
                  ? "نقدم أفضل المعدات والخدمات في السوق"
                  : "We offer the best equipment and services in the market"}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.15, duration: 0.8 }}
                    whileHover={{ y: -10 }}
                    className="group relative bg-gradient-to-br from-white/60 to-white/40 dark:from-slate-900/60 dark:to-slate-900/40 backdrop-blur-xl p-8 rounded-[28px] border border-emerald-500/20 hover:border-emerald-500/50 shadow-lg hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500"
                  >
                    <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-emerald-600/0 to-blue-600/0 group-hover:from-emerald-600/5 group-hover:to-blue-600/5 transition-all" />
                    <motion.div 
                      className="relative z-10 w-16 h-16 bg-gradient-to-br from-emerald-100 to-blue-100 dark:from-emerald-900 dark:to-blue-900 rounded-2xl flex items-center justify-center mb-6"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                    </motion.div>
                    <h3 className="font-bold text-xl mb-3 text-foreground">
                      {language === "ar" ? feature.titleAr : feature.titleEn}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {language === "ar" ? feature.descAr : feature.descEn}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 md:py-28 px-4 bg-gradient-to-b from-emerald-50/30 to-blue-50/20 dark:from-emerald-950/10 dark:to-blue-950/5">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="order-2 md:order-1"
              >
                <div className="relative">
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-blue-400 to-emerald-400 rounded-[40px] opacity-20 blur-3xl"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  <motion.div 
                    className="relative rounded-[40px] overflow-hidden border-2 border-blue-200 dark:border-blue-800 shadow-2xl"
                    whileHover={{ y: -10 }}
                  >
                    <img 
                      src={productsImage} 
                      alt="منتجات اللوتس"
                      className="w-full h-auto object-cover aspect-square"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </motion.div>
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="order-1 md:order-2"
              >
                <h2 className="text-4xl md:text-5xl font-black mb-8 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                  {t("home.about.title")}
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
                  {t("home.about.description")}
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white border-0 shadow-xl shadow-emerald-600/30 px-8 py-7 h-auto text-lg font-bold rounded-2xl"
                    onClick={() => navigate("/about")}
                  >
                    {isRTL ? "تعرف على المزيد" : "Learn More"}
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Products Showcase - Premium Grid */}
        <section className="py-20 md:py-28 px-4">
          <div className="container">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16 md:mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                {isRTL ? "منتجاتنا المتميزة" : "Our Premium Products"}
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {isRTL
                  ? "اكتشف مجموعتنا الشاملة من المعدات المتخصصة"
                  : "Discover our comprehensive range of specialized equipment"}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {products.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.15, duration: 0.8 }}
                  whileHover={{ y: -15 }}
                  className="group relative bg-gradient-to-br from-white/60 to-white/40 dark:from-slate-900/60 dark:to-slate-900/40 backdrop-blur-xl rounded-[32px] overflow-hidden border border-emerald-500/20 hover:border-emerald-500/50 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/30 transition-all duration-500"
                >
                  {/* Image Container */}
                  <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
                    <img 
                      src={item.image}
                      alt={item.titleEn}
                      className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent group-hover:from-black/20 transition-all" />
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="font-bold text-xl md:text-2xl mb-3 text-foreground group-hover:text-emerald-600 transition-colors">
                      {language === "ar" ? item.titleAr : item.titleEn}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {isRTL
                        ? "استكشف مجموعتنا الشاملة من المعدات المتخصصة والموثوقة"
                        : "Explore our comprehensive collection of specialized and reliable equipment"}
                    </p>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-bold py-6 rounded-xl transition-all"
                        onClick={() => navigate("/products")}
                      >
                        {t("common.learnMore")}
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Explosive */}
        <section className="relative py-20 md:py-28 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600" />
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          
          <div className="container relative z-10 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight"
            >
              {isRTL ? "هل أنت مستعد للبدء؟" : "Ready to Get Started?"}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              {isRTL
                ? "تواصل معنا اليوم واحصل على أفضل الحلول الصناعية"
                : "Contact us today and get the best industrial solutions"}
            </motion.p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-white text-emerald-700 hover:bg-emerald-50 font-bold px-10 py-8 h-auto text-xl rounded-2xl shadow-2xl transition-all"
                onClick={() => navigate("/contact")}
              >
                {t("common.contactUs")}
                <Sparkles className="w-6 h-6 ml-2" />
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}