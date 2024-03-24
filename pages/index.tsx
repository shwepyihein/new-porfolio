import { AuroraBackground } from '@/components/AuroraBackground';
import ScrollSection from '@/components/ScrollSection';
import About from '@/components/about';
import ContactUs from '@/components/contact';
import CustomCursor from '@/components/customCursor';
import ExperiencePage from '@/components/experience';
import HeroSection from '@/components/heroSection';

export default function Home() {
  return (
    <div className="wrapper">
      <CustomCursor />
      <AuroraBackground />
      <HeroSection />
      <About />
      <ExperiencePage />
      <ScrollSection />
      <ContactUs />
    </div>
  );
}
