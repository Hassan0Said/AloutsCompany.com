import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CONTACT_INFO } from "@/const";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const { language, t } = useLanguage();
  const isRTL = language === "ar";

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

        const handleSubmit = (e: React.FormEvent) => {
          e.preventDefault();

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

              setFormData({
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
              });
            })
            .catch((error) => {
              console.error("EmailJS Error:", error);
              setStatus("error");
            })
            .finally(() => {
              setLoading(false);
            });
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
                      {t("contact.form.name")}
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t("contact.form.name")}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t("contact.form.email")}
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t("contact.form.email")}
                      required
                    />
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
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t("contact.form.subject")}
                    </label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder={t("contact.form.subject")}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t("contact.form.message")}
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t("contact.form.message")}
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" disabled={loading}  className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 text-white shadow-md hover:opacity-90 transition-all duration-200">
                    {loading
                      ? isRTL
                        ? "جاري الإرسال..."
                        : "Sending..."
                      : t("contact.form.submit")}
                  </Button>

                  {status === "success" && (
                    <p className="text-green-600 text-center text-sm mt-2">
                      {isRTL
                        ? "تم إرسال الرسالة بنجاح ✅"
                        : "Message sent successfully ✅"}
                    </p>
                  )}

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
                        {CONTACT_INFO.phone}
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

      <Footer />
    </div>
  );
}