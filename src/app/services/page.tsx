"use client";

import React, { useState } from "react";
import { Ship, Plane, Truck, FileCheck, Warehouse, TrendingUp, ShieldAlert, ArrowRight } from "lucide-react";
import RotatingCard from "../../components/RotatingCard";
import EnquiryModal from "../../components/EnquiryModal";

interface ServiceItem {
  num: string;
  title: string;
  icon: React.ComponentType<any>;
  image: string;
  desc: string;
  features: string[];
  angle: number;
}

export default function ServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState("");

  const triggerEnquiry = (title: string) => {
    setModalProduct(title);
    setIsModalOpen(true);
  };

  const services: ServiceItem[] = [
    {
      num: "01",
      title: "Sea Shipping (FCL & LCL)",
      icon: Ship,
      image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=800&auto=format&fit=crop",
      desc: "Full Container Load (FCL) and Less than Container Load (LCL) consolidations globally. We maintain alliances with premier ocean carriers to lock in container space and optimize routes.",
      features: ["Port-to-Port & Door-to-Door consolidations", "Specialized flat-rack and refrigerated options", "Dedicated booking allocations"],
      angle: -2.5
    },
    {
      num: "02",
      title: "Expedited Air Freight",
      icon: Plane,
      image: "https://images.unsplash.com/photo-1586528116493-a0210c9ef715?q=80&w=800&auto=format&fit=crop",
      desc: "Urgent time-critical air logistics. We integrate direct schedules and cargo charters for high-value items, electronic components, and perishable agricultural commodities.",
      features: ["Next-flight-out priority cargo shipping", "Direct airline space agreements", "Express customs airport processing"],
      angle: 2
    },
    {
      num: "03",
      title: "Cross-Border Land Transport",
      icon: Truck,
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=800&auto=format&fit=crop",
      desc: "Reliable linehaul trucking, intermodal rail freight, and final-mile deliveries. Our road fleet operates major freight lanes across GCC countries, Europe, and India.",
      features: ["FTL & LTL container trucking", "GPS tracked telemetry on all trucks", "Inland cross-dock scheduling"],
      angle: -3
    },
    {
      num: "04",
      title: "Custom Clearing & Brokerage",
      icon: FileCheck,
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
      desc: "Navigating complex border filings. In-house customs brokers manage FDA Prior Notice compliance, USDA certificates, CE and RoHS markings, and EU REACH audits.",
      features: ["HS code classification audits", "FDA / USDA agency registrations", "Duty & tariff minimization studies"],
      angle: 2.5
    },
    {
      num: "05",
      title: "Secure Warehousing",
      icon: Warehouse,
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
      desc: "Modern distribution centers situated near key ports. Offering temp-controlled inventory storage, sorting, pick-and-pack fulfillment, and long-term consolidation.",
      features: ["Bonded and non-bonded facilities", "WMS software inventory tracking", "Consolidation & split-shipment assembly"],
      angle: -2
    },
    {
      num: "06",
      title: "Supply Chain Consulting",
      icon: TrendingUp,
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=800&auto=format&fit=crop",
      desc: "Strategic reviews of global trade corridors. We help businesses map alternative routes, reduce tariff exposure, and optimize inventory lead times.",
      features: ["Sourcing and supplier risk reviews", "Logistics cost-minimization audit", "Customs compliance gap analysis"],
      angle: 3
    }
  ];

  return (
    <div className="py-12">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-20 space-y-6">
        <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-[10px] font-bold text-neutral-850 uppercase tracking-widest">
          Solutions List
        </div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold text-neutral-900 tracking-tight leading-none uppercase max-w-4xl">
          Flexible transit channels <br />
          <span className="text-[#1261C9]">for every trade.</span>
        </h1>
        
        <p className="text-neutral-500 text-sm md:text-base leading-relaxed max-w-2xl">
          Explore our structured multi-modal shipping channels. We merge transport logistics with customs broker operations to guarantee uninterrupted supply chain execution.
        </p>
      </section>

      {/* Services Grid (Alternate layout with rotated image cards) */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 space-y-24 mb-20">
        {services.map((s, idx) => {
          const Icon = s.icon;
          const isEven = idx % 2 === 0;

          return (
            <div 
              key={idx} 
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                isEven ? "" : "lg:flex-row-reverse"
              }`}
            >
              {/* Graphic card side */}
              <div className={`lg:col-span-6 flex justify-center ${
                isEven ? "lg:order-1" : "lg:order-2"
              }`}>
                <RotatingCard angle={s.angle} className="w-full max-w-lg aspect-[4/3] relative group">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${s.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/65 via-neutral-950/10 to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-6 left-6 h-10 w-10 bg-white/10 border border-white/20 backdrop-blur-md text-white rounded-xl flex items-center justify-center font-black text-sm">
                    {s.num}
                  </div>
                </RotatingCard>
              </div>

              {/* Text detail side */}
              <div className={`lg:col-span-6 space-y-6 ${
                isEven ? "lg:order-2" : "lg:order-1"
              }`}>
                <div className="flex items-center gap-3">
                  <span className="p-3 bg-[#1261C9]/10 text-[#1261C9] rounded-2xl">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-2xl font-black text-neutral-900 uppercase tracking-tight">{s.title}</h3>
                </div>

                <p className="text-neutral-500 text-sm leading-relaxed">{s.desc}</p>

                <ul className="space-y-2">
                  {s.features.map((f, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2.5 text-xs text-neutral-600 font-medium">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#1261C9]" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="pt-4 flex gap-4">
                  <button
                    onClick={() => triggerEnquiry(s.title)}
                    className="bg-[#071B3A] hover:bg-[#0B3D91] text-white font-bold py-3 px-5 rounded-full text-[10px] tracking-wider uppercase transition-all cursor-pointer"
                  >
                    Enquire Now
                  </button>
                  <button 
                    onClick={() => triggerEnquiry(s.title + " Custom Quote")}
                    className="border border-neutral-200 hover:bg-neutral-50 text-neutral-800 font-bold py-3 px-5 rounded-full text-[10px] tracking-wider uppercase transition-all cursor-pointer"
                  >
                    Request Quote
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Dynamic CTA */}
      <section className="bg-neutral-50 border-t border-neutral-100 py-16 text-center">
        <div className="max-w-xl mx-auto px-4 space-y-4">
          <h3 className="text-2xl font-bold text-neutral-900 uppercase">Need a multi-modal quote?</h3>
          <p className="text-neutral-400 text-xs leading-relaxed">
            Combine Sea, Air, and Land feeds with integrated clearances. Our trade desks will configure a unified pricing sheet.
          </p>
          <button
            onClick={() => triggerEnquiry("Custom Integrated Logistics Solution")}
            className="bg-[#1261C9] hover:bg-[#1687E8] text-neutral-950 font-bold py-3.5 px-8 rounded-full text-xs uppercase tracking-wider transition-colors inline-block mt-4 cursor-pointer"
          >
            Design Customs Strategy
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
