'use client';

import { useEffect } from 'react';
import TitleSection from '@/components/sections/title';
import ContactSection from '@/components/sections/contact';
import BeyondTechSection from '@/components/sections/beyond-tech';
import SkillsSection from '@/components/sections/skills';
import ExperienceSection from '@/components/sections/experiences';
import ProjectSection from '@/components/sections/projects';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <TitleSection />
      <ExperienceSection />
      <BeyondTechSection />
      <ProjectSection />
      <SkillsSection />
      <ContactSection />
    </>
  );
}
