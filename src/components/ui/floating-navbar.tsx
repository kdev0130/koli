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
import { Link } from "react-router-dom";

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
    const link = document.createElement("a");
    link.href = "/litepaper.pdf";
    link.download = "KOLI-Litepaper.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
        className={cn(
          "flex max-w-fit fixed top-6 inset-x-0 mx-auto border border-border/50 rounded-full bg-card/80 backdrop-blur-xl shadow-lg z-[5000] px-8 py-3 items-center justify-center space-x-6",
          className
        )}
      >
        
        {navItems.map((navItem, idx) => (
          <Link
            key={`link-${idx}`}
            to={navItem.link}
            className={cn(
              "relative text-muted-foreground items-center flex space-x-1 hover:text-foreground transition-colors"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm font-medium">{navItem.name}</span>
          </Link>
        ))}
        
        <button onClick={handleDownload} className="relative text-sm font-medium border border-primary/50 text-primary px-4 py-1.5 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 group flex items-center gap-2">
          <Download className="h-4 w-4" />
          <span>Litepaper</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-primary to-transparent h-px opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
