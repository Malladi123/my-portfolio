import { Link } from 'react-router-dom';
import '../styles/components/home.css'; // Optional: for styling

const Home = () => {
  return (
    <section className="home">
      <div className="intro">
        <h1>Hi, I'm Venkata Rakesh Malladi</h1>
        <p>
          Frontend engineer focused on building Scalable, Accessible web apps with Modern Frameworks.
        </p>

        <div className="stats-row" aria-hidden>
          <div className="stat">10+ years</div>
          <div className="stat">React · Angular · Typecript · Javascript</div>
          <div className="stat">HTML5 · CSS3 · Angular Material · Bootstrap</div>
          <div className="stat">i18n</div>
        </div>

        <div className="cta-buttons">
          <Link to="/about" className="btn btn--primary">Learn More</Link>
          <Link to="/experience" className="btn btn--primary">View Experience</Link>
          <Link to="/contact" className="btn btn--primary">Contact</Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
