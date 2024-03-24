/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import { useEffect, useRef } from 'react';
import Reveal from './reveal';

const images = [
  {
    src: '/projects/mmstory.png',
    title: 'MMFONTSHUB',
    subtitle: 'Using React, Nextjs, Tailwindjs,',
    category: 'Font Download Application',
  },
  {
    src: '/projects/canvasEditor.png',
    title: 'Canvas Editor',
    subtitle: 'Using Nextjs,Konvas',
    category: 'Canvas Edition Application',
  },
  {
    src: '/projects/recipe.png',
    title: 'Recipe CRUD ',
    subtitle: 'Live the Beauty',
    category: 'Shooting / Adv.Campaing',
  },
  {
    src: 'https://images.unsplash.com/photo-1611145367651-6303b46e4040?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2006&q=100',
    title: 'Golden Pothos',
    subtitle: 'Living Room',
    category: 'Shooting / Adv.Campaing',
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
        <div ref={sectionRef} className="scroll-section-inner">
          <div className="scroll-section  max-w-screen-xl mx-auto">
            <div className={classNames('gallery-item-wrapper')}>
              <div
                className={
                  'relative inner flex flex-col-reverse h-full md:flex-row justify-between gap-20 px-5 md:px-0'
                }
              >
                <motion.div
                  initial="hidden"
                  variants={secondData}
                  animate={isInView ? 'hidden' : 'visable'}
                  transition={{ duration: 0.2 }}
                  ref={ref}
                >
                  <div className="gallery-item-info">
                    <Reveal>
                      <h1 className="text-[50px]">{images[0].title}</h1>
                    </Reveal>
                    <Reveal>
                      <h2 className="gallery-info-subtitle">
                        {images[0].subtitle}
                      </h2>
                    </Reveal>
                    <Reveal>
                      <p className="gallery-info-category">
                        {images[0].category}
                      </p>
                    </Reveal>
                  </div>
                </motion.div>

                <motion.div
                  initial="hidden"
                  className="mx-auto"
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

          <div className="scroll-section">
            <div className={classNames('gallery-item-wrapper')}>
              <div
                className={
                  'relative inner flex flex-col-reverse h-full md:flex-row justify-between gap-20 px-5 md:px-0'
                }
              >
                <div className="gallery-item-info">
                  <Reveal>
                    <h1 className="gallery-info-title text-[50px]">
                      {images[1].title}
                    </h1>
                  </Reveal>
                  <Reveal>
                    <h2 className="gallery-info-subtitle">
                      {images[1].subtitle}
                    </h2>
                  </Reveal>
                  <Reveal>
                    <p className="gallery-info-category">
                      {images[1].category}
                    </p>
                  </Reveal>
                </div>
                <motion.div
                  initial="hidden"
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
          <div className="scroll-section">
            <div className={classNames('gallery-item-wrapper')}>
              <div
                className={
                  'relative inner flex flex-col-reverse h-full md:flex-row justify-between gap-20 px-5 md:px-0'
                }
              >
                <div className="gallery-item-info">
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
                </div>
                <motion.div
                  initial="hidden"
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
          <div className="scroll-section">
            <div className={classNames('gallery-item-wrapper')}>
              <div
                className={
                  'relative inner flex flex-col-reverse h-full md:flex-row justify-between gap-20 px-5 md:px-0'
                }
              >
                <div className="gallery-item-info">
                  <Reveal>
                    <h1 className="gallery-info-title text-[50px]">
                      {images[1].title}
                    </h1>
                  </Reveal>
                  <Reveal>
                    <h2 className="gallery-info-subtitle">
                      {images[1].subtitle}
                    </h2>
                  </Reveal>
                  <Reveal>
                    <p className="gallery-info-category">
                      {images[1].category}
                    </p>
                  </Reveal>
                </div>
                <motion.div
                  initial="hidden"
                  variants={secondData}
                  animate={fourthInView ? 'hidden' : 'visable'}
                  transition={{ duration: 0.2, delay: 0.3 }}
                  ref={fourthRef}
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
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;
