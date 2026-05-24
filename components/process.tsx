"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
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
    <section className="relative w-full py-20 lg:py-32 bg-[#FAF9F5] overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg className="w-full h-full min-h-[300px]" preserveAspectRatio="none" viewBox="0 0 2000 400">
          <path d="M -500 200 Q 250 50 1000 200 T 2500 200" fill="none" stroke="#1D82A6" strokeWidth="6" className="wave-anim-fast" />
          <path d="M -500 250 Q 250 400 1000 250 T 2500 250" fill="none" stroke="#0A111A" strokeWidth="4" className="wave-anim-slow opacity-20" />
        </svg>
      </div>

      <style jsx global>{`
        .wave-anim-fast { animation: wave 20s linear infinite; }
        .wave-anim-slow { animation: wave 30s linear infinite; }
        @keyframes wave { from { transform: translateX(0); } to { transform: translateX(-1000px); } }
      `}</style>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 relative z-10">
        <div className="mb-16 lg:mb-24">
          {/* Updated label to match the sans-serif editorial style */}
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#1D82A6] uppercase block mb-3 font-sans">
            System Operations
          </span>
          
          {/* Main heading updated to font-sans with tighter, engineered tracking */}
          <h2 className="text-[40px] md:text-[64px] font-sans font-bold text-[#0A111A] tracking-tighter leading-[1.05]">
            Development Architecture.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
          {stages.map((stage) => (
            <TiltCard key={stage.id} stage={stage} isMobile={isMobile} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TiltCard({ stage, isMobile }: { stage: any; isMobile: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Motion values that persist
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const opacity = useMotionValue(1);

  // Smooth springs
  const smoothX = useSpring(rotateX, { damping: 20, stiffness: 300 });
  const smoothY = useSpring(rotateY, { damping: 20, stiffness: 300 });

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"]
  });

  const scrollX = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scrollO = useTransform(scrollYProgress, [0, 1], [0.4, 1]);

  // Update values based on mode
  useEffect(() => {
    if (isMobile) {
      const unsubX = scrollX.on("change", (v) => rotateX.set(v));
      const unsubO = scrollO.on("change", (v) => opacity.set(v));
      rotateY.set(0);
      return () => { unsubX(); unsubO(); };
    }
  }, [isMobile, scrollX, scrollO, rotateX, rotateY, opacity]);

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={(e) => {
        if (isMobile) return;
        const rect = e.currentTarget.getBoundingClientRect();
        rotateX.set(((e.clientY - rect.top) / rect.height - 0.5) * 25);
        rotateY.set(((e.clientX - rect.left) / rect.width - 0.5) * -25);
      }}
      onMouseLeave={() => { if (!isMobile) { rotateX.set(0); rotateY.set(0); } }}
      style={{
        perspective: 1000,
        rotateX: smoothX,
        rotateY: smoothY,
        opacity
      }}
      className="group relative bg-white p-6 lg:p-8 rounded-[24px] lg:rounded-[32px] 
                 border-2 border-[#E5E5E5] hover:border-[#1D82A6] 
                 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_-15px_rgba(29,130,166,0.3)]
                 cursor-pointer"
    >
      {/* Card Content remains the same */}
      <div className="flex justify-between items-start mb-8 lg:mb-10">
        <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#0A111A] flex items-center justify-center">
          <stage.icon className="text-white" size={18} strokeWidth={1.5} />
        </div>
        <span className="font-mono text-[#0A111A]/40 text-[9px] lg:text-[10px] tracking-widest uppercase font-bold">{stage.phase.split('.')[0]}</span>
      </div>
      <div className="mb-4 lg:mb-6">
        <div className="text-[24px] lg:text-[28px] font-bold text-[#0A111A] tracking-tighter">{stage.metric}</div>
        <div className="text-[9px] lg:text-[10px] font-mono text-[#1D82A6] uppercase tracking-wider mt-1">{stage.sub}</div>
      </div>
      <h4 className="text-[14px] lg:text-[15px] font-semibold text-[#0A111A] mb-2 lg:mb-3 leading-tight">{stage.title}</h4>
      <p className="text-[12px] lg:text-[13px] text-[#64748B] leading-relaxed font-light">{stage.desc}</p>
      <div className="mt-6 lg:mt-8 pt-4 lg:pt-6 border-t border-[#E5E5E5] flex justify-end">
        <ArrowUpRight className="w-4 h-4 lg:w-5 lg:h-5 text-[#1D82A6] opacity-50 group-hover:opacity-100 transition-opacity" />
      </div>
    </motion.div>
  );
}