"use client";

import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, animate, useInView, useScroll, useTransform } from 'framer-motion';
import { Calendar, Code2, Globe, CheckCircle, ArrowUpRight, Quote, MapPin } from 'lucide-react';

const stats = [
  { label: "Years Experience", value: 5, icon: Calendar, suffix: "+" },
  { label: "Projects Delivered", value: 15, icon: Code2, suffix: "+" },
  { label: "Industries Served", value: 8, icon: Globe, suffix: "+" },
  { label: "Client Focused", value: 100, icon: CheckCircle, suffix: "%" },
];

function AnimatedCounter({ value, suffix }: { value: number, suffix: string }) {
  const count = useMotionValue(0);
  const [displayValue, setDisplayValue] = React.useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate: (latest) => setDisplayValue(Math.round(latest))
      });
      return () => controls.stop();
    }
  }, [isInView, count, value]);

  return <span ref={ref}>{displayValue}{suffix}</span>;
}

export default function About({ id }: { id?: string }) {
  const containerRef = useRef(null);
  
  // Track scroll progress of the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start center"]
  });

  // Map scroll progress (0 to 1) to grayscale values (100% to 0%)
  const grayscale = useTransform(scrollYProgress, [0, 1], [100, 0]);

  return (
    <section id={id} ref={containerRef} className="relative w-full py-24 bg-[#0A111A] text-white overflow-hidden">

      {/* Subtle topographic texture */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.5]">
        <img
          src="/img/about/about1_img.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-[1700px] mx-auto px-6 lg:px-20">

        {/* HEADER SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-20 mb-24 items-start"
        >

          {/* LEFT: Photo + floating elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative order-1"
          >
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-[#1E293B]">
              <motion.img
                src="/img/about/me.jpeg"
                alt="Founder of Motion Digital"
                className="w-full h-full object-cover object-[center_15%]"
                // Apply dynamic grayscale filter based on scroll
                style={{ filter: useTransform(grayscale, (v) => `grayscale(${v}%)`) }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A111A] via-transparent to-transparent opacity-90" />

              {/* Name overlay on photo */}
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                <div className="border-l-2 border-l-[#1D82A6] pl-4">
                  <h3 className="text-[20px] font-bold text-white tracking-tight">Giani A.</h3>
                  <p className="text-[12px] text-[#A1B0C4] uppercase tracking-[0.1em] mt-0.5">Founder, Motion Digital</p>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-[#A1B0C4] uppercase tracking-[0.1em]">
                  <MapPin className="w-3 h-3 text-[#1D82A6]" />
                  Based locally
                </div>
              </div>
            </div>

            {/* Floating quote card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-8 -right-4 lg:-right-8 bg-[#1D82A6] rounded-2xl p-5 max-w-[240px] shadow-2xl"
            >
              <Quote className="w-5 h-5 text-white/40 mb-2" strokeWidth={1.5} />
              <p className="text-[14px] text-white leading-relaxed font-medium">
                Real talk, fast answers, no middlemen.
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT: Text content */}
          <div className="flex flex-col justify-center order-2 pt-8 lg:pt-12">
            <span className="text-[12px] font-bold tracking-[0.2em] text-[#1D82A6] uppercase mb-4">
              MEET THE FOUNDER
            </span>
            <h2 className="text-[44px] lg:text-[56px] font-bold leading-[1.1] mb-8 text-white tracking-tight">
              Hi, I'm Giani A.<br />
              <span className="text-[#1D82A6]">I run Motion Digital.</span>
            </h2>

            <p className="text-[17px] text-slate-400 leading-relaxed mb-6 max-w-[540px]">
              I started Motion Digital because I kept seeing the same thing — great local businesses, doing great work, completely invisible online. Meanwhile their competitors with weaker service were getting all the calls just because they showed up first on Google.
            </p>
            <p className="text-[17px] text-slate-400 leading-relaxed mb-10 max-w-[540px]">
              So I started helping business owners fix that: websites, branding, SEO, Google Business, and AI tools that actually bring in customers. No account managers, no jargon, no contracts. Just me and my team, working directly with you.
            </p>

            {/* Inline mini stats */}
            <div className="flex flex-wrap gap-x-8 gap-y-4 mb-10 pb-10 border-b border-[#1E293B]">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-[28px] font-bold text-white tracking-tight tabular-nums">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className="text-[11px] text-[#64748B] uppercase tracking-[0.12em] mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            <button className="self-start flex items-center gap-3 bg-[#1D82A6] text-white pl-5 pr-4 py-3.5 rounded-[8px] hover:bg-white hover:text-[#0A111A] transition-all duration-300 group">
              <span className="text-[11px] font-sans uppercase tracking-[0.08em]">Book a Free Call With Me</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-all duration-300" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}