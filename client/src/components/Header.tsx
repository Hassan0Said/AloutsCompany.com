import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useState } from "react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663200918608/JFKf85zFDohGQSHWyxnVWZ/al-lotus-logo-RJcm9jzBgXvgGnxhKd3VEA.webp";

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [location, navigate] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isRTL = language === "ar";

  const navItems = [
    { label: t("common.home"), href: "/" },
    { label: t("common.products"), href: "/products" },
    { label: t("common.agencies"), href: "/agencies" },
    { label: t("common.about"), href: "/about" },
    { label: t("common.contact"), href: "/contact" },
  ];

  const isActive = (href: string) => location === href;

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-emerald-200/30 dark:border-emerald-800/30 shadow-sm backdrop-blur-sm bg-opacity-95">
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => navigate("/")}
          >
            <img 
              src={LOGO_URL} 
              alt="Al-Lotus Logo" 
              className="w-12 h-12 object-contain"
            />
            <div className="hidden sm:block">
              <h1 className="font-bold text-lg bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                {t("header.title")}
              </h1>
              <p className="text-xs text-muted-foreground">
                {t("header.subtitle")}
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => navigate(item.href)}
                className={`px-4 py-2 rounded-lg transition-all duration-200 text-sm font-medium ${
                  isActive(item.href)
                    ? "bg-gradient-to-r from-emerald-600 to-blue-600 text-white shadow-md"
                    : "text-foreground hover:bg-emerald-100/50 dark:hover:bg-emerald-900/30"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-lg hover:bg-emerald-100/50 dark:hover:bg-emerald-900/30"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5 text-emerald-600" />
              ) : (
                <Sun className="w-5 h-5 text-emerald-400" />
              )}
            </Button>

            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === "ar" ? "en" : "ar")}
              className="rounded-lg hover:bg-emerald-100/50 dark:hover:bg-emerald-900/30 font-semibold"
            >
              {language === "ar" ? "EN" : "AR"}
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden rounded-lg hover:bg-emerald-100/50 dark:hover:bg-emerald-900/30"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-emerald-200/30 dark:border-emerald-800/30">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => {
                    navigate(item.href);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-4 py-3 rounded-lg transition-all duration-200 text-sm font-medium text-left ${
                    isActive(item.href)
                      ? "bg-gradient-to-r from-emerald-600 to-blue-600 text-white shadow-md"
                      : "text-foreground hover:bg-emerald-100/50 dark:hover:bg-emerald-900/30"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
