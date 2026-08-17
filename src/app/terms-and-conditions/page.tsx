"use client";

import React from "react";

export default function TermsAndConditionsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Sticky Table of Contents Sidebar */}
        <aside className="lg:col-span-3 lg:sticky lg:top-28 space-y-4 text-xs font-medium text-neutral-500 border-r border-neutral-100 pr-6 hidden lg:block">
          <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest block mb-4">
            Table of Contents
          </span>
          <ul className="space-y-3">
            <li>
              <a href="#intro" className="hover:text-neutral-800 transition-colors block py-1 border-l-2 border-[#1261C9] pl-3 text-neutral-800 font-semibold">
                1. Introduction
              </a>
            </li>
            <li>
              <a href="#definitions" className="hover:text-neutral-800 transition-colors block py-1 border-l-2 border-transparent pl-3 hover:border-neutral-300">
                2. Definitions
              </a>
            </li>
            <li>
              <a href="#logistics" className="hover:text-neutral-800 transition-colors block py-1 border-l-2 border-transparent pl-3 hover:border-neutral-300">
                3. Logistics Obligations
              </a>
            </li>
            <li>
              <a href="#liabilities" className="hover:text-neutral-800 transition-colors block py-1 border-l-2 border-transparent pl-3 hover:border-neutral-300">
                4. Liability Limits
              </a>
            </li>
            <li>
              <a href="#jurisdiction" className="hover:text-neutral-800 transition-colors block py-1 border-l-2 border-transparent pl-3 hover:border-neutral-300">
                5. Governing Law
              </a>
            </li>
          </ul>
        </aside>

        {/* Text Content Area */}
        <main className="lg:col-span-9 max-w-3xl space-y-10 text-neutral-600 text-xs md:text-sm leading-relaxed">
          
          <section id="intro" className="space-y-4">
            <h1 className="text-3xl font-bold text-neutral-900 tracking-tight mb-2">
              Terms & Conditions
            </h1>
            <p className="text-neutral-400 text-xs">Last Updated: August 17, 2026</p>
            <h2 className="text-base font-bold text-neutral-850">1. Introduction</h2>
            <p>
              Welcome to the digital portal of Veda Impex. By using this website, scheduling logistical operations, or requesting price rate calculations, you agree to comply with and be bound by the following terms and conditions. These terms govern the relationship between Veda Impex and its corporate clients.
            </p>
            <p>
              Please read these terms carefully. If you do not agree to be bound by these policies, you must immediately terminate use of our website tools and logistics clearing services.
            </p>
          </section>

          <section id="definitions" className="space-y-4 pt-6 border-t border-neutral-100">
            <h2 className="text-base font-bold text-neutral-850">2. Definitions & Interpretation</h2>
            <p>
              Throughout this agreement, "Company", "Veda Impex", "we", "us", and "our" refer directly to Veda Impex and its registered operations desks. "Client", "Exporter", "Importer", "User", and "you" refer to any corporate entity using our cargo coordination portal.
            </p>
            <p>
              "Services" refers to our ocean cargo consolidation, expedited aviation freight, domestic trucking routing, customs brokerage filings, and trade commodity procurement.
            </p>
          </section>

          <section id="logistics" className="space-y-4 pt-6 border-t border-neutral-100">
            <h2 className="text-base font-bold text-neutral-850">3. Logistics Coordination & Client Obligations</h2>
            <p>
              Clients are solely responsible for ensuring the accuracy of all documentation supplied for custom broker actions. This includes providing correct HS Codes, exact packaging counts, accurate chemical formulas (for REACH/SDS filings), and original certificates of origin.
            </p>
            <p>
              Veda Impex holds no responsibility for shipment seizures, border holds, or demurrage fees resulting from false declarations, inaccurate weight inputs, or missing phytosanitary certifications.
            </p>
          </section>

          <section id="liabilities" className="space-y-4 pt-6 border-t border-neutral-100">
            <h2 className="text-base font-bold text-neutral-850">4. Limitation of Liability</h2>
            <p>
              Except where prohibited by law, Veda Impex will not be liable for indirect, consequential, special, or punitive damages, including loss of revenue, profit, or data, arising from transit delays, port labor disputes, weather anomalies, or customs clearance holds.
            </p>
            <p>
              Our maximum liability for lost or damaged goods in transit is governed strictly by the respective Bill of Lading, Warsaw Convention (for air cargo), or local road carrier laws.
            </p>
          </section>

          <section id="jurisdiction" className="space-y-4 pt-6 border-t border-neutral-100">
            <h2 className="text-base font-bold text-neutral-850">5. Governing Law & Disputation</h2>
            <p>
              These Terms & Conditions are governed by the laws of India. Any disputes arising from or relating to our website operations or logistics transactions shall be submitted to the exclusive jurisdiction of the courts located in Mumbai, Maharashtra, India.
            </p>
            <p>
              For legal support, custom rate revisions, or claims filing, contact our compliance desk at{" "}
              <a href="mailto:legal@vedaimpex.com" className="text-[#1261C9] hover:underline font-semibold">
                legal@vedaimpex.com
              </a>
              .
            </p>
          </section>

        </main>
      </div>
    </div>
  );
}
