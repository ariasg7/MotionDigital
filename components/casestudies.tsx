"use client";

import { ArrowUpRight } from "lucide-react";

const CASE_STUDY_DATA = [
  {
    client: "NEXUS FINANCIAL",
    industry: "FinTech",
    title: "Legacy Monolith to Modern Edge",
    desc: "Refactored core throughput systems to handle 4x load with 0ms downtime.",
    metric: "400% THROUGHPUT INCREASE",
  },
  {
    client: "AERIS HEALTH",
    industry: "HealthTech",
    title: "Optimizing React Pipelines",
    desc: "Hardened vitals and reduced latency in high-stakes clinical dashboards.",
    metric: "2.4s LOAD REDUCTION",
  },
];

export function CaseStudies() {
  return (
    <section className="w-full py-32 bg-[#0A111A] text-white overflow-hidden font-sans">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20">
        
        {/* Header - Consistent with Hero/Trusted hierarchy */}
        <div className="border-b border-white/10 pb-6 mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#1D82A6] uppercase block mb-3 font-sans">
                Testimonials
              </span>
              <h2 className="text-[40px] md:text-[64px] font-sans font-bold text-white tracking-tighter leading-[1.05]">
                Case Studies
              </h2>
            </div>
          </div>

        {/* Layout: Architectural Blueprint Style */}
        <div className="grid lg:grid-cols-2 gap-8">
          {CASE_STUDY_DATA.map((study, idx) => (
            <div 
              key={idx}
              className="group relative bg-[#0F1621]/40 border border-white/5 p-8 md:p-12 transition-all duration-300 hover:border-[#1D82A6]/30"
            >
              <div className="flex justify-between items-start mb-10">
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#1D82A6] uppercase">
                  {study.client} • {study.industry}
                </span>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#1D82A6] group-hover:border-[#1D82A6] transition-all">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
              </div>

              <h3 className="text-[28px] md:text-[32px] font-bold tracking-tight text-white mb-6 leading-tight group-hover:text-[#1D82A6] transition-colors">
                {study.title}
              </h3>
              
              <p className="text-[15px] leading-relaxed text-white/50 mb-12 font-light max-w-md">
                {study.desc}
              </p>

              <div className="pt-8 border-t border-white/10">
                <span className="text-[24px] font-extrabold tracking-tighter block leading-none text-white">
                  {study.metric.split(" ")[0]}
                </span>
                <span className="text-[9px] font-bold tracking-[0.2em] text-[#1D82A6] uppercase mt-2 block">
                  {study.metric.split(" ").slice(1).join(" ")}
                </span>
              </div>

              {/* Architectural Accent Line */}
              <div className="absolute bottom-0 left-0 h-[2px] bg-[#1D82A6] w-0 group-hover:w-full transition-all duration-700 ease-out" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}