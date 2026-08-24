"use client";

import React, { use, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ChevronRight, ShoppingBag, ShieldCheck, CheckCircle2, FileText, FileCheck, Package, Truck, Award } from "lucide-react";
import { productsData } from "@/data/products-data";
import EnquiryModal from "@/components/EnquiryModal";
import { ParallaxSection, ParallaxElement } from "@/components/ParallaxScroll";

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
      {/* Product JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": product.name,
            "image": product.imageUrl,
            "description": product.description,
            "category": product.category,
            "brand": {
              "@type": "Brand",
              "name": "VEDA IMPEX"
            },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "USD",
              "itemCondition": "https://schema.org/NewCondition",
              "offeredBy": {
                "@type": "Wholesaler",
                "name": "VEDA IMPEX",
                "url": "https://www.vedaimpex.com"
              }
            },
            "additionalProperty": [
              {
                "@type": "PropertyValue",
                "name": "Botanical Name",
                "value": product.botanicalName
              },
              {
                "@type": "PropertyValue",
                "name": "Description",
                "value": product.description
              }
            ]
          })
        }}
      />

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
          className="inline-flex items-center gap-2 text-accent hover:text-slate-955 font-black text-xs uppercase tracking-widest group"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Commodities
        </Link>
      </nav>

      {/* Main Details Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column - Product Image and Sourcing CTA */}
          <div className="lg:col-span-5">
            <ParallaxElement speed={0.04} className="space-y-6 text-left">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border-2 border-slate-900 bg-slate-100">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${product.imageUrl}')` }}
                />
                <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded text-[9px] font-bold uppercase tracking-widest border border-accent z-10">
                  {product.category}
                </div>
              </div>

              {/* Sourcing Guarantee Card */}
              <div className="bg-slate-55 rounded-2xl p-6 border border-slate-200 space-y-4">
                <div className="flex items-center gap-2.5 text-accent">
                  <ShieldCheck className="h-5 w-5" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    Export QA Check
                  </span>
                </div>
                <p className="text-slate-555 text-[11px] leading-relaxed font-normal">
                  VEDA IMPEX ensures direct procurement from crops in Rajasthan. We perform pre-shipment inspections and coordinate all documentation required for global port clearance.
                </p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-sky hover:bg-sky-hover text-white font-bold py-3.5 px-4 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer border-2 border-slate-950 shadow-md shadow-sky/10"
                >
                  Request Product Details <ShoppingBag className="h-4 w-4" />
                </button>
              </div>
            </ParallaxElement>
          </div>

          {/* Right Column - Specifications & Overview */}
          <div className="lg:col-span-7">
            <ParallaxElement speed={-0.03} className="space-y-8 text-left">
              <div className="space-y-4">
                <span className="inline-block px-3 py-1 rounded bg-brand-light/40 text-accent text-[10px] font-bold uppercase tracking-wider">
                  {product.botanicalName}
                </span>
                <h1 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tight">
                  {product.name}
                </h1>
                <p className="text-slate-550 text-sm leading-relaxed font-normal">
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
                  <table className="w-full border-collapse text-left text-xs md:text-sm min-w-[600px]">
                    <thead>
                      <tr className="bg-slate-900 text-white border-b-2 border-slate-950">
                        {product.specTable.headers.map((header, idx) => (
                          <th key={idx} className="p-4 font-bold uppercase tracking-wider text-[10px]">
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-medium">
                      {product.specTable.rows.map((row, rowIdx) => (
                        <tr key={rowIdx} className="hover:bg-slate-50/50">
                          {row.map((cell, cellIdx) => (
                            <td 
                              key={cellIdx} 
                              className={`p-4 text-xs ${
                                cellIdx === 0 
                                  ? "text-slate-900 uppercase tracking-wide text-[10px] font-bold" 
                                  : "text-slate-650"
                              }`}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Applications & Logistics Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                {/* Industry Applications */}
                <div className="border-2 border-slate-900 rounded-2xl p-6 bg-white space-y-4">
                  <div className="flex items-center gap-2 text-accent">
                    <FileText className="h-4.5 w-4.5" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-900">Industry Applications</span>
                  </div>
                  <ul className="space-y-4 text-xs">
                    {product.applications.map((app, idx) => (
                      <li key={idx} className="flex flex-col gap-1">
                        <span className="font-bold text-slate-900 uppercase tracking-wide text-[10px] flex items-center gap-1.5">
                          <CheckCircle2 className="h-3.5 w-3.5 text-accent" /> {app.title}
                        </span>
                        <span className="text-slate-500 leading-normal pl-5 font-normal">{app.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Packaging & Logistics */}
                <div className="border-2 border-slate-900 rounded-2xl p-6 bg-white space-y-4">
                  <div className="flex items-center gap-2 text-accent">
                    <Package className="h-4.5 w-4.5" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-900">Logistics & Compliance</span>
                  </div>
                  
                  <div className="space-y-4 text-xs">
                    {/* Packaging */}
                    <div className="space-y-1">
                      <span className="font-bold text-slate-900 uppercase tracking-wide text-[9px] flex items-center gap-1.5">
                        <Package className="h-3 w-3 text-slate-400" /> Standard Packaging
                      </span>
                      <ul className="list-disc pl-8 space-y-0.5 text-slate-500 font-normal">
                        {product.logistics.packaging.map((pkg, idx) => (
                          <li key={idx}>{pkg}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Loading Capacity */}
                    <div className="space-y-1">
                      <span className="font-bold text-slate-900 uppercase tracking-wide text-[9px] flex items-center gap-1.5">
                        <Truck className="h-3 w-3 text-slate-400" /> Container Capacity
                      </span>
                      <ul className="list-disc pl-8 space-y-0.5 text-slate-500 font-normal">
                        {product.logistics.capacity.map((cap, idx) => (
                          <li key={idx}>{cap}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Export Compliance */}
                    <div className="space-y-1">
                      <span className="font-bold text-slate-900 uppercase tracking-wide text-[9px] flex items-center gap-1.5">
                        <Award className="h-3 w-3 text-slate-400" /> Export Compliance
                      </span>
                      <div className="flex flex-wrap gap-1.5 pl-5 pt-1">
                        {product.logistics.compliance.map((comp, idx) => (
                          <span key={idx} className="inline-block bg-slate-100 text-slate-655 px-2 py-0.5 rounded text-[9px] font-medium border border-slate-200">
                            {comp}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ParallaxElement>
          </div>
        </div>
      </section>

      {/* Sourcing consultation CTA */}
      <section className="max-w-5xl mx-auto px-4 md:px-8 text-left">
        <ParallaxSection speed={0.04} className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 border-2 border-slate-955 shadow-xl">
          <div className="space-y-3">
            <h3 className="text-2xl font-black uppercase">Request Quotation & Samples</h3>
            <p className="text-slate-400 text-xs max-w-md leading-relaxed font-normal">
              We coordinate sample clearance and supply direct freight routing parameters for commercial quantities. Discuss your product requirements with our Jodhpur coordinate desk.
            </p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-sky hover:bg-sky-hover text-white font-bold py-3.5 px-6 rounded-xl text-xs uppercase tracking-wider transition-colors shrink-0 cursor-pointer border-2 border-slate-950 shadow-md shadow-sky/10"
          >
            Submit Enquiry Sheet
          </button>
        </ParallaxSection>
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
