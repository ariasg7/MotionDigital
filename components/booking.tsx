"use client";
import React, { useEffect } from 'react';

const Booking = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section 
      className="relative pt-24 md:pt-28 pb-20 px-6 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/img/book/booking_img.png')" }} 
    >
      <div className="absolute inset-0 bg-[#0F141C]/80 z-0"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Added h-[600px] to constrain the card height on desktop */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-0 md:p-4 border border-[#1A1A1A]/5 h-auto md:h-[650px] flex items-center">
          
          <iframe 
            src="https://api.leadconnectorhq.com/widget/booking/8SSr2CSrEUttcLrCZPQm" 
            data-layout='{"id":"INLINE"}'
            // We force the iframe to fill the container defined above
            style={{ width: "100%", height: "100%", border: "none" }}
            scrolling="yes" 
            id="8SSr2CSrEUttcLrCZPQm_1781234702162"
            title="Schedule Discovery Call"
          />
        </div>
      </div>
    </section>
  );
};

export default Booking;