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
  ArrowRight
} from "lucide-react";

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Products", href: "/products", icon: Layers },
  { name: "Quality & Process", href: "/export-process", icon: ShieldCheck },
  { name: "About", href: "/about", icon: Info },
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
              className="fixed right-0 top-0 bottom-0 w-80 max-w-full bg-white shadow-2xl z-50 md:hidden p-6 flex flex-col overflow-y-auto no-scrollbar border-l border-white/5"
            >
              <div className="flex items-center justify-between mb-8">
                <Link href="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
                  <Image
                    src="/logo.png"
                    alt="Veda Impex Logo"
                    width={130}
                    height={36}
                    className="h-9 w-auto object-contain"
                    priority
                  />
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-slate-500 hover:text-slate-900 rounded-full cursor-pointer"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="flex-1 space-y-4">
                {navigation.map((item) => {
                  const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 text-sm font-bold uppercase tracking-[0.1em] transition-all rounded-xl ${isActive
                        ? "text-[#293681] bg-slate-100"
                        : "text-slate-600 hover:text-[#293681] hover:bg-slate-50"
                        }`}
                    >
                      <Icon className={`h-5 w-5 ${isActive ? "text-[#293681]" : "text-slate-500"}`} />
                      {item.name}
                    </Link>
                  );
                })}
              </div>

              <div className="mt-auto space-y-4">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full bg-[#293681] text-white font-bold py-3.5 px-4 rounded-none text-center text-xs tracking-[0.1em] uppercase transition-all block cursor-pointer border border-[#293681] hover:bg-slate-900"
                >
                  Get Started
                </Link>
                <p className="text-center text-xs text-slate-400">
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
