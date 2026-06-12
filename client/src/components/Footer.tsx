import { useLanguage } from "@/contexts/LanguageContext";
import { useLocation } from "wouter";
import { Mail, Phone, MapPin, Heart } from "lucide-react";
import { CONTACT_INFO } from "@/const";
import { motion } from "framer-motion";

export default function Footer() {
  const { language, t } = useLanguage();
  const [, navigate] = useLocation();
  const isRTL = language === "ar";

  const navItems = [
    { label: t("common.home"), href: "/" },
    { label: t("common.products"), href: "/products" },
    { label: t("common.agencies"), href: "/agencies" },
    { label: t("common.about"), href: "/about" },
    { label: t("common.contact"), href: "/contact" },
  ];

  return (
    <footer className="relative overflow-hidden">
      <style>{`
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .footer-item {
          animation: slide-up 0.6s ease-out forwards;
        }
      `}</style>

      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/80 via-blue-50/40 to-transparent dark:from-emerald-950/40 dark:via-blue-950/20 dark:to-transparent" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl -z-10" />

      {/* Top Border with Glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

      <div className="relative z-10 border-t border-emerald-100 dark:border-emerald-900">
        <div className="container py-12 md:py-16">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">

            {/* Company Info */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="footer-item"
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-600/30"
                >
                  <span className="text-white font-bold text-lg">L</span>
                </motion.div>
                <h3 className="font-bold text-lg bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                  {t("header.title")}
                </h3>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {t("header.tagline")}
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="footer-item"
            >
              <h4 className="font-bold mb-5 text-foreground text-lg">
                {t("footer.quickLinks")}
              </h4>

              <ul className="space-y-3">
                {navItems.map((item) => (
                  <motion.li key={item.href} whileHover={{ x: 4 }}>
                    <button
                      onClick={() => navigate(item.href)}
                      className="text-sm text-muted-foreground hover:text-emerald-600 transition-colors duration-300 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600/50 group-hover:bg-emerald-600" />
                      {item.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="footer-item"
            >
              <h4 className="font-bold mb-5 text-foreground text-lg">
                {t("common.contactUs")}
              </h4>

              <ul className="space-y-4">

                <motion.li 
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-3 text-sm text-muted-foreground group"
                >
                  <Phone className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="hover:text-emerald-600 transition-colors duration-300"
                  >
                    <span dir="ltr">{CONTACT_INFO.phone}</span>
                  </a>
                </motion.li>

                <motion.li 
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-3 text-sm text-muted-foreground group"
                >
                  <Mail className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="hover:text-emerald-600 transition-colors duration-300 break-all"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </motion.li>

                <motion.li 
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-3 text-sm text-muted-foreground group"
                >
                  <MapPin className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>{CONTACT_INFO.address}</span>
                </motion.li>

              </ul>
            </motion.div>

          </div>

          {/* Divider */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="border-t border-emerald-100 dark:border-emerald-900 pt-8 origin-left"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-center md:text-left text-sm text-muted-foreground">
                {t("footer.copyright")}
              </p>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <span>{isRTL ? "مصنوع بـ" : "Made with"}</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                </motion.div>
                <span>{isRTL ? "في مصر" : "in Egypt"}</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </footer>
  );
}