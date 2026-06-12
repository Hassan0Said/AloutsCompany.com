import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import { PRODUCTS } from "@/const";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLocation } from "wouter";
import { ShoppingCart, ArrowRight, Search, X, Filter } from "lucide-react";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Products() {
  const { language, t } = useLanguage();
  const { theme } = useTheme();
  const [, navigate] = useLocation();
  const isRTL = language === "ar";
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

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

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesSearch = 
        product.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.titleAr.includes(searchQuery) ||
        product.descriptionEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.descriptionAr.includes(searchQuery);
      
      const matchesCategory = !selectedCategory || product.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const groupedProducts = useMemo(() => {
    const grouped: { [key: string]: typeof PRODUCTS } = {};
    filteredProducts.forEach((product) => {
      if (!grouped[product.category]) grouped[product.category] = [];
      grouped[product.category].push(product);
    });
    return grouped;
  }, [filteredProducts]);

  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-emerald-100 selection:text-emerald-900">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-blue-50/50 to-transparent dark:from-emerald-950/20 dark:via-blue-950/10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] -z-10" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -z-10" />
          
          <div className="container relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-emerald-600 dark:text-emerald-400 uppercase bg-emerald-100/50 dark:bg-emerald-900/30 rounded-full">
                {isRTL ? "معداتنا المتميزة" : "Our Premium Equipment"}
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight bg-gradient-to-r from-emerald-600 via-teal-500 to-blue-600 bg-clip-text text-transparent">
                {t("products.title")}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {t("products.description")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Control Center (Search & Filter) */}
        <section className="sticky top-16 md:top-20 z-40 bg-background/80 backdrop-blur-xl border-y border-emerald-500/10 py-6 px-4">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative w-full lg:max-w-md group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-500 group-focus-within:scale-110 transition-transform" />
                <input
                  type="text"
                  placeholder={isRTL ? "ابحث في الكتالوج..." : "Search catalog..."}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-muted/50 border-2 border-transparent focus:border-emerald-500/50 focus:bg-background focus:outline-none transition-all duration-300 shadow-inner"
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery("")} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-emerald-600">
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>

              {/* Category Scroller */}
              <div className="flex items-center gap-3 w-full overflow-x-auto pb-2 no-scrollbar">
                <div className="flex-shrink-0 flex items-center gap-2 text-emerald-600 font-bold text-sm mr-2">
                  <Filter className="w-4 h-4" />
                  {isRTL ? "تصفية:" : "Filter:"}
                </div>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-bold whitespace-nowrap transition-all duration-300 ${
                    !selectedCategory ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/30" : "bg-muted/50 text-muted-foreground hover:bg-emerald-500/10 hover:text-emerald-600"
                  }`}
                >
                  {isRTL ? "جميع المنتجات" : "All Products"}
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.key}
                    onClick={() => setSelectedCategory(cat.key)}
                    className={`px-5 py-2.5 rounded-xl text-sm font-bold whitespace-nowrap transition-all duration-300 ${
                      selectedCategory === cat.key ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/30" : "bg-muted/50 text-muted-foreground hover:bg-emerald-500/10 hover:text-emerald-600"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 md:py-24 px-4">
          <div className="container">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-10 h-10 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{isRTL ? "لم نجد نتائج" : "No results found"}</h3>
                <p className="text-muted-foreground mb-8">{isRTL ? "جرب البحث بكلمات مختلفة أو تغيير الفئة" : "Try searching for different terms or change the category"}</p>
                <Button onClick={() => {setSearchQuery(""); setSelectedCategory(null);}} className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl px-8 py-6 h-auto text-lg font-bold">
                  {isRTL ? "عرض كل المنتجات" : "View All Products"}
                </Button>
              </div>
            ) : (
              Object.entries(groupedProducts).map(([catKey, products], idx) => (
                <div key={catKey} className="mb-24 last:mb-0">
                  <div className="flex items-center gap-4 mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                      {categories.find(c => c.key === catKey)?.label}
                    </h2>
                    <div className="flex-1 h-px bg-gradient-to-r from-emerald-500/50 to-transparent" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {products.map((product, pIdx) => (
                      <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: pIdx * 0.1 }}
                        className="group relative bg-card rounded-[32px] border border-emerald-500/10 hover:border-emerald-500/30 shadow-sm hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 flex flex-col overflow-hidden"
                      >
                        {/* Image Container - Premium Aspect Ratio */}
                        <div 
                          className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 cursor-pointer"
                          onClick={() => navigate(`/product/${product.id}`)}
                        >
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 z-10" />
                          <img
                            src={product.image}
                            alt={isRTL ? product.titleAr : product.titleEn}
                            className="w-full h-full object-contain p-8 transform group-hover:scale-110 transition-transform duration-700 ease-out"
                          />
                          <div className="absolute top-4 right-4 z-20">
                            <span className="px-3 py-1 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest text-emerald-600 shadow-sm border border-emerald-500/10">
                              {categories.find(c => c.key === product.category)?.label}
                            </span>
                          </div>
                        </div>

                        {/* Content Section */}
                        <div className="p-8 flex flex-col flex-1">
                          <h3 
                            className="text-xl md:text-2xl font-bold mb-3 group-hover:text-emerald-600 transition-colors cursor-pointer line-clamp-1"
                            onClick={() => navigate(`/product/${product.id}`)}
                          >
                            {isRTL ? product.titleAr : product.titleEn}
                          </h3>
                          
                          <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-8 line-clamp-3 flex-grow">
                            {isRTL ? product.descriptionAr : product.descriptionEn}
                          </p>

                          {/* Action Buttons - Redesigned for Maximum Impact */}
                          <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                            <Button
                              onClick={() => navigate("/quote")}
                              className="flex-1 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-bold py-6 rounded-2xl shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/40 transition-all group/btn"
                            >
                              <ShoppingCart className="w-5 h-5 mr-2 group-hover/btn:rotate-12 transition-transform" />
                              {t("common.requestQuote")}
                            </Button>
                            
                            <Button
                              variant="outline"
                              onClick={() => navigate(`/product/${product.id}`)}
                              className="flex-1 border-2 border-emerald-500/20 hover:border-emerald-500/50 hover:bg-emerald-500/5 font-bold py-6 rounded-2xl transition-all group/btn2"
                            >
                              {t("common.learnMoreAbout")}
                              <ArrowRight className={`w-5 h-5 ml-2 transition-transform ${isRTL ? 'rotate-180 group-hover/btn2:-translate-x-1' : 'group-hover/btn2:translate-x-1'}`} />
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </section>

        {/* Floating CTA Section */}
        <section className="py-20 px-4">
          <div className="container">
            <div className="relative rounded-[40px] overflow-hidden bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 p-12 md:p-20 text-center shadow-2xl shadow-emerald-600/20">
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />
              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                  {isRTL ? "نصمم لك الحلول الصناعية التي تحتاجها" : "We Design the Industrial Solutions You Need"}
                </h2>
                <p className="text-white/90 text-lg md:text-xl mb-10 leading-relaxed">
                  {isRTL ? "فريقنا مستعد لتنفيذ طلباتك الخاصة بمواصفات عالمية ودقة متناهية." : "Our team is ready to execute your special requests with international specifications and extreme precision."}
                </p>
                <Button
                  size="lg"
                  onClick={() => navigate("/contact")}
                  className="bg-white text-emerald-700 hover:bg-emerald-50 font-extrabold px-10 py-8 h-auto text-xl rounded-2xl shadow-xl transition-all hover:scale-105"
                >
                  {t("common.contactUs")}
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}