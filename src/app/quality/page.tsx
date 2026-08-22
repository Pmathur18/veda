"use client";

import React, { useState } from "react";

import { FileCheck, ShieldCheck, ClipboardCheck, Container, RefreshCw, Send, CheckCircle2 } from "lucide-react";

export default function QualityPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    product: "Psyllium Husk",
    specText: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", company: "", email: "", product: "Psyllium Husk", specText: "" });
    }, 2500);
  };

  const steps = [
    {
      icon: ShieldCheck,
      title: "Strict Purity Parameters",
      desc: "Every batch of Psyllium Husk and Senna Leaves processed in Jodhpur is evaluated for physical contaminants, moisture percentage, and active chemical parameters (such as swell volume and Sennoside percentage)."
    },
    {
      icon: ClipboardCheck,
      title: "Pre-Shipment Inspections",
      desc: "We coordinate with accredited third-party laboratories (like SGS or Geo-Chem) to carry out independent quality checks before any cargo is sealed and dispatched to Mundra Port."
    },
    {
      icon: Container,
      title: "Export-Grade Packaging",
      desc: "Natural ingredients are highly sensitive to humidity during ocean transit. We use multi-wall paper bags, PP bags with food-grade inner liners, and vacuum-sealed bales to preserve product integrity."
    },
    {
      icon: FileCheck,
      title: "Comprehensive Documentation",
      desc: "We clear all regulatory compliance checks prior to departure, providing complete Phytosanitary Certificates, Certificates of Analysis (COA), Fumigation Certificates, and Certificates of Origin."
    },
    {
      icon: RefreshCw,
      title: "Batch Traceability",
      desc: "Each cargo batch is assigned a unique tracking coordinate referencing its crop origin and processing sequence, giving B2B buyers complete accountability."
    }
  ];

  return (
    <div className="py-12 bg-white min-h-screen">
      {/* 1. HEADER */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-16 space-y-6">
        <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-bold text-white uppercase tracking-widest">
          Standards Desk
        </div>
        
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-none uppercase max-w-4xl">
          QUALITY ASSURANCE & <br />
          <span className="relative inline-block mt-2">
            <span className="absolute inset-0 bg-brand -skew-x-6 rotate-[-1deg]" />
            <span className="relative text-white px-5 py-1 inline-block rotate-[-1deg]">
              PRE-SHIPMENT QC
            </span>
          </span>
        </h1>
        
        <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-2xl font-normal">
          We maintain quality coordination from processing to port delivery. International buyers receive verified documentation and lab certification matching their exact specifications.
        </p>
      </section>

      {/* 2. QUALITY ASSURANCE PROTOCOLS */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx}
                className="bg-white border-2 border-slate-900 p-6 rounded-2xl space-y-4 hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="p-3 bg-brand-light/50 text-accent rounded-lg inline-block border border-accent/20">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-black text-slate-900 uppercase">{step.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{step.desc}</p>
                </div>
                <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest border-t border-slate-100 pt-3">
                  Verification Active
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. FOR BUYERS WHO KNOW WHAT THEY NEED */}
      <section className="max-w-5xl mx-auto px-4 md:px-8 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-slate-900 text-white rounded-3xl p-8 md:p-12 border-2 border-slate-950 items-center">
          {/* Info Side */}
          <div className="lg:col-span-6 space-y-4">
            <span className="text-[10px] font-bold text-accent uppercase tracking-widest bg-brand-light px-2.5 py-1 rounded inline-block border border-accent/20">
              Direct Spec Assessment
            </span>
            <h2 className="text-2xl md:text-3.5xl font-black uppercase leading-tight">
              FOR BUYERS WHO <br />KNOW WHAT THEY NEED
            </h2>
            <p className="text-slate-400 text-xs leading-relaxed">
              If your corporate compliance mandates specific pesticide tolerances, heavy metal ceilings, mesh dimensions, or bulk density limits, upload your specifications sheet directly. Our coordinates desk will assess feasibility and respond with direct commercial rates.
            </p>
          </div>

          {/* Mini Form Side */}
          <div className="lg:col-span-6 bg-white text-slate-900 p-6 rounded-2xl border-2 border-slate-950">
            {isSubmitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="h-12 w-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto border border-blue-200">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h4 className="font-bold text-lg uppercase">Specifications Received</h4>
                <p className="text-slate-500 text-xs max-w-xs mx-auto">
                  Our quality coordination team is reviewing your specification parameters. We will get in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">Name</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-accent text-xs rounded-lg px-3 py-2.5 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">Company</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-accent text-xs rounded-lg px-3 py-2.5 outline-none transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">Business Email</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="email@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-accent text-xs rounded-lg px-3 py-2.5 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">Product Requirement</label>
                  <select 
                    value={formData.product}
                    onChange={(e) => setFormData({...formData, product: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-accent text-xs rounded-lg px-3 py-2.5 outline-none transition-colors"
                  >
                    <option>Psyllium Husk & Powder</option>
                    <option>Senna Leaves & Pods</option>
                    <option>Other Natural Ingredients</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">Specify Technical Parameters</label>
                  <textarea 
                    rows={3} 
                    required 
                    placeholder="E.g., Purity: 99%, Swell Volume: >40ml/g, Packing: 25kg Paper bags with PE liner, Destination: Hamburg..."
                    value={formData.specText}
                    onChange={(e) => setFormData({...formData, specText: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-accent text-xs rounded-lg px-3 py-2.5 outline-none resize-none transition-colors"
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-sky hover:bg-sky-hover text-white font-bold py-3 px-4 rounded-lg text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2 cursor-pointer border-2 border-slate-950"
                >
                  Submit Spec Sheet <Send className="h-3.5 w-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}
