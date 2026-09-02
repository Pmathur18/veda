"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  Check,
  MapPin,
  MessageSquare,
  ClipboardCheck,
  RotateCcw,
  TrendingUp,
  Target,
  Compass,
  Award,
  ChevronDown,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

export default function AboutPage() {
  const [activeAdvantage, setActiveAdvantage] = useState(0);
  const [isAdvantagePaused, setIsAdvantagePaused] = useState(false);

  const pillars = [
    {
      num: "01",
      title: "Integrity in Every Conversation",
      desc: "Clear, direct, and transparent communication from initial price quote to final container clearance. We only commit to what we can execute.",
      icon: MessageSquare
    },
    {
      num: "02",
      title: "Responsibility in Commitments",
      desc: "Meticulous oversight of laboratory testing (COA), moisture protection, packaging durability, and export documentation.",
      icon: ClipboardCheck
    },
    {
      num: "03",
      title: "Consistency in Delivery",
      desc: "Delivering the exact benchmark quality and parameters on repeat orders as established on the first successful shipment.",
      icon: RotateCcw
    },
    {
      num: "04",
      title: "Built for Long-Term Trade",
      desc: "We measure our success not by one-off transactions, but by international buyers who comfortably return to us order after order.",
      icon: TrendingUp
    }
  ];

  const advantages = [
    {
      id: 0,
      badge: "Direct Proximity",
      title: "Proximity to Prime Crop Belts",
      subtitle: "Western Rajasthan & Regional Sourcing Belts",
      desc: "Western Rajasthan and the surrounding regions produce the world's highest-grade crops of Psyllium (Plantago ovata) and Senna (Cassia angustifolia).",
      metric: "World's Highest Grade Belts",
      image: "/ChatGPT Image Aug 26, 2026, 06_56_03 PM.png"
    },
    {
      id: 1,
      badge: "Raw Material Control",
      title: "Early Lot Selection & Quality Control",
      subtitle: "Direct Mandi & Regional Hub Access",
      desc: "Close proximity to regional trade hubs allows early selection of prime raw material lots, minimizing transport degradation and ensuring freshness.",
      metric: "Zero Transport Degradation",
      image: "/quality-control-lab.jpg"
    },
    {
      id: 2,
      badge: "Streamlined Logistics",
      title: "Fast Western Port Connectivity",
      subtitle: "Mundra, Kandla & ICD Jodhpur Ports",
      desc: "Direct transport connectivity to major western Indian ports (Mundra, Kandla, and ICD Jodhpur) ensures fast, efficient container dispatches to global destinations.",
      metric: "Rapid Container Clearance",
      image: "/senna-leaves.jpg"
    }
  ];

  const regulatoryBadges = [
    {
      badge: "DGFT REGISTERED",
      title: "Importer Exporter Code (IEC)",
      desc: "Officially registered with the Directorate General of Foreign Trade (DGFT), Ministry of Commerce & Industry, Govt. of India."
    },
    {
      badge: "APEDA CERTIFIED",
      title: "Export Development Authority",
      desc: "Registered member of APEDA for scheduled agricultural product exports, adhering to strict export quality standards."
    },
    {
      badge: "FSSAI COMPLIANT",
      title: "Food Safety & Standards",
      desc: "Licensed by Food Safety & Standards Authority of India (FSSAI) for hygienic processing and food-grade export handling."
    },
    {
      badge: "LEGAL ENTITY",
      title: "GST & MSME Registered",
      desc: "Fully registered and compliant Indian business entity with active GSTIN and MSME certification for global commercial trade."
    }
  ];




  // Auto-scroll / Auto-rotate effect for Strategic Sourcing Advantage section
  useEffect(() => {
    if (isAdvantagePaused) return;
    const timer = setInterval(() => {
      setActiveAdvantage((prev) => (prev + 1) % advantages.length);
    }, 4000); // cycle every 4 seconds

    return () => clearInterval(timer);
  }, [isAdvantagePaused, advantages.length]);

  return (
    <div className="bg-white text-slate-900 min-h-screen font-sans">
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[55vh] md:min-h-[62vh] flex flex-col items-center justify-center overflow-hidden -mt-16 mb-10">
        <Image
          src="/ChatGPT Image Aug 26, 2026, 06_56_03 PM.png"
          alt="VEDA IMPEX About Us Banner"
          fill
          priority
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-slate-950/65 z-10" />

        {/* Hero Content Overlay */}
        <div className="w-full max-w-5xl mx-auto px-6 md:px-8 py-20 md:py-28 relative z-20 flex flex-col items-center justify-center text-center text-white space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight uppercase max-w-4xl leading-tight">
            We Believe Good Business Starts With Trust
          </h1>
          <p className="text-slate-200 text-sm md:text-base leading-relaxed max-w-3xl font-normal font-sans mx-auto">
            Connecting international buyers with premium Indian natural ingredients through absolute transparency, specification integrity, and seamless export execution.
          </p>
        </div>
      </section>

      {/* 2. BRAND ORIGIN & STORY (HUMAN & PROFESSIONAL) */}
      <section className="py-14 md:py-20 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="bg-white border border-slate-200/80 rounded-[32px] p-8 md:p-12 shadow-sm relative overflow-hidden space-y-8">
          <h2 className="text-2xl sm:text-3xl md:text-4.5xl font-extrabold text-slate-900 leading-[1.25] tracking-tight max-w-5xl justify center">
            Building a Reliable Bridge Between India and Global Markets
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center pt-2">
            <div className="lg:col-span-7 space-y-5 text-slate-600 text-sm md:text-base leading-relaxed">
              <p className="font-medium text-slate-900">
                Based out of Jodhpur, Rajasthan, VEDA IMPEX was founded with a straightforward objective: to make cross-border sourcing from India clear, dependable, and completely hassle-free for commercial buyers worldwide.
              </p>
              <p>
                Our portfolio focuses on high-demand, world-class Indian commodities—starting with <strong className="text-slate-900">Psyllium Husk, Psyllium Powder, and Senna Leaves</strong>—products where India holds a primary position in global supply. To us, exporting is far more than shipping freight across borders; it is an absolute commitment to understanding exact buyer specifications, taking ownership of quality details, and delivering on every commercial promise we make.
              </p>
              <p>
                We are building VEDA IMPEX around a long-term vision—carefully expanding our export offerings while ensuring that our core operational values remain uncompromised.
              </p>
            </div>

            {/* Right Column: Global Trade Visual Showcase */}
            <div className="lg:col-span-5 relative w-full h-[280px] sm:h-[340px] lg:h-[360px] rounded-3xl overflow-hidden border border-slate-200/90 shadow-lg group">
              <Image
                src="/global-trade-bridge.jpg"
                alt="VEDA IMPEX Global Maritime Export Operations"
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/80 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/20 text-white flex items-center justify-between shadow-md">
                <div>
                  <span className="block text-[10px] font-mono uppercase tracking-widest text-[#95CCDD]">Global Logistics</span>
                  <span className="text-xs font-bold text-white">India to Worldwide Ports</span>
                </div>
                <span className="text-[10px] font-bold bg-[#4274D9] text-white px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Active
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR CORE PILLARS (THE TRADE LOOP & TRUST FRAMEWORK) */}
      <section className="relative py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto w-full overflow-hidden rounded-[36px] my-6 bg-white border border-slate-200/80 shadow-sm">
        {/* Subtle Blueprint Grid Pattern Backdrop */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_80%,transparent_100%)] opacity-75 pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

          {/* LEFT COLUMN: Title/Intro + Highlighted Card 1 */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-[38px] font-black text-[#1c255b] tracking-tight leading-[1.15] font-display">
                The Trade Loop: <br />
                <span className="text-[#293681]">Engineering for Velocity</span>
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                In high-reliability global commodity trade, trust isn&apos;t just a promise—it is the operational engine that powers repeat partnerships. We design every stage from lot testing to export logistics to function seamlessly in real time.
              </p>
            </div>

            {/* Bottom Card (Highlighted with Blue Border) */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border-2 border-[#4274D9] shadow-sm hover:shadow-md transition-all duration-300 space-y-3">
              <h3 className="text-lg sm:text-xl font-bold text-[#1c255b] tracking-tight font-display">
                Integrity in Every Conversation
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                Clear, direct, and transparent communication from initial price quote to final container clearance. We commit strictly to parameters we can execute.
              </p>
            </div>
          </div>

          {/* MIDDLE COLUMN: Top Card 2 + Bottom Highlighted Card 3 */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            {/* Top Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 space-y-3 flex-1 flex flex-col justify-center">
              <h3 className="text-lg sm:text-xl font-bold text-[#1c255b] tracking-tight font-display">
                Responsibility in Commitments
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                Meticulous oversight of physical &amp; microbiological laboratory testing (COA), moisture protection, packaging durability, and export documentation.
              </p>
            </div>

            {/* Bottom Card (Highlighted with Blue Border) */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border-2 border-[#4274D9] shadow-sm hover:shadow-md transition-all duration-300 space-y-3 flex-1 flex flex-col justify-center">
              <h3 className="text-lg sm:text-xl font-bold text-[#1c255b] tracking-tight font-display">
                Embedded Trust &amp; Governance
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                Delivering exact benchmark quality parameters on repeat orders. Statutory compliance (DGFT, APEDA, FSSAI) is built into every single iteration.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: Top Card 4 + Bottom Card 5 */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            {/* Top Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 space-y-3 flex-1 flex flex-col justify-center">
              <h3 className="text-lg sm:text-xl font-bold text-[#1c255b] tracking-tight font-display">
                Predictive Export Execution
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                The methodology shifts from reactive troubleshooting to proactive coordination by anticipating port clearances, container sealing, and third-party inspection needs.
              </p>
            </div>

            {/* Bottom Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 space-y-3 flex-1 flex flex-col justify-center">
              <h3 className="text-lg sm:text-xl font-bold text-[#1c255b] tracking-tight font-display">
                Built for Long-Term Scalability
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                The framework is engineered to support recurring container shipments without compromise. We measure success by international buyers who return order after order.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. STRATEGIC SOURCING ADVANTAGE (WHY JODHPUR?) - AUTO SCROLLING SECTION */}
      <section
        className="py-14 md:py-20 px-6 md:px-12 max-w-7xl mx-auto w-full"
        onMouseEnter={() => setIsAdvantagePaused(true)}
        onMouseLeave={() => setIsAdvantagePaused(false)}
      >
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-8">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
            Strategic Sourcing Advantage <br />
            <span className="italic font-normal text-amber-700 font-display">Rooted at the Source of Quality</span>
          </h2>
          <p className="text-slate-600 text-xs md:text-sm max-w-xl mx-auto">
            Operating from Jodhpur gives VEDA IMPEX a distinct operational edge in the agro-export market:
          </p>
        </div>

        {/* Auto-scrolling Showcase Card with AnimatePresence */}
        <div className="relative overflow-hidden min-h-[360px] md:min-h-[380px]">
          <AnimatePresence mode="wait">
            {advantages.map((adv) => {
              if (adv.id !== activeAdvantage) return null;
              return (
                <motion.div
                  key={adv.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="bg-white border border-slate-200 rounded-[32px] p-6 md:p-10 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                  <div className="lg:col-span-6 space-y-6 text-left">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
                      <span className="text-xs font-mono font-bold text-amber-700 uppercase tracking-widest">
                        Advantage 0{adv.id + 1} • {adv.badge}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3.5xl font-black text-slate-900 tracking-tight leading-tight">
                      {adv.title}
                    </h3>

                    <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                      {adv.desc}
                    </p>

                    <div className="pt-3 flex items-center justify-between">
                      <div>
                        <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Strategic Operational Edge</span>
                        <span className="text-sm font-extrabold text-amber-700">{adv.metric}</span>
                      </div>

                      {/* Auto progress bar */}
                      <div className="flex items-center gap-1.5">
                        {advantages.map((_, i) => (
                          <span
                            key={i}
                            className={`h-1.5 rounded-full transition-all duration-300 ${
                              activeAdvantage === i ? "w-6 bg-amber-600" : "w-1.5 bg-slate-200"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-6 relative h-[280px] md:h-[340px] rounded-2xl overflow-hidden border border-slate-200 group">
                    <Image
                      src={adv.image}
                      alt={adv.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-slate-950/20" />
                    <div className="absolute bottom-4 right-4 bg-slate-900/90 text-white text-xs font-sans px-3.5 py-1.5 rounded-lg backdrop-blur-sm">
                      {adv.badge}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Manual Arrow Controls & Counter Below Showcase */}
        <div className="flex items-center justify-center gap-4 pt-6">
          <button
            onClick={() => setActiveAdvantage((prev) => (prev > 0 ? prev - 1 : advantages.length - 1))}
            className="w-10 h-10 rounded-full bg-white border border-slate-200 hover:bg-slate-100 hover:border-slate-300 text-slate-700 flex items-center justify-center transition-all shadow-sm hover:scale-105 cursor-pointer"
            aria-label="Previous advantage"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-2 px-3.5 py-1.5 bg-white border border-slate-200 rounded-full text-xs font-mono font-bold text-slate-700 shadow-sm">
            <span className="text-amber-700">0{activeAdvantage + 1}</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-400">0{advantages.length}</span>
          </div>

          <button
            onClick={() => setActiveAdvantage((prev) => (prev < advantages.length - 1 ? prev + 1 : 0))}
            className="w-10 h-10 rounded-full bg-white border border-slate-200 hover:bg-slate-100 hover:border-slate-300 text-slate-700 flex items-center justify-center transition-all shadow-sm hover:scale-105 cursor-pointer"
            aria-label="Next advantage"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </section>

      {/* 5. VISION & MISSION */}
      <section className="py-14 md:py-20 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="space-y-4 mb-8 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
            Core Objective <br />
            <span className="italic font-normal text-amber-700 font-display">Vision & Mission</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <div className="bg-slate-900 text-white border border-slate-800 rounded-[32px] p-8 md:p-10 shadow-lg space-y-6 flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-white/10 text-amber-300 border border-white/20 px-3.5 py-1 rounded-full text-xs font-sans font-bold uppercase tracking-wider">
                <Compass className="h-3.5 w-3.5 text-amber-400" />
                Our Vision
              </div>
              <h3 className="text-2xl font-extrabold text-white leading-snug">
                Benchmark for Trade Reliability & Specification Accuracy
              </h3>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                To build VEDA IMPEX into a globally respected Indian export brand known not merely for volume, but as the benchmark for trade reliability, specification accuracy, and client trust.
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="bg-white text-slate-900 border border-slate-200 rounded-[32px] p-8 md:p-10 shadow-md space-y-6 flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 border border-amber-200 px-3.5 py-1 rounded-full text-xs font-sans font-bold uppercase tracking-wider">
                <Target className="h-3.5 w-3.5 text-amber-700" />
                Our Mission
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 leading-snug">
                Simplifying International Trade With India
              </h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                To simplify international trade with India by delivering precise specification alignment, open commercial communication, and end-to-end shipment accountability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FOUNDER'S PERSPECTIVE (LEADERSHIP SECTION) */}
      <section className="py-14 md:py-20 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="space-y-4 mb-8 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
            The Person Behind <br />
            <span className="italic font-normal text-amber-700 font-display">VEDA IMPEX</span>
          </h2>
        </div>

        <div className="bg-white border border-slate-200 rounded-[32px] p-8 md:p-12 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
          {/* Quotemark Background Watermark */}
          <span className="text-[160px] font-display text-slate-100 font-bold absolute -top-10 left-6 select-none pointer-events-none leading-none">
            “
          </span>

          <div className="lg:col-span-8 space-y-6 text-left relative z-10">
            <h3 className="text-2xl md:text-3.5xl font-black text-slate-900 uppercase tracking-tight">
              Deepeksha Jain — <span className="text-amber-700 font-normal">Founder, VEDA IMPEX</span>
            </h3>

            <p className="text-slate-700 text-base md:text-lg leading-relaxed font-medium italic">
              "I started VEDA IMPEX with a simple belief: international business works best when people can trust the person and company on the other side of the transaction. We are building VEDA IMPEX step-by-step—with the intention of creating something that lasts, not something that simply looks big."
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="w-44 h-44 md:w-52 md:h-52 rounded-3xl overflow-hidden border-4 border-white shadow-xl relative bg-slate-950 flex flex-col items-center justify-center text-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#293681] to-amber-600/40 flex flex-col items-center justify-center p-4">
                <div className="h-16 w-16 rounded-full border-2 border-white bg-slate-900 flex items-center justify-center text-2xl font-black text-amber-400 font-sans shadow-lg mb-2">
                  DJ
                </div>
                <span className="text-xs font-black text-white uppercase tracking-wider">Deepeksha Jain</span>
                <span className="text-[10px] text-slate-200">Founder, Veda Impex</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. REGULATORY COMPLIANCE & EXPORT REGISTRATIONS */}
      <section className="py-14 md:py-20 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="space-y-4 mb-8 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
            Export Registrations & <br />
            <span className="italic font-normal text-amber-700 font-display">Legal Structures</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {regulatoryBadges.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/90 rounded-[28px] p-6 shadow-sm flex flex-col justify-between hover:border-amber-600/40 hover:shadow-md transition-all duration-300 min-h-[220px] text-left group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full font-sans">
                    {item.badge}
                  </span>
                  <ShieldCheck className="h-4 w-4 text-emerald-600" />
                </div>
                <h3 className="text-base font-extrabold text-slate-900 group-hover:text-amber-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. BOTTOM CALL-TO-ACTION (CTA) */}
      <section className="py-14 md:py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="bg-slate-900 text-white rounded-[36px] p-8 md:p-14 text-center space-y-8 relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight">
              Ready to Discuss Your<br /> Export Requirements?
            </h2>
            <p className="text-slate-300 text-xs md:text-sm font-normal leading-relaxed max-w-xl mx-auto">
              Share your target specifications, required volume, and destination port. Our team will review your enquiry and get back to you with swift commercial details.
            </p>
          </div>

          <div className="relative z-10 pt-2">
            <Link
              href="/contact?subject=commercial_enquiry"
              className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-white font-bold py-4 px-8 rounded-full text-xs uppercase tracking-wider transition-all duration-300 shadow-lg group"
            >
              Send Commercial Enquiry →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
