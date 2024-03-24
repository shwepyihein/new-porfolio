import { motion, useAnimation, useInView } from 'framer-motion';
import React, { useEffect, useRef } from 'react';

interface Props {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
  delay?: number;
}

const Reveal = ({ children, width = 'fit-content', delay = 0.25 }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
      slideControls.start('visible');
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ position: 'relative', width, overflow: 'hidden' }}>
      <motion.div
        initial="hidden"
        animate={mainControls}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        className="text-white"
        transition={{ duration: 0.5, delay: delay }}
      >
        {children}
      </motion.div>

      <motion.div
        initial="hidden"
        variants={{ hidden: { left: 0 }, visible: { left: '100%' } }}
        animate={slideControls}
        transition={{ duration: 0.5, ease: 'easeIn' }}
        style={{
          position: 'absolute',
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: 'var(--brand)',
          zIndex: 20,
        }}
      ></motion.div>
    </div>
  );
};

export default Reveal;
