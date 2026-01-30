"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface GlowingEffectProps {
  spread?: number;
  glow?: boolean;
  disabled?: boolean;
  proximity?: number;
  inactiveZone?: number;
  className?: string;
}

export const GlowingEffect: React.FC<GlowingEffectProps> = ({
  spread = 40,
  glow = true,
  disabled = false,
  proximity = 64,
  inactiveZone = 0.01,
  className,
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!divRef.current || disabled) return;

      const rect = divRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setPosition({ x, y });

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const distance = Math.sqrt(
        Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)
      );

      const maxDistance = Math.sqrt(
        Math.pow(rect.width / 2, 2) + Math.pow(rect.height / 2, 2)
      );

      const newOpacity = Math.max(
        0,
        Math.min(1, 1 - distance / (maxDistance + proximity))
      );

      setOpacity(newOpacity > inactiveZone ? newOpacity : 0);
    },
    [disabled, proximity, inactiveZone]
  );

  const handleMouseLeave = useCallback(() => {
    setOpacity(0);
  }, []);

  useEffect(() => {
    const parent = divRef.current?.parentElement;
    if (!parent) return;

    parent.addEventListener("mousemove", handleMouseMove);
    parent.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      parent.removeEventListener("mousemove", handleMouseMove);
      parent.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  if (disabled) return null;

  return (
    <div
      ref={divRef}
      className={cn(
        "pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500",
        className
      )}
      style={{
        opacity,
        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(217, 168, 55, 0.15), transparent 40%)`,
      }}
    />
  );
};
