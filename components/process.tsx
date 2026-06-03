"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { Compass, Paintbrush, Code, Zap, Cpu, ArrowUpRight } from "lucide-react";

export function ProcessSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const stages = [
    { id: 0, phase: "01. DISCOVERY", title: "Architecture & Scope", icon: Compass, metric: "532.0M", sub: "423 AM", desc: "Deconstructing enterprise architecture pipelines to map parameters." },
    { id: 1, phase: "02. DESIGN", title: "High-Fidelity UI/UX", icon: Paintbrush, metric: "38.CM", sub: "380 PM", desc: "Translating data frameworks into seamless component systems." },
    { id: 2, phase: "03. ENGINEERING", title: "Type-Safe Production", icon: Code, metric: "207.1K", sub: "421 AM", desc: "Deploying bulletproof, componentized architecture." },
    { id: 3, phase: "04. OPTIMIZATION", title: "Vitals Hardening", icon: Zap, metric: "31.8ms", sub: "88.88% Max", desc: "Isolating bundle fragments to pass Core Web Vitals." },
    { id: 4, phase: "05. AI DEPLOYMENT", title: "Intelligent Workflows", icon: Cpu, metric: "29.7 AM", sub: "15 Mtz", desc: "Injecting specialized LLM operations into your codebase." }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      className="relative w-full py-20 lg:py-32 bg-[#0A111A] overflow-hidden"
    >
      {/* Waves */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 400">
          <motion.path 
            d="M 0 100 C 300 300, 700 100, 1000 300" 
            fill="none" stroke="#FFFFFF" strokeWidth={isMobile ? "4" : "8"}
            animate={{ d: ["M 0 100 C 300 300, 700 100, 1000 300", "M 0 150 C 300 100, 700 300, 1000 150", "M 0 100 C 300 300, 700 100, 1000 300"] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path 
            d="M 0 300 C 300 100, 700 300, 1000 100" 
            fill="none" stroke="#1D82A6" strokeWidth={isMobile ? "3" : "6"}
            animate={{ d: ["M 0 300 C 300 100, 700 300, 1000 100", "M 0 250 C 300 350, 700 150, 1000 250", "M 0 300 C 300 100, 700 300, 1000 100"] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-24"
        >
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#1D82A6] uppercase block mb-3 font-sans">
            System Operations
          </span>
          <h2 className="text-[40px] md:text-[64px] font-sans font-bold text-white tracking-tighter leading-[1.05]">
            Development Architecture.
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {stages.map((stage, index) => (
            <motion.div
              key={stage.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <TiltCard stage={stage} isMobile={isMobile} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function TiltCard({ stage, isMobile }: { stage: any; isMobile: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const tiltFactor = isMobile ? 10 : 40; 
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const smoothX = useSpring(rotateX, { damping: 20, stiffness: 200 });
  const smoothY = useSpring(rotateY, { damping: 20, stiffness: 200 });

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={(e) => {
        if (isMobile) return;
        const rect = e.currentTarget.getBoundingClientRect();
        rotateX.set(((e.clientY - rect.top) / rect.height - 0.5) * tiltFactor);
        rotateY.set(((e.clientX - rect.left) / rect.width - 0.5) * -tiltFactor);
      }}
      onMouseLeave={() => { rotateX.set(0); rotateY.set(0); }}
      style={{ 
        perspective: 1000, 
        rotateX: smoothX, 
        rotateY: smoothY,
        transition: "transform 0.1s ease-out" 
      }}
      className="group relative bg-[#0F172A] p-6 lg:p-8 rounded-[24px] lg:rounded-[32px] 
                 border border-[#1E293B] hover:border-[#1D82A6] 
                 shadow-xl cursor-pointer transition-all duration-300
                 touch-manipulation"
    >
      <div className="flex justify-between items-start mb-8 lg:mb-10">
        <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#1D82A6] flex items-center justify-center">
          <stage.icon className="text-white" size={18} strokeWidth={1.5} />
        </div>
        <span className="font-mono text-white/30 text-[9px] lg:text-[10px] tracking-widest uppercase font-bold">{stage.phase.split('.')[0]}</span>
      </div>
      <div className="mb-4 lg:mb-6">
        <div className="text-[24px] lg:text-[28px] font-bold text-white tracking-tighter">{stage.metric}</div>
        <div className="text-[9px] lg:text-[10px] font-mono text-[#1D82A6] uppercase tracking-wider mt-1">{stage.sub}</div>
      </div>
      <h4 className="text-[14px] lg:text-[15px] font-semibold text-white mb-2 lg:mb-3 leading-tight">{stage.title}</h4>
      <p className="text-[12px] lg:text-[13px] text-slate-400 leading-relaxed font-light">{stage.desc}</p>
      <div className="mt-6 lg:mt-8 pt-4 lg:pt-6 border-t border-[#1E293B] flex justify-end">
        <ArrowUpRight className="w-4 h-4 lg:w-5 lg:h-5 text-[#1D82A6]" />
      </div>
    </motion.div>
  );
}