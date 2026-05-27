import React from 'react';
import { FaInstagram, FaLinkedinIn, FaTiktok, FaTwitter } from 'react-icons/fa';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

export default function Footer() {
  const socialLinks = [
    { name: "Instagram", icon: FaInstagram, url: "#" },
    { name: "LinkedIn", icon: FaLinkedinIn, url: "#" },
    { name: "TikTok", icon: FaTiktok, url: "#" },
    { name: "X (Twitter)", icon: FaTwitter, url: "#" },
    { name: "Email", icon: AiOutlineMail, url: "mailto:hello@motiondigital.com" },
    { name: "Phone", icon: AiOutlinePhone, url: "tel:+10000000000" }
  ];

  return (
    <footer className="relative w-full bg-[#0A111A] text-white pt-16 pb-8 border-t border-[#1E293B] overflow-hidden font-sans">
      
      {/* Background Texture */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <img 
          src="/img/pillars_img.png" 
          alt="Footer Background" 
          className="w-full h-full object-cover object-bottom" 
        />
      </div>

      <div className="relative z-10 max-w-[1700px] mx-auto px-6 lg:px-20">
        
        {/* TOP SECTION */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12 gap-x-6 mb-12">
          
          {/* Logo & Branding Column */}
          <div className="col-span-2 md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center mb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              <img 
                src="/img/motion_digital_logo.png" 
                alt="Motion Digital Logo" 
                className="max-h-full w-auto object-contain"
              />
            </div>
            <div className="flex flex-col items-center md:items-start mb-6">
              <span className="font-semibold text-lg md:text-xl uppercase tracking-[0.2em] leading-none drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                MOTION
              </span>
              <span className="text-xs md:text-sm uppercase tracking-[0.2em] mt-2 leading-none opacity-80">
                Digital
              </span>
            </div>
          </div>

          {/* Navigation Columns */}
          {[
            { title: "Company", links: ["About", "Services", "Case Studies"] },
            { title: "Support", links: ["Pre-sale FAQs", "Submit a Ticket", "Widgetkit"] },
            { title: "Resources", links: ["Themes", "Theme Tweak", "Affiliates"] },
            { title: "Connect", links: ["LinkedIn", "GitHub", "Contact Us"] }
          ].map((col, i) => (
            <div key={i} className="flex flex-col items-center md:items-start text-center md:text-left">
              <h4 className="text-[15px] font-bold uppercase tracking-[0.2em] text-white mb-6">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-4 text-[13px] text-[#94A3B8]">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-[#1D82A6] transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-[#1E293B] mb-8"></div>

        {/* BOTTOM SECTION: Socials */}
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((social) => (
              <a 
                key={social.name} 
                href={social.url} 
                className="w-10 h-10 rounded-full border border-[#1E293B] flex items-center justify-center hover:border-[#1D82A6] hover:bg-[#1D82A6]/10 transition-all duration-300"
                aria-label={social.name}
              >
                {/* Apply rotate-180 only to the phone icon */}
                <social.icon className={`w-5 h-5 ${social.name === "Phone" ? "rotate-90" : ""}`} />
              </a>
            ))}
          </div>
          <p className="text-[10px] text-[#475569] uppercase tracking-[0.1em] text-center">
            © {new Date().getFullYear()} Motion Digital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}