"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ChevronRight,
  ShoppingBag,
  ShieldCheck,
  CheckCircle2,
  Package,
  Truck,
  Award,
  Database,
  Briefcase,
  Globe2
} from "lucide-react";
import { ProductItem } from "@/data/products-data";
import EnquiryModal from "@/components/EnquiryModal";

interface ProductDetailClientProps {
  product: ProductItem;
}

type TabType = "specs" | "applications" | "logistics";

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>("specs");

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* 1. HERO HEADER SECTION (DARK BRAND BLUE) */}
      <section className="relative w-full bg-brand text-white pb-32 pt-20 -mt-16 overflow-hidden">
        {/* Decorative Grid Line Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-[10px] font-bold text-white/50 uppercase tracking-widest mb-10 pt-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/products" className="hover:text-white transition-colors">Products</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-sky font-bold truncate max-w-[150px] sm:max-w-xs">{product.name}</span>
          </nav>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sky hover:text-white font-black text-xs uppercase tracking-widest group mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Commodities
          </Link>

          {/* Main Info Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Info Panel */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="lg:col-span-7 space-y-6 text-left"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky/10 border border-sky/20">
                <span className="w-1.5 h-1.5 rounded-full bg-sky animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-sky">{product.botanicalName}</span>
              </motion.div>

              <motion.h1 
                variants={fadeInUp}
                className="text-4xl md:text-6xl font-black tracking-tight uppercase leading-[1.1] text-white"
              >
                {product.name}
              </motion.h1>

              <motion.p 
                variants={fadeInUp}
                className="text-slate-200 text-sm md:text-base leading-relaxed max-w-2xl font-normal font-sans"
              >
                {product.overview}
              </motion.p>

              <motion.div variants={fadeInUp} className="pt-4 flex flex-wrap gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-accent hover:bg-accent-hover text-white font-bold py-3.5 px-8 rounded-none text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-lg border border-accent"
                >
                  Request Sample Spec <ShoppingBag className="h-4 w-4 text-white" />
                </button>

                <Link
                  href="/contact"
                  className="bg-transparent hover:bg-white/10 text-white font-bold py-3.5 px-8 rounded-none text-xs uppercase tracking-wider transition-all border border-white/20 text-center"
                >
                  Request Container Quote
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Product Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 relative w-full aspect-[4/3] rounded-[32px] overflow-hidden shadow-2xl border-4 border-slate-900 bg-white group"
            >
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-955/40 via-transparent to-transparent pointer-events-none" />

              {/* Floating Swell Badge */}
              <div className="absolute bottom-6 left-6 bg-brand/90 backdrop-blur-md text-white border border-white/10 px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2.5">
                <ShieldCheck className="h-5 w-5 text-sky" />
                <div className="text-left">
                  <span className="block text-[8px] font-bold uppercase tracking-wider text-slate-350">Grade Category</span>
                  <span className="block text-[11px] font-bold uppercase text-white">{product.category}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. SPECIFICATION HIGHLIGHTS DECK (OVERLAPPING CARDS) */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 relative z-25 -mt-16 mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {product.highlights.map((highlight, idx) => {
            const [label, val] = highlight.split(": ");
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
                className="bg-white border-2 border-brand p-6 rounded-none shadow-xl flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="text-left space-y-2">
                  <span className="text-[10px] font-black text-accent/80 uppercase tracking-widest block font-display">
                    {`// HIGHLIGHT 0${idx + 1}`}
                  </span>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider leading-none">
                    {label}
                  </h4>
                  <p className="text-lg font-black text-brand uppercase tracking-tight group-hover:text-accent transition-colors">
                    {val || label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 3. DYNAMIC INTERACTIVE CONTENT AREA (TABS SWITCHER) */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 mb-24">
        <div className="bg-white border-2 border-brand rounded-none p-6 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Section Indicator */}
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-slate-100 pb-8 mb-10 gap-6">
            <div className="space-y-2 text-left">
              <span className="text-[10px] font-bold uppercase text-accent tracking-widest block">// WHOLESALE COMPLIANCE SHEET</span>
              <h2 className="text-2xl md:text-4xl font-black text-brand uppercase tracking-tight">Technical Profile</h2>
            </div>

            {/* Tabs Control Row */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: "specs", label: "Spec Sheets", icon: Database },
                { id: "applications", label: "Industrial Uses", icon: Briefcase },
                { id: "logistics", label: "Logistics Details", icon: Globe2 }
              ].map((tab) => {
                const Icon = tab.icon;
                const isSelected = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as TabType)}
                    className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      isSelected
                        ? "bg-brand text-white"
                        : "bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interactive Content Panels */}
          <div className="relative min-h-[350px]">
            <AnimatePresence mode="wait">
              {activeTab === "specs" && (
                <motion.div
                  key="specs"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-2 text-brand">
                    <Database className="h-5 w-5 text-accent" />
                    <h3 className="text-lg font-black uppercase tracking-tight">Official Specification Matrix</h3>
                  </div>

                  <div className="border-2 border-brand rounded-none overflow-hidden bg-white shadow-sm w-full overflow-x-auto no-scrollbar">
                    <table className="w-full border-collapse text-left text-xs md:text-sm min-w-[600px]">
                      <thead>
                        <tr className="bg-brand text-white border-b-2 border-brand-hover">
                          {product.specTable.headers.map((header, idx) => (
                            <th key={idx} className="p-4 font-bold uppercase tracking-wider text-[10px]">
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 font-medium">
                        {product.specTable.rows.map((row, rowIdx) => (
                          <tr key={rowIdx} className="hover:bg-slate-50/50">
                            {row.map((cell, cellIdx) => (
                              <td 
                                key={cellIdx} 
                                className={`p-4 text-xs ${
                                  cellIdx === 0 
                                    ? "text-brand uppercase tracking-wide text-[10px] font-bold" 
                                    : "text-slate-600"
                                }`}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              )}

              {activeTab === "applications" && (
                <motion.div
                  key="applications"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6 text-left"
                >
                  <div className="flex items-center gap-2 text-brand">
                    <Briefcase className="h-5 w-5 text-accent" />
                    <h3 className="text-lg font-black uppercase tracking-tight">Approved Industry Applications</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {product.applications.map((app, idx) => (
                      <div key={idx} className="border border-brand-light p-6 bg-slate-50/50 space-y-3 relative group hover:bg-white hover:shadow-lg transition-all duration-300">
                        <div className="h-8 w-8 rounded-full bg-accent/10 flex items-center justify-center text-accent text-xs font-bold font-display">
                          {`0${idx + 1}`}
                        </div>
                        <h4 className="text-xs font-bold text-brand uppercase tracking-wider">
                          {app.title}
                        </h4>
                        <p className="text-slate-550 text-xs leading-relaxed">
                          {app.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === "logistics" && (
                <motion.div
                  key="logistics"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left"
                >
                  {/* Left Column: Packing & Loading */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex items-center gap-2 text-brand">
                      <Package className="h-5 w-5 text-accent" />
                      <h3 className="text-lg font-black uppercase tracking-tight">Standard Packaging Parameters</h3>
                    </div>

                    <ul className="space-y-4">
                      {product.logistics.packaging.map((pkg, idx) => (
                        <li key={idx} className="flex gap-3 items-start text-xs">
                          <CheckCircle2 className="h-4.5 w-4.5 text-accent shrink-0 mt-0.5" />
                          <span className="text-slate-650 leading-relaxed font-medium">{pkg}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="border-t border-slate-100 pt-6">
                      <div className="flex items-center gap-2 text-brand mb-4">
                        <Truck className="h-5 w-5 text-accent" />
                        <h4 className="text-sm font-bold uppercase tracking-wide">FCL Container Loads</h4>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {product.logistics.capacity.map((cap, idx) => {
                          const [ft, mt] = cap.split(": ");
                          return (
                            <div key={idx} className="bg-slate-50 p-4 border border-slate-200">
                              <span className="block text-[8px] font-black text-slate-400 uppercase tracking-widest">{ft}</span>
                              <span className="block text-sm font-black text-brand mt-1">{mt || ft}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Compliance */}
                  <div className="lg:col-span-5 bg-slate-50 border border-slate-200 p-6 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-brand">
                        <Award className="h-5 w-5 text-accent" />
                        <h3 className="text-base font-black uppercase tracking-tight">Export Documentation</h3>
                      </div>
                      <p className="text-slate-500 text-xs leading-relaxed">
                        VEDA IMPEX manages end-to-end clearing and quality certificates required at international ports:
                      </p>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {product.logistics.compliance.map((comp, idx) => (
                          <div 
                            key={idx} 
                            className="bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-[9px] font-bold text-brand uppercase tracking-wider flex items-center gap-1.5"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                            {comp}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-slate-200 pt-6 mt-6">
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Quality Control Desk</span>
                      <p className="text-slate-500 text-[10px] leading-relaxed italic">
                        * All cargo is fumigated and phytosanitary cleared at Mundra Port prior to vessel loading.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 4. CONTACT / CONSULTATION CTA */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 mb-24">
        <div className="bg-brand text-white rounded-none p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          {/* Decorative backdrop */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl" />

          <div className="space-y-3 relative z-10">
            <span className="text-[10px] font-black text-sky tracking-widest block uppercase">// DISCUSS SAMPLES & DOCUMENTATION</span>
            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight">Initiate Bulk Enquiry</h3>
            <p className="text-slate-250 text-xs max-w-xl leading-relaxed font-sans">
              We process custom mesh specifications and packing configurations to align perfectly with your technical specification sheet. Request product samples for laboratory evaluation.
            </p>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-white hover:bg-slate-100 text-brand font-black py-4 px-8 rounded-none text-xs uppercase tracking-wider transition-all shrink-0 cursor-pointer shadow-lg relative z-10 border border-white"
          >
            Submit Enquiry Sheet
          </button>
        </div>
      </section>

      {/* Enquiry Modal */}
      <EnquiryModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        initialProduct={product.name} 
      />
    </div>
  );
}
