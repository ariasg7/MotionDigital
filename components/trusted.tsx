"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { Activity, Clock, TrendingUp, Users } from "lucide-react";
import { useEffect, useRef } from "react";

function Counter({ target, prefix, suffix, spring }: { target: number; prefix?: string; suffix?: string; spring: any }) {
  const display = useTransform(spring, (latest: number) => 
    `${prefix ?? ""}${Math.floor(latest * target)}${suffix ?? ""}`
  );

  return (
    <motion.div className="text-[34px] lg:text-[38px] font-sans text-white/90 tracking-tight leading-none antialiased">
      {display}
    </motion.div>
  );
}

export function TrustedSection() {
  const partnerLogos = [
    { name: "Figma",  src: "img/brands/figma.png",  square: true  },
    { name: "Vercel", src: "img/brands/vercel.png", square: false },
    { name: "GitHub", src: "img/brands/github.png", square: false },
    { name: "OpenAI", src: "img/brands/openai.png", square: false },
    { name: "Canva",  src: "img/brands/canva.png",  square: false },
    { name: "Sanity", src: "img/brands/sanity.png", square: false },
  ];
  
  const metrics = [
    { icon: Activity,   value: 5,   prefix: "",  suffix: "★",  label: "AVERAGE RATING",  description: "Across all client profiles" },
    { icon: Clock,      value: 48,  prefix: "",  suffix: "hr", label: "TURNAROUND",       description: "From brief to first draft"  },
    { icon: TrendingUp, value: 100, prefix: "",  suffix: "%",  label: "DONE FOR YOU",     description: "No tech headaches"          },
    { icon: Users,      value: 15,  prefix: "",  suffix: "+",  label: "CLIENTS SERVED",   description: "Across local industries"    },
  ];

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const spring = useSpring(0, { duration: 2000, bounce: 0 });

  useEffect(() => {
    if (isInView) spring.set(1);
  }, [isInView, spring]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.section 
      ref={containerRef}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="w-full bg-[#0A111A] pt-16 lg:pt-24 pb-12 lg:pb-16 select-none font-sans"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20">

        {/* Header + Logos */}
        <motion.div variants={itemVariants} className="text-center">
          <p className="text-[10px] lg:text-[11px] font-bold tracking-[0.45em] text-[#1D82A6] mb-6 lg:mb-8 antialiased uppercase opacity-90">
            POWERED BY INDUSTRY-LEADING TOOLS
          </p>
          <div className="w-full border-b border-white/[0.05] flex flex-wrap lg:flex-nowrap items-center justify-center gap-y-8 pt-2 pb-8 lg:pb-10">
            {partnerLogos.map((logo, index) => (
              <div key={logo.name} className="w-1/2 sm:w-1/3 lg:flex-1 flex items-center justify-center relative">
                <div className="opacity-90 hover:opacity-100 transition-opacity duration-300">
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className={`object-contain flex-shrink-0 ${
                      logo.square ? "h-12 w-12" : "h-9 w-auto max-w-[160px]"
                    }`}
                  />
                </div>
                {index < partnerLogos.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-6 w-[1px] bg-white/[0.06]" />
                )}
              </div>
            ))}
</div>
        </motion.div>

        {/* Metrics */}
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
                  ${index < metrics.length - 1 ? "lg:border-r border-white/[0.04]" : ""}
                `}
              >
                <div className="w-11 h-11 rounded-full border border-white/[0.75] flex items-center justify-center flex-shrink-0 mt-1 bg-white/[0.01]">
                  <Icon className="w-4 h-4 text-white/[0.75]" strokeWidth={1.25} />
                </div>
                <div className="flex flex-col min-w-[140px]">
                  <Counter target={metric.value} prefix={metric.prefix} suffix={metric.suffix} spring={spring} />
                  <div className="text-[9px] font-light tracking-[0.16em] text-white/[0.65] uppercase mt-2.5 antialiased">
                    {metric.label}
                  </div>
                  <div className="text-[12px] text-white/[0.65] tracking-normal normal-case mt-0.5 antialiased font-extralight">
                    {metric.description}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Scroll indicator */}
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