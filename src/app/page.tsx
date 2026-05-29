import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import VideoShowcase from '@/components/VideoShowcase';
import Testimonials from '@/components/Testimonials';
import UGCPhotos from '@/components/UGCPhotos';
import About from '@/components/About';
import Contact from '@/components/Contact';

export default function HomePage() {
  return (
    <>
      <Nav />
      <main
        className="flex flex-col"
        style={{
          background: "linear-gradient(180deg, #e8dcc8 0%, #ede4d3 40%, #e8dcc8 100%)",
        }}
      >
        <Hero />

        <div className="flex flex-col gap-[100px] md:gap-[130px] py-[100px] md:py-[130px]">
          <VideoShowcase />
        </div>

        <Testimonials />

        <div className="flex flex-col gap-[100px] md:gap-[130px] py-[100px] md:py-[130px]">
          <UGCPhotos />
          <About />
        </div>

        <Contact />
      </main>
    </>
  );
}