'use client';

import React, { useEffect } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import { Target, Users, TrendingUp, Calendar, Code2, Globe, CheckCircle } from 'lucide-react';

const stats = [
  { label: "Years Experience", value: 10, icon: Calendar, suffix: "+" },
  { label: "Projects Delivered", value: 25, icon: Code2, suffix: "+" },
  { label: "Industries Served", value: 8, icon: Globe, suffix: "+" },
  { label: "Client Focused", value: 100, icon: CheckCircle, suffix: "%" },
];

function AnimatedCounter({ value, suffix }: { value: number, suffix: string }) {
  const count = useMotionValue(0);
  const [displayValue, setDisplayValue] = React.useState(0);

  useEffect(() => {
    const controls = animate(count, value, { 
      duration: 2.5, 
      ease: "easeOut",
      onUpdate: (latest) => setDisplayValue(Math.round(latest))
    });
    return () => controls.stop();
  }, [count, value]);

  return <span>{displayValue}{suffix}</span>;
}

export default function About() {
  return (
    <section className="w-full py-24 bg-white text-[#0A111A]">
      <div className="max-w-[1700px] mx-auto px-6 lg:px-20">
        
        {/* HEADER SECTION */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          
          <div className="flex flex-col justify-center">
            <span className="text-[12px] font-bold tracking-[0.2em] text-[#1D82A6] uppercase mb-4">
              ABOUT MOTION DIGITAL
            </span>
            <h2 className="text-[48px] font-bold leading-[1.1] mb-8 text-[#0F172A]">
              Founder-led.<br />
              <span className="text-[#1D82A6]">Focused on results.</span>
            </h2>
            <p className="text-[18px] text-[#475569] leading-relaxed mb-12 max-w-[500px]">
              Motion Digital is a boutique engineering studio focused on building high-performance digital products and systems. We partner with ambitious companies to turn complex challenges into scalable, elegant solutions.
            </p>

            {/* Features Grid: Stacks on mobile, md:grid-cols-3 on desktop */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col gap-3">
                <Target className="w-6 h-6 text-[#1D82A6]" />
                <h4 className="font-bold">Senior-Level Execution</h4>
                <p className="text-[14px] text-[#64748B]">Every project is led and built by senior engineers with real-world experience.</p>
              </div>
              <div className="flex flex-col gap-3">
                <Users className="w-6 h-6 text-[#1D82A6]" />
                <h4 className="font-bold">Direct Partnership</h4>
                <p className="text-[14px] text-[#64748B]">Work directly with the founder—clear communication, fast decisions, zero layers.</p>
              </div>
              <div className="flex flex-col gap-3">
                <TrendingUp className="w-6 h-6 text-[#1D82A6]" />
                <h4 className="font-bold">Outcome Obsessed</h4>
                <p className="text-[14px] text-[#64748B]">We focus on measurable impact, performance, and long-term business value.</p>
              </div>
            </div>
          </div>

          <div className="w-full h-[500px]">
            <img 
              src="/img/about_img.png" 
              alt="Motion Digital Team" 
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
        {/* BOTTOM METRIC BAR */}
        <div className="relative bg-[#0A111A] text-white rounded-2xl p-12 overflow-hidden w-full isolate">
        
        {/* The Background Image - Desktop unchanged, Mobile nudged */}
        <div className="absolute inset-0 z-0">
        <img 
            src="/img/pillars_img.png" 
            alt="Background" 
            className="w-full h-full object-cover object-[center_-50px] lg:object-top opacity-50 pointer-events-none" 
        />
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 w-full">
            
            {/* Brand Section */}
            <div className="flex flex-col items-center lg:pr-12 lg:border-r border-[#1E293B] shrink-0">
            <div className="w-24 h-24 flex items-center justify-center mb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                <img 
                src="/img/motion_digital_logo.png" 
                alt="Motion Digital Logo" 
                className="max-h-full w-auto object-contain"
                />
            </div>
            <div className="flex flex-col items-center text-center">
                <span className="font-sans font-semibold text-xl uppercase tracking-[0.2em] leading-none">
                MOTION
                </span>
                <span className="font-sans text-sm uppercase tracking-[0.2em] mt-2 leading-none opacity-80">
                Digital
                </span>
            </div>
            </div>

            {/* Stats Section - Added flex-grow and justify-center to keep stats aligned */}
            <div className="flex-1 w-full grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                <div key={i} className="flex flex-col items-center justify-center text-center">
                    <Icon className="w-12 h-12 text-white mb-4" strokeWidth={1.5} />
                    <span className="text-4xl font-sans font-semibold mb-2 text-white tabular-nums">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </span>
                    <span className="text-[11px] text-[#94A3B8] uppercase tracking-[0.15em]">
                    {stat.label}
                    </span>
                </div>
                );
            })}
            </div>
        </div>
        </div>
      </div>
    </section>
  );
}