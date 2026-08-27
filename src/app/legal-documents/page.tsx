"use client";

import React, { useState, useMemo } from "react";
import { Search, Filter, HelpCircle, FileText, CheckSquare } from "lucide-react";
import { documentsData, allCountries, allProducts } from "../../data/documents-data";

export default function LegalDocumentsPage() {
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRequirements = useMemo(() => {
    return documentsData.filter((req) => {
      const matchCountry = selectedCountry === "All" || req.country === selectedCountry;
      const matchProduct = selectedProduct === "All" || req.product === selectedProduct;
      const matchSearch = 
        req.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
        req.product.toLowerCase().includes(searchQuery.toLowerCase()) ||
        req.documentsRequired.some(doc => doc.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (req.notes && req.notes.toLowerCase().includes(searchQuery.toLowerCase()));
      
      return matchCountry && matchProduct && matchSearch;
    });
  }, [selectedCountry, selectedProduct, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Sticky Table of Contents Sidebar */}
        <aside className="lg:col-span-3 lg:sticky lg:top-28 space-y-4 text-xs font-medium text-neutral-500 border-r border-neutral-100 pr-6 hidden lg:block">
          <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest block mb-4">
            Navigation Index
          </span>
          <ul className="space-y-3">
            <li>
              <a href="#overview" className="hover:text-neutral-800 transition-colors block py-1 border-l-2 border-transparent pl-3 hover:border-neutral-300">
                1. Reference Overview
              </a>
            </li>
            <li>
              <a href="#finder" className="hover:text-neutral-800 transition-colors block py-1 border-l-2 border-[#4274D9] pl-3 text-neutral-800 font-semibold">
                2. Requirements Finder
              </a>
            </li>
            <li>
              <a href="#definitions" className="hover:text-neutral-800 transition-colors block py-1 border-l-2 border-transparent pl-3 hover:border-neutral-300">
                3. Document Definitions
              </a>
            </li>
          </ul>
        </aside>

        {/* Content Panel (centered text focus, max-w-3xl relative to column) */}
        <main className="lg:col-span-9 max-w-3xl space-y-12">
          
          {/* Header */}
          <section id="overview" className="space-y-4">
            <h1 className="text-3xl font-bold text-neutral-900 tracking-tight">
              Export-Import Clearances & Required Documents
            </h1>
            <p className="text-neutral-600 text-sm leading-relaxed">
              This reference registry outlines the standard licenses, certificates of origin, and custom declarations required for specific products when entering or exiting operating countries. Regulatory policies update regularly; please verify with a customs broker before transit.
            </p>
          </section>

          {/* interactive Lookup Section */}
          <section id="finder" className="space-y-6 pt-6 border-t border-neutral-100">
            <h2 className="text-lg font-bold text-neutral-900 flex items-center gap-2">
              <Filter className="h-5 w-5 text-[#4274D9]" /> Compliance Finder
            </h2>
            
            {/* Filter Toolbar */}
            <div className="bg-neutral-50 border border-neutral-200/60 rounded-2xl p-5 grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Country Filter */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">
                  Select Destination Country
                </label>
                <select
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="w-full bg-white border border-neutral-200 text-xs rounded-xl px-3 py-2 outline-none"
                >
                  <option value="All">All Countries</option>
                  {allCountries.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              {/* Product Filter */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">
                  Select Product Group
                </label>
                <select
                  value={selectedProduct}
                  onChange={(e) => setSelectedProduct(e.target.value)}
                  className="w-full bg-white border border-neutral-200 text-xs rounded-xl px-3 py-2 outline-none"
                >
                  <option value="All">All Products</option>
                  {allProducts.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>

              {/* Text Search */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">
                  Keyword Search
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-neutral-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search docs or notes..."
                    className="w-full bg-white border border-neutral-200 text-xs rounded-xl pl-9 pr-3 py-2 outline-none"
                  />
                </div>
              </div>
            </div>

            {/* List Results */}
            <div className="space-y-6">
              {filteredRequirements.length === 0 ? (
                <div className="text-center py-12 border border-dashed border-neutral-200 rounded-2xl">
                  <HelpCircle className="h-8 w-8 text-neutral-300 mx-auto mb-2" />
                  <span className="text-xs text-neutral-500 font-semibold">No direct requirements matches found</span>
                </div>
              ) : (
                filteredRequirements.map((req, idx) => (
                  <div key={idx} className="border border-neutral-200/80 rounded-2xl p-6 bg-white space-y-4 shadow-sm">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 border-b border-neutral-100 pb-3">
                      <div>
                        <span className="text-[10px] font-bold text-[#4274D9] uppercase tracking-wider block">
                          Destination Corridor
                        </span>
                        <h4 className="text-sm font-bold text-neutral-850">
                          {req.country} ➔ {req.product}
                        </h4>
                      </div>
                      <span className="text-[10px] bg-neutral-100 border border-neutral-250 font-bold px-2 py-0.5 rounded-lg text-neutral-600 self-start md:self-auto">
                        Verification Required
                      </span>
                    </div>

                    <div className="space-y-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block">
                        Required Documents Checklist
                      </span>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {req.documentsRequired.map((doc, dIdx) => (
                          <div key={dIdx} className="text-xs text-neutral-600 flex items-start gap-2">
                            <CheckSquare className="h-4 w-4 text-[#4274D9] shrink-0 mt-0.5" />
                            <span>{doc}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {req.notes && (
                      <div className="bg-neutral-50 border border-neutral-100 rounded-xl p-3.5 text-xs text-neutral-500 italic">
                        <strong>Compliance Note:</strong> {req.notes}
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </section>

          {/* Definitions Section */}
          <section id="definitions" className="space-y-6 pt-6 border-t border-neutral-100">
            <h2 className="text-lg font-bold text-neutral-900 flex items-center gap-2">
              <FileText className="h-5 w-5 text-[#4274D9]" /> Glossary of Common Clearances
            </h2>

            <div className="space-y-4 text-xs leading-relaxed text-neutral-600">
              <div className="space-y-1">
                <h4 className="font-bold text-neutral-850">Bill of Lading (BOL)</h4>
                <p>A legally binding contract issued by a carrier detailing the type, quantity, and destination of the cargo. Serves as a shipment receipt and document of title.</p>
              </div>

              <div className="space-y-1">
                <h4 className="font-bold text-neutral-850">Certificate of Origin (CO)</h4>
                <p>An official document declaring the country in which a commodity was manufactured. Crucial for custom authorities to assess duties and execute trade agreements.</p>
              </div>

              <div className="space-y-1">
                <h4 className="font-bold text-neutral-850">Phytosanitary Certificate</h4>
                <p>{"Issued by an exporting nation's agricultural department verifying that agricultural commodities or plants are free from quarantine pests and match importing biosecurity guidelines."}</p>
              </div>

              <div className="space-y-1">
                <h4 className="font-bold text-neutral-850">FDA Prior Notice</h4>
                <p>A mandatory pre-arrival notification to the United States Food and Drug Administration indicating food, spice, or dietary shipments are arriving at a specific port of entry.</p>
              </div>

              <div className="space-y-1">
                <h4 className="font-bold text-neutral-850">CE & REACH Compliance</h4>
                <p>CE proves safety compliance for European markets. REACH regulates chemical volumes and substances imported into the European Economic Area.</p>
              </div>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}
