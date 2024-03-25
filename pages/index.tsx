import { AuroraBackground } from '@/components/AuroraBackground';
import ScrollSection from '@/components/ScrollSection';
import About from '@/components/about';
import ContactUs from '@/components/contact';
import CustomCursor from '@/components/customCursor';
import ExperiencePage from '@/components/experience';
import HeroSection from '@/components/heroSection';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="wrapper">
      <Head>
        <title>Shwe Pyi Hein | Web developer</title>
        <link rel="icon" href="/profile.png" sizes="16x16" />
        <meta name="title" content="Shwe pyi hein | Web developer" />
        <meta
          name="description"
          content=" I'm a Web developer with a passion for everything about programming. Welcome to my corner of the Internet."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.shwepyihein.me/" />
        <meta property="og:title" content="Shwe pyi hein | Web developer" />
        <meta
          property="og:description"
          content=" I'm a senior FrontEnd developer with a passion for everything about programming. Welcome to my corner of the Internet."
        />
        <meta property="og:image" content="/profile.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.shwepyihein.me/" />
        <meta
          property="twitter:title"
          content="Shwe pyi hein | Web developer"
        />
        <meta
          property="twitter:description"
          content=" I'm a senior FrontEnd developer with a passion for everything about programming. Welcome to my corner of the Internet."
        />
        <meta property="twitter:image" content="/profile.png" />
      </Head>
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
