"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { ParallaxSection, ParallaxElement } from "../../components/ParallaxScroll";

function ContactFormInner() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    country: "",
    email: "",
    phone: "",
    productRequired: "",
    quantity: "",
    specification: "",
    destinationPort: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Prepopulate from search params if 'product' is present
  const [prevProductParam, setPrevProductParam] = useState(() => searchParams.get("product"));
  const currentProductParam = searchParams.get("product");
  if (currentProductParam !== prevProductParam) {
    setPrevProductParam(currentProductParam);
    if (currentProductParam) {
      let productLabel = "";
      if (currentProductParam.toLowerCase().includes("psyllium")) {
        productLabel = "Psyllium Husk & Powder";
      } else if (currentProductParam.toLowerCase().includes("senna")) {
        productLabel = "Senna Leaves & Pods";
      } else {
        productLabel = currentProductParam;
      }
      setFormData((prev) => ({
        ...prev,
        productRequired: productLabel,
        specification: `Standard physical specifications for ${productLabel}.`
      }));
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        company: "",
        country: "",
        email: "",
        phone: "",
        productRequired: "",
        quantity: "",
        specification: "",
        destinationPort: "",
        message: ""
      });
    }, 2500);
  };

  return (
    <>
      <h3 className="text-xl md:text-2xl font-black uppercase text-slate-900 mb-2">
        Looking for Indian Agricultural Products?
      </h3>
      <p className="text-xs text-slate-500 mb-6 leading-relaxed">
        Send us your product requirement, specification, quantity and destination. Our team will review the requirement and provide a suitable sourcing and commercial proposal.
      </p>

      {isSubmitted ? (
        <div className="flex flex-col items-center justify-center py-16 text-center space-y-4">
          <div className="p-3 bg-emerald-50 text-emerald-500 rounded-full border border-emerald-200">
            <CheckCircle2 className="h-10 w-10" />
          </div>
          <h4 className="font-bold text-lg uppercase">Enquiry Transmitted</h4>
          <p className="text-slate-500 text-xs max-w-xs mx-auto leading-relaxed">
            Thank you for your enquiry. An export coordinator will contact you shortly with a proposal.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                className="w-full bg-slate-50 border border-slate-200 focus:border-accent focus:bg-white text-slate-800 rounded-xl px-4 py-3 text-xs outline-none transition-all font-medium"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                Company *
              </label>
              <input
                type="text"
                required
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="Your Company Name"
                className="w-full bg-slate-50 border border-slate-200 focus:border-accent focus:bg-white text-slate-800 rounded-xl px-4 py-3 text-xs outline-none transition-all font-medium"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                Country *
              </label>
              <input
                type="text"
                required
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                placeholder="E.g., Germany, USA, UAE"
                className="w-full bg-slate-50 border border-slate-200 focus:border-accent focus:bg-white text-slate-800 rounded-xl px-4 py-3 text-xs outline-none transition-all font-medium"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                Email *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="buyer@company.com"
                className="w-full bg-slate-50 border border-slate-200 focus:border-accent focus:bg-white text-slate-800 rounded-xl px-4 py-3 text-xs outline-none transition-all font-medium"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                WhatsApp / Phone *
              </label>
              <input
                type="text"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+1 (555) 000-0000"
                className="w-full bg-slate-50 border border-slate-200 focus:border-accent focus:bg-white text-slate-800 rounded-xl px-4 py-3 text-xs outline-none transition-all font-medium"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                Product Required *
              </label>
              <input
                type="text"
                required
                value={formData.productRequired}
                onChange={(e) => setFormData({ ...formData, productRequired: e.target.value })}
                placeholder="E.g., Psyllium Husk, Senna Leaves"
                className="w-full bg-slate-50 border border-slate-200 focus:border-accent focus:bg-white text-slate-800 rounded-xl px-4 py-3 text-xs outline-none transition-all font-medium"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                Quantity *
              </label>
              <input
                type="text"
                required
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                placeholder="E.g., 20 MT (Metric Tons)"
                className="w-full bg-slate-50 border border-slate-200 focus:border-accent focus:bg-white text-slate-800 rounded-xl px-4 py-3 text-xs outline-none transition-all font-medium"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                Destination Port *
              </label>
              <input
                type="text"
                required
                value={formData.destinationPort}
                onChange={(e) => setFormData({ ...formData, destinationPort: e.target.value })}
                placeholder="E.g., Hamburg Port, Germany"
                className="w-full bg-slate-50 border border-slate-200 focus:border-accent focus:bg-white text-slate-800 rounded-xl px-4 py-3 text-xs outline-none transition-all font-medium"
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
              Specification *
            </label>
            <textarea
              rows={2}
              required
              value={formData.specification}
              onChange={(e) => setFormData({ ...formData, specification: e.target.value })}
              placeholder="E.g., 99% purity, custom packing in 25kg multi-wall paper bags..."
              className="w-full bg-slate-55 border border-slate-200 focus:border-accent focus:bg-white text-slate-800 rounded-xl px-4 py-3 text-xs outline-none transition-all resize-none font-medium"
            />
          </div>

          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
              Message *
            </label>
            <textarea
              rows={3}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Any additional instructions or sourcing details..."
              className="w-full bg-slate-55 border border-slate-200 focus:border-accent focus:bg-white text-slate-800 rounded-xl px-4 py-3 text-xs outline-none transition-all resize-none font-medium"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-sky hover:bg-sky-hover text-white font-bold py-3.5 px-4 rounded-xl text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 cursor-pointer border-2 border-slate-950 shadow-md shadow-sky/10"
          >
            Submit Enquiry <Send className="h-4 w-4" />
          </button>
        </form>
      )}
    </>
  );
}

