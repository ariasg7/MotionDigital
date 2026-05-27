'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';

const faqData = [
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on scope and complexity. We provide detailed roadmaps after our initial discovery phase to ensure clear milestones and transparent delivery."
  },
  {
    question: "What engagement models do you offer?",
    answer: "We offer flexible engagement models including fixed-price projects for well-defined scopes, dedicated teams for long-term growth, and staff augmentation to scale your existing capabilities."
  },
  {
    question: "How do you ensure project success?",
    answer: "We ensure success through a combination of transparent communication, rigorous agile testing, and iterative delivery cycles that keep you involved at every stage of the development process."
  },
  {
    question: "What technologies do you work with?",
    answer: "Our expertise spans modern, high-performance tech stacks. We focus on scalable solutions using React, Next.js, Node.js, TypeScript, and robust cloud-native architectures."
  },
  {
    question: "Is my idea secure with you?",
    answer: "Security and confidentiality are our top priorities. We treat your intellectual property with the highest regard and are fully prepared to sign NDAs before any project discussions begin."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(1);

  return (
    <section className="w-full py-16 md:py-32 bg-white font-sans">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20 grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Side: Header */}
        {/* Added flex items-center and lg:items-start to control button alignment */}
        <div className="lg:col-span-5 flex flex-col gap-6 md:gap-8 items-center lg:items-start text-center lg:text-left">
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
          
          {/* Centered on mobile via mx-auto, left-aligned on desktop */}
          <button className="font-sans bg-[#0A111A] text-white px-8 md:px-10 py-5 md:py-7 rounded-2xl w-fit flex items-center gap-4 hover:bg-[#1D82A6] transition-colors mx-auto lg:mx-0">
            <div className="flex flex-col items-start">
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.1em] opacity-80">Still have questions?</span>
              <span className="font-bold text-md md:text-lg">Let's talk</span>
            </div>
            <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>

        {/* Right Side: Accordion */}
        <div className="lg:col-span-7 flex flex-col gap-4 md:gap-6">
          {faqData.map((item, i) => (
            <div 
              key={i} 
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
                    className="font-sans px-6 md:px-8 pb-6 md:pb-8 text-[14px] md:text-[16px] text-[#64748B] leading-relaxed"
                  >
                    {item.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}