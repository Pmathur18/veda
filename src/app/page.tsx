"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  FileText,
  CheckCircle2,
  ShieldCheck,
  MessageSquare,
  Calendar,
  MapPin,
  Layers
} from "lucide-react";
import { productsData } from "../data/products-data";

const parseValue = (val: string) => {
  const numMatch = val.match(/^(\d+(\.\d+)?)(.*)$/);
  if (numMatch) {
    return {
      number: parseFloat(numMatch[1]),
      isDecimal: numMatch[1].includes("."),
      suffix: numMatch[3]
    };
  }
  return { number: null, isDecimal: false, suffix: val };
};

function Counter({ value }: { value: string }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = React.useState(0);

  const parsed = parseValue(value);

  React.useEffect(() => {
    if (isInView && parsed.number !== null) {
      let startTime: number;
      const duration = 2000; // 2 seconds
      const startValue = 0;
      const endValue = parsed.number;

      const animateStep = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const easeProgress = progress * (2 - progress);
        const currentCount = startValue + easeProgress * (endValue - startValue);
        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animateStep);
        }
      };

      requestAnimationFrame(animateStep);
    }
  }, [isInView, parsed.number]);

  if (parsed.number === null) {
    return <span ref={ref}>{value}</span>;
  }

  const displayVal = parsed.isDecimal ? count.toFixed(1) : Math.floor(count).toString();

  return (
    <span ref={ref}>
      {displayVal}
      {parsed.suffix}
    </span>
  );
}

