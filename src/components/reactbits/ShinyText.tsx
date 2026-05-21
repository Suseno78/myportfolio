'use client';

import { ReactNode } from 'react';

interface ShinyTextProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  shimmerWidth?: number;
  /** If true, renders white text with a shimmer sweep (better on colored backgrounds) */
  light?: boolean;
}

export default function ShinyText({
  children,
  className = '',
  speed = 3,
  shimmerWidth = 120,
  light = false,
}: ShinyTextProps) {
  if (light) {
    return (
      <span
        className={`inline-block relative overflow-hidden text-white ${className}`}
      >
        {children}
        <span
          className="absolute inset-0 bg-[length:250%_100%] animate-shimmer pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(
              120deg,
              transparent 0%,
              transparent 40%,
              rgba(255,255,255,0.3) 50%,
              transparent 60%,
              transparent 100%
            )`,
            backgroundSize: `${shimmerWidth}% 100%`,
            animationDuration: `${speed}s`,
          }}
        />
      </span>
    );
  }

  return (
    <span
      className={`inline-block bg-clip-text text-transparent bg-[length:250%_100%] animate-shimmer ${className}`}
      style={{
        backgroundImage: `linear-gradient(
          120deg,
          rgba(255,255,255,0.0) 0%,
          rgba(255,255,255,0.0) 40%,
          rgba(255,255,255,0.9) 50%,
          rgba(255,255,255,0.0) 60%,
          rgba(255,255,255,0.0) 100%
        ), linear-gradient(to right, #7c3aed, #06b6d4, #8b5cf6)`,
        backgroundSize: `${shimmerWidth}% 100%, 100% 100%`,
        animationDuration: `${speed}s`,
      }}
    >
      {children}
    </span>
  );
}
