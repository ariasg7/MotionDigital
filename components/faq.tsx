"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';

const faqData = [
  {
    question: "How long does a typical project take?",
    answer: "Timelines vary based on project scope and complexity. During our initial discovery phase, we will provide a tailored roadmap with clear milestones to ensure we meet your specific deadlines and goals."
  },
  {
    question: "What engagement models do you offer?",
    answer: "We provide flexible engagement models designed to fit your needs, ranging from project-based solutions for specific deliverables to ongoing partnerships for long-term growth and maintenance."
  },
  {
    question: "How do you ensure project success?",
    answer: "We prioritize transparency and communication. Success is driven by our collaborative process, regular progress updates, data-backed strategies, and a focus on delivering measurable results that align with your business objectives."
  },
  {
    question: "What technologies do you work with?",
    answer: "We utilize a modern, versatile tech stack selected to best solve your specific challenges. Our expertise includes industry-leading tools for web development, marketing automation, SEO, and AI integration to ensure high-performance results."
  },
  {
    question: "Is my idea secure with you?",
    answer: "Absolutely. We treat your intellectual property with the highest level of confidentiality. We are happy to sign non-disclosure agreements (NDAs) and implement secure data handling protocols to protect your ideas and business assets throughout our partnership."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
      className="w-full py-16 md:py-32 bg-white font-sans"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20 grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Side: Header */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex flex-col gap-6 md:gap-8 items-center lg:items-start text-center lg:text-left"
        >
          <div className="flex items-center gap-4">
            <span className="text-[12px] md:text-[14px] font-bold tracking-[0.2em] text-[#1D82A6] uppercase">FAQ</span>
            <div className="w-12 md:w-16 h-[2px] bg-[#1D82A6]" />
          </div>
          <h2 className="text-[36px] md:text-[56px] font-bold leading-[1] text-[#0F172A] tracking-tighter">
            Questions?<br />
            <span className="text-[#1D82A6]">We've got answers.</span>
          </h2>
          <p className="text-[#64748B] text-[16px] md:text-[18px] leading-relaxed max-w-[420px]">
            Here are some of the most common questions we receive from new clients regarding our process, technology, and partnerships.
          </p>
          
          <a href = "/book"><button className="font-sans bg-[#0A111A] text-white px-8 md:px-10 py-5 md:py-7 rounded-2xl w-fit flex items-center gap-4 hover:bg-[#1D82A6] transition-colors mx-auto lg:mx-0">
            <div className="flex flex-col items-start">
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.1em] opacity-80">Still have questions?</span>
              <span className="font-bold text-md md:text-lg">Let's talk</span>
            </div>
            <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
          </button></a>
        </motion.div>

        {/* Right Side: Accordion */}
        <div className="lg:col-span-7 flex flex-col gap-4 md:gap-6">
          {faqData.map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:border-[#1D82A6]/30 transition-colors"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="font-sans w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-gray-50 transition-colors"
              >
                <span className={`font-semibold text-md md:text-lg pr-4 ${activeIndex === i ? 'text-[#1D82A6]' : 'text-[#0F172A]'}`}>
                  {item.question}
                </span>
                {activeIndex === i ? (
                  <Minus className="w-5 h-5 md:w-6 md:h-6 text-[#1D82A6] flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 md:w-6 md:h-6 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="font-sans px-6 md:px-8 pb-6 md:pb-8 text-[14px] md:text-[16px] text-[#64748B] leading-relaxed"
                  >
                    {item.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}