"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ["STUDIO", "SERVICES", "CASE STUDIES", "PROCESS", "RESOURCES"];

  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-[#FAF9F5]/80 backdrop-blur-md z-50 select-none border-b border-[#1A1A1A]/5 font-display">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 h-20 md:h-24 flex items-center justify-between">
        
        {/* Left - Brand Identity */}
        <div className="flex items-center gap-[0.1px] cursor-pointer group py-2 z-50">
          <img 
            src="/img/motion_digital_logo.png"
            alt="Motion Digital Logo" 
            className="w-16 h-16 md:w-24 md:h-24 object-contain transition-transform duration-300 ease-out group-hover:scale-105"
          />
          <div className="flex flex-col justify-center -space-y-1">
            <span className="text-[18px] md:text-[22px] font-extrabold tracking-[0.02em] text-[#1A1A1A] leading-none">
              MOTION
            </span>
            <span className="text-[14px] md:text-[18px] font-normal tracking-[0.01em] text-[#1A1A1A]/80 leading-none pt-0.5">
              Digital
            </span>
          </div>
        </div>

        {/* Center - Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-10 lg:gap-11">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
              className="relative py-1 text-[11px] font-semibold tracking-[0.07em] text-[#1A1A1A]/70 hover:text-[#1A1A1A] transition-colors duration-300 ease-out group"
            >
              {link}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#1D82A6] transition-all duration-300 ease-out group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Right - Desktop CTA Button */}
        <div className="hidden md:block">
          <button className="flex items-center justify-center gap-3 bg-[#0F141C] text-white px-5 py-2.5 rounded-[8px] hover:bg-[#1D82A6] active:scale-[0.98] transition-all duration-300 ease-out group cursor-pointer">
            <span className="text-[11px] font-bold tracking-[0.06em] antialiased uppercase whitespace-nowrap">
              BOOK A CALL
            </span>
            <ArrowUpRight 
              className="w-3.5 h-3.5 text-[#1D82A6] transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" 
              strokeWidth={2.5} 
            />
          </button>
        </div>

        {/* Mobile - Sandwich Menu Trigger Icon */}
        <div className="flex md:hidden items-center z-50">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2.5 rounded-[12px] border border-[#1A1A1A]/10 bg-white/50 backdrop-blur-sm active:scale-95 transition-all outline-none cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <X className="w-5 h-5 text-[#1A1A1A]" strokeWidth={2} />
            ) : (
              <Menu className="w-5 h-5 text-[#1A1A1A]/80" strokeWidth={2} />
            )}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Dropdown Menu overlay */}
      <div 
        className={`fixed inset-0 top-0 left-0 w-screen h-screen bg-[#FAF9F5] z-40 flex flex-col pt-32 px-8 transition-all duration-300 ease-in-out md:hidden ${
          isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={() => setIsOpen(false)}
              className="text-[16px] font-bold tracking-[0.06em] text-[#1A1A1A]/80 active:text-[#1D82A6] py-2 border-b border-[#1A1A1A]/5"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Mobile Call To Action Button */}
        <div className="mt-auto pb-12">
          <button className="flex items-center justify-center gap-4 bg-[#0F141C] text-white w-full py-4 rounded-[8px] active:scale-[0.99] cursor-pointer">
            <span className="font-sans text-[11px] font-bold tracking-[0.06em] antialiased uppercase whitespace-nowrap">
              BOOK A CALL
            </span>
            <ArrowUpRight className="w-4 h-4 text-[#1D82A6]" strokeWidth={2.5} />
          </button>
        </div>
      </div>

    </nav>
  );
}