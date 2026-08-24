"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Compass,
  Users,
  ArrowUpRight,
  ArrowRight,
  MapPin,
  Mail,
  CheckCircle2,
  Globe,
  Building,
  Anchor,
  FileCheck2
} from "lucide-react";
import RotatingCard from "../../components/RotatingCard";

export default function AboutPage() {
  const stats = [
    { label: "Purity Grade Sourced", value: "99.5%" },
    { label: "Transit Success Rate", value: "100%" },
    { label: "Containers Exported", value: "500+" }
  ];

  const values = [
    {
      icon: ShieldCheck,
      title: "Integrity First",
      desc: "Clear, direct, and honest conversations—we only commit to what we can flawlessly execute without compromise."
    },
    {
      icon: Compass,
      title: "Active Oversight",
      desc: "Rigorous direct oversight of sorting, heavy-metal compliance, phytosanitary cleaning, and export documentation."
    },
    {
      icon: Users,
      title: "Transit Consistency",
      desc: "Delivering the same batch purity, particle size, and container packaging integrity shipment after shipment."
    }
  ];

  const chartData = [
    { label: "Jan", val: "40%" },
    { label: "Feb", val: "55%" },
    { label: "Mar", val: "45%" },
    { label: "Apr", val: "70%" },
    { label: "May", val: "85%" },
    { label: "Jun", val: "75%" },
    { label: "Jul", val: "90%" },
    { label: "Aug", val: "95%" }
  ];

  return (
    <div className="py-12 bg-white min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-20 space-y-8">
        <div className="max-w-4xl space-y-6 text-left">
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[10px] font-bold text-accent uppercase tracking-widest">
            Corporate Profile
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] uppercase">
            Veda Impex one of the leading <br />
            <span className="relative inline-block mt-2">
              <span className="absolute inset-0 bg-accent -skew-x-6 rotate-[-1deg]" />
              <span className="relative text-white px-5 py-1 inline-block rotate-[-1deg]">
                coordinators
              </span>
            </span>{" "}
            of agricultural exports in India
          </h1>

          <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-3xl font-normal">
            Based out of Jodhpur, Rajasthan, VEDA IMPEX is an Indian export coordinator built around a single, uncompromising objective: making cross-border sourcing from India simple, transparent, and completely dependable.
          </p>

          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center bg-accent hover:bg-accent-hover text-white font-bold py-3.5 px-6 rounded-full text-xs uppercase tracking-wider transition-all duration-300 shadow-md shadow-accent/10 border-2 border-slate-950"
            >
              Contact Us <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Large Crop Banner Image with absolute overlays on Desktop */}
        <div className="relative h-[320px] md:h-[480px] w-full rounded-3xl overflow-hidden shadow-xl border-2 border-slate-900 bg-slate-100">
          {/* Main banner image with blue tint blend overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center filter grayscale opacity-95"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=1200&auto=format&fit=crop')`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-brand/60 via-brand/20 to-sky/20 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />

          {/* Desktop Overlapping Badges (Bottom Left) */}
          <div className="absolute bottom-6 left-6 hidden md:flex gap-4 z-15">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white/95 backdrop-blur-sm border-2 border-slate-900 p-4 rounded-2xl w-32 shadow-lg text-left"
              >
                <span className="block font-black text-xl text-accent font-display leading-none">
                  {stat.value}
                </span>
                <span className="block text-[8px] font-bold text-slate-500 uppercase tracking-widest mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Desktop Overlapping Info Card (Bottom Right) */}
          <div className="absolute bottom-6 right-6 hidden md:block w-80 bg-slate-950/95 border-2 border-slate-800 text-white p-6 rounded-2xl shadow-2xl text-left z-15">
            <span className="bg-sky text-white px-2.5 py-0.5 rounded text-[8px] font-bold tracking-widest uppercase">
              Operations Center
            </span>
            <h3 className="font-black text-white text-sm uppercase mt-3 mb-2">Direct Jodhpur Liaison</h3>
            <p className="text-[10px] text-slate-350 leading-relaxed font-normal">
              VEDA IMPEX coordinates crops directly from desert growing zones, ensuring standardized batch quality with transport routing through Mundra Port.
            </p>
          </div>
        </div>

        {/* Mobile View: Render the overlaps as standard inline cards for responsiveness */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:hidden pt-4">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border-2 border-slate-900 p-5 rounded-2xl text-center"
            >
              <span className="block font-black text-2xl text-accent font-display">
                {stat.value}
              </span>
              <span className="block text-[9px] font-bold text-slate-500 uppercase tracking-widest mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 2. HISTORY & DEVELOPMENT PATH */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-24 relative py-12">
        {/* Floating background graphics matching reference layout */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 w-28 h-28 hidden lg:block rounded-2xl overflow-hidden border-2 border-slate-900 shadow-md">
          <div
            className="w-full h-full bg-cover bg-center filter grayscale contrast-125"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?q=80&w=300&auto=format&fit=crop')`
            }}
          />
        </div>
        <div className="absolute right-6 top-1/3 w-28 h-28 hidden lg:block rounded-2xl overflow-hidden border-2 border-slate-900 shadow-md">
          <div
            className="w-full h-full bg-cover bg-center filter grayscale contrast-125"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=300&auto=format&fit=crop')`
            }}
          />
        </div>

        <div className="max-w-3xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center space-x-2">
            <span className="h-1 w-6 bg-accent rounded" />
            <span className="text-[10px] font-bold text-accent uppercase tracking-widest">Our Development Path</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase leading-none">
            From Sourcing Alignment to Global Delivery
          </h2>

          <div className="h-1 w-12 bg-accent mx-auto rounded" />

          <p className="text-slate-500 text-sm leading-relaxed font-normal">
            Founded in Jodhpur, Rajasthan, VEDA IMPEX began with a single mission: to remove ambiguity from bulk commodity trade. We do not push off-the-shelf inventory. Instead, we evaluate required technical parameters—including mesh size, purity levels, swell volume, and heavy metal limits—before confirming any contract.
          </p>

          <p className="text-slate-500 text-sm leading-relaxed font-normal">
            Today, our liaison network coordinates bulk containers of premium Psyllium Husk and Senna Leaves directly from dry farms to international B2B buyers, maintaining complete regulatory documentation and packaging integrity.
          </p>
        </div>
      </section>

      {/* 3. SAAS-STYLE DARK BLUE ANALYTICS CARD */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-24">
        <div className="bg-[#071B3A] text-white p-8 md:p-14 rounded-3xl border-2 border-slate-950 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />

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
                <div className="w-8 h-8 rounded-full bg-blue-900 border border-blue-700 flex items-center justify-center text-xs font-bold text-sky">
                  <Globe className="h-4 w-4" />
                </div>
                <div>
                  <span className="block text-[8px] text-slate-450 uppercase font-bold tracking-wider">Step 1: Origin</span>
                  <span className="block text-[11px] font-bold text-white uppercase">Rajasthan Agriculture Hubs</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-900 border border-blue-700 flex items-center justify-center text-xs font-bold text-sky">
                  <Building className="h-4 w-4" />
                </div>
                <div>
                  <span className="block text-[8px] text-slate-455 uppercase font-bold tracking-wider">Step 2: Processing</span>
                  <span className="block text-[11px] font-bold text-white uppercase">Jodhpur Grading Facility</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-900 border border-blue-700 flex items-center justify-center text-xs font-bold text-sky">
                  <Anchor className="h-4 w-4" />
                </div>
                <div>
                  <span className="block text-[8px] text-slate-455 uppercase font-bold tracking-wider">Step 3: Export Dispatch</span>
                  <span className="block text-[11px] font-bold text-white uppercase">Mundra Port Liaison Desk</span>
                </div>
              </div>
            </div>

            {/* Dashboard stats pills */}
            <div className="flex flex-wrap gap-3">
              <div className="bg-slate-900 border border-slate-800 px-3.5 py-2 rounded-xl text-left">
                <span className="block text-[10px] font-bold text-sky leading-none">99.8%</span>
                <span className="text-[7px] text-slate-400 font-bold uppercase tracking-wider">Quality Rate</span>
              </div>
              <div className="bg-slate-900 border border-slate-800 px-3.5 py-2 rounded-xl text-left">
                <span className="block text-[10px] font-bold text-sky leading-none">100%</span>
                <span className="text-[7px] text-slate-400 font-bold uppercase tracking-wider">Doc Compliance</span>
              </div>
              <div className="bg-slate-900 border border-slate-800 px-3.5 py-2 rounded-xl text-left">
                <span className="block text-[10px] font-bold text-sky leading-none">0%</span>
                <span className="text-[7px] text-slate-400 font-bold uppercase tracking-wider">Batch Refusals</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive White Analytics Card */}
          <div className="lg:col-span-7 bg-white text-slate-900 p-6 md:p-8 rounded-2xl border-2 border-slate-950 shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-4 text-left">
              <div className="flex justify-between items-center">
                <span className="bg-blue-50 text-accent border border-blue-150 px-2.5 py-0.5 rounded text-[8px] font-bold tracking-wider uppercase">
                  Quality Audit
                </span>
                <span className="text-[9px] text-slate-400 font-mono">Real-time parameters</span>
              </div>
              <h4 className="text-base font-black uppercase text-slate-900">
                Analysis of batch purity and crop consistency
              </h4>
            </div>

            {/* Analytics Bar Chart Visual */}
            <div className="h-32 flex items-end justify-between gap-2 border-b border-slate-200 pb-2 pt-4">
              {chartData.map((bar, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center group">
                  <div className="w-full bg-slate-100 rounded-t-md h-24 relative overflow-hidden flex items-end">
                    <div
                      className="w-full bg-accent group-hover:bg-sky transition-colors duration-200 rounded-t-md"
                      style={{ height: bar.val }}
                    />
                  </div>
                  <span className="text-[8px] font-bold text-slate-400 mt-1.5 uppercase font-mono">{bar.label}</span>
                </div>
              ))}
            </div>

            {/* Join Our Sourcing / Partner Card at bottom */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white font-bold text-xs shrink-0 font-mono border-2 border-slate-900">
                  DJ
                </div>
                <div>
                  <span className="block text-[9px] font-black text-slate-900 uppercase">Deepeksha Jain</span>
                  <span className="block text-[8px] text-slate-500 font-medium">Founder & Export Liaison</span>
                </div>
              </div>

              <Link
                href="/contact"
                className="bg-accent hover:bg-accent-hover text-white font-bold py-2.5 px-4 rounded-lg text-[9px] uppercase tracking-wider transition-all border border-transparent shadow"
              >
                Liaison Sourcing Request
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FARMER QUALITY BANNER */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-24">
        <div className="relative h-[280px] md:h-[360px] w-full rounded-3xl overflow-hidden shadow-lg border-2 border-slate-900 bg-slate-100 flex items-center justify-center text-center p-6 md:p-12">
          {/* Background image of farmer in field with blue multiply tint */}
          <div
            className="absolute inset-0 bg-cover bg-center filter grayscale contrast-125"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?q=80&w=1200&auto=format&fit=crop')`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-brand/75 via-brand/40 to-sky/20 mix-blend-multiply" />
          <div className="absolute inset-0 bg-black/40" />

          <div className="max-w-3xl space-y-6 relative z-10">
            <h2 className="text-2xl md:text-4xl font-black text-white uppercase leading-tight tracking-tight">
              We ensure high product quality, stable deliveries, and compliance with international standards.
            </h2>
            
            {/* Stat Pills Bottom Right style */}
            <div className="flex flex-wrap gap-2.5 justify-center">
              <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold uppercase tracking-wider text-[8px] px-3.5 py-1.5 rounded-full">
                DGFT Registered
              </span>
              <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold uppercase tracking-wider text-[8px] px-3.5 py-1.5 rounded-full">
                APEDA Exporter
              </span>
              <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold uppercase tracking-wider text-[8px] px-3.5 py-1.5 rounded-full">
                Spices Board Member
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MISSION & VISION CTA FOOTER */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-12">
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
          <div className="inline-flex items-center space-x-2">
            <span className="h-1 w-6 bg-accent rounded" />
            <span className="text-[10px] font-bold text-accent uppercase tracking-widest">Our Values</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase">
            We create high-quality agricultural partnerships
          </h2>
          <p className="text-slate-500 text-sm max-w-2xl mx-auto font-normal">
            Streamlining cross-border trade with India through precise specification matching, open communication, and absolute batch accountability.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-left mb-16">
          {values.map((v, idx) => {
            const Icon = v.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border-2 border-slate-900 space-y-4 hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between h-full"
              >
                <div className="space-y-3">
                  <div className="p-2.5 bg-blue-50 text-accent rounded-xl inline-block border border-blue-150">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="font-black text-slate-900 uppercase text-sm leading-none">{v.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed font-normal">{v.desc}</p>
                </div>
                <div className="text-[9px] font-bold text-accent uppercase tracking-widest border-t border-slate-100 pt-3 flex items-center gap-1.5">
                  <FileCheck2 className="h-3.5 w-3.5" /> Checked Standard
                </div>
              </div>
            );
          })}
        </div>

        {/* Center CTA Button */}
        <div className="text-center relative py-6">
          <div className="absolute left-10 top-0 w-20 h-20 hidden lg:block rounded-2xl overflow-hidden border-2 border-slate-900 shadow-sm">
            <div
              className="w-full h-full bg-cover bg-center filter grayscale contrast-125"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=200&auto=format&fit=crop')`
              }}
            />
          </div>
          <div className="absolute right-10 bottom-0 w-20 h-20 hidden lg:block rounded-2xl overflow-hidden border-2 border-slate-900 shadow-sm">
            <div
              className="w-full h-full bg-cover bg-center filter grayscale contrast-125"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1564894536308-4011244a307e?q=80&w=200&auto=format&fit=crop')`
              }}
            />
          </div>

          <Link
            href="/contact?subject=partnership"
            className="inline-flex items-center bg-accent hover:bg-accent-hover text-white font-bold py-4 px-8 rounded-full text-xs uppercase tracking-wider transition-all duration-300 shadow-lg border-2 border-slate-950 group"
          >
            Initiate Sourcing Request
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  );
}
