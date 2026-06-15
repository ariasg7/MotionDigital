"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Phone } from "lucide-react";
import Link from "next/link";
import { caseStudies } from "@/data/caseStudies";

const filters = ["All", "Web Design", "SEO", "Google Ads", "Branding", "AI Automation"];

function CaseStudyCard({ study }: { study: typeof caseStudies[0] }) {
  return (
    <Link href={`/case-studies/${study.slug}`} className="block">
      <motion.div
        whileHover={{ y: -4, boxShadow: "0 20px 40px -10px rgba(29,130,166,0.15)" }}
        transition={{ duration: 0.25 }}
        className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm flex flex-col lg:flex-row group cursor-pointer"
      >
        {/* LEFT: Thumbnail */}
        <div className="flex-shrink-0 w-full lg:w-[55%] overflow-hidden">
          <img
            src={study.image}
            alt={study.clientName}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            style={{ minHeight: '200px' }}
          />
        </div>

        {/* RIGHT: Info */}
        <div className="flex-1 flex flex-col justify-between px-6 py-6 lg:px-8 lg:py-7">
          <div className="space-y-3 lg:space-y-4">
            <p className="text-[10px] lg:text-[11px] font-bold tracking-[0.2em] text-[#1D82A6] uppercase">
              {study.categoryLabel}
            </p>
            <h3 className="text-[18px] lg:text-[22px] font-bold text-[#0F141C] tracking-tight leading-tight group-hover:text-[#1D82A6] transition-colors duration-300">
              {study.title}
            </h3>
            <p className="text-[12px] lg:text-[13px] text-[#64748B]">{study.clientName}</p>

            <div className="grid grid-cols-3 gap-3 lg:gap-4 pt-1">
              {study.metrics.map((m, i) => (
                <div key={i}>
                  <p className="text-[20px] lg:text-[24px] font-bold text-[#0F141C] tracking-tight leading-none">
                    {m.value}
                  </p>
                  <p className="text-[9px] lg:text-[10px] text-[#64748B] uppercase tracking-[0.1em] mt-1">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 text-[11px] lg:text-[12px] text-[#64748B]">
              <span className="w-2 h-2 rounded-full bg-[#1D82A6] flex-shrink-0" />
              <span>{study.timeframe} Timeframe</span>
            </div>
          </div>

          <div className="flex justify-end pt-4 lg:pt-5 border-t border-gray-100 mt-4 lg:mt-5">
            <div className="flex items-center gap-2 text-[#1D82A6] font-semibold text-[12px] lg:text-[13px] group-hover:gap-3 transition-all duration-200">
              View Case Study
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

export function CaseStudiesGallery() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? caseStudies
    : caseStudies.filter((c) => c.category.includes(activeFilter));

  return (
    <section className="w-full font-sans">
      {/* HERO */}
      <div className="relative bg-[#0A111A] overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/img/testimonials/casestudies_img.png"
            alt=""
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A111A]/40 via-transparent to-[#0A111A]" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-16 pt-32 lg:pt-36 pb-14 lg:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[11px] font-bold tracking-[0.3em] text-[#1D82A6] uppercase block mb-3 lg:mb-4">
              CASE STUDIES
            </span>
            <h1 className="text-[36px] md:text-[52px] lg:text-[60px] font-bold text-white tracking-tighter leading-[1.05] mb-4">
              Real Results.<br />
              <span className="text-[#1D82A6]">From Real Clients.</span>
            </h1>
            <p className="text-[14px] lg:text-[15px] text-[#A1B0C4] max-w-[480px] leading-relaxed mb-7 lg:mb-8">
              We help businesses grow with proven strategies that deliver measurable outcomes. See the impact for yourself.
            </p>

            {/* Filter tabs */}
            <div className="flex flex-nowrap lg:flex-wrap gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`text-[11px] font-bold uppercase tracking-[0.08em] px-5 py-2 rounded-full transition-all duration-200 border whitespace-nowrap flex-shrink-0 ${
                    activeFilter === f
                      ? "bg-[#1D82A6] text-white border-[#1D82A6]"
                      : "bg-white/5 text-[#A1B0C4] hover:bg-white/10 border-white/10"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ALL CARDS */}
      <div className="bg-[#FAF9F5]">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-16 pt-8 lg:pt-10 pb-10 lg:pb-12">
          <AnimatePresence mode="popLayout">
            {filtered.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="mb-4 lg:mb-5"
              >
                <CaseStudyCard study={study} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* BOTTOM CTA */}
        <div className="max-w-[1400px] mx-auto px-4 lg:px-16 pb-14 lg:pb-16">
          <div className="bg-[#0F172A] border border-[#1E293B] rounded-2xl px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-5">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#1D82A6]/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-4 h-4 text-[#1D82A6]" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-[14px] lg:text-[15px] font-bold text-white tracking-tight">
                  Want results like these for your business?
                </h4>
                <p className="text-[12px] text-[#A1B0C4] mt-0.5">
                  Let's create a strategy that drives real growth.
                </p>
              </div>
            </div>
            <a href ="../book"><button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#1D82A6] text-white pl-5 pr-4 py-3 rounded-[8px] hover:bg-white hover:text-[#0A111A] transition-all duration-300 group whitespace-nowrap flex-shrink-0">
              <span className="text-[11px] font-sans uppercase tracking-[0.08em]">Book a Free Call</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-all duration-300" />
            </button></a>
          </div>
        </div>
      </div>
    </section>
  );
}