import Reveal from './reveal';

const HeroSection = () => {
  return (
    <div
      id="hero"
      className="relative scroll-snap min-h-screen z-10 flex  items-center"
    >
      <div className="intro-section flex md: flex-row-reverse flex-col w-full h-full justify-center items-center gap-30">
        <div className="intro-image">
          <img src="/profile.png" height={400} width={400} alt="profile" />
        </div>

        <div className="intro-title px-6">
          <Reveal>
            <h3 className="text-3xl uppercase text-gray-300">Hey There!</h3>
          </Reveal>
          <Reveal>
            <h1 className="text-4xl uppercase">{`I'm Shwe Pyi Hein.`}</h1>
          </Reveal>
          <Reveal>
            <p className="text-lg text-gray-400 max-w-[500px]">{` I'm a senior FrontEnd developer with a passion for everything about programming. Welcome to my corner of the Internet.`}</p>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
