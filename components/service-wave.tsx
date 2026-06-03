"use client";

import { motion } from "framer-motion";
import { Layers, MousePointerClick, Code, Zap, Cpu, ArrowUpRight, ShieldCheck, Rocket, Users, TrendingUp } from "lucide-react";

export function WaveServicesSection() {
  const services = [
    { id: "01", title: "Strategy", desc: "Aligning roadmaps with goals.", icon: Layers },
    { id: "02", title: "Web Design", desc: "Modern, converting websites.", icon: MousePointerClick },
    { id: "03", title: "SEO", desc: "Rankings and growth.", icon: Code },
    { id: "04", title: "Automation", desc: "Time-saving AI solutions.", icon: Zap },
    { id: "05", title: "Branding", desc: "Trust and recognition.", icon: Cpu }
  ];

  const positions = [
    "top-[-100%] left-[50%]", 
    "top-[-40%] left-[30%]", 
    "top-[-15%] left-[70%]", 
    "top-[45%] left-[30%]", 
    "top-[55%] left-[65%]"
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
      className="relative w-full min-h-screen bg-[#FAF9F5] flex flex-col justify-between py-12 overflow-hidden"
    >
      
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F5]/40 via-transparent to-[#FAF9F5]/90" />
        <img 
          src="/img/service_wave1.png" 
          alt="Wave Background" 
          className="w-full h-full object-cover opacity-[0.80]" 
        />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 w-full flex flex-col flex-grow">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 max-w-xl"
        >
          <div className="flex flex-col items-start gap-3 mb-6">
            <span className="text-[11px] font-bold tracking-[0.3em] text-[#1D82A6] uppercase">Our Capabilities</span>
            <div className="w-12 h-[2px] bg-[#1D82A6]"></div>
          </div>
          <h2 className="text-[40px] md:text-[64px] font-bold tracking-tighter leading-[0.9] mb-6">
            <span className="text-[#0A111A] block">Core</span>
            <span className="text-[#1D82A6] block">Services</span>
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#0A111A]/70 leading-relaxed mb-8 max-w-sm">
            End-to-end digital solutions designed to help your business grow, automate, and scale.
          </p>
          <a 
            href="#" 
            className="inline-flex items-center gap-4 bg-white px-6 py-3 rounded-full shadow-[0_20px_40px_-10px_rgba(29,130,166,0.2)] border border-[#1A1A1A]/5 hover:scale-105 transition-all duration-300"
          >
            <span className="font-semibold text-[#0A111A]">Explore all services</span>
            <div className="w-8 h-8 rounded-full bg-[#1D82A6] flex items-center justify-center text-white">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </a>
        </motion.div>

        {/* Node Content Area */}
        <div className="relative flex-grow w-full flex flex-col gap-6 lg:block">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={service.id} 
                className={`flex items-center gap-4 w-full lg:w-auto lg:absolute ${positions[index]}`}
              >
                <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-white flex items-center justify-center flex-shrink-0 relative shadow-lg border border-[#1A1A1A]/5">
                  <div className="absolute inset-0 rounded-full bg-[#1D82A6]/20 animate-ping opacity-75"></div>
                  <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-[#1D82A6] relative z-10" />
                </div>
                
                <div className="bg-white/95 backdrop-blur-md p-4 lg:p-5 rounded-2xl shadow-lg border-2 border-[#1D82A6]/50 flex-1 lg:w-56 hover:border-[#1D82A6]/40 transition-colors">
                  <h3 className="font-bold text-[#0A111A] text-sm lg:text-md mb-0.5">{service.title}</h3>
                  <p className="text-[#0A111A]/70 text-[11px] lg:text-xs leading-relaxed mb-2">{service.desc}</p>
                  <div className="w-6 h-[2px] bg-[#1D82A6]"></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 bg-white/90 backdrop-blur-md border border-white/80 rounded-[30px] py-8 px-6 lg:px-10 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.15)]"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4 lg:gap-0">
            {[
              { icon: ShieldCheck, title: "Strategic", desc: "Approach" },
              { icon: Rocket, title: "Results", desc: "Driven" },
              { icon: Users, title: "Client", desc: "Focused" },
              { icon: TrendingUp, title: "Measurable", desc: "Growth" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-center lg:justify-start lg:px-6 relative">
                {idx > 0 && <div className="hidden lg:block absolute left-0 h-10 w-[1px] bg-[#1D82A6]/20"></div>}
                <div className="flex items-center gap-3">
                  <item.icon className="w-8 h-8 lg:w-10 lg:h-10 text-[#1D82A6] shrink-0" strokeWidth={2} />
                  <div className="flex flex-col">
                    <span className="font-extrabold text-[#0A111A] text-[13px] lg:text-[15px] leading-tight">{item.title}</span>
                    <span className="font-bold text-[#0A111A]/80 text-[13px] lg:text-[15px] leading-tight">{item.desc}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}