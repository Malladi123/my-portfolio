import ExperienceCard from '../components/ExperienceCard';
import experience from '../data/experience.ts';
import type { ExperienceItem } from '../data/experience.ts';
import '../styles/components/experience.css';

const Experience = () => {
  return (
    <section className="experience-section">
      <h2>Professional Experience</h2>
      <div className="experience-cards">
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
      </div>
    </section>
  );
};

export default Experience;
