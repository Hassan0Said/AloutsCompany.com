import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home } from "lucide-react";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();
  const { language } = useLanguage();
  const isRTL = language === "ar";

  const handleGoHome = () => {
    setLocation("/");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-emerald-50/50 via-blue-50/30 to-transparent dark:from-emerald-950/20 dark:via-blue-950/10 dark:to-transparent">

      <Card className="w-full max-w-lg mx-4 shadow-lg border border-emerald-200/50 dark:border-emerald-800/50 bg-card">

        <CardContent className="pt-8 pb-8 text-center">

          <div className="flex justify-center mb-6">

            <div className="relative">

              <div className="absolute inset-0 bg-emerald-300/20 rounded-full animate-pulse" />

              <AlertCircle className="relative h-16 w-16 text-emerald-600 dark:text-emerald-400" />

            </div>

          </div>

          <h1 className="text-4xl font-bold text-foreground mb-2">404</h1>

          <h2 className="text-xl font-semibold text-foreground mb-4">
            {isRTL ? "الصفحة غير موجودة" : "Page Not Found"}
          </h2>

          <p className="text-muted-foreground mb-8 leading-relaxed">
            {isRTL
              ? "عذراً، الصفحة غير موجودة أو تم نقلها."
              : "Sorry, the page you are looking for doesn't exist or was moved."}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">

            <Button
              onClick={handleGoHome}
              className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white"
            >
              <Home className="w-4 h-4 mr-2" />
              {isRTL ? "العودة للرئيسية" : "Go Home"}
            </Button>

          </div>

        </CardContent>

      </Card>

    </div>
  );
}