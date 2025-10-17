import styles from '../styles/components/experienceCard.module.css';
import type { ExperienceItem } from '../data/experience';
import type React from 'react';

interface Props extends Partial<ExperienceItem> {
  title: string;
  company: string;
  description: string[];
  location?: string; // make optional explicit
  duration?: string;
}

function ExperienceCard({ title, company, location, duration, description }: Props): React.ReactElement {
  return (
    <div className={styles.experienceCard}>
      <h3>{title}</h3>
      <h4>
        {company}
        {location && (
          <> 	6 <span>{location}</span></>
        )}
      </h4>
      {duration && <p className={styles.duration}>{duration}</p>}
      <ul>
        {description?.map((point, index) => (
          <li key={point || index}>{point}</li>
        ))}
      </ul>
    </div>
  );
}

export default ExperienceCard;
