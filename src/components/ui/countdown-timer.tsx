"use client";

import { useEffect, useState } from "react";
import { EncryptedText } from "./encrypted-text";
import {
  calculateTimeLeft,
  getPresaleTargetTimestamp,
  type TimeLeft,
} from "@/lib/presale-countdown";

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [prevTimeLeft, setPrevTimeLeft] = useState<TimeLeft>({
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
    setPrevTimeLeft(initialTime);

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft((currentTimeLeft) => {
        const newTimeLeft = calculateTimeLeft(targetTimestamp);
        setPrevTimeLeft(currentTimeLeft);
        return newTimeLeft;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeBlock = ({ 
    value, 
    prevValue, 
    label 
  }: { 
    value: number; 
    prevValue: number; 
    label: string; 
  }) => {
    const formattedValue = value.toString().padStart(2, "0");
    const hasChanged = value !== prevValue;

    return (
      <div className="flex flex-col items-center">
        <div className="relative">
          {hasChanged ? (
            <EncryptedText
              text={formattedValue}
              encryptedClassName="text-gradient-gold/50"
              revealedClassName="text-gradient-gold"
              revealDelayMs={30}
              className="text-4xl md:text-5xl font-bold tabular-nums"
            />
          ) : (
            <div className="text-4xl md:text-5xl font-bold text-gradient-gold tabular-nums">
              {formattedValue}
            </div>
          )}
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 to-yellow-600/20 blur-xl -z-10" />
        </div>
        <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider mt-1">
          {label}
        </div>
      </div>
    );
  };

  return (
    <div className="flex gap-3 md:gap-6 justify-center items-center">
      <TimeBlock value={timeLeft.days} prevValue={prevTimeLeft.days} label="Days" />
      <div className="text-3xl md:text-4xl text-gradient-gold font-bold">:</div>
      <TimeBlock value={timeLeft.hours} prevValue={prevTimeLeft.hours} label="Hours" />
      <div className="text-3xl md:text-4xl text-gradient-gold font-bold">:</div>
      <TimeBlock value={timeLeft.minutes} prevValue={prevTimeLeft.minutes} label="Minutes" />
      <div className="text-3xl md:text-4xl text-gradient-gold font-bold">:</div>
      <TimeBlock value={timeLeft.seconds} prevValue={prevTimeLeft.seconds} label="Seconds" />
    </div>
  );
};
