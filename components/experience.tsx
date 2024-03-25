import Reveal from './reveal';

const ExperiencePage = () => {
  const data = [
    {
      work: 'Work From Home',
      time: 'Oct 2022- Present',
      type: 'FreeLance Frontend developer',
      technologies: [
        'Nextjs',
        'tailwind',
        'shadcn',
        'Markdown',
        'Content-layer',
        'Vercel',
      ],
      places: '',
      des: [
        'I have constructed a font download application that allows users to browse and download various typefaces, along with a canvas drawing application that enables users to create and customize artwork using a wide range of fonts, integrating the two applications to provide a seamless experience for users to discover and apply their favorite fonts to their creative projects.',
        'I built a course download application that connects with GraphQL and the Strapi dashboard. Users can easily browse and download educational courses, while the GraphQL integration ensures a smooth experience. The Strapi dashboard enables efficient content management. The application emphasizes intuitive design, error handling, and validation for a seamless user experience.',
      ],
    },
    {
      work: 'Rezeve Co.l.td',
      time: '2021 - 2022',
      type: 'Remote Frontend developer',
      technologies: [
        'Nextjs',
        'React',
        'Materail-Ui',
        'Google-Calendar schedule system',
        'Dynamic Template Web-builder',
        'AWS',
        'SEO',
        'Cookies-authenication',
        'Stripe',
        'Booking-management-system',
      ],
      places: 'Singapore-Myanmar',
      des: [
        `I have played a key role at Rezeve, a start-up company that provides a service business mangment system specializing in building booking systems and generating web pages customized for each client's domain.`,
        `Led a team of 3 engineers in developing a robust booking system, empowering businesses to efficiently manage their appointments and schedules.Developed a library of reusable UI components within Storybook, allowing for efficient collaboration and sharing of design assets across the team.Developed a comprehensive booking management system that allows businesses to efficiently schedule and manage appointments.`,
        `Incorporated features similar to Google Calendar, providing users with familiar and intuitive scheduling capabilities.
Designed and implemented a web dynamic page generation feature, allowing clients to showcase their unique brand and content on their personalized domains.`,
        `Focused on delivering visually appealing web pages that enhance user experience and align with each client's brand identity.
Collaborated closely with clients to understand their specific requirements and seamlessly integrated the generated web pages into their existing infrastructure.`,
        `
Contributed to the success of Rezeve by providing scalable and customizable solutions that enable businesses to effectively manage their bookings and present their services in an attractive and professional manner.
In summary, my work at Rezeve has centered around developing innovative booking systems and creating dynamic web pages tailored to individual client domains, ensuring a visually pleasing and cohesive online presence for businesses.`,
      ],
    },
    {
      work: 'DigitHouse.Co,LTD && NexIdea Company',
      time: '2019 - 2021',
      type: 'Frontend developer',
      technologies: [
        'Nextjs',
        'React',
        'Material UI',
        'sematic UI',
        'Multi-Shopping Mangement System',
        'AWS',
        'ThreeJS',
        '',
      ],
      places: ' Myanmar - Japan',
      des: [
        `DigitHouse and Nexidea are companies of continuous challenge and innovation with few people. The company aims to create a site-based environment that avoids complex business models, creates a simple organization and effective innovation. `,
        `Learn and built an outstanding and dynamic team of software engineers and developers which significantly boosted the overall success of the organization. Planned and engineered RESTful web services to manipulate dynamic datasets. Tested websites and performed troubleshooting prior to deployment Experience in setup and testing local Payment Platform and build multi-transaction projects. `,
        `Suggested improvements to team and project workflow. Checked client code for bugs and weaknesses using test automation tools and improved code quantity. Got to experiment with UI/UX, ThreeJs, Cypress, And Design system work flow Video Streaming, Video Player, and extreme coding.`,
        `Collaborated with the team and build the Muti-Ecommerce Shopping platform and worked closely with senior leaders. Implemented dynamics RESTFul API that handles App UI from the server side. - Initiated and Implement third-party payment systems like 2C2P, MPU, and Strip International payment.`,
        `Developed and initiated with Senior and got a lot of knowledge about JQuery,React, NextJs, Firebase, JWT, DatabaseFlow, wireframe, and information architecture concepts. `,
      ],
    },
  ];
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
              {data.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="space-y-3 border-b border-gray-500 pb-5"
                  >
                    <div className="flex justify-between  items-center">
                      <Reveal>
                        <p className="text-3xl font-semibold">{item.work}</p>
                      </Reveal>
                      <Reveal>
                        <p className="text-lg font-medium">{item.time}</p>
                      </Reveal>
                    </div>
                    <div className="flex justify-between items-center">
                      <Reveal>
                        <p className="text-gray-300 text-xl">{item.type}</p>
                      </Reveal>
                      <Reveal>{item.work}</Reveal>
                    </div>
                    <div>
                      {item.des.map((item) => {
                        return (
                          <div key={item}>
                            <Reveal>
                              <p className="text-justify">{item}</p>
                            </Reveal>
                          </div>
                        );
                      })}
                    </div>
                    <div>
                      <ul className="flex  flex-wrap items-center mt-3 gap-3">
                        {item.technologies.map((v) => {
                          return (
                            <Reveal key={v}>
                              <li className="bg-gray-900 rounded-lg px-2 shadow-lg text-center capitalize py-1">
                                {v}
                              </li>
                            </Reveal>
                          );
                        })}
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
