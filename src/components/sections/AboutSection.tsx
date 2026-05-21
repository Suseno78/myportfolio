'use client';

import { useRef } from 'react';
import Image from 'next/image';
import ScrollReveal from '@/components/reactbits/ScrollReveal';
import TiltedCard from '@/components/reactbits/TiltedCard';
import VariableProximity from '@/components/reactbits/VariableProximity';
import GradientText from '@/components/reactbits/GradientText';

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="about" className="relative py-28 md:py-36 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-12">
            <span className="text-sm font-mono text-violet-600 dark:text-violet-400 tracking-widest">01</span>
            <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-violet-500/50 to-transparent" />
            <span className="text-sm text-zinc-600 dark:text-zinc-500 tracking-[0.2em] uppercase">About</span>
          </div>
        </ScrollReveal>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-14 items-center">
          <ScrollReveal className="md:col-span-2" delay={0.1}>
            <TiltedCard className="rounded-3xl max-w-[320px] mx-auto" tiltAmount={10} scaleOnHover={1.04}>
              <div className="relative rounded-3xl overflow-hidden border-2 border-zinc-200 dark:border-zinc-800 shadow-2xl shadow-violet-500/5">
                <Image src="/myfoto.jpeg" alt="Wahyu Hari Suseno" width={400} height={500} className="w-full h-auto object-cover" priority />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white dark:from-zinc-950 to-transparent" />
              </div>
            </TiltedCard>
          </ScrollReveal>

          <ScrollReveal className="md:col-span-3" delay={0.2}>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white leading-tight">
                About <GradientText>Me</GradientText>
              </h2>
              <div className="text-lg md:text-xl leading-relaxed text-zinc-600 dark:text-zinc-400">
                <VariableProximity
                  label="Hey! I'm Wahyu Hari Suseno, but just call me Senz. I'm an 18-year-old developer who loves keeping things chill and simple. I'm passionate about coding, design, and building projects that actually matter. My vibe? Productive without the stress."
                  containerRef={containerRef}
                  fromFontVariationSettings="'wght' 400"
                  toFontVariationSettings="'wght' 900"
                  radius={100}
                  falloff="gaussian"
                  className="cursor-default"
                />
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                {['🚀 Creative', '💻 Full-Stack', '🎨 Design', '⚡ Performance'].map((tag) => (
                  <span key={tag} className="px-4 py-2 rounded-xl text-sm font-medium bg-zinc-100 dark:bg-zinc-800/60 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/50">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
