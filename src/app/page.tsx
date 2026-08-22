"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  ArrowUpRight
} from "lucide-react";
import RotatingCard from "../components/RotatingCard";

export default function HomePage() {
  const whySectionRef = useRef<HTMLDivElement>(null);
  const isWhyInView = useInView(whySectionRef, { once: true, amount: 0.15 });

  const stats = [
    { label: "Purity Grade Target", value: "99.5%" },
    { label: "Transit Documentation Success", value: "100%" },
    { label: "Commercial Containers Exported", value: "500+" },
    { label: "Primary Shipping Lanes", value: "24/7" }
  ];

  const differentiators = [
    {
      id: "01",
      title: "Clear From the Beginning",
      desc: "No guessing games. We state specifications, packing standards, and logistics schedules upfront so you know exactly what is loading."
    },
    {
      id: "02",
      title: "Consistency Matters",
      desc: "B2B buyers need repeatable quality. Our export coordination ensures chemical and physical parameters remain stable container after container."
    },
    {
      id: "03",
      title: "Quality With Accountability",
      desc: "Every shipment is accompanied by verified Certificates of Analysis (COA) and phytosanitary checks. We stand behind our specifications."
    },
    {
      id: "04",
      title: "Easy to Work With",
      desc: "Direct communication channels with Jodhpur-based trade coordinators. No layers of administrative delay or generic helpdesks."
    },
    {
      id: "05",
      title: "Built for Long-Term Trade",
      desc: "We focus on supply security and documentation accuracy, helping international buyers build stable supply chains for years to come."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-24 md:pt-20 md:pb-36 px-4 md:px-8 max-w-7xl mx-auto w-full overflow-hidden">
        {/* Background Decorative Accent */}
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-brand/5 rounded-full blur-3xl -z-10" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-8 z-10 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900 text-white border border-slate-800 text-xs font-semibold uppercase tracking-wider"
            >
              <MapPin className="h-4 w-4 text-sky animate-pulse" />
              <span>Jodhpur, Rajasthan | India</span>
            </motion.div>

            {/* Angled headline typography */}
            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl md:text-7xl font-black text-slate-900 tracking-tight leading-[1.05] uppercase"
              >
                VEDA IMPEX <br />
                <span className="relative inline-block mt-2">
                  <span className="absolute inset-0 bg-brand -skew-x-6 rotate-[-1.5deg]" />
                  <span className="relative text-white px-5 py-1 inline-block rotate-[-1.5deg]">
                    Trust Behind
                  </span>
                </span>
                <br />
                Every Shipment.
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-slate-600 text-base md:text-lg leading-relaxed max-w-xl font-normal"
            >
              Indian Natural Ingredients for Global Markets. We coordinate the supply of commercial quantities of premium Psyllium Husk and Senna Leaves, direct from Rajasthan to international B2B buyers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <Link
                href="/products"
                className="group bg-brand hover:bg-brand-hover text-white font-bold py-4 px-8 rounded-xl text-sm transition-all flex items-center justify-center gap-2.5 shadow-lg shadow-brand/10 hover:shadow-brand/20 uppercase tracking-wider"
              >
                Explore Products 
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="bg-sky hover:bg-sky-hover text-white font-bold py-4 px-8 rounded-xl text-sm transition-all border-2 border-slate-950 flex items-center justify-center gap-2.5 uppercase tracking-wider"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>

          {/* Hero Right Visuals - Shipping Style Option Cards */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            {/* Decors */}
            <div className="absolute inset-0 bg-radial-gradient from-brand/10 to-transparent blur-2xl -z-10" />

            <div className="w-full max-w-md space-y-6">
              {/* Card 1 */}
              <motion.div
                initial={{ opacity: 0, rotate: -3 }}
                animate={{ opacity: 1, rotate: -2 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="bg-white border-2 border-slate-900 p-6 rounded-2xl shadow-xl space-y-4 hover:rotate-0 transition-transform duration-300"
              >
                <div className="flex justify-between items-center">
                  <span className="bg-brand-light text-brand px-3 py-1 rounded text-[10px] font-bold tracking-widest uppercase">
                    ORIGIN STATEMENT
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">EXPORT READY</span>
                </div>
                <h3 className="font-black text-slate-900 text-lg uppercase">Direct Indian Sourcing</h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Products are processed and sorted at our facilities in Jodhpur. Direct container loads are routed via Mundra Port to global hubs.
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                initial={{ opacity: 0, rotate: 2 }}
                animate={{ opacity: 1, rotate: 3 }}
                transition={{ delay: 0.45, duration: 0.6 }}
                className="bg-slate-900 text-white p-6 rounded-2xl shadow-xl space-y-4 hover:rotate-0 transition-transform duration-300 border-2 border-slate-950"
              >
                <div className="flex justify-between items-center">
                  <span className="bg-sky text-white px-3 py-1 rounded text-[10px] font-bold tracking-widest uppercase">
                    QA PARAMETER
                  </span>
                  <span className="text-[10px] text-sky font-mono">LAB TESTED</span>
                </div>
                <h3 className="font-black text-brand-light text-lg uppercase">Zero Compromise Purity</h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  We supply natural ingredients complying strictly with international chemical residue limits, heavy metals tolerances, and purity specifications.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHAT WE EXPORT */}
      <section className="bg-slate-50 py-24 px-4 md:px-8 border-y border-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-xl mx-auto">
            <span className="text-[11px] font-bold text-accent uppercase tracking-widest block">
              Core Commodities
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tight">
              What We Export
            </h2>
            <div className="h-1.5 w-16 bg-brand mx-auto rounded" />
            <p className="text-slate-500 text-sm leading-relaxed">
              We specialize in the trade, quality coordination, and export documentation of two key botanical commodities native to India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Psyllium Card */}
            <RotatingCard angle={-2} className="border-2 border-slate-900 group">
              <Link href="/products/psyllium-husk" className="block p-8 space-y-6">
                <div className="aspect-[16/10] overflow-hidden rounded-xl border border-slate-200 relative bg-slate-100">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="text-[10px] bg-accent text-white px-2.5 py-0.5 rounded font-bold uppercase tracking-wider">
                      Plantago ovata
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-black text-slate-900 uppercase group-hover:text-accent transition-colors">
                      Psyllium Husk & Powder
                    </h3>
                    <ArrowUpRight className="h-5 w-5 text-slate-400 group-hover:text-accent transition-colors" />
                  </div>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    Premium whole husk and fine powders. Processed in Rajasthan to target strict purity requirements up to 99% for food and pharmaceutical applications.
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-4 flex flex-wrap gap-x-6 gap-y-2 text-[11px] text-slate-600 font-medium">
                  <div><strong>Origin:</strong> Rajasthan/Gujarat</div>
                  <div><strong>MOQ:</strong> 10 Metric Tons</div>
                  <div><strong>Form:</strong> Husk & Powder</div>
                </div>
              </Link>
            </RotatingCard>

            {/* Senna Card */}
            <RotatingCard angle={2} className="border-2 border-slate-900 group">
              <Link href="/products/senna-leaves" className="block p-8 space-y-6">
                <div className="aspect-[16/10] overflow-hidden rounded-xl border border-slate-200 relative bg-slate-100">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1564894536308-4011244a307e?q=80&w=600&auto=format&fit=crop')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="text-[10px] bg-accent text-white px-2.5 py-0.5 rounded font-bold uppercase tracking-wider">
                      Cassia angustifolia
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-black text-slate-900 uppercase group-hover:text-accent transition-colors">
                      Senna Leaves & Pods
                    </h3>
                    <ArrowUpRight className="h-5 w-5 text-slate-400 group-hover:text-accent transition-colors" />
                  </div>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    Dried senna leaves and pods. Sourced and cleaned carefully to ensure high Sennoside content and low foreign matter for global phytotherapeutic markets.
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-4 flex flex-wrap gap-x-6 gap-y-2 text-[11px] text-slate-600 font-medium">
                  <div><strong>Origin:</strong> Rajasthan, India</div>
                  <div><strong>MOQ:</strong> 12 Metric Tons</div>
                  <div><strong>Form:</strong> Leaves, Pods, Powder</div>
                </div>
              </Link>
            </RotatingCard>
          </div>
        </div>
      </section>

      {/* 3. WHY VEDA IMPEX */}
      <section ref={whySectionRef} className="py-24 px-4 md:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Section Left Title */}
          <div className="lg:col-span-4 space-y-6">
            <span className="text-[11px] font-bold text-accent uppercase tracking-widest block">
              Differentiators
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tight leading-none">
              Why <br />
              Veda Impex
            </h2>
            <div className="h-1.5 w-16 bg-brand rounded" />
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              As export trade coordinators, we connect Indian crops directly to international standards. Here is how we ensure seamless B2B transactions.
            </p>
            <div className="hidden lg:block pt-6">
              <Link 
                href="/about" 
                className="inline-flex items-center gap-2 text-xs font-bold text-accent hover:text-accent-hover uppercase tracking-widest"
              >
                Learn more about us <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Differentiators Grid (Right) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {differentiators.map((diff, idx) => (
              <motion.div
                key={diff.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isWhyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className={`bg-white border-2 border-slate-900 p-6 rounded-2xl space-y-4 hover:shadow-lg transition-shadow duration-300 relative ${
                  idx === differentiators.length - 1 ? "sm:col-span-2" : ""
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="text-accent font-mono font-bold text-sm tracking-wider">
                    {diff.id}
                  </span>
                  <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">
                    SYSTEM COMPLIANCE
                  </span>
                </div>
                <h3 className="font-black text-slate-900 text-base uppercase">{diff.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{diff.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. STATS STRIP */}
      <section className="bg-slate-900 text-white py-16 border-y-2 border-slate-950">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center lg:text-left space-y-1">
              <span className="text-3xl md:text-5xl font-black text-accent block uppercase font-display">
                {stat.value}
              </span>
              <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CLOSING CTA BAND: LET'S TALK BUSINESS */}
      <section className="bg-white py-20 px-4 md:px-8 border-b border-slate-100">
        <div className="max-w-5xl mx-auto bg-brand text-white rounded-3xl p-8 md:p-16 text-center space-y-8 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent)]" />
          
          <div className="space-y-4 max-w-2xl mx-auto relative z-10">
            <span className="text-[10px] font-bold text-slate-900 uppercase tracking-widest bg-white/90 px-3 py-1 rounded inline-block">
              International Procurement Desk
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-none">
              {"Let's Talk Business"}
            </h2>
            <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-lg mx-auto">
              Ready to request product requirements, specify volumes, or arrange quality sample coordination? Connect with our team today.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10 max-w-md mx-auto">
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-sky hover:bg-sky-hover text-white font-bold py-4 px-8 rounded-xl text-xs uppercase tracking-wider transition-colors border border-transparent text-center"
            >
              Contact Our Desk
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
