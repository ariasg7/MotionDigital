import { CaseStudy } from "@/data/caseStudies";
import Image from "next/image";
import Link from "next/link";

export default function CaseStudyTemplate({ study }: { study: CaseStudy }) {
  return (
    <article className="w-full px-4 py-8 md:max-w-6xl md:mx-auto md:py-20 bg-white text-gray-900 overflow-x-hidden">
      {/* Mobile-first Header */}
      <header className="text-center mb-8 md:mb-12 space-y-3 md:space-y-4">
        <div className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 text-[10px] font-bold tracking-widest uppercase">
          {study.categoryLabel}
        </div>
        <h1 className="text-2xl sm:text-4xl md:text-7xl font-bold tracking-tight leading-tight text-gray-900 break-words px-2">
          {study.title}
        </h1>
        <p className="text-base md:text-lg text-gray-500 italic">{study.clientName}</p>
      </header>

      {/* Hero Image - Responsive height with optimized touch loading */}
      <div className="relative w-full h-[220px] sm:h-[350px] md:h-[500px] mb-8 md:mb-12 rounded-xl md:rounded-3xl overflow-hidden shadow-xl border border-gray-100">
        <Image src={study.image} alt={study.title} fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 1152px" />
      </div>

      {/* Metrics Bar - Stacked on tiny mobile, 3 columns on tablet/desktop */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
        {study.metrics.map((metric, i) => (
          <div key={i} className="p-5 md:p-6 bg-white rounded-2xl border border-gray-100 shadow-sm text-center">
            <div className="text-2xl md:text-4xl font-bold text-cyan-600 mb-1">{metric.value}</div>
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{metric.label}</div>
          </div>
        ))}
      </section>

      {/* Content Grid */}
      <div className="grid md:grid-cols-12 gap-8 md:gap-16">
        
        {/* Sidebar Info - Positioned cleanly on mobile and sticky on desktop */}
        <aside className="md:col-span-4 order-first md:order-last">
          <div className="bg-gray-900 p-6 md:p-8 rounded-2xl md:rounded-3xl text-white md:sticky md:top-24 space-y-6 shadow-lg">
            <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Project Details</h4>
            
            <div className="space-y-4">
              <InfoRow label="Client" value={study.metadata.client} />
              <InfoRow label="Services" value={study.metadata.services} />
              <InfoRow label="Year" value={study.metadata.year.toString()} />
              <InfoRow label="Timeline" value={study.timeframe} />
            </div>

            {/* Live Client Website Action Link */}
            {study.websiteUrl && (
              <div className="pt-4 border-t border-gray-800">
                <Link
                  href={study.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full py-3 px-4 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl text-xs font-semibold tracking-wide uppercase transition-all shadow-md active:scale-95"
                >
                  Visit Live Site &rarr;
                </Link>
              </div>
            )}
          </div>
        </aside>

        {/* Main Body */}
        <main className="md:col-span-8 space-y-10 md:space-y-20 order-last">
          <section className="text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-700 font-light italic border-l-2 border-cyan-600 pl-4 md:pl-6 py-2">
            "{study.metadata.whatWeDidSummary}"
          </section>

          <section className="space-y-3">
            <h2 className="text-[10px] font-bold uppercase tracking-widest text-cyan-600">The Challenge</h2>
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 leading-snug">{study.fullStory.objective.problem}</p>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">{study.fullStory.objective.context}</p>
          </section>

          <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            <ProcessCard title="Creative Process" items={study.fullStory.creativeProcess} />
            <ProcessCard title="Execution" items={study.fullStory.whatWeDid} />
          </section>

          <section className="bg-cyan-500/5 p-6 sm:p-8 md:p-12 rounded-2xl md:rounded-3xl border border-cyan-500/10 space-y-3">
            <h2 className="text-cyan-600 font-bold uppercase tracking-widest text-[10px]">Conclusion</h2>
            <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-905 leading-snug">{study.fullStory.conclusion}</p>
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
      <p className="font-medium text-sm break-words">{value}</p>
    </div>
  );
}

function ProcessCard({ title, items }: { title: string, items: string[] }) {
  return (
    <div className="bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-sm h-full">
      <h3 className="font-bold text-sm mb-3 md:mb-4 text-gray-900">{title}</h3>
      <ul className="space-y-2.5 md:space-y-3">
        {items.map((item, i) => (
          <li key={i} className="text-gray-600 text-xs flex items-start leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-3 mt-1.5 shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}