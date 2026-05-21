'use client';

import { useEffect, useRef } from 'react';

interface AuroraProps {
  colorStops?: string[];
  speed?: number;
  className?: string;
}

export default function Aurora({
  colorStops = ['#7c3aed', '#06b6d4', '#8b5cf6', '#3b82f6'],
  speed = 1,
  className = '',
}: AuroraProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * (window.devicePixelRatio || 1);
      canvas.height = canvas.offsetHeight * (window.devicePixelRatio || 1);
    };

    resize();
    window.addEventListener('resize', resize);

    const render = () => {
      time += 0.003 * speed;
      const w = canvas.width;
      const h = canvas.height;

      ctx.clearRect(0, 0, w, h);

      colorStops.forEach((color, i) => {
        const phase = time + (i * Math.PI * 2) / colorStops.length;
        const x = w * (0.3 + 0.4 * Math.sin(phase * 0.7 + i));
        const y = h * (0.3 + 0.4 * Math.cos(phase * 0.5 + i * 1.3));
        const radius = Math.min(w, h) * (0.3 + 0.15 * Math.sin(phase * 0.3));

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, color + '40');
        gradient.addColorStop(0.5, color + '20');
        gradient.addColorStop(1, 'transparent');

        ctx.globalCompositeOperation = 'lighter';
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animRef.current);
    };
  }, [colorStops, speed]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ filter: 'blur(80px)' }}
    />
  );
}
