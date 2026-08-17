"use client";

import React, { use, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ChevronRight, ShoppingBag, Shield, CheckCircle, Truck, Anchor, Clock, MapPin } from "lucide-react";
import { productsData, ProductItem } from "@/data/products-data";
import EnquiryModal from "@/components/EnquiryModal";

interface ProductDetailPageProps {
  params: Promise<{ id: string }>;
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = use(params);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Find product by ID
  const product = productsData.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center space-y-4 px-4 text-center">
        <h2 className="text-2xl md:text-3.5xl font-black uppercase text-neutral-900">Commodity Not Found</h2>
        <p className="text-neutral-500 text-sm max-w-md">
          The requested product ID does not exist in our active trade lanes registry.
        </p>
        <Link
          href="/products"
          className="inline-flex items-center gap-2 bg-[#071B3A] text-white text-xs font-bold px-6 py-3.5 rounded-full uppercase tracking-wider hover:bg-[#1261C9] transition-all"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="py-12 bg-white min-h-screen">
      {/* Navigation Breadcrumbs */}
      <nav className="max-w-7xl mx-auto px-4 md:px-8 mb-10 pt-6">
        <div className="flex items-center gap-2 text-xs font-bold text-neutral-450 uppercase tracking-widest mb-6">
          <Link href="/" className="hover:text-neutral-900 transition-colors">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link href="/products" className="hover:text-neutral-900 transition-colors">Products</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-neutral-850 truncate max-w-[200px] md:max-w-xs">{product.name}</span>
        </div>

        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-[#1261C9] hover:text-neutral-950 font-black text-xs uppercase tracking-widest group"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Commodities
        </Link>
      </nav>

      {/* Main Details Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column - Product Image and Sourcing CTA */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-neutral-100 bg-neutral-50">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${product.imageUrl}')` }}
              />
              <div className="absolute top-4 left-4 bg-[#1261C9] text-white px-3 py-1 rounded-xl text-[9px] font-bold uppercase tracking-widest">
                {product.category}
              </div>
            </div>

            {/* Premium Sourcing Guarantee Card */}
            <div className="bg-neutral-50 rounded-3xl p-6 border border-neutral-150 space-y-4">
              <div className="flex items-center gap-3 text-[#1261C9]">
                <Shield className="h-5 w-5" />
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-900">
                  Sourcing Guarantee
                </span>
              </div>
              <p className="text-neutral-500 text-[11px] leading-relaxed">
                Veda Impex ensures direct procurement from certified suppliers. We perform rigorous compliance pre-checks, custom chemical/moisture analyses, and secure cargo booking slots to minimize loading roll-overs.
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-[#071B3A] hover:bg-[#1261C9] hover:text-neutral-950 text-white font-bold py-3.5 px-4 rounded-2xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                Submit Logistics Request <ShoppingBag className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Right Column - Specifications & Logistics Specs */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-[#1261C9]/10 text-[#1261C9] text-[10px] font-bold uppercase tracking-wider">
                Commodity Overview
              </span>
              <h1 className="text-3xl md:text-5xl font-black text-neutral-900 uppercase tracking-tight">
                {product.name}
              </h1>
              <p className="text-neutral-500 text-sm md:text-base leading-relaxed">
                {product.details}
              </p>
            </div>

            {/* Technical Specifications Sheet */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-neutral-950 uppercase tracking-tight flex items-center gap-2">
                <span className="h-1.5 w-4 bg-[#1261C9] rounded-full"></span>
                Technical Specifications Sheet
              </h3>
              
              <div className="border border-neutral-150 rounded-2xl overflow-hidden bg-white shadow-sm">
                <table className="w-full border-collapse text-left text-xs md:text-sm">
                  <thead>
                    <tr className="bg-neutral-55 border-b border-neutral-150">
                      <th className="p-4 font-bold text-neutral-700 uppercase tracking-wider text-[10px]">Parameter</th>
                      <th className="p-4 font-bold text-neutral-700 uppercase tracking-wider text-[10px]">Standard Tolerance / Value</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-100">
                    {product.specifications.map((spec, idx) => {
                      const parts = spec.split(": ");
                      const label = parts[0] || "Compliance";
                      const val = parts[1] || "Passed";
                      return (
                        <tr key={idx} className="hover:bg-neutral-50/50">
                          <td className="p-4 font-semibold text-neutral-900 uppercase tracking-wide text-[10px]">
                            {label}
                          </td>
                          <td className="p-4 text-neutral-600 text-xs">
                            {val}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Logistics & Compliance Specifications */}
            <div className="space-y-4 pt-4">
              <h3 className="text-lg font-bold text-neutral-950 uppercase tracking-tight flex items-center gap-2">
                <span className="h-1.5 w-4 bg-[#1261C9] rounded-full"></span>
                Logistics & Global Compliance
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Shipping Modes */}
                <div className="border border-neutral-150 rounded-2xl p-5 bg-white space-y-3 shadow-sm">
                  <div className="flex items-center gap-2.5 text-[#1261C9]">
                    <Truck className="h-4.5 w-4.5" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-900">Shipping Configurations</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-neutral-500">
                    {product.shippingModes.map((sm, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 bg-neutral-300 rounded-full" />
                        {sm}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Expected Lead Times */}
                <div className="border border-neutral-150 rounded-2xl p-5 bg-white space-y-3 shadow-sm">
                  <div className="flex items-center gap-2.5 text-[#1261C9]">
                    <Clock className="h-4.5 w-4.5" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-900">Average Transit Lead Time</span>
                  </div>
                  <p className="text-xs text-neutral-500 font-medium">
                    {product.leadTime}
                  </p>
                  <p className="text-[9px] text-neutral-400 leading-normal">
                    *Lead times vary dynamically based on carrier scheduling updates, port congestion limits, and customs clearances.
                  </p>
                </div>

                {/* Primary Destination Ports */}
                <div className="border border-neutral-150 rounded-2xl p-5 bg-white space-y-3 shadow-sm">
                  <div className="flex items-center gap-2.5 text-[#1261C9]">
                    <Anchor className="h-4.5 w-4.5" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-900">Standard Loading / Port Hubs</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {product.ports.map((port, idx) => (
                      <span 
                        key={idx} 
                        className="inline-flex items-center gap-1 px-2.5 py-1 bg-neutral-100 rounded-lg text-[10px] font-bold text-neutral-700 uppercase"
                      >
                        <MapPin className="h-3 w-3 text-[#1261C9]" />
                        {port}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Compliance Frameworks */}
                <div className="border border-neutral-150 rounded-2xl p-5 bg-white space-y-3 shadow-sm">
                  <div className="flex items-center gap-2.5 text-[#1261C9]">
                    <Shield className="h-4.5 w-4.5" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-900">Pre-Cleared Certifications</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-neutral-500">
                    {product.compliance.map((comp, idx) => (
                      <li key={idx} className="flex items-center gap-1.5 text-neutral-600 font-semibold text-[11px]">
                        <CheckCircle className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                        {comp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Sourcing consultation CTA */}
      <section className="max-w-5xl mx-auto px-4 md:px-8">
        <div className="bg-[#071B3A] text-white rounded-3xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 border border-neutral-900 shadow-xl">
          <div className="space-y-3">
            <h3 className="text-2xl font-bold uppercase">Need direct rates for {product.name}?</h3>
            <p className="text-neutral-400 text-xs max-w-md leading-relaxed">
              Contact our trade coordinators for direct freight routing configurations, ocean slot availability, or duty fee estimation sheets.
            </p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#1261C9] hover:bg-[#1687E8] text-neutral-950 font-bold py-3.5 px-6 rounded-2xl text-xs uppercase tracking-wider transition-colors shrink-0 cursor-pointer shadow-md"
          >
            Submit Enquiry Sheet
          </button>
        </div>
      </section>

      {/* Enquiry Modal */}
      <EnquiryModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        initialProduct={product.name} 
      />
    </div>
  );
}
