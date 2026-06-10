"use client";

import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { ChevronRight, Play } from 'lucide-react';

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

export default function CaseStudies() {
  const [hoveredId, setHoveredId] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="relative py-24 px-6 lg:px-12 bg-[#FAF9F5] overflow-hidden">
      <img 
        src="/img/motion_digital_hero_img.png" 
        alt="Abstract wave background" 
        className="absolute top-[-25%] left-0 w-full h-[120%] object-cover object-top pointer-events-none opacity-75 z-0" 
      />
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#1D82A6] uppercase mb-4 block">Client Success Stories</span>
          <h2 className="text-[40px] md:text-[64px] font-bold text-[#0A111A] tracking-tighter leading-tight">Real results.<br />Measurable impact.</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-16">
          {stories.map((story) => (
            <motion.a 
              href={story.link}
              key={story.id}
              className="relative rounded-3xl overflow-hidden block cursor-pointer group aspect-[2080/1170] shadow-lg"
              // @ts-ignore
              
              onMouseEnter={() => { if (!isMobile) setHoveredId(story.id); }}
              onMouseLeave={() => { if (!isMobile) setHoveredId(null); }}
            >
              <img 
                src={story.image} 
                alt={story.company} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              
              {/* Play Button - Always visible on mobile, appears on hover for desktop */}
              <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                <div className={`w-20 h-20 bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 
                  ${isMobile ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 group-hover:scale-110'}`}>
                  <Play className="w-8 h-8 text-white fill-white ml-1" />
                </div>
              </div>

              {/* Text Overlay - Only renders on desktop to keep mobile clean */}
              {!isMobile && (
                <motion.div 
                  className="absolute inset-0 bg-[#0A111A]/85 p-8 flex flex-col justify-between z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredId === story.id ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div>
                    <span className="text-[10px] font-bold text-[#1D82A6] tracking-widest uppercase">
                      {story.category}
                    </span>
                    <p className="text-white mt-4 leading-relaxed font-medium italic text-lg line-clamp-4">
                      "{story.quote}"
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
                    {story.metrics.map((m, i) => (
                      <div key={i}>
                        <div className="text-3xl font-bold text-white">{m.value}</div>
                        <div className="text-[10px] text-gray-400 uppercase tracking-wide mt-0.5">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.a>
          ))}
        </div>

        <div className="text-center">
          <a href="/case-studies" className="inline-flex items-center gap-2 text-[#1D82A6] font-bold text-lg hover:gap-4 transition-all">
            VIEW ALL CASE STUDIES <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}