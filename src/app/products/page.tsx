"use client";

import React from "react";
import Link from "next/link";
import { FileCheck, ArrowUpRight } from "lucide-react";
import { productsData } from "../../data/products-data";
import RotatingCard from "../../components/RotatingCard";

export default function ProductsPage() {
  return (
    <div className="py-12 bg-white">
      {/* 1. PAGE HEADER */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-16 space-y-6">
        <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-bold text-white uppercase tracking-widest">
          Trade Catalog
        </div>
        
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-none uppercase max-w-4xl">
          EXPORT COMMODITIES & <br />
          <span className="relative inline-block mt-2">
            <span className="absolute inset-0 bg-brand -skew-x-6 rotate-[-1deg]" />
            <span className="relative text-white px-5 py-1 inline-block rotate-[-1deg]">
              QUALITY SPECIFICATIONS
            </span>
          </span>
        </h1>
        
        <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-2xl font-normal">
          We export high-purity natural ingredients of Indian origin. Review our primary catalog of Psyllium Husk and Senna Leaves, sorted and packed at our facilities in Jodhpur, Rajasthan.
        </p>
      </section>

      {/* 2. PRODUCTS GRID */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {productsData.map((p, idx) => (
            <RotatingCard 
              key={p.id} 
              angle={idx === 0 ? -1.5 : 1.5}
              className="bg-white border-2 border-slate-900 rounded-3xl overflow-hidden flex flex-col justify-between group shadow-xl shadow-slate-100/40"
            >
              <div className="p-8 space-y-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Photo container */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-slate-100 rounded-xl border border-slate-200 mb-6">
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
                          {p.specTable.botanicalName}
                        </span>
                        <h3 className="text-2xl font-black text-slate-900 group-hover:text-accent transition-colors uppercase">
                          {p.name}
                        </h3>
                      </div>
                      <Link 
                        href={`/products/${p.id}`}
                        className="p-2 border-2 border-slate-900 rounded-full hover:bg-accent hover:text-white transition-colors cursor-pointer"
                      >
                        <ArrowUpRight className="h-5 w-5" />
                      </Link>
                    </div>

                    <p className="text-slate-500 text-xs leading-relaxed">
                      {p.description}
                    </p>

                    {/* Specs Summary Sheet */}
                    <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 space-y-3">
                      <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                        Sourcing Spec Sheet Highlights
                      </span>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                        <div className="text-[10px] text-slate-600 flex items-center gap-2">
                          <span className="h-1.5 w-1.5 bg-accent rounded-full shrink-0" />
                          <span>Origin: {p.specTable.origin.split(" ")[0]}</span>
                        </div>
                        <div className="text-[10px] text-slate-600 flex items-center gap-2">
                          <span className="h-1.5 w-1.5 bg-accent rounded-full shrink-0" />
                          <span>Form: {p.specTable.form.split(",")[0]}</span>
                        </div>
                        <div className="text-[10px] text-slate-600 flex items-center gap-2">
                          <span className="h-1.5 w-1.5 bg-accent rounded-full shrink-0" />
                          <span>MOQ: {p.specTable.moq.split(" ")[0]} tons</span>
                        </div>
                        <div className="text-[10px] text-slate-600 flex items-center gap-2">
                          <span className="h-1.5 w-1.5 bg-accent rounded-full shrink-0" />
                          <span>Availability: Year-Round</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-6 border-t border-slate-100 flex gap-4">
                  <Link
                    href={`/products/${p.id}`}
                    className="flex-1 bg-slate-900 hover:bg-brand hover:text-white text-white text-center font-bold py-3.5 px-4 rounded-xl text-xs uppercase tracking-wider transition-all cursor-pointer border border-transparent"
                  >
                    View Product Details
                  </Link>
                  <Link
                    href={`/contact?product=${p.id}`}
                    className="bg-sky hover:bg-sky-hover text-white font-bold py-3.5 px-6 rounded-xl text-xs uppercase tracking-wider transition-all cursor-pointer border-2 border-slate-950 flex items-center justify-center gap-1.5"
                  >
                    Request Quote
                  </Link>
                </div>
              </div>
            </RotatingCard>
          ))}
        </div>
      </section>

      {/* 3. SOURCING COMPLIANCE STATEMENT */}
      <section className="max-w-5xl mx-auto px-4 md:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border-2 border-slate-950">
          <div className="space-y-3 max-w-lg">
            <div className="inline-flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-wider">
              <FileCheck className="h-4.5 w-4.5" />
              <span>Commercial Quantities Only</span>
            </div>
            <h3 className="text-xl md:text-2xl font-black uppercase">Need Custom Specifications?</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              We arrange custom physical processing, custom mesh sizing, and specific packing configuration for our export consignments. Connect directly with our Jodhpur coordinate desk to discuss your product requirements.
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-sky hover:bg-sky-hover text-white font-bold py-4 px-6 rounded-xl text-xs uppercase tracking-wider transition-all shrink-0 cursor-pointer shadow-lg shadow-sky/10 hover:shadow-sky/20 border border-transparent"
          >
            Submit Specifications
          </Link>
        </div>
      </section>
    </div>
  );
}
