"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Search, Info, SlidersHorizontal, PackageOpen, Sparkles, ShoppingBag } from "lucide-react";
import { productsData, ProductItem } from "../../data/products-data";
import EnquiryModal from "../../components/EnquiryModal";

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState("");

  const categories = useMemo(() => {
    const list = new Set(productsData.map((p) => p.category));
    return ["All", ...Array.from(list)];
  }, []);

  const filteredProducts = useMemo(() => {
    return productsData.filter((p) => {
      const matchesSearch = 
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = 
        selectedCategory === "All" || p.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const triggerEnquiry = (name: string) => {
    setModalProduct(name);
    setIsModalOpen(true);
  };

  return (
    <div className="py-12">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-12 space-y-6">
        <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-[10px] font-bold text-neutral-850 uppercase tracking-widest">
          Trade Catalog
        </div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold text-neutral-900 tracking-tight leading-none uppercase max-w-4xl">
          Import-Export Commodities <br />
          <span className="text-[#1261C9]">& Managed Products.</span>
        </h1>
        
        <p className="text-neutral-500 text-sm leading-relaxed max-w-2xl">
          Veda Impex manages sourcing, logistics, and border clearances for premium industrial, agricultural, and consumer cargo categories. Browse our core trading portfolio.
        </p>
      </section>

      {/* Filter and Search Bar Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-12">
        <div className="bg-white border border-neutral-100 rounded-3xl p-6 shadow-sm flex flex-col lg:flex-row gap-6 justify-between items-center">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 w-full lg:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#1261C9] text-neutral-950 shadow-md shadow-[#1261C9]/25"
                    : "bg-neutral-50 hover:bg-neutral-100 text-neutral-600 border border-neutral-200/50"
                }`}
              >
                {cat === "All" ? "All Commodities" : cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:max-w-xs">
            <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-neutral-450" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search products..."
              className="w-full bg-neutral-50 border border-neutral-200 focus:border-[#1261C9] focus:ring-1 focus:ring-[#1261C9] focus:bg-white text-neutral-800 rounded-2xl pl-10 pr-4 py-3 text-xs transition-all outline-none"
            />
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-20">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-neutral-50 border border-neutral-100 rounded-3xl space-y-3">
            <PackageOpen className="h-12 w-12 text-neutral-300 mx-auto" />
            <h3 className="text-lg font-bold text-neutral-700">No commodities match your criteria</h3>
            <p className="text-xs text-neutral-450 max-w-xs mx-auto leading-relaxed">
              Try adjusting your text query or category tabs, or get in touch for custom sourcing requests.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((p) => (
              <div 
                key={p.id} 
                className="bg-white border border-neutral-100 rounded-3xl shadow-xl shadow-neutral-100/35 overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:shadow-2xl hover:shadow-neutral-200/40"
              >
                <Link href={`/products/${p.id}`} className="block cursor-pointer flex-1">
                  {/* Photo container */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url('${p.imageUrl}')` }}
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-neutral-950 px-3 py-1 rounded-xl text-[9px] font-bold uppercase tracking-widest border border-neutral-100">
                      {p.category}
                    </div>
                  </div>

                  {/* Text Details */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-neutral-900 group-hover:text-[#1261C9] transition-colors">
                      {p.name}
                    </h3>
                    <p className="text-neutral-500 text-xs leading-relaxed">
                      {p.description}
                    </p>

                    {/* Specs summary */}
                    <div className="bg-neutral-50 border border-neutral-100 rounded-2xl p-4 space-y-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                        Sourcing Spec Sheet
                      </span>
                      {p.specifications.slice(0, 3).map((spec, sidx) => (
                        <div key={sidx} className="text-[10px] text-neutral-600 flex items-center gap-2">
                          <span className="h-1 w-1 bg-[#1261C9] rounded-full" />
                          {spec}
                        </div>
                      ))}
                    </div>
                  </div>
                </Link>

                {/* Bottom CTA */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => triggerEnquiry(p.name)}
                    className="w-full bg-[#071B3A] hover:bg-[#1261C9] hover:text-neutral-950 text-white font-bold py-3.5 px-4 rounded-2xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-neutral-950/5 group-hover:shadow-lg group-hover:shadow-[#1261C9]/10"
                  >
                    Enquire Now <ShoppingBag className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Sourcing consultation CTA */}
      <section className="max-w-5xl mx-auto px-4 md:px-8">
        <div className="bg-[#071B3A] text-white rounded-3xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 border border-neutral-900">
          <div className="space-y-3">
            <h3 className="text-2xl font-bold uppercase">Custom sourcing needs?</h3>
            <p className="text-neutral-400 text-xs max-w-md leading-relaxed">
              If your commodity is not listed in our catalog, our procurement network can source directly from certified manufacturers across India and GCC markets.
            </p>
          </div>
          <button
            onClick={() => triggerEnquiry("Custom Commodities Sourcing Procurement")}
            className="bg-[#1261C9] hover:bg-[#1687E8] text-neutral-950 font-bold py-3.5 px-6 rounded-2xl text-xs uppercase tracking-wider transition-colors shrink-0 cursor-pointer shadow-md shadow-[#1261C9]/10"
          >
            Request Sourcing Proposal
          </button>
        </div>
      </section>

      {/* Enquiry Modal */}
      <EnquiryModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        initialProduct={modalProduct} 
      />
    </div>
  );
}
