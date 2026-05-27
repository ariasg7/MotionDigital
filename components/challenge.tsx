import React from 'react';
import { Clock, DollarSign, ArrowUpRight, ShieldCheck } from 'lucide-react';

const challenges = [
  {
    title: "Slow & Inefficient",
    description: "Manual processes and legacy systems create bottlenecks and slow down delivery.",
    icon: <Clock className="w-6 h-6 text-[#1D82A6]" />
  },
  {
    title: "High Costs",
    description: "Maintenance, workarounds, and technical debt drive up costs and reduce profitability.",
    icon: <DollarSign className="w-6 h-6 text-[#1D82A6]" />
  },
  {
    title: "Hard to Scale",
    description: "Outdated architecture makes it difficult to scale, adapt, and meet growing demands.",
    icon: <ArrowUpRight className="w-6 h-6 text-[#1D82A6]" />
  },
  {
    title: "Business Risk",
    description: "Security vulnerabilities and system instability put your data, team, and reputation at risk.",
    icon: <ShieldCheck className="w-6 h-6 text-[#1D82A6]" />
  }
];

export default function Challenge() {
  return (
    <section className="w-full relative py-24 bg-[#FAF9F5] font-sans">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="space-y-6">
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#1D82A6] uppercase">
              Why Modernize?
            </span>
            <h2 className="text-[40px] md:text-[56px] font-bold text-[#0F141C] tracking-tighter leading-[1.1]">
              Outdated systems <br/>hold you back.
            </h2>
            <p className="text-[16px] text-[#64748B] max-w-[450px] leading-relaxed font-normal">
              Legacy platforms, technical debt, and disconnected tools slow down your business and limit your potential. We help modern companies move faster, operate smarter, and build for the future.
            </p>
          </div>

          {/* Grid Content */}
          <div className="grid sm:grid-cols-2 gap-4">
            {challenges.map((item, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:border-[#1D82A6]/20 transition-all duration-300"
              >
                <div className="mb-4">{item.icon}</div>
                {/* Titles use font-semibold for a refined look over bold */}
                <h3 className="font-semibold text-[#0F141C] mb-2 text-[18px]">
                  {item.title}
                </h3>
                <p className="text-[14px] text-[#64748B] leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}