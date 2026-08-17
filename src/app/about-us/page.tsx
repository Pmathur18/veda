"use client";

import React from "react";
import { Shield, Compass, Zap, Anchor, Users, Award, Calendar } from "lucide-react";

export default function AboutUsPage() {
  const stats = [
    { label: "Founded", value: "2018" },
    { label: "Active Clients", value: "450+" },
    { label: "Compliance Pass Rate", value: "100%" },
    { label: "Global Offices", value: "6 Hubs" }
  ];

  const milestones = [
    { year: "2018", title: "Company Foundation", desc: "Veda Impex was established in India, starting as a cargo coordination desk servicing local agricultural exporters." },
    { year: "2020", title: "Middle East Expansion", desc: "Opened a dedicated GCC transit hub in Dubai, securing direct access to Jebel Ali Port." },
    { year: "2022", title: "North American Customs Integration", desc: "Expanded compliance offices to Los Angeles and New York, introducing in-house US customs brokers." },
    { year: "2025", title: "CE & REACH EU Specialist Desk", desc: "Established EU compliance centers in Germany to assist exporters in meeting stringent chemicals registration standards." }
  ];

  const values = [
    {
      icon: Shield,
      title: "Regulatory Precision",
      desc: "We double-check every documentation form and certification before shipping to bypass customs holding queues."
    },
    {
      icon: Compass,
      title: "Global Reach",
      desc: "Our trade lanes link major commercial hubs across five continents with fixed scheduled carriers."
    },
    {
      icon: Zap,
      title: "Operational Velocity",
      desc: "Matching maritime arrivals directly to inland rail and trucking feeds to slash port cargo detention times."
    },
    {
      icon: Users,
      title: "Direct Specialist Support",
      desc: "Speak directly to trade brokers and routing experts, not automated ticketing systems."
    }
  ];

  const team = [
    {
      name: "Amit Varma",
      role: "Founder & Managing Director",
      bio: "20+ years of experience in cross-border trade lanes and maritime freight routing across APAC.",
      avatar: "AV"
    },
    {
      name: "Jean-Pierre Dubois",
      role: "Head of European Logistics",
      bio: "Former Hamburg port compliance director, specializing in REACH regulations and custom procedures.",
      avatar: "JD"
    },
    {
      name: "Sarah Patel",
      role: "Chief Compliance Officer",
      bio: "Licensed US Customs Broker with a focus on USDA, FDA, and FCC clearance requirements.",
      avatar: "SP"
    }
  ];

  return (
    <div className="py-12">
      {/* Intro Header */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-16 space-y-6">
        <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-[10px] font-bold text-neutral-850 uppercase tracking-widest">
          Who We Are
        </div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold text-neutral-900 tracking-tight leading-none uppercase max-w-4xl">
          We simplify the mechanics of <br />
          <span className="text-[#1261C9]">Global Trade.</span>
        </h1>
        
        <p className="text-neutral-500 text-sm md:text-base leading-relaxed max-w-2xl">
          Veda Impex is a premier international freight forwarding and import-export trading firm. We specialize in coordinating complex multi-modal transit networks and handling compliance, customs clearing, and international product sourcing.
        </p>
      </section>

      {/* Stats strip */}
      <section className="bg-[#071B3A] text-white py-12 mb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, idx) => (
            <div key={idx} className="text-center md:text-left space-y-1">
              <span className="text-xs text-neutral-400 font-semibold">{s.label}</span>
              <span className="text-3xl md:text-4xl font-black text-[#1261C9] block">{s.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Story & Vision */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
        <div className="lg:col-span-5 space-y-6">
          <h2 className="text-2xl md:text-3.5xl font-extrabold text-neutral-900 uppercase">
            Our Mission & Sourcing Values
          </h2>
          <p className="text-neutral-500 text-sm leading-relaxed">
            At Veda Impex, our core focus is eliminating logistical friction. We believe that securing direct routes is only half the battle; the real value is in ensuring regulatory safety. By handling the complexities of customs clearance, import licensing, and phytosanitary controls, we empower businesses to trade across borders with absolute confidence.
          </p>
        </div>

        <div className="lg:col-span-7 bg-[#1261C9]/5 rounded-3xl p-8 border border-[#1261C9]/10 space-y-6">
          <h3 className="text-lg font-bold text-neutral-900">Trade Lane Directives</h3>
          <p className="text-neutral-600 text-xs md:text-sm leading-relaxed">
            "Veda Impex was built on a simple premise: international logistics should not feel like a gamble. We operate strictly with premium air lines, maritime carrier alliances, and cross-border trucking lines to guarantee schedules, while maintaining a dedicated in-house compliance desk for customs operations."
          </p>
          <div className="flex items-center gap-3">
            <span className="h-10 w-10 bg-[#1261C9] text-neutral-950 font-bold flex items-center justify-center rounded-full text-xs">
              AV
            </span>
            <div>
              <span className="block text-xs font-bold text-neutral-900">Amit Varma</span>
              <span className="block text-[10px] text-neutral-400">Founder, Veda Impex</span>
            </div>
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="bg-neutral-50 border-y border-neutral-100 py-20 mb-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-xl mb-12 space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-450">Operating Principles</span>
            <h2 className="text-3xl font-extrabold text-neutral-900 uppercase">Our Core Beliefs</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div key={idx} className="bg-white rounded-2xl p-6 border border-neutral-100 space-y-4 shadow-sm">
                  <div className="p-3 bg-[#1261C9]/10 text-[#1261C9] rounded-xl inline-block">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="font-bold text-neutral-900 text-sm">{v.title}</h4>
                  <p className="text-neutral-400 text-xs leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-24">
        <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
          <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-450">Milestones</span>
          <h2 className="text-3xl font-extrabold text-neutral-900 uppercase">Our Journey</h2>
        </div>

        <div className="relative border-l border-neutral-200 ml-4 md:ml-32 space-y-12">
          {milestones.map((m, idx) => (
            <div key={idx} className="relative pl-8 md:pl-12 group">
              {/* Year marker */}
              <div className="absolute -left-[41px] top-1 h-5 w-5 bg-white border-4 border-[#1261C9] rounded-full group-hover:bg-[#1261C9] transition-colors" />
              
              <div className="absolute left-[-110px] top-1 hidden md:block text-right w-20">
                <span className="text-base font-extrabold text-[#1261C9]">{m.year}</span>
              </div>

              <div className="space-y-2">
                <span className="text-base font-bold text-neutral-900 md:hidden block">
                  {m.year} - {m.title}
                </span>
                <h4 className="text-lg font-bold text-neutral-900 hidden md:block">{m.title}</h4>
                <p className="text-neutral-500 text-xs md:text-sm leading-relaxed max-w-2xl">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-12">
        <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
          <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-450">Leadership</span>
          <h2 className="text-3xl font-extrabold text-neutral-900 uppercase">Expert Partners</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((t, idx) => (
            <div key={idx} className="bg-neutral-50 border border-neutral-100 rounded-3xl p-6 flex flex-col justify-between h-[250px]">
              <div>
                <span className="h-10 w-10 bg-[#071B3A] text-[#1261C9] rounded-full flex items-center justify-center font-extrabold text-sm mb-4">
                  {t.avatar}
                </span>
                <h4 className="font-bold text-neutral-900 text-base">{t.name}</h4>
                <span className="text-xs text-[#1261C9] font-semibold">{t.role}</span>
              </div>
              <p className="text-neutral-500 text-xs leading-relaxed mt-4">
                {t.bio}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
