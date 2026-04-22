import { useLanguage } from "@/contexts/LanguageContext";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { PRODUCTS } from "@/const";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, ShoppingCart, Heart } from "lucide-react";
import { useState, useEffect } from "react";

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
            <h1 className="text-2xl font-bold mb-4">
              {isRTL ? "المنتج غير موجود" : "Product Not Found"}
            </h1>
            <Button
              className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white"
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
        <section className="py-4 px-4 border-b border-emerald-200/30 dark:border-emerald-800/30">
          <div className="container">
            <button
              onClick={() => navigate("/products")}
              className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:opacity-80 transition-opacity"
            >
              <ArrowLeft className="w-4 h-4" />
              {isRTL ? "العودة للمنتجات" : "Back to Products"}
            </button>
          </div>
        </section>

        {/* Product Detail */}
        <section className="py-12 px-4">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12">

              {/* Image */}
              <div className="flex items-center justify-center">
                <div className="w-full aspect-square bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-emerald-950 dark:to-blue-950 rounded-2xl flex items-center justify-center border border-emerald-200 dark:border-emerald-800 overflow-hidden">
                  
                  <img
                    src={product.image}
                    alt={language === "ar" ? product.titleAr : product.titleEn}
                    className="w-full h-full object-cover"
                  />

                </div>
              </div>

              {/* Info */}
              <div>
                <h1 className="text-4xl font-bold mb-4 text-foreground">
                  {language === "ar" ? product.titleAr : product.titleEn}
                </h1>

                <div className="flex items-center gap-4 mb-6">

                  <div className="inline-block px-4 py-2 bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-semibold">
                    {product.category}
                  </div>

                  <button
                    onClick={() => setIsFavorite(!isFavorite)}
                    className="p-2 rounded-lg hover:bg-emerald-100 dark:hover:bg-emerald-950/30 transition-colors"
                  >
                    <Heart
                      className={`w-6 h-6 ${
                        isFavorite
                          ? "fill-emerald-600 text-emerald-600"
                          : "text-muted-foreground"
                      }`}
                    />
                  </button>

                </div>

                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {language === "ar"
                    ? product.descriptionAr
                    : product.descriptionEn}
                </p>

                {/* Features */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4">
                    {isRTL ? "المميزات الرئيسية" : "Key Features"}
                  </h3>

                  <ul className="space-y-3">
                    {[1, 2, 3, 4].map((_, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <span className="text-foreground">
                          {isRTL
                            ? "جودة عالية ومواصفات عالمية"
                            : "High quality and international standards"}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Specifications */}
                <div className="mb-8 p-6 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl">
                  <h3 className="text-lg font-bold mb-4">
                    {isRTL ? "المواصفات" : "Specifications"}
                  </h3>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        {isRTL ? "النوع" : "Type"}:
                      </span>
                      <span className="font-semibold">
                        {language === "ar" ? product.titleAr : product.titleEn}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        {isRTL ? "الفئة" : "Category"}:
                      </span>
                      <span className="font-semibold">{product.category}</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        {isRTL ? "الحالة" : "Status"}:
                      </span>
                      <span className="font-semibold text-green-600">
                        {isRTL ? "متوفر" : "Available"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-4 flex-wrap">

                  <Button
                    size="lg"
                    className="flex-1 gap-2 bg-gradient-to-r from-emerald-600 to-blue-600 text-white border-0 shadow-lg hover:shadow-xl transition-all"
                    onClick={() => navigate("/quote")}
                  >
                    <ShoppingCart className="w-5 h-5" />
                    {t("common.requestQuote")}
                  </Button>

                </div>

              </div>

            </div>

            {/* Related Products */}
            <div className="mt-16 pt-12 border-t border-emerald-200/30 dark:border-emerald-800/30">

              <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                {isRTL ? "منتجات ذات صلة" : "Related Products"}
              </h2>

              <div className="grid md:grid-cols-3 gap-6">

                {PRODUCTS.filter(
                  (p) => p.category === product.category && p.id !== product.id
                )
                  .slice(0, 3)
                  .map((relatedProduct) => (
                    <div
                      key={relatedProduct.id}
                      onClick={() => navigate(`/product/${relatedProduct.id}`)}
                      className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all cursor-pointer border border-emerald-200/50 dark:border-emerald-800/50"
                    >
                      <div className="w-full h-70 overflow-hidden">
                        <img
                          src={relatedProduct.image}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="p-4">
                        <h3 className="font-bold text-sm mb-2 line-clamp-2">
                          {language === "ar"
                            ? relatedProduct.titleAr
                            : relatedProduct.titleEn}
                        </h3>

                        <p className="text-xs text-muted-foreground line-clamp-2">
                          {language === "ar"
                            ? relatedProduct.descriptionAr
                            : relatedProduct.descriptionEn}
                        </p>
                      </div>
                    </div>
                  ))}

              </div>

            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}