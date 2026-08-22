"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, Calendar, CheckCircle2, ShieldCheck } from "lucide-react";

type TimeRange = "7D" | "30D" | "6M";

interface AnalyticsData {
  totalShipments: string;
  onTimeRate: string;
  activeTracking: string;
  changeRate: string;
  chartPath: string;
  points: { x: number; y: number }[];
}

const dataMap: Record<TimeRange, AnalyticsData> = {
  "7D": {
    totalShipments: "1,248",
    onTimeRate: "99.8%",
    activeTracking: "42",
    changeRate: "+4.2%",
    chartPath: "M 0 80 Q 30 50 60 70 T 120 40 T 180 30 T 240 10 T 300 20",
    points: [
      { x: 0, y: 80 },
      { x: 60, y: 70 },
      { x: 120, y: 40 },
      { x: 180, y: 30 },
      { x: 240, y: 10 },
      { x: 300, y: 20 },
    ]
  },
  "30D": {
    totalShipments: "5,412",
    onTimeRate: "99.6%",
    activeTracking: "118",
    changeRate: "+8.7%",
    chartPath: "M 0 70 Q 30 90 60 60 T 120 50 T 180 20 T 240 30 T 300 15",
    points: [
      { x: 0, y: 70 },
      { x: 60, y: 60 },
      { x: 120, y: 50 },
      { x: 180, y: 20 },
      { x: 240, y: 30 },
      { x: 300, y: 15 },
    ]
  },
  "6M": {
    totalShipments: "32,950",
    onTimeRate: "99.4%",
    activeTracking: "410",
    changeRate: "+12.3%",
    chartPath: "M 0 90 Q 30 60 60 40 T 120 30 T 180 40 T 240 20 T 300 10",
    points: [
      { x: 0, y: 90 },
      { x: 60, y: 40 },
      { x: 120, y: 30 },
      { x: 180, y: 40 },
      { x: 240, y: 20 },
      { x: 300, y: 10 },
    ]
  }
};

export default function ShipmentAnalytics() {
  const [range, setRange] = useState<TimeRange>("30D");
  const current = dataMap[range];

  return (
    <div className="bg-white rounded-3xl p-6 border border-neutral-100 shadow-xl shadow-neutral-100/50 w-full max-w-md mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-1">
            Global Operations
          </span>
          <h4 className="text-lg font-bold text-neutral-900 flex items-center gap-1.5">
            <TrendingUp className="h-5 w-5 text-[#1261C9]" /> Shipment Analytics
          </h4>
        </div>
        
        {/* Date Selector */}
        <div className="flex bg-neutral-50 border border-neutral-150 p-1 rounded-xl">
          {(["7D", "30D", "6M"] as TimeRange[]).map((r) => (
            <button
              key={r}
              onClick={() => setRange(r)}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                range === r
                  ? "bg-white text-neutral-900 shadow-sm"
                  : "text-neutral-500 hover:text-neutral-900"
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Stats */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {/* Stat 1 */}
        <div className="bg-neutral-50 rounded-2xl p-4 border border-neutral-100">
          <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block mb-1">
            Total Deliveries
          </span>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-black text-neutral-900">
              {current.totalShipments}
            </span>
            <span className="text-xs font-bold text-blue-600 flex items-center">
              <ArrowUpRight className="h-3 w-3" /> {current.changeRate}
            </span>
          </div>
        </div>

        {/* Stat 2 */}
        <div className="bg-neutral-50 rounded-2xl p-4 border border-neutral-100">
          <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block mb-1">
            On-Time Rate
          </span>
          <div className="flex flex-wrap items-baseline gap-1.5">
            <span className="text-2xl font-black text-neutral-900 text-[#1261C9]">
              {current.onTimeRate}
            </span>
            <span className="text-xs font-bold text-blue-600 flex items-center bg-blue-50 px-1.5 py-0.5 rounded-full">
              Optimal
            </span>
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="relative border border-neutral-100 rounded-2xl p-4 mb-6 bg-gradient-to-b from-white to-neutral-50/50">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1.5 text-xs text-neutral-500">
            <Calendar className="h-3.5 w-3.5" /> Trend Overview
          </div>
          <span className="text-[10px] font-semibold text-neutral-400">
            Live Updates
          </span>
        </div>

        <div className="relative h-24 w-full">
          <svg className="w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
            {/* Grid Lines */}
            <line x1="0" y1="20" x2="300" y2="20" stroke="#f4f4f5" strokeWidth="1" strokeDasharray="3" />
            <line x1="0" y1="50" x2="300" y2="50" stroke="#f4f4f5" strokeWidth="1" strokeDasharray="3" />
            <line x1="0" y1="80" x2="300" y2="80" stroke="#f4f4f5" strokeWidth="1" strokeDasharray="3" />

            {/* Gradient Area under line */}
            <defs>
              <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1261C9" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#1261C9" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            <path
              d={`${current.chartPath} L 300 100 L 0 100 Z`}
              fill="url(#chartGrad)"
            />

            {/* Main Path */}
            <motion.path
              key={range}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              d={current.chartPath}
              fill="none"
              stroke="#1261C9"
              strokeWidth="3.5"
              strokeLinecap="round"
            />

            {/* Dots */}
            {current.points.map((p, idx) => (
              <circle
                key={idx}
                cx={p.x}
                cy={p.y}
                r="4.5"
                fill="#ffffff"
                stroke="#1261C9"
                strokeWidth="2.5"
              />
            ))}
          </svg>
        </div>
      </div>

      {/* Transit Feed */}
      <div className="space-y-3">
        <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block">
          Active Custom Clearances
        </span>
        <div className="space-y-2.5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs border border-neutral-100 p-2.5 rounded-xl bg-white shadow-sm gap-2">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5 sm:mt-0" />
              <div>
                <span className="font-bold text-neutral-800 block sm:inline">Mundra (IN) ➔ Hamburg (DE)</span>
                <span className="block text-[10px] text-neutral-400">Customs Cleared</span>
              </div>
            </div>
            <span className="font-bold text-neutral-900 bg-neutral-50 px-2 py-0.5 rounded-lg border border-neutral-150 self-start sm:self-auto shrink-0">
              #IN-382
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs border border-neutral-100 p-2.5 rounded-xl bg-white shadow-sm gap-2">
            <div className="flex items-start gap-2">
              <ShieldCheck className="h-4 w-4 text-sky-500 shrink-0 mt-0.5 sm:mt-0" />
              <div>
                <span className="font-bold text-neutral-800 block sm:inline">Jebel Ali (AE) ➔ Sydney (AU)</span>
                <span className="block text-[10px] text-neutral-400">Biosecurity Inspection</span>
              </div>
            </div>
            <span className="font-bold text-neutral-900 bg-neutral-50 px-2 py-0.5 rounded-lg border border-neutral-150 self-start sm:self-auto shrink-0">
              #AE-992
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