export default function ContactPage() {
  return (
    <div className="py-12 bg-white min-h-screen">
      {/* 1. PAGE HEADER */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-12">
        <ParallaxElement speed={-0.03} className="space-y-6 text-left">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-none uppercase max-w-4xl">
            CONNECT WITH OUR EXPORTS DESK<br />
          </h1>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-2xl font-normal">
            Connect directly to our Jodhpur coordinates desk. We coordinate crop packaging configurations, quality assessments, and ocean shipping options.
          </p>
        </ParallaxElement>
      </section>

      {/* 2. CONTACT CHANNELS & FORM */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
        {/* Contact Form Section (Left Column) */}
        <div className="lg:col-span-7">
          <ParallaxElement speed={0.04} className="bg-white border-2 border-slate-900 rounded-3xl p-8 shadow-xl">
            <Suspense fallback={<div className="py-20 text-center text-xs text-slate-400 font-normal">Loading form parameters...</div>}>
              <ContactFormInner />
            </Suspense>
          </ParallaxElement>
        </div>

        {/* Sidebar Info Column (Right Column) */}
        <div className="lg:col-span-5">
          <ParallaxElement speed={-0.02} className="bg-slate-50 rounded-3xl p-8 space-y-8 shadow-sm border-0">
            {/* Direct Channels */}
            <div className="space-y-4">
              <h3 className="font-black text-slate-900 uppercase text-xs tracking-wider border-b border-slate-200 pb-2">
                Direct Channels
              </h3>

              <div className="flex items-center gap-3">
                <span className="p-2.5 bg-white text-accent rounded-xl border border-slate-200">
                  <Mail className="h-4.5 w-4.5" />
                </span>
                <div>
                  <span className="block text-[9px] text-slate-455 uppercase font-bold">General Sourcing Desk</span>
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
                  <a href="tel:+912915550145" className="text-xs font-bold text-slate-850 hover:text-accent font-sans">
                    +91 (291) 555-0145
                  </a>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="space-y-4">
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
                  <p className="text-[10px] text-slate-450 mt-1 leading-normal font-normal">
                    Our Jodhpur coordinator desks monitor shipping lane notifications and container dispatches daily.
                  </p>
                </div>
              </div>
            </div>

            {/* Corporate Address */}
            <div className="space-y-4">
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
                  <p className="font-normal">Heavy Industrial Area</p>
                  <p className="font-normal">Jodhpur, Rajasthan 342001, India</p>
                </div>
              </div>
            </div>
          </ParallaxElement>
        </div>
      </section>

      {/* Route Map Placeholder */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-12">
        <ParallaxSection speed={0.05} className="bg-slate-100 border-2 border-slate-900 rounded-3xl h-80 overflow-hidden flex items-center justify-center relative shadow-md">
          <div className="absolute inset-0 bg-cover bg-center filter grayscale opacity-40"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop')` }} />
          <div className="z-10 text-center space-y-2 bg-white/95 backdrop-blur-sm p-6 rounded-2xl border border-slate-200 shadow-xl max-w-sm mx-4 text-left">
            <span className="text-[9px] font-bold text-accent uppercase tracking-widest block">Geographic Location</span>
            <h4 className="font-black text-slate-900 text-sm uppercase">Jodhpur Operations Desk</h4>
            <p className="text-[10px] text-slate-500 leading-relaxed font-normal">
              Situated in Jodhpur, Rajasthan — the crop hub of Psyllium Husk and Senna Leaves — coordinating direct road transport to Mundra Port, Gujarat.
            </p>
          </div>
        </ParallaxSection>
      </section>
    </div>
  );
}
