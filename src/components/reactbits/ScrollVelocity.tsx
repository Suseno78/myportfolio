'use client';

import React, { useRef, useState, ReactNode } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  wrap
} from 'framer-motion';

interface ScrollVelocityProps {
  children: ReactNode;
  baseVelocity?: number;
  className?: string;
}

export default function ScrollVelocity({
  children,
  baseVelocity = 5,
  className = '',
}: ScrollVelocityProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const [isHovered, setIsHovered] = useState(false);
  
  // Wrap logic - needs to be responsive to actual content width in a real-world scenario,
  // but for infinite repeating elements, using percentage based wrap works well.
  const x = useTransform(baseX, (v) => `${wrap(-20, -70, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    if (isHovered) return;

    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className={`overflow-hidden m-0 whitespace-nowrap flex flex-nowrap ${className}`}>
      <motion.div
        className="flex whitespace-nowrap flex-nowrap gap-6 md:gap-12"
        style={{ x }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* We render the children multiple times to ensure seamless infinite scroll */}
        <div className="flex shrink-0 gap-6 md:gap-12">{children}</div>
        <div className="flex shrink-0 gap-6 md:gap-12">{children}</div>
        <div className="flex shrink-0 gap-6 md:gap-12">{children}</div>
        <div className="flex shrink-0 gap-6 md:gap-12">{children}</div>
      </motion.div>
    </div>
  );
}
