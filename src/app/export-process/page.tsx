"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ClipboardCheck,
  FlaskConical,
  Package,
  FileCheck,
  ArrowRight,
  ShieldCheck,
  Check,
  Building2,
  ArrowUpRight
} from "lucide-react";

export default function QualityProcessPage() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const pillars = [
    {
      num: "01",
      icon: <ClipboardCheck className="h-6 w-6 text-[#0d1b12]" />,
      title: "1. Specification Matching Before Order Confirmation",
      desc: "We do not push off-the-shelf inventory. Before confirming any contract, we evaluate your required parameters—including mesh size, purity levels, swell volume, moisture content, and heavy metal thresholds—to ensure complete alignment."
    },
    {
      num: "02",
      icon: <FlaskConical className="h-6 w-6 text-[#0d1b12]" />,
      title: "2. Batch Laboratory Testing & COA Verification",
      desc: "Every export batch undergoes rigorous physical, chemical, and microbiological laboratory testing. We provide a comprehensive Certificate of Analysis (COA) prior to dispatch so you know the exact composition of your shipment."
    },
    {
      num: "03",
      icon: <Package className="h-6 w-6 text-[#0d1b12]" />,
      title: "3. Standardized Export Packaging Integrity",
      desc: "Natural ingredients degrade rapidly if exposed to ambient moisture during ocean freight. We utilize food-grade, multi-wall paper bags, heavy-duty PP bags with inner PE liners, and reinforced FIBC jumbo bags to preserve product purity from port to port."
    },
    {
      num: "04",
      icon: <FileCheck className="h-6 w-6 text-[#0d1b12]" />,
      title: "4. Complete Regulatory & Custom Documentation",
      desc: "Export execution fails when documentation is flawed. We manage every clearance detail—from Phytosanitary Certificates and Fumigation Reports to Bills of Lading and Certificates of Origin—ensuring smooth entry at your destination port."
    }
  ];

  const steps = [
    {
      num: "01",
      title: "Requirement Alignment",
      detail: "You provide target specifications, purity grades, required volume, and destination port.",
      action: "Submit RFQ / Spec Sheet",
      image: "/psyllium-husk.jpg"
    },
    {
      num: "02",
      title: "Sample & COA Evaluation",
      detail: "We provide laboratory-backed COAs and representative samples for your technical evaluation.",
      action: "Test & Approve Sample",
      image: "/quality-control-lab.jpg"
    },
    {
      num: "03",
      title: "Commercial Contract",
      detail: "Proforma invoice issued detailing Incoterms (FOB/CIF/CFR), payment terms, and strict shipping schedules.",
      action: "Sign Contract & Issue Deposit/LC",
      image: "/top-7-benefits-of-international-trade-800x445.png"
    },
    {
      num: "04",
      title: "Quality Check & Inspection",
      detail: "Cargo is inspected for moisture, purity, and microbial parameters. Optional third-party inspection (SGS/Geo-Chem) ready.",
      action: "Review Final Batch COA",
      image: "/senna-leaves.jpg"
    },
    {
      num: "05",
      title: "Export Clearance & Loading",
      detail: "Freight is containerized, sealed, and cleared through customs with full Phytosanitary and Fumigation reports.",
      action: "Receive Tracking & Shipping Docs",
      image: "/cargo-ship-footer.jpg"
    }
  ];

  const inspections = [
    {
      title: "Inspection Agencies Supported",
      desc: "SGS, Geo-Chem, Intertek, or any mutually agreed international testing agency."
    },
    {
      title: "Scope of Inspection",
      desc: "Quantity verification, sampling, purity verification, container cleanliness audit, and official loading supervision prior to container sealing."
    }
  ];

  const compliances = [
    {
      badge: "DGFT REGISTERED",
      title: "DGFT Registered",
      desc: "Holding valid Import Export Code (IEC) issued by the Ministry of Commerce & Industry."
    },
    {
      badge: "APEDA MEMBER",
      title: "APEDA Member",
      desc: "Registered with the Agricultural and Processed Food Products Export Development Authority."
    },
    {
      badge: "SPICES BOARD",
      title: "Spices Board of India",
      desc: "Registered exporter for botanical and natural commodity compliance."
    },
    {
      badge: "FSSAI & GST",
      title: "GST & FSSAI Compliant",
      desc: "Meeting national food safety and legal business structure standards."
    }
  ];

  return (
    <div className="bg-[#f6f7f3] text-[#0d1b12] min-h-screen font-sans">
      {/* 1. HERO SECTION WITH NATURE BACKGROUND & WATERMARK */}
      <section className="relative w-full min-h-[75vh] md:min-h-[82vh] flex flex-col justify-between overflow-hidden -mt-16 mb-16 bg-[#0e1f14]">
        {/* Background Image / Nature Overlay */}
        <Image
          src="/ChatGPT Image Aug 26, 2026, 06_56_03 PM.png"
          alt="VEDA IMPEX Organic Nature Background"
          fill
          priority
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 mix-blend-luminosity"
        />
        {/* Gradient Overlay for high text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e1f14]/90 via-[#0e1f14]/75 to-[#0e1f14] z-10" />

        {/* Top Spacer for Navigation Clearance */}
        <div className="pt-28 md:pt-36 z-20" />

        {/* Main Hero Content */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end pb-12">
          {/* Left Heading */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-[#c0ed37] tracking-wider uppercase backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#c0ed37] animate-pulse" />
              Quality Assurance
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.08] uppercase">
              Quality Starts With <br />
              <span className="text-[#c0ed37]">Knowing What the Buyer Needs</span>
            </h1>
          </div>

          {/* Right Subtitle & Pill Action Buttons */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-slate-200 text-sm md:text-base leading-relaxed font-normal">
              At VEDA IMPEX, quality is not a marketing phrase—it is a measurable, batch-tested standard engineered around your market’s specific regulatory and technical requirements.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/contact?subject=Spec%20Sheet"
                className="inline-flex items-center gap-2 bg-[#c0ed37] hover:bg-[#b0e026] text-[#0e1f14] font-bold py-3.5 px-7 rounded-full text-xs md:text-sm uppercase tracking-wider transition-all shadow-lg hover:scale-[1.02]"
              >
                Submit Your Spec Sheet
                <ArrowRight className="h-4 w-4 text-[#0e1f14]" />
              </Link>
              
              <a
                href="#framework"
                className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white border border-white/40 font-medium py-3.5 px-7 rounded-full text-xs md:text-sm transition-all"
              >
                View Framework
              </a>
            </div>
          </div>
        </div>

        {/* Oversized Ghost Watermark Text at Bottom of Hero */}
        <div className="w-full overflow-hidden relative z-20 pointer-events-none select-none opacity-15 pb-2">
          <div className="whitespace-nowrap text-[120px] sm:text-[170px] md:text-[240px] font-black uppercase text-transparent tracking-widest leading-none text-center"
               style={{ WebkitTextStroke: "2px rgba(255, 255, 255, 0.9)" }}>
            VEDA IMPEX
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION & QUALITY ASSURANCE FRAMEWORK */}
      <section id="framework" className="max-w-7xl mx-auto px-6 md:px-12 mb-28">
        {/* Intro Top Badge */}
        <div className="mb-8">
          <span className="inline-block px-4 py-1 rounded-full border border-slate-300 text-xs font-semibold uppercase tracking-wider text-slate-700 bg-white">
            Our Framework
          </span>
        </div>

        {/* Intro Grid: Image Card Left + Title & Paragraph Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          {/* Left Image Card */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-lg border border-slate-200 aspect-[4/3] lg:aspect-square bg-slate-900 group">
            <Image
              src="/quality-control-lab.jpg"
              alt="Quality Control Testing Laboratory"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e1f14]/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#c0ed37] bg-[#0e1f14]/80 backdrop-blur-md px-3 py-1 rounded-full border border-[#c0ed37]/30 inline-block">
                Laboratory Tested
              </span>
              <p className="text-xs text-slate-200 font-medium">Batch Analytical Verification</p>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#0d1b12] leading-tight">
              Our Quality Assurance Framework
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed font-normal">
              International buyers often struggle with inconsistent parameters, delayed documentation, and unverified product claims. <span className="text-[#0d1b12] font-semibold">We remove these risks through a structured four-pillar quality framework:</span>
            </p>
          </div>
        </div>

        {/* Horizontal Stat / Pillar Row with Thin Vertical Dividers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-300 border-y border-slate-300 py-10 bg-white/50 rounded-3xl px-6 md:px-8">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className={`p-6 flex flex-col justify-between space-y-4 ${
                idx !== 0 ? "sm:pl-8" : ""
              }`}
            >
              <div className="space-y-3">
                <span className="text-4xl md:text-5xl font-extrabold text-[#0d1b12] tracking-tight block">
                  {pillar.num}
                </span>
                <h3 className="text-base font-bold text-[#0d1b12] leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed font-normal">
                  {pillar.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center gap-1.5 text-[11px] font-bold text-emerald-700 uppercase tracking-wider">
                <ShieldCheck className="h-4 w-4 text-[#0d1b12]" />
                Pillar {idx + 1} Cleared
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. STEP-BY-STEP EXPORT ORDER FLOW (CLEAN ACCORDION / HIGHLIGHTED LIST) */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-28">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-14">
          <span className="inline-block px-4 py-1 rounded-full border border-slate-300 text-xs font-semibold uppercase tracking-wider text-slate-700 bg-white">
            Process Flow
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#0d1b12]">
            Step-by-Step Export Order Flow
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed font-normal">
            We keep commercial communication direct and transparent from initial enquiry to final port clearance. Click on the steps below to highlight details.
          </p>
        </div>

        {/* Process List */}
        <div className="max-w-5xl mx-auto space-y-4">
          {steps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <div
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`cursor-pointer transition-all duration-300 overflow-hidden ${
                  isActive
                    ? "bg-[#c0ed37] text-[#0d1b12] rounded-3xl p-6 md:p-8 shadow-xl"
                    : "bg-white border-b border-slate-200 p-6 md:p-8 rounded-2xl hover:bg-slate-50 hover:shadow-sm"
                }`}
              >
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  {/* Left Title & Content */}
                  <div className="flex items-start gap-5 flex-1">
                    <span
                      className={`text-2xl md:text-3xl font-extrabold font-sans transition-colors ${
                        isActive ? "text-[#0d1b12]" : "text-slate-400"
                      }`}
                    >
                      {step.num}
                    </span>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <h3
                          className={`text-xl md:text-2xl font-bold tracking-tight ${
                            isActive ? "text-[#0d1b12]" : "text-[#0d1b12]"
                          }`}
                        >
                          {step.title}
                        </h3>
                        {isActive && (
                          <span className="text-[10px] font-extrabold bg-[#0d1b12] text-[#c0ed37] px-3 py-0.5 rounded-full uppercase tracking-wider">
                            Active Step
                          </span>
                        )}
                      </div>
                      <p
                        className={`text-xs md:text-sm leading-relaxed max-w-2xl ${
                          isActive ? "text-[#0d1b12]/90 font-medium" : "text-slate-500 font-normal"
                        }`}
                      >
                        {step.detail}
                      </p>

                      {/* Buyer Action Pill */}
                      <div className="pt-2">
                        <span
                          className={`inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${
                            isActive
                              ? "bg-[#0d1b12] text-white border-[#0d1b12]"
                              : "bg-slate-100 text-slate-700 border-slate-200"
                          }`}
                        >
                          Buyer Action: {step.action}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Floating Image Card & Action Arrow */}
                  <div className="flex items-center gap-4 self-end md:self-center shrink-0">
                    {/* Active Step Visual Card */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9, x: 20 }}
                          animate={{ opacity: 1, scale: 1, x: 0 }}
                          exit={{ opacity: 0, scale: 0.9, x: 20 }}
                          transition={{ duration: 0.3 }}
                          className="hidden sm:block relative w-36 h-24 rounded-2xl overflow-hidden border-2 border-[#0d1b12] shadow-md shrink-0"
                        >
                          <Image
                            src={step.image}
                            alt={step.title}
                            fill
                            className="object-cover"
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Arrow Icon Button */}
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${
                        isActive
                          ? "bg-[#0d1b12] text-[#c0ed37] shadow-md"
                          : "bg-slate-100 text-slate-800 hover:bg-slate-200"
                      }`}
                    >
                      <ArrowUpRight className={`h-6 w-6 transition-transform ${isActive ? "rotate-45" : ""}`} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. THIRD-PARTY INSPECTION POLICY (DARK FOREST GREEN SECTION) */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-28">
        <div className="bg-[#0e1f14] text-white rounded-[36px] p-8 md:p-16 shadow-2xl relative overflow-hidden border border-white/10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#c0ed37]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Header */}
            <div className="lg:col-span-5 space-y-6">
              <span className="inline-block px-4 py-1.5 rounded-full border border-[#c0ed37]/40 text-xs font-semibold uppercase tracking-wider text-[#c0ed37] bg-[#c0ed37]/10">
                Independent Verification
              </span>

              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Third-Party <br /> Inspection Policy
              </h2>

              <p className="text-slate-300 text-sm md:text-base leading-relaxed font-normal">
                For Buyers Who Require Independent Verification. We believe full transparency builds long-term partnerships. VEDA IMPEX fully supports buyer-appointed third-party quality inspections.
              </p>
            </div>

            {/* Right Inspection Cards */}
            <div className="lg:col-span-7 space-y-6">
              {inspections.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 border border-white/15 p-7 rounded-3xl space-y-3 backdrop-blur-sm hover:border-[#c0ed37]/40 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#c0ed37]" />
                    <h3 className="text-base font-bold text-[#c0ed37] uppercase tracking-wide">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-slate-200 text-xs md:text-sm leading-relaxed font-normal pl-4">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. REGULATORY REGISTRATIONS & COMPLIANCE */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-28">
        <div className="space-y-4 mb-12 text-center md:text-left">
          <span className="inline-block px-4 py-1 rounded-full border border-slate-300 text-xs font-semibold uppercase tracking-wider text-slate-700 bg-white">
            Compliance
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#0d1b12]">
            Regulatory Registrations & Compliance
          </h2>
          <p className="text-slate-600 text-sm md:text-base max-w-3xl font-normal leading-relaxed">
            VEDA IMPEX operates in strict compliance with Government of India export regulations and statutory bodies:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {compliances.map((comp, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-3xl p-7 shadow-sm hover:shadow-md hover:border-[#0d1b12] transition-all duration-300 flex flex-col justify-between min-h-[220px] group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-[#0d1b12] bg-[#c0ed37]/30 border border-[#c0ed37] px-3 py-1 rounded-full font-sans uppercase tracking-wider">
                    {comp.badge}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-slate-400 group-hover:text-[#0d1b12] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <h3 className="text-lg font-bold text-[#0d1b12] group-hover:text-[#0d1b12] transition-colors">
                  {comp.title}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed font-normal">
                  {comp.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center text-[10px] font-extrabold text-emerald-700 uppercase tracking-widest">
                <Check className="h-3.5 w-3.5 mr-1 text-emerald-600" /> Active Status
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. BOTTOM CALL-TO-ACTION (CTA) BANNER */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <div className="bg-[#0e1f14] text-white rounded-[36px] p-10 md:p-16 text-center space-y-8 relative overflow-hidden shadow-2xl border border-white/10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#c0ed37]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mx-auto space-y-4 relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight uppercase text-white">
              Already Have a Detailed <br />
              <span className="text-[#c0ed37]">Technical Specification?</span>
            </h2>
            <p className="text-slate-300 text-xs md:text-sm font-normal leading-relaxed max-w-2xl mx-auto">
              Send us your parameter sheet, target quantity, and destination port. Our export team will evaluate your requirements and respond with a swift commercial quote and COA sample.
            </p>
          </div>

          <div className="relative z-10 pt-2">
            <Link
              href="/contact?subject=Technical%20Spec"
              className="inline-flex items-center gap-2 bg-[#c0ed37] hover:bg-[#b0e026] text-[#0e1f14] font-extrabold py-4 px-9 rounded-full text-xs md:text-sm uppercase tracking-wider transition-all duration-300 shadow-xl hover:scale-105"
            >
              Send Your Requirements
              <ArrowUpRight className="h-4 w-4 text-[#0e1f14]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
