'use client';

import { ReactNode } from 'react';

interface LogoWallProps {
  children: ReactNode[];
  speed?: number;
  className?: string;
  pauseOnHover?: boolean;
}

export default function LogoWall({
  children,
  speed = 30,
  className = '',
  pauseOnHover = true,
}: LogoWallProps) {
  return (
    <div
      className={`logo-wall relative w-full overflow-hidden ${className}`}
      style={{
        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
      }}
    >
      <div
        className={`logo-wall-track flex w-max gap-6 md:gap-8 ${pauseOnHover ? 'logo-wall-pausable' : ''}`}
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
