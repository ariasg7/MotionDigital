"use client";

import { motion } from "framer-motion";
import { Phone, Map, Hammer, CheckCircle, Rocket, ArrowUpRight } from "lucide-react";

const stages = [
  {
    id: 0,
    phase: "01",
    label: "Discovery",
    icon: Phone,
    desc: "We learn about your business, goals, and what's not working right now — no pressure, no jargon.",
  },
  {
    id: 1,
    phase: "02",
    label: "Strategy",
    icon: Map,
    desc: "We put together a custom game plan tailored to your goals, budget, and timeline.",
  },
  {
    id: 2,
    phase: "03",
    label: "Build",
    icon: Hammer,
    desc: "We build everything in-house — websites, branding, SEO, and systems that perform.",
  },
  {
    id: 3,
    phase: "04",
    label: "Review",
    icon: CheckCircle,
    desc: "You review, we refine. We make sure everything is exactly right before launch.",
  },
  {
    id: 4,
    phase: "05",
    label: "Grow",
    icon: Rocket,
    desc: "We go live and stay with you to monitor, optimize, and scale your results.",
  },
];

export function ProcessSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
      className="relative w-full py-20 lg:py-32 bg-[#0A111A] overflow-hidden font-sans"
    >
      {/* Background wave */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/img/pillars_img.png"
          alt=""
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-20">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 lg:mb-24 max-w-2xl"
        >
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#38bdf8] uppercase block mb-4">
            How It Works
          </span>
          <h2 className="text-[40px] md:text-[64px] font-bold text-white tracking-tighter leading-[1.05] mb-6">
            Simple. Transparent.<br />
            <span className="text-[#38bdf8]">Done For You.</span>
          </h2>
          <p className="text-[16px] text-[#A1B0C4] leading-relaxed max-w-sm">
            Five simple steps. You stay focused on your business — we handle everything else.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Connector line — changed to white */}
          <div className="hidden lg:block absolute top-[28px] left-[calc(10%+24px)] right-[calc(10%+24px)] h-[1px] bg-white/20 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-6 relative z-10">
            {stages.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <motion.div
                  key={stage.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Icon circle — border changed to white */}
                  <div className="w-18 h-18 rounded-full border-2 border-white/30 group-hover:border-white bg-[#0A111A] flex items-center justify-center mb-6 transition-colors duration-300 relative z-10">
                    {/* Icon changed to white */}
                    <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>

                  {/* Step number */}
                  <span className="text-[13px] font-bold text-[#38bdf8] tracking-[0.1em] mb-2">
                    {stage.phase}
                  </span>

                  {/* Title */}
                  <h3 className="text-[16px] font-bold text-white mb-3 tracking-tight">
                    {stage.label}
                  </h3>

                  {/* Description */}
                  <p className="text-[13px] text-[#A1B0C4] leading-relaxed font-normal">
                    {stage.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA Bar — Enhanced for higher visibility */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 lg:mt-28 bg-[#0F172A] border border-[#1E293B] rounded-3xl px-8 py-10 lg:px-12 lg:py-12 flex flex-col sm:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-[#38bdf8]/10 flex items-center justify-center flex-shrink-0">
              <Rocket className="w-8 h-8 text-[#38bdf8]" strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="text-[20px] lg:text-[24px] font-bold text-white tracking-tight">
                Ready to build something great?
              </h4>
              <p className="text-[15px] lg:text-[16px] text-[#A1B0C4] mt-1">
                Let's get your business found, trusted, and growing.
              </p>
            </div>
          </div>
          
          <button className="flex items-center gap-3 bg-[#38bdf8] text-white pl-8 pr-6 py-5 rounded-[12px] hover:bg-white hover:text-[#0A111A] transition-all duration-300 group whitespace-nowrap flex-shrink-0 shadow-lg shadow-[#38bdf8]/20 ring-4 ring-[#38bdf8]/10">
            <span className="text-[13px] font-bold font-sans uppercase tracking-[0.1em]">Book a Discovery Call</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 transition-all duration-300" />
          </button>
        </motion.div>

      </div>
    </motion.section>
  );
}