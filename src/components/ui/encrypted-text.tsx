"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface EncryptedTextProps {
  text: string;
  encryptedClassName?: string;
  revealedClassName?: string;
  revealDelayMs?: number;
  className?: string;
}

export const EncryptedText = ({
  text,
  encryptedClassName = "text-neutral-500",
  revealedClassName = "text-foreground",
  revealDelayMs = 50,
  className,
}: EncryptedTextProps) => {
  const [displayText, setDisplayText] = useState(text);
  const [isRevealing, setIsRevealing] = useState(true);

  useEffect(() => {
    setIsRevealing(true);
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let iteration = 0;
    const maxIterations = text.length;

    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      iteration += 1 / 3;

      if (iteration >= maxIterations) {
        clearInterval(interval);
        setDisplayText(text);
        setIsRevealing(false);
      }
    }, revealDelayMs);

    return () => clearInterval(interval);
  }, [text, revealDelayMs]);

  return (
    <span className={cn(isRevealing ? encryptedClassName : revealedClassName, className)}>
      {displayText}
    </span>
  );
};
