'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 400);
          return 100;
        }
        return prev + Math.random() * 12 + 3;
      });
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }} className="fixed inset-0 z-[100] bg-white dark:bg-zinc-950 flex flex-col items-center justify-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex flex-col items-center gap-8">
            <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity }} className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 via-cyan-500 to-violet-500">CS</motion.div>
            <div className="w-48 h-[2px] bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
              <motion.div className="h-full bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full" style={{ width: `${Math.min(progress, 100)}%` }} transition={{ ease: 'linear' }} />
            </div>
            <span className="text-zinc-400 dark:text-zinc-600 text-sm font-mono tracking-widest">{Math.min(Math.floor(progress), 100)}%</span>
          </motion.div>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-500/5 dark:bg-violet-500/10 rounded-full blur-[120px]" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
