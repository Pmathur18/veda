"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxProps {
  children: React.ReactNode;
  speed?: number; // Speed factor: positive moves faster/normal, negative moves slower (creates lag/parallax)
  className?: string;
  id?: string;
}

// Custom hook to detect if screen is desktop/tablet and support server-side rendering
function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 768);
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isDesktop;
}

/**
 * ParallaxSection: Shuts or shifts a page segment or container based on scroll.
 */
export function ParallaxSection({ children, speed = -0.1, className = "", id }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isDesktop = useIsDesktop();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Calculate translation: default to no movement (0) if not on desktop
  const y = useTransform(scrollYProgress, [0, 1], isDesktop ? [100 * speed, -100 * speed] : [0, 0]);

  return (
    <div ref={ref} id={id} className={`relative ${className}`}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
}

/**
 * ParallaxElement: Translates individual visual details, images, or cards.
 */
export function ParallaxElement({ children, speed = 0.08, className = "", id }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isDesktop = useIsDesktop();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], isDesktop ? [50 * speed, -50 * speed] : [0, 0]);

  return (
    <div ref={ref} id={id} className={className}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
}

/**
 * ParallaxBackground: Translates decorative backdrops, dots, or gradients slower than text.
 */
export function ParallaxBackground({ children, speed = -0.2, className = "", id }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isDesktop = useIsDesktop();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], isDesktop ? [150 * speed, -150 * speed] : [0, 0]);

  return (
    <div ref={ref} id={id} className={`absolute pointer-events-none ${className}`}>
      <motion.div style={{ y }} className="w-full h-full">
        {children}
      </motion.div>
    </div>
  );
}
