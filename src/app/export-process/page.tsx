"use client";

import React from "react";
import Link from "next/link";


export default function ExportProcessPage() {
  const steps = [
    {
      num: "01",
      title: "Enquiry",
      desc: "Buyer submits product requirements (commodity, volume, quality specs, packing, and destination port) via our Enquiry form."
    },
    {
      num: "02",
      title: "Spec Confirmation",
      desc: "Veda Impex evaluates quality parameters, packaging requests, and shipping container slot availability to confirm specs feasibility."
    },
    {
      num: "03",
      title: "Sample Evaluation",
      desc: "If requested and applicable, physical samples are drawn from sorted stock and sent via international courier for buyer analysis."
    },
    {
      num: "04",
      title: "Order Booking",
      desc: "Commercial terms are agreed upon. Proforma invoice is signed and ocean freight containers are booked on target carrier schedules."
    },
    {
      num: "05",
      title: "Quality Control (QC)",
      desc: "Stock is physical screened, sorted, and loaded. Lab test analysis is done, and third-party pre-shipment checking reports are compiled."
    },
    {
      num: "06",
      title: "Documentation",
      desc: "Export clearances are coordinated. Customs documentation is finalized, including Phytosanitary, COA, Fumigation, and Origin certificates."
    },
    {
      num: "07",
      title: "Shipment Loading",
      desc: "Consignment is sealed and dispatched to Mundra Port, Gujarat. It is boarded onto the vessel and Bill of Lading (B/L) is drafted."
    },
    {
      num: "08",
      title: "Port Delivery",
      desc: "Ocean carrier delivers container to destination port. Veda Impex dispatches original paper records or Telex releases for local customs clearance."
    }
  ];

  return (
    <div className="py-12 bg-white min-h-screen">
      {/* 1. HEADER */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-16 space-y-6">
        <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-bold text-white uppercase tracking-widest">
          Logistics Workflow
        </div>
        
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-none uppercase max-w-4xl">
          EXPORT COORDINATION & <br />
          <span className="relative inline-block mt-2">
            <span className="absolute inset-0 bg-brand -skew-x-6 rotate-[-1deg]" />
            <span className="relative text-white px-5 py-1 inline-block rotate-[-1deg]">
              DELIVERY PROCESS
            </span>
          </span>
        </h1>
        
        <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-2xl font-normal">
          From first enquiry to delivery coordinates at your destination port, Veda Impex manages documentation, quality control, and carrier schedules with complete transparency.
        </p>
      </section>

      {/* 2. TIMELINE */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 mb-24 relative">
        {/* Timeline Connecting line on Desktop */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-100 hidden lg:block -translate-y-1/2 -z-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div 
              key={idx}
              className="bg-white border-2 border-slate-900 p-6 rounded-2xl relative shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between min-h-[220px]"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-accent font-black text-xl font-mono">{step.num}</span>
                  <span className="text-[8px] bg-slate-105 border border-slate-200 px-2 py-0.5 rounded text-slate-400 font-bold uppercase tracking-widest">
                    Milestone
                  </span>
                </div>
                <h3 className="text-base font-black text-slate-900 uppercase">{step.title}</h3>
                <p className="text-slate-550 text-[11px] leading-relaxed">{step.desc}</p>
              </div>

              <div className="text-[9px] text-slate-450 uppercase tracking-wider font-semibold border-t border-slate-100 pt-3 mt-4">
                Step Sequence {idx + 1}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CTA Let's start commercial booking */}
      <section className="max-w-5xl mx-auto px-4 md:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 border-2 border-slate-950 shadow-xl">
          <div className="space-y-3">
            <h3 className="text-2xl font-black uppercase">Ready to Start a Trade Enquiry?</h3>
            <p className="text-slate-400 text-xs max-w-md leading-relaxed">
              Submit your product specifications sheet. Our coordinates team will draft a detailed timeline and pricing feasibility estimate within 24 hours.
            </p>
          </div>
          <Link
            href="/enquiry"
            className="bg-sky hover:bg-sky-hover text-white font-bold py-4 px-6 rounded-xl text-xs uppercase tracking-wider transition-all shrink-0 cursor-pointer border-2 border-slate-950 shadow-md shadow-sky/10"
          >
            Initiate Sourcing Step 1
          </Link>
        </div>
      </section>
    </div>
  );
}
