"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  FileText,
  FlaskConical,
  FileCheck,
  ShieldCheck,
  Ship,
  Layers
} from "lucide-react";

export interface StepItem {
  num: string;
  title: string;
  detail: string;
  action: string;
  image: string;
}

interface ProcessFlow3DProps {
  steps: StepItem[];
}

const stepIcons = [
  FileText,
  FlaskConical,
  FileCheck,
  ShieldCheck,
  Ship
];

export default function ProcessFlow3D({ steps }: ProcessFlow3DProps) {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // 5-second Auto-scroll / Progression Timer
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, steps.length, activeStep]);

  const current = steps[activeStep] || steps[0];
  const CurrentIcon = stepIcons[activeStep % stepIcons.length] || Layers;

  return (
    <section
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative w-full max-w-7xl mx-auto px-6 md:px-12 mb-28 py-8"
    >
      {/* 1. Header Section */}
      <div className="text-center space-y-4 max-w-3xl mx-auto mb-16 md:mb-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1c255b] font-display">
          Step-by-Step Export Order Flow
        </h2>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed font-normal max-w-2xl mx-auto">
          We keep commercial communication direct, structured, and transparent from initial enquiry to final port clearance.
        </p>
      </div>

      {/* 2. Three-Part Layout: Left Tabs | Center Circle Image | Right Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

        {/* LEFT COLUMN: Vertical Tabs List */}
        <div className="lg:col-span-4 flex flex-col justify-center space-y-2">
          {steps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <div
                key={idx}
                onClick={() => setActiveStep(idx)}
                className="relative cursor-pointer group py-3.5 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-xs font-mono font-bold transition-colors ${isActive ? "text-[#293681]" : "text-slate-400 group-hover:text-slate-600"
                        }`}
                    >
                      {step.num}
                    </span>
                    <span
                      className={`text-base md:text-lg font-bold transition-all duration-300 ${isActive
                        ? "text-[#1c255b] font-extrabold translate-x-1"
                        : "text-slate-400 font-semibold group-hover:text-slate-700"
                        }`}
                    >
                      {step.title}
                    </span>
                  </div>
                </div>

                {/* Base Bottom Border */}
                <div className="w-full h-[1.5px] bg-slate-200 mt-3.5 relative overflow-hidden rounded-full">
                  {isActive && (
                    <motion.div
                      key={`tab-line-${activeStep}-${isPaused}`}
                      initial={{ width: "0%" }}
                      animate={{ width: isPaused ? "100%" : "100%" }}
                      transition={{ duration: isPaused ? 0.3 : 5, ease: isPaused ? "easeOut" : "linear" }}
                      className="h-full bg-[#1c255b]"
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* CENTER COLUMN: Prominent Circular Visual Container */}
        <div className="lg:col-span-4 flex items-center justify-center relative py-6">
          {/* Subtle Outer Glow & Ring */}
          <div className="absolute w-[290px] sm:w-[360px] md:w-[390px] h-[290px] sm:h-[360px] md:h-[390px] rounded-full bg-gradient-to-tr from-[#293681]/10 via-[#95CCDD]/20 to-transparent blur-xl pointer-events-none" />

          <div className="relative w-[260px] sm:w-[320px] md:w-[350px] h-[260px] sm:h-[320px] md:h-[350px] rounded-full p-2 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-slate-100 flex items-center justify-center overflow-hidden group">

            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, scale: 0.88, rotate: -4 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 1.08, rotate: 4 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full h-full rounded-full overflow-hidden"
              >
                <Image
                  src={current.image}
                  alt={current.title}
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Subtle Circular Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />

                {/* Center Badge */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-md shadow-md border border-slate-200 text-[11px] font-bold text-[#1c255b] whitespace-nowrap">
                  Stage {current.num} Active
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* RIGHT COLUMN: Detailed Explanation & Actions */}
        <div className="lg:col-span-4 flex flex-col justify-center space-y-6 lg:pl-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="space-y-4"
            >

              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                {current.title}
              </h3>

              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-normal">
                {current.detail}
              </p>

              {/* Buyer Action Box */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-1.5">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#293681] block">
                  Buyer Action:
                </span>
                <p className="text-xs sm:text-sm font-semibold text-slate-800">
                  {current.action}
                </p>
              </div>



              {/* Arrow Navigation */}
              <div className="flex items-center gap-1.5 pt-2">
                <button
                  onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1))}
                  className="w-9 h-9 rounded-full bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 flex items-center justify-center transition-all shadow-sm cursor-pointer"
                  aria-label="Previous step"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0))}
                  className="w-9 h-9 rounded-full bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 flex items-center justify-center transition-all shadow-sm cursor-pointer"
                  aria-label="Next step"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
