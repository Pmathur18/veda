"use client";

import React from "react";

export default function CookiesPolicyPage() {
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
              <a href="#what-cookies" className="hover:text-neutral-800 transition-colors block py-1 border-l-2 border-[#1261C9] pl-3 text-neutral-800 font-semibold">
                1. What are Cookies
              </a>
            </li>
            <li>
              <a href="#types-cookies" className="hover:text-neutral-800 transition-colors block py-1 border-l-2 border-transparent pl-3 hover:border-neutral-300">
                2. Types of Cookies
              </a>
            </li>
            <li>
              <a href="#control" className="hover:text-neutral-800 transition-colors block py-1 border-l-2 border-transparent pl-3 hover:border-neutral-300">
                3. Cookie Controls
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-neutral-800 transition-colors block py-1 border-l-2 border-transparent pl-3 hover:border-neutral-300">
                4. Help & Support
              </a>
            </li>
          </ul>
        </aside>

        {/* Text Content Area */}
        <main className="lg:col-span-9 max-w-3xl space-y-10 text-neutral-600 text-xs md:text-sm leading-relaxed">
          
          <section id="what-cookies" className="space-y-4">
            <h1 className="text-3xl font-bold text-neutral-900 tracking-tight mb-2">
              Cookie Policy
            </h1>
            <p className="text-neutral-400 text-xs">Last Updated: August 17, 2026</p>
            <h2 className="text-base font-bold text-neutral-850">1. What Are Cookies?</h2>
            <p>
              Cookies are small text files stored in your web browser directory by websites you visit. They help sites remember your preferences, keep sessions active, and track analytics to improve loading efficiency.
            </p>
            <p>
              Veda Impex uses cookies to optimize your experience on our freight and logistics tracker dashboard.
            </p>
          </section>

          <section id="types-cookies" className="space-y-4 pt-6 border-t border-neutral-100">
            <h2 className="text-base font-bold text-neutral-850">2. Types of Cookies We Use</h2>
            
            <div className="space-y-3">
              <p>
                <strong>Essential Cookies:</strong> These cookies are critical to operating basic website functions, such as remembering your choice of language, saving login sessions, and maintaining security features. Without these, our portal will not execute correctly.
              </p>
              <p>
                <strong>Analytical Cookies:</strong> We run tools like Google Analytics to understand traffic volumes, identify layout bugs, and track speed metrics. These statistics are fully aggregated and anonymous.
              </p>
              <p>
                <strong>Functional Cookies:</strong> These remember options you have selected, such as saved cargo weight units or previous ports searches, to make future enquiries faster.
              </p>
            </div>
          </section>

          <section id="control" className="space-y-4 pt-6 border-t border-neutral-100">
            <h2 className="text-base font-bold text-neutral-850">3. How to Control Cookies</h2>
            <p>
              Most web browsers permit you to reject or delete cookies through browser settings. Disabling essential cookies, however, will break critical features of our logistics tracking tools.
            </p>
            <p>
              You can adjust your cookie choices at any time on this site. Upon your first visit, a bottom banner allows you to consent to or decline our analytical cookie files. Your preferences are stored in your local browser storage for 365 days.
            </p>
          </section>

          <section id="contact" className="space-y-4 pt-6 border-t border-neutral-100">
            <h2 className="text-base font-bold text-[#111111]">4. Contact & Support</h2>
            <p>
              If you have any questions regarding how we use cookie files to manage search histories or portal states, feel free to email our engineering desk at{" "}
              <a href="mailto:support@vedaimpex.com" className="text-[#1261C9] hover:underline font-semibold">
                support@vedaimpex.com
              </a>
              .
            </p>
          </section>

        </main>
      </div>
    </div>
  );
}
