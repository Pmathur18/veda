"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import {
  ShieldCheck,
  ArrowRight,
  FileText,
  Truck,
  Globe,
  Award,
  Package,
  Layers,
  MapPin,
  CheckCircle2,
  ChevronRight,
  TrendingUp,
  UserCheck
} from "lucide-react";

export default function AboutPage() {
  // Animation presets
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 35 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans antialiased overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[55vh] md:min-h-[60vh] flex flex-col items-center justify-center overflow-hidden -mt-16 bg-brand text-white">
        {/* Background Image: Warm, earthy tone landscape */}
        <Image
          src="/ChatGPT Image Aug 26, 2026, 06_56_03 PM.png" // TODO: replace with real landscape/farm asset later
          alt="Rajasthan Agricultural Landscape"
          fill
          priority
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-70"
        />
        {/* Dark brand overlay to maintain readable text contrast */}
        <div className="absolute inset-0 bg-slate-950/60 z-10" />

        {/* Hero Content Panel */}
        <div className="w-full max-w-5xl mx-auto px-6 md:px-8 py-20 md:py-24 relative z-20 flex flex-col items-center justify-center text-center">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-[10px] font-bold text-white/60 uppercase tracking-[0.2em] mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-sky font-bold">About Us</span>
          </nav>

          {/* Bold tilted headline typography - styled after gxpresss.com */}
          <div className="transform -skew-y-2 bg-[#293681] px-6 py-4 shadow-2xl border border-white/10">
            <h1 className="text-4xl md:text-7xl font-black tracking-tight uppercase leading-none text-white italic">
              About Veda Impex
            </h1>
          </div>

          <p className="text-sky font-bold text-sm md:text-lg uppercase tracking-wider mt-6 max-w-2xl font-display">
            Connecting Rajasthan's Harvest to the World
          </p>
        </div>
      </section>

      {/* 2. POSITIONING + STATS — "Rooted in Rajasthan, Reaching the World" */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Body Copy */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <motion.span variants={fadeInUp} className="text-xs font-bold text-accent uppercase tracking-widest block font-display">// BRAND POSITIONING</motion.span>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4.5xl font-black text-brand uppercase tracking-tight leading-none italic transform -skew-y-1">
              Rooted in Rajasthan, Reaching the World
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-slate-600 text-sm md:text-base leading-relaxed">
              Veda Impex is a trusted export house from Jodhpur, Rajasthan, specializing in premium-quality Psyllium Husk and Senna Leaves for international buyers. We work directly with growers and processors to ensure consistent quality, timely shipment, and full export compliance — positioning Veda Impex as an <strong className="text-brand">export partner</strong>, not a manufacturer or middleman reseller.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-slate-600 text-sm md:text-base leading-relaxed">
              Our sourcing network spans Rajasthan's key psyllium and senna-growing belts, letting us maintain tight quality control from farm to freight, while our logistics partnerships ensure smooth customs clearance and on-time international delivery.
            </motion.p>
          </motion.div>

          {/* Right Column: 3–4 Stat Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Stat 1 */}
            {/* TODO: replace with real figures once validated */}
            <div className="bg-slate-50 border-2 border-brand p-6 flex flex-col justify-between h-[160px] text-left hover:-translate-y-1 transition-transform">
              <span className="text-[10px] font-bold text-accent uppercase tracking-widest font-display">// GLOBAL REACH</span>
              <h3 className="text-4xl font-black text-brand">15+</h3>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Countries Served</p>
            </div>

            {/* Stat 2 */}
            {/* TODO: replace with real figures once validated */}
            <div className="bg-slate-50 border-2 border-brand p-6 flex flex-col justify-between h-[160px] text-left hover:-translate-y-1 transition-transform">
              <span className="text-[10px] font-bold text-accent uppercase tracking-widest font-display">// EXPERIENCE</span>
              <h3 className="text-4xl font-black text-brand">5+</h3>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Years in Trade</p>
            </div>

            {/* Stat 3 */}
            {/* TODO: replace with real figures once validated */}
            <div className="bg-slate-50 border-2 border-brand p-6 flex flex-col justify-between h-[160px] text-left hover:-translate-y-1 transition-transform">
              <span className="text-[10px] font-bold text-accent uppercase tracking-widest font-display">// SHIPMENTS</span>
              <h3 className="text-4xl font-black text-brand">1500+</h3>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">MT Exported Annually</p>
            </div>

            {/* Stat 4 */}
            <div className="bg-slate-50 border-2 border-brand p-6 flex flex-col justify-between h-[160px] text-left hover:-translate-y-1 transition-transform">
              <span className="text-[10px] font-bold text-accent uppercase tracking-widest font-display">// VERIFICATION</span>
              <h3 className="text-4xl font-black text-brand">100%</h3>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Quality Checked</p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. ORIGIN SPOTLIGHT — "The Jodhpur Base" */}
      <section className="bg-slate-50 py-20 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-slate-200 pb-10">
            {/* Heading Column */}
            <div className="lg:col-span-6 text-left space-y-2">
              <span className="text-xs font-bold text-accent uppercase tracking-widest block font-display">// SOURCING ANCHOR</span>
              <h2 className="text-3xl md:text-5xl font-black text-brand uppercase tracking-tight leading-none italic transform -skew-y-1">
                The Jodhpur Base
              </h2>
            </div>
            
            {/* Copy Column */}
            <div className="lg:col-span-6 text-left text-slate-600 text-sm md:text-base leading-relaxed">
              Our Jodhpur base is where sourcing, quality grading, and export packaging come together — positioned close to Rajasthan's psyllium and senna cultivation belt for faster turnaround and fresher, more consistent produce.
            </div>
          </div>

          {/* Small image gallery/grid with rotated layouts - styled after gxpresss.com */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            
            {/* Image 1 */}
            {/* TODO: replace with real processing facility asset later */}
            <div className="group relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border-2 border-brand bg-slate-200 transform hover:rotate-1 transition-transform duration-300">
              <Image
                src="/psyllium-husk.jpg"
                alt="Jodhpur Processing Unit"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-4">
                <span className="text-white text-[10px] font-bold uppercase tracking-wider">Processing Facility</span>
              </div>
            </div>

            {/* Image 2 */}
            {/* TODO: replace with real packaging asset later */}
            <div className="group relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border-2 border-brand bg-slate-200 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
              <Image
                src="/psyllium-powder.jpg"
                alt="Custom Export Packaging"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-4">
                <span className="text-white text-[10px] font-bold uppercase tracking-wider">Packaging Desk</span>
              </div>
            </div>

            {/* Image 3 */}
            {/* TODO: replace with real quality check asset later */}
            <div className="group relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border-2 border-brand bg-slate-200 transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <Image
                src="/senna-leaves.jpg"
                alt="Quality Lab Testing"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-4">
                <span className="text-white text-[10px] font-bold uppercase tracking-wider">Quality Grading</span>
              </div>
            </div>

            {/* Image 4 */}
            {/* TODO: replace with real dispatch loading asset later */}
            <div className="group relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border-2 border-brand bg-slate-200 transform -rotate-1 hover:rotate-1 transition-transform duration-300">
              <Image
                src="/senna-pods.jpg"
                alt="Container Loading for Mundra Port"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-4">
                <span className="text-white text-[10px] font-bold uppercase tracking-wider">Loading & Dispatch</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. TRUST BAND — "Why Global Buyers Choose Veda Impex" */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto w-full relative">
        <div className="space-y-12 text-center">
          <div className="space-y-2">
            <span className="text-xs font-bold text-accent uppercase tracking-widest block font-display">// TRUST VALUE</span>
            <h2 className="text-3xl md:text-5xl font-black text-brand uppercase tracking-tight leading-none italic transform -skew-y-1">
              Why Global Buyers Choose Veda Impex
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Card 1 */}
            <div className="border-2 border-brand p-8 rounded-none bg-white space-y-4 hover:shadow-xl hover:bg-slate-50/50 transition-all duration-300 text-left">
              <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                <Globe className="h-5 w-5" />
              </div>
              <h3 className="text-base font-black text-brand uppercase tracking-wider">Direct Sourcing</h3>
              <p className="text-slate-550 text-xs leading-relaxed font-sans">
                No middlemen; direct relationships with growers and processors to guarantee the raw integrity of each crop batch.
              </p>
            </div>

            {/* Card 2 */}
            <div className="border-2 border-brand p-8 rounded-none bg-white space-y-4 hover:shadow-xl hover:bg-slate-50/50 transition-all duration-300 text-left">
              <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="text-base font-black text-brand uppercase tracking-wider">Export-Ready Compliance</h3>
              <p className="text-slate-550 text-xs leading-relaxed font-sans">
                Every shipment is standardized, chemical-residue tested, and packed to meet strict international documentation and port clearances.
              </p>
            </div>

            {/* Card 3 */}
            <div className="border-2 border-brand p-8 rounded-none bg-white space-y-4 hover:shadow-xl hover:bg-slate-50/50 transition-all duration-300 text-left">
              <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                <Truck className="h-5 w-5" />
              </div>
              <h3 className="text-base font-black text-brand uppercase tracking-wider">Reliable Logistics</h3>
              <p className="text-slate-550 text-xs leading-relaxed font-sans">
                Consistent, on-time delivery from Rajasthan to Mundra Port, backed by top-tier freight and container shipping lines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FOUNDER SECTION */}
      <section className="bg-brand text-white py-20 px-6 md:px-12 relative overflow-hidden">
        {/* Decorative backdrop */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Founder Photo Container */}
          {/* TODO: replace with real founder headshot later */}
          <div className="md:col-span-4 relative aspect-[4/5] rounded-[32px] overflow-hidden border-4 border-slate-900 bg-slate-800 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-300">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-700 to-slate-900 flex items-center justify-center">
              <UserCheck className="h-16 w-16 text-sky/40" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent flex flex-col justify-end p-5 text-left">
              <span className="text-[9px] font-black text-sky uppercase tracking-widest">Founder Profile</span>
              <h4 className="text-sm font-bold uppercase text-white">Deepeksha Jain</h4>
              <p className="text-[10px] text-slate-300">Founder, Veda Impex</p>
            </div>
          </div>

          {/* Founder Statement Quote */}
          <div className="md:col-span-8 space-y-6 text-left">
            <span className="text-[10px] font-bold text-sky uppercase tracking-widest block font-display">// FOUNDER STATEMENT</span>
            <blockquote className="text-xl md:text-2xl font-black italic leading-snug font-display text-slate-100">
              "At Veda Impex, our mission is to build absolute trust between India's finest producers and our global partners. By establishing direct sourcing lines and controlling quality at the origin, we deliver consistency that matches international standards."
            </blockquote>
            <div className="h-0.5 w-16 bg-sky" />
            <p className="text-slate-300 text-xs md:text-sm leading-relaxed max-w-xl font-sans">
              Deepeksha Jain founded Veda Impex with a commitment to streamline botanical exports. By anchoring the operation in Jodhpur and controlling every step of the grading process, we ensure our global partners receive pure, premium cargo precisely aligned with their technical specs.
            </p>
          </div>

        </div>
      </section>

      {/* 6. PROCESS BAND — "From Farm to Freight" */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto relative overflow-hidden">
        <div className="space-y-12">
          
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-accent uppercase tracking-widest block font-display">// WORKFLOW PIPELINE</span>
            <h2 className="text-3xl md:text-5xl font-black text-brand uppercase tracking-tight leading-none italic transform -skew-y-1">
              From Farm to Freight
            </h2>
            <p className="text-slate-500 text-xs md:text-sm font-medium tracking-wide">
              How VEDA IMPEX coordinates and guarantees your supply chain:
            </p>
          </div>

          {/* Process Diagram / Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {/* Step 1 */}
            <div className="border border-brand p-5 bg-white space-y-3 hover:bg-slate-50 transition-colors text-left relative">
              <span className="text-[10px] font-bold text-slate-400 block">// STEP 01</span>
              <h4 className="text-xs font-black text-brand uppercase tracking-wider">Direct Sourcing</h4>
              <p className="text-[10px] text-slate-500 leading-normal">
                Direct crop procurement from Rajasthan's prime agricultural belts.
              </p>
            </div>

            {/* Step 2 */}
            <div className="border border-brand p-5 bg-white space-y-3 hover:bg-slate-50 transition-colors text-left relative">
              <span className="text-[10px] font-bold text-slate-400 block">// STEP 02</span>
              <h4 className="text-xs font-black text-brand uppercase tracking-wider">Quality Grading</h4>
              <p className="text-[10px] text-slate-500 leading-normal">
                Rigorous testing for chemical residues, sennosides levels, and moisture at Jodhpur.
              </p>
            </div>

            {/* Step 3 */}
            <div className="border border-brand p-5 bg-white space-y-3 hover:bg-slate-50 transition-colors text-left relative">
              <span className="text-[10px] font-bold text-slate-400 block">// STEP 03</span>
              <h4 className="text-xs font-black text-brand uppercase tracking-wider">Custom Packing</h4>
              <p className="text-[10px] text-slate-500 leading-normal">
                Standardized bags, fiber drums, or compressed bales matched to buyer specs.
              </p>
            </div>

            {/* Step 4 */}
            <div className="border border-brand p-5 bg-white space-y-3 hover:bg-slate-50 transition-colors text-left relative">
              <span className="text-[10px] font-bold text-slate-400 block">// STEP 04</span>
              <h4 className="text-xs font-black text-brand uppercase tracking-wider">Compliance</h4>
              <p className="text-[10px] text-slate-500 leading-normal">
                Pre-shipment clearances: Phytosanitary certificates and cargo fumigation.
              </p>
            </div>

            {/* Step 5 */}
            <div className="border border-brand p-5 bg-white space-y-3 hover:bg-slate-50 transition-colors text-left relative">
              <span className="text-[10px] font-bold text-slate-400 block">// STEP 05</span>
              <h4 className="text-xs font-black text-brand uppercase tracking-wider">Shipment Dispatch</h4>
              <p className="text-[10px] text-slate-500 leading-normal">
                Safe container load transit to Mundra Port for immediate ocean boarding.
              </p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-left text-xs md:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-8 mt-4">
            <p>
              We start by sourcing botanical materials straight from crop collections in Western India. Raw items are moved directly to our anchor processing facilities in Jodhpur, where specialized grading screens separate impurities and match specifications grades.
            </p>
            <p>
              Once graded, commodities are packed to spec and prepared for export clearances. We arrange Phytosanitary certifications, fumigation registers, and laboratory chemical reports, tracking container cargo from origin loading to arrival port.
            </p>
          </div>

        </div>
      </section>

      {/* 7. CLOSING CTA */}
      <section className="bg-slate-50 py-16 px-6 md:px-12 relative border-t border-slate-200">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-2xl md:text-3.5xl font-black uppercase text-brand tracking-tight max-w-xl mx-auto leading-tight italic transform -skew-y-1">
            Looking to Import Premium Psyllium Husk or Senna Leaves?
          </h2>
          
          <p className="text-slate-500 text-xs md:text-sm max-w-md mx-auto leading-relaxed">
            Let us review your technical specification requirements. Our coordinate desk is ready to organize sample deliveries and logistics quotes.
          </p>

          <div className="pt-2">
            {/* Orange Accent CTA button styled as requested */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-6 bg-[#E25C3D] hover:bg-[#c94b2f] text-white font-black py-4 px-8 rounded-none text-xs uppercase tracking-[0.1em] transition-all duration-300 shadow-lg shadow-orange-500/10 cursor-pointer border border-[#E25C3D]"
            >
              Submit Enquiry Sheet
              <ArrowRight className="h-4.5 w-4.5 text-white" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
