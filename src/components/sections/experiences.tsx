import { useState } from 'react';
import { EXPERIENCES } from '@/lib/data';
import ExperienceDetails from '@/components/data-display/experience-details';
import SectionHeader from '@/components/data-display/section-header';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

const ExperienceSection = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleExperiences = showAll ? EXPERIENCES : EXPERIENCES.slice(0, 2);

  return (
    <Container className="bg-gray-50" id="experiences">
      <SectionHeader label="Professional Experience" />

      {visibleExperiences?.map((experience, index) => (
        <ExperienceDetails {...experience} key={index} />
      ))}

      {EXPERIENCES.length > 2 && (
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="rounded-full bg-gray-300 hover:bg-gray-400 px-6 py-2 text-gray-800 font-medium shadow transition-colors duration-200"
          >
            {showAll ? 'Show Less' : 'Show More'}
          </button>
        </div>
      )}
    </Container>
  );
};

export default ExperienceSection;
