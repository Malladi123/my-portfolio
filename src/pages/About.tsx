import { Link } from 'react-router-dom';
import '../styles/components/home.css'; // reuse home hero styles

const About = () => {
  return (
    <section className="home">
      <div className="intro">
        <h1>About Me</h1>
        <p>
          I'm Rakesh, a passionate UI/UX developer with a strong focus on internationalization and localization.
          I blend creative problem-solving with technical precision—whether I'm refining web interfaces or customizing my Tata Punch for aesthetic harmony.
        </p>
        <p>
          I believe in user-centric design, clean code, and thoughtful iteration. My work reflects a balance of form and function.
        </p>
        <div className="cta-buttons">
          <Link to="/" className="btn btn--primary">Home</Link>
          <Link to="/experience" className="btn btn--primary">View Experience</Link>
        </div>
      </div>
    </section>
  );
};

export default About;
