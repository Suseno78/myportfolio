'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import ScrollReveal, { ScrollRevealGroup, ScrollRevealItem } from '@/components/reactbits/ScrollReveal';
import GradientText from '@/components/reactbits/GradientText';
import SpotlightCard from '@/components/reactbits/SpotlightCard';
import { internshipExperience } from '@/lib/data';

function InternshipCard({
  item,
  index,
}: {
  item: (typeof internshipExperience)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, filter: 'blur(6px)' }}
      animate={
        isInView
          ? { opacity: 1, y: 0, filter: 'blur(0px)' }
          : { opacity: 0, y: 40, filter: 'blur(6px)' }
      }
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="flex flex-col gap-6"
    >
      <SpotlightCard className="h-full" spotlightColor={index === 0 ? 'rgba(124, 58, 237, 0.12)' : 'rgba(6, 182, 212, 0.12)'}>
        <div className="p-6 md:p-8 flex flex-col h-full">
          {/* Header */}
          <div className="flex items-start gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-100 to-cyan-50 dark:from-violet-500/15 dark:to-cyan-500/10 border border-violet-200 dark:border-violet-500/20 flex items-center justify-center text-2xl shrink-0">
              {item.icon}
            </div>
            <div className="min-w-0">
              <h3 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white mb-1.5 leading-tight">
                {item.institution}
              </h3>
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-violet-100 dark:bg-violet-500/15 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-500/20">
                  {item.position}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/50">
                  {item.duration}
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed mb-6">
            {item.description}
          </p>

          {/* Responsibilities */}
          <div className="mb-6 flex-grow">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-500 mb-3">
              Responsibilities
            </h4>
            <ul className="space-y-2.5">
              {item.responsibilities.map((resp, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-2.5 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed"
                  initial={{ opacity: 0, x: -8 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.06 }}
                >
                  <svg
                    className="w-4 h-4 mt-0.5 shrink-0 text-violet-500 dark:text-violet-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  <span>{resp}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="mt-auto">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-500 mb-3">
              Technologies & Tools
            </h4>
            <div className="flex flex-wrap gap-2">
              {item.technologies.map((tech, i) => (
                <motion.span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium bg-gradient-to-r from-violet-50 to-cyan-50 dark:from-violet-500/10 dark:to-cyan-500/10 text-violet-700 dark:text-violet-300 border border-violet-100 dark:border-violet-500/15"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.35, delay: 0.5 + i * 0.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </SpotlightCard>

      {/* Certification Card (if available) */}
      {item.certification && (
        <>
          <SpotlightCard className="p-5 flex flex-col gap-4" spotlightColor="rgba(16, 185, 129, 0.12)">
            <div className="flex items-center justify-between">
              <h4 className="text-sm md:text-base font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                <span className="text-emerald-500">🏆</span> {item.certification.title}
              </h4>
              <button
                onClick={() => setIsCertModalOpen(true)}
                className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors border border-zinc-200 dark:border-zinc-700/50"
                title="Enlarge Certificate"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              </button>
            </div>
            <div 
              className="relative w-full rounded-xl overflow-hidden border border-zinc-200/80 dark:border-zinc-700/50 cursor-pointer group shadow-sm bg-zinc-50 dark:bg-zinc-900/50"
              style={{ aspectRatio: '1.414 / 1' }}
              onClick={() => setIsCertModalOpen(true)}
            >
              <Image
                src={item.certification.image}
                alt={item.certification.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
            </div>
          </SpotlightCard>

          {/* Full Screen Modal */}
          <AnimatePresence>
            {isCertModalOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm"
                onClick={() => setIsCertModalOpen(false)}
              >
                <motion.div
                  initial={{ y: 50, opacity: 0, scale: 0.95 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  exit={{ y: 20, opacity: 0, scale: 0.95 }}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-zinc-200/50 dark:border-zinc-800/50 flex flex-col overflow-hidden"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Modal Header */}
                  <div className="flex items-center justify-between p-4 md:p-6 border-b border-zinc-200 dark:border-zinc-800/50 bg-white/50 dark:bg-zinc-900/50">
                    <h3 className="text-lg md:text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                      <span className="text-emerald-500">🏆</span> {item.certification.title}
                    </h3>
                    <button
                      onClick={() => setIsCertModalOpen(false)}
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer shrink-0"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  
                  {/* Image Container */}
                  <div className="relative w-full flex-1 min-h-[50vh] max-h-[calc(90vh-80px)] p-4 md:p-6 bg-zinc-50 dark:bg-zinc-950/50 flex items-center justify-center overflow-auto">
                    <div className="relative w-full max-w-3xl" style={{ aspectRatio: '1.414 / 1' }}>
                      <Image
                        src={item.certification.image}
                        alt={item.certification.title}
                        fill
                        sizes="(max-width: 1200px) 100vw, 1200px"
                        className="object-contain rounded-lg shadow-sm"
                        priority
                      />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </motion.div>
  );
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-28 md:py-36 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-violet-500/3 dark:bg-violet-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm font-mono text-violet-600 dark:text-violet-400 tracking-widest">05</span>
            <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-violet-500/50 to-transparent" />
            <span className="text-sm text-zinc-600 dark:text-zinc-500 tracking-[0.2em] uppercase">Experience</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-2">
            Professional <GradientText>Experience</GradientText>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-500 text-lg mb-16 max-w-xl">
            Hands-on experience gained through professional internships in government institutions.
          </p>
        </ScrollReveal>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-start">
          {internshipExperience.map((item, index) => (
            <InternshipCard key={item.institution} item={item} index={index} />
          ))}
        </div>

        {/* Summary footer */}
        <ScrollReveal delay={0.3}>
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-10">
            {[
              { label: 'Total Duration', value: '6 Months' },
              { label: 'Institutions', value: '2 Government' },
              { label: 'Focus Areas', value: 'Dev & Admin' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-cyan-500">
                  {stat.value}
                </div>
                <div className="text-xs text-zinc-500 dark:text-zinc-500 uppercase tracking-widest mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
