"use client";

import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { ChevronRight, Play, ArrowUpRight, ShieldCheck, Lock } from 'lucide-react';

const stories = [
  {
    id: 1,
    company: "Dolce Far Niente",
    category: "BRAND AWARENESS & REVENUE GROWTH",
    image: "/img/testimonials/testimonial1.png",
    link: "/case-studies/dolce-far-niente",
    quote: "Motion Digital didn't just build us a website; they engineered an acquisition engine. Since launch, our conversion rates have climbed steadily, and the brand identity they crafted has positioned us perfectly in a competitive market.",
    metrics: [
      { label: "Conversion Rate", value: "3.0x" }, 
      { label: "Revenue Growth", value: "300%" }
    ],
  },
  {
    id: 2,
    company: "Pochara Studio",
    category: "DIGITAL FOUNDATION & GROWTH",
    image: "/img/testimonials/testimonial2.png",
    link: "/case-studies/pochara-studio",
    quote: "We needed a digital foundation that matched the quality of our photography, and Motion Digital delivered. By unifying our presence across SEO, social, and GMB, they’ve transformed our studio from a local player into a premium brand.",
    metrics: [
      { label: "Digital Footprint", value: "4.0x" }, 
      { label: "Client Acquisition", value: "2.0x" }
    ],
  }
];

export default function CaseStudies({ id }: { id?: string }) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id={id} className="relative py-24 px-6 lg:px-12 bg-[#FAF9F5] overflow-hidden">
      <img 
        src="/img/casestudies_img.png" 
        alt="Abstract wave background" 
        className="absolute top-[-25%] left-0 w-full h-[120%] object-cover object-top pointer-events-none opacity-75 z-0" 
      />
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* ANIMATED HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#1D82A6] uppercase mb-4 block">Client Success Stories</span>
          <h2 className="text-[40px] md:text-[64px] font-bold text-[#0A111A] tracking-tighter leading-tight">Real results.<br />Measurable impact.</h2>
        </motion.div>

        {/* ANIMATED GRID */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          {stories.map((story, index) => (
            <motion.a 
              href={story.link}
              key={story.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="relative rounded-3xl overflow-hidden block cursor-pointer group aspect-[2080/1170] shadow-lg"
              onMouseEnter={() => { if (!isMobile) setHoveredId(story.id); }}
              onMouseLeave={() => { if (!isMobile) setHoveredId(null); }}
            >
              <img 
                src={story.image} 
                alt={story.company} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              
              <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                <div className={`w-20 h-20 bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 
                  ${isMobile ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 group-hover:scale-110'}`}>
                  <Play className="w-8 h-8 text-white fill-white ml-1" />
                </div>
              </div>

              {!isMobile && (
                <motion.div 
                  className="absolute inset-0 bg-[#0A111A]/85 p-8 flex flex-col justify-between z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredId === story.id ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div>
                    <span className="text-[10px] font-bold text-[#1D82A6] tracking-widest uppercase">{story.category}</span>
                    <p className="text-white mt-4 leading-relaxed font-medium italic text-lg line-clamp-4">"{story.quote}"</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
                    {story.metrics.map((m, i) => (
                      <div key={i}>
                        <div className="text-3xl font-bold text-white">{m.value}</div>
                        <div className="text-[10px] text-gray-400 uppercase tracking-wide mt-0.5">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.a>
          ))}
        </div>

        <div className="hidden md:block text-center mb-24">
          <a href="/case-studies" className="inline-flex items-center gap-2 text-[#1D82A6] font-bold text-lg hover:gap-4 transition-all">
            VIEW ALL CASE STUDIES <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        {/* MOBILE CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="md:hidden relative bg-[#0A111A] rounded-3xl p-8 flex flex-col items-center gap-8 text-white overflow-hidden mb-12"
        >
          <img src="/img/casestudies_metric.png" alt="CTA Texture" className="absolute inset-0 w-full h-full object-cover opacity-50 pointer-events-none" />

          <div className="flex flex-col items-center text-center relative z-10">
             <div className="w-20 h-20 flex items-center justify-center mb-4">
               <img src="/img/motion_digital.png" alt="Logo" className="max-h-full w-auto object-contain" />
             </div>
             <h2 className="text-2xl font-bold mb-4">Your success is our standard.</h2>
             <div className="flex flex-wrap justify-center gap-4 text-[10px] font-medium tracking-[0.1em] uppercase opacity-60">
               <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5"/> Enterprise Grade</span>
               <span className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5"/> Secure</span>
             </div>
          </div>

          <a href="/case-studies" className="bg-transparent border border-white/20 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 w-full justify-center relative z-10">
            VIEW ALL CASE STUDIES <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}