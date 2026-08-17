"use client";

import { motion } from "framer-motion";
import React from "react";

interface RotatingCardProps {
  children: React.ReactNode;
  className?: string;
  angle?: number; // e.g. -2, -3, 2, 3
}

export default function RotatingCard({
  children,
  className = "",
  angle = -2.5,
}: RotatingCardProps) {
  return (
    <motion.div
      className={`overflow-hidden rounded-3xl border border-neutral-100 bg-white shadow-xl shadow-neutral-100/40 md:rotate-[var(--tilt-angle)] origin-center transition-all ${className}`}
      style={{ "--tilt-angle": `${angle}deg` } as React.CSSProperties}
      whileHover={{ 
        rotate: 0, 
        scale: 1.02,
        boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.08)"
      }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
    >
      {children}
    </motion.div>
  );
}
