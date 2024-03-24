import Reveal from './reveal';

const ExperiencePage = () => {
  return (
    <div
      id="experience"
      className="relative min-h-screen scroll-snap z-10 py-20  px-5 md:px-0 "
    >
      <div className="max-w-screen-lg mx-auto">
        <div>
          <div className="grid grid-cols-10 gap-3 relative">
            <div className="w-full col-span-6 md:col-span-6 border-t mt-4    md:mt-10 "></div>
            <div className="col-span-4 ">
              <Reveal width="100%">
                <h2 className="md:text-7xl text-2xl font-bold">Experience.</h2>
              </Reveal>
            </div>
          </div>

          <div className="mt-8">
            <div className="px-3 space-y-10">
              {[1, 2, 3].map((item) => {
                return (
                  <div
                    key={item}
                    className="space-y-3 border-b border-gray-500 pb-5"
                  >
                    <div className="flex justify-between  items-center">
                      <Reveal>
                        <p className="text-3xl font-semibold">Google</p>
                      </Reveal>
                      <Reveal>
                        <p className="text-lg font-medium">{`2012  -  Persent`}</p>
                      </Reveal>
                    </div>
                    <div className="flex justify-between items-center">
                      <Reveal>
                        <p className="text-gray-300 text-xl">
                          Front-End developer
                        </p>
                      </Reveal>
                      <Reveal>Myanmar</Reveal>
                    </div>
                    <div>
                      <Reveal>
                        <p>
                          I help build and scale Google Photos. Increased
                          throughput of our primary services by 70%. Migrated
                          backend service from Java to Go. Also helped make it
                          look prettier.
                        </p>
                      </Reveal>
                    </div>
                    <div>
                      <ul className="flex  flex-wrap items-center mt-3 gap-3">
                        <Reveal>
                          <li className="bg-gray-900 rounded-lg px-2 shadow-lg text-center py-1">
                            JavaScript
                          </li>
                        </Reveal>
                        <li className="bg-gray-900 rounded-lg px-2 shadow-lg text-center py-1">
                          TypeScript
                        </li>
                        <li className="bg-gray-900 rounded-lg px-2 shadow-lg text-center py-1">
                          React
                        </li>
                        <li className="bg-gray-900 rounded-lg px-2 shadow-lg text-center py-1">
                          NextJS
                        </li>
                        <li className="bg-gray-900 rounded-lg px-2 shadow-lg text-center py-1">
                          HTML
                        </li>
                        <li className="bg-gray-900 rounded-lg px-2 shadow-lg text-center py-1">
                          CSS/SASS
                        </li>
                        <li className="bg-gray-900 rounded-lg px-2 shadow-lg text-center py-1">
                          NestJS
                        </li>
                        <li className="bg-gray-900 rounded-lg px-2 shadow-lg text-center py-1">
                          Postgres
                        </li>
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
