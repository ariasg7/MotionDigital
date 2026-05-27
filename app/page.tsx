import { Navigation } from "../components/navigation";
import { Hero } from "../components/hero";
import { TrustedSection } from "../components/trusted";
import { WaveNodesSection } from "../components/service-wave";
import { ProcessSection } from "../components/process";
import  CaseStudies from "../components/casestudies";

import  Challenge  from "../components/challenge"
import Pillars from "../components/pillars";
import About from "../components/about";
import FAQ from "../components/faq";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#FAF9F5] antialiased selection:bg-[#1D82A6]/20 selection:text-[#1A1A1A]">
      {/* Global Fixed Navigation */}
      <Navigation />

      {/* Main Page Layout Stack */}
      <main className="relative flex flex-col w-full">
        {/* Full-Screen Hero Viewport */}
        <Hero />

        < Challenge />
        {/* High-Contrast Premium Metrics & Brand Social Proof */}
        <TrustedSection />
        <WaveNodesSection/>
        <Pillars/>
        <About/>
        <FAQ/>
        <ProcessSection/>
        <CaseStudies />
        <Footer />
      </main>
    </div>
  );
}