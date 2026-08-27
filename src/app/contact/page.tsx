"use client";

import React, { useState, Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Globe
} from "lucide-react";

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
    <div>
      <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-6">
        Send us a message
      </h3>

      {isSubmitted ? (
        <div className="flex flex-col items-center justify-center py-16 text-center space-y-4 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="p-4 bg-[#1d4ed8] text-white rounded-full shadow-lg">
            <CheckCircle2 className="h-10 w-10 text-white" />
          </div>
          <h4 className="font-extrabold text-xl text-slate-900 uppercase">Enquiry Transmitted</h4>
          <p className="text-slate-600 text-xs max-w-sm mx-auto leading-relaxed font-normal">
            Thank you for reaching out. An export coordinator from Veda Impex will get back to you shortly with technical and commercial details.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Row 1: Name & Company */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Name"
                className="w-full bg-[#f8fafc] border border-slate-200/80 focus:border-[#1d4ed8] focus:bg-white text-slate-900 rounded-xl px-4 py-3 text-xs outline-none transition-all font-medium placeholder:text-slate-400"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                Company
              </label>
              <input
                type="text"
                required
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="Company"
                className="w-full bg-[#f8fafc] border border-slate-200/80 focus:border-[#1d4ed8] focus:bg-white text-slate-900 rounded-xl px-4 py-3 text-xs outline-none transition-all font-medium placeholder:text-slate-400"
              />
            </div>
          </div>

          {/* Row 2: Phone & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                Phone
              </label>
              <input
                type="text"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="Phone"
                className="w-full bg-[#f8fafc] border border-slate-200/80 focus:border-[#1d4ed8] focus:bg-white text-slate-900 rounded-xl px-4 py-3 text-xs outline-none transition-all font-medium placeholder:text-slate-400"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Email"
                className="w-full bg-[#f8fafc] border border-slate-200/80 focus:border-[#1d4ed8] focus:bg-white text-slate-900 rounded-xl px-4 py-3 text-xs outline-none transition-all font-medium placeholder:text-slate-400"
              />
            </div>
          </div>

          {/* Row 3: Country & Product Required */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                Country
              </label>
              <input
                type="text"
                required
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                placeholder="Country (e.g. Germany, USA, UAE)"
                className="w-full bg-[#f8fafc] border border-slate-200/80 focus:border-[#1d4ed8] focus:bg-white text-slate-900 rounded-xl px-4 py-3 text-xs outline-none transition-all font-medium placeholder:text-slate-400"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                Product Required
              </label>
              <input
                type="text"
                required
                value={formData.productRequired}
                onChange={(e) => setFormData({ ...formData, productRequired: e.target.value })}
                placeholder="Product (e.g. Psyllium Husk, Senna Leaves)"
                className="w-full bg-[#f8fafc] border border-slate-200/80 focus:border-[#1d4ed8] focus:bg-white text-slate-900 rounded-xl px-4 py-3 text-xs outline-none transition-all font-medium placeholder:text-slate-400"
              />
            </div>
          </div>

          {/* Row 4: Quantity & Destination Port */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                Quantity
              </label>
              <input
                type="text"
                required
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                placeholder="Quantity (e.g. 20 MT)"
                className="w-full bg-[#f8fafc] border border-slate-200/80 focus:border-[#1d4ed8] focus:bg-white text-slate-900 rounded-xl px-4 py-3 text-xs outline-none transition-all font-medium placeholder:text-slate-400"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                Destination Port
              </label>
              <input
                type="text"
                required
                value={formData.destinationPort}
                onChange={(e) => setFormData({ ...formData, destinationPort: e.target.value })}
                placeholder="Destination Port (e.g. Hamburg Port)"
                className="w-full bg-[#f8fafc] border border-slate-200/80 focus:border-[#1d4ed8] focus:bg-white text-slate-900 rounded-xl px-4 py-3 text-xs outline-none transition-all font-medium placeholder:text-slate-400"
              />
            </div>
          </div>

          {/* Row 5: Specification */}
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1.5">
              Specification
            </label>
            <input
              type="text"
              required
              value={formData.specification}
              onChange={(e) => setFormData({ ...formData, specification: e.target.value })}
              placeholder="Specification parameters (e.g. 99% purity grade)"
              className="w-full bg-[#f8fafc] border border-slate-200/80 focus:border-[#1d4ed8] focus:bg-white text-slate-900 rounded-xl px-4 py-3 text-xs outline-none transition-all font-medium placeholder:text-slate-400"
            />
          </div>

          {/* Row 6: Message */}
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1.5">
              Message
            </label>
            <textarea
              rows={3}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Message..."
              className="w-full bg-[#f8fafc] border border-slate-200/80 focus:border-[#1d4ed8] focus:bg-white text-slate-900 rounded-xl px-4 py-3 text-xs outline-none transition-all resize-none font-medium placeholder:text-slate-400"
            />
          </div>

          {/* Full Width Pill Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-[#1d4ed8] hover:bg-[#1e40af] text-white font-bold py-3.5 px-8 rounded-full text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              Send
              <Send className="h-3.5 w-3.5 text-white" />
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="bg-[#f8fafc] min-h-screen">
      {/* 1. HERO SECTION WITH DARK BLUE OVERLAY & CENTERED TEXT */}
      <section className="relative w-full min-h-[48vh] md:min-h-[52vh] flex flex-col items-center justify-center overflow-hidden -mt-16 bg-[#0f172a]">
        {/* Background Image Banner */}
        <Image
          src="/Contact us banner image.png"
          alt="Contact Us Banner"
          fill
          priority
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 mix-blend-luminosity"
        />
        {/* Dark Blue Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1727]/90 via-[#0b1727]/80 to-[#0b1727]/95 z-10" />

        {/* Content Container */}
        <div className="w-full max-w-4xl mx-auto px-6 py-20 relative z-20 flex flex-col items-center justify-center text-center space-y-3">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Contact us
          </h1>
          <p className="text-slate-200 text-sm md:text-base leading-relaxed max-w-xl font-normal">
            Kassapay / VEDA IMPEX is ready to provide the right solution according to your needs
          </p>
        </div>
      </section>

      {/* 2. OVERLAPPING CONTACT CARD (GET IN TOUCH + SEND US A MESSAGE) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 relative z-30 -mt-20 md:-mt-24 mb-20">
        <div className="bg-white rounded-[32px] p-6 sm:p-10 md:p-14 shadow-2xl border border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14">
            
            {/* Left Column: Get in touch & Info list */}
            <div className="lg:col-span-5 space-y-8 pr-0 lg:pr-4">
              <div className="space-y-3">
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Get in touch
                </h2>
                <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-normal">
                  Sociosqu viverra lectus placerat sem efficitur molestie vehicula cubilia leo etiam nam.
                </p>
              </div>

              {/* Info Items List with Blue Circular Icon Badges */}
              <div className="space-y-6 pt-2">
                {/* Head Office */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-[#1d4ed8] text-white flex items-center justify-center shrink-0 shadow-md">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="space-y-1 text-xs">
                    <h4 className="font-extrabold text-slate-900 text-sm">Head Office</h4>
                    <p className="text-slate-500 leading-relaxed">
                      Veda Impex, Heavy Industrial Area<br />
                      Jodhpur, Rajasthan 342001, India
                    </p>
                  </div>
                </div>

                {/* Email Us */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-[#1d4ed8] text-white flex items-center justify-center shrink-0 shadow-md">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="space-y-1 text-xs">
                    <h4 className="font-extrabold text-slate-900 text-sm">Email Us</h4>
                    <p className="text-slate-500 leading-snug">operations@vedaimpex.com</p>
                    <p className="text-slate-500 leading-snug">hello@vedaimpex.com</p>
                  </div>
                </div>

                {/* Call Us */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-[#1d4ed8] text-white flex items-center justify-center shrink-0 shadow-md">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="space-y-1 text-xs">
                    <h4 className="font-extrabold text-slate-900 text-sm">Call Us</h4>
                    <p className="text-slate-500 leading-snug">Phone : +91 (291) 555-0145</p>
                    <p className="text-slate-500 leading-snug">Fax : +91 (291) 555-0146</p>
                  </div>
                </div>
              </div>

              {/* Follow our social media */}
              <div className="pt-6 border-t border-slate-100 space-y-3">
                <span className="block text-xs font-extrabold text-slate-900">
                  Follow our social media
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="w-9 h-9 rounded-full bg-[#1d4ed8] hover:bg-[#1e40af] text-white flex items-center justify-center transition-colors shadow-sm"
                  >
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="w-9 h-9 rounded-full bg-[#1d4ed8] hover:bg-[#1e40af] text-white flex items-center justify-center transition-colors shadow-sm"
                  >
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    aria-label="Twitter"
                    className="w-9 h-9 rounded-full bg-[#1d4ed8] hover:bg-[#1e40af] text-white flex items-center justify-center transition-colors shadow-sm"
                  >
                    <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="w-9 h-9 rounded-full bg-[#1d4ed8] hover:bg-[#1e40af] text-white flex items-center justify-center transition-colors shadow-sm"
                  >
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Send us a message form */}
            <div className="lg:col-span-7 border-t lg:border-t-0 lg:border-l border-slate-100 pt-8 lg:pt-0 lg:pl-10">
              <Suspense fallback={<div className="py-20 text-center text-xs text-slate-400">Loading form...</div>}>
                <ContactFormInner />
              </Suspense>
            </div>

          </div>
        </div>
      </section>

      {/* 3. FULL-BLEED GOOGLE MAP SECTION */}
      <section className="w-full bg-slate-200 relative mb-0">
        <div className="w-full h-[420px] md:h-[500px] relative overflow-hidden">
          <iframe
            title="Veda Impex Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114478.4314227092!2d72.95924765664062!3d26.273030300000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418c4eaa06ccb9%3A0x8114ea5b0aa1abb2!2sJodhpur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full filter grayscale contrast-125 opacity-90"
          />
        </div>
      </section>
    </div>
  );
}
