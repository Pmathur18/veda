"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Phone, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.05 });

  const menuLinks = [
    { label: "Products", href: "/products" },
    { label: "About", href: "/about" },
    { label: "Quality & Process", href: "/export-process" },
    { label: "Contact", href: "/contact" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <div ref={footerRef} className="sticky bottom-0 z-0 w-full overflow-hidden bg-dark-blue">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/footer image.png"
          alt="Cargo Ship Sourcing Operations"
          fill
          sizes="100vw"
          className="object-cover object-bottom"
          priority
        />
        {/* Dark overlay to provide contrast for text and match the ocean depth style */}
        <div className="absolute inset-0 bg-slate-950/75 pointer-events-none" />
      </div>

      {/* Main Content & Bottom Bar Container */}
      <div className="w-full relative z-10 flex flex-col justify-between min-h-[400px] sm:min-h-[420px] md:min-h-[460px]">

        {/* Main Content Overlay */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="w-full max-w-7xl mx-auto pt-10 md:pt-16 px-6 sm:px-8 pb-8 md:pb-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start">

            {/* Column 1: Connect With Us & Socials */}
            <motion.div variants={itemVariants} className="lg:col-span-5 space-y-6 text-left">

              {/* Header Title with wrap */}
              <div className="flex flex-col text-left group cursor-pointer">
                <span className="text-2xl sm:text-3xl md:text-[38px] font-black text-white tracking-tight leading-[1.1] uppercase font-display">
                  Connect With US
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 45 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white text-slate-950 flex items-center justify-center shrink-0 shadow-md"
                  >
                    <ArrowUpRight className="w-4 h-4 md:w-4.5 md:h-4.5 stroke-[3]" />
                  </motion.div>
                </span>
              </div>

              {/* Email Callout */}
              <div className="space-y-1 pt-1">
                <span className="block text-xs sm:text-sm font-semibold text-slate-200/90 tracking-wide">
                  Or email us at
                </span>
                <motion.a
                  href="mailto:connect@vedaimpex.com"
                  whileHover={{ x: 4 }}
                  className="inline-block text-lg sm:text-xl md:text-2xl font-black text-white hover:text-sky tracking-tight transition-colors duration-200 font-display break-all sm:break-normal"
                >
                  connect@vedaimpex.com
                </motion.a>
              </div>
            </motion.div>

            {/* Columns 2 & 3 Wrapper: Side-by-Side Row for Menu and Office on Mobile */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-6 sm:gap-8 items-start">
              {/* Column 2: Navigation Menu */}
              <motion.div variants={itemVariants} className="space-y-4 md:space-y-6 text-left">
                <h3 className="text-lg md:text-xl font-black text-white uppercase tracking-wide font-display">
                  Menu
                </h3>
                <ul className="space-y-3 md:space-y-4">
                  {menuLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="inline-block text-xs sm:text-sm font-bold text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Column 3: Office Coordinates */}
              <motion.div variants={itemVariants} className="space-y-4 md:space-y-6 text-left">
                <h3 className="text-lg md:text-xl font-black text-white uppercase tracking-wide font-display">
                  OFFICE
                </h3>
                <div className="space-y-4 text-xs sm:text-sm">

                  {/* Office 1 */}
                  <div className="text-slate-300 font-medium leading-relaxed max-w-[280px]">
                    Industrial Area, Jodhpur,<br />
                    Rajasthan 342001, India
                  </div>

                  {/* Hotline callout numbers */}
                  <div className="flex flex-wrap gap-4 pt-2 text-white font-bold">
                    <motion.a
                      href="tel:+912915550145"
                      whileHover={{ scale: 1.03 }}
                      className="group inline-flex items-center gap-2 hover:text-sky transition-colors"
                    >
                      <span className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center text-white shrink-0 group-hover:border-transparent group-hover:bg-white group-hover:text-slate-950 transition-colors">
                        <Phone className="w-3.5 h-3.5 fill-current" />
                      </span>
                      <span className="truncate">+91 (291) 555-0145</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </motion.div>

        {/* Copyright & Policy Overlay at the bottom */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="py-5 text-center text-slate-400 text-xs sm:text-sm z-10 border-t border-white/10"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row justify-between items-center gap-3 font-medium">
            <p>© {new Date().getFullYear()} Veda Impex. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="hover:text-sky transition-colors">Privacy Policy</Link>
              <Link href="/terms-and-conditions" className="hover:text-sky transition-colors">Terms of Use</Link>
            </div>
          </div>
        </motion.div>

      </div >
    </div >
  );
}
