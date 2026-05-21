'use client';

import { ReactNode } from 'react';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  from?: string;
  via?: string;
  to?: string;
  animate?: boolean;
}

export default function GradientText({
  children,
  className = '',
  from = '#7c3aed',
  via = '#06b6d4',
  to = '#8b5cf6',
  animate = true,
}: GradientTextProps) {
  return (
    <span
      className={`inline-block bg-clip-text text-transparent ${animate ? 'animate-gradient-flow bg-[length:200%_auto]' : ''} ${className}`}
      style={{
        backgroundImage: `linear-gradient(135deg, ${from}, ${via}, ${to}, ${from})`,
      }}
    >
      {children}
    </span>
  );
}
