import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CONTACT_INFO } from "@/const";
import { Mail, Phone, MapPin, X } from "lucide-react";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

interface SuccessPopupData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const { language, t } = useLanguage();
  const isRTL = language === "ar";

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [successData, setSuccessData] = useState<SuccessPopupData | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

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
    if (!phone) return true; // الهاتف اختياري
    const phoneRegex = /^[0-9\s\-\+\(\)]+$/;
    return phoneRegex.test(phone) && phone.replace(/\D/g, "").length >= 7;
  };

  // التحقق من الحقول
  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    // التحقق من الاسم
    if (!formData.name.trim()) {
      newErrors.name = isRTL ? "الاسم مطلوب" : "Name is required";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = isRTL ? "الاسم يجب أن يكون 3 أحرف على الأقل" : "Name must be at least 3 characters";
    }

    // التحقق من البريد الإلكتروني
    if (!formData.email.trim()) {
      newErrors.email = isRTL ? "البريد الإلكتروني مطلوب" : "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = isRTL ? "البريد الإلكتروني غير صحيح" : "Invalid email format";
    }

    // التحقق من رقم الهاتف (اختياري)
    if (formData.phone && !validatePhone(formData.phone)) {
      newErrors.phone = isRTL ? "رقم الهاتف غير صحيح" : "Invalid phone number";
    }

    // التحقق من الموضوع
    if (!formData.subject.trim()) {
      newErrors.subject = isRTL ? "الموضوع مطلوب" : "Subject is required";
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = isRTL ? "الموضوع يجب أن يكون 5 أحرف على الأقل" : "Subject must be at least 5 characters";
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
    setStatus(null);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      title: formData.subject,
      message: formData.message,
      time: new Date().toLocaleString(),
    };

    emailjs
      .send("service_x73n3uj", "template_qwrsxzd", templateParams)
      .then(() => {
        setStatus("success");
        setSuccessData({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        });
        setShowSuccessPopup(true);

        // عدم مسح البيانات حتى الآن - سيتم مسحها عند الضغط على "إرسال رسالة جديدة"
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setStatus("error");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleEditData = () => {
    setShowSuccessPopup(false);
    // التركيز على حقل الاسم للبدء في التعديل
    setTimeout(() => {
      const nameInput = document.querySelector('input[name="name"]') as HTMLInputElement;
      if (nameInput) nameInput.focus();
    }, 100);
  };

  const handleNewMessage = () => {
    setShowSuccessPopup(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setErrors({});
    setStatus(null);
    // التركيز على حقل الاسم
    setTimeout(() => {
      const nameInput = document.querySelector('input[name="name"]') as HTMLInputElement;
      if (nameInput) nameInput.focus();
    }, 100);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-emerald-50/60 via-blue-50/40 to-transparent dark:from-emerald-950/20 dark:via-blue-950/10">
          <div className="container">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                {t("contact.title")}
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t("contact.description")}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4">
          <div className="container max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12">
              
              {/* Form */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-emerald-600">
                  {isRTL ? "أرسل لنا رسالة" : "Send us a Message"}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t("contact.form.name")} <span className="text-red-500">*</span>
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t("contact.form.name")}
                      className={errors.name ? "border-red-500 focus:border-red-500" : ""}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t("contact.form.email")} <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t("contact.form.email")}
                      className={errors.email ? "border-red-500 focus:border-red-500" : ""}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t("contact.form.phone")}
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t("contact.form.phone")}
                      className={errors.phone ? "border-red-500 focus:border-red-500" : ""}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t("contact.form.subject")} <span className="text-red-500">*</span>
                    </label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder={t("contact.form.subject")}
                      className={errors.subject ? "border-red-500 focus:border-red-500" : ""}
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t("contact.form.message")} <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t("contact.form.message")}
                      rows={5}
                      className={errors.message ? "border-red-500 focus:border-red-500" : ""}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                    )}
                  </div>

                  <Button 
                    type="submit" 
                    disabled={loading}  
                    className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 text-white shadow-md hover:opacity-90 transition-all duration-200"
                  >
                    {loading
                      ? isRTL
                        ? "جاري الإرسال..."
                        : "Sending..."
                      : t("contact.form.submit")}
                  </Button>

                  {status === "error" && (
                    <p className="text-red-600 text-center text-sm mt-2">
                      {isRTL
                        ? "حدث خطأ أثناء الإرسال"
                        : "Something went wrong"}
                    </p>
                  )}
                </form>
              </div>

              {/* Info */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-emerald-600">
                  {isRTL ? "معلومات التواصل" : "Contact Information"}
                </h2>

                <div className="space-y-6">

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">{t("common.phone")}</h3>
                      <a href={`tel:${CONTACT_INFO.phone}`}>
                        <span dir="ltr">{CONTACT_INFO.phone}</span>
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">{t("common.email")}</h3>
                      <a href={`mailto:${CONTACT_INFO.email}`}>
                        {CONTACT_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">{t("common.address")}</h3>
                      <p>{CONTACT_INFO.address}</p>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* Success Popup */}
      {showSuccessPopup && successData && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-slate-900 rounded-lg shadow-xl max-w-md w-full p-6 animate-in fade-in zoom-in-95">
            {/* Header */}
            <div className="text-center mb-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-3">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {isRTL ? "تم إرسال الرسالة بنجاح!" : "Message Sent Successfully!"}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                {isRTL 
                  ? `شكراً لك يا ${successData.name}، لقد استلمنا تفاصيل رسالتك بنجاح.`
                  : `Thank you ${successData.name}, we've received your message successfully.`
                }
              </p>
            </div>

            {/* Data Review Section */}
            <div className="bg-gray-50 dark:bg-slate-800 rounded-lg p-4 mb-6 max-h-64 overflow-y-auto">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                {isRTL ? "مراجعة البيانات:" : "Data Review:"}
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">{isRTL ? "الاسم:" : "Name:"}</span>
                  <span className="font-medium text-gray-900 dark:text-white">{successData.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">{isRTL ? "البريد الإلكتروني:" : "Email:"}</span>
                  <span className="font-medium text-gray-900 dark:text-white break-all">{successData.email}</span>
                </div>
                {successData.phone && (
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">{isRTL ? "الهاتف:" : "Phone:"}</span>
                    <span className="font-medium text-gray-900 dark:text-white">{successData.phone}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">{isRTL ? "الموضوع:" : "Subject:"}</span>
                  <span className="font-medium text-gray-900 dark:text-white break-all">{successData.subject}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-600 dark:text-gray-400 mb-1">{isRTL ? "الرسالة:" : "Message:"}</span>
                  <span className="font-medium text-gray-900 dark:text-white break-words">{successData.message}</span>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <Button
                onClick={handleEditData}
                variant="outline"
                className="flex-1"
              >
                {isRTL ? "مراجعة وتعديل البيانات" : "Review & Edit Data"}
              </Button>
              <Button
                onClick={handleNewMessage}
                className="flex-1 bg-gradient-to-r from-emerald-600 to-blue-600 text-white hover:opacity-90"
              >
                {isRTL ? "إرسال رسالة جديدة" : "Send New Message"}
              </Button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}