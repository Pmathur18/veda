"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  ArrowUpRight,
  ArrowRight,
  FileText,
  CheckCircle2,
  Calendar,
  Globe,
  Building,
  Anchor
} from "lucide-react";

export default function AboutPage() {
  const stats = [
    { label: "Purity Grade Sourced", value: "99.5%" },
    { label: "Transit Success Rate", value: "100%" },
    { label: "Containers Exported", value: "500+" }
  ];

  const pillars = [
    {
      num: "01",
      title: "Real-time Visibility",
      desc: "Every batch is tracked from raw farm collection to Jodhpur processing and Mundra Port departure, with immediate updates on specifications testing."
    },
    {
      num: "02",
      title: "Reliable Consistency",
      desc: "A great first shipment builds a contact; repeating that exact standard order after order builds a long-term trade partnership."
    },
    {
      num: "03",
      title: "Flexible Sourcing Specs",
      desc: "Whether your compliance requires specific mesh sizes (40-100 mesh) or low-residue organic certificates, we adapt processing to fit."
    }
  ];

  const industries = [
    {
      title: "Nutraceuticals",
      desc: "High-purity whole psyllium husk and standardized sennoside leaves for capsules, tablets, and dietary fiber supplements.",
      link: "/products"
    },
    {
      title: "Food & Baking",
      desc: "Gluten-free binding agents, fiber-boosting baking ingredients, and natural stabilizers for commercial food lines.",
      link: "/products"
    },
    {
      title: "Pharmaceuticals",
      desc: "USP/BP grade natural laxative ingredients, standardized botanical extracts, and raw active materials.",
      link: "/products"
    },
    {
      title: "Animal Nutrition",
      desc: "Premium organic animal feed fiber, digestive wellness additives, and clean bulk raw ingredients.",
      link: "/products"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* 1. HERO IMAGE BANNER */}
      <section className="relative w-full min-h-[55vh] md:min-h-[60vh] flex flex-col items-center justify-center overflow-hidden -mt-16 mb-16">
        {/* Background Image */}
        <Image
          src="/ChatGPT Image Aug 26, 2026, 06_56_03 PM.png"
          alt="About Us Banner"
          fill
          priority
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        {/* Dark Overlay to protect text contrast */}
        <div className="absolute inset-0 bg-slate-950/60 z-10" />



        {/* Hero Content Overlay */}
        <div className="w-full max-w-5xl mx-auto px-6 md:px-8 py-20 md:py-24 relative z-20 flex flex-col items-center justify-center text-center text-white">


          <h1 className="text-5xl md:text-5xl font-black text-white tracking-tight uppercase max-w-4xl mt-6 leading-tight">
            Leading Coordinators of <br />Agricultural Exports
          </h1>

          <p className="text-slate-200 text-sm md:text-base leading-relaxed max-w-4xl font-normal font-sans mx-auto mt-6">
            Based out of Jodhpur, Rajasthan, VEDA IMPEX is an Indian export coordinator built around a single, uncompromising objective making cross-border sourcing from India simple, transparent, and completely dependable.
          </p>
        </div>
      </section >

      {/* Overlapping Stats Cards Container */}
      < div className="max-w-4xl mx-auto px-6 md:px-8 -mt-28 mb-16 relative z-20" >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-[24px] p-6 shadow-xl flex flex-col items-center justify-center text-center space-y-2 hover:-translate-y-0.5 transition-transform duration-300 h-[120px]"
            >
              <span className="block font-black text-2xl text-sky leading-none">
                {stat.value}
              </span>
              <span className="block text-[9px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div >

      {/* 2. FOUNDED & STATEMENT SECTION (DARK) */}
      < section className="bg-slate-950 text-white py-20 px-6 md:px-12 relative overflow-hidden" >
        {/* Decorative elements */}
        < div className="absolute top-0 right-0 w-96 h-96 bg-brand/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto space-y-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Left Statement Block */}
            <div className="lg:col-span-8 space-y-6 text-left">
              <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight leading-normal text-left">
                Founded with a commitment to absolute purity and quality consistency, VEDA IMPEX helps B2B buyers navigate complex agricultural supply chains through direct, laboratory-verified sourcing.
              </h2>
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-normal">
                Our processing facilities in Jodhpur, Rajasthan, act as the central anchor for our operations. We manage the supply chain from raw desert harvests to container loading and customs clearances, assuring EU and US regulation compliance.
              </p>
            </div>
          </div>
        </div >
      </section >

      {/* 3. BUILT ON TRUST. DRIVEN BY PERFORMANCE */}
      < section className="py-20 px-6 md:px-12 max-w-7xl mx-auto w-full relative" >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Values List */}
          <div className="lg:col-span-7 space-y-12 text-left">
            <div className="space-y-4">
              <div className="w-12 h-1 bg-[#293681] rounded" />
              <h2 className="text-3xl md:text-4.5xl font-black uppercase tracking-tight text-slate-900 leading-none">
                Built on Trust. <br />
                Driven by Performance.
              </h2>
            </div>

            <div className="space-y-8">
              {pillars.map((p, idx) => (
                <div key={idx} className="flex gap-6 items-start border-l-2 border-slate-100 pl-6 hover:border-[#293681] transition-colors">
                  <span className="text-lg font-black text-sky font-sans">{p.num}</span>
                  <div className="space-y-2">
                    <h4 className="text-sm font-extrabold text-slate-900 uppercase tracking-wide">{p.title}</h4>
                    <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-normal">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Large Vertical Image */}
          <div className="lg:col-span-5 relative w-full h-[400px] md:h-[500px] rounded-[32px] overflow-hidden shadow-2xl border-2 border-slate-900 bg-slate-100">
            <Image
              src="/senna-leaves.jpg"
              alt="Agricultural Sorting Cargo"
              fill
              className="object-cover filter grayscale contrast-125 opacity-95 transition-transform duration-500 hover:scale-102"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 bg-slate-900/90 border border-slate-800 backdrop-blur-sm p-5 rounded-2xl text-white">
              <span className="text-[8px] font-black text-sky uppercase tracking-widest block">Quality Control Desk</span>
              <h4 className="text-xs font-bold uppercase mt-2">Active Sennosides Testing Lab</h4>
              <p className="text-[10px] text-slate-350 leading-relaxed font-normal mt-1 text-left">
                Batch evaluation of Cassia Angustifolia leaves for compliance with chemical residue limits prior to packing.
              </p>
            </div>
          </div>

        </div>
      </section >

      {/* 4. DIRECTOR PROFILE & LIAISON MAP (DARK) */}
      < section className="bg-slate-900 text-white py-20 px-6 md:px-12 relative overflow-hidden" >
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#293681]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">

          {/* Left Column: Sourcing Route Map */}
          <div className="lg:col-span-5 space-y-6 text-left flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight leading-none text-white">
                Our supply path: from <br />
                crop fields to global ports
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed font-normal">
                We coordinate transportation routes to ensure cargo is cleaned, inspected, containerized, and dispatched with absolute efficiency.
              </p>
            </div>

            {/* Visual Route Steps */}
            <div className="space-y-4 py-6 border-y border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center text-xs font-bold text-sky">
                  <Globe className="h-4 w-4" />
                </div>
                <div>
                  <span className="block text-[8px] text-slate-500 uppercase font-bold tracking-wider">Step 1: Origin</span>
                  <span className="block text-[11px] font-bold text-white uppercase">Rajasthan Agriculture Hubs</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center text-xs font-bold text-sky">
                  <Building className="h-4 w-4" />
                </div>
                <div>
                  <span className="block text-[8px] text-slate-500 uppercase font-bold tracking-wider">Step 2: Processing</span>
                  <span className="block text-[11px] font-bold text-white uppercase">Jodhpur Grading Facility</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center text-xs font-bold text-sky">
                  <Anchor className="h-4 w-4" />
                </div>
                <div>
                  <span className="block text-[8px] text-slate-500 uppercase font-bold tracking-wider">Step 3: Export Dispatch</span>
                  <span className="block text-[11px] font-bold text-white uppercase">Mundra Port Liaison Desk</span>
                </div>
              </div>
            </div>

            {/* Dashboard stats pills */}
            <div className="flex flex-wrap gap-3">
              <div className="bg-slate-950 border border-slate-850 px-3.5 py-2 rounded-xl text-left">
                <span className="block text-[10px] font-bold text-sky leading-none">99.8%</span>
                <span className="text-[7px] text-slate-400 font-bold uppercase tracking-wider">Quality Rate</span>
              </div>
              <div className="bg-slate-950 border border-slate-850 px-3.5 py-2 rounded-xl text-left">
                <span className="block text-[10px] font-bold text-sky leading-none">100%</span>
                <span className="text-[7px] text-slate-400 font-bold uppercase tracking-wider">Doc Compliance</span>
              </div>
            </div>
          </div>

          {/* Right Column: Director Profile Card */}
          <div className="lg:col-span-7 bg-white text-slate-900 p-6 md:p-8 rounded-2xl border border-slate-200 shadow-xl flex flex-col justify-between space-y-6">
            <div className="flex flex-col md:flex-row gap-6 items-start text-left">
              {/* Director Image Badge */}
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-2xl overflow-hidden border-2 border-slate-900 bg-slate-950 relative flex items-center justify-center shrink-0 shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#293681] to-sky/30 flex flex-col items-center justify-center p-4 text-center">
                  <div className="h-14 w-14 rounded-full border-2 border-white bg-slate-900 flex items-center justify-center text-xl font-black text-sky font-mono shadow-md">
                    DJ
                  </div>
                  <span className="text-[9px] font-black text-white uppercase mt-2 font-display">Deepeksha Jain</span>
                </div>
              </div>

              {/* Director Quote & Role */}
              <div className="space-y-4 flex-1">
                <div className="space-y-1">
                  <span className="bg-blue-50 text-accent border border-blue-150 px-2.5 py-0.5 rounded text-[8px] font-bold tracking-wider uppercase inline-block">
                    Founder & Director
                  </span>
                  <h4 className="text-lg font-black uppercase text-slate-900">
                    Deepeksha Jain
                  </h4>
                </div>

                <div className="relative">
                  <span className="text-3xl text-accent font-serif absolute -top-3.5 -left-1 select-none">“</span>
                  <p className="text-slate-750 text-xs leading-relaxed font-medium italic pl-4">
                    I founded VEDA IMPEX on a simple foundation: global trade thrives when trust is mutual and absolute. We are building this company step-by-step—creating long-term value and dependable relationships, not short-term transactional hype.
                  </p>
                </div>

                <p className="text-slate-500 text-[10px] leading-relaxed font-normal">
                  Supervising Jodhpur road logistics coordinates, batch purity verification, phytosanitary certifications, and B2B client satisfaction.
                </p>
              </div>
            </div>

            {/* CTA Link */}
            <Link
              href="/contact?subject=director_sourcing"
              className="bg-slate-900 hover:bg-[#293681] text-white font-bold py-3.5 px-6 rounded-none text-xs uppercase tracking-wider transition-all text-center flex items-center justify-center gap-2 cursor-pointer border border-transparent shadow-md"
            >
              Connect with Director Desk <ArrowUpRight className="h-4 w-4 text-white" />
            </Link>
          </div>

        </div>
      </section >

      {/* 5. SOLUTIONS DESIGNED FOR EVERY INDUSTRY */}
      < section className="bg-slate-950 text-white py-20 px-6 md:px-12 relative overflow-hidden" >
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header Block */}
          <div className="space-y-4 text-left max-w-2xl">
            <span className="text-[10px] font-bold text-sky uppercase tracking-widest block">
              // Target Markets
            </span>
            <h2 className="text-3xl md:text-4.5xl font-black uppercase tracking-tight text-white leading-none">
              Sourcing Solutions Designed <br />
              For Every Industry
            </h2>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-normal font-sans">
              From organic nutraceutical powders to standardized pharmaceutical extracts, we align crop purity limits directly with target industry standards.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {industries.map((ind, idx) => (
              <div
                key={idx}
                className="bg-slate-900 border border-slate-800 rounded-3xl p-6 flex flex-col justify-between hover:border-sky/40 transition-colors duration-300 h-[260px] text-left relative overflow-hidden group shadow-lg"
              >
                <div className="space-y-4">
                  <span className="text-sky text-xs font-black font-sans block">
                    {(idx + 1).toString().padStart(2, "0")}
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-base font-extrabold text-white uppercase tracking-wide group-hover:text-sky transition-colors">
                      {ind.title}
                    </h3>
                    <p className="text-slate-400 text-[11px] md:text-xs leading-relaxed font-normal font-sans">
                      {ind.desc}
                    </p>
                  </div>
                </div>

                <Link
                  href={ind.link}
                  className="w-9 h-9 rounded-full bg-slate-950 text-white flex items-center justify-center transition-transform hover:scale-105 group-hover:translate-x-0.5 shrink-0 border border-slate-800"
                >
                  <ArrowRight className="h-4 w-4 text-white" />
                </Link>
              </div>
            ))}
          </div>

          {/* Footer compliance banners */}
          <div className="border-t border-slate-900 pt-12 flex flex-wrap gap-2.5 justify-center">
            <span className="bg-white/5 border border-white/10 text-white font-bold uppercase tracking-wider text-[8px] px-3.5 py-1.5 rounded-full">
              DGFT Registered
            </span>
            <span className="bg-white/5 border border-white/10 text-white font-bold uppercase tracking-wider text-[8px] px-3.5 py-1.5 rounded-full">
              APEDA Exporter
            </span>
            <span className="bg-white/5 border border-white/10 text-white font-bold uppercase tracking-wider text-[8px] px-3.5 py-1.5 rounded-full">
              Spices Board Member
            </span>
          </div>

        </div>
      </section >

      {/* 6. PARTNERSHIP CTA FOOTER */}
      < section className="py-20 px-6 md:px-12 max-w-7xl mx-auto w-full text-center space-y-8" >
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-4.5xl font-black text-slate-900 uppercase tracking-tight leading-none">
            Ready to secure your bulk crop allocation?
          </h2>
          <p className="text-slate-500 text-sm font-normal">
            Discuss crop packaging customizations, bulk volume discounts, and shipping logs directly with our operations team.
          </p>
        </div>

        <Link
          href="/contact?subject=partnership"
          className="inline-flex items-center bg-[#293681] hover:bg-slate-950 text-white font-bold py-3.5 px-6 rounded-none text-xs uppercase tracking-wider transition-all duration-300 shadow-lg group border border-[#293681]"
        >
          Initiate Sourcing Request
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 text-white" />
        </Link>
      </section >
    </div >
  );
}
