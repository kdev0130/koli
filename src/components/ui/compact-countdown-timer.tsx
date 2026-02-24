"use client";

import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  calculateTimeLeft,
  getPresaleTargetTimestamp,
  type TimeLeft,
} from "@/lib/presale-countdown";

export const CompactCountdownTimer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetTimestamp = getPresaleTargetTimestamp();

    // Initial calculation
    const initialTime = calculateTimeLeft(targetTimestamp);
    setTimeLeft(initialTime);

    // Update every second
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft(targetTimestamp);
      setTimeLeft(newTimeLeft);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Scroll to section after navigation
  useEffect(() => {
    if (location.pathname === "/" && location.hash === "#presale-countdown") {
      setTimeout(() => {
        const element = document.getElementById("presale-countdown");
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 100);
    }
  }, [location]);

  const formatNumber = (num: number) => String(num).padStart(2, "0");

  const handleClick = () => {
    if (location.pathname === "/") {
      // Already on home page, just scroll
      const element = document.getElementById("presale-countdown");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    } else {
      // Navigate to home page with hash
      navigate("/#presale-countdown");
    }
  };

  return (
    <div 
      onClick={handleClick}
      className="flex items-center gap-1 text-xs md:text-sm font-bold cursor-pointer hover:opacity-80 transition-opacity"
    >
      <span>{formatNumber(timeLeft.days)}d</span>
      <span>:</span>
      <span>{formatNumber(timeLeft.hours)}h</span>
      <span>:</span>
      <span>{formatNumber(timeLeft.minutes)}m</span>
      <span>:</span>
      <span>{formatNumber(timeLeft.seconds)}s</span>
    </div>
  );
};
