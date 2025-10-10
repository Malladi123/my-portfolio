import ExperienceCard from '../components/ExperienceCard';
import experience from '../data/experience.ts';
import type { ExperienceItem } from '../data/experience.ts';
import { Link } from 'react-router-dom';
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
      <div className="cta-buttons">
        <Link to="/" className="btn btn--primary">Home</Link>
        <Link to="/about" className="btn btn--primary">Learn More</Link>
        <Link to="/contact" className="btn btn--primary">Get in Touch</Link>
      </div>
    </section>
  );
};

export default Experience;
