"use client";

import React from "react";

export default function PrivacyPolicyPage() {
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
              <a href="#data-collection" className="hover:text-neutral-800 transition-colors block py-1 border-l-2 border-[#4274D9] pl-3 text-neutral-800 font-semibold">
                1. Data Collection
              </a>
            </li>
            <li>
              <a href="#data-use" className="hover:text-neutral-800 transition-colors block py-1 border-l-2 border-transparent pl-3 hover:border-neutral-300">
                2. Usage Policies
              </a>
            </li>
            <li>
              <a href="#compliance" className="hover:text-neutral-800 transition-colors block py-1 border-l-2 border-transparent pl-3 hover:border-neutral-300">
                3. Customs Disclosures
              </a>
            </li>
            <li>
              <a href="#security" className="hover:text-neutral-800 transition-colors block py-1 border-l-2 border-transparent pl-3 hover:border-neutral-300">
                4. Data Security
              </a>
            </li>
            <li>
              <a href="#rights" className="hover:text-neutral-800 transition-colors block py-1 border-l-2 border-transparent pl-3 hover:border-neutral-300">
                5. Client Rights
              </a>
            </li>
          </ul>
        </aside>

        {/* Text Content Area */}
        <main className="lg:col-span-9 max-w-3xl space-y-10 text-neutral-600 text-xs md:text-sm leading-relaxed">
          
          <section id="data-collection" className="space-y-4">
            <h1 className="text-3xl font-bold text-neutral-900 tracking-tight mb-2">
              Privacy Policy
            </h1>
            <p className="text-neutral-400 text-xs">Last Updated: August 17, 2026</p>
            <h2 className="text-base font-bold text-neutral-850">1. Information We Collect</h2>
            <p>
              Veda Impex values the confidentiality of trade data. We collect business information necessary to coordinate transport routes, clear border agencies, and generate quotation sheets. This includes names, company registration credentials, business emails, phone numbers, and operational freight details.
            </p>
            <p>
              We do not sell, trade, or distribute corporate lists to third parties for marketing purposes.
            </p>
          </section>

          <section id="data-use" className="space-y-4 pt-6 border-t border-neutral-100">
            <h2 className="text-base font-bold text-neutral-850">2. How We Use Information</h2>
            <p>
              We utilize collected trade data strictly to execute shipping orders. This includes submitting documentation to border offices, coordinating route schedules with ocean carrier networks, providing transit tracking alerts, and updating clients on customs clearance milestones.
            </p>
          </section>

          <section id="compliance" className="space-y-4 pt-6 border-t border-neutral-100">
            <h2 className="text-base font-bold text-neutral-850">3. Customs & Law Enforcement Disclosures</h2>
            <p>
              Logistics networks operate under heavy regulatory oversight. Veda Impex is legally obliged to supply cargo details, commercial invoices, and shipping certificates to government authorities (e.g., USDA, FDA, US Customs, EU REACH inspectors, and local customs authorities) to clear shipments.
            </p>
            <p>
              We reserve the right to disclose shipping statistics and client information to law enforcement agencies if required by an active court subpoena or standard security audits.
            </p>
          </section>

          <section id="security" className="space-y-4 pt-6 border-t border-neutral-100">
            <h2 className="text-base font-bold text-neutral-850">4. Information Security</h2>
            <p>
              Our databases employ industry-standard encryption protocols (SSL/TLS) for data in transit and REST security keys for data in storage. Access to trade documents is restricted strictly to authorized clearance coordinators and routing officers.
            </p>
          </section>

          <section id="rights" className="space-y-4 pt-6 border-t border-neutral-100">
            <h2 className="text-base font-bold text-neutral-850">5. Client Control & Contact</h2>
            <p>
              Corporate clients can request the correction, deletion, or restriction of their stored trade metrics. Please contact our data privacy officer at{" "}
              <a href="mailto:privacy@vedaimpex.com" className="text-[#4274D9] hover:underline font-semibold">
                privacy@vedaimpex.com
              </a>{" "}
              for assistance.
            </p>
          </section>

        </main>
      </div>
    </div>
  );
}