export default function HomePage() {
  const stats = [
    { label: "Purity Grade Target", value: "99.5%" },
    { label: "Transit Documentation Success", value: "100%" },
    { label: "Commercial Containers Exported", value: "500+" },
    { label: "Primary Shipping Lanes", value: "24/7" }
  ];

  // stickyScrollContent removed

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. HERO VIDEO BANNER */}
      <section className="relative w-full min-h-[80vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden -mt-16">
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
        <div className="w-full max-w-7xl mx-auto px-6 md:px-8 py-24 md:py-32 relative z-20 flex flex-col items-center justify-center text-center">

          {/* Headline */}
          <div className="">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tight leading-[1.2] uppercase flex flex-col items-center">
              VEDA IMPEX TRUST BEHIND EVERY SHIPMENT
            </h1>
          </div>

          {/* Description */}
          <motion.p
            className="text-white text-sm md:text-base leading-relaxed max-w-2xl font-normal font-sans mx-auto mt-6">
            Indian Natural Ingredients for Global Markets. Premium Psyllium Husk and Senna Leaves delivered with unmatched consistency, absolute transparency, and international care.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.7
            }}
            className="flex flex-col sm:flex-row gap-4 pt-6 justify-center items-center"
          >
            <Link
              href="/products"
              className="group bg-white hover:bg-slate-100 text-[#293681] font-bold py-3 px-6 rounded-none text-xs transition-all flex items-center justify-between gap-6 uppercase tracking-wider border border-white cursor-pointer shadow-lg"
            >
              Explore Products
              <ArrowRight className="h-4 w-4 text-[#293681]" />
            </Link>

            <Link
              href="/contact"
              className="group bg-transparent hover:bg-white/10 text-white font-bold py-3 px-6 rounded-none text-xs transition-all flex items-center justify-between gap-6 uppercase tracking-wider border border-white/30 cursor-pointer"
            >
              Request a Quote
              <ArrowUpRight className="h-4 w-4 text-white" />
            </Link>
          </motion.div>

        </div>
      </section >

      {/* Info Cards Row Overlapping the transition */}
      <div className="max-w-4xl mx-auto px-6 md:px-8 -mt-20 relative z-30 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.85 }}
            className="bg-[#293681] border border-white/10 p-8 rounded-none shadow-2xl space-y-4 text-left hover:scale-[1.01] transition-transform duration-300"
          >
            <h3 className="font-black text-white text-lg uppercase leading-none">Direct Indian Sourcing</h3>
            <p className="text-slate-200 text-xs leading-relaxed font-normal">
              Products are processed and sorted at our facilities in Jodhpur. Direct container loads are routed via Mundra Port to global hubs.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.95 }}
            className="bg-[#293681] border border-white/10 p-8 rounded-none shadow-2xl space-y-4 text-left hover:scale-[1.01] transition-transform duration-300"
          >
            <h3 className="font-black text-white text-lg uppercase leading-none">Zero Compromise Purity</h3>
            <p className="text-slate-200 text-xs leading-relaxed font-normal">
              We supply natural ingredients complying strictly with international chemical residue limits, heavy metals tolerances, and purity specifications.
            </p>
          </motion.div>
        </div>
      </div>

      {/* 2. WHAT WE EXPORT */}
      < section className="bg-white-50 py-12 px-4 md:px-8 relative overflow-hidden" >
        <div className="absolute  left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-0 max-w-xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black text-blue-900 uppercase tracking-tight">
              What We Export
            </h2>
            <div className="h-1.5 w-16 bg-brand mx-auto rounded" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {productsData.map((product) => (
              <div key={product.id} className="group bg-gradient-to-b from-slate-50 to-white border border-slate-100 rounded-[32px] p-5 flex flex-col justify-between hover:shadow-lg transition-all duration-300 relative overflow-hidden h-[420px]">



                {/* Product Image (Rounded) */}
                <div className="flex-1 overflow-hidden rounded-[24px] relative mb-6">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={400}
                    height={250}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Bottom Info Row */}
                <div className="flex justify-between items-end">
                  <div className="space-y-1 text-left max-w-[70%]">
                    <h3 className="text-base font-extrabold text-slate-900 leading-tight uppercase">
                      {product.name}
                    </h3>
                    <p className="text-xs text-slate-500 italic font-medium truncate">
                      {product.botanicalName}
                    </p>
                  </div>

                  {/* Action Link Arrow */}
                  <Link
                    href={`/products/${product.id}`}
                    className="w-11 h-11 rounded-full bg-neutral-950 text-white flex items-center justify-center transition-transform hover:scale-105 group-hover:translate-x-0.5 shrink-0"
                  >
                    <ArrowRight className="h-4.5 w-4.5" />
                  </Link>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section >

      {/* 3. WHY VEDA IMPEX */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto w-full relative">
        {/* Banner */}
        <div className="bg-[#293681] text-white rounded-[32px] pt-16 pb-36 px-8 md:px-12 relative overflow-hidden shadow-2xl">
          {/* Decorative background accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.05),transparent)]" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left side title */}
            <div className="lg:col-span-5 space-y-4 text-left">
              <div className="w-12 h-1.5 bg-sky rounded" />
              <h2 className="text-3xl md:text-4.5xl font-black uppercase tracking-tight leading-none">
                Why VEDA IMPEX?
              </h2>
            </div>
            
            {/* Right side description text */}
            <div className="lg:col-span-7 flex items-center justify-between gap-8 text-left">
              <p className="text-slate-350 text-sm md:text-base leading-relaxed max-w-xl font-normal font-sans">
                We combine direct agricultural sourcing with strict laboratory grade analysis to make global imports simple, consistent, and transparent. Partner with a trusted team dedicated to your supply chain security.
              </p>
              <ShieldCheck className="h-16 w-16 text-sky/20 hidden xl:block shrink-0" />
            </div>
          </div>
        </div>

        {/* Overlapping Cards Container */}
        <div className="max-w-6xl mx-auto px-6 md:px-8 -mt-24 relative z-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: Absolute Clarity */}
            <div className="bg-white border border-slate-100 rounded-[28px] p-6 shadow-xl flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300 h-[220px] text-left">
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-full bg-brand-light flex items-center justify-center text-brand shadow-sm">
                  <FileText className="h-6 w-6 text-[#293681]" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-extrabold text-slate-900 uppercase">Absolute Clarity</h4>
                  <p className="text-slate-500 text-[11px] md:text-xs leading-relaxed font-normal">
                    Straightforward communication from product parameters and commercial terms to shipping timelines. No surprises.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Consistency */}
            <div className="bg-white border border-slate-100 rounded-[28px] p-6 shadow-xl flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300 h-[220px] text-left">
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-full bg-brand-light flex items-center justify-center text-brand shadow-sm">
                  <CheckCircle2 className="h-6 w-6 text-[#293681]" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-extrabold text-slate-900 uppercase">Consistency</h4>
                  <p className="text-slate-500 text-[11px] md:text-xs leading-relaxed font-normal">
                    A great first shipment builds a contact; repeating that exact standard order after order builds a partnership.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Accountability */}
            <div className="bg-white border border-slate-100 rounded-[28px] p-6 shadow-xl flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300 h-[220px] text-left">
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-full bg-brand-light flex items-center justify-center text-brand shadow-sm">
                  <ShieldCheck className="h-6 w-6 text-[#293681]" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-extrabold text-slate-900 uppercase">Accountability</h4>
                  <p className="text-slate-500 text-[11px] md:text-xs leading-relaxed font-normal">
                    End-to-end attention to detail—from pre-shipment quality checks and documentation to customized packaging.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4: Long-Term Trade */}
            <div className="bg-white border border-slate-100 rounded-[28px] p-6 shadow-xl flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300 h-[220px] text-left">
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-full bg-brand-light flex items-center justify-center text-brand shadow-sm">
                  <Calendar className="h-6 w-6 text-[#293681]" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-extrabold text-slate-900 uppercase">Long-Term Trade</h4>
                  <p className="text-slate-500 text-[11px] md:text-xs leading-relaxed font-normal">
                    We don't chase one-off orders; we build lasting, reliable supply networks across international borders.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. STATS BOX */}
      <section className="py-6 px-4 md:px-8 max-w-7xl mx-auto w-full relative">
        <div className="border-2 border-white-900 rounded-[32px] overflow-hidden shadow-2xl bg-slate-900 text-white p-8 md:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center space-y-2 flex flex-col items-center justify-center p-4">
                <span className="text-4xl md:text-5xl font-black tracking-tight font-sans text-sky block">
                  <Counter value={stat.value} />
                </span>
                <span className="text-[10px] text-slate-300 font-bold uppercase tracking-widest font-sans text-center max-w-[180px] leading-relaxed block">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. QUICK ENQUIRY BANNER */}
      < section className="bg-white py-12 px-4 md:px-8 border-b border-slate-100" >
        <div className="max-w-5xl mx-auto bg-brand text-white rounded-3xl p-8 md:p-16 text-center space-y-8 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent)]" />

          <div className="space-y-4 max-w-l mx-auto relative z-10">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-none">
              Have a Specific Export Requirement?
            </h2>
            <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-xl mx-auto font-normal">
              Share your target specifications, required quantities, and destination port our team will review and respond with exact commercial details.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10 max-w-md mx-auto">
            <Link
              href="/contact"
              className="group w-full sm:w-auto bg-sky hover:bg-sky-hover text-white font-bold py-2.5 px-2.5 pl-6 pr-2.5 rounded-full text-xs uppercase tracking-wider transition-colors border border-transparent text-center flex items-center justify-between gap-6 shadow-md cursor-pointer font-sans"
            >
              Send Your Requirement
              <span className="w-8 h-8 rounded-full bg-white text-sky flex items-center justify-center shrink-0 transition-transform group-hover:translate-x-0.5 shadow">
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </section >

    </div >
  );
}
