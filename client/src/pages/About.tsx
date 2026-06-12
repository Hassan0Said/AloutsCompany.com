import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, Award, Target, Lightbulb, Heart } from "lucide-react";
import { motion } from "framer-motion";
import companyImage from "../images/الشركة.jpeg";

export default function About() {
  const { language, t } = useLanguage();
  const isRTL = language === "ar";

  const values = [
    {
      icon: Award,
      titleAr: "الجودة",
      titleEn: "Quality",
      descAr: "التزامنا بتقديم أفضل المعدات والخدمات بأعلى معايير الجودة العالمية",
      descEn: "Our commitment to delivering the best equipment and services with the highest international quality standards",
    },
    {
      icon: Heart,
      titleAr: "النزاهة",
      titleEn: "Integrity",
      descAr: "الصدق والشفافية في جميع تعاملاتنا مع العملاء والشركاء",
      descEn: "Honesty and transparency in all our dealings with customers and partners",
    },
    {
      icon: Target,
      titleAr: "الخدمة",
      titleEn: "Service",
      descAr: "تقديم خدمة عملاء استثنائية وحل سريع لجميع احتياجاتكم",
      descEn: "Providing exceptional customer service and quick solutions to all your needs",
    },
    {
      icon: Lightbulb,
      titleAr: "الابتكار",
      titleEn: "Innovation",
      descAr: "البحث المستمر عن حلول جديدة وتطوير منتجات متقدمة",
      descEn: "Continuous research for new solutions and development of advanced products",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-emerald-100 selection:text-emerald-900">
      <Header />

      <main className="flex-1">
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

        {/* Hero Section */}
        <section className="relative py-20 md:py-32 px-4 overflow-hidden">
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
                ✨ {isRTL ? "قصتنا" : "Our Story"}
              </span>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.8 }}
                className="text-5xl md:text-7xl font-black mb-8 tracking-tight"
              >
                <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-blue-600 bg-clip-text text-transparent">
                  {t("about.title")}
                </span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              >
                {t("header.tagline")}
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 md:py-28 px-4">
          <div className="container max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-20">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.h2 
                  className="text-4xl md:text-5xl font-black mb-8 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent"
                  whileInView={{ x: 0 }}
                >
                  {t("about.mission.title")}
                </motion.h2>

                <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
                  {t("about.mission.description")}
                </p>

                <motion.h2 
                  className="text-4xl md:text-5xl font-black mb-8 bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent"
                  whileInView={{ x: 0 }}
                >
                  {t("about.vision.title")}
                </motion.h2>

                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  {t("about.vision.description")}
                </p>
              </motion.div>

              {/* Right Image - Fixed Aspect Ratio */}
              <motion.div
                initial={{ opacity: 0, x: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.8 }}
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
                      src={companyImage}
                      alt={isRTL ? "صورة الشركة" : "Company Image"}
                      className="w-full h-auto object-contain aspect-square bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 p-6"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section - Premium Cards */}
        <section className="py-20 md:py-28 px-4 bg-gradient-to-b from-emerald-50/30 to-blue-50/20 dark:from-emerald-950/10 dark:to-blue-950/5">
          <div className="container max-w-6xl">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16 md:mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                {t("about.values.title")}
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {isRTL
                  ? "القيم التي تحدد هويتنا وتوجه كل قراراتنا"
                  : "The values that define our identity and guide every decision we make"}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {values.map((value, idx) => {
                const Icon = value.icon;
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

                    <h3 className="font-bold text-xl md:text-2xl mb-3 text-foreground relative z-10">
                      {language === "ar" ? value.titleAr : value.titleEn}
                    </h3>

                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed relative z-10">
                      {language === "ar" ? value.descAr : value.descEn}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Company Info Section */}
        <section className="py-20 md:py-28 px-4">
          <div className="container max-w-6xl">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative bg-gradient-to-br from-emerald-600 via-teal-600 to-blue-600 rounded-[40px] p-12 md:p-16 overflow-hidden shadow-2xl shadow-emerald-600/20"
            >
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />

              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-black text-white mb-12">
                  {isRTL ? "معلومات الشركة" : "Company Information"}
                </h2>

                <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0, duration: 0.6 }}
                  >
                    <div className="text-5xl font-black text-white mb-4">📅</div>
                    <p className="text-white/80 text-sm font-semibold mb-2">
                      {t("about.founded")}
                    </p>
                    <p className="text-2xl font-black text-white">2015</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                  >
                    <div className="text-5xl font-black text-white mb-4">📍</div>
                    <p className="text-white/80 text-sm font-semibold mb-2">
                      {isRTL ? "الموقع" : "Location"}
                    </p>
                    <p className="text-2xl font-black text-white">{t("about.location")}</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    <div className="text-5xl font-black text-white mb-4">🌍</div>
                    <p className="text-white/80 text-sm font-semibold mb-2">
                      {isRTL ? "النطاق العالمي" : "Global Reach"}
                    </p>
                    <p className="text-2xl font-black text-white">50+ {isRTL ? "دولة" : "Countries"}</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 md:py-28 px-4 bg-gradient-to-b from-emerald-50/30 to-blue-50/20 dark:from-emerald-950/10 dark:to-blue-950/5">
          <div className="container max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16 md:mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                {isRTL ? "رحلتنا" : "Our Journey"}
              </h2>
            </motion.div>

            <div className="space-y-8">
              {[
                { year: "2015", title: isRTL ? "التأسيس" : "Founded", desc: isRTL ? "بدأنا رحلتنا برؤية واضحة لتقديم أفضل المعدات الصناعية" : "We started our journey with a clear vision to provide the best industrial equipment" },
                { year: "2018", title: isRTL ? "التوسع" : "Expansion", desc: isRTL ? "توسعنا إلى أسواق جديدة وأضفنا خطوط منتجات متعددة" : "We expanded to new markets and added multiple product lines" },
                { year: "2021", title: isRTL ? "الابتكار" : "Innovation", desc: isRTL ? "طورنا تقنيات جديدة وحققنا شهادات عالمية" : "We developed new technologies and achieved international certifications" },
                { year: "2024", title: isRTL ? "القيادة" : "Leadership", desc: isRTL ? "أصبحنا من الرواد في صناعة المعدات الصناعية" : "We became leaders in the industrial equipment industry" },
              ].map((milestone, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.15, duration: 0.8 }}
                  className="flex gap-6 md:gap-10 items-start"
                >
                  <div className="flex-shrink-0 w-24 md:w-32">
                    <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-grow pt-2">
                    <div className="relative bg-gradient-to-br from-white/60 to-white/40 dark:from-slate-900/60 dark:to-slate-900/40 backdrop-blur-xl p-6 md:p-8 rounded-[24px] border border-emerald-500/20 hover:border-emerald-500/50 shadow-lg hover:shadow-xl transition-all">
                      <h3 className="font-bold text-xl md:text-2xl mb-2 text-foreground">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground text-base md:text-lg">
                        {milestone.desc}
                      </p>
                    </div>
                  </div>
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