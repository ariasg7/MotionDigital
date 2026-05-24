import { Activity, Clock, TrendingUp, Users } from "lucide-react";

export function TrustedSection() {
  const partnerLogos = ["Linear", "Brex", "Webflow", "Vercel", "Zapier", "Ramp"];
  
  const metrics = [
    { icon: Activity, stat: "98%", label: "PERFORMANCE SCORE", description: "Average across projects" },
    { icon: Clock, stat: "2.4s", label: "AVERAGE LOAD TIME", description: "Faster experiences" },
    { icon: TrendingUp, stat: "250+", label: "PROJECTS DELIVERED", description: "Across industries" },
    { icon: Users, stat: "100%", label: "CLIENT FOCUS", description: "Long-term partnerships" }
  ];

  return (
    <section className="w-full bg-[#0A111A] pt-16 lg:pt-24 pb-12 lg:pb-16 select-none font-sans">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20">
        
        {/* Trusted By Header & Client Logos */}
        <div className="text-center">
          <p className="text-[10px] lg:text-[11px] font-bold tracking-[0.45em] text-[#1D82A6] mb-6 lg:mb-8 antialiased uppercase opacity-90">
            Trusted by ambitious brands
          </p>

          {/* Full-width continuous border wrapper */}
          <div className="w-full border-b border-white/[0.05] flex flex-wrap lg:flex-nowrap items-center justify-center gap-y-6 pt-2 pb-8 lg:pb-10">
            {partnerLogos.map((logo, index) => (
              <div 
                key={logo} 
                className="w-1/2 sm:w-1/3 lg:flex-1 flex items-center justify-center relative"
              >
                <span className="text-[18px] lg:text-[23px] font-bold text-white/90 tracking-tight antialiased">
                  {logo}
                </span>
                {/* Subtle vertical logo split lines */}
                {index < partnerLogos.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-5 w-[1px] bg-white/[0.06]" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Performance Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full items-center mt-8 lg:mt-12 gap-y-8 sm:gap-y-12 lg:gap-y-0">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div 
                key={index} 
                className={`flex items-start justify-center gap-5 py-4 px-4 lg:px-6 relative w-full
                  ${index < metrics.length - 1 ? 'border-b border-white/[0.03] sm:border-b-0 pb-8 sm:pb-4' : ''}
                `}
              >
                {/* Vertical Separator */}
                {index < metrics.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-14 w-[1px] bg-white/[0.04]" />
                )}
                
                {/* Mid-screen Separator */}
                {index % 2 === 0 && (
                  <div className="hidden sm:block lg:hidden absolute right-0 top-1/2 -translate-y-1/2 h-14 w-[1px] bg-white/[0.04]" />
                )}

                {/* Circular Icon Container */}
                <div className="w-11 h-11 rounded-full border border-white/[0.06] flex items-center justify-center flex-shrink-0 mt-1 bg-white/[0.01]">
                  <Icon className="w-4 h-4 text-white/40" strokeWidth={1.25} />
                </div>

                {/* Text Stack */}
                <div className="flex flex-col min-w-[155px]">
                  {/* Metric Number Display */}
                  <div className="text-[34px] lg:text-[38px] font-extralight text-white/90 tracking-tight leading-none antialiased">
                    {metric.stat}
                  </div>
                  {/* Metric Categorization Label */}
                  <div className="text-[9px] font-bold tracking-[0.16em] text-white/30 uppercase mt-2.5 antialiased">
                    {metric.label}
                  </div>
                  {/* Explanatory description subtext */}
                  <div className="text-[12px] text-white/30 tracking-normal normal-case mt-0.5 antialiased font-light">
                    {metric.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Scroll to Discover Footer Element */}
        <div className="flex flex-col items-center mt-16 lg:mt-24 gap-4">
          <span className="text-[10px] font-bold tracking-[0.3em] text-[#1D82A6] uppercase antialiased opacity-80">
            Scroll to discover
          </span>
          <div className="w-[1px] h-10 bg-white/15 relative">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white/80" />
          </div>
        </div>

      </div>
    </section>
  );
}