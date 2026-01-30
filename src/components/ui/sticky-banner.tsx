import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { useStickyBanner } from "@/contexts/StickyBannerContext";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "motion/react";
import { useState } from "react";

interface StickyBannerProps {
  children: React.ReactNode;
  className?: string;
}

export function StickyBanner({ children, className }: StickyBannerProps) {
  const { isBannerVisible, setIsBannerVisible } = useStickyBanner();
  const { scrollYProgress } = useScroll();
  const [scrollVisible, setScrollVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - (scrollYProgress.getPrevious() ?? 0);

      if (scrollYProgress.get() < 0.05) {
        setScrollVisible(true);
      } else {
        if (direction < 0) {
          setScrollVisible(true);
        } else {
          setScrollVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      {isBannerVisible && (
        <motion.div
          initial={{
            opacity: 1,
            maxHeight: 200,
          }}
          animate={{
            y: scrollVisible ? 0 : -100,
            opacity: scrollVisible ? 1 : 0,
          }}
          exit={{
            y: -50,
            opacity: 0,
            maxHeight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            transition: {
              duration: 0.4,
              ease: [0.4, 0, 0.2, 1],
            },
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className={cn(
            "sticky top-0 z-[4000] flex w-full items-center justify-center px-4 py-3 text-center overflow-hidden",
            className
          )}
        >
          <div className="flex items-center gap-2">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
