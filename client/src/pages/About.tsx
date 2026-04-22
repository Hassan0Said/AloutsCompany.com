import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";
import companyImage from "../images/الشركة.jpeg";

export default function About() {
  const { language, t } = useLanguage();
  const isRTL = language === "ar";

  const values = [
    {
      titleAr: "الجودة",
      titleEn: "Quality",
      descAr: t("about.values.quality"),
      descEn: t("about.values.quality"),
    },
    {
      titleAr: "النزاهة",
      titleEn: "Integrity",
      descAr: t("about.values.integrity"),
      descEn: t("about.values.integrity"),
    },
    {
      titleAr: "الخدمة",
      titleEn: "Service",
      descAr: t("about.values.service"),
      descEn: t("about.values.service"),
    },
    {
      titleAr: "الابتكار",
      titleEn: "Innovation",
      descAr: t("about.values.innovation"),
      descEn: t("about.values.innovation"),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">

        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-emerald-50/50 via-blue-50/30 to-transparent dark:from-emerald-950/20 dark:via-blue-950/10 dark:to-transparent">
          <div className="container text-center">

            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              {t("about.title")}
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("header.tagline")}
            </p>

          </div>
        </section>

        {/* Content */}
        <section className="py-20 px-4">
          <div className="container max-w-5xl">

            <div className="grid md:grid-cols-2 gap-12 mb-16">

              {/* Left */}
              <div>

                <h2 className="text-3xl font-bold mb-6 text-emerald-600 dark:text-emerald-400">
                  {t("about.mission.title")}
                </h2>

                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {t("about.mission.description")}
                </p>

                <h2 className="text-3xl font-bold mb-6 text-emerald-600 dark:text-emerald-400">
                  {t("about.vision.title")}
                </h2>

                <p className="text-muted-foreground leading-relaxed">
                  {t("about.vision.description")}
                </p>

              </div>

              {/* Right Image */}
              <div className="flex items-center justify-center">

                <div className="relative w-full h-96">

                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-300 to-blue-300 dark:from-emerald-800 dark:to-blue-800 rounded-3xl opacity-30 blur-2xl animate-pulse"></div>

                  <div className="relative w-full h-full rounded-3xl overflow-hidden border border-emerald-200/50 dark:border-emerald-800/50 shadow-2xl">
                    <img
                      src={companyImage}
                      alt={isRTL ? "صورة الشركة" : "Company Image"}
                      className="w-full h-full object-cover"
                    />
                  </div>

                </div>

              </div>

            </div>

            {/* Values */}
            <div className="mb-16">

              <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                {t("about.values.title")}
              </h2>

              <div className="grid md:grid-cols-2 gap-6">

                {values.map((value, idx) => (
                  <div
                    key={idx}
                    className="bg-card p-6 rounded-2xl border border-emerald-200/50 dark:border-emerald-800/50 hover:border-emerald-400 dark:hover:border-emerald-600 transition-all hover:shadow-lg"
                  >
                    <div className="flex items-start gap-4">

                      <CheckCircle className="w-6 h-6 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-1" />

                      <div>
                        <h3 className="font-bold text-lg mb-2 text-foreground">
                          {language === "ar" ? value.titleAr : value.titleEn}
                        </h3>

                        <p className="text-muted-foreground text-sm">
                          {language === "ar" ? value.descAr : value.descEn}
                        </p>

                      </div>

                    </div>
                  </div>
                ))}

              </div>

            </div>

            {/* Company Info */}
            <div className="bg-gradient-to-r from-emerald-50/50 to-blue-50/30 dark:from-emerald-950/10 dark:to-blue-950/5 p-8 rounded-2xl border border-emerald-200/50 dark:border-emerald-800/50">

              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                {isRTL ? "معلومات الشركة" : "Company Information"}
              </h2>

              <div className="grid md:grid-cols-2 gap-6">

                <div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {t("about.founded")}
                  </p>
                  <p className="text-lg font-semibold text-foreground">
                    2015
                  </p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {isRTL ? "الموقع" : "Location"}
                  </p>
                  <p className="text-lg font-semibold text-foreground">
                    {t("about.location")}
                  </p>
                </div>

              </div>

            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}