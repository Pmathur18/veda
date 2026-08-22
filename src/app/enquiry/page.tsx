"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Send, CheckCircle2, ShieldCheck, Mail, MapPin, Phone } from "lucide-react";

function EnquiryForm() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    country: "",
    email: "",
    phone: "",
    productRequired: "Psyllium Husk",
    requiredQuantity: "",
    requiredSpec: "",
    packagingReq: "25 Kg Multi-wall Paper Bags",
    destinationPort: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [prevProductParam, setPrevProductParam] = useState(() => searchParams.get("product"));
  const currentProductParam = searchParams.get("product");
  if (currentProductParam !== prevProductParam) {
    setPrevProductParam(currentProductParam);
    if (currentProductParam) {
      if (currentProductParam.toLowerCase().includes("psyllium")) {
        setFormData((prev) => ({ ...prev, productRequired: "Psyllium Husk" }));
      } else if (currentProductParam.toLowerCase().includes("senna")) {
        setFormData((prev) => ({ ...prev, productRequired: "Senna Leaves" }));
      }
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        companyName: "",
        country: "",
        email: "",
        phone: "",
        productRequired: "Psyllium Husk",
        requiredQuantity: "",
        requiredSpec: "",
        packagingReq: "25 Kg Multi-wall Paper Bags",
        destinationPort: "",
        message: ""
      });
    }, 3000);
  };

  return (
    <div className="bg-white border-2 border-slate-900 rounded-3xl p-8 shadow-xl">
      {isSubmitted ? (
        <div className="flex flex-col items-center justify-center py-20 text-center space-y-6">
          <div className="p-4 bg-emerald-50 text-emerald-500 rounded-full border border-emerald-200">
            <CheckCircle2 className="h-16 w-16" />
          </div>
          <h3 className="text-2xl font-black text-slate-900 uppercase">Enquiry Logged Successfully!</h3>
          <p className="text-slate-500 text-xs mt-2 max-w-sm leading-relaxed">
            Thank you for contacting Veda Impex. A coordinates officer from our Jodhpur trade desk will review your product specifications and email you a commercial quotation within 24 hours.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                Contact Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="E.g. John Doe"
                className="w-full bg-slate-55 border border-slate-200 focus:border-accent focus:bg-white text-slate-800 rounded-xl px-4 py-3 text-xs outline-none transition-all font-medium"
              />
            </div>
            {/* Company Name */}
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                Company Name *
              </label>
              <input
                type="text"
                required
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                placeholder="E.g. Global Herbals LLC"
                className="w-full bg-slate-55 border border-slate-200 focus:border-accent focus:bg-white text-slate-800 rounded-xl px-4 py-3 text-xs outline-none transition-all font-medium"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Country */}
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                Business Country *
              </label>
              <input
                type="text"
                required
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                placeholder="E.g. Germany"
                className="w-full bg-slate-55 border border-slate-200 focus:border-accent focus:bg-white text-slate-800 rounded-xl px-4 py-3 text-xs outline-none transition-all font-medium"
              />
            </div>
            {/* WhatsApp / Phone */}
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                WhatsApp / Phone Number *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="E.g. +49 176 123456"
                className="w-full bg-slate-55 border border-slate-200 focus:border-accent focus:bg-white text-slate-800 rounded-xl px-4 py-3 text-xs outline-none transition-all font-medium"
              />
            </div>
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
              Business Email Address *
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="E.g. buyer@company.com"
              className="w-full bg-slate-55 border border-slate-200 focus:border-accent focus:bg-white text-slate-800 rounded-xl px-4 py-3 text-xs outline-none transition-all font-medium"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Product Required */}
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                Product Required *
              </label>
              <select
                value={formData.productRequired}
                onChange={(e) => setFormData({ ...formData, productRequired: e.target.value })}
                className="w-full bg-slate-55 border border-slate-200 focus:border-accent focus:bg-white text-slate-800 rounded-xl px-4 py-3 text-xs outline-none transition-all font-medium"
              >
                <option value="Psyllium Husk">Psyllium Husk & Powder</option>
                <option value="Senna Leaves">Senna Leaves & Pods</option>
                <option value="Other">Other / Custom Sourcing</option>
              </select>
            </div>
            {/* Required Quantity */}
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                Required Quantity (Metric Tons) *
              </label>
              <input
                type="text"
                required
                value={formData.requiredQuantity}
                onChange={(e) => setFormData({ ...formData, requiredQuantity: e.target.value })}
                placeholder="E.g. 15 MT"
                className="w-full bg-slate-55 border border-slate-200 focus:border-accent focus:bg-white text-slate-800 rounded-xl px-4 py-3 text-xs outline-none transition-all font-medium"
              />
            </div>
            {/* Destination Port/Country */}
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                Destination Port & Country *
              </label>
              <input
                type="text"
                required
                value={formData.destinationPort}
                onChange={(e) => setFormData({ ...formData, destinationPort: e.target.value })}
                placeholder="E.g. Rotterdam, Netherlands"
                className="w-full bg-slate-55 border border-slate-200 focus:border-accent focus:bg-white text-slate-800 rounded-xl px-4 py-3 text-xs outline-none transition-all font-medium"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Required Specification */}
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                Required Quality Specifications
              </label>
              <input
                type="text"
                value={formData.requiredSpec}
                onChange={(e) => setFormData({ ...formData, requiredSpec: e.target.value })}
                placeholder="E.g. 99% purity whole husk / 40 mesh powder / Sennosides 2.5%"
                className="w-full bg-slate-55 border border-slate-200 focus:border-accent focus:bg-white text-slate-800 rounded-xl px-4 py-3 text-xs outline-none transition-all font-medium"
              />
            </div>
            {/* Packaging Requirement */}
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                Packaging Requirement
              </label>
              <select
                value={formData.packagingReq}
                onChange={(e) => setFormData({ ...formData, packagingReq: e.target.value })}
                className="w-full bg-slate-55 border border-slate-200 focus:border-accent focus:bg-white text-slate-800 rounded-xl px-4 py-3 text-xs outline-none transition-all font-medium"
              >
                <option value="25 Kg Multi-wall Paper Bags">25 Kg Multi-wall Paper Bags</option>
                <option value="PP Bags with Inner PE Liner">PP Bags with Inner PE Liner</option>
                <option value="Hydraulic Bales (for Senna)">100 Kg Bales (Senna Leaves)</option>
                <option value="Custom Packaging">Custom Sized Packaging</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
              Message / Sourcing Instructions
            </label>
            <textarea
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Specify custom loading dates, regulatory laboratory requirements, or logistics details..."
              className="w-full bg-slate-55 border border-slate-200 focus:border-accent focus:bg-white text-slate-800 rounded-xl px-4 py-3 text-xs outline-none transition-all resize-none font-medium"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-sky hover:bg-sky-hover text-white font-bold py-4 px-4 rounded-xl text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 cursor-pointer border-2 border-slate-950 shadow-md shadow-sky/10"
          >
            Submit Specifications & Request Quote <Send className="h-4 w-4" />
          </button>
        </form>
      )}
    </div>
  );
}

