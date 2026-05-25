'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import ScrollReveal from '@/components/reactbits/ScrollReveal';
import GradientText from '@/components/reactbits/GradientText';
import { journeyTimeline } from '@/lib/data';

function TimelineCard({
  item,
  index,
}: {
  item: (typeof journeyTimeline)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-15%' });
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative flex items-center w-full ${
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      } flex-col md:gap-0 gap-4`}
    >
      {/* Card */}
      <motion.div
        className={`w-full md:w-[calc(50%-2rem)] ${isLeft ? 'md:pr-0' : 'md:pl-0'}`}
        initial={{ opacity: 0, x: isLeft ? -60 : 60, filter: 'blur(8px)' }}
        animate={
          isInView
            ? { opacity: 1, x: 0, filter: 'blur(0px)' }
            : { opacity: 0, x: isLeft ? -60 : 60, filter: 'blur(8px)' }
        }
        transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="relative group">
          {/* Glow behind card */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-violet-500/20 via-cyan-500/10 to-violet-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl" />

          <div className="relative p-6 md:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/50 backdrop-blur-xl shadow-sm hover:border-violet-300 dark:hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-500/5 transition-all duration-500">
            {/* Year badge */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">{item.icon}</span>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wider bg-violet-100 dark:bg-violet-500/15 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-500/20">
                  {item.year}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/50">
                  {item.grade}
                </span>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white mb-3">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-5 text-sm md:text-base">
              {item.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-5">
              {item.technologies.map((tech, i) => (
                <motion.span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-gradient-to-r from-violet-50 to-cyan-50 dark:from-violet-500/10 dark:to-cyan-500/10 text-violet-700 dark:text-violet-300 border border-violet-100 dark:border-violet-500/15"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.06 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Highlights */}
            <ul className="space-y-2">
              {item.highlights.map((highlight, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-2.5 text-sm text-zinc-600 dark:text-zinc-400"
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                >
                  <svg
                    className="w-4 h-4 mt-0.5 shrink-0 text-emerald-500 dark:text-emerald-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {highlight}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Center dot */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10 items-center justify-center">
        <motion.div
          className="w-5 h-5 rounded-full border-[3px] border-violet-500 dark:border-violet-400 bg-white dark:bg-zinc-950"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.5, delay: 0.1, type: 'spring', stiffness: 200 }}
        />
        <div
          className={`absolute w-5 h-5 rounded-full bg-violet-500/40 dark:bg-violet-400/30 ${
            isInView ? 'timeline-dot-pulse' : ''
          }`}
        />
      </div>

      {/* Empty spacer for opposite side */}
      <div className="hidden md:block w-[calc(50%-2rem)]" />
    </div>
  );
}

export default function JourneySection() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 80%', 'end 60%'],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="journey" className="relative py-28 md:py-36 px-6 overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-violet-500/5 dark:bg-violet-500/8 blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 rounded-full bg-cyan-500/5 dark:bg-cyan-500/8 blur-3xl animate-float pointer-events-none" style={{ animationDelay: '3s' }} />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm font-mono text-violet-600 dark:text-violet-400 tracking-widest">02</span>
            <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-violet-500/50 to-transparent" />
            <span className="text-sm text-zinc-600 dark:text-zinc-500 tracking-[0.2em] uppercase">Journey</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-2">
            My <GradientText>Journey</GradientText>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-500 text-lg mb-16 max-w-xl">
            The story of my growth as a developer — from first lines of code to building modern applications.
          </p>
        </ScrollReveal>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Animated vertical line (desktop) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-violet-500 via-cyan-400 to-violet-500 origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Animated vertical line (mobile) */}
          <div className="md:hidden absolute left-4 top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-violet-500 via-cyan-400 to-violet-500 origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Timeline items */}
          <div className="space-y-12 md:space-y-20">
            {journeyTimeline.map((item, index) => (
              <div key={index} className="relative pl-12 md:pl-0">
                {/* Mobile dot */}
                <div className="md:hidden absolute left-[11px] top-8 z-10">
                  <div className="w-5 h-5 rounded-full border-[3px] border-violet-500 dark:border-violet-400 bg-white dark:bg-zinc-950" />
                  <div className="absolute inset-0 w-5 h-5 rounded-full bg-violet-500/40 dark:bg-violet-400/30 timeline-dot-pulse" />
                </div>
                <TimelineCard item={item} index={index} />
              </div>
            ))}
          </div>

          {/* Terminal dot at bottom */}
          <ScrollReveal delay={0.3}>
            <div className="hidden md:flex justify-center mt-12">
              <div className="flex flex-col items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 shadow-lg shadow-violet-500/30" />
                <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400 tracking-wide">
                  Present & Beyond
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
