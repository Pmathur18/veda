"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Info,
  Layers,
  ShieldCheck,
  Menu,
  X,
  ArrowRight,
  ArrowUpRight,
  Phone,
  Mail
} from "lucide-react";

const navigation = [
  { name: "Home", href: "/", icon: Home, num: "01" },
  { name: "Products", href: "/products", icon: Layers, num: "02" },
  { name: "Quality & Process", href: "/export-process", icon: ShieldCheck, num: "03" },
  { name: "About", href: "/about", icon: Info, num: "04" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showBg = scrolled;

  // Drawer animation variants
  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.4,
        ease: "easeIn" as const,
        when: "afterChildren",
      },
    },
    open: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as const,
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${showBg
        ? "bg-[#293681]/70 backdrop-blur-md border-b border-white/5 shadow-md py-4"
        : "bg-transparent border-b border-transparent shadow-none py-6"
        }`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8 flex items-center justify-between transition-all duration-300">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Veda Impex Logo"
            width={140}
            height={40}
            className="transition-all duration-300 object-contain w-auto h-8 md:h-10"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 text-xs uppercase tracking-[0.15em] transition-all duration-200 ${isActive
                  ? "text-white font-bold"
                  : "text-white font-medium hover:font-bold"
                  }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="text-white border border-white/40 hover:border-white font-medium py-2.5 px-6 rounded-none text-xs tracking-[0.15em] uppercase transition-all duration-200 hover:font-bold cursor-pointer"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="md:hidden p-2 text-white hover:text-white/80 transition-all cursor-pointer"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Full-Screen Ultra-Modern Mobile Menu Curtain */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-50 bg-[#0b1727]/98 backdrop-blur-2xl text-white flex flex-col justify-between p-6 sm:p-8 md:hidden overflow-y-auto no-scrollbar"
          >
            {/* Ambient Decorative Glow Lights */}
            <div className="absolute top-10 right-10 w-72 h-72 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#1d4ed8]/20 rounded-full blur-3xl pointer-events-none" />

            {/* Top Bar: Logo & Close Button */}
            <motion.div variants={itemVariants} className="flex items-center justify-between z-10 pt-2 pb-6 border-b border-white/10">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center">
                <Image
                  src="/logo.png"
                  alt="Veda Impex Logo"
                  width={140}
                  height={38}
                  className="h-9 w-auto object-contain"
                  priority
                />
              </Link>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white hover:text-slate-950 flex items-center justify-center transition-all cursor-pointer shadow-lg"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </motion.div>

            {/* Navigation Links List */}
            <div className="py-8 space-y-3 z-10">
              <motion.span variants={itemVariants} className="text-[10px] font-black text-sky-400 uppercase tracking-widest block mb-2 font-sans">
                // NAVIGATION LANES
              </motion.span>

              {navigation.map((item) => {
                const isActive =
                  pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

                return (
                  <motion.div key={item.name} variants={itemVariants}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`group flex items-center justify-between p-4 rounded-2xl transition-all duration-300 border ${
                        isActive
                          ? "bg-white/10 border-white/20 text-white shadow-xl"
                          : "border-transparent text-slate-300 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-xs font-bold text-sky-400 font-sans">
                          {item.num}
                        </span>
                        <span className="text-xl font-black uppercase tracking-wide font-display">
                          {item.name}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        {isActive && (
                          <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
                        )}
                        <ArrowUpRight className="h-5 w-5 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white" />
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Action Row */}
            <motion.div variants={itemVariants} className="z-10 space-y-4 pt-4 border-t border-white/10">
              {/* Primary Callout Button */}
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-gradient-to-r from-[#1d4ed8] to-[#0ea5e9] hover:from-[#1e40af] hover:to-[#0284c7] text-white font-black py-4 px-6 rounded-2xl text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-between shadow-xl cursor-pointer border border-white/20 group"
              >
                <span>Request Container Quote</span>
                <ArrowUpRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              {/* Copyright Tag */}
              <p className="text-center text-[10px] text-slate-400 tracking-wider pt-2 font-sans">
                © {new Date().getFullYear()} VEDA IMPEX • JODHPUR, INDIA
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
