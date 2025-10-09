import ExperienceCard from '../components/ExperienceCard';
import experience from '../data/experience.ts';
import type { ExperienceItem } from '../data/experience.ts';

const Experience = () => {
  return (
    <section className="experience-section">
      <h2>Professional Experience</h2>
      {experience.map((job: ExperienceItem, index: number) => (
        <ExperienceCard
          key={index}
          title={job.title}
          company={job.company}
          location={job.location}
          duration={job.duration}
          description={job.description}
        />
      ))}
    </section>
  );
};

export default Experience;
