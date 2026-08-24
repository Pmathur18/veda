"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone } from "lucide-react";

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.15 });

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "#",
      icon: (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      )
    },
    {
      name: "Twitter",
      href: "#",
      icon: (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
      )
    }
  ];

  return (
    <div ref={footerRef} className="relative z-0 sticky bottom-0 w-full overflow-hidden bg-[#071B3A] text-neutral-400">
      {/* Footer Content */}
      <footer className="w-full max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-8">

        {/* Large Closing CTA line - scales & fades in */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center border-b border-neutral-900 pb-12 mb-12"
        >
          <Link href="/contact" className="inline-flex items-center gap-4 group">
            <h2 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tight transition-colors group-hover:text-brand">
              {"Let's Talk Business "}
              <span className="text-brand group-hover:text-white">→</span>
            </h2>
          </Link>
        </motion.div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 border-t border-neutral-900 pt-12 text-sm">
          {/* Logo Column */}
          <div className="space-y-4">
            <Link href="/" className="inline-block bg-white p-2 rounded-2xl shadow-sm">
              <Image src="/logo.png" alt="Veda Impex Logo" width={130} height={36} className="h-9 w-auto object-contain" />
            </Link>
            <p className="text-xs text-neutral-500 leading-relaxed max-w-xs">
              VEDA IMPEX — Trust Behind Every Shipment. India-based export coordination of premium Psyllium Husk and Senna Leaves to global B2B buyers.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">What We Export</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/products/psyllium-husk" className="hover:text-brand transition-colors">Psyllium Husk & Powder</Link></li>
              <li><Link href="/products/senna-leaves" className="hover:text-brand transition-colors">Senna Leaves & Pods</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">Quality & Standards</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/export-process" className="hover:text-brand transition-colors">Export Process Timeline</Link></li>
              <li><Link href="/about" className="hover:text-brand transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Legal Pages */}
          <div className="space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">Business Channels</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/contact" className="hover:text-brand transition-colors">Contact Us</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-brand transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar - simplest reveal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px]"
        >
          <p>© {new Date().getFullYear()} Veda Impex. Registered Export House, Jodhpur, Rajasthan, India.</p>

          {/* Socials - Spring Scale Bounce */}
          <div className="flex gap-4">
            {socialLinks.map((social) => {
              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 350, damping: 10 }}
                  className="h-8 w-8 rounded-full border border-neutral-800 text-neutral-500 hover:text-neutral-950 hover:bg-brand hover:border-transparent flex items-center justify-center transition-colors"
                  title={social.name}
                >
                  {social.icon}
                </motion.a>
              );
            })}
          </div>
        </motion.div>

      </footer >
    </div >
  );
}
