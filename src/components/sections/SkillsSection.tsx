'use client';

import ScrollReveal from '@/components/reactbits/ScrollReveal';
import GradientText from '@/components/reactbits/GradientText';
import LogoWall from '@/components/reactbits/LogoWall';

const logos = [
  { name: 'HTML5', svg: '<svg viewBox="0 0 32 32"><path fill="#E44D26" d="M6 28L4 3h24l-2 25-10 3z"/><path fill="#F16529" d="M16 27.3l8.2-2.3L26 5.4H16z"/><path fill="#EBEBEB" d="M16 13.6h-4.8l-.3-3.5H16V6.8H7.7l.1 1.2.7 8.9H16zm0 7.2l0 0-4-1.1-.3-3H8.4l.5 5.6 7 2z"/><path fill="#fff" d="M16 13.6v3.3h4.5l-.4 4.6-4 1.1v3.4l7-2 .1-.7.8-8.5.1-1.2zm0-6.8v3.3h8l.1-1.2.2-2.1z"/></svg>' },
  { name: 'CSS3', svg: '<svg viewBox="0 0 32 32"><path fill="#1572B6" d="M6 28L4 3h24l-2 25-10 3z"/><path fill="#33A9DC" d="M16 27.3l8.2-2.3L26 5.4H16z"/><path fill="#EBEBEB" d="M16 13.5H9.9l-.3-3.4H16V6.8H7.4l.1 1.2.8 8.8H16zm0 7.2l0 0-4-1.1-.3-2.9H8.4l.5 5.6 7 2z"/><path fill="#fff" d="M16 13.5v3.3h4.5l-.4 4.5-4 1.1v3.4l7-2 .1-.6.8-8.5.1-1.2zm0-6.7v3.3h8.2l.1-1.2.2-2.1z"/></svg>' },
  { name: 'JavaScript', svg: '<svg viewBox="0 0 32 32"><rect fill="#F7DF1E" width="32" height="32" rx="2"/><path d="M21.2 24.4c.6 1 1.4 1.7 2.8 1.7 1.2 0 1.9-.6 1.9-1.4 0-1-.8-1.3-2-1.9l-.7-.3c-2-.9-3.4-1.9-3.4-4.2 0-2.1 1.6-3.7 4.1-3.7 1.8 0 3 .6 3.9 2.2l-2.2 1.4c-.5-.9-1-1.2-1.8-1.2-.8 0-1.3.5-1.3 1.2 0 .8.5 1.1 1.7 1.7l.7.3c2.4 1 3.7 2.1 3.7 4.4 0 2.5-2 3.9-4.6 3.9-2.6 0-4.2-1.2-5-2.8zm-9.7.3c.4.8.8 1.4 1.8 1.4.9 0 1.5-.4 1.5-1.8v-9.7h2.8v9.8c0 2.9-1.7 4.3-4.2 4.3-2.3 0-3.6-1.2-4.2-2.6z"/></svg>' },
  { name: 'TypeScript', svg: '<svg viewBox="0 0 32 32"><rect fill="#3178C6" width="32" height="32" rx="2"/><path fill="#fff" d="M22.8 25.4c.5.9 1.2 1.5 2.5 1.5s2-.7 2-1.5c0-1-.8-1.4-2.1-2l-.7-.3c-2.1-.9-3.5-2-3.5-4.4 0-2.2 1.7-3.8 4.3-3.8 1.9 0 3.2.7 4.1 2.3l-2.2 1.5c-.5-.9-1-1.2-1.9-1.2s-1.4.6-1.4 1.2c0 .9.6 1.2 1.8 1.8l.7.3c2.5 1.1 3.8 2.1 3.8 4.5s-2 4-4.8 4c-2.7 0-4.4-1.3-5.2-3zM7 16.5h2.9v9.2h2.6v-9.2H15.4V14.2H7z"/></svg>' },
  { name: 'PHP', svg: '<svg viewBox="0 0 32 32"><ellipse fill="#777BB3" cx="16" cy="16" rx="14" ry="8"/><path fill="#fff" d="M11.2 12h2l-.4 2h1.3c1 0 1.7.2 2 .5.4.3.5.9.4 1.7l-.6 3h-2l.5-2.8c.1-.4 0-.6-.1-.8-.2-.2-.5-.2-.9-.2h-1l-.7 3.7H9.7zm5.3 2.5h2l.4-2.1c.5 0 .9 0 1 .1.3.1.4.4.3.8l-.4 2.1c-.1.5-.3.8-.6 1-.2.1-.6.2-1 .2h-.8l-.5 2.4h-2zm2.5-.4l-.3 1.5h.5c.4 0 .7 0 .8-.2.2-.2.3-.4.3-.7 0-.3-.1-.4-.3-.5-.2 0-.5-.1-1-.1z"/></svg>' },
  { name: 'React', svg: '<svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="2.8" fill="#61DAFB"/><g stroke="#61DAFB" fill="none" stroke-width="1"><ellipse cx="16" cy="16" rx="11" ry="4.2"/><ellipse cx="16" cy="16" rx="11" ry="4.2" transform="rotate(60 16 16)"/><ellipse cx="16" cy="16" rx="11" ry="4.2" transform="rotate(120 16 16)"/></g></svg>' },
  { name: 'Next.js', svg: '<svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="14" fill="white"/><path fill="black" d="M13.5 11h2.1v10h-2.1zm7.5 0l-7 10h2.5l7-10z"/></svg>' },
  { name: 'Laravel', svg: '<svg viewBox="0 0 32 32"><path fill="#FF2D20" d="M6.5 10.8v10l9.5 5.5 9.5-5.5v-10L16 5.2z"/><path fill="#fff" d="M16 15.8L6.5 10.8 16 5.2l9.5 5.6zm0 10.5l-9.5-5.5V10.8l9.5 5z"/><path fill="#FFB4AB" d="M16 26.3l9.5-5.5V10.8l-9.5 5z"/></svg>' },
  { name: 'Tailwind', svg: '<svg viewBox="0 0 32 32"><path fill="#38BDF8" d="M16 8c-3.6 0-5.8 1.8-6.8 5.4 1.4-1.8 3-2.5 4.8-2 1 .3 1.8 1.1 2.6 1.9 1.3 1.4 2.8 3 6 3 3.6 0 5.8-1.8 6.8-5.4-1.4 1.8-3 2.5-4.8 2-1-.3-1.8-1.1-2.6-1.9-1.3-1.4-2.8-3-6-3zM9.2 16.3c-3.6 0-5.8 1.8-6.8 5.4 1.4-1.8 3-2.5 4.8-2 1 .3 1.8 1.1 2.6 1.9 1.3 1.4 2.8 3 6 3 3.6 0 5.8-1.8 6.8-5.4-1.4 1.8-3 2.5-4.8 2-1-.3-1.8-1.1-2.6-1.9-1.3-1.4-2.8-3-6-3z"/></svg>' },
  { name: 'MySQL', svg: '<svg viewBox="0 0 32 32"><path fill="#00758F" d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13S23.2 3 16 3z"/><path fill="#fff" d="M21 22v-7.5c0-1-.3-1.5-1.5-1.5s-2 .7-2 2v4.5h-2V15c0-1.3-.5-2-1.7-2-1 0-1.8.7-1.8 2v5H10v-8h2v1c.5-.7 1.4-1.2 2.5-1.2 1.2 0 2 .5 2.5 1.3.6-.8 1.6-1.3 2.7-1.3 2 0 3.3 1.2 3.3 3.3V22z"/></svg>' },
  { name: 'Supabase', svg: '<svg viewBox="0 0 32 32"><path fill="#3ECF8E" d="M18 28c-.6.8-1.8.3-1.8-.7V17h10.4c1.4 0 2.2 1.6 1.3 2.8z"/><path fill="#3ECF8E" opacity=".6" d="M14 4c.6-.8 1.8-.3 1.8.7V15H5.4c-1.4 0-2.2-1.6-1.3-2.8z"/></svg>' },
  { name: 'Git', svg: '<svg viewBox="0 0 32 32"><path fill="#F05032" d="M29.7 15L17 2.3c-.6-.6-1.4-.6-2 0l-2.6 2.6 3.3 3.3c.6-.2 1.3-.1 1.8.4.5.5.6 1.3.4 1.9l3.2 3.2c.6-.2 1.3-.1 1.8.4.7.7.7 1.8 0 2.5s-1.8.7-2.5 0c-.5-.5-.6-1.3-.4-1.9l-3-3v7.8c.2.1.3.2.5.4.7.7.7 1.8 0 2.5s-1.8.7-2.5 0-.7-1.8 0-2.5c.2-.2.4-.3.7-.4V12c-.2-.1-.4-.3-.6-.5-.6-.6-.7-1.3-.4-2L11 6.3 2.3 15c-.6.6-.6 1.4 0 2l12.6 12.7c.6.6 1.4.6 2 0L29.7 17c.6-.6.6-1.4 0-2"/></svg>' },
  { name: 'GitHub', svg: '<svg viewBox="0 0 32 32"><path fill="currentColor" d="M16 2C8.3 2 2 8.3 2 16c0 6.2 4 11.4 9.5 13.3.7.1 1-.3 1-.7v-2.5c-3.9.8-4.7-1.9-4.7-1.9-.6-1.6-1.5-2-1.5-2-1.3-.8.1-.8.1-.8 1.4.1 2.1 1.4 2.1 1.4 1.2 2.1 3.2 1.5 4 1.1.1-.9.5-1.5.9-1.8-3.1-.4-6.3-1.6-6.3-6.9 0-1.5.5-2.8 1.4-3.7-.1-.4-.6-1.8.1-3.7 0 0 1.2-.4 3.8 1.4 1.1-.3 2.3-.5 3.5-.5s2.4.2 3.5.5c2.6-1.8 3.8-1.4 3.8-1.4.8 1.9.3 3.3.1 3.7.9 1 1.4 2.2 1.4 3.7 0 5.3-3.2 6.5-6.3 6.8.5.4.9 1.3.9 2.6v3.8c0 .4.3.8 1 .7C26 27.4 30 22.2 30 16c0-7.7-6.3-14-14-14"/></svg>' },
  { name: 'Figma', svg: '<svg viewBox="0 0 32 32"><path fill="#F24E1E" d="M10.7 28c2.2 0 4-1.8 4-4v-4h-4c-2.2 0-4 1.8-4 4s1.8 4 4 4z"/><path fill="#A259FF" d="M6.7 16c0-2.2 1.8-4 4-4h4v8h-4c-2.2 0-4-1.8-4-4z"/><path fill="#F24E1E" d="M6.7 8c0-2.2 1.8-4 4-4h4v8h-4c-2.2 0-4-1.8-4-4z"/><path fill="#0ACF83" d="M14.7 4h4c2.2 0 4 1.8 4 4s-1.8 4-4 4h-4z"/><path fill="#1ABCFE" d="M22.7 16c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z"/></svg>' },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-28 md:py-36 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm font-mono text-violet-600 dark:text-violet-400 tracking-widest">02</span>
            <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-violet-500/50 to-transparent" />
            <span className="text-sm text-zinc-600 dark:text-zinc-500 tracking-[0.2em] uppercase">Skills</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-2">
            Tech <GradientText>Stack</GradientText>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-500 text-lg mb-14 max-w-xl">
            Technologies I use and love to work with.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <LogoWall speed={35} pauseOnHover>
            {logos.map((logo) => (
              <div
                key={logo.name}
                className="group flex items-center justify-center px-5 py-4 shrink-0 cursor-default"
                title={logo.name}
              >
                <div
                  className="w-12 h-12 md:w-14 md:h-14 opacity-70 group-hover:opacity-100 group-hover:scale-125 group-hover:drop-shadow-[0_0_16px_rgba(124,58,237,0.4)] transition-all duration-500"
                  dangerouslySetInnerHTML={{ __html: logo.svg }}
                />
              </div>
            ))}
          </LogoWall>
        </ScrollReveal>
      </div>
    </section>
  );
}
