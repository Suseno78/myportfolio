'use client';

import { useRef, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  animateBy?: 'words' | 'chars';
  once?: boolean;
}

export default function SplitText({
  text,
  className = '',
  delay = 50,
  animateBy = 'chars',
  once = true,
}: SplitTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once, margin: '-10%' });

  const elements = useMemo(() => {
    if (animateBy === 'words') {
      return text.split(' ').map((word, i) => ({ text: word, key: i }));
    }
    return text.split('').map((char, i) => ({ text: char, key: i }));
  }, [text, animateBy]);

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {elements.map(({ text: char, key }) => (
        <motion.span
          key={key}
          initial={{ opacity: 0, y: 40, filter: 'blur(12px)' }}
          animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{
            duration: 0.5,
            delay: key * (delay / 1000),
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="inline-block"
          style={{ whiteSpace: char === ' ' || (animateBy === 'words') ? 'pre' : undefined }}
        >
          {animateBy === 'words' ? `${char} ` : char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
}
