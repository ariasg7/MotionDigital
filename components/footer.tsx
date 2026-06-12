"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedinIn, FaTiktok, FaTwitter } from 'react-icons/fa';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

export default function Footer() {
  const socialLinks = [
    { name: "Instagram", icon: FaInstagram, url: "https://www.instagram.com/themotiondigital/" },
    { name: "LinkedIn", icon: FaLinkedinIn, url: "#" },
    { name: "TikTok", icon: FaTiktok, url: "#" },
    { name: "X (Twitter)", icon: FaTwitter, url: "#" },
    { name: "Email", icon: AiOutlineMail, url: "mailto:giani@themotiondigital.com" },
    { name: "Phone", icon: AiOutlinePhone, url: "tel:+19144812133" }
  ];

  const handleScroll = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = `/#${id}`;
    }
  };

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      className="relative w-full bg-[#0A111A] text-white pt-16 pb-8 border-t border-[#1E293B] overflow-hidden font-sans"
    >
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <img src="/img/pillars_img.png" alt="Footer Background" className="w-full h-full object-cover object-bottom" />
      </div>

      <div className="relative z-10 max-w-[1700px] mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12 gap-x-6 mb-12">
          
          {/* Logo & Branding Column */}
          <div className="col-span-2 md:col-span-1 flex flex-col items-center text-center">
            <Link 
              href="/"
              onClick={(e) => {
                if (window.location.pathname === '/') {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center mb-2 cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              <img src="/img/motion_digital.png" alt="Motion Digital Logo" className="max-h-full w-auto object-contain" />
            </Link>
            
            <div className="flex flex-col items-center mb-6">
              <span className="font-semibold text-lg md:text-xl uppercase tracking-[0.2em]">MOTION</span>
              <span className="text-xs md:text-sm uppercase tracking-[0.2em] mt-2 opacity-80">Digital</span>
            </div>
          </div>

          {/* Company Column */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-[15px] font-bold uppercase tracking-[0.2em] text-white mb-6">Company</h4>
            <ul className="flex flex-col gap-4 text-[13px] text-[#94A3B8]">
              {['about', 'services', 'case-studies'].map((item) => (
                <li key={item}>
                  <button onClick={(e) => handleScroll(e, item)} className="hover:text-[#1D82A6] capitalize transition-colors">
                    {item.replace('-', ' ')}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Agency Column */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-[15px] font-bold uppercase tracking-[0.2em] text-white mb-6">Agency</h4>
            <ul className="flex flex-col gap-4 text-[13px] text-[#94A3B8]">
              <li>
                <button onClick={(e) => handleScroll(e, 'process')} className="hover:text-[#1D82A6] transition-colors">
                  Process
                </button>
              </li>
              <li><a href="/resources" className="hover:text-[#1D82A6] transition-colors">Resources</a></li>
              <li><a href="/book" className="hover:text-[#1D82A6] transition-colors">Book a Call</a></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-[15px] font-bold uppercase tracking-[0.2em] text-white mb-6">Legal</h4>
            <ul className="flex flex-col gap-4 text-[13px] text-[#94A3B8]">
              <li><a href="/privacy" className="hover:text-[#1D82A6] transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-[#1D82A6] transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-[15px] font-bold uppercase tracking-[0.2em] text-white mb-6">Connect</h4>
            <ul className="flex flex-col gap-4 text-[13px] text-[#94A3B8]">
              <li><a href="mailto:giani@themotiondigital.com" className="hover:text-[#1D82A6] transition-colors">Email Giani</a></li>
              <li><a href="tel:+19144812133" className="hover:text-[#1D82A6] transition-colors">Call Us</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#1E293B] mb-8"></div>

        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((social) => (
                <a 
                  key={social.name} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full border border-[#1E293B] flex items-center justify-center hover:border-[#1D82A6] hover:bg-[#1D82A6]/10 transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className={`w-5 h-5 ${social.name === "Phone" ? "rotate-90" : ""}`} />
                </a>
              ))}
          </div>
          <p className="text-[10px] text-[#475569] uppercase tracking-[0.1em] text-center">
            © {new Date().getFullYear()} Motion Digital. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}