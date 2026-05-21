'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal, { ScrollRevealGroup, ScrollRevealItem } from '@/components/reactbits/ScrollReveal';
import GradientText from '@/components/reactbits/GradientText';
import SpotlightCard from '@/components/reactbits/SpotlightCard';
import { projects, type Project } from '@/lib/data';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleViewDetail = useCallback((project: Project) => {
    if (project.liveUrl) {
      window.open(project.liveUrl, '_blank');
    } else {
      setSelectedProject(project);
    }
  }, []);

  const closeModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  // Split into 3 rows: 3-3-2
  const row1 = projects.slice(0, 3);
  const row2 = projects.slice(3, 6);
  const row3 = projects.slice(6, 8);

  return (
    <section id="projects" className="relative py-28 md:py-36 px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm font-mono text-violet-600 dark:text-violet-400 tracking-widest">03</span>
            <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-violet-500/50 to-transparent" />
            <span className="text-sm text-zinc-600 dark:text-zinc-500 tracking-[0.2em] uppercase">Projects</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            Selected <GradientText>Works</GradientText>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-500 text-lg mb-14 max-w-xl">
            A collection of projects that showcase my skills and passion.
          </p>
        </ScrollReveal>

        {/* Row 1: 3 projects */}
        <ScrollRevealGroup
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4"
          staggerDelay={0.08}
        >
          {row1.map((project, i) => (
            <ScrollRevealItem key={project.id}>
              <BentoCard
                project={project}
                index={i}
                onViewDetail={handleViewDetail}
              />
            </ScrollRevealItem>
          ))}
        </ScrollRevealGroup>

        {/* Row 2: 3 projects */}
        <ScrollRevealGroup
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4"
          staggerDelay={0.08}
        >
          {row2.map((project, i) => (
            <ScrollRevealItem key={project.id}>
              <BentoCard
                project={project}
                index={i + 3}
                onViewDetail={handleViewDetail}
              />
            </ScrollRevealItem>
          ))}
        </ScrollRevealGroup>

        {/* Row 3: 2 projects centered */}
        <ScrollRevealGroup
          className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto"
          staggerDelay={0.08}
        >
          {row3.map((project, i) => (
            <ScrollRevealItem key={project.id}>
              <BentoCard
                project={project}
                index={i + 6}
                onViewDetail={handleViewDetail}
              />
            </ScrollRevealItem>
          ))}
        </ScrollRevealGroup>

        {/* Hint text */}
        <ScrollReveal delay={0.4}>
          <p className="text-center text-zinc-500 dark:text-zinc-600 text-sm mt-8">
            ✦ Hover on cards to see the spotlight effect
          </p>
        </ScrollReveal>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailModal project={selectedProject} onClose={closeModal} />
        )}
      </AnimatePresence>
    </section>
  );
}

/* ─── Bento Card ─── */
function BentoCard({
  project,
  index,
  onViewDetail,
}: {
  project: Project;
  index: number;
  onViewDetail: (p: Project) => void;
}) {
  const num = String(index + 1).padStart(2, '0');

  return (
    <SpotlightCard
      className="h-full"
      spotlightColor="rgba(124, 58, 237, 0.15)"
      spotlightSize={400}
    >
      <div className="flex flex-col h-full p-5 md:p-6 min-h-[340px]">
        {/* Number badge */}
        <span className="text-xs font-mono text-violet-500 dark:text-violet-400 mb-3 tracking-wider">
          {num}
        </span>

        {/* Title + Image row */}
        <div className="flex items-start gap-4 mb-3">
          <div className="flex-1 min-w-0">
            <h3 className="text-lg md:text-xl font-bold text-zinc-900 dark:text-white mb-2 leading-tight">
              {project.title}
            </h3>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed line-clamp-3">
              {project.description}
            </p>
          </div>
          <div className="relative w-[120px] h-[80px] md:w-[150px] md:h-[100px] flex-shrink-0 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-700/50">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="150px"
            />
          </div>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-[10px] rounded-lg bg-zinc-100/80 dark:bg-zinc-800/60 text-zinc-500 dark:text-zinc-400 border border-zinc-200/50 dark:border-zinc-700/30 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => onViewDetail(project)}
            className="px-4 py-2 text-xs font-semibold rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 text-white hover:opacity-90 transition-opacity cursor-pointer"
          >
            View Detail
          </button>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-xl border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Code
            </a>
          )}
        </div>
      </div>
    </SpotlightCard>
  );
}

/* ─── Detail Modal ─── */
function ProjectDetailModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 20 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border border-zinc-200 dark:border-zinc-700/50 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-2xl shadow-2xl"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Image */}
          <div className="relative w-full md:w-1/2 h-[250px] md:h-auto md:min-h-[400px]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-white/20 dark:from-zinc-900/20 to-transparent" />
          </div>

          {/* Details */}
          <div className="flex-1 p-6 md:p-8">
            <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-3">
              {project.title}
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Features */}
            {project.features.length > 0 && (
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-zinc-900 dark:text-white mb-3 uppercase tracking-wider">
                  Features
                </h4>
                <ul className="space-y-2">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                      <span className="text-violet-500 mt-0.5">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-zinc-900 dark:text-white mb-3 uppercase tracking-wider">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 text-xs rounded-lg bg-zinc-100 dark:bg-zinc-800/60 text-zinc-600 dark:text-zinc-400 border border-zinc-200/50 dark:border-zinc-700/30 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-3">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 text-white hover:opacity-90 transition-opacity"
                >
                  Live Demo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-xl border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  Code on GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
