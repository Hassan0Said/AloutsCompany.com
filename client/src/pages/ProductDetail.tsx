import { useLanguage } from "@/contexts/LanguageContext";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { PRODUCTS } from "@/const";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, ShoppingCart, Heart, Check, Zap, Shield, Award } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function ProductDetail() {
  const { language, t } = useLanguage();
  const [location, navigate] = useLocation();
  const isRTL = language === "ar";
  const [isFavorite, setIsFavorite] = useState(false);

  const productId = location.split("/").pop();

  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    const found = PRODUCTS.find((p) => p.id === productId);
    setProduct(found || null);
  }, [productId]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingCart className="w-10 h-10 text-emerald-600" />
            </div>
            <h1 className="text-2xl font-bold mb-4">
              {isRTL ? "المنتج غير موجود" : "Product Not Found"}
            </h1>
            <Button
              className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white mt-6"
              onClick={() => navigate("/products")}
            >
              {isRTL ? "العودة للمنتجات" : "Back to Products"}
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">

        {/* Breadcrumb */}
        <section className="py-4 px-4 border-b border-emerald-200/30 dark:border-emerald-800/30 bg-gradient-to-r from-emerald-50/50 to-blue-50/50 dark:from-emerald-950/20 dark:to-blue-950/20">
          <div className="container">
            <button
              onClick={() => navigate("/products")}
              className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:opacity-80 transition-opacity font-medium"
            >
              <ArrowLeft className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
              {isRTL ? "العودة للمنتجات" : "Back to Products"}
            </button>
          </div>
        </section>

        {/* Product Detail */}
        <section className="py-16 px-4">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-12 lg:gap-16"
            >

              {/* Image Section */}
              <div className="flex items-center justify-center">
                <div className="w-full max-w-lg">
                  <div className="relative w-full aspect-square bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 rounded-3xl flex items-center justify-center border-2 border-emerald-200/50 dark:border-emerald-800/50 overflow-hidden shadow-2xl shadow-emerald-500/10 group">
                    
                    {/* Background Gradient Animation */}
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-blue-500/5 dark:from-emerald-500/10 dark:to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Image with proper contain sizing */}
                    <img
                      src={product.image}
                      alt={language === "ar" ? product.titleAr : product.titleEn}
                      className="w-full h-full object-contain p-6 sm:p-8 md:p-10 transform group-hover:scale-105 transition-transform duration-700 ease-out relative z-10"
                    />

                    {/* Decorative Elements */}
                    <div className="absolute top-4 right-4 w-20 h-20 bg-emerald-500/10 rounded-full blur-2xl -z-10" />
                    <div className="absolute bottom-4 left-4 w-20 h-20 bg-blue-500/10 rounded-full blur-2xl -z-10" />
                  </div>

                  {/* Image Info Badge */}
                  <div className="mt-6 p-4 bg-emerald-50 dark:bg-emerald-950/30 rounded-2xl border border-emerald-200/50 dark:border-emerald-800/50">
                    <p className="text-sm text-emerald-700 dark:text-emerald-300 flex items-center gap-2">
                      <Zap className="w-4 h-4" />
                      {isRTL ? "صورة عالية الجودة" : "High-Quality Image"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Info Section */}
              <div className="flex flex-col">
                
                {/* Header with Favorite Button */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <motion.h1
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="text-4xl md:text-5xl font-extrabold mb-3 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent"
                    >
                      {language === "ar" ? product.titleAr : product.titleEn}
                    </motion.h1>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsFavorite(!isFavorite)}
                    className="p-3 rounded-2xl hover:bg-emerald-100 dark:hover:bg-emerald-950/30 transition-colors flex-shrink-0"
                  >
                    <Heart
                      className={`w-6 h-6 transition-all ${
                        isFavorite
                          ? "fill-emerald-600 text-emerald-600 scale-110"
                          : "text-muted-foreground"
                      }`}
                    />
                  </motion.button>
                </div>

                {/* Category Badge */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-100 to-blue-100 dark:from-emerald-950/50 dark:to-blue-950/50 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-bold">
                    {product.category}
                  </div>
                  <div className="flex items-center gap-1 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                    <Check className="w-4 h-4" />
                    {isRTL ? "متوفر الآن" : "Available Now"}
                  </div>
                </div>

                {/* Description */}
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {language === "ar"
                    ? product.descriptionAr
                    : product.descriptionEn}
                </p>

                {/* Features Section */}
                <div className="mb-10 p-6 bg-gradient-to-br from-emerald-50/50 to-blue-50/50 dark:from-emerald-950/20 dark:to-blue-950/20 rounded-2xl border border-emerald-200/30 dark:border-emerald-800/30">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-emerald-600" />
                    {isRTL ? "المميزات الرئيسية" : "Key Features"}
                  </h3>

                  <ul className="space-y-3">
                    {[
                      isRTL ? "جودة عالية ومواصفات عالمية" : "High quality and international standards",
                      isRTL ? "تصميم احترافي وعملي" : "Professional and practical design",
                      isRTL ? "متانة وأداء موثوق" : "Durability and reliable performance",
                      isRTL ? "دعم فني متخصص" : "Specialized technical support"
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-r from-emerald-600 to-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-foreground font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Specifications */}
                <div className="mb-10 p-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-2xl border border-slate-200/50 dark:border-slate-700/50">
                  <h3 className="text-lg font-bold mb-5 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-emerald-600" />
                    {isRTL ? "المواصفات التقنية" : "Technical Specifications"}
                  </h3>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center pb-3 border-b border-slate-200/50 dark:border-slate-700/50">
                      <span className="text-muted-foreground font-medium">
                        {isRTL ? "النوع" : "Type"}:
                      </span>
                      <span className="font-bold text-foreground">
                        {language === "ar" ? product.titleAr : product.titleEn}
                      </span>
                    </div>

                    <div className="flex justify-between items-center pb-3 border-b border-slate-200/50 dark:border-slate-700/50">
                      <span className="text-muted-foreground font-medium">
                        {isRTL ? "الفئة" : "Category"}:
                      </span>
                      <span className="font-bold text-foreground">{product.category}</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground font-medium">
                        {isRTL ? "الحالة" : "Status"}:
                      </span>
                      <span className="font-bold text-green-600 dark:text-green-400 flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full" />
                        {isRTL ? "متوفر" : "Available"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-4 flex-wrap mt-auto pt-6 border-t border-emerald-200/30 dark:border-emerald-800/30">

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 min-w-[200px]"
                  >
                    <Button
                      size="lg"
                      className="w-full gap-2 bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white border-0 shadow-lg hover:shadow-xl transition-all py-6 rounded-2xl font-bold text-lg"
                      onClick={() => navigate("/quote")}
                    >
                      <ShoppingCart className="w-5 h-5" />
                      {t("common.requestQuote")}
                    </Button>
                  </motion.div>

                </div>

              </div>

            </motion.div>

            {/* Related Products */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-20 pt-16 border-t border-emerald-200/30 dark:border-emerald-800/30"
            >

              <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                {isRTL ? "منتجات ذات صلة" : "Related Products"}
              </h2>

              <div className="grid md:grid-cols-3 gap-8">

                {PRODUCTS.filter(
                  (p) => p.category === product.category && p.id !== product.id
                )
                  .slice(0, 3)
                  .map((relatedProduct, idx) => (
                    <motion.div
                      key={relatedProduct.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      onClick={() => navigate(`/product/${relatedProduct.id}`)}
                      className="group bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 cursor-pointer border border-emerald-200/50 dark:border-emerald-800/50 hover:border-emerald-500/50 dark:hover:border-emerald-500/30 flex flex-col"
                    >
                      {/* Image Container */}
                      <div className="w-full h-64 overflow-hidden bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 relative">
                        <img
                          src={relatedProduct.image}
                          alt={language === "ar" ? relatedProduct.titleAr : relatedProduct.titleEn}
                          className="w-full h-full object-contain p-4 transform group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                      </div>

                      {/* Content */}
                      <div className="p-5 flex flex-col flex-1">
                        <h3 className="font-bold text-base mb-2 line-clamp-2 group-hover:text-emerald-600 transition-colors">
                          {language === "ar"
                            ? relatedProduct.titleAr
                            : relatedProduct.titleEn}
                        </h3>

                        <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-grow">
                          {language === "ar"
                            ? relatedProduct.descriptionAr
                            : relatedProduct.descriptionEn}
                        </p>

                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full border-emerald-500/20 hover:border-emerald-500/50 hover:bg-emerald-500/5 font-bold rounded-lg"
                        >
                          {isRTL ? "عرض التفاصيل" : "View Details"}
                        </Button>
                      </div>
                    </motion.div>
                  ))}

              </div>

            </motion.div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}