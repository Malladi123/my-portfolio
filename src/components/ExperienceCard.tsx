import '../styles/components/experience.css'; // Optional: for styling
import type { ExperienceItem } from '../data/experience.ts';

interface Props extends Partial<ExperienceItem> {
  title: string;
  company: string;
  description: string[];
}

const ExperienceCard: React.FC<Props> = ({ title, company, location, duration, description }) => {
  return (
        <div className="experience-card">
        <h3>{title}</h3>
        <h4>{company} – <span>{location}</span></h4>
        <p className="duration">{duration}</p>
        <ul>
            {description.map((point, index) => (
            <li key={index}>{point}</li>
            ))}
        </ul>
        </div>
  );
};

export default ExperienceCard;
