"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Send, MapPin, Mail, Phone, ArrowRight } from "lucide-react";

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.15 });

  const offices = [
    {
      city: "Jaipur HQ",
      role: "Corporate Finance & Trade Desk",
      address: "B-12, Industrial Area Phase II, Mansarovar, Jaipur, RJ 302020",
      phone: "+91 141 555-0145"
    },
    {
      city: "Mumbai Operations",
      role: "Port Liaison & Customs Desk",
      address: "BKC Trade Tower, Level 4, Bandra Kurla Complex, Mumbai, MH 400051",
      phone: "+91 22 5555-0192"
    }
  ];

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
    },
    {
      name: "Facebook",
      href: "#",
      icon: (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      )
    },
    {
      name: "Instagram",
      href: "#",
      icon: (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      )
    }
  ];

  return (
    <div ref={footerRef} className="relative z-0 md:sticky md:bottom-0 w-full overflow-hidden bg-[#071B3A] text-neutral-400">
      {/* Footer Content */}
      <footer className="w-full max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-8">
        
        {/* Large Closing CTA line - scales & fades in */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center border-b border-neutral-900 pb-12 mb-12"
        >
          <Link href="/contact-us" className="inline-flex items-center gap-4 group">
            <h2 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tight transition-colors group-hover:text-[#1261C9]">
              Let's Move Your Cargo <span className="text-[#1261C9] group-hover:text-white">→</span>
            </h2>
          </Link>
        </motion.div>

        {/* Office Address Cards - Fade + Stagger */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {offices.map((office, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * idx, duration: 0.6, ease: "easeOut" }}
              className="bg-[#0B3D91]/60 border border-neutral-850 p-6 rounded-3xl space-y-3 shadow-lg"
            >
              <div className="flex justify-between items-center">
                <span className="text-[#1261C9] font-bold text-xs uppercase tracking-widest block">
                  {office.city}
                </span>
                <span className="text-[10px] text-neutral-500 font-semibold uppercase">{office.role}</span>
              </div>
              
              <div className="flex gap-2.5 items-start text-xs text-neutral-300">
                <MapPin className="h-4 w-4 text-[#1261C9] shrink-0 mt-0.5" />
                <p className="leading-relaxed">{office.address}</p>
              </div>

              <div className="flex gap-2.5 items-center text-xs text-neutral-300">
                <Phone className="h-4 w-4 text-neutral-500 shrink-0" />
                <a href={`tel:${office.phone.replace(/\s+/g, '')}`} className="hover:text-[#1261C9] font-semibold transition-colors">
                  {office.phone}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 border-t border-neutral-900 pt-12 text-sm">
          {/* Logo Column */}
          <div className="space-y-4">
            <Link href="/" className="inline-block bg-white p-2 rounded-2xl shadow-sm">
              <img src="/logo.png" alt="Veda Impex Logo" className="h-9 w-auto object-contain" />
            </Link>
            <p className="text-xs text-neutral-500 leading-relaxed max-w-xs">
              Direct ocean routes, priority aviation logistics, and custom compliance brokerage. Connecting global commercial lanes.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/services" className="hover:text-[#1261C9] transition-colors">Sea Freight</Link></li>
              <li><Link href="/services" className="hover:text-[#1261C9] transition-colors">Air Freight</Link></li>
              <li><Link href="/services" className="hover:text-[#1261C9] transition-colors">Road Logistics</Link></li>
              <li><Link href="/services" className="hover:text-[#1261C9] transition-colors">Custom Brokerage</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/legal-documents" className="hover:text-[#1261C9] transition-colors">Clearance Docs</Link></li>
              <li><Link href="/products" className="hover:text-[#1261C9] transition-colors">Trade Goods</Link></li>
              <li><Link href="/blog" className="hover:text-[#1261C9] transition-colors">Blog & Insights</Link></li>
            </ul>
          </div>

          {/* Legal Pages */}
          <div className="space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/terms-and-conditions" className="hover:text-[#1261C9] transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-[#1261C9] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/cookies-policy" className="hover:text-[#1261C9] transition-colors">Cookies Policy</Link></li>
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
          <p>© {new Date().getFullYear()} Veda Impex. Direct trade compliance log hubs.</p>
          
          {/* Socials - Spring Scale Bounce */}
          <div className="flex gap-4">
            {socialLinks.map((social) => {
              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 350, damping: 10 }}
                  className="h-8 w-8 rounded-full border border-neutral-800 text-neutral-500 hover:text-neutral-950 hover:bg-[#1261C9] hover:border-transparent flex items-center justify-center transition-colors"
                  title={social.name}
                >
                  {social.icon}
                </motion.a>
              );
            })}
          </div>
        </motion.div>

      </footer>
    </div>
  );
}
