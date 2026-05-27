'use client';

import React from 'react';
import { ArrowUpRight, CheckCircle2, ShieldCheck, Users, Lock } from 'lucide-react';

const stories = [
  {
    id: 1,
    company: "Zenith Labs",
    category: "PLATFORM & PRODUCT GROWTH",
    quote: "Motion Digital didn't just build a tool; they partner with us to transform our vision into a scalable platform that's powering our fastest growth cycle to date.",
    metrics: [{ label: "User Adoption", value: "3.1x" }, { label: "Revenue Growth", value: "55%" }],
  },
  {
    id: 2,
    company: "Vertex Data",
    category: "SYSTEMS EFFICIENCY & AUTOMATION",
    quote: "Their technical depth is unparalleled. The streamlined pipelines and AI integrations they delivered have not only cut our operational costs but also gave us a genuine, data-driven edge.",
    metrics: [{ label: "Cost Reduction", value: "40%" }, { label: "Build Time", value: "62%" }],
  },
  {
    id: 3,
    company: "Equinox Health",
    category: "ECOSYSTEM INTEGRATION & SCALING",
    quote: "Equinox Health now has a robust digital ecosystem. Motion Digital's strategic and secure system integrations are a true example of future-proofing a mission-critical infrastructure.",
    metrics: [{ label: "System Uptime", value: "99.99%" }, { label: "Integrations", value: "25+" }],
  }
];

export default function CaseStudies() {
  return (
    <section className="relative py-24 px-6 lg:px-20 bg-[#FAF9F5] overflow-hidden">
      {/* Updated Background Image: 
        Added 'top-[-10%]' and 'h-[120%]' to force the image to extend 
        higher up and cover more area behind the cards. 
      */}
      <img 
        src="/img/motion_digital_hero_img.png" 
        alt="Abstract wave background" 
        className="absolute top-[-25%] left-0 w-full h-[120%] object-cover object-top pointer-events-none opacity-75 z-0" 
      />
      
      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#1D82A6] uppercase mb-4 block">Client Success Stories</span>
          <h2 className="text-[40px] md:text-[64px] font-bold text-[#0A111A] tracking-tighter leading-tight mb-6">Real results.<br />Measurable impact.</h2>
          <p className="text-[#64748B] text-lg max-w-xl mx-auto">We partner with innovative companies to build digital products that drive growth, efficiency, and long-term value.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stories.map((story) => (
            <div key={story.id} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm min-h-[560px] flex flex-col justify-between group overflow-hidden">
              <div>
                <div className="h-48 w-full rounded-2xl mb-8 overflow-hidden bg-gray-100">
                  <img src={`/assets/client-${story.id}.jpg`} alt={story.company} className="w-full h-full object-cover" />
                </div>
                <span className="text-[10px] font-bold text-[#1D82A6] tracking-widest uppercase">{story.category}</span>
                <p className="text-[#0F172A] mt-4 leading-relaxed font-medium italic text-lg">"{story.quote}"</p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-8 border-t border-gray-100">
                {story.metrics.map((m, i) => (
                  <div key={i}>
                    <div className="text-2xl font-bold text-[#0A111A]">{m.value}</div>
                    <div className="text-[11px] text-[#64748B] uppercase tracking-wide">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA Banner */}
    <div className="relative bg-[#0A111A] rounded-3xl p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-white overflow-hidden">
      
      {/* CTA Box Background Texture */}
      <img 
        src="/img/pillars_img.png" 
        alt="CTA Texture" 
        className="absolute inset-0 w-full h-full object-cover opacity-50 pointer-events-none" 
      />

      {/* Left Side: Brand Block with Glow Effect */}
      <div className="flex flex-col items-center lg:pr-12 lg:border-r border-[#1E293B] relative z-10 shrink-0">
        <div className="w-24 h-24 flex items-center justify-center mb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
          <img 
            src="/img/motion_digital_logo.png" 
            alt="Motion Digital Logo" 
            className="max-h-full w-auto object-contain"
          />
        </div>
        <div className="flex flex-col items-center text-center">
          <span className="font-sans font-semibold text-xl uppercase tracking-[0.2em] leading-none drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
            MOTION
          </span>
          <span className="font-sans text-sm uppercase tracking-[0.2em] mt-2 leading-none opacity-80">
            Digital
          </span>
        </div>
      </div>

      {/* Middle: Heading & Trust Badges */}
      <div className="flex flex-col gap-4 relative z-10 flex-grow px-0 lg:px-8">
        {/* Hierarchical Text Structure */}
        <div>
          <h2 className="text-3xl font-bold leading-tight">Your success is our standard.</h2>
          <h3 className="text-lg font-medium text-white/70 mt-1">Let's build something exceptional together.</h3>
        </div>
        
        {/* Badges Group with Vertical Dividers */}
        <div className="flex items-center gap-4 text-[10px] font-medium tracking-[0.1em] uppercase opacity-60">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5"/> <span>Enterprise Grade</span>
          </div>
          
          <div className="w-px h-3 bg-white/20" />
          
          <div className="flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5"/> <span>Secure & Compliant</span>
          </div>
          
          <div className="w-px h-3 bg-white/20" />
          
          <div className="flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5"/> <span>Long-term Partner</span>
          </div>
        </div>
      </div>

      {/* Right: Button */}
      <div className="relative z-10 shrink-0 w-full lg:w-auto">
        <button className="bg-transparent border border-white/20 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-white hover:text-[#0A111A] transition-all w-full lg:w-auto justify-center whitespace-nowrap">
          VIEW ALL CASE STUDIES <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </div>
      </div>
    </section>
  );
}