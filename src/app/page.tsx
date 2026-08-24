"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  FileText,
  CheckCircle2,
  ShieldCheck,
  MessageSquare,
  Calendar
} from "lucide-react";
import RotatingCard from "../components/RotatingCard";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

export default function HomePage() {
  const stats = [
    { label: "Purity Grade Target", value: "99.5%" },
    { label: "Transit Documentation Success", value: "100%" },
    { label: "Commercial Containers Exported", value: "500+" },
    { label: "Primary Shipping Lanes", value: "24/7" }
  ];

  const stickyScrollContent = [
    {
      title: "Clear From the Beginning",
      description: "No guessing games. We state specifications, packing standards, and logistics schedules upfront so you know exactly what is loading.",
      content: (
        <div className="h-full w-full bg-gradient-to-br from-cyan-500 to-emerald-500 flex flex-col items-center justify-center text-white p-6 text-center space-y-3">
          <FileText className="h-12 w-12 text-white animate-pulse" />
          <span className="text-sm font-bold uppercase tracking-wider">Specifications Registry</span>
          <span className="text-xs text-white/80">99% Purity Whole Husk Target confirmed</span>
        </div>
      )
    },
    {
      title: "Consistency Matters",
      description: "B2B buyers need repeatable quality. Our export coordination ensures chemical and physical parameters remain stable container after container.",
      content: (
        <div className="h-full w-full bg-gradient-to-br from-pink-500 to-indigo-500 flex flex-col items-center justify-center text-white p-6 text-center space-y-3">
          <CheckCircle2 className="h-12 w-12 text-white" />
          <span className="text-sm font-bold uppercase tracking-wider">Quality Uniformity</span>
          <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
            <div className="bg-white h-full w-[99.8%]" />
          </div>
          <span className="text-xs text-white/80">99.8% Batch Consistency Rating</span>
        </div>
      )
    },
    {
      title: "Quality With Accountability",
      description: "Every shipment is accompanied by verified Certificates of Analysis (COA) and phytosanitary checks. We stand behind our specifications.",
      content: (
        <div className="h-full w-full flex flex-col items-center justify-center text-white p-6 text-center space-y-3" style={{ background: "linear-gradient(to bottom right, #f97316, #eab308)" }}>
          <ShieldCheck className="h-12 w-12 text-white" />
          <span className="text-sm font-bold uppercase tracking-wider">COA Verified Desk</span>
          <span className="text-xs text-white/80">Lab Testing: Approved for EU & US entry</span>
        </div>
      )
    },
    {
      title: "Easy to Work With",
      description: "Direct communication channels with Jodhpur-based trade coordinators. No layers of administrative delay or generic helpdesks.",
      content: (
        <div className="h-full w-full bg-gradient-to-br from-emerald-500 to-blue-600 flex flex-col items-center justify-center text-white p-6 text-center space-y-3">
          <MessageSquare className="h-12 w-12 text-white" />
          <span className="text-sm font-bold uppercase tracking-wider">Direct Liaison Desk</span>
          <span className="text-xs text-white/80">Typical Response Time: &lt; 15 mins</span>
        </div>
      )
    },
    {
      title: "Built for Long-Term Trade",
      description: "We focus on supply security and documentation accuracy, helping international buyers build stable supply chains for years to come.",
      content: (
        <div className="h-full w-full bg-gradient-to-br from-purple-500 to-pink-500 flex flex-col items-center justify-center text-white p-6 text-center space-y-3">
          <Calendar className="h-12 w-12 text-white" />
          <span className="text-sm font-bold uppercase tracking-wider">Stable Supply Lanes</span>
          <span className="text-xs text-white/80">Year-round crop allocation planning</span>
        </div>
      )
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


            {/* Angled headline typography */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl md:text-7xl font-black text-slate-900 tracking-tight leading-[1.15] uppercase"
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
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="bg-white border-2 border-slate-900 p-6 rounded-2xl shadow-xl space-y-4 transition-transform duration-300 text-left"
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
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.6 }}
                className="bg-slate-900 text-white p-6 rounded-2xl shadow-xl space-y-4 border-2 border-slate-950 text-left"
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
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto w-full">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tight">
            Why Veda Impex
          </h2>
          <div className="h-1.5 w-16 bg-brand mx-auto rounded" />
          <p className="text-slate-500 text-sm leading-relaxed max-w-xl mx-auto">
            As export trade coordinators, we connect Indian crops directly to international standards. Here is how we ensure seamless B2B transactions.
          </p>
        </div>

        <div className="max-w-7xl mx-auto border-2 border-slate-900 rounded-3xl overflow-hidden shadow-2xl bg-slate-950">
          <StickyScroll content={stickyScrollContent} />
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
