"use client";

import React from "react";
import { Compass, Users, ShieldCheck, HeartHandshake, Eye, Target } from "lucide-react";
import RotatingCard from "../../components/RotatingCard";

export default function AboutPage() {
  const values = [
    {
      icon: ShieldCheck,
      title: "Integrity",
      desc: "Clear, direct, and honest conversations—we only commit to what we can flawlessly execute."
    },
    {
      icon: Compass,
      title: "Responsibility",
      desc: "Rigorous oversight of documentation, packaging, and export compliance."
    },
    {
      icon: Users,
      title: "Consistency",
      desc: "Delivering the same benchmark quality shipment after shipment."
    }
  ];

  return (
    <div className="py-12 bg-white min-h-screen">
      {/* 1. HEADER */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-16 space-y-6">
        <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-bold text-white uppercase tracking-widest">
          Corporate Profile
        </div>
        
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-none uppercase max-w-4xl">
          We Believe Good Business <br />
          <span className="relative inline-block mt-2">
            <span className="absolute inset-0 bg-brand -skew-x-6 rotate-[-1deg]" />
            <span className="relative text-white px-5 py-1 inline-block rotate-[-1deg]">
              Starts With Trust.
            </span>
          </span>
        </h1>
        
        <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-2xl font-normal">
          Based out of Jodhpur, Rajasthan, VEDA IMPEX is an Indian export company built around a single, uncompromising objective: making cross-border sourcing from India simple, transparent, and completely dependable. Our portfolio focuses on high-demand, world-class Indian commodities—starting with Psyllium Husk and Senna Leaves. To us, exporting isn't just logistics; it is an obligation to respect buyer specifications, protect cargo integrity, and uphold commercial commitments without fail.
        </p>
      </section>

      {/* 2. VISION & MISSION */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-24 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Mission */}
        <div className="border-2 border-slate-900 rounded-3xl p-8 space-y-4 hover:shadow-lg transition-shadow duration-300">
          <div className="p-3 bg-brand-light text-accent rounded-xl inline-block border border-accent/20">
            <Target className="h-6 w-6" />
          </div>
          <h3 className="text-2xl font-black text-slate-900 uppercase">Our Mission</h3>
          <p className="text-slate-500 text-sm leading-relaxed">
            To streamline international trade with India through precise specification alignment, open communication, and end-to-end shipment accountability.
          </p>
        </div>

        {/* Vision */}
        <div className="border-2 border-slate-900 rounded-3xl p-8 space-y-4 hover:shadow-lg transition-shadow duration-300">
          <div className="p-3 bg-brand-light text-accent rounded-xl inline-block border border-accent/20">
            <Eye className="h-6 w-6" />
          </div>
          <h3 className="text-2xl font-black text-slate-900 uppercase">Our Vision</h3>
          <p className="text-slate-500 text-sm leading-relaxed">
            To build VEDA IMPEX into a globally respected Indian export brand known not merely for volume, but as the standard for trade reliability and integrity.
          </p>
        </div>
      </section>

      {/* 3. FOUNDER SECTION */}
      <section className="bg-slate-55 border-y border-slate-100 py-20 mb-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center md:text-left mb-12">
            <span className="text-[11px] font-bold text-accent uppercase tracking-widest block mb-2">
              Leadership
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tight">
              The Person Behind VEDA IMPEX
            </h2>
            <div className="h-1.5 w-16 bg-brand rounded mt-3" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Founder Image Card */}
            <div className="lg:col-span-5 flex justify-center">
              <RotatingCard angle={-2} className="border-2 border-slate-900 w-full max-w-sm overflow-hidden bg-slate-900 relative aspect-square">
                {/* Styled Professional Frame Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900 to-sky/20 flex flex-col items-center justify-center p-8 text-center space-y-4">
                  <div className="h-24 w-24 rounded-full border-4 border-sky bg-slate-850 flex items-center justify-center text-3xl font-black text-sky font-mono">
                    DJ
                  </div>
                  <div>
                    <h4 className="text-white font-black text-lg uppercase">Deepeksha Jain</h4>
                    <p className="text-sky text-xs uppercase tracking-widest font-bold">Founder, VEDA IMPEX</p>
                  </div>
                  <p className="text-slate-400 text-[10px] leading-relaxed max-w-xs">
                    Managing export operations, physical quality screening, and international B2B client relations.
                  </p>
                </div>
              </RotatingCard>
            </div>

            {/* Founder Quote Side */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-5xl text-sky font-serif block leading-none select-none">“</span>
              <p className="text-slate-700 text-base md:text-lg leading-relaxed font-medium italic -mt-4">
                "I founded VEDA IMPEX on a simple foundation: global trade thrives when trust is mutual and absolute. We are building this company step-by-step—creating long-term value and dependable relationships, not short-term transactional hype."
              </p>
              <div className="space-y-1">
                <span className="block font-black text-slate-900 uppercase text-sm tracking-wider">Deepeksha Jain</span>
                <span className="block text-xs text-sky uppercase tracking-wider font-bold">Founder, VEDA IMPEX</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHAT WE STAND FOR */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-12">
        <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
          <span className="text-[10px] font-bold uppercase tracking-wider text-accent">Operating Principles</span>
          <h2 className="text-3xl font-black text-slate-900 uppercase">Our Core Pillars</h2>
          <div className="h-1.5 w-16 bg-brand mx-auto rounded" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {values.map((v, idx) => {
            const Icon = v.icon;
            return (
              <div key={idx} className="bg-white rounded-2xl p-6 border-2 border-slate-900 space-y-4 hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="p-2.5 bg-brand-light text-accent rounded-xl inline-block border border-accent/20">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="font-black text-slate-900 uppercase text-sm">{v.title}</h4>
                  <p className="text-slate-550 text-xs leading-relaxed">{v.desc}</p>
                </div>
                <div className="text-[9px] font-bold text-accent uppercase tracking-widest border-t border-slate-100 pt-3">
                  Verified Principle
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
