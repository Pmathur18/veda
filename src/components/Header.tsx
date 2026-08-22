"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Info,
  Layers,
  TrendingUp,
  Mail,
  Menu,
  X
} from "lucide-react";

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Products", href: "/products", icon: Layers },
  { name: "Export Process", href: "/export-process", icon: TrendingUp },
  { name: "About", href: "/about", icon: Info },
  { name: "Contact", href: "/contact", icon: Mail },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 py-4 px-4 md:px-8">
      <div
        className={`mx-auto transition-all duration-300 bg-white border border-neutral-200/50 shadow-md ${scrolled
          ? "rounded-full py-2.5 px-4 md:px-6 max-w-5xl shadow-lg bg-white/95 backdrop-blur-md"
          : "rounded-3xl py-3 px-4 md:py-4 md:px-8 max-w-7xl"
          } flex items-center justify-between`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <img
            src="/logo.png"
            alt="Veda Impex Logo"
            className={`transition-all duration-300 object-contain ${
              scrolled ? "h-9 md:h-11" : "h-11 md:h-14"
            }`}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-1.5 ${isActive
                  ? "text-brand bg-brand-light/30"
                  : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50"
                  }`}
              >
                <Icon className="h-4 w-4" />
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="bg-sky hover:bg-sky-hover text-white font-bold py-2.5 px-5 rounded-full text-xs transition-all tracking-wide uppercase cursor-pointer"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="md:hidden p-2 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-full transition-all cursor-pointer"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-neutral-950/40 backdrop-blur-sm z-50 md:hidden"
            />
            {/* Sidebar drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0.15 }}
              className="fixed right-0 top-0 bottom-0 w-80 max-w-full bg-white shadow-2xl z-50 md:hidden p-6 flex flex-col overflow-y-auto no-scrollbar"
            >
              <div className="flex items-center justify-between mb-8">
                <Link href="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
                  <img
                    src="/logo.png"
                    alt="Veda Impex Logo"
                    className="h-10 object-contain"
                  />
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-neutral-500 hover:text-neutral-800 hover:bg-neutral-50 rounded-full cursor-pointer"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="flex-1 space-y-2">
                {navigation.map((item) => {
                  const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-base font-semibold transition-all ${isActive
                        ? "bg-brand-light/35 text-brand"
                        : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
                        }`}
                    >
                      <Icon className="h-5 w-5" />
                      {item.name}
                    </Link>
                  );
                })}
              </div>

              <div className="mt-auto space-y-4">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full bg-sky hover:bg-sky-hover text-white font-bold py-3.5 px-4 rounded-2xl text-center text-sm transition-all block cursor-pointer"
                >
                  Contact Us
                </Link>
                <p className="text-center text-xs text-neutral-400">
                  © 2026 Veda Impex. All rights reserved.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
