'use client';

import { useRef, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
  direction?: 'top' | 'bottom' | 'left' | 'right';
  once?: boolean;
}

export default function BlurText({
  text,
  className = '',
  delay = 100,
  direction = 'bottom',
  once = true,
}: BlurTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once, margin: '-5%' });

  const words = useMemo(() => text.split(' '), [text]);

  const getInitialPosition = () => {
    switch (direction) {
      case 'top': return { y: -30 };
      case 'bottom': return { y: 30 };
      case 'left': return { x: -30 };
      case 'right': return { x: 30 };
    }
  };

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, filter: 'blur(16px)', ...getInitialPosition() }}
          animate={isInView ? { opacity: 1, filter: 'blur(0px)', x: 0, y: 0 } : {}}
          transition={{
            duration: 0.7,
            delay: i * (delay / 1000),
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="inline-block mr-[0.3em]"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}
