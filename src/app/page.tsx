import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import SelectedWork from '@/components/SelectedWork';
import MeetKelsey from '@/components/MeetKelsey';
import PerformanceProof from '@/components/PerformanceProof';
import BrandsWorkedWith from '@/components/BrandsWorkedWith';
import Testimonials from '@/components/Testimonials';
import Photography from '@/components/Photography';
import Contact from '@/components/Contact';

export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="main" className="site-shell flex flex-col gap-20 md:gap-28">
        <Hero />
        <SelectedWork />
        <MeetKelsey />
        <PerformanceProof />
        <BrandsWorkedWith />
        <Testimonials />
        <Photography />
        <Contact />
      </main>
    </>
  );
}
