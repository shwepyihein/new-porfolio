/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import { useEffect, useRef } from 'react';
import { GithubLinks, WebLinks } from './githubLink';
import Reveal from './reveal';

const images = [
  {
    src: '/projects/mmfonts.png',
    title: 'MM Fonts Hub',
    subtitle: 'React - Nextjs - Tailwindjs - Content-layer - Vercel ',
    category: [
      `Burmese Fonts Collection is Myanmar's leading online platform for fonts specifically catering to the needs of the Myanmar community. Our website is half designed, graphic design; We offer a collection of the best high-quality fonts for various projects, carefully selected for branding and other projects. `,
      `All Unicode fonts, Zawji fonts, and Win fonts can be found and used conveniently in one place. Whether you're a professional designer or an enthusiast, Myanmar Fonts Collection provides the perfect resource to promote your creative projects and express your unique style in Myanmar.`,
    ],
    href: '',
    source: 'https://www.mmfontshub.com/',
  },
  {
    src: '/projects/mmstoryhub.png',
    title: 'MM Story Hub',
    subtitle: 'NextJs- MarkDown - Nestjs - Neondb',
    category: [
      `The platform will provide unrestricted access to an extensive library of Myanmar novels. It's not limited to just access, readers will have the opportunity to immerse themselves in the rich tapestry of riveting narratives, compelling characters, and diverse settings that make Myanmar novels so captivating and unique.`,
      `Moreover, the platform will foster a sense of community among its users. It will serve as a hub for lively discussions, exchange of thoughts, and sharing of interpretations related to the novels. Readers will be able to interact with each other, share their love for Myanmar literature, and deepen their understanding of the texts.`,
    ],
    href: '',
    source: 'https://www.mmfontshub.com/',
  },
  {
    src: '/projects/canvasEditor.png',
    title: 'Canvas Editor',
    subtitle: 'React - Nextjs - Tailwindjs - Konvas - Vercel ',
    category: [
      ` 🎨 This innovative tool provides the opportunity to express your
        creativity and design eye-catching visuals. The application allows you
        to upload images, providing a base for your design. But that's just the
        beginning. You can enhance these images by combining them with a variety
        of fonts, allowing you to add text that complements your visual content.`,
      `
        Furthermore, you can choose from a wide array of colors to make your
        designs vibrant and visually appealing. In essence, the Canvas Story
        Drawing application is a comprehensive design tool that empowers you to
        create your own unique designs. Whether you're a professional designer,
        a digital artist, or someone who simply enjoys creating, this
        application has something to offer you.`,
    ],
    href: 'https://github.com/shwepyihein/story-canvas-eidtor',
    source: 'https://story-canvas-eidtor.vercel.app/',
  },
  {
    src: '/projects/recipe.png',
    title: 'Recipe CRUD',
    subtitle: 'NextJs - Nodejs - Postgres - neondb - render',
    category: [
      `
        🔧 It's a recipe website that is integrated with a Node.js backend. This
        innovative combination will enhance the website's functionality by
        allowing dynamic content updates. It means that the content of the
        website will change dynamically based on the input or behavior of its
        users.`,
      `Furthermore, the integration with Node.js backend will also
        facilitate user interactions. Users will be able to interact with the
        website in real-time, making the user experience more engaging and
        interactive. This project represents an exciting blend of web
        development and real-time user engagement.
     `,
    ],
    href: 'https://github.com/shwepyihein/Recipe-repo',
    source: 'https://recipe-repo.vercel.app/',
  },
];

