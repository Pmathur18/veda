"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
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
      icon: <ClipboardCheck className="h-6 w-6 text-brand" />,
      title: "1. Specification Matching Before Order Confirmation",
      desc: "We do not push off-the-shelf inventory. Before confirming any contract, we evaluate your required parameters—including mesh size, purity levels, swell volume, moisture content, and heavy metal thresholds—to ensure complete alignment."
    },
    {
      icon: <FlaskConical className="h-6 w-6 text-brand" />,
      title: "2. Batch Laboratory Testing & COA Verification",
      desc: "Every export batch undergoes rigorous physical, chemical, and microbiological laboratory testing. We provide a comprehensive Certificate of Analysis (COA) prior to dispatch so you know the exact composition of your shipment."
    },
    {
      icon: <Package className="h-6 w-6 text-brand" />,
      title: "3. Standardized Export Packaging Integrity",
      desc: "Natural ingredients degrade rapidly if exposed to ambient moisture during ocean freight. We utilize food-grade, multi-wall paper bags, heavy-duty PP bags with inner PE liners, and reinforced FIBC jumbo bags to preserve product purity from port to port."
    },
    {
      icon: <FileCheck className="h-6 w-6 text-brand" />,
      title: "4. Complete Regulatory & Custom Documentation",
      desc: "Export execution fails when documentation is flawed. We manage every clearance detail—from Phytosanitary Certificates and Fumigation Reports to Bills of Lading and Certificates of Origin—ensuring smooth entry at your destination port."
    }
  ];

  const steps = [
    {
      num: 1,
      title: "Requirement Alignment",
      detail: "You provide target specifications, purity grades, required volume, and destination port.",
      action: "Submit RFQ / Spec Sheet"
    },
    {
      num: 2,
      title: "Sample & COA Evaluation",
      detail: "We provide laboratory-backed COAs and representative samples for your technical evaluation.",
      action: "Test & Approve Sample"
    },
    {
      num: 3,
      title: "Commercial Contract",
      detail: "Proforma invoice issued detailing Incoterms (FOB/CIF/CFR), payment terms, and strict shipping schedules.",
      action: "Sign Contract & Issue Deposit/LC"
    },
    {
      num: 4,
      title: "Quality Check & Inspection",
      detail: "Cargo is inspected for moisture, purity, and microbial parameters. Optional third-party inspection (SGS/Geo-Chem) ready.",
      action: "Review Final Batch COA"
    },
    {
      num: 5,
      title: "Export Clearance & Loading",
      detail: "Freight is containerized, sealed, and cleared through customs with full Phytosanitary and Fumigation reports.",
      action: "Receive Tracking & Shipping Docs"
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
      title: "DGFT Registered",
      desc: "Holding valid Import Export Code (IEC) issued by the Ministry of Commerce & Industry."
    },
    {
      title: "APEDA Member",
      desc: "Registered with the Agricultural and Processed Food Products Export Development Authority."
    },
    {
      title: "Spices Board of India",
      desc: "Registered exporter for botanical and natural commodity compliance."
    },
    {
      title: "GST & FSSAI Compliant",
      desc: "Meeting national food safety and legal business structure standards."
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* 1. HERO VIDEO BANNER */}
      <section className="relative w-full min-h-[55vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden -mt-16 mb-16">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/360536.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark Overlay to protect text contrast */}
        <div className="absolute inset-0 bg-slate-950/60 z-10" />



        {/* Hero Content Overlay */}
        <div className="w-full max-w-5xl mx-auto px-6 md:px-8 py-20 md:py-24 relative z-20 flex flex-col items-center justify-center text-center text-white">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[10px] font-bold text-sky uppercase tracking-widest shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-sky animate-pulse" />
            Quality Assurance
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight uppercase max-w-4xl mt-6 leading-tight">
            Quality Starts With <br />
            <span className="relative inline-block mt-2">
              <span className="absolute inset-0 bg-sky" />
              <span className="relative text-[#293681] px-5 py-0.5 inline-block">
                Knowing Buyer Needs
              </span>
            </span>
          </h1>

          <p className="text-slate-200 text-sm md:text-base leading-relaxed max-w-2xl font-normal font-sans mx-auto mt-6">
            At VEDA IMPEX, quality is not a marketing phrase—it is a measurable, batch-tested standard engineered around your market’s specific regulatory and technical requirements.
          </p>

          <div className="pt-2">
            <Link
              href="/contact?subject=Spec%20Sheet"
              className="inline-flex items-center bg-white hover:bg-slate-100 text-[#293681] font-bold py-3 px-6 rounded-none text-xs uppercase tracking-wider transition-all border border-white cursor-pointer shadow-lg mt-4"
            >
              Submit Your Spec Sheet
              <ArrowRight className="ml-2 h-4 w-4 text-[#293681]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. QUALITY ASSURANCE FRAMEWORK */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-24">
        <div className="space-y-4 mb-12">
          <div className="flex items-center space-x-2">
            <span className="h-1 w-8 bg-brand rounded" />
            <span className="text-[10px] font-bold text-brand uppercase tracking-widest">Our Framework</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase">
            Our Quality Assurance Framework
          </h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-3xl font-normal">
            International buyers often struggle with inconsistent parameters, delayed documentation, and unverified product claims. We remove these risks through a structured four-pillar quality framework:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white border-2 border-slate-900 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:border-brand"
            >
              <div className="space-y-4 text-left">
                <div className="p-3 bg-brand-light rounded-xl inline-block border border-brand/10">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-black text-slate-900 uppercase">{pillar.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed font-normal">{pillar.desc}</p>
              </div>
              <div className="flex items-center text-[10px] font-bold text-brand uppercase tracking-wider pt-6 mt-6 border-t border-slate-100">
                Pillar {idx + 1} Cleared <ShieldCheck className="ml-1.5 h-3.5 w-3.5 text-sky" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. STEP-BY-STEP EXPORT ORDER FLOW */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-24 py-16 bg-slate-50 rounded-3xl border-2 border-slate-900/5">
        <div className="space-y-4 mb-12 text-center md:text-left">
          <div className="inline-flex items-center space-x-2">
            <span className="h-1 w-8 bg-brand rounded" />
            <span className="text-[10px] font-bold text-brand uppercase tracking-widest">Process Flow</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase">
            Step-by-Step Export Order Flow
          </h2>
          <p className="text-slate-500 text-sm max-w-3xl font-normal">
            We keep commercial communication direct and transparent from initial enquiry to final port clearance. Click on the steps below to highlight details.
          </p>
        </div>

        {/* Stepper Visualization */}
        <div className="hidden lg:flex items-center justify-between mb-16 relative px-10">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-200 -translate-y-1/2 -z-10" />
          {steps.map((step, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className="flex flex-col items-center group relative z-10 cursor-pointer focus:outline-none"
            >
              <div
                className={`w-12 h-12 rounded-full border-4 flex items-center justify-center font-bold text-xs transition-all duration-300 ${
                  activeStep === idx
                    ? "bg-brand border-brand text-white scale-110 shadow-lg shadow-brand/20"
                    : "bg-white border-slate-900 text-slate-900 group-hover:border-brand group-hover:text-brand"
                }`}
              >
                {step.num}
              </div>
              <span
                className={`absolute top-14 text-[10px] font-bold uppercase tracking-wider whitespace-nowrap transition-colors duration-300 ${
                  activeStep === idx ? "text-brand" : "text-slate-400 group-hover:text-slate-700"
                }`}
              >
                {step.title}
              </span>
            </button>
          ))}
        </div>

        {/* Desktop Step Table */}
        <div className="hidden md:block overflow-hidden border-2 border-slate-900 rounded-2xl bg-white shadow-lg">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-900 text-white text-[10px] font-bold uppercase tracking-wider">
                <th className="py-4 px-6 border-b border-slate-800">Order Stage</th>
                <th className="py-4 px-6 border-b border-slate-800">Operational Detail</th>
                <th className="py-4 px-6 border-b border-slate-800">Buyer Action</th>
              </tr>
            </thead>
            <tbody>
              {steps.map((step, idx) => (
                <tr
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`cursor-pointer transition-colors duration-250 ${
                    activeStep === idx
                      ? "bg-brand/5 border-l-4 border-l-brand"
                      : "hover:bg-slate-50 border-l-4 border-l-transparent"
                  } ${idx !== steps.length - 1 ? "border-b border-slate-100" : ""}`}
                >
                  <td className="py-5 px-6 font-bold text-slate-900 uppercase text-xs w-1/4">
                    <span className="inline-block mr-2 w-5 h-5 rounded-full bg-slate-100 text-[10px] font-black text-center leading-5 text-slate-700 border border-slate-200">
                      {step.num}
                    </span>
                    {step.title}
                  </td>
                  <td className="py-5 px-6 text-slate-650 text-xs leading-relaxed w-1/2 font-normal">
                    {step.detail}
                  </td>
                  <td className="py-5 px-6 w-1/4">
                    <span className="inline-flex items-center px-3 py-1 rounded bg-slate-100 border border-slate-200 text-[10px] font-bold text-slate-700 uppercase tracking-wider">
                      {step.action}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Accordion/Card View */}
        <div className="grid grid-cols-1 md:hidden gap-4 text-left">
          {steps.map((step, idx) => (
            <div
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`bg-white border-2 p-5 rounded-xl transition-all duration-300 ${
                activeStep === idx ? "border-brand shadow-md" : "border-slate-200"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold bg-brand text-white px-2 py-0.5 rounded">
                  STAGE {step.num}
                </span>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                  Workflow
                </span>
              </div>
              <h3 className="font-bold text-slate-900 uppercase text-sm mb-2">{step.title}</h3>
              <p className="text-slate-500 text-xs leading-relaxed mb-4 font-normal">{step.detail}</p>
              <div className="bg-slate-50 border border-slate-200 rounded p-2.5 text-center">
                <span className="text-[9px] font-bold text-slate-600 uppercase tracking-wider block mb-1">
                  Required Action:
                </span>
                <span className="text-[10px] font-black text-brand uppercase tracking-widest">
                  {step.action}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. THIRD-PARTY INSPECTION POLICY */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-slate-900 text-white rounded-3xl p-8 md:p-16 border-2 border-slate-950 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand/10 rounded-full blur-3xl -z-10" />

          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-[10px] font-bold text-sky uppercase tracking-widest">
              Independent Verification
            </div>
            <h2 className="text-3xl md:text-4xl font-black uppercase">
              Third-Party <br /> Inspection Policy
            </h2>
            <p className="text-slate-350 text-xs md:text-sm leading-relaxed font-normal">
              For Buyers Who Require Independent Verification. We believe full transparency builds long-term partnerships. VEDA IMPEX fully supports buyer-appointed third-party quality inspections.
            </p>
          </div>

          <div className="lg:col-span-6 space-y-6 text-left">
            {inspections.map((item, idx) => (
              <div key={idx} className="bg-slate-800/50 border border-slate-750 p-6 rounded-2xl space-y-3">
                <h3 className="text-xs font-bold uppercase text-sky flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky mr-2" />
                  {item.title}
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. REGULATORY REGISTRATIONS & COMPLIANCE */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-24">
        <div className="space-y-4 mb-12 text-center md:text-left">
          <div className="inline-flex items-center space-x-2">
            <span className="h-1 w-8 bg-brand rounded" />
            <span className="text-[10px] font-bold text-brand uppercase tracking-widest">Compliance</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase">
            Regulatory Registrations & Compliance
          </h2>
          <p className="text-slate-500 text-sm max-w-3xl font-normal">
            VEDA IMPEX operates in strict compliance with Government of India export regulations and statutory bodies:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {compliances.map((comp, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-white border-2 border-slate-900 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200 text-slate-750">
                  <Building2 className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-slate-900 uppercase text-xs tracking-tight">
                  {comp.title}
                </h3>
                <p className="text-slate-500 text-[10px] leading-relaxed font-normal">
                  {comp.desc}
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center text-[9px] font-black text-sky uppercase tracking-widest">
                <Check className="h-3.5 w-3.5 mr-1" /> Active Status
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. CTA BANNER */}
      <section className="max-w-5xl mx-auto px-4 md:px-8 mb-12">
        <div className="bg-slate-950 text-white rounded-3xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 border-2 border-slate-950 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand/10 rounded-full blur-3xl -z-10" />

          <div className="space-y-3 text-left">
            <h3 className="text-2xl font-black uppercase tracking-tight">
              Already Have a Detailed Technical Specification?
            </h3>
            <p className="text-slate-400 text-xs max-w-xl leading-relaxed font-normal">
              Send us your parameter sheet, target quantity, and destination port. Our export team will evaluate your requirements and respond with a swift commercial quote and COA sample.
            </p>
          </div>

          <Link
            href="/contact?subject=Technical%20Spec"
            className="inline-flex items-center bg-sky hover:bg-sky-hover text-white font-bold py-4 px-6 rounded-xl text-xs uppercase tracking-wider transition-all duration-300 shrink-0 cursor-pointer border-2 border-slate-950 shadow-md shadow-sky/10 hover:translate-y-[-2px]"
          >
            Send Your Requirements
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
