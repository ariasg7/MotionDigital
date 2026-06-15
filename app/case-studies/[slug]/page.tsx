import { notFound } from "next/navigation";
import { caseStudies } from "@/data/caseStudies";
import { Navigation } from "@/components/navigation"; 
import Footer from "@/components/footer"; 
import CaseStudyTemplate from "@/components/casestudytemplate"; 

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.slug === slug);
  
  if (!study) notFound();

  return (
    <div className="flex flex-col w-full">
      <Navigation /> 
      <main className="flex-grow w-full bg-[#FAF9F5]">
        {/* Pass the data to the beautiful template */}
        <CaseStudyTemplate study={study} />
      </main>
      <Footer />
    </div>
  );
}