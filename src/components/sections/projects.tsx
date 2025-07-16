import { useState } from 'react';
import { PROJECTS } from '@/lib/data';
import ProjectDetails from '@/components/data-display/project-details';
import SectionHeader from '@/components/data-display/section-header';
import Container from '@/components/layout/container';

const ProjectSection = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? PROJECTS : PROJECTS.slice(0, 2);

  return (
    <Container id="projects" className="bg-gray-50">
      <SectionHeader label="Projects" />

      {visibleProjects.map((project, index) => (
        <ProjectDetails
          key={index}
          {...project}
          layoutType={index % 2 === 0 ? 'default' : 'reverse'}
        />
      ))}

      {PROJECTS.length > 2 && (
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

export default ProjectSection;
