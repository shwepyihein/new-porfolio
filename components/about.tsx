import Reveal from './reveal';

const About = () => {
  const technologies = [
    'HTML/CSS3',
    'JavaScript',
    'React',
    'Nextjs',
    'Typescript',
    'vite',
    'GraphQL',
    'Nestjs',
    'strapi',
    'Cypress',
    'unit-testing',
    'ui-testing',
    'jest',
    'Git',
  ];

  const useForFun = [
    'ThreeJS',
    'retool',
    'tailwind',
    'material ui',
    'shadcn',
    'shopee',
    'framer-motion',
  ];
  return (
    <div
      id="about"
      className="relative min-h-screen scroll-snap z-10 py-20  px-5 md:px-0 "
    >
      <div className="max-w-screen-lg mx-auto">
        <div>
          <div className="grid grid-cols-8 md:gap-3 relative">
            <div className="md:file:col-span-2 col-span-3">
              <Reveal width="100%">
                <h2 className="md:text-7xl  text-3xl font-bold">About.</h2>
              </Reveal>
            </div>
            <div className="w-full col-span-5  md:col-span-6 border-t md:mt-10 mt-5"></div>
          </div>

          <div className="mt-8">
            <div className=" grid grid-cols-12 ">
              <div className="md:col-span-7 col-span-12 space-y-3">
                <Reveal>
                  <p className="md:text-2xl text-md text-pretty ">
                    <span className="bg-gray-800 py-2 px-2 mr-4">Hey!</span>I am
                    experience developer who constantly seeks out innovation
                    solutions to every problems and worked at both product-based
                    startup and service-based software company
                  </p>
                </Reveal>
                <Reveal>
                  <p className="md:text-2xl text-md text-pretty ">
                    My commitment to critical thinking and attention to detail
                    have gotten me to where I am today. I love building things,
                    writes and debugs coding, solves problems, and also
                    passionate about design, startups, and technology.
                  </p>
                </Reveal>
                <Reveal>
                  <p className="md:text-2xl text-md text-pretty ">
                    I create websites, devise solutions, and play with Sketch
                    learning about design.
                  </p>
                </Reveal>
              </div>
              <div className="col-span-1 hidden md:block"></div>
              <div className="md:col-span-4 mt-5 md:mt-0 col-span-12 space-y-5">
                <Reveal>
                  <div className="flex gap-2 items-center">
                    <svg
                      stroke="#fff"
                      fill="#fff"
                      strokeWidth="0"
                      viewBox="0 0 1024 1024"
                      height="2.4rem"
                      width="2.4rem"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM513.1 518.1l-192 161c-5.2 4.4-13.1.7-13.1-6.1v-62.7c0-2.3 1.1-4.6 2.9-6.1L420.7 512l-109.8-92.2a7.63 7.63 0 0 1-2.9-6.1V351c0-6.8 7.9-10.5 13.1-6.1l192 160.9c3.9 3.2 3.9 9.1 0 12.3zM716 673c0 4.4-3.4 8-7.5 8h-185c-4.1 0-7.5-3.6-7.5-8v-48c0-4.4 3.4-8 7.5-8h185c4.1 0 7.5 3.6 7.5 8v48z"></path>
                    </svg>
                    <p>Use At work</p>
                  </div>
                  <ul className="grid grid-cols-3 mt-3 gap-3">
                    {technologies.map((item) => {
                      return (
                        <li
                          key={item}
                          className="bg-gray-900 truncate border-opacity-25 border-gray-100 border rounded-lg px-2 shadow-lg text-center py-1  capitalize"
                        >
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </Reveal>
                <Reveal>
                  <div className="flex gap-2 items-center">
                    <svg
                      stroke="#fff"
                      fill="#fff"
                      strokeWidth="0"
                      viewBox="0 0 1024 1024"
                      height="2.4rem"
                      width="2.4rem"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM513.1 518.1l-192 161c-5.2 4.4-13.1.7-13.1-6.1v-62.7c0-2.3 1.1-4.6 2.9-6.1L420.7 512l-109.8-92.2a7.63 7.63 0 0 1-2.9-6.1V351c0-6.8 7.9-10.5 13.1-6.1l192 160.9c3.9 3.2 3.9 9.1 0 12.3zM716 673c0 4.4-3.4 8-7.5 8h-185c-4.1 0-7.5-3.6-7.5-8v-48c0-4.4 3.4-8 7.5-8h185c4.1 0 7.5 3.6 7.5 8v48z"></path>
                    </svg>
                    <p>Use For Fun</p>
                  </div>
                  <ul className="grid grid-cols-3 mt-3 gap-3">
                    {useForFun.map((item) => {
                      if (item === 'framer-motion') {
                        return (
                          <li
                            key={item}
                            className="bg-gray-900 border border-opacity-25 border-gray-100 col-span-2 rounded-lg px-2 shadow-lg text-center py-1  capitalize"
                          >
                            {item}
                          </li>
                        );
                      }
                      return (
                        <li
                          key={item}
                          className="bg-gray-900 border border-opacity-25 border-gray-100 rounded-lg px-2 shadow-lg text-center py-1  capitalize"
                        >
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
