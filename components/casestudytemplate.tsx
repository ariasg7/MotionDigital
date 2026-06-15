import { CaseStudy } from "@/data/caseStudies";
import Image from "next/image";

export default function CaseStudyTemplate({ study }: { study: CaseStudy }) {
  return (
    <article className="w-full px-4 py-8 md:max-w-6xl md:mx-auto md:py-20">
      {/* Mobile-first Header */}
      <header className="text-center mb-12 space-y-4">
        <div className="inline-block px-3 py-1 rounded-full bg-[#D4A373]/10 border border-[#D4A373]/20 text-[#D4A373] text-[10px] font-bold tracking-widest uppercase">
          {study.categoryLabel}
        </div>
        <h1 className="text-3xl md:text-7xl font-bold text-gray-900 tracking-tight leading-tight">
          {study.title}
        </h1>
        <p className="text-lg text-gray-500 italic">{study.clientName}</p>
      </header>

      {/* Hero Image - Maintains aspect ratio on mobile */}
      <div className="relative w-full h-[250px] md:h-[500px] mb-12 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl">
        <Image src={study.image} alt={study.title} fill className="object-cover" priority />
      </div>

      {/* Metrics Bar - Grid adapts from 1 col on mobile to 3 on desktop */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {study.metrics.map((metric, i) => (
          <div key={i} className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#D4A373] mb-1">{metric.value}</div>
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{metric.label}</div>
          </div>
        ))}
      </section>

      {/* Content Grid */}
      <div className="grid md:grid-cols-12 gap-8 md:gap-16">
        
        {/* Sidebar Info - Moved above content on mobile */}
        <aside className="md:col-span-4 order-first md:order-last">
          <div className="bg-gray-900 p-6 md:p-8 rounded-2xl md:rounded-3xl text-white md:sticky md:top-24">
            <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6">Project Details</h4>
            <div className="space-y-4">
              <InfoRow label="Client" value={study.metadata.client} />
              <InfoRow label="Services" value={study.metadata.services} />
              <InfoRow label="Year" value={study.metadata.year.toString()} />
              <InfoRow label="Timeline" value={study.timeframe} />
            </div>
          </div>
        </aside>

        {/* Main Body */}
        <main className="md:col-span-8 space-y-12 md:space-y-20 order-last">
          <section className="text-xl md:text-2xl leading-relaxed text-gray-700 font-light italic">
            "{study.metadata.whatWeDidSummary}"
          </section>

          <section>
            <h2 className="text-[10px] font-bold uppercase tracking-widest text-[#D4A373] mb-4">The Challenge</h2>
            <p className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">{study.fullStory.objective.problem}</p>
            <p className="text-md md:text-lg text-gray-600 leading-relaxed">{study.fullStory.objective.context}</p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProcessCard title="Creative Process" items={study.fullStory.creativeProcess} />
            <ProcessCard title="Execution" items={study.fullStory.whatWeDid} />
          </section>

          <section className="bg-[#D4A373]/5 p-8 md:p-12 rounded-2xl md:rounded-3xl border border-[#D4A373]/10">
            <h2 className="text-[#D4A373] font-bold uppercase tracking-widest text-[10px] mb-3">Conclusion</h2>
            <p className="text-xl md:text-2xl font-medium text-gray-900 leading-tight">{study.fullStory.conclusion}</p>
          </section>
        </main>
      </div>
    </article>
  );
}

function InfoRow({ label, value }: { label: string, value: string }) {
  return (
    <div className="border-b border-gray-800 pb-3">
      <p className="text-gray-500 text-[10px] uppercase tracking-wider mb-1">{label}</p>
      <p className="font-medium text-sm">{value}</p>
    </div>
  );
}

function ProcessCard({ title, items }: { title: string, items: string[] }) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
      <h3 className="font-bold text-sm mb-4 text-gray-900">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="text-gray-600 text-xs flex items-center">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4A373] mr-3 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}