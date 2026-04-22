import { useLanguage } from "@/contexts/LanguageContext";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { ArrowLeft, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";


export default function QuoteRequest() {
  const { language, t } = useLanguage();
  const [, navigate] = useLocation();
  const isRTL = language === "ar";
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    productCategory: "",
    quantity: "",
    specifications: "",
    message: "",
  });

  const categories = [
  { value: "potatoWashing", ar: "معدات البطاطس", en: "Potato Equipment" },
  { value: "fruitVegetable", ar: "الفواكه والخضروات", en: "Fruit & Vegetables" },
  { value: "pipes", ar: "أنابيب ومواسير", en: "Pipes & Tubes" },
  { value: "sanitaryMaterials", ar: "مواد صحية", en: "Sanitary Materials" },
  { value: "waterTreatment", ar: "معالجة المياه", en: "Water Treatment" },
  { value: "automotive", ar: "معدات السيارات", en: "Automotive" },
  { value: "steamIron", ar: "مكاوي البخار", en: "Steam Iron" },
  { value: "laundry", ar: "معدات الغسيل", en: "Laundry" },
  { value: "sewing", ar: "معدات الخياطة", en: "Sewing" },
  { value: "electrical", ar: "معدات كهربائية", en: "Electrical" },
  { value: "construction", ar: "معدات البناء", en: "Construction" },
  { value: "medical", ar: "معدات طبية", en: "Medical" },
  { value: "accessibility", ar: "معدات الوصول", en: "Accessibility" },
];

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

const handleSubmit = (e: any) => {
  e.preventDefault();

      emailjs.send(
        "service_x73n3uj",
        "template_4lviafj", 
        {
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          title: formData.productCategory,
          quantity: formData.quantity,
          specifications: formData.specifications,
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        "HmhHS6RTzFZGzFxNg"
      )
      .then(() => {
        setSubmitted(true);
        setTimeout(() => navigate("/"), 3000);
      })
      .catch((err) => {
        console.log("EmailJS Error:", err);
      });
    };

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 flex items-center justify-center px-4">
          <div className="text-center max-w-md">

            <div className="mb-6 flex justify-center">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-blue-100 dark:from-emerald-950 dark:to-blue-950 rounded-full flex items-center justify-center">
                <CheckCircle className="w-12 h-12 text-emerald-600 dark:text-emerald-400" />
              </div>
            </div>

            <h1 className="text-3xl font-bold mb-4 text-foreground">
              {isRTL ? "تم استقبال طلبك!" : "Request Received!"}
            </h1>

            <p className="text-lg text-muted-foreground mb-8">
              {isRTL
                ? "شكراً لك! سيتم التواصل معك قريباً"
                : "Thank you! We will contact you soon"}
            </p>

            <p className="text-sm text-muted-foreground mb-8">
              {isRTL
                ? "سيتم إعادة توجيهك للصفحة الرئيسية..."
                : "Redirecting to home page..."}
            </p>

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

        {/* Form */}
        <section className="py-12 px-4">
          <div className="container max-w-2xl">

            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                {isRTL ? "طلب عرض سعر" : "Request a Quote"}
              </h1>

              <p className="text-lg text-muted-foreground">
                {isRTL
                  ? "املأ النموذج أدناه وسنرسل لك عرض سعر مخصص"
                  : "Fill out the form below and we'll send you a customized quote"}
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="bg-card p-8 rounded-2xl border border-emerald-200/50 dark:border-emerald-800/50 shadow-lg"
              
            >

              <div className="grid md:grid-cols-2 gap-6 mb-6">

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    {isRTL ? "الاسم الكامل" : "Full Name"} *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-emerald-200 dark:border-emerald-800 bg-background text-foreground focus:ring-2 focus:ring-emerald-600 outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    {isRTL ? "البريد الإلكتروني" : "Email"} *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-emerald-200 dark:border-emerald-800 bg-background text-foreground focus:ring-2 focus:ring-emerald-600 outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    {isRTL ? "رقم الهاتف" : "Phone"} *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-emerald-200 dark:border-emerald-800 bg-background text-foreground focus:ring-2 focus:ring-emerald-600 outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    {isRTL ? "الشركة" : "Company"}
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-emerald-200 dark:border-emerald-800 bg-background text-foreground focus:ring-2 focus:ring-emerald-600 outline-none"
                    required
                  />
                </div>

                <select
                  name="productCategory"
                  value={formData.productCategory}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-emerald-200 dark:border-emerald-800 bg-background"
                >
                  <option value="">
                    {isRTL ? "اختر فئة" : "Select category"}
                  </option>

                  {categories.map((cat) => (
                    <option key={cat.value} value={cat.value}>
                      {isRTL ? cat.ar : cat.en}
                    </option>
                  ))}
                </select>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    {isRTL ? "الكمية" : "Quantity"}
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-emerald-200 dark:border-emerald-800 bg-background text-foreground focus:ring-2 focus:ring-emerald-600 outline-none"
                    required
                  />
                </div>

              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">
                  {isRTL ? "المواصفات" : "Specifications"}
                </label>
                <textarea
                  name="specifications"
                  value={formData.specifications}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-emerald-200 dark:border-emerald-800 bg-background focus:ring-2 focus:ring-emerald-600 outline-none"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">
                  {isRTL ? "رسالة إضافية" : "Message"}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-emerald-200 dark:border-emerald-800 bg-background focus:ring-2 focus:ring-emerald-600 outline-none"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white"
              >
                {isRTL ? "إرسال الطلب" : "Submit Request"}
              </Button>

            </form>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}