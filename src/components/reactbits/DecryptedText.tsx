'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface DecryptedTextProps {
  text: string;
  className?: string;
  speed?: number;
  characters?: string;
  once?: boolean;
}

export default function DecryptedText({
  text,
  className = '',
  speed = 50,
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()',
  once = true,
}: DecryptedTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once, margin: '-10%' });
  const [displayText, setDisplayText] = useState(text.replace(/./g, ' '));
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!isInView || (once && hasAnimated)) return;

    setHasAnimated(true);
    let currentIndex = 0;
    const totalLength = text.length;

    const interval = setInterval(() => {
      setDisplayText(() => {
        let result = '';
        for (let i = 0; i < totalLength; i++) {
          if (i < currentIndex) {
            result += text[i];
          } else if (text[i] === ' ') {
            result += ' ';
          } else {
            result += characters[Math.floor(Math.random() * characters.length)];
          }
        }
        return result;
      });

      currentIndex++;
      if (currentIndex > totalLength) {
        clearInterval(interval);
        setDisplayText(text);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [isInView, text, speed, characters, once, hasAnimated]);

  return (
    <span ref={ref} className={`font-mono ${className}`}>
      {displayText}
    </span>
  );
}
