import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Building2, ArrowRight, ExternalLink, Sparkles } from "lucide-react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
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
      badge: "🇳🇱 Netherlands",
    },
    {
      nameAr: "شركة فورمكس – للمعدات الصناعية ومعالجة المياه",
      nameEn: "Formex – Industrial & Water Treatment Equipment",
      link: "https://www.formex.es/",
      image: Formex,
      descAr: "شركة فورمكس هي شركة إسبانية متخصصة في المعدات الصناعية وحلول معالجة المياه. تقدم الشركة أنظمة متطورة للترشيح وتنقية المياه وإدارتها، وتُستخدم في العديد من التطبيقات الصناعية والتجارية. تتميز فورمكس بالاعتمادية والابتكار، مع التركيز على تقديم حلول فعّالة ومستدامة بأعلى معايير الجودة العالمية.",
      descEn: "Formex is a Spanish company specializing in industrial equipment and water treatment solutions. The company provides advanced systems for filtration, purification, and water management used in various industrial and commercial applications. Known for its reliability and innovative engineering, Formex focuses on delivering efficient, sustainable, and high-performance solutions that meet international quality standards.",
      badge: "🇪🇸 Spain",
    },
    {
      nameAr: "شركة آرت تيست – لأجهزة اختبار المواد وأنظمة مراقبة الجودة الصناعية",
      nameEn: "ArtTest B.V. – Industrial Material Testing & Quality Control Systems",
      link: "https://www.artec-testapparatuur.nl",
      image: ArTest,
      descAr: "شركة آرت تيست هي شركة أوروبية متخصصة في تصنيع وتطوير أجهزة اختبار المواد وأنظمة مراقبة الجودة الصناعية والمعملية. توفر الشركة حلولاً عالية الدقة تستخدم في خطوط الإنتاج والمعامل لضمان جودة المنتجات وموثوقيتها وفق المعايير الدولية. وتُستخدم أنظمتها في مجالات الهندسة والصناعة والبحث العلمي.",
      descEn: "ArtTest B.V. is a European company specialized in advanced material testing equipment and quality control systems for industrial and laboratory applications. The company provides high-precision testing solutions used in production lines and research laboratories to ensure product quality, reliability, and compliance with international standards. Its systems are widely used in engineering, manufacturing, and industrial research sectors.",
      badge: "🇳🇱 Netherlands",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-emerald-100 selection:text-emerald-900">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 px-4 overflow-hidden">
          <style>{`
            @keyframes blob {
              0%, 100% { transform: translate(0, 0) scale(1); }
              33% { transform: translate(30px, -50px) scale(1.1); }
              66% { transform: translate(-20px, 20px) scale(0.9); }
            }
            .animate-blob {
              animation: blob 7s infinite;
            }
          `}</style>

          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-300/20 rounded-full blur-3xl animate-blob" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: "2s" }} />
          </div>

          <div className="container relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-5 py-2.5 mb-6 text-sm font-bold tracking-wider uppercase bg-emerald-100/50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full border border-emerald-500/20">
                ✨ {isRTL ? "شركاؤنا العالميون" : "Our Global Partners"}
              </span>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.8 }}
                className="text-5xl md:text-7xl font-black mb-8 tracking-tight"
              >
                <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-blue-600 bg-clip-text text-transparent">
                  {t("agencies.title")}
                </span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              >
                {t("agencies.description")}
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Agencies Grid - Premium Layout */}
        <section className="py-20 md:py-28 px-4">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {agencies.map((agency, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  whileHover={{ y: -15 }}
                  className="group relative bg-gradient-to-br from-white/60 to-white/40 dark:from-slate-900/60 dark:to-slate-900/40 backdrop-blur-xl rounded-[32px] overflow-hidden border border-emerald-500/20 hover:border-emerald-500/50 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/30 transition-all duration-500 flex flex-col"
                >
                  {/* Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <span className="px-4 py-2 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-full text-sm font-bold text-emerald-600 shadow-md border border-emerald-500/20">
                      {agency.badge}
                    </span>
                  </div>

                  {/* Image Container - Fixed Aspect Ratio */}
                  <div className="relative w-full aspect-video overflow-hidden bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
                    <img
                      src={agency.image}
                      alt={language === "ar" ? agency.nameAr : agency.nameEn}
                      className="w-full h-full object-contain p-6 md:p-8 group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent group-hover:from-black/30 transition-all" />
                  </div>

                  {/* Content */}
                  <div className="p-8 md:p-10 flex flex-col flex-1">
                    <motion.h3 
                      className="text-xl md:text-2xl font-black mb-4 group-hover:text-emerald-600 transition-colors line-clamp-2"
                      whileHover={{ x: 5 }}
                    >
                      {language === "ar" ? agency.nameAr : agency.nameEn}
                    </motion.h3>

                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-8 flex-grow line-clamp-4">
                      {language === "ar" ? agency.descAr : agency.descEn}
                    </p>

                    {/* Buttons */}
                    <div className="flex gap-3 flex-col sm:flex-row">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1"
                      >
                        <Button
                          className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-bold py-6 rounded-2xl shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/40 transition-all"
                          onClick={() => window.open(agency.link, "_blank")}
                        >
                          {isRTL ? "تعرف على المزيد" : "Learn More"}
                          <ExternalLink className="w-5 h-5 ml-2" />
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership CTA Section */}
        <section className="relative py-20 md:py-28 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600" />
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

          <div className="container relative z-10">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
                  {isRTL ? "هل تريد أن تصبح شريكاً معنا؟" : "Want to Become Our Partner?"}
                </h2>
                <p className="text-xl text-white/90 mb-10 leading-relaxed">
                  {isRTL
                    ? "نحن نبحث عن شركاء موثوقين لتوسيع شبكتنا العالمية وتقديم حلول متميزة"
                    : "We're looking for reliable partners to expand our global network and deliver exceptional solutions"}
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="bg-white text-emerald-700 hover:bg-emerald-50 font-bold px-10 py-8 h-auto text-lg rounded-2xl shadow-2xl transition-all"
                    onClick={() => navigate("/contact")}
                  >
                    {t("common.contactUs")}
                    <ArrowRight className="w-6 h-6 ml-2" />
                  </Button>
                </motion.div>
              </motion.div>

              {/* Right Stats */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                {[
                  { number: "3+", text: isRTL ? "شركاء عالميين" : "Global Partners" },
                  { number: "50+", text: isRTL ? "دول مخدومة" : "Countries Served" },
                  { number: "100%", text: isRTL ? "رضا العملاء" : "Customer Satisfaction" },
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.6 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center flex-shrink-0 border border-white/30">
                      <span className="text-2xl font-black text-white">{stat.number}</span>
                    </div>
                    <div>
                      <p className="text-white/90 text-lg font-semibold">{stat.text}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 md:py-28 px-4 bg-gradient-to-b from-emerald-50/30 to-blue-50/20 dark:from-emerald-950/10 dark:to-blue-950/5">
          <div className="container">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16 md:mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                {isRTL ? "لماذا الشراكة معنا؟" : "Why Partner With Us?"}
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                { icon: "🤝", title: isRTL ? "دعم كامل" : "Full Support", desc: isRTL ? "فريق متخصص يدعمك 24/7" : "Dedicated team supporting you 24/7" },
                { icon: "📈", title: isRTL ? "نمو مستمر" : "Continuous Growth", desc: isRTL ? "فرص توسع وزيادة الأرباح" : "Expansion opportunities and profit growth" },
                { icon: "🌍", title: isRTL ? "شبكة عالمية" : "Global Network", desc: isRTL ? "وصول إلى أسواق عالمية" : "Access to international markets" },
                { icon: "✨", title: isRTL ? "منتجات متميزة" : "Premium Products", desc: isRTL ? "أفضل المعدات الصناعية" : "Best industrial equipment" },
              ].map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.15, duration: 0.8 }}
                  whileHover={{ y: -10 }}
                  className="group relative bg-gradient-to-br from-white/60 to-white/40 dark:from-slate-900/60 dark:to-slate-900/40 backdrop-blur-xl p-8 rounded-[28px] border border-emerald-500/20 hover:border-emerald-500/50 shadow-lg hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 text-center"
                >
                  <div className="text-5xl mb-4">{benefit.icon}</div>
                  <h3 className="font-bold text-xl mb-3 text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}