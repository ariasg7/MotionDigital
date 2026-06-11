"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Layers, MousePointerClick, Search, Zap, Cpu, ArrowUpRight, CheckCircle, Rocket, Users, TrendingUp, MapPin } from "lucide-react";

export function WaveServicesSection({ id }: { id?: string }) {
  const services = [
    { id: "01", title: "Strategy", desc: "We map out exactly what your business needs to get found, look credible, and win more customers online.", icon: Layers },
    { id: "02", title: "Websites", desc: "Built to turn visitors into calls and enquiries — fast, professional, and built to convert.", icon: MousePointerClick },
    { id: "03", title: "SEO", desc: "Get found by customers actively searching for what you offer — right now, in your city.", icon: Search },
    { id: "04", title: "AI Solutions", desc: "Save hours every week with smart automations that handle enquiries, follow-ups, and more.", icon: Zap },
    { id: "05", title: "Branding", desc: "Look professional and memorable from day one — logos, business cards, and full brand identity.", icon: Cpu },
    { id: "06", title: "Google Business", desc: "Show up in the Google Map Pack so local customers find and call you instead of your competitors.", icon: MapPin },
  ];

  const positions = [
    "top-[-280%] left-[50%]",
    "top-[-130%] left-[30%]",
    "top-[-170%] left-[80%]",
    "top-[05%] left-[40%]",
    "top-[15%] left-[75%]",
    "top-[-10%] left-[5%]",
  ];

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
      className="relative w-full min-h-[92vh] bg-[#FAF9F5] flex flex-col justify-center pt-24 pb-12 overflow-visible scroll-mt-20"
    >
      {/* Responsive Backgrounds */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F5]/40 via-transparent to-[#FAF9F5]/90" />
        <img
          src="/img/service/mobile_service_wave.png"
          alt="Mobile Wave"
          className="w-full h-full object-cover lg:hidden opacity-[0.80]"
        />
        <img
          src="/img/service/service_wave.png"
          alt="Desktop Wave"
          className="w-full h-full object-cover hidden lg:block opacity-[0.80]"
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
            <span className="text-[#0A111A] block">Six Ways We</span>
            <span className="text-[#1D82A6] block">Grow Your Business</span>
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#0A111A]/70 leading-relaxed mb-8 max-w-sm">
            Everything a local business needs to get found, look professional, and win more customers.
          </p>
          <Link
            href="#services"
            className="inline-flex items-center gap-4 bg-white px-6 py-3 rounded-full shadow-[0_20px_40px_-10px_rgba(29,130,166,0.2)] border border-[#1A1A1A]/5 hover:scale-105 transition-all duration-300"
          >
            <span className="font-semibold text-[#0A111A]">Explore all services</span>
            <div className="w-8 h-8 rounded-full bg-[#1D82A6] flex items-center justify-center text-white">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </Link>
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
                <div className="bg-white/95 backdrop-blur-md p-4 lg:p-5 rounded-2xl shadow-lg border-2 border-[#1D82A6]/50 flex-1 lg:w-64 hover:border-[#1D82A6] transition-colors duration-300">
                  <h3 className="font-bold text-[#0A111A] text-sm lg:text-md mb-1">{service.title}</h3>
                  <p className="text-[#0A111A]/70 text-[11px] lg:text-xs leading-relaxed mb-2">{service.desc}</p>
                  <div className="w-6 h-[2px] bg-[#1D82A6]"></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer - Scaled down for better balance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 bg-white/90 backdrop-blur-md border border-white/80 rounded-[24px] py-6 px-6 lg:px-8 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)]"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-4">
            {[
              { icon: CheckCircle, title: "Done", desc: "For You" },
              { icon: Rocket, title: "No Tech", desc: "Headaches" },
              { icon: Users, title: "You Own", desc: "Everything" },
              { icon: TrendingUp, title: "Cancel", desc: "Anytime" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-center lg:justify-start lg:px-4 relative">
                {idx > 0 && (
                  <div className="hidden lg:block absolute left-0 h-8 w-[1px] bg-[#1D82A6]/15"></div>
                )}
                <div className="flex items-center gap-2.5">
                  <item.icon className="w-7 h-7 lg:w-8 lg:h-8 text-[#1D82A6] shrink-0" strokeWidth={2} />
                  <div className="flex flex-col">
                    <span className="font-extrabold text-[#0A111A] text-[12px] lg:text-[13px] leading-tight">{item.title}</span>
                    <span className="font-bold text-[#0A111A]/80 text-[12px] lg:text-[13px] leading-tight">{item.desc}</span>
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