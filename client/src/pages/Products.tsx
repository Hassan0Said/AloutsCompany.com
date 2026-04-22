import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import { PRODUCTS } from "@/const";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLocation } from "wouter";
import { ShoppingCart, Info } from "lucide-react";

export default function Products() {
  const { language, t } = useLanguage();
  const { theme } = useTheme();
  const [, navigate] = useLocation();
  const isRTL = language === "ar";

const categories = [
  { key: "potatoWashing", label: t("products.categories.potatoWashing") },
  { key: "fruitVegetable", label: t("products.categories.fruitVegetable") },
  { key: "pipes", label: t("products.categories.pipes") },
  { key: "sanitaryMaterials", label: t("products.categories.sanitaryMaterials") },
  { key: "waterTreatment", label: t("products.categories.waterTreatment") },
  { key: "automotive", label: t("products.categories.automotive") },
  { key: "steamIron", label: t("products.categories.steamIron") },
  { key: "laundry", label: t("products.categories.laundry") },
  { key: "sewing", label: t("products.categories.sewing") },
  { key: "electrical", label: t("products.categories.electrical") },
  { key: "construction", label: t("products.categories.construction") },
  { key: "medical", label: t("products.categories.medical") },
  { key: "accessibility", label: t("products.categories.accessibility") },
  { key: "otherEquipment", label: t("products.categories.otherEquipment") },
];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">

        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-emerald-50/60 via-blue-50/40 to-transparent dark:from-emerald-950/20 dark:via-blue-950/10">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              {t("products.title")}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("products.description")}
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 px-4">
          <div className="container">

            {categories.map((category) => {
              const categoryProducts = PRODUCTS.filter(
                (p) => p.category === category.key
              );

              if (categoryProducts.length === 0) return null;

              return (
                <div key={category.key} className="mb-20">

                  {/* Category Title */}
                  <div className="mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                      {category.label}
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full"></div>
                  </div>

                  {/* Products */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {categoryProducts.map((product) => (
                      <div
                        key={product.id}
                        className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-emerald-100 dark:border-emerald-900 hover:border-emerald-400 dark:hover:border-emerald-600"
                      >

                        {/* Image */}
                        <div
                          className="w-full h-70 relative overflow-hidden cursor-pointer bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-emerald-950 dark:to-blue-950"
                          onClick={() => navigate(`/product/${product.id}`)}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-blue-500/5 group-hover:from-emerald-500/10 group-hover:to-blue-500/10 transition-all"></div>

                            <img
                              src={product.image}
                              alt={language === "ar" ? product.titleAr : product.titleEn}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />

                          <p className="absolute bottom-2 left-0 right-0 text-center text-xs text-muted-foreground">
                            {isRTL ? "صورة المنتج" : "Product Image"}
                          </p>
                        </div>

                        {/* Content */}
                        <div className="p-6">

                          <h3
                            className="text-lg font-bold mb-2 cursor-pointer hover:text-emerald-600 transition-colors line-clamp-2"
                            onClick={() => navigate(`/product/${product.id}`)}
                          >
                            {language === "ar"
                              ? product.titleAr
                              : product.titleEn}
                          </h3>

                          <p className="text-muted-foreground mb-6 text-sm line-clamp-3">
                            {language === "ar"
                              ? product.descriptionAr
                              : product.descriptionEn}
                          </p>

                          {/* Buttons */}
                          <div className="flex gap-3">

                            <Button
                              className="flex-1 gap-2 bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white"
                              size="sm"
                              onClick={() => navigate("/quote")}
                            >
                              <ShoppingCart className="w-4 h-4" />
                              <span className="hidden sm:inline">
                                {t("common.requestQuote")}
                              </span>
                              <span className="sm:hidden">طلب</span>
                            </Button>

                            <Button
                              variant="outline"
                              className="flex-1 gap-2 border-emerald-200 hover:bg-emerald-50 dark:border-emerald-800 dark:hover:bg-emerald-950/30"
                              size="sm"
                              onClick={() => navigate(`/product/${product.id}`)}
                            >
                              <Info className="w-4 h-4" />
                              <span className="hidden sm:inline">
                                {t("common.learnMoreAbout")}
                              </span>
                              <span className="sm:hidden">معلومات</span>
                            </Button>

                          </div>
                        </div>
                      </div>
                    ))}

                  </div>
                </div>
              );
            })}

          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-gradient-to-r from-emerald-600 via-blue-600 to-emerald-600 text-white">
          <div className="container text-center">

            <h2 className="text-3xl font-bold mb-4">
              {isRTL ? "لم تجد ما تبحث عنه؟" : "Can't find what you're looking for?"}
            </h2>

            <p className="text-lg mb-8 opacity-90">
              {isRTL
                ? "تواصل معنا للحصول على حلول مخصصة"
                : "Contact us for customized solutions"}
            </p>

            <Button
              size="lg"
              className="bg-white text-emerald-600 hover:bg-gray-100"
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