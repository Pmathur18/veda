"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform, useInView, useMotionValue, animate } from "framer-motion";
import {
  ArrowRight,
  Ship,
  Plane,
  Truck,
  ChevronRight,
  ChevronLeft,
  Quote,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  FileCheck,
  Award
} from "lucide-react";
import RotatingCard from "../components/RotatingCard";
import ShipmentAnalytics from "../components/ShipmentAnalytics";
import EnquiryModal from "../components/EnquiryModal";

// 1. Counter Animation Component for Stats
function CountUpStat({ value, decimals = 0, suffix = "" }: { value: number; decimals?: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const count = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2.2,
        ease: "easeOut",
        onUpdate: (latest) => {
          setDisplayValue(latest.toFixed(decimals));
        }
      });
      return () => controls.stop();
    }
  }, [isInView, value, decimals]);

  return <span ref={ref}>{displayValue}{suffix}</span>;
}

// 2. Reading Highlight Words (Scroll-Scrubbed Opacity)
function ScrollHighlightText({ text }: { text: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.45"]
  });

  const words = text.split(" ");

  return (
    <div ref={containerRef} className="relative z-10 w-full">
      <p className="text-2xl md:text-[38px] font-extrabold tracking-tight leading-normal text-center flex flex-wrap gap-x-3 gap-y-2 justify-center max-w-4xl mx-auto">
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + (1 / words.length) * 2;
          const opacity = useTransform(scrollYProgress, [start, Math.min(end, 1)], [0.25, 1]);

          return (
            <motion.span key={i} style={{ opacity }} className="text-neutral-900 origin-center transition-all">
              {word}
            </motion.span>
          );
        })}
      </p>
    </div>
  );
}

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState("");
  const [activeQuote, setActiveQuote] = useState(0);
  const [activeAward, setActiveAward] = useState(0);

  const carouselRef = useRef<HTMLDivElement>(null);
  const aboutSectionRef = useRef<HTMLDivElement>(null);

  // Parallax backdrop coordinates for About-preview
  const { scrollYProgress: aboutScrollProgress } = useScroll({
    target: aboutSectionRef,
    offset: ["start end", "end start"]
  });
  const aboutBgY = useTransform(aboutScrollProgress, [0, 1], [-80, 80]);

  const triggerEnquiry = (name: string) => {
    setModalProduct(name);
    setIsModalOpen(true);
  };

  // Services Carousel Scroll
  const scrollCarousel = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const scrollAmount = clientWidth * 0.8;
      carouselRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth"
      });
    }
  };

  const taglines = [
    "OCEAN FREIGHT", "AIR CARGO", "CUSTOMS CLEARANCE", "WAREHOUSING",
    "SUPPLY CHAIN CONSULTING", "CROSS-BORDER TRADE", "DOOR-TO-DOOR EXPRESS"
  ];

  const partners = [
    "Maersk Line", "DHL Global", "FedEx Cargo", "Hapag-Lloyd",
    "CMA CGM", "DB Schenker", "Kuehne + Nagel", "ONE Shipping"
  ];

  const awards = [
    { title: "IATA Certified Agent", organization: "International Air Transport Association", desc: "Recognized partner for expedited international air freight handling standards." },
    { title: "AEO Compliance Status", organization: "Customs Administration", desc: "Authorized Economic Operator enabling low-dwell custom inspections and clearance." },
    { title: "ISO 9001:2015 Logistics", organization: "International Standards Org", desc: "Certified management system for freight forwarding, packaging, and supply chain consistency." }
  ];

  const testimonials = [
    {
      quote: "Our spice export volumes require immediate customs clearing upon arrival at German ports. Veda Impex handles food safety and health documentation perfectly, saving us thousands in detention fees.",
      author: "Rajesh Kumar",
      role: "Director, AP Spices Trading Co."
    },
    {
      quote: "Sourcing CNC machinery parts from Asia into the USA is notoriously slow. Working with Veda Impex's air freight team cut our supply chain lag in half. Clear billing, no surprises.",
      author: "Sarah Jenkins",
      role: "Head of Operations, Apex Automation US"
    },
    {
      quote: "Their online document index is invaluable. Being able to cross-check required certifications for chemical imports into Singapore saved our compliance team weeks of manual checking.",
      author: "Marcus Lim",
      role: "Supply Chain Manager, Biochem Global"
    }
  ];

  // Auto-advance Testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveQuote((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Auto-advance Awards
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAward((prev) => (prev + 1) % awards.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">

      {/* 1. HERO SECTION */}
      <section id="hero" className="relative py-12 md:py-24 px-4 md:px-8 max-w-7xl mx-auto w-full overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-5 space-y-6 z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-bold text-neutral-800"
            >
              <span className="h-2 w-2 rounded-full bg-[#1261C9] animate-pulse"></span>
              Global Freight Network
            </motion.div>

            {/* Split-text word reveal */}
            <h1 className="text-5xl md:text-7xl font-extrabold text-neutral-900 tracking-tight leading-[1.05] uppercase">
              {"Global Freight.".split(" ").map((w, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
                  className="inline-block mr-3"
                >
                  {w}
                </motion.span>
              ))}
              <br />
              {"Done Right.".split(" ").map((w, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.15, duration: 0.6, ease: "easeOut" }}
                  className="inline-block text-[#1261C9] mr-3"
                >
                  {w}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-neutral-500 text-sm md:text-base leading-relaxed max-w-sm"
            >
              Connecting primary maritime routes, expedited air lanes, and cross-border road logistics with customs brokerage integration.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <button
                onClick={() => triggerEnquiry("General Freight Forwarding")}
                className="bg-[#071B3A] hover:bg-[#1261C9] hover:text-neutral-950 text-white font-bold py-3.5 px-6 rounded-full text-xs tracking-wider uppercase transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-neutral-950/10"
              >
                Book Shipment <ArrowRight className="h-4 w-4" />
              </button>
              <Link
                href="/services"
                className="bg-white hover:bg-neutral-50 text-neutral-950 border border-neutral-200 font-bold py-3.5 px-6 rounded-full text-xs tracking-wider uppercase transition-all flex items-center gap-2"
              >
                Our Services
              </Link>
            </motion.div>
          </div>

          {/* Image Cards */}
          <div className="lg:col-span-7 relative flex justify-center items-center">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#1261C9]/5 rounded-full filter blur-3xl -z-10" />

            {/* Image Scale-In Hero Card */}
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="w-full max-w-2xl"
            >
              <RotatingCard angle={-2.5} className="w-full aspect-[16/10] relative group">
                <motion.div
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&auto=format&fit=crop')` }}
                />
                {/* Overlay shadow gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-neutral-950/20 to-transparent" />

                {/* Caption */}
                <div className="absolute bottom-6 left-6 text-white max-w-xs">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#1261C9] block mb-1">
                    Primary Hubs Connected
                  </span>
                  <p className="text-xs text-neutral-300 font-semibold leading-relaxed">
                    Direct logistics lines operating daily between India, US, Europe, GCC, and APAC.
                  </p>
                </div>

                {/* Arrow Button */}
                <Link
                  href="/services"
                  className="absolute bottom-6 right-6 h-12 w-12 rounded-full bg-[#1261C9] text-neutral-950 hover:bg-white transition-all flex items-center justify-center shadow-lg group-hover:rotate-45"
                >
                  <ArrowUpRight className="h-5 w-5" />
                </Link>
              </RotatingCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. INFINITE TAG MARQUEE STRIP */}
      <section className="overflow-hidden bg-[#0B3D91] py-5 relative border-y border-neutral-850">
        <div className="flex animate-marquee hover-pause gap-12 text-sm font-black text-white/45 tracking-widest uppercase">
          {/* List duplicated to ensure looping is seamless */}
          {taglines.concat(taglines).map((tag, idx) => (
            <div key={idx} className="flex items-center gap-4 shrink-0">
              <span>{tag}</span>
              <span className="h-2 w-2 rounded-full bg-[#1261C9]" />
            </div>
          ))}
        </div>
      </section>

      {/* 3. ABOUT-PREVIEW / WHAT DEFINES US (With reading opacity highlight) */}
      <section id="about-us" ref={aboutSectionRef} className="py-24 bg-white border-b border-neutral-100 relative overflow-hidden">
        {/* Parallax background graphic */}
        <motion.div
          style={{ y: aboutBgY }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.025]"
        >
          <div className="w-[800px] h-[800px] border-[50px] border-[#1261C9] rounded-full" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-16">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-neutral-50 border border-neutral-250 text-[10px] font-bold text-neutral-550 uppercase tracking-widest">
              Why Veda Impex?
            </div>
          </div>

          {/* Reading Highlight Container */}
          <ScrollHighlightText
            text="We optimize global transit corridors. Every container, pallet, and custom filing is audited systematically by our trade specialists to bypass border queues and minimize warehouse costs."
          />

          {/* Double Offset Photo Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8">
            <div className="lg:col-span-6 relative h-[380px] md:h-[450px] w-full flex items-center justify-center">
              {/* Crane Card */}
              <RotatingCard angle={-3.5} className="absolute left-4 top-4 w-[62%] aspect-[4/3] border-4 border-white shadow-2xl z-10">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop')` }}
                />
              </RotatingCard>
              {/* Vessel Card */}
              <RotatingCard angle={3} className="absolute right-4 bottom-4 w-[58%] aspect-[4/3] border-4 border-white shadow-2xl z-20">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url('https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=800&auto=format&fit=crop')` }}
                />
              </RotatingCard>
            </div>

            {/* Support descriptive card */}
            <div className="lg:col-span-6 space-y-6">
              <h3 className="text-3xl font-extrabold text-neutral-900 uppercase tracking-tight">
                Dual Operations Desks.
              </h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                Veda Impex manages shipping lanes and legal regulatory clearances concurrently. We operate dedicated customs brokerage desks inside port terminals in Mumbai, Dubai, Hamburg, and Los Angeles.
              </p>
              <div className="pt-4 border-t border-neutral-100 flex gap-6">
                <div className="space-y-1">
                  <span className="text-2xl font-black text-[#1261C9] block">100%</span>
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Broker Compliance</span>
                </div>
                <div className="space-y-1">
                  <span className="text-2xl font-black text-neutral-900 block">&lt; 18h</span>
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Average Port Release</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES DRAG/SCROLL CAROUSEL */}
      <section id="services" className="py-24 bg-[#071B3A] text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-3 max-w-xl">
              <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#0B3D91] border border-neutral-850 text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                Explore Services
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight uppercase leading-none">
                Direct Transport Fleet <br />
                <span className="text-neutral-500">& Customs Clearing.</span>
              </h2>
            </div>

            {/* Scroll Navigation Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => scrollCarousel("left")}
                className="h-12 w-12 rounded-full border border-neutral-800 flex items-center justify-center hover:bg-[#0B3D91] hover:text-[#1261C9] transition-colors cursor-pointer"
                aria-label="Previous service"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => scrollCarousel("right")}
                className="h-12 w-12 rounded-full border border-neutral-800 flex items-center justify-center hover:bg-[#0B3D91] hover:text-[#1261C9] transition-colors cursor-pointer"
                aria-label="Next service"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Carousel Slider */}
          <div
            ref={carouselRef}
            className="flex gap-8 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-4 px-2"
          >
            {/* Service Card 1 */}
            <div className="snap-start shrink-0 w-[85%] md:w-[32%] aspect-[3/4] bg-[#0B3D91] border border-neutral-850 rounded-[32px] overflow-hidden p-6 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#1261C9]/5">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-750 group-hover:scale-105"
                  style={{ backgroundImage: `url('https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=800&auto=format&fit=crop')` }}
                />
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Ship className="h-5 w-5 text-[#1261C9]" />
                  <h3 className="text-xl font-bold text-white uppercase tracking-tight">Sea Shipping</h3>
                </div>
                <p className="text-neutral-450 text-xs leading-relaxed">
                  FCL container management & LCL consolidations with scheduled direct weekly sailings.
                </p>
              </div>
              <button
                onClick={() => triggerEnquiry("Sea Shipping")}
                className="w-full bg-[#1261C9] hover:bg-[#1687E8] text-neutral-950 font-bold py-3.5 rounded-2xl text-[10px] uppercase tracking-widest mt-6 cursor-pointer"
              >
                Enquire Route
              </button>
            </div>

            {/* Service Card 2 */}
            <div className="snap-start shrink-0 w-[85%] md:w-[32%] aspect-[3/4] bg-[#0B3D91] border border-neutral-850 rounded-[32px] overflow-hidden p-6 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#1261C9]/5">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-750 group-hover:scale-105"
                  style={{ backgroundImage: `url('https://images.unsplash.com/photo-1586528116493-a0210c9ef715?q=80&w=800&auto=format&fit=crop')` }}
                />
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Plane className="h-5 w-5 text-[#1261C9]" />
                  <h3 className="text-xl font-bold text-white uppercase tracking-tight">Air Freight</h3>
                </div>
                <p className="text-neutral-450 text-xs leading-relaxed">
                  Expedited and priority airport-to-airport networks for time-sensitive cargo.
                </p>
              </div>
              <button
                onClick={() => triggerEnquiry("Air Freight")}
                className="w-full bg-[#1261C9] hover:bg-[#1687E8] text-neutral-950 font-bold py-3.5 rounded-2xl text-[10px] uppercase tracking-widest mt-6 cursor-pointer"
              >
                Enquire Route
              </button>
            </div>

            {/* Service Card 3 */}
            <div className="snap-start shrink-0 w-[85%] md:w-[32%] aspect-[3/4] bg-[#0B3D91] border border-neutral-850 rounded-[32px] overflow-hidden p-6 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#1261C9]/5">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-750 group-hover:scale-105"
                  style={{ backgroundImage: `url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=800&auto=format&fit=crop')` }}
                />
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Truck className="h-5 w-5 text-[#1261C9]" />
                  <h3 className="text-xl font-bold text-white uppercase tracking-tight">Road Freight</h3>
                </div>
                <p className="text-neutral-450 text-xs leading-relaxed">
                  Linehaul trailer networks and domestic container carriage services.
                </p>
              </div>
              <button
                onClick={() => triggerEnquiry("Land Freight")}
                className="w-full bg-[#1261C9] hover:bg-[#1687E8] text-neutral-950 font-bold py-3.5 rounded-2xl text-[10px] uppercase tracking-widest mt-6 cursor-pointer"
              >
                Enquire Route
              </button>
            </div>

            {/* Service Card 4 */}
            <div className="snap-start shrink-0 w-[85%] md:w-[32%] aspect-[3/4] bg-[#0B3D91] border border-neutral-850 rounded-[32px] overflow-hidden p-6 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#1261C9]/5">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-750 group-hover:scale-105"
                  style={{ backgroundImage: `url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop')` }}
                />
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <FileCheck className="h-5 w-5 text-[#1261C9]" />
                  <h3 className="text-xl font-bold text-white uppercase tracking-tight">Customs Clearing</h3>
                </div>
                <p className="text-neutral-450 text-xs leading-relaxed">
                  Broker filings, REACH compliance declarations, FDA Prior Notices, and tariff audits.
                </p>
              </div>
              <button
                onClick={() => triggerEnquiry("Customs Clearing")}
                className="w-full bg-[#1261C9] hover:bg-[#1687E8] text-neutral-950 font-bold py-3.5 rounded-2xl text-[10px] uppercase tracking-widest mt-6 cursor-pointer"
              >
                Enquire Route
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. EFFICIENCY IN ACTION (SaaS Analytics Widget) */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Port info column */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-neutral-150/70 p-8 flex flex-col justify-between shadow-xl shadow-neutral-100/50 min-h-[460px]">
            <div className="space-y-6">
              <div
                className="w-full h-60 rounded-2xl bg-cover bg-center"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=800&auto=format&fit=crop')` }}
              />
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-neutral-900 uppercase tracking-tight">
                  Automated Port Dwell Allocation
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  By matching carrier cargo manifests to inland dispatch systems in real time, we bypass intermediate sorting yards. This slashes average container demurrage risk to near zero.
                </p>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={() => triggerEnquiry("Operational Consulting")}
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1261C9] hover:text-[#1687E8] transition-colors cursor-pointer"
              >
                Learn More About Efficiency <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Dashboard column */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <ShipmentAnalytics />
          </div>

        </div>
      </section>

      {/* 6. STATS & KEY METRICS (With count-up animations) */}
      <section className="py-24 bg-neutral-50 border-y border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-white border border-neutral-200 text-[10px] font-bold text-neutral-550 uppercase tracking-widest">
                Key Metrics
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight leading-none uppercase">
                Define Our Excellence
              </h2>
              <p className="text-neutral-500 text-sm leading-relaxed">
                Veda Impex monitors execution KPIs systematically. We optimize routing paths daily to guarantee top industry transit milestones.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Stat 1 */}
              <div className="p-6 bg-white rounded-3xl border border-neutral-100 flex flex-col justify-between h-44 shadow-sm">
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-450">
                  Shipments Handled
                </span>
                <span className="text-4xl font-black text-neutral-900 block tracking-tight">
                  <CountUpStat value={1.5} decimals={1} suffix="M+" />
                </span>
                <span className="text-xs text-neutral-450">
                  Containers & pallets delivered safely.
                </span>
              </div>

              {/* Stat 2 */}
              <div className="p-6 bg-white rounded-3xl border border-neutral-100 flex flex-col justify-between h-44 shadow-sm">
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-450">
                  On-Time Rate
                </span>
                <span className="text-4xl font-black text-[#1261C9] block tracking-tight">
                  <CountUpStat value={99.8} decimals={1} suffix="%" />
                </span>
                <span className="text-xs text-neutral-450">
                  Verified tracking log record.
                </span>
              </div>

              {/* Stat 3 */}
              <div className="p-6 bg-white rounded-3xl border border-neutral-100 flex flex-col justify-between h-44 shadow-sm">
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-450">
                  Global Reach
                </span>
                <span className="text-4xl font-black text-neutral-900 block tracking-tight">
                  <CountUpStat value={40} decimals={0} suffix="+" />
                </span>
                <span className="text-xs text-neutral-450">
                  Countries serviced seamlessly.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TRUSTED BY LOGO STRIP */}
      <section className="bg-white py-12 border-b border-neutral-100 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8 mb-6 text-center">
          <span className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest">
            Partner Alliances & Carrier Networks
          </span>
        </div>
        <div className="flex animate-marquee hover-pause gap-16 text-lg font-bold text-neutral-400 uppercase leading-none">
          {partners.concat(partners).map((partner, idx) => (
            <span
              key={idx}
              className="shrink-0 transition-colors hover:text-neutral-900 filter grayscale hover:grayscale-0 cursor-pointer"
            >
              {partner}
            </span>
          ))}
        </div>
      </section>

      {/* 8. CERTIFICATIONS / AWARDS CAROUSEL */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8 bg-[#0B3D91] text-white rounded-[40px] p-8 md:p-12 border border-neutral-800 relative overflow-hidden">
          <div className="absolute right-6 top-6 text-[#1261C9] opacity-15">
            <Award className="h-24 w-24" />
          </div>

          <div className="space-y-6">
            <span className="text-[9px] font-bold uppercase tracking-widest text-[#1261C9] block">
              Logistics Standards & Accreditations
            </span>

            {/* Slider container */}
            <div className="min-h-[140px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeAward}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35 }}
                  className="space-y-3"
                >
                  <h4 className="text-xl font-bold text-white flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-[#1261C9]" /> {awards[activeAward].title}
                  </h4>
                  <span className="block text-xs font-bold text-neutral-400 uppercase tracking-wider">
                    {awards[activeAward].organization}
                  </span>
                  <p className="text-neutral-300 text-xs leading-relaxed max-w-xl">
                    {awards[activeAward].desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dots navigation */}
            <div className="flex gap-2">
              {awards.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveAward(idx)}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${activeAward === idx ? "w-6 bg-[#1261C9]" : "w-1.5 bg-neutral-700"
                    }`}
                  aria-label={`Go to certification ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. TESTIMONIALS SLIDER */}
      <section className="py-24 bg-neutral-50 border-t border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-450 block mb-2">Reviews</span>
            <h2 className="text-3xl font-extrabold text-neutral-900 uppercase">Trusted globally</h2>
          </div>

          <div className="max-w-3xl mx-auto bg-white border border-neutral-100 rounded-3xl p-8 md:p-12 shadow-xl shadow-neutral-100/40 relative">
            <Quote className="absolute top-6 right-6 h-12 w-12 text-neutral-100" />

            {/* Active Quote Panel */}
            <div className="min-h-[160px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeQuote}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <p className="text-neutral-600 text-base md:text-lg italic leading-relaxed">
                    "{testimonials[activeQuote].quote}"
                  </p>
                  <div>
                    <h4 className="font-bold text-neutral-900 text-sm">
                      {testimonials[activeQuote].author}
                    </h4>
                    <span className="text-xs text-[#1261C9] font-semibold">
                      {testimonials[activeQuote].role}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slider Controls */}
            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setActiveQuote((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="h-10 w-10 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-50 text-neutral-700 transition-colors cursor-pointer"
                aria-label="Previous quote"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => setActiveQuote((prev) => (prev + 1) % testimonials.length)}
                className="h-10 w-10 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-50 text-neutral-700 transition-colors cursor-pointer"
                aria-label="Next quote"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FINAL CALL TO ACTION (Zoom-fade-in enter viewport) */}
      <section className="py-24 bg-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto px-4 md:px-8 bg-[#071B3A] rounded-[40px] text-white p-8 md:p-16 text-center space-y-6 relative overflow-hidden"
        >
          <div className="absolute -left-12 -bottom-12 w-48 h-48 bg-[#1261C9]/10 rounded-full blur-2xl animate-pulse" />
          <div className="absolute -right-12 -top-12 w-48 h-48 bg-[#1261C9]/10 rounded-full blur-2xl animate-pulse" />

          <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight max-w-2xl mx-auto">
            Ready to streamline your global logistics?
          </h2>
          <p className="text-neutral-400 text-xs md:text-sm max-w-md mx-auto leading-relaxed">
            Get in touch with our team for custom lane pricing, custom clearances advice, and multimodal routing solutions.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <button
              onClick={() => triggerEnquiry("Direct Logistics Consultation")}
              className="bg-[#1261C9] hover:bg-[#1687E8] text-neutral-950 font-bold py-3.5 px-8 rounded-full text-xs tracking-wider uppercase transition-colors cursor-pointer shadow-lg shadow-[#1261C9]/25"
            >
              Get Custom Quote
            </button>
            <Link
              href="/contact-us"
              className="bg-[#0B3D91] border border-neutral-800 hover:bg-neutral-850 text-white font-bold py-3.5 px-8 rounded-full text-xs tracking-wider uppercase transition-colors block"
            >
              Contact Support
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Enquiry Modal */}
      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialProduct={modalProduct}
      />
    </div>
  );
}
