import React from 'react';
import { Code2, ShieldCheck, Cloud, Rocket, BarChart3 } from 'lucide-react';

const pillars = [
  { title: "Clean Code", desc: "Readable, maintainable, and tested code.", icon: <Code2 className="w-8 h-8 text-white" /> },
  { title: "Secure by Design", desc: "Security best practices built in.", icon: <ShieldCheck className="w-8 h-8 text-white" /> },
  { title: "Scalable Architecture", desc: "Modern, modular systems.", icon: <Cloud className="w-8 h-8 text-white" /> },
  { title: "Performance First", desc: "High-performance applications.", icon: <Rocket className="w-8 h-8 text-white" /> },
];

export default function Pillars() {
  return (
    <section className="relative w-full py-24 bg-[#0A111A] text-white overflow-hidden font-sans">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 opacity-[0.3]">
        <img 
          src="/img/pillars_img.png" 
          alt="" 
          className="w-full h-full object-cover" 
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-[1700px] mx-auto px-6 lg:px-20 flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* LEFT: Text Content */}
        <div className="lg:w-[480px] flex-shrink-0">
          <div className="flex items-center gap-6 mb-3">
            <span className="text-[12px] font-bold tracking-[0.2em] text-[#A1B0C4] uppercase">
              Our Technical Pillars
            </span>
            <div className="w-[60px] h-[1px] bg-[#1E293B]" />
          </div>
          
          <div className="flex flex-col text-[36px] md:text-[42px] font-bold tracking-tight leading-[1.15] mb-8">
            <span>Engineering excellence.</span>
            <span className="text-[#1D82A6]">Built in from the start.</span>
          </div>
          
          <p className="text-[16px] text-[#A1B0C4] leading-[1.65] max-w-[340px] font-normal">
            Our engineering standards ensure every solution we build is secure, scalable, and future-ready. No shortcuts. No compromises.
          </p>
        </div>

        {/* RIGHT: Pillars Grid & Callout */}
        <div className="flex-1 w-full">
          <div className="grid grid-cols-1 md:grid-cols-4">
            {pillars.map((pillar, i) => (
              <div 
                key={i} 
                className="relative pt-32 pb-8 px-6 flex flex-col items-center text-center"
              >
                {i !== pillars.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-[10%] h-[80%] w-[2px] bg-[#1E293B]" />
                )}

                <div className="-mt-36 mb-12 w-20 h-20 rounded-full border border-white flex items-center justify-center">
                  {pillar.icon}
                </div>
                
                <h3 className="text-[18px] font-semibold mb-2 tracking-tight">{pillar.title}</h3>
                <p className="text-[14px] text-[#94A3B8] leading-relaxed font-normal">{pillar.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 w-full border border-[#1D82A6] rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center text-center md:text-left gap-6">
            <div className="w-20 h-20 rounded-full border border-[#1E293B] flex items-center justify-center flex-shrink-0">
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
            
            <div>
              <h4 className="font-bold text-[18px] mb-1">Our standards. Your advantage.</h4>
              <p className="text-[#94A3B8] text-[14px] font-normal">Better code. Better products. Better outcomes.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}