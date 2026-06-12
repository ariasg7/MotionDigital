"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() { 
  return (
    <section className="w-full min-h-[80vh] bg-[#0A111A] flex flex-col justify-center py-24 relative overflow-hidden">
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 bg-[#0A111A]"> 
        <img 
          src="/img/finalcta_img.png" 
          alt="Background" 
          className="w-full h-full object-cover opacity-40" // Adjust opacity here (0-100)
        />
      </div>
      
      <div className="max-w-[800px] mx-auto px-6 text-center z-10 relative">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-[12px] font-bold tracking-[0.3em] text-[#1D82A6] uppercase mb-6 block"
        >
          Get Started
        </motion.span>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-[36px] md:text-[56px] font-bold text-white tracking-tighter leading-[1.1] mb-8"
        >
          Ready to elevate your <br />
          <span className="text-[#1D82A6] inline-block hover:scale-[1.02] transition-transform cursor-default">
            digital presence?
          </span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-[#94A3B8] text-[16px] md:text-[20px] mb-12 max-w-lg mx-auto leading-relaxed"
        >
          Let’s discuss your project goals. We’re ready to partner with you and build something exceptional.
        </motion.p>

        {/* Interactive Button */}
        <motion.a 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          href="/book" 
          className="group inline-flex items-center gap-3 bg-[#1D82A6] text-white px-10 py-5 rounded-full font-bold text-[16px] transition-all shadow-[0_20px_40px_-10px_rgba(29,130,166,0.3)] hover:shadow-[0_25px_50px_-12px_rgba(29,130,166,0.5)]"
        >
          Book a discovery call
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </motion.a>
      </div>
    </section>
  );
}