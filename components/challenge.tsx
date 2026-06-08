"use client";

import React from 'react';
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const challenges = [
  {
    number: "01",
    title: "You're Invisible on Google",
    description: "If you're not in the top 3 on Google Maps, customers call your competitor instead.",
  },
  {
    number: "02",
    title: "You Look Untrustworthy Online",
    description: "A weak website or missing profile makes people second-guess your business before they call.",
  },
  {
    number: "03",
    title: "You're Missing Out on New Leads",
    description: "Without SEO or a proper Google profile, you'll never reach new customers actively searching for you.",
  },
  {
    number: "04",
    title: "Every Month You Wait, the Gap Grows",
    description: "Other local businesses are investing in their online presence — the longer you wait, the harder it gets to catch up.",
  }
];

export default function Challenge() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="w-full relative py-24 md:py-32 bg-[#FAF9F5] font-sans overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* LEFT: Sticky Text */}
          <motion.div variants={itemVariants} className="lg:sticky lg:top-32 space-y-8">
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#1D82A6] uppercase">
              The Real Problem
            </span>
            <h2 className="text-[52px] md:text-[72px] font-bold text-[#0F141C] tracking-tighter leading-[1.05]">
              Your competitors<br />
              are already<br />
              <span className="text-[#1D82A6]">online.</span>
            </h2>
            <p className="text-[16px] text-[#64748B] max-w-[460px] leading-relaxed font-normal">
              Most local businesses lose customers before a single conversation happens — because they can't be found online, don't look trustworthy, or never follow up fast enough.
            </p>
            <div className="pt-2 space-y-6">
              <span className="text-[16px] font-semibold text-[#0F141C] tracking-tight block">
                We fix all three.
              </span>
              <button className="flex items-center gap-3 bg-[#0F141C] text-white pl-5 pr-4 py-3.5 rounded-[8px] hover:bg-[#1D82A6] transition-all duration-300 group">
                <span className="text-[11px] font-sans uppercase tracking-[0.08em]">Book a Free Call</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#1D82A6] group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300" />
              </button>
              <p className="text-[12px] text-[#64748B] tracking-wide">
                15+ local businesses already growing with Motion Digital.
              </p>
            </div>
          </motion.div>

          {/* RIGHT: Numbered List */}
          <motion.div variants={containerVariants} className="flex flex-col divide-y divide-[#E2E0D9]">
            {challenges.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group flex gap-6 py-8 items-start hover:bg-[#F5F3EE] transition-colors duration-300 px-4 -mx-4 rounded-xl cursor-default"
              >
                {/* Number */}
                <span className="text-[14px] font-bold tracking-[0.1em] text-[#1D82A6]/50 group-hover:text-[#1D82A6] transition-colors duration-300 pt-1 w-8 flex-shrink-0">
                  {item.number}
                </span>

                {/* Divider */}
                <div className="w-[1px] self-stretch bg-[#E2E0D9] group-hover:bg-[#1D82A6] transition-colors duration-300 flex-shrink-0" />

                {/* Content */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-[20px] font-semibold text-[#0F141C] tracking-tight leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[14px] text-[#64748B] leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}