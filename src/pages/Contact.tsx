import { Link } from 'react-router-dom';
import '../styles/components/experience.css';
import cardStyles from '../styles/components/experienceCard.module.css';

const Contact = () => {
    return (
        <section className="experience-section">
            <div className="intro">
                <h2>You can reach me</h2>

                <div className="experience-cards">
                    <div className={cardStyles.experienceCard}>
                        <h3>Contact</h3>
                        <p>
                            Email:{' '}
                            <a
                                href="mailto:malladirakesh12@gmail.com"
                                aria-label="Send email to malladirakesh12@gmail.com"
                            >
                                malladirakesh12@gmail.com
                            </a>
                        </p>
                        <p>
                            Phone:{' '}
                            <a href="tel:+918431033412" aria-label="Call +91 8431033412">
                                +91 8431033412
                            </a>
                        </p>
                    </div>

                    <div className={cardStyles.experienceCard}>
                        <h3>Social</h3>
                        <p>
                            LinkedIn:{' '}
                            <a
                                href="https://www.linkedin.com/in/malladirakesh12/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Visit LinkedIn profile"
                            >
                                linkedin.com/in/malladirakesh12
                            </a>
                        </p>
                        <p>
                            GitHub:{' '}
                            <a
                                href="https://github.com/Malladi123"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Visit GitHub profile"
                            >
                                github.com/Malladi123
                            </a>
                        </p>
                    </div>
                </div>

                <div className="cta-buttons">
                    <Link to="/" className="btn btn--primary">Home</Link>
                    <Link to="/about" className="btn btn--primary">Learn More</Link>
                    <Link to="/experience" className="btn btn--ghost">View Experience</Link>
                </div>
            </div>
        </section>

    );
};

export default Contact;