import { useLanguage } from "@/contexts/LanguageContext";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { ArrowLeft, CheckCircle, AlertCircle, Zap } from "lucide-react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  company?: string;
  productCategory?: string;
  quantity?: string;
  specifications?: string;
  message?: string;
}

interface SuccessPopupData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  productCategory: string;
  quantity: string;
  specifications: string;
  message: string;
}

export default function QuoteRequest() {
  const { language, t } = useLanguage();
  const [, navigate] = useLocation();
  const isRTL = language === "ar";
  
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [successData, setSuccessData] = useState<SuccessPopupData | null>(null);

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

  useEffect(() => {
    emailjs.init("HmhHS6RTzFZGzFxNg");
  }, []);

  // التحقق من صحة البريد الإلكتروني
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // التحقق من صحة رقم الهاتف
  const validatePhone = (phone: string): boolean => {
    if (!phone) return false;
    const phoneRegex = /^[0-9\s\-\+\(\)]+$/;
    return phoneRegex.test(phone) && phone.replace(/\D/g, "").length >= 7;
  };

  // التحقق من الحقول
  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    // التحقق من الاسم
    if (!formData.fullName.trim()) {
      newErrors.fullName = isRTL ? "الاسم الكامل مطلوب" : "Full name is required";
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = isRTL ? "الاسم يجب أن يكون 3 أحرف على الأقل" : "Name must be at least 3 characters";
    }

    // التحقق من البريد الإلكتروني
    if (!formData.email.trim()) {
      newErrors.email = isRTL ? "البريد الإلكتروني مطلوب" : "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = isRTL ? "البريد الإلكتروني غير صحيح" : "Invalid email format";
    }

    // التحقق من رقم الهاتف
    if (!formData.phone.trim()) {
      newErrors.phone = isRTL ? "رقم الهاتف مطلوب" : "Phone number is required";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = isRTL ? "رقم الهاتف غير صحيح" : "Invalid phone number";
    }

    // التحقق من الشركة
    if (!formData.company.trim()) {
      newErrors.company = isRTL ? "اسم الشركة مطلوب" : "Company name is required";
    } else if (formData.company.trim().length < 2) {
      newErrors.company = isRTL ? "اسم الشركة قصير جداً" : "Company name is too short";
    }

    // التحقق من فئة المنتج
    if (!formData.productCategory) {
      newErrors.productCategory = isRTL ? "اختر فئة المنتج" : "Select a product category";
    }

    // التحقق من الكمية
    if (!formData.quantity) {
      newErrors.quantity = isRTL ? "الكمية مطلوبة" : "Quantity is required";
    } else if (parseInt(formData.quantity) <= 0) {
      newErrors.quantity = isRTL ? "الكمية يجب أن تكون أكبر من صفر" : "Quantity must be greater than 0";
    }

    // التحقق من المواصفات
    if (!formData.specifications.trim()) {
      newErrors.specifications = isRTL ? "المواصفات مطلوبة" : "Specifications are required";
    } else if (formData.specifications.trim().length < 10) {
      newErrors.specifications = isRTL ? "المواصفات يجب أن تكون 10 أحرف على الأقل" : "Specifications must be at least 10 characters";
    }

    // التحقق من الرسالة
    if (!formData.message.trim()) {
      newErrors.message = isRTL ? "الرسالة مطلوبة" : "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = isRTL ? "الرسالة يجب أن تكون 10 أحرف على الأقل" : "Message must be at least 10 characters";
    }

    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // مسح الخطأ من هذا الحقل عند البدء في الكتابة
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name as keyof FormErrors];
        return newErrors;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // التحقق من الحقول
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    const templateParams = {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      title: formData.productCategory,
      quantity: formData.quantity,
      specifications: formData.specifications,
      message: formData.message,
      time: new Date().toLocaleString(),
    };

    emailjs
      .send("service_x73n3uj", "template_4lviafj", templateParams)
      .then(() => {
        setSuccessData({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          productCategory: formData.productCategory,
          quantity: formData.quantity,
          specifications: formData.specifications,
          message: formData.message,
        });
        setShowSuccessPopup(true);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setErrors({ email: isRTL ? "حدث خطأ أثناء الإرسال" : "Error sending request" });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleEditData = () => {
    setShowSuccessPopup(false);
    setTimeout(() => {
      const fullNameInput = document.querySelector('input[name="fullName"]') as HTMLInputElement;
      if (fullNameInput) fullNameInput.focus();
    }, 100);
  };

  const handleNewRequest = () => {
    setShowSuccessPopup(false);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      company: "",
      productCategory: "",
      quantity: "",
      specifications: "",
      message: "",
    });
    setErrors({});
    setTimeout(() => {
      const fullNameInput = document.querySelector('input[name="fullName"]') as HTMLInputElement;
      if (fullNameInput) fullNameInput.focus();
    }, 100);
  };

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

        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-emerald-50/60 via-blue-50/40 to-transparent dark:from-emerald-950/20 dark:via-blue-950/10">
          <div className="container max-w-2xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-emerald-100/50 dark:bg-emerald-900/30 rounded-full">
                <Zap className="w-4 h-4 text-emerald-600" />
                <span className="text-sm font-bold text-emerald-700 dark:text-emerald-300">
                  {isRTL ? "احصل على عرض سعر مخصص" : "Get a Custom Quote"}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                {isRTL ? "طلب عرض سعر" : "Request a Quote"}
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                {isRTL
                  ? "املأ النموذج أدناه وسيتواصل معك فريقنا قريباً لتقديم عرض سعر مخصص"
                  : "Fill out the form below and our team will contact you soon with a customized quote"}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16 px-4">
          <div className="container max-w-2xl">

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              onSubmit={handleSubmit}
              className="bg-card p-8 md:p-10 rounded-3xl border border-emerald-200/50 dark:border-emerald-800/50 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >

              {/* Personal Information */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6 text-emerald-600 dark:text-emerald-400">
                  {isRTL ? "معلومات شخصية" : "Personal Information"}
                </h2>

                <div className="grid md:grid-cols-2 gap-6 mb-6">

                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-bold mb-2">
                      {isRTL ? "الاسم الكامل" : "Full Name"} <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder={isRTL ? "أدخل اسمك الكامل" : "Enter your full name"}
                      className={errors.fullName ? "border-red-500 focus:border-red-500" : ""}
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-bold mb-2">
                      {isRTL ? "البريد الإلكتروني" : "Email"} <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={isRTL ? "أدخل بريدك الإلكتروني" : "Enter your email"}
                      className={errors.email ? "border-red-500 focus:border-red-500" : ""}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-bold mb-2">
                      {isRTL ? "رقم الهاتف" : "Phone Number"} <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={isRTL ? "أدخل رقم هاتفك" : "Enter your phone number"}
                      className={errors.phone ? "border-red-500 focus:border-red-500" : ""}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-sm font-bold mb-2">
                      {isRTL ? "الشركة" : "Company"} <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder={isRTL ? "أدخل اسم الشركة" : "Enter company name"}
                      className={errors.company ? "border-red-500 focus:border-red-500" : ""}
                    />
                    {errors.company && (
                      <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.company}
                      </p>
                    )}
                  </div>

                </div>
              </div>

              {/* Product Details */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6 text-emerald-600 dark:text-emerald-400">
                  {isRTL ? "تفاصيل المنتج" : "Product Details"}
                </h2>

                <div className="grid md:grid-cols-2 gap-6 mb-6">

                  {/* Product Category */}
                  <div>
                    <label className="block text-sm font-bold mb-2">
                      {isRTL ? "فئة المنتج" : "Product Category"} <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="productCategory"
                      value={formData.productCategory}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border-2 bg-background text-foreground focus:outline-none transition-all ${
                        errors.productCategory
                          ? "border-red-500 focus:border-red-500"
                          : "border-emerald-200 dark:border-emerald-800 focus:border-emerald-500"
                      }`}
                    >
                      <option value="">
                        {isRTL ? "اختر فئة المنتج" : "Select a category"}
                      </option>
                      {categories.map((cat) => (
                        <option key={cat.value} value={cat.value}>
                          {isRTL ? cat.ar : cat.en}
                        </option>
                      ))}
                    </select>
                    {errors.productCategory && (
                      <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.productCategory}
                      </p>
                    )}
                  </div>

                  {/* Quantity */}
                  <div>
                    <label className="block text-sm font-bold mb-2">
                      {isRTL ? "الكمية" : "Quantity"} <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="number"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      placeholder={isRTL ? "أدخل الكمية" : "Enter quantity"}
                      min="1"
                      className={errors.quantity ? "border-red-500 focus:border-red-500" : ""}
                    />
                    {errors.quantity && (
                      <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.quantity}
                      </p>
                    )}
                  </div>

                </div>
              </div>

              {/* Additional Information */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6 text-emerald-600 dark:text-emerald-400">
                  {isRTL ? "معلومات إضافية" : "Additional Information"}
                </h2>

                {/* Specifications */}
                <div className="mb-6">
                  <label className="block text-sm font-bold mb-2">
                    {isRTL ? "المواصفات" : "Specifications"} <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    name="specifications"
                    value={formData.specifications}
                    onChange={handleChange}
                    placeholder={isRTL ? "أدخل المواصفات المطلوبة" : "Enter required specifications"}
                    rows={4}
                    className={errors.specifications ? "border-red-500 focus:border-red-500" : ""}
                  />
                  {errors.specifications && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.specifications}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label className="block text-sm font-bold mb-2">
                    {isRTL ? "رسالة إضافية" : "Additional Message"} <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={isRTL ? "أدخل أي معلومات إضافية" : "Enter any additional information"}
                    rows={4}
                    className={errors.message ? "border-red-500 focus:border-red-500" : ""}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all py-6 rounded-2xl font-bold text-lg"
              >
                {loading
                  ? isRTL
                    ? "جاري الإرسال..."
                    : "Sending..."
                  : isRTL
                  ? "إرسال الطلب"
                  : "Submit Request"}
              </Button>

            </motion.form>

          </div>
        </section>

      </main>

      {/* Success Popup */}
      <AnimatePresence>
        {showSuccessPopup && successData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl max-w-md w-full p-8 animate-in fade-in zoom-in-95"
            >
              {/* Header */}
              <div className="text-center mb-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-full mb-4"
                >
                  <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                </motion.div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {isRTL ? "تم استقبال طلبك بنجاح!" : "Request Received Successfully!"}
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  {isRTL
                    ? `شكراً لك يا ${successData.fullName}، لقد استلمنا طلب عرض السعر الخاص بك.`
                    : `Thank you ${successData.fullName}, we've received your quote request.`}
                </p>
              </div>

              {/* Data Review Section */}
              <div className="bg-gray-50 dark:bg-slate-800 rounded-2xl p-5 mb-6 max-h-80 overflow-y-auto">
                <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  {isRTL ? "مراجعة البيانات:" : "Data Review:"}
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between pb-2 border-b border-gray-200 dark:border-slate-700">
                    <span className="text-gray-600 dark:text-gray-400 font-medium">{isRTL ? "الاسم:" : "Name:"}</span>
                    <span className="font-semibold text-gray-900 dark:text-white">{successData.fullName}</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-gray-200 dark:border-slate-700">
                    <span className="text-gray-600 dark:text-gray-400 font-medium">{isRTL ? "البريد:" : "Email:"}</span>
                    <span className="font-semibold text-gray-900 dark:text-white break-all text-right">{successData.email}</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-gray-200 dark:border-slate-700">
                    <span className="text-gray-600 dark:text-gray-400 font-medium">{isRTL ? "الهاتف:" : "Phone:"}</span>
                    <span className="font-semibold text-gray-900 dark:text-white">{successData.phone}</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-gray-200 dark:border-slate-700">
                    <span className="text-gray-600 dark:text-gray-400 font-medium">{isRTL ? "الشركة:" : "Company:"}</span>
                    <span className="font-semibold text-gray-900 dark:text-white">{successData.company}</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-gray-200 dark:border-slate-700">
                    <span className="text-gray-600 dark:text-gray-400 font-medium">{isRTL ? "الفئة:" : "Category:"}</span>
                    <span className="font-semibold text-gray-900 dark:text-white">{successData.productCategory}</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-gray-200 dark:border-slate-700">
                    <span className="text-gray-600 dark:text-gray-400 font-medium">{isRTL ? "الكمية:" : "Quantity:"}</span>
                    <span className="font-semibold text-gray-900 dark:text-white">{successData.quantity}</span>
                  </div>
                  <div className="flex flex-col pb-2 border-b border-gray-200 dark:border-slate-700">
                    <span className="text-gray-600 dark:text-gray-400 font-medium mb-1">{isRTL ? "المواصفات:" : "Specifications:"}</span>
                    <span className="font-semibold text-gray-900 dark:text-white break-words text-right">{successData.specifications}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-600 dark:text-gray-400 font-medium mb-1">{isRTL ? "الرسالة:" : "Message:"}</span>
                    <span className="font-semibold text-gray-900 dark:text-white break-words text-right">{successData.message}</span>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <Button
                  onClick={handleEditData}
                  variant="outline"
                  className="flex-1 border-2 border-emerald-500/30 hover:border-emerald-500/50 hover:bg-emerald-500/5 font-bold rounded-xl"
                >
                  {isRTL ? "مراجعة وتعديل" : "Review & Edit"}
                </Button>
                <Button
                  onClick={handleNewRequest}
                  className="flex-1 bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white font-bold rounded-xl"
                >
                  {isRTL ? "طلب جديد" : "New Request"}
                </Button>
              </div>

              {/* Info Message */}
              <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4">
                {isRTL
                  ? "سيتواصل معك فريقنا قريباً على البريد الإلكتروني أو الهاتف المسجل"
                  : "Our team will contact you soon via email or phone"}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}