export default function EnquiryPage() {
  return (
    <div className="py-12 bg-white">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-12 space-y-6">
        <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-bold text-white uppercase tracking-widest">
          Procurement Desk
        </div>
        
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-none uppercase max-w-4xl">
          REQUEST COMMERCIAL QUOTE & <br />
          <span className="relative inline-block mt-2">
            <span className="absolute inset-0 bg-brand -skew-x-6 rotate-[-1deg]" />
            <span className="relative text-white px-5 py-1 inline-block rotate-[-1deg]">
              SAMPLE COORDINATION
            </span>
          </span>
        </h1>
        
        <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-2xl font-normal">
          State your crop specifications and port coordinates. Our Jodhpur desk coordinates physical screening and ocean shipment bookings.
        </p>
      </section>

      {/* Form Content Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
        <div className="lg:col-span-8">
          <Suspense fallback={<div className="py-20 text-center text-xs text-slate-400">Loading form context...</div>}>
            <EnquiryForm />
          </Suspense>
        </div>

        {/* Sidebar Info */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-slate-50 border-2 border-slate-900 rounded-3xl p-6 space-y-4">
            <h3 className="font-black text-slate-900 uppercase text-xs tracking-wider border-b border-slate-200 pb-2 flex items-center gap-2">
              <ShieldCheck className="h-4.5 w-4.5 text-accent" />
              Sourcing Compliance
            </h3>
            <p className="text-slate-550 text-xs leading-relaxed">
              We operate exclusively in commercial bulk quantities. Standard minimum order quantity is **10 Metric Tons** for Psyllium and **12 Metric Tons** for Senna Leaves.
            </p>
            <p className="text-slate-550 text-xs leading-relaxed">
              Third-party laboratory analysis reports (COA) are drawn and signed for every dispatch batch loaded.
            </p>
          </div>

          <div className="bg-slate-50 border-2 border-slate-900 rounded-3xl p-6 space-y-4">
            <h3 className="font-black text-slate-900 uppercase text-xs tracking-wider border-b border-slate-200 pb-2">
              Direct Contact Details
            </h3>
            <div className="space-y-3.5 text-xs">
              <div className="flex items-center gap-3">
                <Mail className="h-4.5 w-4.5 text-accent" />
                <a href="mailto:operations@vedaimpex.com" className="font-bold text-slate-800 hover:text-accent">
                  operations@vedaimpex.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4.5 w-4.5 text-accent" />
                <a href="tel:+912915550145" className="font-bold text-slate-800 hover:text-accent">
                  +91 (291) 555-0145
                </a>
              </div>
              <div className="flex items-start gap-3 text-slate-600 leading-normal">
                <MapPin className="h-4.5 w-4.5 text-accent shrink-0" />
                <p>Heavy Industrial Area, Jodhpur, Rajasthan, India 342001</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
