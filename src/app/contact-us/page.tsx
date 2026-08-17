"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Mail, Phone, Clock, MapPin, CheckCircle2, Send } from "lucide-react";

type FormType = "general" | "quote";

function ContactFormSection() {
  const searchParams = useSearchParams();
  const [formType, setFormType] = useState<FormType>("general");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    origin: "",
    destination: "",
    weight: "",
    serviceType: "Sea Freight"
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (searchParams.get("quote") === "true") {
      setFormType("quote");
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        origin: "",
        destination: "",
        weight: "",
        serviceType: "Sea Freight"
      });
    }, 3000);
  };

  return (
    <div>
      {/* Tab Switcher */}
      <div className="flex border-b border-neutral-100 pb-6 mb-6">
        <button
          type="button"
          onClick={() => { setFormType("general"); setIsSubmitted(false); }}
          className={`flex-1 text-center py-2.5 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer border-b-2 ${
            formType === "general"
              ? "border-[#1261C9] text-neutral-950"
              : "border-transparent text-neutral-400 hover:text-neutral-600"
          }`}
        >
          General Inquiry
        </button>
        <button
          type="button"
          onClick={() => { setFormType("quote"); setIsSubmitted(false); }}
          className={`flex-1 text-center py-2.5 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer border-b-2 ${
            formType === "quote"
              ? "border-[#1261C9] text-neutral-950"
              : "border-transparent text-neutral-400 hover:text-neutral-600"
          }`}
        >
          Request Freight Quote
        </button>
      </div>

      {isSubmitted ? (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="p-4 bg-green-50 text-green-500 rounded-full mb-6">
            <CheckCircle2 className="h-16 w-16" />
          </div>
          <h3 className="text-2xl font-bold text-neutral-900 uppercase">Message Sent Successfully!</h3>
          <p className="text-neutral-500 text-xs mt-2 max-w-sm leading-relaxed">
            Thank you for contacting Veda Impex. A routing coordinator from the corresponding regional desk will follow up shortly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-1.5">
                Your Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="John Doe"
                className="w-full bg-neutral-50 border border-neutral-200 focus:border-[#1261C9] focus:ring-1 focus:ring-[#1261C9] focus:bg-white text-neutral-850 rounded-2xl px-4 py-3 text-xs outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-1.5">
                Phone Number
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+1 (555) 000-0000"
                className="w-full bg-neutral-50 border border-neutral-200 focus:border-[#1261C9] focus:ring-1 focus:ring-[#1261C9] focus:bg-white text-neutral-850 rounded-2xl px-4 py-3 text-xs outline-none transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="john@example.com"
              className="w-full bg-neutral-50 border border-neutral-200 focus:border-[#1261C9] focus:ring-1 focus:ring-[#1261C9] focus:bg-white text-neutral-850 rounded-2xl px-4 py-3 text-xs outline-none transition-all"
            />
          </div>

          {formType === "general" ? (
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-1.5">
                Subject
              </label>
              <input
                type="text"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="e.g. Sourcing spices documentation query"
                className="w-full bg-neutral-50 border border-neutral-200 focus:border-[#1261C9] focus:ring-1 focus:ring-[#1261C9] focus:bg-white text-neutral-855 rounded-2xl px-4 py-3 text-xs outline-none transition-all"
              />
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-1.5">
                    Origin Port / City
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.origin}
                    onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
                    placeholder="e.g. Mundra, India"
                    className="w-full bg-neutral-50 border border-neutral-200 focus:border-[#1261C9] focus:ring-1 focus:ring-[#1261C9] focus:bg-white text-neutral-850 rounded-2xl px-4 py-3 text-xs outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-1.5">
                    Destination Port / City
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    placeholder="e.g. Hamburg, Germany"
                    className="w-full bg-neutral-50 border border-neutral-200 focus:border-[#1261C9] focus:ring-1 focus:ring-[#1261C9] focus:bg-white text-neutral-850 rounded-2xl px-4 py-3 text-xs outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-1.5">
                    Shipment Mode
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full bg-neutral-50 border border-neutral-200 focus:border-[#1261C9] focus:ring-1 focus:ring-[#1261C9] focus:bg-white text-neutral-850 rounded-2xl px-4 py-3 text-xs outline-none transition-all"
                  >
                    <option>Sea Freight (FCL)</option>
                    <option>Sea Freight (LCL)</option>
                    <option>Air Cargo Express</option>
                    <option>Land haulage / Road Feeder</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-1.5">
                    Total Weight / Volume
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.weight}
                    onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                    placeholder="e.g. 15,000 kg"
                    className="w-full bg-neutral-50 border border-neutral-200 focus:border-[#1261C9] focus:ring-1 focus:ring-[#1261C9] focus:bg-white text-neutral-855 rounded-2xl px-4 py-3 text-xs outline-none transition-all"
                  />
                </div>
              </div>
            </>
          )}

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-1.5">
              Message / Details
            </label>
            <textarea
              rows={4}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Specify cargo dimensions, hazardous tags, required customs certificates, or timing constraints..."
              className="w-full bg-neutral-50 border border-neutral-200 focus:border-[#1261C9] focus:ring-1 focus:ring-[#1261C9] focus:bg-white text-neutral-855 rounded-2xl px-4 py-3 text-xs outline-none transition-all resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#071B3A] hover:bg-[#1261C9] hover:text-neutral-950 text-white font-bold py-3.5 px-4 rounded-2xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-neutral-950/5 hover:shadow-lg hover:shadow-[#1261C9]/10"
          >
            Submit Form <Send className="h-4 w-4" />
          </button>
        </form>
      )}
    </div>
  );
}

