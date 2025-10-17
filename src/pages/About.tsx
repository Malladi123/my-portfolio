import { Link } from 'react-router-dom';
import '../styles/components/home.css'; // reuse home hero styles for consistent look

const About = () => {
  return (
    <section className="home about">
      <div className="intro about-intro">
        <h1>About Me</h1>
        <div className="about-grid">
          <div className="about-bio">
            <p>
              I'm Rakesh, a UI/UX-focused frontend engineer experienced in building scalable
              internationalized applications. I care about accessibility, performance and
              maintainable component design.
            </p>
            <p>
              My approach blends design systems, automated testing, and small, measurable
              experiments to improve UX and developer productivity.
            </p>
          </div>

          <aside className="about-side">
            <h3>Skills</h3>
            <ul>
              <li>React, Angular</li>
              <li>TypeScript, Vite</li>
              <li>i18n, a11y</li>
              <li>Design Systems, Storybook</li>
            </ul>
            <div style={{ marginTop: '1rem' }}>
              <Link to="/experience" className="btn btn--ghost">View Experience</Link>
            </div>
          </aside>
        </div>

        <div className="cta-buttons">
          <Link to="/" className="btn btn--primary">Home</Link>
        </div>
      </div>
    </section>
  );
};

export default About;
