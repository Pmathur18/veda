"use client";

import React from "react";
import Link from "next/link";
import { FileCheck, ArrowUpRight } from "lucide-react";
import { productsData } from "@/data/products-data";

export default function ProductsClient() {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. HERO VIDEO BANNER */}
      <section className="relative w-full min-h-[55vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden -mt-16">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/16685-274413239.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark Overlay to protect text contrast */}
        <div className="absolute inset-0 bg-slate-950/60 z-10" />

        {/* Hero Content Overlay */}
        <div className="w-full max-w-5xl mx-auto px-6 md:px-8 py-20 md:py-24 relative z-20 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-3xl md:text-6xl font-black text-white tracking-tight uppercase max-w-4xl mt-6 leading-tight">
            Indian Agro Commodities Global Standards<br />
          </h1>

          <p className="text-slate-200 text-sm md:text-base leading-relaxed max-w-2xl font-sans mx-auto mt-6">
            Spec-driven, batch-tested natural ingredients sourced directly from prime growing regions in Rajasthan and Western India. We align our processing, grading, and packaging directly with your technical spec sheet.
          </p>
        </div>
      </section>

      {/* 2. PRODUCTS GRID */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 pt-16 md:pt-20 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {productsData.map((p) => (
            <div
              key={p.id}
              className="bg-white border border-slate-200 rounded-3xl overflow-hidden flex flex-col justify-between group shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative h-full"
            >
              <div className="p-6 space-y-5 flex-1 flex flex-col justify-between">
                <div>
                  {/* Photo container */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 rounded-xl border border-slate-200 mb-6">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url('${p.imageUrl}')` }}
                    />
                    <div className="absolute top-4 left-4 bg-slate-900 text-white px-3 py-1 rounded text-[9px] font-bold uppercase tracking-widest border border-slate-800">
                      {p.category}
                    </div>
                  </div>

                  {/* Headers */}
                  <div className="space-y-1 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 inline-block" />
                      <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider">
                        {p.botanicalName}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-tight group-hover:text-blue-600 transition-colors">
                      {p.name}
                    </h3>
                  </div>

                  {/* Summary */}
                  <p className="text-slate-500 text-xs leading-relaxed font-sans line-clamp-3">
                    {p.overview}
                  </p>
                </div>

                {/* Highlights tags */}
                <div className="space-y-4 pt-4 border-t border-slate-100">
                  <div className="grid grid-cols-2 gap-2">
                    {p.highlights.map((h, idx) => {
                      const [label, val] = h.split(": ");
                      return (
                        <div key={idx} className="bg-slate-50 border border-slate-150 p-2.5 rounded-lg">
                          <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider block">
                            {label}
                          </span>
                          <span className="text-[11px] font-black text-slate-800 uppercase truncate block">
                            {val || label}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Action Link Button */}
                  <Link
                    href={`/products/${p.id}`}
                    className="w-full bg-brand hover:bg-brand-hover text-white py-3.5 px-4 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 group-hover:gap-3 transition-all duration-200 shadow-md shadow-brand/10"
                  >
                    View Specs & Packing Details
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. QUALITY ASSURANCE BANNER */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 mb-24">
        <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-800">
          <div className="space-y-3 text-center md:text-left">
            <span className="text-[10px] font-bold uppercase tracking-widest text-sky">
              Batch Quality Guarantee
            </span>
            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white">
              Need a Custom Mesh Size or Purity Level?
            </h3>
            <p className="text-slate-400 text-xs max-w-xl leading-relaxed">
              We process custom mesh specifications and packing configurations to align perfectly with your technical specification sheet. Request product samples for laboratory evaluation.
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-white hover:bg-slate-100 text-slate-950 font-bold py-3.5 px-8 rounded-full text-xs uppercase tracking-wider transition-colors shrink-0 flex items-center gap-2"
          >
            <FileCheck className="h-4 w-4 text-blue-600" />
            Request Spec Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
