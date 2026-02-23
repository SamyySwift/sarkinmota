import HeroScroll from "@/components/home/HeroScroll";
import CarMorph from "@/components/home/CarMorph";
import InventorySection from "@/components/home/InventorySection";
import AICarMatch from "@/components/home/AICarMatch";
import WhySarkinMota from "@/components/home/WhySarkinMota";
import Testimonials from "@/components/home/Testimonials";
import GlobalPresence from "@/components/home/GlobalPresence";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-black">
      <HeroScroll />
      <WhySarkinMota />
      <CarMorph />
      <InventorySection />
      <AICarMatch />
      <Testimonials />
      <GlobalPresence />
      <Footer />
    </main>
  );
}
