import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { StickyBanner } from "@/components/ui/sticky-banner";
import { CompactCountdownTimer } from "@/components/ui/compact-countdown-timer";
import { motion } from "motion/react";
import { useStickyBanner } from "@/contexts/StickyBannerContext";

const NotFound = () => {
  const location = useLocation();
  const { isBannerVisible } = useStickyBanner();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <StickyBanner className="bg-gradient-to-r from-primary via-gold-light to-primary text-primary-foreground">
        <div className="font-bold text-sm md:text-base drop-shadow-md flex items-center gap-2 whitespace-nowrap flex-nowrap">
          <span>PRESALE STARTS IN:</span>
          <CompactCountdownTimer />
        </div>
      </StickyBanner>
      <div className="flex min-h-screen items-center justify-center bg-muted">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">404</h1>
          <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
          <a href="/" className="text-primary underline hover:text-primary/90">
            Return to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
