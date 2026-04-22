import { useLanguage } from "@/contexts/LanguageContext";
import { useLocation } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";
import { CONTACT_INFO } from "@/const";

export default function Footer() {
  const { language, t } = useLanguage();
  const [, navigate] = useLocation();

  const navItems = [
    { label: t("common.home"), href: "/" },
    { label: t("common.products"), href: "/products" },
    { label: t("common.agencies"), href: "/agencies" },
    { label: t("common.about"), href: "/about" },
    { label: t("common.contact"), href: "/contact" },
  ];

  return (
    <footer className="bg-gradient-to-br from-emerald-50/60 via-blue-50/40 to-transparent dark:from-emerald-950/30 dark:via-blue-950/20 border-t border-emerald-100 dark:border-emerald-900">
      
      <div className="container py-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">L</span>
              </div>
              <h3 className="font-bold text-lg bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                {t("header.title")}
              </h3>
            </div>

            <p className="text-sm text-muted-foreground">
              {t("header.tagline")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-foreground">
              {t("footer.quickLinks")}
            </h4>

            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => navigate(item.href)}
                    className="text-sm text-muted-foreground hover:text-emerald-600 transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4 text-foreground">
              {t("common.contactUs")}
            </h4>

            <ul className="space-y-3">

              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-emerald-600" />
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="hover:text-emerald-600 transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>

              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-emerald-600" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-emerald-600 transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>

              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-emerald-600" />
                {CONTACT_INFO.address}
              </li>

            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-emerald-100 dark:border-emerald-900 pt-6">
          <p className="text-center text-sm text-muted-foreground">
            {t("footer.copyright")}
          </p>
        </div>

      </div>
    </footer>
  );
}