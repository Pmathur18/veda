"use client";

import React from "react";
import Link from "next/link";
import { FileCheck, ArrowUpRight } from "lucide-react";
import { productsData } from "../../data/products-data";

export default function ProductsPage() {
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

                  {/* Text Details */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-[10px] text-accent font-mono font-bold block uppercase">
                          {p.botanicalName}
                        </span>
                        <h3 className="text-xl font-black text-slate-900 group-hover:text-accent transition-colors uppercase leading-tight">
                          {p.name}
                        </h3>
                      </div>
                      <Link
                        href={`/products/${p.id}`}
                        className="p-2 border-2 border-slate-200 rounded-full hover:bg-accent hover:text-white transition-colors cursor-pointer shrink-0"
                      >
                        <ArrowUpRight className="h-4.5 w-4.5" />
                      </Link>
                    </div>

                    <p className="text-slate-500 text-xs leading-relaxed min-h-[48px]">
                      {p.description}
                    </p>

                    {/* Specs Summary Sheet */}
                    <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 space-y-3">
                      <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                        Sourcing Spec Sheet Highlights
                      </span>
                      <div className="grid grid-cols-2 gap-x-2 gap-y-2">
                        {p.highlights.map((highlight, hIdx) => (
                          <div key={hIdx} className="text-[9px] text-slate-600 flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 bg-accent rounded-full shrink-0" />
                            <span className="truncate">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-5 border-t border-slate-100 flex gap-3">
                  <Link
                    href={`/products/${p.id}`}
                    className="flex-1 bg-slate-900 hover:bg-brand hover:text-white text-white text-center font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider transition-all cursor-pointer border border-transparent"
                  >
                    View Specs
                  </Link>
                  <Link
                    href={`/contact?product=${p.id}`}
                    className="bg-sky hover:bg-sky-hover text-white font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider transition-all cursor-pointer border border-transparent flex items-center justify-center gap-1.5"
                  >
                    Quote
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. SOURCING COMPLIANCE STATEMENT */}
      <section className="max-w-5xl mx-auto px-4 md:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border-2 border-slate-950">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-wider">
              <FileCheck className="h-4.5 w-4.5" />
              <span>Custom Sourcing Solutions</span>
            </div>
            <h3 className="text-xl md:text-2xl font-black uppercase">Need Custom Mesh Sizes, Blends, or Private Labeling?</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              We understand that every market has distinct regulatory and processing needs. Whether you require specific mesh sizes, custom packaging weights, third-party lab testing (SGS/Eurofins), or private brand labeling on bulk bags, VEDA IMPEX accommodates your exact specifications.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <Link
              href="/contact?subject=specifications"
              className="bg-sky hover:bg-sky-hover text-white font-bold py-3.5 px-6 rounded-xl text-xs uppercase tracking-wider transition-all text-center border-2 border-slate-950 shadow-md shadow-sky/10"
            >
              Submit Spec Sheet
            </Link>
            <Link
              href="/contact?subject=sample_quote"
              className="bg-white hover:bg-slate-100 text-slate-900 font-bold py-3.5 px-6 rounded-xl text-xs uppercase tracking-wider transition-all text-center border-2 border-slate-950 shadow-md"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </section>
    </div >
  );
}
