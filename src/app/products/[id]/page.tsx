"use client";

import React, { use, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ChevronRight, ShoppingBag, ShieldCheck, CheckCircle2, FileText, FileCheck } from "lucide-react";
import { productsData } from "@/data/products-data";
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
        <h2 className="text-2xl md:text-3.5xl font-black uppercase text-slate-900">Product Not Found</h2>
        <p className="text-slate-500 text-sm max-w-md">
          The requested natural ingredient ID does not exist in our active trade lanes registry.
        </p>
        <Link
          href="/products"
          className="inline-flex items-center gap-2 bg-slate-900 text-white text-xs font-bold px-6 py-3.5 rounded-xl uppercase tracking-wider hover:bg-accent transition-all border border-transparent"
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
        <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
          <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link href="/products" className="hover:text-slate-900 transition-colors">Products</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-slate-900 truncate max-w-[200px] md:max-w-xs">{product.name}</span>
        </div>

        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-accent hover:text-slate-950 font-black text-xs uppercase tracking-widest group"
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
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border-2 border-slate-900 bg-slate-100">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${product.imageUrl}')` }}
              />
              <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded text-[9px] font-bold uppercase tracking-widest border border-accent">
                {product.category}
              </div>
            </div>

            {/* Sourcing Guarantee Card */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4">
              <div className="flex items-center gap-2.5 text-accent">
                <ShieldCheck className="h-5 w-5" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Export QA Check
                </span>
              </div>
              <p className="text-slate-500 text-[11px] leading-relaxed">
                Veda Impex ensures direct procurement from crops in Rajasthan. We perform pre-shipment inspections and coordinate all documentation required for global port clearance.
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-sky hover:bg-sky-hover text-white font-bold py-3.5 px-4 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer border-2 border-slate-955 shadow-md shadow-sky/10"
              >
                Request Product Details <ShoppingBag className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Right Column - Specifications & Overview */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 rounded bg-brand-light/40 text-accent text-[10px] font-bold uppercase tracking-wider">
                COMMODITY SPECS
              </span>
              <h1 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tight">
                {product.name}
              </h1>
              <p className="text-slate-550 text-sm leading-relaxed">
                {product.overview}
              </p>
            </div>

            {/* Spec Table */}
            <div className="space-y-4">
              <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight flex items-center gap-2">
                <span className="h-1.5 w-4 bg-accent rounded-full"></span>
                Official Specification Sheet
              </h3>
              
              <div className="border-2 border-slate-900 rounded-2xl overflow-hidden bg-white shadow-sm w-full overflow-x-auto no-scrollbar">
                <table className="w-full border-collapse text-left text-xs md:text-sm min-w-[600px] md:min-w-0">
                  <thead>
                    <tr className="bg-slate-900 text-white border-b-2 border-slate-950">
                      <th className="p-4 font-bold uppercase tracking-wider text-[10px]">Specification</th>
                      <th className="p-4 font-bold uppercase tracking-wider text-[10px]">Details / Tolerances</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-medium">
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-4 text-slate-900 uppercase tracking-wide text-[10px] font-bold">Product</td>
                      <td className="p-4 text-slate-650 text-xs">{product.specTable.product}</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-4 text-slate-900 uppercase tracking-wide text-[10px] font-bold">Botanical Name</td>
                      <td className="p-4 text-slate-650 text-xs italic">{product.specTable.botanicalName}</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-4 text-slate-900 uppercase tracking-wide text-[10px] font-bold">Origin</td>
                      <td className="p-4 text-slate-650 text-xs">{product.specTable.origin}</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-4 text-slate-900 uppercase tracking-wide text-[10px] font-bold">Form</td>
                      <td className="p-4 text-slate-650 text-xs">{product.specTable.form}</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-4 text-slate-900 uppercase tracking-wide text-[10px] font-bold">Packaging</td>
                      <td className="p-4 text-slate-650 text-xs">{product.specTable.packaging}</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-4 text-slate-900 uppercase tracking-wide text-[10px] font-bold">MOQ</td>
                      <td className="p-4 text-slate-650 text-xs">{product.specTable.moq}</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-4 text-slate-900 uppercase tracking-wide text-[10px] font-bold">Availability</td>
                      <td className="p-4 text-slate-650 text-xs">{product.specTable.availability}</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-4 text-slate-900 uppercase tracking-wide text-[10px] font-bold">Documentation</td>
                      <td className="p-4 text-slate-650 text-xs">{product.specTable.documentation}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Grades and Applications Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              {/* Available Grades */}
              <div className="border-2 border-slate-900 rounded-2xl p-6 bg-white space-y-4">
                <div className="flex items-center gap-2 text-accent">
                  <FileCheck className="h-4.5 w-4.5" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-900">Standard Grades Supplied</span>
                </div>
                <ul className="space-y-2 text-xs text-slate-600 font-medium">
                  {product.grades.map((grade, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <span>{grade}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Applications */}
              <div className="border-2 border-slate-900 rounded-2xl p-6 bg-white space-y-4">
                <div className="flex items-center gap-2 text-accent">
                  <FileText className="h-4.5 w-4.5" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-900">Primary Applications</span>
                </div>
                <ul className="space-y-2 text-xs text-slate-650 font-medium">
                  {product.applications.map((app, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="h-2 w-2 bg-slate-900 rounded-full shrink-0 mt-1.5" />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Sourcing consultation CTA */}
      <section className="max-w-5xl mx-auto px-4 md:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 border-2 border-slate-950 shadow-xl">
          <div className="space-y-3">
            <h3 className="text-2xl font-black uppercase">Request Quotation & Samples</h3>
            <p className="text-slate-400 text-xs max-w-md leading-relaxed">
              We coordinate sample clearance and supply direct freight routing parameters for commercial quantities. Discuss your product requirements with our Jodhpur coordinate desk.
            </p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-sky hover:bg-sky-hover text-white font-bold py-3.5 px-6 rounded-xl text-xs uppercase tracking-wider transition-colors shrink-0 cursor-pointer border-2 border-slate-950 shadow-md shadow-sky/10"
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
