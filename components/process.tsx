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
    x: "10%",
    y: "25%",
  },
  {
    id: 1,
    phase: "02",
    label: "Strategy",
    icon: Map,
    desc: "We put together a custom game plan tailored to your goals, budget, and timeline.",
    x: "28%",
    y: "42%",
  },
  {
    id: 2,
    phase: "03",
    label: "Build",
    icon: Hammer,
    desc: "We build everything in-house — websites, branding, SEO, and systems that perform.",
    x: "50%",
    y: "18%",
  },
  {
    id: 3,
    phase: "04",
    label: "Review",
    icon: CheckCircle,
    desc: "You review, we refine. We make sure everything is exactly right before launch.",
    x: "70%",
    y: "35%",
  },
  {
    id: 4,
    phase: "05",
    label: "Grow",
    icon: Rocket,
    desc: "We go live and stay with you to monitor, optimize, and scale your results.",
    x: "88%",
    y: "22%",
  },
];

const wavePath = "M 80 25 C 150 10, 200 55, 280 42 S 380 10, 500 18 S 620 45, 700 35 S 820 12, 880 22";

export function ProcessSection({ id }: { id?: string }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.1 }}
      // ADD THIS CLASS: scroll-mt-[100px]
      // Adjust the value 100px to match the actual height of your fixed navbar
      className="relative w-full py-16 lg:py-20 bg-[#0A111A] overflow-hidden font-sans scroll-mt-[100px]"
    >

      {/* Topographic background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/img/process_img.png"
          alt=""
          className="w-full h-full object-cover opacity-100"
        />
        <div className="absolute inset-0 bg-[#0A111A]/40" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-20">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 lg:mb-10 max-w-xl"
        >
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#1D82A6] uppercase block mb-3">
            How It Works
          </span>
          <h2 className="text-[36px] md:text-[52px] font-bold text-white tracking-tighter leading-[1.05] mb-4">
            Simple. Transparent.<br />
            <span className="text-[#1D82A6]">Done For You.</span>
          </h2>
          <p className="text-[14px] text-[#A1B0C4] leading-relaxed max-w-sm">
            Five simple steps. You stay focused on your business — we handle everything else.
          </p>
        </motion.div>

        {/* Wave Timeline — desktop */}
        <div className="hidden lg:block relative w-full" style={{ height: "320px" }}>
          <svg
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
            className="absolute inset-0 w-full"
            style={{ height: "320px" }}
          >
            {/* Outer glow — widest */}
            <motion.path
              d={wavePath}
              fill="none"
              stroke="#1D82A6"
              strokeWidth="3"
              strokeOpacity="0.12"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              viewport={{ once: true }}
            />
            {/* Mid glow */}
            <motion.path
              d={wavePath}
              fill="none"
              stroke="#1D82A6"
              strokeWidth="1.8"
              strokeOpacity="0.25"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              viewport={{ once: true }}
            />
            {/* Main glowing path */}
            <motion.path
              d={wavePath}
              fill="none"
              stroke="url(#waveGradient)"
              strokeWidth="1.2"
              strokeLinecap="round"
              filter="url(#glow)"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2.5, ease: "easeInOut", delay: 0.2 }}
              viewport={{ once: true }}
            />
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1D82A6" stopOpacity="0.7" />
                <stop offset="50%" stopColor="#5BC8E8" stopOpacity="1" />
                <stop offset="100%" stopColor="#1D82A6" stopOpacity="0.9" />
              </linearGradient>
              <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
          </svg>

          {/* Nodes */}
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            return (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.15 }}
                viewport={{ once: true }}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: stage.x, top: stage.y }}
              >
                <div className="relative group cursor-default">
                  {/* Pulse ring */}
                  <div className="absolute inset-0 rounded-full bg-[#1D82A6]/20 animate-ping" />
                  {/* Circle — bigger */}
                  <div className="relative w-16 h-16 rounded-full border-2 border-[#1D82A6]/70 bg-[#0A111A]/80 backdrop-blur-sm flex items-center justify-center z-10 group-hover:border-[#1D82A6] group-hover:bg-[#1D82A6]/10 transition-all duration-300">
                    <Icon className="w-7 h-7 text-[#1D82A6]" strokeWidth={1.5} />
                  </div>

                  {/* Card */}
                  <div className="absolute top-[72px] left-1/2 -translate-x-1/2 w-[168px] bg-[#0F172A]/90 backdrop-blur-md border border-[#1E293B] border-l-2 border-l-[#1D82A6] rounded-xl p-4 z-20">
                    <div className="text-[10px] font-bold text-[#1D82A6] tracking-[0.1em] mb-1">{stage.phase}</div>
                    <h3 className="text-[14px] font-bold text-white mb-2 tracking-tight">{stage.label}</h3>
                    <p className="text-[11px] text-[#94A3B8] leading-relaxed">{stage.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile fallback */}
        <div className="lg:hidden flex flex-col gap-6 mb-12">
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            return (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4 items-start"
              >
                <div className="w-12 h-12 rounded-full border border-[#1D82A6]/60 bg-[#0F172A] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon className="w-5 h-5 text-[#1D82A6]" strokeWidth={1.5} />
                </div>
                <div className="border-l-2 border-l-[#1D82A6] pl-3">
                  <div className="text-[10px] font-bold text-[#1D82A6] tracking-[0.1em] mb-0.5">{stage.phase} — {stage.label}</div>
                  <p className="text-[13px] text-[#94A3B8] leading-relaxed">{stage.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Bar */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 lg:mt-20 bg-[#0F172A]/80 backdrop-blur-md border border-[#1E293B] rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-5">
            <div className="w-10 h-10 rounded-full bg-[#1D82A6]/10 flex items-center justify-center flex-shrink-0">
              <Rocket className="w-4 h-4 text-[#1D82A6]" strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="text-[15px] font-bold text-white tracking-tight">
                Ready to build something great?
              </h4>
              <p className="text-[12px] text-[#A1B0C4] mt-0.5">
                Let's get your business found, trusted, and growing.
              </p>
            </div>
          </div>
          <button className="flex items-center gap-3 bg-[#1D82A6] text-white pl-5 pr-4 py-3 rounded-[8px] hover:bg-white hover:text-[#0A111A] transition-all duration-300 group whitespace-nowrap flex-shrink-0">
            <span className="text-[11px] font-sans uppercase tracking-[0.08em]">Book a Call</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-all duration-300" />
          </button>
        </motion.div>

      </div>
    </motion.section>
  );
}