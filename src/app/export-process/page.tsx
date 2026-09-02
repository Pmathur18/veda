"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ProcessFlow3D from "@/components/ui/ProcessFlow3D";
import {
  ClipboardCheck,
  FlaskConical,
  Package,
  FileCheck,
  ArrowRight,
  ShieldCheck,
  Check,
  ArrowUpRight
} from "lucide-react";

export default function QualityProcessPage() {

  const pillars = [
    {
      num: "01",
      icon: <ClipboardCheck className="h-6 w-6 text-[#293681]" />,
      title: "1. Specification Matching Before Order Confirmation",
      desc: "We do not push off-the-shelf inventory. Before confirming any contract, we evaluate your required parameters—including mesh size, purity levels, swell volume, moisture content, and heavy metal thresholds—to ensure complete alignment."
    },
    {
      num: "02",
      icon: <FlaskConical className="h-6 w-6 text-[#293681]" />,
      title: "2. Batch Laboratory Testing & COA Verification",
      desc: "Every export batch undergoes rigorous physical, chemical, and microbiological laboratory testing. We provide a comprehensive Certificate of Analysis (COA) prior to dispatch so you know the exact composition of your shipment."
    },
    {
      num: "03",
      icon: <Package className="h-6 w-6 text-[#293681]" />,
      title: "3. Standardized Export Packaging Integrity",
      desc: "Natural ingredients degrade rapidly if exposed to ambient moisture during ocean freight. We utilize food-grade, multi-wall paper bags, heavy-duty PP bags with inner PE liners, and reinforced FIBC jumbo bags to preserve product purity from port to port."
    },
    {
      num: "04",
      icon: <FileCheck className="h-6 w-6 text-[#293681]" />,
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
    <div className="bg-white text-slate-900 min-h-screen font-sans">
      {/* 1. HERO SECTION WITH CENTERED STACK CONTENT */}
      <section className="relative w-full min-h-[58vh] md:min-h-[66vh] flex flex-col items-center justify-center overflow-hidden -mt-16 mb-16 bg-slate-950">
        {/* Background Image */}
        <Image
          src="/ChatGPT Image Aug 26, 2026, 06_56_03 PM.png"
          alt="VEDA IMPEX Quality Background"
          fill
          priority
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        {/* Neutral Dark Overlay for clean contrast */}
        <div className="absolute inset-0 bg-slate-950/65 z-10" />

        {/* Main Hero Content (Centered Stack) */}
        <div className="w-full max-w-5xl mx-auto px-6 md:px-8 py-24 md:py-32 relative z-20 flex flex-col items-center justify-center text-center text-white space-y-6">
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-black text-white tracking-tight uppercase max-w-4xl leading-tight">
            Quality Starts With Knowing What the Buyer Needs
          </h1>

          <p className="text-slate-200 text-sm md:text-base leading-relaxed max-w-2xl font-sans mx-auto font-normal">
            At VEDA IMPEX, quality is not a marketing phrase it is a measurable, batch-tested standard engineered around your market’s specific regulatory and technical requirements.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/contact?subject=Spec%20Sheet"
              className="inline-flex items-center gap-2 bg-sky hover:bg-sky-hover text-[#1c255b] font-bold py-3.5 px-7 rounded-full text-xs md:text-sm uppercase tracking-wider transition-all shadow-lg hover:scale-[1.02]"
            >
              Submit Your Spec Sheet
              <ArrowRight className="h-4 w-4 text-[#1c255b]" />
            </Link>

            <a
              href="#framework"
              className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white border border-white/40 font-medium py-3.5 px-7 rounded-full text-xs md:text-sm transition-all"
            >
              View Framework
            </a>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION & QUALITY ASSURANCE FRAMEWORK */}
      <section id="framework" className="max-w-7xl mx-auto px-6 md:px-12 mb-28">


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
          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 leading-tight">
              Our Quality Assurance Framework
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed font-normal">
              International buyers often struggle with inconsistent parameters, delayed documentation, and unverified product claims. <span className="text-blue-900 font-semibold">We remove these risks through a structured four-pillar quality framework:</span>
            </p>
          </div>
        </div>

        {/* Four Framework Pillars Cards Grid (Clean Modern Cards without awkward dividers) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/90 rounded-3xl p-7 shadow-sm hover:shadow-md hover:border-[#293681]/40 transition-all duration-300 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <span className="text-4xl md:text-5xl font-black text-[#293681] tracking-tight block font-display">
                  {pillar.num}
                </span>
                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed font-normal">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. STEP-BY-STEP EXPORT ORDER FLOW (ACETERNITY-STYLE 3D SCROLL & PERSPECTIVE) */}
      <ProcessFlow3D steps={steps} />

      {/* 4. THIRD-PARTY INSPECTION POLICY (BRAND NAVY BLUE SECTION) */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-28">
        <div className="bg-[#293681] text-white rounded-[36px] p-8 md:p-16 shadow-2xl relative overflow-hidden border border-white/10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Header */}
            <div className="lg:col-span-5 space-y-6">

              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight uppercase">
                Third-Party <br /> Inspection Policy
              </h2>

              <p className="text-slate-200 text-sm md:text-base leading-relaxed font-normal">
                For Buyers Who Require Independent Verification. We believe full transparency builds long-term partnerships. VEDA IMPEX fully supports buyer-appointed third-party quality inspections.
              </p>
            </div>

            {/* Right Inspection Cards */}
            <div className="lg:col-span-7 space-y-6">
              {inspections.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 border border-white/15 p-7 rounded-3xl space-y-3 backdrop-blur-sm hover:border-sky/40 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-sky" />
                    <h3 className="text-base font-bold text-sky uppercase tracking-wide">
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

          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 uppercase">
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
              className="bg-white border border-slate-200 rounded-3xl p-7 shadow-sm hover:shadow-md hover:border-[#293681] transition-all duration-300 flex flex-col justify-between min-h-[220px] group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-[#293681] bg-[#D0E7E6]/60 border border-[#95CCDD] px-3 py-1 rounded-full font-sans uppercase tracking-wider">
                    {comp.badge}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-slate-400 group-hover:text-[#293681] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#293681] transition-colors">
                  {comp.title}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed font-normal">
                  {comp.desc}
                </p>
              </div>

              <div className="pt-3 flex items-center text-[10px] font-extrabold text-[#293681] uppercase tracking-widest">
                <Check className="h-3.5 w-3.5 mr-1 text-[#4274D9]" /> Active Status
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. BOTTOM CALL-TO-ACTION (CTA) BANNER */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <div className="bg-[#293681] text-white rounded-[36px] p-10 md:p-16 text-center space-y-8 relative overflow-hidden shadow-2xl border border-white/10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-sky/15 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mx-auto space-y-4 relative z-10">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight uppercase text-white">
              Already Have a Detailed <br />
              <span className="text-sky">Technical Specification?</span>
            </h2>
            <p className="text-slate-200 text-xs md:text-sm font-normal leading-relaxed max-w-2xl mx-auto">
              Send us your parameter sheet, target quantity, and destination port. Our export team will evaluate your requirements and respond with a swift commercial quote and COA sample.
            </p>
          </div>

          <div className="relative z-10 pt-2">
            <Link
              href="/contact?subject=Technical%20Spec"
              className="inline-flex items-center gap-2 bg-sky hover:bg-sky-hover text-[#1c255b] font-extrabold py-4 px-9 rounded-full text-xs md:text-sm uppercase tracking-wider transition-all duration-300 shadow-xl hover:scale-105"
            >
              Send Your Requirements
              <ArrowUpRight className="h-4 w-4 text-[#1c255b]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
