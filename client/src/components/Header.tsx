import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { Menu, X, Moon, Sun, Globe, Zap, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    <header className="sticky top-0 z-50 w-full">
      <style>{`
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 20px rgba(16, 185, 129, 0.3), 0 0 40px rgba(59, 130, 246, 0.1); }
          50% { box-shadow: 0 0 30px rgba(16, 185, 129, 0.5), 0 0 60px rgba(59, 130, 246, 0.2); }
        }
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        @keyframes float-icon {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .glow-pulse {
          animation: glow-pulse 3s ease-in-out infinite;
        }
        .shimmer-effect {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          background-size: 1000px 100%;
          animation: shimmer 3s infinite;
        }
        .float-icon {
          animation: float-icon 3s ease-in-out infinite;
        }
      `}</style>

      {/* Animated Background Gradient */}
      <div className="absolute inset-0 h-24 bg-gradient-to-b from-emerald-600/5 via-blue-600/5 to-transparent dark:from-emerald-950/20 dark:via-blue-950/10 pointer-events-none" />
      
      {/* Border with glow effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

      <div className="relative z-10 border-b border-emerald-500/10 bg-card/70 backdrop-blur-xl transition-all duration-300">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between h-16 md:h-20">
            
            {/* Logo Section with Premium Hover */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => navigate("/")}
            >
              <div className="relative overflow-hidden rounded-xl p-1.5 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-emerald-500/30">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img 
                  src={LOGO_URL} 
                  alt="Al-Lotus Logo" 
                  className="w-10 h-10 md:w-12 md:h-12 object-contain filter drop-shadow-sm relative z-10 group-hover:drop-shadow-lg transition-all duration-300"
                />
              </div>
              <div className="hidden sm:block transition-all duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
                <h1 className="font-bold text-base md:text-lg bg-gradient-to-r from-emerald-600 via-teal-500 to-blue-600 dark:from-emerald-400 dark:via-teal-400 dark:to-blue-400 bg-clip-text text-transparent">
                  {t("header.title")}
                </h1>
                <p className="text-[10px] md:text-xs font-medium tracking-wider text-muted-foreground/70 uppercase">
                  {t("header.subtitle")}
                </p>
              </div>
            </motion.div>

            {/* Desktop Navigation with Animated Dynamic Bubble Indicator */}
            <nav className="hidden md:flex items-center gap-1 bg-gradient-to-r from-emerald-500/5 to-blue-500/5 p-1.5 rounded-full border border-emerald-500/20 backdrop-blur-sm">
              {navItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <motion.button
                    key={item.href}
                    onClick={() => navigate(item.href)}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                      active 
                        ? "text-white" 
                        : "text-foreground/70 hover:text-foreground"
                    }`}
                  >
                    {/* Animated background for active item */}
                    {active && (
                      <motion.div
                        layoutId="activeNavBubble"
                        className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-teal-500 to-blue-600 shadow-lg shadow-emerald-600/40"
                        style={{ borderRadius: 9999 }}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-1">
                      {item.label}
                      {active && <Zap className="w-3 h-3" />}
                    </span>
                  </motion.button>
                );
              })}
            </nav>

            {/* Right Controls with Glowing Effects */}
            <div className="flex items-center gap-2">
              
              {/* Theme Toggle Button */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleTheme}
                  className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-secondary/40 to-secondary/20 hover:from-emerald-500/20 hover:to-blue-500/20 border border-emerald-500/20 hover:border-emerald-500/40 text-foreground transition-all duration-300 overflow-hidden group shadow-md hover:shadow-emerald-500/20"
                >
                  <motion.div
                    initial={false}
                    animate={{ rotate: theme === "light" ? 0 : 180, scale: theme === "light" ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <Moon className="w-5 h-5 text-emerald-600 dark:text-emerald-400 float-icon" />
                  </motion.div>
                  <motion.div
                    initial={false}
                    animate={{ rotate: theme === "dark" ? 0 : -180, scale: theme === "dark" ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <Sun className="w-5 h-5 text-amber-500 float-icon" />
                  </motion.div>
                </Button>
              </motion.div>

              {/* Language Toggle Button with Icon */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setLanguage(language === "ar" ? "en" : "ar")}
                  className="h-10 px-3 rounded-xl bg-gradient-to-br from-secondary/40 to-secondary/20 hover:from-emerald-500/20 hover:to-blue-500/20 border border-emerald-500/20 hover:border-emerald-500/40 font-bold text-xs tracking-wider flex items-center gap-1.5 transition-all duration-300 shadow-md hover:shadow-emerald-500/20"
                >
                  <Globe className="w-4 h-4 opacity-70 float-icon" />
                  <span>{language === "ar" ? "EN" : "AR"}</span>
                </Button>
              </motion.div>

              {/* Mobile Menu Hamburger Toggle */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="md:hidden w-10 h-10 rounded-xl bg-gradient-to-br from-secondary/40 to-secondary/20 hover:from-emerald-500/20 hover:to-blue-500/20 border border-emerald-500/20 hover:border-emerald-500/40 text-foreground transition-all duration-300 shadow-md hover:shadow-emerald-500/20"
                >
                  <motion.div
                    animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                  </motion.div>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Smooth Mobile Dropdown Menu with Staggered Links */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden border-t border-emerald-500/20 bg-gradient-to-b from-card/95 to-card/80 backdrop-blur-xl overflow-hidden"
          >
            <nav className="container px-4 py-4 flex flex-col gap-2">
              {navItems.map((item, index) => {
                const active = isActive(item.href);
                return (
                  <motion.button
                    initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                    key={item.href}
                    onClick={() => {
                      navigate(item.href);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full px-5 py-3 rounded-xl text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                      isRTL ? "flex-row-reverse" : ""
                    } ${
                      active
                        ? "bg-gradient-to-r from-emerald-600 via-teal-500 to-blue-600 text-white shadow-lg shadow-emerald-600/30"
                        : "text-foreground/80 hover:bg-emerald-500/10 hover:text-foreground"
                    }`}
                  >
                    {item.label}
                    {active && <ArrowUpRight className="w-4 h-4" />}
                  </motion.button>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}