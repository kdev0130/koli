import React from "react";
import { motion } from "motion/react";

export const LoaderOne = () => {
  return (
    <div className="flex items-center justify-center">
      <motion.div
        className="w-16 h-16 rounded-full border-4 border-primary/20 border-t-primary"
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

export const KoliLoader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="relative">
        <motion.div
          className="w-20 h-20 rounded-full bg-gradient-gold"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="w-16 h-16 rounded-full border-2 border-transparent border-t-accent border-r-accent" />
        </motion.div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-xl">K</span>
        </div>
      </div>
    </div>
  );
};
