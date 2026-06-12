"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  
  const navLinks = [
    { name: "SERVICES", id: "services" },
    { name: "PROCESS", id: "process" },
    { name: "CASE STUDIES", id: "case-studies" },
    { name: "ABOUT", id: "about" },
    { name: "RESOURCES", id: "resources" },
  ];

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setIsOpen(false);

    // If we are not on the home page, redirect to home first
    if (pathname !== '/') {
      router.push(`/#${id}`);
      return;
    }

    // If we are on home, scroll smoothly to the element
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 w-full bg-[#FAF9F5]/80 backdrop-blur-md z-50 select-none border-b border-[#1A1A1A]/5 font-display"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 h-20 md:h-24 flex items-center justify-between">
        
        {/* Brand Identity */}
        <Link 
          href="/" 
          onClick={(e) => {
            if (pathname === '/') {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className="flex items-center gap-[0.1px] cursor-pointer group py-2 z-50"
        >
          <img 
            src="/img/motion_digital.png"
            alt="Motion Digital Logo" 
            className="w-16 h-16 md:w-24 md:h-24 object-contain transition-transform duration-300 ease-out group-hover:scale-105"
          />
          <div className="flex flex-col justify-center -space-y-1">
            <span className="text-[18px] md:text-[22px] font-extrabold tracking-[0.02em] text-[#1A1A1A] leading-none">MOTION</span>
            <span className="text-[14px] md:text-[18px] font-normal tracking-[0.01em] text-[#1A1A1A]/80 leading-none pt-0.5">Digital</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10 lg:gap-11">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={(e) => handleNavClick(e, link.id)}
              className="relative py-1 text-[11px] font-semibold tracking-[0.07em] text-[#1A1A1A]/70 hover:text-[#1A1A1A] transition-colors duration-300 ease-out group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#1D82A6] transition-all duration-300 ease-out group-hover:w-full" />
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link href="/book">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-3 bg-[#0F141C] text-white px-5 py-2.5 rounded-[8px] hover:bg-[#1D82A6] transition-all duration-300 ease-out group cursor-pointer"
            >
              <span className="text-[11px] font-bold tracking-[0.06em] uppercase">BOOK A CALL</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#1D82A6]" />
            </motion.button>
          </Link>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex md:hidden items-center z-[100]">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-3 rounded-xl border border-[#1A1A1A]/10 bg-[#FAF9F5] backdrop-blur-sm active:scale-95 transition-all outline-none"
          >
            {isOpen ? <X className="w-6 h-6 text-[#1A1A1A]" /> : <Menu className="w-6 h-6 text-[#1A1A1A]" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-0 left-0 w-screen h-screen bg-[#FAF9F5] z-40 flex flex-col pt-32 px-8 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className="text-left text-[16px] font-bold tracking-[0.06em] text-[#1A1A1A]/80 active:text-[#1D82A6] py-2 border-b border-[#1A1A1A]/5"
                >
                  {link.name}
                </button>
              ))}
            </div>

            <div className="mt-auto pb-12">
              <Link href="/book" onClick={() => setIsOpen(false)}>
                <button className="flex items-center justify-center gap-4 bg-[#0F141C] text-white w-full py-4 rounded-[8px]">
                  <span className="text-[11px] font-bold tracking-[0.06em] uppercase">BOOK A CALL</span>
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}