export default function ContactUsPage() {
  return (
    <div className="py-12">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-12 space-y-6">
        <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-[10px] font-bold text-neutral-850 uppercase tracking-widest">
          Get in Touch
        </div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold text-neutral-900 tracking-tight leading-none uppercase max-w-4xl">
          Contact Our Trade <br />
          <span className="text-[#1261C9]">& Pricing Desks.</span>
        </h1>
        
        <p className="text-neutral-500 text-sm leading-relaxed max-w-2xl">
          Request routing rates, submit documentation files for clearance review, or connect directly to a regional port broker.
        </p>
      </section>

      {/* Main Grid: Form Left, Info Cards Right */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
        
        {/* Form Container (Left Column) */}
        <div className="lg:col-span-7 bg-white border border-neutral-100 rounded-3xl p-8 shadow-xl shadow-neutral-100/35 overflow-hidden relative">
          <Suspense fallback={<div className="py-20 text-center text-xs text-neutral-400">Loading form parameters...</div>}>
            <ContactFormSection />
          </Suspense>
        </div>

        {/* Info Column (Right Column) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Card 1: Direct Support */}
          <div className="bg-neutral-50 rounded-3xl p-6 border border-neutral-100 space-y-4">
            <h3 className="font-bold text-neutral-900 uppercase text-xs tracking-wider border-b border-neutral-200/50 pb-2">
              Direct Channels
            </h3>
            
            <div className="flex items-center gap-3">
              <span className="p-2.5 bg-white text-[#1261C9] rounded-xl border border-neutral-100">
                <Mail className="h-4 w-4" />
              </span>
              <div>
                <span className="block text-[10px] text-neutral-450 uppercase font-semibold">General Email</span>
                <a href="mailto:operations@vedaimpex.com" className="text-xs font-bold text-neutral-850 hover:text-[#1261C9]">
                  operations@vedaimpex.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="p-2.5 bg-white text-[#1261C9] rounded-xl border border-neutral-100">
                <Phone className="h-4 w-4" />
              </span>
              <div>
                <span className="block text-[10px] text-neutral-450 uppercase font-semibold">Logistics Hotline</span>
                <a href="tel:+912255550192" className="text-xs font-bold text-neutral-850 hover:text-[#1261C9]">
                  +91 (22) 5555-0192
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Hours */}
          <div className="bg-neutral-50 rounded-3xl p-6 border border-neutral-100 space-y-4">
            <h3 className="font-bold text-neutral-900 uppercase text-xs tracking-wider border-b border-neutral-200/50 pb-2">
              Operating Hours
            </h3>
            
            <div className="flex items-center gap-3">
              <span className="p-2.5 bg-white text-[#1261C9] rounded-xl border border-neutral-100">
                <Clock className="h-4 w-4" />
              </span>
              <div className="text-xs">
                <span className="block text-[10px] text-neutral-450 uppercase font-semibold">Office Desks</span>
                <p className="font-semibold text-neutral-850 mt-0.5">Mon - Fri: 09:00 - 18:00 (GMT+5:30)</p>
                <p className="text-[10px] text-neutral-450 mt-0.5">24/7 emergency dispatch line open for active containers.</p>
              </div>
            </div>
          </div>

          {/* Card 3: Address */}
          <div className="bg-neutral-50 rounded-3xl p-6 border border-neutral-100 space-y-4">
            <h3 className="font-bold text-neutral-900 uppercase text-xs tracking-wider border-b border-neutral-200/50 pb-2">
              Corporate Headquarters
            </h3>
            
            <div className="flex items-start gap-3">
              <span className="p-2.5 bg-white text-[#1261C9] rounded-xl border border-neutral-100 shrink-0">
                <MapPin className="h-4 w-4" />
              </span>
              <div className="text-xs leading-relaxed text-neutral-600">
                <span className="block text-[10px] text-neutral-450 uppercase font-semibold mb-1">Corporate HQ (Mumbai)</span>
                <p className="font-bold text-neutral-850">Veda Impex Private Limited</p>
                <p>Level 4, Trade Tower, Bandra Kurla Complex</p>
                <p>Mumbai, MH 400051, India</p>
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* Map Placeholder */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-12">
        <div className="bg-neutral-100 border border-neutral-200 rounded-3xl h-80 overflow-hidden flex items-center justify-center relative">
          <div className="absolute inset-0 bg-cover bg-center filter grayscale opacity-40" 
               style={{ backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop')` }} />
          <div className="z-10 text-center space-y-2 bg-white/95 backdrop-blur-sm p-6 rounded-2xl border border-neutral-100 shadow-xl max-w-sm mx-4">
            <span className="text-[10px] font-bold text-[#1261C9] uppercase tracking-widest block">Interactive Route Map</span>
            <h4 className="font-bold text-neutral-900 text-sm">Mumbai Operations Headquarters</h4>
            <p className="text-[10px] text-neutral-500 leading-relaxed">
              Situated in the business heart of BKC, connecting directly to Mumbai Nhava Sheva (JNPT) port terminals.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
