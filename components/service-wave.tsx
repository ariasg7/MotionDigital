"use client";

import { useState } from "react";
import { Layers, MousePointerClick, Code, Zap, Cpu, X, ArrowUpRight } from "lucide-react";

export function WaveNodesSection() {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  const services = [
    {
      id: 0,
      title: "Strategy & Roadmapping",
      tagline: "PERFORMANCE PLANNING",
      icon: Layers,
      desc: "Aligning technical foundations with business KPIs, mapping scalable architecture systems for long-term data growth.",
      top: "40%", 
      left: "12%",
      tech: ["Architecture", "Roadmaps"],
      href: "/services/strategy"
    },
    {
      id: 1,
      title: "Product Design",
      tagline: "EXPERIENCES THAT PERFORM",
      icon: MousePointerClick,
      desc: "High-fidelity UI/UX design built directly into scalable systems, maximizing engagement metrics flawlessly.",
      top: "28%", 
      left: "34%",
      tech: ["Design Systems", "Figma"],
      href: "/services/design"
    },
    {
      id: 2,
      title: "Engineering Excellence",
      tagline: "PRODUCTION INFRASTRUCTURE",
      icon: Code,
      desc: "Clean, type-safe code architectures engineered to load instantaneously and scale under massive operational loads.",
      top: "56%", 
      left: "54%",
      tech: ["Next.js & React", "TypeScript"],
      href: "/services/engineering"
    },
    {
      id: 3,
      title: "Performance Optimization",
      tagline: "CORE WEB VITALS",
      icon: Zap,
      desc: "Eliminating digital latency and code bloat to ensure blazingly fast interaction speed and conversion retention.",
      top: "34%", 
      left: "74%",
      tech: ["Edge Rendering", "Optimization"],
      href: "/services/optimization"
    },
    {
      id: 4,
      title: "AI Integration",
      tagline: "INTELLIGENT COMPUTING",
      icon: Cpu,
      desc: "Deploying automated intelligence arrays directly into client environments to scale productivity workflows.",
      top: "62%", 
      left: "92%",
      tech: ["LLM Workflows", "Vector DBs"],
      href: "/services/ai"
    }
  ];

  return (
    <section className="relative w-full bg-[#FAF9F5] border-b border-[#1A1A1A]/5 overflow-hidden select-none flex flex-col">
      
      {/* ==========================================
          1. HIGH-CONVERSION DIRECT HEADERS
         ========================================== */}
      <div className="w-full relative z-20 bg-gradient-to-b from-[#FAF9F5] via-[#FAF9F5]/95 to-transparent pt-16 pb-6">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20">
          {/* Label uses font-sans with wide tracking */}
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#1D82A6] uppercase block mb-3 font-sans antialiased">
            Our Capabilities
          </span>
          
          {/* Main Heading uses font-sans with tight tracking */}
          <h2 className="text-[40px] md:text-[64px] font-sans font-bold text-[#0A111A] tracking-tighter leading-[1.05]">
            Core services
          </h2>
        </div>
      </div>

      {/* ==========================================
          2. HYBRID CANVAS VIEWPORT (Swipe on mobile, locked on desktop)
         ========================================== */}
      <div className="w-full overflow-x-auto md:overflow-hidden touch-pan-x relative h-[460px] md:h-[560px] z-10 -mt-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        
        {/* Set explicit minimum track sizing for mobile canvas panning framework */}
        <div className="absolute inset-0 min-w-[960px] md:min-w-full h-full">
          
          {/* Background Vector Image */}
          <div className="absolute inset-0 w-full h-full pointer-events-none mix-blend-multiply opacity-85">
            <img 
              src="/img/service_wave.png" 
              alt="Motion Digital Performance Contour" 
              className="w-full h-full object-cover object-center scale-[1.01]"
            />
          </div>

          {/* Interactive Hotspots Mapping */}
          {services.map((node, index) => {
            const Icon = node.icon;
            const isSelected = activeNode === index;

            return (
              <div
                key={node.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
                style={{ top: node.top, left: node.left }}
              >
                {/* Hitbox Target Area Container */}
                <div className="w-16 h-20 flex flex-col items-center justify-center relative group">
                  <button
                    onClick={() => setActiveNode(isSelected ? null : index)}
                    className={`relative w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 shadow-md cursor-pointer active:scale-90
                      ${isSelected
                        ? "bg-[#1D82A6] border-[#1D82A6] text-white ring-4 ring-[#1D82A6]/15 scale-110 z-30"
                        : "bg-white border-[#0F141C]/20 text-[#0F141C] hover:border-[#1D82A6] hover:scale-105 z-20"
                      }
                    `}
                  >
                    <Icon className="w-4 h-4" strokeWidth={2.5} />
                    
                    {/* Pulsing Radar Ring */}
                    {!isSelected && (
                      <span className="absolute inset-0 rounded-full bg-[#1D82A6]/20 animate-ping pointer-events-none opacity-75" />
                    )}
                  </button>
                  
                  {/* High Visibility Node Text Labels */}
                  <div className="absolute top-14 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
                    <span className={`px-2.5 py-1 text-[10px] font-display font-extrabold tracking-widest uppercase transition-all duration-300 rounded shadow-sm whitespace-nowrap text-center block border
                      ${isSelected 
                        ? "bg-[#1D82A6] text-white border-[#1D82A6]" 
                        : "bg-[#0F141C] text-white border-[#0F141C] opacity-85 group-hover:opacity-100"
                      }
                    `}>
                      {node.title.split(" ")[0]}
                    </span>
                  </div>
                </div>

                {/* Desktop Popover Overlays */}
                {isSelected && (
                  <div className="hidden md:block absolute top-20 left-1/2 -translate-x-1/2 w-[340px] bg-white border border-[#0F141C]/10 p-6 rounded-[16px] shadow-[0_20px_40px_rgba(15,20,28,0.12)] z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[9px] font-display font-extrabold tracking-wider text-[#1D82A6] bg-[#1D82A6]/5 px-2.5 py-0.5 rounded border border-[#1D82A6]/10">
                        {node.tagline}
                      </span>
                      <button onClick={(e) => { e.stopPropagation(); setActiveNode(null); }} className="p-1 rounded-full text-[#0F141C]/40 hover:text-[#0F141C] hover:bg-[#0F141C]/5 cursor-pointer">
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <h3 className="text-[18px] font-display font-extrabold tracking-tight text-[#0F141C] mb-1.5">{node.title}</h3>
                    <p className="text-[13px] leading-relaxed font-light text-[#0F141C]/80 font-sans mb-4">{node.desc}</p>
                    <div className="flex flex-wrap gap-1.5 border-t border-[#0F141C]/5 pt-3.5">
                      {node.tech.map((item, i) => (
                        <span key={i} className="text-[11px] font-medium font-sans bg-[#FAF9F5] border border-[#0F141C]/5 text-[#0F141C]/70 px-2.5 py-0.5 rounded">{item}</span>
                      ))}
                      <a href={node.href} className="ml-auto text-[10px] font-display font-extrabold tracking-wider text-[#1D82A6] inline-flex items-center gap-0.5 uppercase cursor-pointer hover:opacity-80 transition-opacity">
                        Explore <ArrowUpRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                )}

              </div>
            );
          })}

        </div>
      </div>

      {/* ==========================================
          3. MOBILE BOTTOM DRAWER SHEET (Restored)
         ========================================== */}
      <div className={`block md:hidden w-full bg-white border-t border-[#0F141C]/10 px-6 pt-6 pb-10 transition-all duration-300 ease-out shadow-[0_-10px_30px_rgba(15,20,28,0.08)] z-20
        ${activeNode !== null ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none h-0 p-0 overflow-hidden"}
      `}>
        {activeNode !== null && (
          <div className="animate-in fade-in slide-in-from-bottom-3 duration-300">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[9px] font-display font-extrabold tracking-wider text-[#1D82A6] bg-[#1D82A6]/5 px-2.5 py-0.5 rounded border border-[#1D82A6]/10">
                {services[activeNode].tagline}
              </span>
              <button 
                onClick={() => setActiveNode(null)}
                className="p-2 -mr-2 rounded-full text-[#0F141C]/50 hover:text-[#0F141C] bg-[#0F141C]/5 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <h3 className="text-[20px] font-display font-extrabold tracking-tight text-[#0F141C] mb-2">
              {services[activeNode].title}
            </h3>
            <p className="text-[14px] leading-relaxed font-light text-[#0F141C]/80 font-sans mb-6">
              {services[activeNode].desc}
            </p>

            <div className="flex items-center justify-between border-t border-[#0F141C]/5 pt-4">
              <div className="flex flex-wrap gap-1.5">
                {services[activeNode].tech.map((item, i) => (
                  <span key={i} className="text-[11px] font-medium font-sans bg-[#FAF9F5] border border-[#0F141C]/5 text-[#0F141C]/70 px-2.5 py-1 rounded">
                    {item}
                  </span>
                ))}
              </div>
              <a href={services[activeNode].href} className="text-[11px] font-display font-extrabold tracking-wider text-[#1D82A6] inline-flex items-center gap-0.5 uppercase cursor-pointer">
                VIEW MORE <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}
      </div>

      {/* ==========================================
          4. HYBRID BACKUP CAPABILITIES INDEX GRID 
         ========================================== */}
      <div className="w-full bg-[#0A111A] text-white pt-16 pb-20 z-20">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20">
          
          <div className="border-b border-white/10 pb-6 mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#1D82A6] uppercase block mb-3 font-sans">
                Our Specialized Technical Expertise
              </span>
              <h2 className="text-[40px] md:text-[64px] font-sans font-bold text-white tracking-tighter leading-[1.05]">
                Service Directory
              </h2>
            </div>
          </div>

          {/* Clean 2-to-3 Column Grid Array */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((item) => {
              const GridIcon = item.icon;
              return (
                <div 
                  key={item.id}
                  className="group bg-white/[0.03] border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:bg-white/[0.05] hover:border-white/20 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 text-[#1D82A6] group-hover:bg-[#1D82A6] group-hover:text-white transition-all duration-300">
                      <GridIcon className="w-4 h-4" strokeWidth={2.5} />
                    </div>
                    <span className="text-[9px] font-display font-extrabold tracking-widest text-[#1D82A6] block mb-1">
                      {item.tagline}
                    </span>
                    <h4 className="text-[18px] font-display font-extrabold tracking-tight mb-2 text-white">
                      {item.title}
                    </h4>
                    <p className="text-[13px] leading-relaxed font-light text-white/70 font-sans mb-6">
                      {item.desc}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5 items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {item.tech.slice(0, 2).map((techItem, i) => (
                        <span key={i} className="text-[11px] font-sans font-medium bg-white/5 text-white/60 border border-white/5 px-2 py-0.5 rounded">
                          {techItem}
                        </span>
                      ))}
                    </div>
                    <a 
                      href={item.href}
                      className="text-[11px] font-display font-extrabold tracking-wider text-[#1D82A6] inline-flex items-center gap-0.5 uppercase group-hover:translate-x-0.5 transition-transform"
                    >
                      Explore <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>

    </section>
  );
}