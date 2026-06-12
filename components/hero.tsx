"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function Hero({ id }: { id?: string }) {
  const services = ["WEBSITES", "BRANDING", "SEO", "GOOGLE BUSINESS", "AI SOLUTIONS"];

  return (
    <motion.section 
      id={id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative w-full min-h-screen bg-[#FAF9F5] overflow-hidden pt-24 select-none font-sans"
    >
      {/* Background Layer */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 mix-blend-multiply">
        <img 
          src="/img/motion_digital_hero_img.png" 
          alt="Motion Digital Hero Backdrop" 
          className="w-full h-full object-cover object-bottom md:object-right-top scale-100 opacity-90 md:opacity-100"
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 relative z-10">
        <div className="grid grid-cols-12 gap-8 min-h-[calc(100vh-96px)] items-start relative">
          
          {/* LEFT COLUMN */}
          <div className="col-span-12 md:col-span-9 lg:col-span-8 xl:col-span-7 pb-20 pt-10 md:pt-32 flex flex-col items-start justify-start text-left">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center px-4 py-1.5 bg-transparent border border-[#1D82A6]/20 rounded-full mb-8 md:mb-9 self-start"
            >
              <span className="text-[12px] font-bold tracking-[0.12em] text-[#1D82A6]/80 antialiased font-sans">
                DIGITAL GROWTH FOR LOCAL BUSINESSES
              </span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-8 text-[52px] sm:text-[64px] lg:text-[88px] xl:text-[96px] font-semibold tracking-[-0.03em] leading-[1.05] font-sans"
            >
              <span className="text-[#1A1A1A] block">Get Found.</span>
              <span className="text-[#1D82A6] block mt-2">Get Chosen.</span>
              <span className="text-[#1A1A1A] block mt-2">Grow.</span>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-[16px] lg:text-[18px] leading-[1.75] font-light text-[#1A1A1A]/70 max-w-[520px] tracking-[0.01em] font-sans"
            >
              Websites, branding, SEO, and AI tools — so more customers find you, trust you, and call you.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-10 md:mt-10 flex flex-row gap-6 items-center"
            >
              <a href="/book">
                <button className="flex items-center gap-3 bg-[#0F141C] text-white px-6 py-4 rounded-[8px] hover:bg-[#1D82A6] transition-all group font-sans">
                  {/* Non-bold button text */}
                  <span className="text-[12px] font-medium uppercase tracking-[0.08em]">BOOK A FREE CALL</span>
                  <ArrowUpRight className="w-4 h-4 text-[#1D82A6] group-hover:translate-x-0.5 group-hover:text-white" />
                </button>
              </a>

              <a href="#case-studies">
                <button className="text-[#1A1A1A] text-[12px] font-medium uppercase tracking-[0.08em] pb-1 border-b border-[#1D82A6] hover:text-[#1D82A6] transition-colors whitespace-nowrap">
                  SEE OUR WORK
                </button>
              </a>
            </motion.div>
          </div>

          {/* RIGHT COLUMN */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="hidden md:flex col-span-12 md:col-span-3 lg:col-span-4 xl:col-span-5 relative h-[calc(100vh-96px)] flex-col justify-between py-12"
          >
            <div className="absolute top-32 right-0 flex items-stretch gap-6">
              <div className="w-[2px] bg-black/[0.15]" />
              <div className="flex flex-col gap-3 justify-center">
                {services.map((service, index) => (
                  <motion.span 
                    key={service} 
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + (index * 0.1), duration: 0.5 }}
                    className="text-[13px] font-bold tracking-[0.18em] text-[#1A1A1A]/60 font-sans"
                  >
                    {service}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}