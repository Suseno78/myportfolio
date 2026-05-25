import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import JourneySection from '@/components/sections/JourneySection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <HeroSection />

      {/* 01. About Me */}
      <AboutSection />

      {/* 02. Journey */}
      <JourneySection />

      {/* 03. Skills & Technologies */}
      <SkillsSection />

      {/* 04. Projects */}
      <ProjectsSection />

      {/* 05. Experience (Internships & Certifications) */}
      <ExperienceSection />

      {/* 06. Contact */}
      <ContactSection />
    </>
  );
}
