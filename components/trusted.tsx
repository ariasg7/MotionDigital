"use client";

import { motion } from "framer-motion";
import { Activity, Clock, TrendingUp, Users } from "lucide-react";

export function TrustedSection() {
  const partnerLogos = ["Linear", "Brex", "Webflow", "Vercel", "Zapier", "Ramp"];
  
  const metrics = [
    { icon: Activity, stat: "98%", label: "PERFORMANCE SCORE", description: "Average across projects" },
    { icon: Clock, stat: "2.4s", label: "AVERAGE LOAD TIME", description: "Faster experiences" },
    { icon: TrendingUp, stat: "250+", label: "PROJECTS DELIVERED", description: "Across industries" },
    { icon: Users, stat: "100%", label: "CLIENT FOCUS", description: "Long-term partnerships" }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="w-full bg-[#0A111A] pt-16 lg:pt-24 pb-12 lg:pb-16 select-none font-sans"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20">
        
        {/* Trusted By Header */}
        <motion.div variants={itemVariants} className="text-center">
          <p className="text-[10px] lg:text-[11px] font-bold tracking-[0.45em] text-[#1D82A6] mb-6 lg:mb-8 antialiased uppercase opacity-90">
            Trusted by ambitious brands
          </p>

          <div className="w-full border-b border-white/[0.05] flex flex-wrap lg:flex-nowrap items-center justify-center gap-y-6 pt-2 pb-8 lg:pb-10">
            {partnerLogos.map((logo, index) => (
              <div 
                key={logo} 
                className="w-1/2 sm:w-1/3 lg:flex-1 flex items-center justify-center relative"
              >
                <span className="text-[18px] lg:text-[23px] font-bold text-white/90 tracking-tight antialiased">
                  {logo}
                </span>
                {index < partnerLogos.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-5 w-[1px] bg-white/[0.06]" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Performance Metrics Grid */}
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full items-center mt-8 lg:mt-12 gap-y-8 sm:gap-y-12 lg:gap-y-0"
        >
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div 
                variants={itemVariants}
                key={index} 
                className={`flex items-start justify-center gap-5 py-4 px-4 lg:px-6 relative w-full
                  ${index < metrics.length - 1 ? 'border-b border-white/[0.03] sm:border-b-0 pb-8 sm:pb-4' : ''}
                `}
              >
                {index < metrics.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-14 w-[1px] bg-white/[0.04]" />
                )}
                
                <div className="w-11 h-11 rounded-full border border-white/[0.75] flex items-center justify-center flex-shrink-0 mt-1 bg-white/[0.01]">
                  <Icon className="w-4 h-4 text-white/[0.75]" strokeWidth={1.25} />
                </div>

                <div className="flex flex-col min-w-[155px]">
                  <div className="text-[34px] lg:text-[38px] font-extralight text-white/90 tracking-tight leading-none antialiased">
                    {metric.stat}
                  </div>
                  <div className="text-[9px] font-bold tracking-[0.16em] text-white/[0.65] uppercase mt-2.5 antialiased">
                    {metric.label}
                  </div>
                  <div className="text-[12px] text-white/[0.65] tracking-normal normal-case mt-0.5 antialiased font-light">
                    {metric.description}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Scroll to Discover */}
        <motion.div variants={itemVariants} className="flex flex-col items-center mt-16 lg:mt-24 gap-4">
          <span className="text-[10px] font-bold tracking-[0.3em] text-[#1D82A6] uppercase antialiased opacity-80">
            Scroll to discover
          </span>
          <div className="w-[1px] h-10 bg-white/15 relative">
            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white/80" 
            />
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
}