"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2 } from "lucide-react";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: string;
}

export default function EnquiryModal({ isOpen, onClose, initialProduct = "" }: EnquiryModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: initialProduct,
    quantity: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync state if initialProduct changes
  const [prevInitialProduct, setPrevInitialProduct] = useState(initialProduct);
  if (initialProduct !== prevInitialProduct) {
    setPrevInitialProduct(initialProduct);
    setFormData((prev) => ({ ...prev, product: initialProduct }));
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
      setFormData({ name: "", email: "", phone: "", product: "", quantity: "", message: "" });
    }, 2500);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Box */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative bg-white rounded-3xl w-full max-w-lg p-8 shadow-2xl border border-neutral-100 overflow-hidden z-10"
        >
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="p-4 bg-blue-50 text-blue-600 rounded-full mb-6"
              >
                <CheckCircle2 className="h-16 w-16" />
              </motion.div>
              <h3 className="text-2xl font-bold text-neutral-900">Enquiry Received!</h3>
              <p className="text-neutral-500 mt-2 max-w-sm">
                Thank you for your interest. A Veda Impex trade specialist will review your request and contact you within 24 hours.
              </p>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-neutral-900">Trade Enquiry</h3>
                  <p className="text-neutral-500 text-sm mt-1">Get custom quotes and logistics feasibility</p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 text-neutral-400 hover:text-neutral-600 hover:bg-neutral-50 rounded-full transition-all cursor-pointer"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full bg-neutral-50 border border-neutral-200 focus:border-[#1261C9] focus:ring-1 focus:ring-[#1261C9] focus:bg-white text-neutral-800 rounded-xl px-4 py-2.5 text-sm transition-all outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-neutral-50 border border-neutral-200 focus:border-[#1261C9] focus:ring-1 focus:ring-[#1261C9] focus:bg-white text-neutral-800 rounded-xl px-4 py-2.5 text-sm transition-all outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full bg-neutral-50 border border-neutral-200 focus:border-[#1261C9] focus:ring-1 focus:ring-[#1261C9] focus:bg-white text-neutral-800 rounded-xl px-4 py-2.5 text-sm transition-all outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-1.5">
                      Product/Commodity
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.product}
                      onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                      placeholder="e.g. Organic Black Pepper"
                      className="w-full bg-neutral-50 border border-neutral-200 focus:border-[#1261C9] focus:ring-1 focus:ring-[#1261C9] focus:bg-white text-neutral-800 rounded-xl px-4 py-2.5 text-sm transition-all outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-1.5">
                      Volume / Weight
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      placeholder="e.g. 10 Metric Tons"
                      className="w-full bg-neutral-50 border border-neutral-200 focus:border-[#1261C9] focus:ring-1 focus:ring-[#1261C9] focus:bg-white text-neutral-800 rounded-xl px-4 py-2.5 text-sm transition-all outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-1.5">
                    Additional Requirements
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Specify destination port, packaging type, or timeline..."
                    className="w-full bg-neutral-50 border border-neutral-200 focus:border-[#1261C9] focus:ring-1 focus:ring-[#1261C9] focus:bg-white text-neutral-800 rounded-xl px-4 py-2.5 text-sm transition-all outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1261C9] hover:bg-[#1687E8] text-white font-bold py-3 px-4 rounded-xl text-sm transition-all flex items-center justify-center gap-2 mt-2 cursor-pointer shadow-md shadow-[#1261C9]/10"
                >
                  Send Trade Enquiry <Send className="h-4 w-4" />
                </button>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