function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  const ref = useRef(null);
  const isInView = useInView(ref);
  const secondRef = useRef(null);
  const secondInView = useInView(secondRef);
  const thirdRef = useRef(null);
  const thirdInView = useInView(thirdRef);
  const fourthRef = useRef(null);
  const fourthInView = useInView(fourthRef);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let sections = gsap.utils.toArray('.scroll-section');
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: '-300vw',
        ease: 'none',
        duration: 2,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top top',
          end: '2000 top',
          scrub: 0.6,
          pin: true,
          //   snap: 1 / (sections.length - 1),
        },
      }
    );
    return () => {
      {
        /* A return function for killing the animation on component unmount */
      }
      pin.kill();
    };
  }, []);

  const secondData = {
    visable: { opacity: 0, y: 200, x: 0 },
    hidden: { opacity: 1, y: 0, x: 0 },
  };

  return (
    <section id="projects" className="scroll-section-outer ">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner ">
          <div className="scroll-section  max-w-screen-xl mx-auto">
            <div className={classNames('gallery-item-wrapper')}>
              <div
                className={
                  'relative inner grid md:grid-cols-12 grid-cols-1 h-full  md:gap-20 gap-5 px-5 md:px-0'
                }
              >
                <motion.div
                  initial="hidden"
                  variants={secondData}
                  className="md:col-span-4 col-span-1"
                  animate={isInView ? 'hidden' : 'visable'}
                  transition={{ duration: 0.2 }}
                  ref={ref}
                >
                  <div className="gallery-item-info space-y-4">
                    <Reveal>
                      <h1 className="text-[50px] truncate">
                        {images[0].title}
                      </h1>
                    </Reveal>
                    <Reveal>
                      <h2 className="gallery-info-subtitle text-cyan-100">
                        {images[0].subtitle}
                      </h2>
                    </Reveal>
                    {images[0].category.map((item) => (
                      <Reveal key={item}>
                        <p className="gallery-info-category">{item}</p>
                      </Reveal>
                    ))}
                    <div className="space-y-3  items-center h-[30px] gap-5">
                      {images[0].href && (
                        <Reveal>
                          <GithubLinks href={images[0].href} />
                        </Reveal>
                      )}
                      {images[0].source && (
                        <Reveal>
                          <WebLinks href={images[0].source} />
                        </Reveal>
                      )}
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial="hidden"
                  className="mx-auto md:col-span-8 col-span-1"
                  variants={secondData}
                  animate={isInView ? 'hidden' : 'visable'}
                  transition={{ duration: 0.2, type: 'spring', stiffness: 100 }}
                  ref={ref}
                >
                  <img
                    alt="logo"
                    className="w-full rounded-2xl max-w-screen-lg  shadow border h-full"
                    src={images[0].src}
                  />
                </motion.div>
              </div>
            </div>
          </div>

          <div className="scroll-section  max-w-screen-xl mx-auto">
            <div className={classNames('gallery-item-wrapper')}>
              <div
                className={
                  'relative inner grid md:grid-cols-12 grid-cols-1 h-full  md:gap-20 gap-5 px-5 md:px-0'
                }
              >
                <div className="gallery-item-info md:col-span-4 col-span-1">
                  <Reveal>
                    <h1 className="gallery-info-title">{images[1].title}</h1>
                  </Reveal>
                  <Reveal>
                    <h2 className="gallery-info-subtitle">
                      {images[1].subtitle}
                    </h2>
                  </Reveal>
                  {images[0].category.map((item) => (
                    <Reveal key={item}>
                      <p className="gallery-info-category">{item}</p>
                    </Reveal>
                  ))}
                  <div className="space-y-3  items-center h-[30px] gap-5">
                    {images[1].href && (
                      <Reveal>
                        <GithubLinks href={images[1].href} />
                      </Reveal>
                    )}
                    {images[1].source && (
                      <Reveal>
                        <WebLinks href={images[1].source} />
                      </Reveal>
                    )}
                  </div>
                </div>
                <motion.div
                  initial="hidden"
                  className=" md:col-span-8 col-span-1"
                  variants={secondData}
                  animate={secondInView ? 'hidden' : 'visable'}
                  transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
                  ref={secondRef}
                >
                  <img
                    alt="logo"
                    className="w-full rounded-2xl max-w-screen-lg  shadow border h-full"
                    src={images[1].src}
                  />
                </motion.div>
              </div>
            </div>
          </div>
          <div className="scroll-section  max-w-screen-xl mx-auto">
            <div className={classNames('gallery-item-wrapper')}>
              <div
                className={
                  'relative inner grid md:grid-cols-12 grid-cols-1 h-full  md:gap-20 gap-5 px-5 md:px-0'
                }
              >
                <div className="gallery-item-info md:col-span-4 col-span-1">
                  <Reveal>
                    <h1 className="gallery-info-title truncate text-[40px]">
                      {images[2].title}
                    </h1>
                  </Reveal>
                  <Reveal>
                    <h2 className="gallery-info-subtitle">
                      {images[2].subtitle}
                    </h2>
                  </Reveal>
                  <Reveal>
                    <p className="gallery-info-category">
                      {images[2].category}
                    </p>
                  </Reveal>
                  <div className="space-y-3  items-center h-[30px] gap-5">
                    {images[2].href && (
                      <Reveal>
                        <GithubLinks href={images[2].href} />
                      </Reveal>
                    )}
                    {images[2].source && (
                      <Reveal>
                        <WebLinks href={images[2].source} />
                      </Reveal>
                    )}
                  </div>
                </div>
                <motion.div
                  initial="hidden"
                  className="col-span-1 md:col-span-8"
                  variants={secondData}
                  animate={thirdInView ? 'hidden' : 'visable'}
                  transition={{ duration: 0.2, delay: 0.3 }}
                  ref={thirdRef}
                >
                  <img
                    alt="logo"
                    className="w-full rounded-2xl max-w-screen-lg  shadow border h-full"
                    src={images[2].src}
                  />
                </motion.div>
              </div>
            </div>
          </div>
          <div className="scroll-section  max-w-screen-xl mx-auto">
            <div className={classNames('gallery-item-wrapper')}>
              <div
                className={
                  'relative inner grid md:grid-cols-12 grid-cols-1 h-full  md:gap-20 gap-5 px-5 md:px-0'
                }
              >
                <div className="gallery-item-info md:col-span-4 col-span-1">
                  <Reveal>
                    <h1 className="gallery-info-title text-[50px]">
                      {images[3].title}
                    </h1>
                  </Reveal>
                  <Reveal>
                    <h2 className="gallery-info-subtitle">
                      {images[3].subtitle}
                    </h2>
                  </Reveal>
                  <Reveal>
                    <p className="gallery-info-category">
                      {images[3].category}
                    </p>
                  </Reveal>
                  <div className="space-y-3  items-center h-[30px] gap-5">
                    {images[3].href && (
                      <Reveal>
                        <GithubLinks href={images[3].href} />
                      </Reveal>
                    )}
                    {images[3].source && (
                      <Reveal>
                        <WebLinks href={images[3].source} />
                      </Reveal>
                    )}
                  </div>
                </div>
                <motion.div
                  initial="hidden"
                  className="md:col-span-8 col-span-1 mx-auto"
                  variants={secondData}
                  animate={fourthInView ? 'hidden' : 'visable'}
                  transition={{ duration: 0.2, delay: 0.3 }}
                  ref={fourthRef}
                >
                  <img
                    alt="logo"
                    className="w-full rounded-2xl max-w-screen-lg  shadow border h-full"
                    src={images[3].src}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;
