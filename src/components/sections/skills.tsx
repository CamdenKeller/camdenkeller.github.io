import { LANGUAGES, FRAMEWORKS_LIBRARIES, TOOLS_PLATFORMS } from '@/lib/data';
import SectionHeader from '@/components/data-display/section-header';
import TechDetails from '@/components/data-display/tech-details';
import Container from '@/components/layout/container';

const SkillsSection = () => {
  return (
    <Container id="skills">
      <SectionHeader label="Technical Skills" />

      {/* All Skills Together in a single grid, sorted by Languages -> Frameworks -> Technologies */}
      <div className="flex flex-wrap justify-center gap-16 mt-8">
        {[
          ...LANGUAGES,
          ...FRAMEWORKS_LIBRARIES,
          ...TOOLS_PLATFORMS,
        ].map((technology, index) => (
          <TechDetails {...technology} key={index} />
        ))}
      </div>
    </Container>
  );
};

export default SkillsSection;
