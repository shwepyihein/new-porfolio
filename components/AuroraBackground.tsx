import { PointMaterial, Points } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from 'framer-motion';

import classNames from 'classnames';
import * as random from 'maath/random';
import { Suspense, useEffect, useRef, useState } from 'react';
import EncryptButton from './downloadButton';

const COLORS_TOP = ['#13FFAA', '#1E67C6', '#CE84CF', '#DD335C'];

const StarBackground = (props: any) => {
  const ref: any = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="$fff"
          size={0.002}
          sizeAttenuation={true}
          dethWrite={false}
        />
      </Points>
    </group>
  );
};

export const AuroraBackground = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  let [activeSection, setActiveSection] = useState('hero');

  let links = ['hero', 'about', 'experience', 'projects', 'contact'];

  const handleClick = (v: string) => {
    let element: any = document.getElementById(v);
    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    });
  };

  useEffect(() => {
    let hero = document.getElementById('hero');
    let about = document.getElementById('about');
    let projects = document.getElementById('projects');
    let skills = document.getElementById('experience');
    let articles = document.getElementById('contact');

    let sections = [hero, about, projects, skills, articles];

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      console.log(entries);
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.id == 'hero') {
            setActiveSection('hero');
          }
          if (entry.target.id == 'about') {
            setActiveSection('about');
          }
          if (entry.target.id == 'projects') {
            setActiveSection('projects');
          }
          if (entry.target.id == 'experience') {
            setActiveSection('experience');
          }
          if (entry.target.id == 'contact') {
            setActiveSection('contact');
          }
        }
      });
    }, observerOptions);

    sections?.forEach((section) => {
      section && observer.observe(section);
    });
  }, []);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: 'easeInOut',
      duration: 10,
      repeat: Infinity,
      repeatType: 'mirror',
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;

  return (
    <>
      <motion.div
        style={{
          backgroundImage,
        }}
        className="fixed w-full grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
      >
        <div className="absolute  w-full  h-auto inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 1] }}>
            {/* <Stars radius={50} count={2500} factor={4} fade speed={2} /> */}
            <Suspense fallback={null}>
              <StarBackground />
            </Suspense>
          </Canvas>
        </div>
      </motion.div>
      <div className="fixed hidden md:block z-30  w-[80px] top-10 left-0  h-full inset-0 ">
        <div className="flex flex-col transition-all duration-200  justify-between items-center gap-16">
          {links.map((item) => {
            if (item === 'hero') {
              return (
                <div
                  key={item}
                  className={classNames(
                    activeSection === item ? '' : 'border-transparent',
                    'w-[50px] h-[50px] duration-200 flex items-center justify-center   border rounded-2xl mx-auto text-2xl px-3 py-4'
                  )}
                >
                  <img src="/projects/logo.png" alt="logo" />
                </div>
              );
            } else {
              return (
                <div
                  key={item}
                  onClick={() => handleClick(item)}
                  className={classNames(
                    activeSection === item ? 'border-b-2 border-gray-100 ' : '',
                    '-rotate-90 duration-200   cursor-pointer w-full '
                  )}
                >
                  <p className="capitalize font-medium text-center pb-3">
                    {item}
                  </p>
                </div>
              );
            }
          })}
        </div>
      </div>
      <div className="fixed hidden md:block w-full py-6 right-0  px-10 z-[20] top-0">
        <div className="flex justify-end ">
          <a href="/projects/shwepyihein-cv.pdf" target="_blank" download>
            <EncryptButton />
          </a>
        </div>
      </div>
    </>
  );
};
