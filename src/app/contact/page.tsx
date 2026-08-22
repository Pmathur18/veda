"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 2500);
  };

  return (
    <div className="py-12 bg-white min-h-screen">
      {/* 1. PAGE HEADER */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-12 space-y-6">
        <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-bold text-white uppercase tracking-widest">
          Sourcing Channels
        </div>
        
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-none uppercase max-w-4xl">
          CONNECT WITH OUR <br />
          <span className="relative inline-block mt-2">
            <span className="absolute inset-0 bg-brand -skew-x-6 rotate-[-1deg]" />
            <span className="relative text-white px-5 py-1 inline-block rotate-[-1deg]">
              EXPORTS DESK
            </span>
          </span>
        </h1>
        
        <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-2xl font-normal">
          Connect directly to our Jodhpur coordinates desk. We coordinate crop packaging configurations, quality assessments, and ocean shipping options.
        </p>
      </section>

      {/* 2. CONTACT CHANNELS & FORM */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
        {/* Contact Form Section (Left Column) */}
        <div className="lg:col-span-7 bg-white border-2 border-slate-900 rounded-3xl p-8 shadow-xl">
          <h3 className="text-2xl font-black uppercase text-slate-900 mb-6">Quick Enquiry</h3>
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center py-16 text-center space-y-4">
              <div className="p-3 bg-emerald-50 text-emerald-500 rounded-full border border-emerald-200">
                <CheckCircle2 className="h-10 w-10" />
              </div>
              <h4 className="font-bold text-lg uppercase">Message Transmitted</h4>
              <p className="text-slate-500 text-xs max-w-xs mx-auto leading-relaxed">
                Thank you for your message. An export coordinator will contact you via email shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your Name"
                  className="w-full bg-slate-55 border border-slate-200 focus:border-accent focus:bg-white text-slate-800 rounded-xl px-4 py-3 text-xs outline-none transition-all font-medium"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                  Business Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="buyer@company.com"
                  className="w-full bg-slate-55 border border-slate-200 focus:border-accent focus:bg-white text-slate-800 rounded-xl px-4 py-3 text-xs outline-none transition-all font-medium"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                  Subject *
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="E.g., Psyllium Husk 99% price inquiry"
                  className="w-full bg-slate-55 border border-slate-200 focus:border-accent focus:bg-white text-slate-850 rounded-xl px-4 py-3 text-xs outline-none transition-all font-medium"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                  Message *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Detail your quality specifications, target delivery timeline, and port logistics parameters..."
                  className="w-full bg-slate-55 border border-slate-200 focus:border-accent focus:bg-white text-slate-855 rounded-xl px-4 py-3 text-xs outline-none transition-all resize-none font-medium"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-sky hover:bg-sky-hover text-white font-bold py-3.5 px-4 rounded-xl text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 cursor-pointer border-2 border-slate-950 shadow-md shadow-sky/10"
              >
                Send Message <Send className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>

        {/* Sidebar Info Column (Right Column) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Channels */}
          <div className="bg-slate-50 rounded-2xl p-6 border-2 border-slate-900 space-y-4 shadow-sm">
            <h3 className="font-black text-slate-900 uppercase text-xs tracking-wider border-b border-slate-200 pb-2">
              Direct Channels
            </h3>
            
            <div className="flex items-center gap-3">
              <span className="p-2.5 bg-white text-accent rounded-xl border border-slate-200">
                <Mail className="h-4.5 w-4.5" />
              </span>
              <div>
                <span className="block text-[9px] text-slate-450 uppercase font-bold">General Sourcing Desk</span>
                <a href="mailto:operations@vedaimpex.com" className="text-xs font-bold text-slate-850 hover:text-accent">
                  operations@vedaimpex.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="p-2.5 bg-white text-accent rounded-xl border border-slate-200">
                <Phone className="h-4.5 w-4.5" />
              </span>
              <div>
                <span className="block text-[9px] text-slate-455 uppercase font-bold">Corporate Hotline</span>
                <a href="tel:+912915550145" className="text-xs font-bold text-slate-850 hover:text-accent">
                  +91 (291) 555-0145
                </a>
              </div>
            </div>
          </div>

          {/* Operating Hours */}
          <div className="bg-slate-50 rounded-2xl p-6 border-2 border-slate-900 space-y-4 shadow-sm">
            <h3 className="font-black text-slate-900 uppercase text-xs tracking-wider border-b border-slate-200 pb-2">
              Desk Hours
            </h3>
            <div className="flex items-start gap-3">
              <span className="p-2.5 bg-white text-accent rounded-xl border border-slate-200">
                <Clock className="h-4.5 w-4.5" />
              </span>
              <div className="text-xs">
                <span className="block text-[9px] text-slate-450 uppercase font-bold">Office Hours</span>
                <p className="font-bold text-slate-850 mt-0.5">Mon - Sat: 09:00 - 18:00 (GMT+5:30)</p>
                <p className="text-[10px] text-slate-450 mt-1 leading-normal">
                  Our Jodhpur coordinator desks monitor shipping lane notifications and container dispatches daily.
                </p>
              </div>
            </div>
          </div>

          {/* Corporate Address */}
          <div className="bg-slate-50 rounded-2xl p-6 border-2 border-slate-900 space-y-4 shadow-sm">
            <h3 className="font-black text-slate-900 uppercase text-xs tracking-wider border-b border-slate-200 pb-2">
              Jodhpur Headquarters
            </h3>
            <div className="flex items-start gap-3">
              <span className="p-2.5 bg-white text-accent rounded-xl border border-slate-200 shrink-0">
                <MapPin className="h-4.5 w-4.5" />
              </span>
              <div className="text-xs leading-relaxed text-slate-650">
                <span className="block text-[9px] text-slate-450 uppercase font-bold mb-1">Corporate HQ (Jodhpur)</span>
                <p className="font-bold text-slate-850">Veda Impex</p>
                <p>Heavy Industrial Area</p>
                <p>Jodhpur, Rajasthan 342001, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Route Map Placeholder */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-12">
        <div className="bg-slate-100 border-2 border-slate-900 rounded-3xl h-80 overflow-hidden flex items-center justify-center relative shadow-md">
          <div className="absolute inset-0 bg-cover bg-center filter grayscale opacity-40" 
               style={{ backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop')` }} />
          <div className="z-10 text-center space-y-2 bg-white/95 backdrop-blur-sm p-6 rounded-2xl border border-slate-200 shadow-xl max-w-sm mx-4">
            <span className="text-[9px] font-bold text-accent uppercase tracking-widest block">Geographic Location</span>
            <h4 className="font-black text-slate-900 text-sm uppercase">Jodhpur Operations Desk</h4>
            <p className="text-[10px] text-slate-500 leading-relaxed">
              Situated in Jodhpur, Rajasthan — the crop hub of Psyllium Husk and Senna Leaves — coordinating direct road transport to Mundra Port, Gujarat.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
