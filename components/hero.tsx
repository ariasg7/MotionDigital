import { ArrowUpRight } from "lucide-react";

export function Hero() {
  const services = ["STRATEGY", "DESIGN", "ENGINEERING", "OPTIMIZATION", "AI INTEGRATION"];

  return (
    <section className="relative w-full min-h-screen bg-[#FAF9F5] overflow-hidden pt-24 select-none font-sans">
      
      {/* 1. Background Grid Art Layer */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 mix-blend-multiply">
        <img 
          src="/img/Motion_Digital_Hero_img.png" 
          alt="Motion Digital Hero Backdrop" 
          className="w-full h-full object-cover object-bottom md:object-right-top scale-100 opacity-90 md:opacity-100"
        />
      </div>

      {/* Main Container */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 relative z-10">
        
        <div className="grid grid-cols-12 gap-8 min-h-[calc(100vh-96px)] items-start relative">
          
          {/* LEFT COLUMN */}
          <div className="col-span-12 md:col-span-9 lg:col-span-8 xl:col-span-7 pb-20 pt-10 md:pt-32 flex flex-col items-start justify-start text-left">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center px-4 py-1.5 bg-transparent border border-[#1D82A6]/20 rounded-full mb-8 md:mb-9 self-start">
              <span className="text-[12px] font-bold tracking-[0.12em] text-[#1D82A6]/80 antialiased">
                PERFORMANCE. ENGINEERED.
              </span>
            </div>

            {/* Typography Heading Wrap */}
            <div className="mb-6 md:mb-8 select-text text-left flex flex-col items-start md:block text-[48px] sm:text-[56px] lg:text-[72px] xl:text-[80px] font-bold font-display antialiased tracking-[-0.03em] leading-[1.1] md:leading-[1.05]">
              <span className="text-[#1A1A1A] block md:whitespace-nowrap">
                Digital Performance,
              </span>
              <span className="text-[#1D82A6] block md:whitespace-nowrap mt-0.5 md:mt-1">
                Engineered.
              </span>
            </div>

            {/* Paragraph Description Component */}
            <p className="text-[15px] lg:text-[16px] leading-[1.75] font-light text-[#1A1A1A]/70 max-w-[480px] tracking-[0.01em] antialiased select-text text-left block">
              We build high-performance digital systems that drive measurable growth and long-term impact.
            </p>

            {/* CTA Buttons Container */}
            <div className="mt-10 md:mt-8 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-9 items-start justify-start text-left w-full sm:w-auto">
              
              {/* Explore Our Work Button */}
              <button className="flex items-center justify-start gap-3 bg-[#0F141C] text-white pl-4 pr-3 py-3 rounded-[8px] hover:bg-[#1D82A6] active:scale-[0.98] transition-all duration-300 ease-out group w-[185px] max-w-[190px] sm:w-auto sm:pl-5 sm:pr-4 self-start cursor-pointer">
                <span className="font-sans text-[11px] font-bold tracking-[0.04em] antialiased uppercase whitespace-nowrap">
                  EXPLORE OUR WORK
                </span>
                <ArrowUpRight 
                  className="w-3.5 h-3.5 text-[#1D82A6] transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ml-auto sm:ml-0" 
                  strokeWidth={2.5} 
                />
              </button>
              
              {/* Our Approach Link */}
              <button className="font-sans relative py-2 text-left text-[11px] font-bold tracking-[0.04em] text-[#1A1A1A]/80 hover:text-[#1D82A6] transition-colors duration-300 ease-out group self-start sm:self-auto uppercase cursor-pointer">
                OUR APPROACH
                <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#1D82A6] md:bg-[#1A1A1A]/80 transition-colors duration-300 group-hover:bg-[#1D82A6]" />
              </button>
              
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="hidden md:flex col-span-12 md:col-span-3 lg:col-span-4 xl:col-span-5 relative h-[calc(100vh-96px)] flex-col justify-between py-12">
            
            {/* SERVICES STACK */}
            <div className="absolute top-32 right-0 flex items-stretch gap-6">
              <div className="w-[2px] bg-black/[0.15]" />
              <div className="flex flex-col gap-2.5 justify-center">
                {services.map((service) => (
                  <span 
                    key={service} 
                    className="text-[12px] font-bold tracking-[0.15em] text-[#1A1A1A]/60"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* FIXED MICRO-COPY BOX */}
            <div className="absolute bottom-16 right-0 flex items-start gap-4 max-w-[320px] select-text">
              <div className="flex-shrink-0 w-6 h-6 rounded-full border border-[#64748B] flex items-center justify-center mt-[3px]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#64748B]" />
              </div>
              
              <div className="flex flex-col gap-0.5">
                <span className="text-[13px] font-medium text-[#64748B] tracking-[0.02em] antialiased leading-snug">
                  Systems that scale.
                </span>
                <span className="text-[13px] font-medium text-[#64748B] tracking-[0.02em] antialiased leading-snug">
                  Experiences that perform.
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}