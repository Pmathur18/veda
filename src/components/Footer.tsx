"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Phone, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.05 });

  const socialLinks = [
    {
      name: "Facebook",
      href: "#",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      )
    },
    {
      name: "Instagram",
      href: "#",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      )
    },
    {
      name: "Pinterest",
      href: "#",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2C6.5 2 2 6.5 2 12c0 4.25 2.67 7.9 6.44 9.34-.1-.8-.18-2.01.03-2.88.2-.82 1.3-5.52 1.3-5.52s-.33-.66-.33-1.64c0-1.54.89-2.69 2.01-2.69 1 0 1.47.75 1.47 1.64 0 .99-.63 2.48-.96 3.86-.27 1.15.58 2.09 1.71 2.09 2.05 0 3.63-2.17 3.63-5.3 0-2.77-2-4.71-4.83-4.71-3.3 0-5.23 2.47-5.23 5.02 0 1 .38 2.07.86 2.66.1.11.11.2.08.31-.1.38-.3 1.21-.34 1.37-.06.24-.2.32-.45.2-1.63-.76-2.65-3.14-2.65-5.06 0-4.12 3-7.9 8.63-7.9 4.53 0 8.05 3.23 8.05 7.54 0 4.5-2.84 8.12-6.78 8.12-1.32 0-2.57-.69-3-1.51l-.82 3.13c-.3 1.14-1.1 2.56-1.64 3.42C10.74 21.84 11.36 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2z" />
        </svg>
      )
    },
    {
      name: "Twitter",
      href: "#",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
      )
    }
  ];

  const menuLinks = [
    { label: "Products", href: "/products" },
    { label: "About", href: "/about" },
    { label: "Quality & Process", href: "/export-process" },
    { label: "Contact", href: "/contact" }
  ];

  return (
    <div ref={footerRef} className="relative z-0 md:sticky md:bottom-0 w-full overflow-hidden bg-dark-blue">
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
        <div className="w-full max-w-7xl mx-auto pt-10 md:pt-16 px-6 sm:px-8 pb-8 md:pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start">

            {/* Column 1: Connect With Us & Socials */}
            <div className="lg:col-span-5 space-y-6 text-left">

              {/* Header Title with wrap */}
              <div className="flex flex-col text-left">
                <span className="text-2xl sm:text-3xl md:text-[38px] font-black text-white tracking-tight leading-[1.1] uppercase font-display">
                  Connect With
                </span>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-2xl sm:text-3xl md:text-[38px] font-black text-white tracking-tight leading-[1.1] uppercase font-display">
                    Us
                  </span>
                  <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white text-slate-950 flex items-center justify-center shrink-0 hover:bg-sky hover:text-white transition-colors duration-200 cursor-pointer">
                    <ArrowUpRight className="w-4 h-4 md:w-4.5 md:h-4.5 stroke-[3]" />
                  </div>
                </div>
              </div>

              {/* Social Media Circular Links */}
              <div className="flex gap-3 pt-1">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="h-9 w-9 md:h-10 md:w-10 rounded-full border border-white/20 text-white hover:text-slate-950 hover:bg-white hover:border-transparent flex items-center justify-center hover:scale-105 transition-all duration-200"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              {/* Email Callout */}
              <div className="space-y-1 pt-1">
                <span className="block text-xs sm:text-sm font-semibold text-slate-200/90 tracking-wide">
                  Or email us at
                </span>
                <a
                  href="mailto:connect@vedaimpex.com"
                  className="inline-block text-lg sm:text-xl md:text-2xl font-black text-white hover:text-sky tracking-tight transition-colors duration-200 font-display break-all sm:break-normal"
                >
                  connect@vedaimpex.com
                </a>
              </div>
            </div>

            {/* Column 2: Navigation Menu */}
            <div className="lg:col-span-3 space-y-4 md:space-y-6 text-left">
              <h3 className="text-lg md:text-xl font-black text-white uppercase tracking-wide font-display">
                Menu
              </h3>
              <ul className="space-y-3 md:space-y-4">
                {menuLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs sm:text-sm font-bold text-slate-300 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Office Coordinates */}
            <div className="lg:col-span-4 space-y-4 md:space-y-6 text-left">
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
                  <a
                    href="tel:+912915550145"
                    className="group inline-flex items-center gap-2 hover:text-sky transition-colors"
                  >
                    <span className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center text-white shrink-0 group-hover:border-transparent group-hover:bg-white group-hover:text-slate-950 transition-colors">
                      <Phone className="w-3.5 h-3.5 fill-current" />
                    </span>
                    +91 (291) 555-0145
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Copyright & Policy Overlay at the bottom */}
        <div className="py-5 text-center text-slate-400 text-xs sm:text-sm z-10 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row justify-between items-center gap-3 font-medium">
            <p>© {new Date().getFullYear()} Veda Impex. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="hover:text-sky transition-colors">Privacy Policy</Link>
              <Link href="/terms-and-conditions" className="hover:text-sky transition-colors">Terms of Use</Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
