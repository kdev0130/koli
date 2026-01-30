"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { useStickyBanner } from "@/contexts/StickyBannerContext";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const location = useLocation();
  const { isBannerVisible } = useStickyBanner();

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - (scrollYProgress.getPrevious() ?? 0);

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  const handleDownload = () => {
    window.open("/litepaper.pdf", "_blank");
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        style={{
          transform: `translateY(${isBannerVisible ? '0' : '-3rem'})`,
          transition: "transform 0.3s ease-in-out",
        }}
        className={cn(
          "flex max-w-fit fixed top-[3.5rem] md:top-[4.5rem] inset-x-0 mx-auto border border-border/50 rounded-full bg-card/80 backdrop-blur-xl shadow-lg z-[5000] px-8 py-3 items-center justify-center space-x-6",
          className
        )}
      >
        <img src="/koli_logo.png" alt="KOLI Logo" className="h-8 w-8 -mr-5" />
        <Link to="/" className="text-2xl font-black text-gradient-gold tracking-tight mr-2">
          $KOLI
        </Link>
        
        {navItems.map((navItem, idx) => {
          const isActive = location.pathname === navItem.link;
          return (
            <Link
              key={`link-${idx}`}
              to={navItem.link}
              className={cn(
                "relative items-center flex space-x-1 transition-colors",
                isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block text-sm font-medium">{navItem.name}</span>
            </Link>
          );
        })}
        
        <button onClick={handleDownload} className="relative text-sm font-medium border border-primary/50 text-primary px-4 py-1.5 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 group flex items-center gap-2">
          <Download className="h-4 w-4" />
          <span>Litepaper</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-primary to-transparent h-px opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
