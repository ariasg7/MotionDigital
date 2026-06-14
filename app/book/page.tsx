import { Navigation } from '../../components/navigation';
import Booking from '../../components/booking'
import Footer from '../../components/footer';

export default function BookingPage() {
  return (
    <main className="bg-[#F5F2ED] min-h-screen">
      <Navigation />
    <Booking />
    <Footer/>
    </main>
  );
}