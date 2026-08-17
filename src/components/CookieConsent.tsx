"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";

export default function CookieConsent() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("veda-impex-cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsOpen(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("veda-impex-cookie-consent", "accepted");
    setIsOpen(false);
  };

  const handleReject = () => {
    localStorage.setItem("veda-impex-cookie-consent", "rejected");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-50 bg-[#071B3A] border border-neutral-800 text-white rounded-3xl p-6 shadow-2xl shadow-black/40"
      >
        <div className="flex items-start gap-4">
          <div className="p-3 bg-[#1261C9]/10 text-[#1261C9] rounded-full shrink-0">
            <Cookie className="h-6 w-6" />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-lg text-neutral-100">Cookie Preference</h4>
            <p className="text-neutral-400 text-sm mt-1 leading-relaxed">
              We use cookies to optimize site features, analyze traffic, and enhance your logistics management experience.
            </p>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-neutral-500 hover:text-neutral-300 transition-colors cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="flex items-center gap-3 mt-5">
          <button
            onClick={handleAccept}
            className="flex-1 bg-[#1261C9] hover:bg-[#1687E8] text-neutral-950 font-semibold py-2.5 px-4 rounded-full text-sm transition-all shadow-md shadow-[#1261C9]/20 cursor-pointer"
          >
            Accept All
          </button>
          <button
            onClick={handleReject}
            className="flex-1 bg-neutral-850 hover:bg-neutral-800 text-neutral-200 font-semibold py-2.5 px-4 rounded-full text-sm transition-all border border-neutral-800 cursor-pointer"
          >
            Reject
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
