import { Navigation } from '../../components/navigation';
import { CaseStudiesGallery } from '../../components/casestudiesgallery';
import Footer from '../../components/footer';

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <CaseStudiesGallery />
      <Footer />
    </main>
  );
}