'use client';

import dynamic from 'next/dynamic';

const LightPillar = dynamic(() => import('@/components/reactbits/LightPillar'), { ssr: false });

export default function BackgroundEffect() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Light Pillar — enhanced visibility */}
      <div className="w-full h-full opacity-30 dark:opacity-50">
        <LightPillar
          topColor="#7c3aed"
          bottomColor="#06b6d4"
          intensity={0.8}
          rotationSpeed={0.18}
          glowAmount={0.004}
          pillarWidth={3.5}
          pillarHeight={0.35}
          noiseIntensity={0.35}
          quality="medium"
        />
      </div>

      {/* Radial glow accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-radial from-violet-500/8 dark:from-violet-500/15 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-gradient-radial from-cyan-500/5 dark:from-cyan-500/10 to-transparent rounded-full blur-3xl" />

      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px',
        }}
      />
    </div>
  );
}
