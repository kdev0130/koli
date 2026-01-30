"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export type FlipWord = { word: string; className?: string };
export const LayoutTextFlip = ({
  text = "Build Amazing",
  words = [
    { word: "Landing Pages" },
    { word: "Component Blocks" },
    { word: "Page Sections" },
    { word: "3D Shaders" },
  ],
  duration = 3000,
}: {
  text: string;
  words: FlipWord[];
  duration?: number;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [duration, words.length]);

  return (
    <>
      <motion.span
        layoutId="subtext"
        className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight drop-shadow-lg"
      >
        {text}
      </motion.span>

      <motion.span
        className="relative inline-flex items-center justify-center overflow-visible font-sans text-5xl md:text-7xl lg:text-8xl font-black tracking-tight min-w-fit w-auto"
      >
        <AnimatePresence mode="popLayout">
          <motion.span
            key={currentIndex}
            initial={{ y: -40, filter: "blur(10px)" }}
            animate={{
              y: 0,
              filter: "blur(0px)",
            }}
            exit={{ y: 50, filter: "blur(10px)", opacity: 0 }}
            transition={{
              duration: 0.5,
            }}
            className={cn("inline-block whitespace-nowrap text-gradient-gold", words[currentIndex].className)}
          >
            {words[currentIndex].word}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </>
  );
};
